---
id: index
title: PunchOut Gateway
sidebar_label: PunchOut
original_id: index
---

PunchOut is an adaptable gateway solution to integrate PunchOut and B2B commerce catalog functionality. The PunchOut gateway is a cloud-based integration platform (IaaS), sitting between Elastic Path and a B2B buyers backend purchasing system. Using a PunchOut-enabled e-Procurement system avoids the buyer organization from having to manage a catalog internally within their e-Procurement system. Instead, they use the vendor’s online catalog. The storefront is modified for the PunchOut experience.

B2B buyers initiate a PunchOut shopping experience by arriving on the supplier’s site. The buyer is already authenticated without entering any credentials. The supplier trusts that the PunchOut gateway has authenticated the buyer. The PunchOut gateway passes a signed JWT token to the serverless lambda, which passes the token to Cortex. Cortex authenticates the signature of the JWT token, and it is accepted. The JWT token contains encoded details about the retailer and purchaser.

The buyer browses the online catalog on the storefront, builds a cart and brings the item list back into the e-Procurement system. Buyers often have to follow internal purchasing protocols. For example, a buyer might have to create a request for certain goods and route that for approval as part of internal controls, through the e-Procurement system. After the cart is approved in the e-Procurement system, the purchase order is sent to the vendor. This is as a live integration that pushes the approved purchase order into Elastic Path as an order.

## PunchOut Integration Workflows

The e-Procurement system initiates requests to the PunchOut gateway. The gateway makes requests to the supplier’s website through a proprietary protocol that is supported by the supplier’s e-Commerce software. The PunchOut gateway calls Elastic Path Commerce endpoints through serverless lambdas. The lambdas have no local storage and delegate most of the work to the Cortex API.

### Create a Cart

A B2B purchaser initiates the process to purchase items. The following diagram illustrates the workflow between Elastic Path Commerce and PunchOut:

![Workflow for Elastic Path Commerce and PunchOut](/assets/punchout/version-1.0.x/p2g-workflow-v2.png)

#### Create a cart workflow

1. A B2B purchaser browses the e-Procurement system to make a purchase on behalf of their buying organization.

2. The e-Procurement system presents the B2B purchaser with a list of vendor sites. Each site is a direct link to the PunchOut supported e-commerce site for the PunchOut portal.

3. The e-Procurement system forwards a PunchOut setup request to the PunchOut site.

4. The PunchOut gateway identifies the PunchOut customer and routes the request, accordingly. It sends the new payload to the agreed upon endpoint to the vendor site.

5. The Elastic Path handler endpoint receives the PunchOut setup request including the following details:

    - JWT token, including the organization and user details.
    - PunchOut gateway, including the cart transfer initiation URL.
    - Cart details, is optional and only specified if you want to edit the cart.

        :::note
        The PunchOut gateway cart return URL is where the PunchOut session’s cart and item transfer data is posted.
        :::

6. The B2B purchaser’s cart is created.

7. The storefront URL is returned to the PunchOut gateway.

8. The PunchOut gateway redirects the user’s browser to the storefront URL.

9. The B2B purchaser arrives at the storefront identified as the user/buyer.

### Cart Building and Cart Transfer

Cart transfer is the process after a B2B purchaser’s cart is created and returns to the e-Procurement application. The following workflow process illustrates the process when a B2B purchaser has options to review the cart, save it for later use or delete it.

![Workflow for creating a cart transfer](/assets/punchout/version-1.0.x/p2g-cart-transfer.png)

#### Cart building and transfer workflow

1. The browser redirects the B2B purchaser to the PunchOut site.

2. The B2B purchaser adds products to the cart.

3. The B2B purchaser clicks **Transfer Cart**.

    The **Transfer Cart** button informs the PunchOut Gateway to retrieve the cart contents from Elastic Path Commerce.

4. The PunchOut gateway requests the cart contents from the Elastic Path-PunchOut lambda.

5. Elastic Path Cortex sends the cart contents back to the PunchOut Gateway.

6. The PunchOut gateway translates the cart contents into a `PunchOutOrderMessage` and sends the information back to the e-Procurement system.

7. B2B purchaser reviews the cart.

8. B2B purchaser saves the requisition.

9. B2B purchaser has the option to delete or approve the requisition. If the B2B purchaser approves the requisition, a purchase order is created.

10. B2B purchaser sends the cart for approval to another user.

11. If the other user approves, the approval results in the creation of a purchase order.

### Edit a Cart

A B2B purchaser can edit an existing cart by either restarting an existing session or a previous session where items are already populated in the cart.

![Workflow for editing a cart](/assets/punchout/version-1.0.x/p2g-edit-cart-v2.png)

#### Edit a cart workflow

1. The browser redirects the B2B purchaser to the PunchOut site.

2. The B2B purchaser selects an existing cart.

3. The B2B purchaser edits the cart, creates a re-PunchOut using `PunchOutSetUpRequest` edit to items in payload.

4. The PunchOut gateway requests the setup request from the Elastic Path-PunchOut lambda.

5. Elastic Path Cortex sends the cart contents back to the PunchOut gateway.

6. The PunchOut gateway translates the cart contents into a `PunchOutOrderMessage` and sends the storefront URL back to the e-Procurement system.

7. The browser redirects to the storefront.

### Order Create

The following workflow illustrates the process when the procurement application sends an approved Purchase Order (PO) to Elastic Path and then creates the order.

![Workflow for creating an order](/assets/punchout/version-1.0.x/p2g-order-create.png)

#### Order create workflow

1. The e-Procurement site sends the PO to the PunchOut gateway.

2. The PunchOut gateway requests the Elastic Path PunchOut lambda to create the sales order.

3. Elastic Path Cortex sends the cart details, including line items and shipping address, back to the Elastic Path PunchOut lambda.

4. (Optional) The Elastic Path PunchOut lambda sends back a reject order status to the PunchOut Gateway.

5. (Optional) The PunchOut gateway forwards the cart rejection and sends the invalid PO message back to the e-Procurement system.

6. (Optional) The PunchOut gateway sends the cart approval order status to the PunchOut gateway.

7. (Optional) The PunchOut gateway forwards the cart approval and sends the valid PO message back to the e-Procurement system.

8. The browser redirects to the storefront.

## Configuration Steps

To configure PunchOut, Elastic Path Commerce, and the Elastic Path Web Storefront, perform the following steps in order:

1. [Configure and deploy the Elastic Path PunchOut Lambda’s](deploying.html). For more information about the API, see [Lambda API](api.html).

1. [Set up the Elastic Path integration in your PunchOut gateway and configure Elastic Path Commerce](configuring.html).

1. [Configure and test your front-end](front-end.html).
