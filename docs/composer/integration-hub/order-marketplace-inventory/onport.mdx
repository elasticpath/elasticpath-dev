---
title: Integrating with Onport
nav_label: Onport Integration
sidebar_position: 10
---

You can quickly and easily integrate Commerce with Onport using the **Integrations Hub** in Commerce Manager. Onport supports marketplace and/or dropship vendor models. Integrating Onport with Commerce means you can enable support for marketplace and dropship vendor models in Commerce. The **Onport Integration** supports the following features.

- **Product** changes in Onport causes webhook events to be generated to change product data in Commerce.
- **Inventory** changes in Onport causes webhook events to be generated that increment or decrement inventory in Commerce.
- **Price** changes in Onport causes webhook events to be generated to change price information in Commerce.
- **Order** changes in Commerce, like creating and updating, trigger webhook events that subsequently cause orders to be created and updated in Onport. The following Commerce event types can be used to generate webhook events.

    - `order.created`
    - `order.updated`
    - `order.fulfilled`
    - `order.paid`
    - `order.authorized`

- **Fulfilment** vendor fulfil order item changes in Onport trigger webhook events that are subsequently updated in Commerce. This includes tracking information.
- **Cancellation** if a vendor is unable to fulfill an item then they can cancel the item. This triggers a webhook in Onport. Based on the webhook, Commerce updates its data to reflect cancellation of the item.
- **Split Orders** orders generated in Commerce causes webhook events to be generated in Onport that allow Onport to split an order based on vendors. 

For more information, watch a video.

<iframe width="560" height="315" src="https://www.youtube.com/embed/zi4ewTPiGjU" title="Integrating with Onport" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Synchonizing Onport Product Data With Commerce Product Data

As part of the Onport Integration, changes in product data in Onport automatically updates product data in Commerce. This is achieved using the Onport Integration Product Template. A Webhook in Onport is configured as part of this integration, so no manual intervention is required.

1. In Commerce, create your [templates](/docs/commerce-manager/product-experience-manager/extending-products/templates). Any Onport product attributes should have corresponding attributes in your Commerce templates.
1. When configuring the Onport Integration in **Integrations Hub**, from **Template** page, click **Edit** underneath **Product Template**.
1. Update the **Product Template** to map the Commerce product attributes to the Onport product attributes. For example, suppose you want to save Onport variant id, vendor id and vendor name in Commerce, along with the product clothing material, if that exists.

    The example below shows how this should look in the **Product Template**.

    ```json
    "attributes":[[
    {
    "templateSlug":"products(extensions)",
    "templateAttributes": [
      [
        {
          "fieldSlug":"ep_brand",
          "type":"string",
          "value":customFieldVariants.custom_field[name='brand'].value
        },
        {
          "fieldSlug":"ep_material",
          "type":"string",
          "value":customFieldVariants.custom_field[name='material'].value
        },
        {
          "fieldSlug":"onport_variant_id",
          "type":"string",
          "value": $string(variant.id)
        }
      ]  ~> $filter(function($v, $i, $a) {
        $v.value
      })
    ]
    }
    ]] ~> $filter(function($v, $i, $a) {
    $count($v.templateAttributes) > 0
    })
    ```

### Pre and Post Processors - Product
There is pre and post processor configuration for products. This is where you can configure external endpoints to do any pre or post processing. For example, if you have an external system which can manipulate images or update descriptions using Generative AI then add the endpoint as part post processor.

## Synchronizing Onport Price Data With Commerce

If **Enable Price Webhook** is enabled then a webhook is setup in Onport by the integration and all the price details are stored in Commerce. Prices are loaded as per the selected pricebook during the configuration. A default template is provided with the integration. You must not change `priceBookName` in the template. You must change the currency and also define whether this amount includes tax.

## Synchronizing Onport Inventory Data With Commerce

If **Enable Inventory Webhook** is enabled then a webhook is setup in Onport by the integration and all the inventory details are stored in Commerce.

## Synchronizing Commerce Order Data With Onport Order Data

As part of the Onport Integration, changes in orders in Commerce automatically updates order data in Onport. Suppose you are adding shipping charges to an order and the shipping SKU is STANDARD-DELIVERY. You must change the Order Template so that this is available in Onport. A webhook in Commerce is configured as part of the integration, so no manual intervention is required.

1. You must exclude the shipping sku from the line item so that it does not appear as part of the product in Onport.
1. When configuring the Onport Integration in **Integrations Hub**, from **Template** page, click **Edit** underneath **Product Template**. The example below shows how this should look in the **Product Template**.

    ```json
    "lineItems": [
    payload.included.items[sku!='STANDARD-DELIVERY' and meta.display_price.with_tax.unit.amount >= 0].{
    "externalId": $$.payload.data.id & "_" & id,
    "name": name,
    "quantity": quantity,
    "price": meta.display_price.with_tax.unit.amount / 100,
    "taxable": false,
    "variant": {
        "sku": sku,
        "externalId": sku
    }
    }
    ]
    ```

    :::note
    You must not change the `lineItems.*.externalId` value. This is because it is in the format of the Elastic Path Order ID concatenated with the Elastic Path Order Item ID separated with a hyphen. This value is required during the fulfillment and cancellation process.
    ::: 

1. From **Template** page, click **Edit** underneath **Order Template**. The example below shows how this should look in the **Order Template**.

    ```json
    "options": {
    "findOrCreateChannelVariant": true
    },
    "shipping": [
    payload.included.items[sku='STANDARD-DELIVERY' and meta.display_price.with_tax.unit.amount >= 0].{
    "code": "shipping-fee",
    "name": "Shipping Fee",
    "serviceLevel": "shpping-service-level",
    "price": meta.display_price.with_tax.unit.amount / 100
    }
    ]
    ```

### Pre and Post Processors - Orders
There are pre and post processor configuration for orders. This is where you can configure external endpoints to do any pre or post processing. For example, if you have an external system which can send email then add the endpoint as part post processor.

## Synchronizing Onport Fulfillment Data With Commerce

Vendors in Onport are able to initiate fulfillment/shipping process. For example, add a shipping carrier, tracking information, pick and pack, and so on. If **Enable Fulfilment Webhook** is enabled then a webhook is set up in Onport by the integration and all the fulfillment details are stored in Commerce.

The integration also creates a custom flow with a slug as `fulfilment_items` and the following fields are created in the flow:

- Order Item Id (orderitem_id)
- Fulfilled Quantity (fulfilled_quantity)
- Fulfilled SKU (fulfilled_sku)
- Total Quantity (total_quantity)
- Tracking URL (tracking_url)
- Label URL (label_url)
- Tracking Number (tracking_number)
- External Instance ID (instance_id)
- External Fulfilment ID (fulfilment_id)

An `order` level flow and fields are created as follows:

- Fulfillments (fulfilments)
- Partially Fulfilled (partially_fulfilled)

An `order_items` level flow and fields are created as follows:

- Fulfilled Quantity (fulfilled_quantity)
- Fulfilment Status (fulfilment_status)

### Pre and Post Processors - Fulfilment
There is pre and post processor configuration for fulfilment. This is where you can configure external endpoints to do any pre or post processing. For example, if you have an external system that can send dispatch emails with tracking information then add the endpoint as part post processor.

## Synchronizing Onport Cancellation Data With Commerce

During the fulfillment process, vendors can cancel partial orders or complete orders. If the **Enable Order/Item Cancellation Webhook** is enabled then the cancellation is processed in Commerce.

:::note
A Webhook in Onport needs to be set up manually. 

1. Log in into Onport.
2. Select **Integrations**.
3. Select **API**.
4. Provide a URL.
5. Select **TRIGGER WHEN AN ACTION IS TRIGGERED ON AN INSTANCE**. 
6. In **Resource**, select **Purchases**. 
7. In **Instance Method**, select **Cancel**. 
8. Select **Add Webhook**.
:::

The integration also creates custom flow with slug as `cancelled_items` and following fields are created in this flow:

- Order Item Id (orderitem_id)
- Cancelled Quantity (cancelled_quantity)
- Total Quantity (total_quantity)
- External Instance ID (instance_id)
- External Sale Return ID (sale_return_id)
- Refund Amount (refund_amount)

An `order` level flow and fields are created as follows:

- Cancellations (cancellations)
- Partially Cancelled (partially_cancelled)

An `order_items` level flow and fields are created as follows:

- Cancelled Quantity (cancelled_quantity)
- Cancellation Status (cancellation_status)

### Pre and Post Processors - Cancellation
There is pre and post-processor configuration for cancellation. This is where you can configure external endpoints to do any pre or post-processing. For example, if you have an external system that can send cancellation emails or refund the cancelled item amount then add the endpoint as part post-processor.

## Order and Shipping Status in Commerce

- When all the items/quantities in the order are shipped then shipping status in Commerce is changed to `fulfilled`.
- When all the items/quantities in the order are cancelled then the order status in Commerce is changed to `cancelled`.
- When only a few items/quantities are shipped then the order and shipping status in Commerce is not changed, but `partially_fulfilled` is `true` on the order level.
- When some of the items/quantities are shipped, some are cancelled, and some still require action from the vendor, then the order and shipping status in Commerce is not changed, but `partially_fulfilled` and `partially_cancelled` is `true` on the order level.
- When some items/quantities are shipped and the remaining are cancelled, meaning the vendor has taken action on the remaining items/quantities, then the order status does not change but the shipping status in Commerce is changed to `fulfilled`. In addition, `partially_cancelled` remains `true` on order level.

## Prerequisites

You must have completed the following tasks in Onport before configuring the integration in Commerce.

### Create an Onport Channel ID

You must provide a custom Onport **Channel ID** when you are configuring the  Onport Integration in **Integrations Hub**. See [Onport Dev Docs](https://composable.jetti.io/).

1. Login to Onport.
1. Go to **Integrations**.
1. Click **Custom Channel** to create a new custom channel. The **Channel ID** forms part of the custom channel URL, once the custom channel is created.

### Retrieve the Onport Custom Channel ID

Once you have created a custom channel ID, you must retrieve it using `GET /custom-channels/<id>.json` from the Onport Custom Channel API where *id* is the channel ID that forms part of the channel URL that you created above. An example response is shown below.

```json
{
  "id": 143,
  "companyId": "3001",
  "channelId": 5365,
  "name": "Commerce",
  "resourceLocation": "null"
}
```

## Collecting Your Setup Information

Before you begin configuring your Onport integration in Commerce Manager, you need to collect the necessary setup information from Onport and Commerce Manager.

### Collecting Onport Setup Information

Collect the following setup information from Onport.

| Option | Description                            |
|:------------------------------------|:---------------------------------------|
| **API Base URL**                    | Your Onport API Base URL. Default value is `https://api.jetti.io/api`. |
| **API Key**                       | Your Onport API Key. |

### Collecting Commerce Manager Setup Information

Collect the following Commerce API keys. You can find this information in **SYSTEM** > **Application Keys** in Commerce Manager when logged in as a user with Seller Admin privileges.

| Commerce API Key | Description                            |
|:------------------------------------|:---------------------------------------|
| **API Base URL**                    | Your Commerce API Base URL. |
| **Client ID**                       | Your Commerce Client ID. |
| **Client Secret**                   | Your Commerce Client Secret. |

:::note
When integrating with third-party providers, we recommend you use the closest region in the third-party service to reduce latency as much as possible. See [Regions and URLs table](/guides/Getting-Started/elastic-path-domains#regions-and-ur-ls).
:::

## Configuring the Onport Integration

Once you have:

- [Understood the prequisites](#prerequisites).
- [Collected your setup information](#collecting-your-setup-information).

You are ready to configure the Onport integration in **Integrations Hub**.

1. In Commerce Manager, go to **COMPOSER** > **Integrations Hub**.
1. Under **Order Management, Marketplace and Inventory Integrations**, click **Onport Integration**. The **Onport** integration guides you through the steps you need to follow to complete the integration.
1. Click **Next**. The **Trigger details** consist of some details about the **Onport** integration.
1. Click **Next**. The **Connection** page is displayed.
1. Complete the information in the **Connection** page.

    - **Client-ID**  - Your Commerce Client ID.
    - **Client-Secret** - Your Commerce Client Secret.
    - **Token URL** - Your Commerce API Token URL.

1. Click **Connect** to make sure that the authentication is completed successfully.
1. Complete the **Onport Connection** credentials.

    - **API Base URL**  - Your Onport API Base URL. Default value is `https://api.jetti.io/api`.
    - **API Key** - Your Onport API Key.

1. In **Onport Channel ID**, provide your Onport Channel ID. See [Create an Onport Channel ID](#create-an-onport-channel-id).
1. Click **Next**. The **Webhook Setup** page is displayed. From this page, decide which webhooks you want to set-up, depending on your requirements. The Onport Integration automatically creates the webhooks, once you have finished configuring the integration.

    :::caution
    Do not change any API keys for the webhooks. The webhooks are authorized using the `configuration.secret_key` value in the request body. Configuring an API key directly on a webhook results in a non-functional integration.
    :::

    | Option                                                      | Required | Description                                                                                                                                               |
    |-------------------------------------------------------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
    | **Enable Order Webhook**                                    | Optional | Turn on the **Enable Order Webhook** toggle if you want orders in Commerce to be integrated with Onport.                                                  |
    | **Enable Pre Processor Webhook (Order)**                    | Optional | Turn on the **Enable Pre Processor Webhook (Order)** toggle and provide an **Endpoint URL** if you want any pre processors for orders.                    |
    | **Enable Post Processor Webhook (Order)**                   | Optional | Turn on the **Enable Post Processor Webhook (Order)** toggle and provide an **Endpoint URL** if you want any post processors for orders.                  |
    | **Enable Fulfilment Webhook**                               | Optional | Turn on the **Enable Fulfilment Webhook (Order)** toggle if you want fulfillments in Onport to be integrated with Commerce.                               |
    | **Enable Pre Processor Webhook (Fulfilment)**               | Optional | Turn on the **Enable Pre Processor Webhook (Fulfilment)** toggle and provide an **Endpoint URL** if you want any pre processors for fulfilment.           |
    | **Enable Post Processor Webhook (Fulfilment)**              | Optional | Turn on the **Enable Post Processor Webhook (Fulfilment)** toggle and provide an **Endpoint URL** if you want any post processors for orders.             |  
    | **Enable Order/Item Cancellation Webhook**                  | Optional | Turn on the **Enable Order/Item Cancellation Webhook** toggle if you want order or item cancellation in Onport to be integrated with Commerce.            |
    | **Enable Pre Processor Webhook (Order/Item Cancellation)**  | Optional | Turn on the **Enable Pre Processor Webhook (Order/Item Cancellation)** and provide an **Endpoint URL** if you want any pre processors for cancellation.   |
    | **Enable Post Processor Webhook (Order/Item Cancellation)** | Optional | Turn on the **Enable Post Processor Webhook (Order/Item Cancellation)** and provide an **Endpoint URL** if you want any post processors for cancellation. |
    | **Enable Product Webhook**                                  | Optional | Turn on the **Enable Product Webhook** toggle if you want product updates in Onport to update product data in Commerce.                                   |
    | **Enable Pre Processor Webhook (Product)**                  | Optional | Turn on the **Enable Pre Processor Webhook (Product)** and provide an  **Endpoint URL** if you want any pre processors for products.                      |
    | **Enable Post Processor Webhook (Product)**                 | Optional | Turn on the **Enable Post Processor Webhook (Product)** and provide an  **Endpoint URL** if you want any post processors for products.                    |
    | **Enable Inventory Webhook** | Optional | Turn on the **Enable Inventory Webhook** toggle if you want inventory changes in Onport to increment or decrement inventory in Commerce.                  |
    | **Enable Price Webhook** | Optional | Turn on the **Enable Price Webhook** toggle if you want price changes in Onport to change price information in Commerce.                                  | 

1. *Applies to **Enable Order Webhook** only*. You must specify the order events that you want to generate webhook events for. 
    1. In **Order Events**, select the events from the **Value** list. 
    1. Select **+Add value** to add more events. You can select one or all of the following:

       - `order.created`
       - `order.updated`
       - `order.fulfilled`
       - `order.paid`
       - `order.authorized`

   1. Add an **Onport Custom Channel ID**. See [Retrieve the Onport Custom Channel ID](#retrieve-the-onport-custom-channel-id)
   1. Add a secure API key as part of **Elastic Path Webhook API Key**. This is the `secret_key` used when setting up the order webhook in Elastic Path.

1. Click **Next**. The **Templates** configuration page is displayed. 
1. Click **Edit** for the request template you want to edit. See [Synchonizing Onport Product Data With Commerce Product Data](#synchonizing-onport-product-data-with-commerce-product-data), [Synchronizing Commerce Order Data With Onport Order Data](#synchronizing-commerce-order-data-with-onport-order-data) and [Synchronizing Onport Price Data With Commerce](#synchronizing-onport-price-data-with-commerce).
1. Click **Next**. The **Config** configuration page is displayed. 
1. (Optional) If you want to exclude any SKUs from the fulfillment or cancellation process then add the SKUs. For example, you must exclude your shipping-related SKUs.
1. Select the price book whose price you want to add or update.
1. Click **Finish**. Your integration is enabled.

## Using Onport Integration

To change any configuration details in your Onport integration, open your Onport Integration and go to **Summary** > **Reconfigure**.

In addition, from **Summary**, you can view, pause or delete your Onport integration.

If there is an update to the Commerce Onport integration, a message is displayed in **Summary**. Click **Update** to update your integration. You are guided through the steps to configure your integration.

## How To Get Fulfilment And Cancellation Data On Commerce Order API

Use the [Get An Order](https://elasticpath.dev/docs/carts-orders/orders/orders-api/get-an-order) API with include as `include=fulfilments,items,cancellations` to retrieve fulfillment and cancellation data for Commerce orders.

## Troubleshooting the Onport Integration

You can debug any issues in **Executions**. Click an execution to see the execution details. The **Logs** shows the output and any errors or warnings.

From **Step Outputs**, you can select a step to see its output. You can retry an individual step.
