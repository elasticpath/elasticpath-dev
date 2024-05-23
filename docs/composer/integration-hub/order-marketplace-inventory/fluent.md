---
title: Integrating with Fluent Commerce
nav_label: Fluent Integration
sidebar_position: 20
---

You can quickly and easily integrate Commerce with Fluent Commerce using the **Integrations** hub in **Commerce Manager**. Integration with Fluent Commerce enables you to manage your orders for your business. Fluent Commerce also handles product inventory because it provides you a complete view of your stock, which can be published in all channels, including store front.

## How the Fluent Commerce Integration Works

This is how integration with Fluent Commerce works:

- Products are synched from Composable Commerce to Fluent Commerce.
- Customers are synched from Composable Commerce to Fluent Commerce.
- Orders are sent from Composable Commerce to Fluent Commerce – you can configure webhook events for the following Commerce event types:

    - `order.created`
    - `order.updated`
    - `order.fulfilled`
    - `order.paid`
    - `order.authorized`

    When you are integrating with Composable Commerce, you can setup webhook events for multiple scenarios, for example, you have triggered a webhook for the `order.paid` event – orders from Composable Commerce are sent to Fluent Commerce when the payment is processed.

- Orders are captured in Composable Commerce – after a payment for an order is authorized in Composable Commerce, the order details are sent to Fluent Commerce and the order items are allocated. You can trigger webhook event to capture the order in Composable Commerce.
- Orders can be marked as `paid` in Composable Commerce – you can trigger a webhook event to mark an order as paid when it is shipped to a customer. For more information, see [Mark Orders as Paid in Commerce Manager](/docs/composer/integration-hub/order-marketplace-inventory/fluent#mark-orders-as-paid-in-commerce-manager).

## Integrating Composable Commerce with Fluent Commerce

### Prerequisites

You must complete the following before configuring the integration with Fluent Commerce.

#### Composable Commerce connection details

You can get the following API credentials in Commerce Manager from **SYSTEM** > **Application Keys**:

- **Token URL**: The API token URL:

   - EU: `https://euwest.api.elasticpath.com/oauth/access_token`
   - US: `https://useast.api.elasticpath.com/oauth/access_token`
    
:::note
When integrating with third-party providers, we recommend you use the closest region in the third-party service to reduce latency as much as possible. For more information, see [Regions and URLs table](/guides/Getting-Started/elastic-path-domains#regions-and-ur-ls).
:::
    
- **Client ID**: Your Commerce Client ID.
- **Client Secret**: Your Commerce Client Secret.

:::note
You must log in to Commerce Manager as a user with seller admin privileges.
:::

#### Fluent Commerce connection details

You must get the following details from Fluent support:

- **Fluent Host**: The Fluent Commerce API host URL.
- **Retailer Username**: Username to access the Fluent Commerce account as a retailer.
- **Retailer Password**: Password to access Fluent Commerce account as a retailer.  
- **OAuth 2.0 Client Id**: Client ID to connect with Fluent Commerce APIs.  
- **OAuth 2.0 Client Secret**: Client secret to connect with Fluent Commerce APIs.  
-  **Retailer ID**: The retailer ID of Fluent Commerce where you would like to sync your orders, customers, and products.    
- **Product Catalog Reference**: The product catalog reference of Composable Commerce where you would like to sync all your products.  

### Configuring Fluent Commerce integration 

Once you have completed the [Prerequisites](/docs/composer/integration-hub/order-marketplace-inventory/fluent#prerequisites), you are ready to configure the Fluent Commerce integration:

1. In Commerce Manager, under **COMPOSER**, click **Integrations Hub**.
2. Under **Order Management**, click **Fluent Commerce**.
3. Click **Configure**. A window appears where you must configure the integration details.
4. In the **Initial Configuration**, click **Next**.
5. In the **Connection Details**:  

    1. In the **Commerce Connection** section, enter the following appropriate values:
    
        - **Client ID**
        - **Client Secret**
        - **Token URL**
    
          For more information, see [Composable Commerce connection details](#commerce-cloud-connection-details).
    
    1. Click **Connect**. The authorization is successfully completed.
    
    1. In the **Fluent Commerce Connection** section, enter the following appropriate values: 
    
        - **Fluent Host**
        - **Retailer Username**
        - **Retailer Password**
        - **OAUth 2.0 Client ID**
        - **OAuth 2.0 Client Secret**

        For more information, see [Fluent Commerce connection details](#fluent-commerce-connection-details).

6. Click **Next**.
7. In the **GraphQL Mutation** section, click any box to modify the default values of the following based on your business requirement:

    - **Create Customer Mutation**
    - **Update Customer Nutation**
    - **Create Order Mutation**
    - **Create Order and Customer Mutation**
    - **Create Standard Product Mutation**
    - **Update Standard Product Mutation**
    - **Create Variant Product Mutation**
    - **Update Variant Product Mutation**

8. Click **Next**.
9. In the **Templates** section, click any box to modify the template values based on your business requirement:

    - **Order Template**: A default template is provided to create or update orders in Fluent Commerce.  
    - **Customer Template**: A default template is provided to create or update customers in Fluent Commerce.  
    - **Standard Product Template**: A default template is provided to create or update products in Fluent Commerce.  
    - **Variant Product Template**: A default template is provided to create or update variant products in Fluent Commerce.   

    :::note
    GraphQL uses these templates as variables.
    :::

10. Click **Next**.
11. In the **Configuration** section, enter the following appropriate values:

    - **Fluent Retailer ID**
    - **Product Catalog Reference**

      For more information, see [Fluent Commerce connection details](#fluent-commerce-connection-details).

    - **Enable Customer Webhook**: Enable this if you want to configure a webhook event in Composable Commerce to be triggered when a customer is created or updated.
    - **Enable Product Webhook**: Enable this if you want to configure a webhook event in Composable Commerce to be triggered when products are created or updated while publishing a catalog.
    - **Enable Order Webhook**: Enable this if you want to configure a webhook event in Composable Commerce to be triggered when orders are created or updated.
    - **Order Events**: Click **+ Add Value** to add multiple order events for which you want to configure webhook events. By default, `order.paid` is selected. You can select any of the following values:

        - `order.created`
        - `order.updated`
        - `order.fulfilled`
        - `order.paid`
        - `order.authorized`

    :::note
    To check the webhook events that you have configured in Commerce Manager, under **SYSTEM**, click **Store Settings**, and then **Webhooks**.
    :::

12. Click **Finish**.

## Verifing Composable Commerce and Fluent Commerce Integration

There are multiple ways to verify the success of this integration. Here are two examples provided:

### Option 1

1. In Commerce Manager, publish a product catalog. For more information, see [Publishing Catalogs](/docs/commerce-manager/product-experience-manager/catalogs/catalog-configuration#publishing-catalogs).
1. On the **Products** page, click any product to view the SKU.
1. Copy the product SKU.
1. Go to Fluent Commerce.
1. Click **Product Catalogues** under **Inventory & Product**.
1. Click **VARIANT PRODUCTS**.
1. In the search bar, click **Ref:**, and then enter the product SKU that you have copied in Commerce Manager. The product details are displayed in Fluent Commerce.

### Option 2

In the storefront, register yourself as a new customer. 

If your integration is successful, you can view the new customer account details both in Composable Commerce and Fluent Commerce:

 - In Commerce Manager, under **Customers and Accounts**, click **Customers**.
 - In Fluent Commerce, under **Order Management**, click **Customer**.

## Mark Orders as `Paid` in Commerce Manager

When a customer places an order in the storefront and completes the payment, the order status in Fluent Commerce is updated to `COMPLETE`. However, the order payment status in Commerce Manager still appears as `Authorized`. To mark this order as `Paid` in Commerce Manager, perform the following steps:

1. In Commerce Manager, under **COMPOSER**, click **Integrations Hub**.
2. Click **Fluent Commerce**.
3. Under **Trigger Details**, click **Capture Order (Elastic Path)**.
4. Copy the webhook URL.
5. Go to Fluent Commerce.
6. Under **Orchestration**, click **Orchestration**.
7. In the list, click **ORDER**. This displays the rule-based workflows based on which the order status that is modified in Commerce Manager.
8. Click **HOME DELIVERY**. The **Workflow Editor** appears.
9. In the **ORDER** section, click ![Order Complete Status](/assets/order-complete-status.png) that appears before **COMPLETE**. The **OrderComplete** window appears.
10. In the **Rules** section, replace the webhook URL with the one you have copied from Commerce Manager.
    
    When an order payment is complete, a webhook event is now triggered in Commerce Manager, and the order payment status is updated to `Paid`.

## Demos

- Watch the following video to learn how to integrate Commerce with Fluent Commerce using the **Integrations Hub** in Commerce Manager:

    <iframe width="560" height="315" src="https://www.youtube.com/embed/UFifBu3CxbM" title="Integrating with Fluent Commerce" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

- Watch the following video to verify the Fluent Commerce integration with Commerce:

    <iframe width="560" height="315" src="https://www.youtube.com/embed/OR4XjL43MMM" title="Verifying Fluent Commerce Integration" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
