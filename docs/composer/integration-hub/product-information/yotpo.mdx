---
title: Integrating with Yotpo
nav_label: Yotpo Integration
sidebar_position: 3
---

You can quickly and easily integrate Commerce with Yotpo using the **Integrations Hub** in Commerce Manager. Integration with Yotpo enables your customers to provide ratings and reviews in the storefront for the products they purchased. You can also sync the customer feedback with any search provider that you use; this displays the average customer ratings and reviews received for a product in the storefront.

## How the Yotpo Integration Works

This is how the integration of Commerce with Yotpo works.

1. Whenever you publish a catalog, all the products that are part of the publish are created/updated in Yotpo.

   The first time a catalog is published, a full publish of the catalog is performed. The second time a catalog is published, a delta publish is performed. This means only the changes since the last publish of a catalog are published.

   The first time you want to synchronize a catalog with Yotpo, a full publish of the catalog must be performed. If a catalog is already published, before you configured the Yotpo Integration, you should delete all releases of the catalog and publish the catalog again.

   If you do this, and you are using the same catalog in other integrations, then this causes all the products in your other integrations to also be created again. For example, if you are using the catalog with an Algolia integration then all the products are synced with Algolia again.

2. The following Commerce information is shared with Yotpo:

    * Products:

        * Products with child products
        * Products with no child products
        * Child products

    * Orders: Both `order.created` and `order.fulfilled` information is synced with Yotpo.
    * Customers

3. Average ratings and total number of reviews received for a product in Yotpo are shared with Elastic Path Commerce Cloud, and stored with the relevant product as template data.

:::note
When a customer places an order in your storefront, an email is sent to the customer for providing feedback on the products purchased. This email is sent after a specific number of days; you can configure the time in Yotpo.
:::

## Prerequisites

You must complete the following before configuring the integration with Yotpo.

### Collecting Commerce Manager Setup Information

Collect the following Commerce API keys. When you log in to Commerce Manager as a Seller Admin, you can find this information in **SYSTEM** > **Application Keys** in Commerce Manager.

| Commerce API Key                   | Description                                    |
|:-----------------------------------|:-----------------------------------------------|
| **API Base URL**                   | Your Commerce API Base URL.                    |
| **Client ID**                      | Your Commerce Client ID.                       |
| **Client Secret**                  | Your Commerce Client Secret.                   |

:::note
When integrating with third-party providers, we recommend you use the closest region in the third-party service to reduce latency as much as possible. See [Regions and URLs table](/guides/Getting-Started/elastic-path-domains#regions-and-ur-ls).
:::

### Collecting Yotpo connection details

You must get the following details from Yotpo:

| Option            | Description                                                                                            |
|:------------------|:-------------------------------------------------------------------------------------------------------|
| **Token URL**     | The API token URL of your Yotpo account. By default, the value is `https://api.yotpo.com/oauth/token`. |
| **Client ID**     | Your Yotpo Client ID. In Yotpo, it might be **Store ID**, **App ID**, or **App Key**.                  |
| **Client Secret** | Your Yotpo Client Secret.                                                                              |

## Configuring Yotpo Integration

Once you have completed the [Prerequisites](#prequisites), you are ready to configure the Yotpo integration:

1. In Commerce Manager, under **COMPOSER**, click **Integrations Hub**.
2. Under **Product Information**, click **Yotpo**.
3. Click **Configure**. The integration guides you through the steps you need to follow.
4. Click **Next**. The **Connections** pane is displayed.
5. Enter the following details in **Commerce Connection**:

    - **Client ID**
    - **Client Secret**
    - **Token URL**

   For more information, see [Commerce connection details](#commerce-cloud-connection-details).

6. Click **Connect**. The authorization is successfully completed.
7. In **Yotpo Connection**, enter the following values:

    - **Client ID**
    - **Client Secret**
    - **Client Token URL**

   For more information, see [Yotpo connection details](#yotpo-connection-details).

8. Click **Connect**. The authorization is successfully completed.
9. Click **Next**.
10. In **Configurations**, configure the following:

    | Configuration                         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
    |---------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | **Enable Catalog Selection Criteria** | Select this checkbox to either include or exclude catalogs from being published to Yotpo. You can specify multiple catalogs that you want to include or exclude from sharing with Yotpo. <ol><li>Select the **Enable Catalog Selection Criteria** checkbox.</li><li>In the **Selection Rule** box, select `include` or `exclude`.</li><li>Click [Add Multiple Catalogs to Yotpo](/assets/add-catalogs-yotpo.png) to add the catalogs that you want to include or exclude from publication.  You can add multiple catalogs to include or exclude from publication. **Note**: If you do not select this checkbox and specify your selection, all product catalogs are shared with Yotpo.</li></ol> |
    | **Enable Product Webhook**            | Select this checkbox to create webhook events for any product in Commerce. The product information is shared with Yotpo as part of this integration. By default, the checkbox is selected and `catalog-release.updated` event is created.                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
    | **Enable Order Webhook** | Select this checkbox to create webhook events for orders in Commerce. The order details are shared with Yotpo as part of this integration. In the **Events** list, select the specific order event for which you want to create the webhook. For more information on order events, see [Observable Events](http://localhost:3000/docs/api/integrations/integrations-introduction#observable-events). By default, the checkbox is selected and the default event is `order.paid`. **Note**: In the **Events** list, we recommended that you select `order.fulfilled`. So, when a order is complete, a webhook event is generated in Commerce, and the order details are shared with Yotpo.                                            | 
    | **Enable Customer Webhook** | Select this checkbox if you want to create webhook events for customer information in Commerce. The customer details are shared with Yotpo as part of this integration. Click [Add Customer Events](/assets/add-customer-events-yotpo.png) to add the events for which you want to create webhooks in Commerce by default, `customer.selected` and `customer.updated` are added. You can remove these default events too and add specific customer events as per your requirements. For example, select `customer.deleted` if you want to disable customer status in Yotpo when a customer account is deleted in Commerce.                                                                       |

11. Click **Next**.
12. In **Templates**, you can find the default request templates that contain the parameters for the integration to function correctly. Depending on your requirements, you can edit the templates, adding any data that Yotpo supports. See [Yotpo Product API Documentaion](https://core-api.yotpo.com/reference/products#product-properties).

    - **Product Template**

      This template is used to create and/or update product variants in Yotpo. Here is a snapshot of the default product template.
        
         ```json
        [
          $map(products, function($product) {
              {
                  "request": {
                      "sku": $product.attributes.sku,
                      "external_id": $product.id,
                      "name": $product.attributes.name,
                      "description": $product.attributes.description,
                      "status": $product.attributes.status = 'live' ? 'active' : 'draft',
                      "handle": $product.attributes.slug,
                      "image_url": $$.images[id=$product.relationships.main_image.data.id].link.href,
                      "custom_properties": {
                          "is_blocklisted": $product.attributes.status = 'live' ? false : true
                      }
                  },
                  "parent_product_id": $filter($product.attributes.base_product_id, function($e) { $e != '' })
              }
          })
        ]
      ```
      :::note
    
        - [JSONata](http://docs.jsonata.org/overview.html) is the query language used for the product template. JSONata provides JSON Path style queries and adds support for more advanced queries and even transformations.
        - Do not remove or modify the `parent_product_id`.

      :::

    - **Order Template**

      This template is used to create and/or update order attributes in Yotpo.
    
    - **Customer Template**

      This template is used to create and/or update customer information in Yotpo. You can add any of the supported customer attributes in the template. For example, you can include a customer contact number so when customer information is sent to Yotpo, it contains the contact number. Here is a snapshot of the default customer template.

        ```json
         {
           "customer": {
                "external_id": payload.data.id,
                "email": payload.data.email,
                "first_name": $split(payload.data.name, ' ')[0],
                "last_name": $split(payload.data.name, ' ')[1],
                "account_status": "enabled",
                "account_created_at": payload.data.meta.timestamps.created_at
              }
          }
        ```

    - **Product Rating Extension**

      The number of reviews and average ratings received for a product is saved in Commerce Manager. You must define a template to save the customer feedback. The templates follow a JSON structure, where you can mention the following information. You can use a predefined template (**Configurations** > **Templates**) or use the default one. 
        - `Name` - the name of the template.
        - `Description` - the template description.
        - `slug` - the slug to identify the template
        - `Enabled` - `true` if the template is enabled, `false` if not.
      
      Here is an example of the default template:
    
        ```json
         {
            "name": "Ratings and Reviews",
            "description": "Ratings and Reviews",
            "slug": "products(ratings)",
            "enabled": true
         }
        ```
      The Yotpo integration creates the following attributes in the product templates:
        - `review_count`
        - `average_rating` 

      View the review count and average ratings received for a product in Commerce Manager.
        
      1. Go to **Product Experience Manager** > **Products**.
      2. Click a specific product.
      3. Select **Product Templates** > **Ratings and Reviews**.

13. Click **Finish**. The integration is complete and webhooks are created for the events that you have specified.

:::note
- To see the webhooks that you have configured in Commerce Manager, click **SYSTEM** > **Store Settings** > **Webhooks**. Click each webhook to see the specifc events that you have added for products, orders, and customers.
- To see the flows that you have configured for Yotpo integration in Commerce Manager, click **SYSTEM** > **Flows** > **Ratings and Reviews**.
:::

## Demo

Watch the following video to learn how to integrate Commerce with Yotpo using the **Integrations Hub** in Commerce Manager:

<iframe width="560" height="315" src="https://www.youtube.com/embed/QGK5oF5Llv4" title="Integrating with Yotpo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
