---
title: Integrating with Salsify
nav_label: Salsify Integration
sidebar_position: 1
---

You can quickly and easily integrate Commerce with Salsify using the **Integrations Hub** in Commerce Manager. Integrating Salsify with Commerce means you can synchronize catalog data such as products, price, images, and categories between Commerce and Salsify.

:::note
When integrating with third-party providers, we recommend you use the closest region in the third-party service to reduce latency as much as possible. See [Regions and URLs table](/guides/Getting-Started/elastic-path-domains#regions-and-ur-ls).
:::

## Collecting your Setup Information

### Collecting Salsify Setup Information

Collect the following setup information from Salsify.

| Option | Description                            |
|:------------------------------------|:---------------------------------------|
| **API Base URL**                    | Your Salsify API Base URL. Default value is `https://app.salsify.com/api/v1/orgs/`. |
| **API Key**                       | Your Salsify API Key. To collect your API key, log in to your Salsify account, go to **My Profile > API Access**, and click **Show API Key**. |
| **Organization ID**               | Your Salsify Organization ID. |

### Collecting Commerce Manager Setup Information

To create a new [application key](/docs/commerce-manager/application-keys/application-keys-cm), go to **SYSTEM > Application Keys**.

| Commerce API Key | Description                            |
|:------------------------------------|:---------------------------------------|
| **Token URL**                       | Your Commerce API token URL. |
| **Client ID**                       | Your Commerce Client ID. |
| **Client Secret**                   | Your Commerce Client Secret. |


## Synchronizing from Salsify to Commerce

As part of the Salsify Integration, changes in Catalog data in Salsify automatically updates catalog data in Commerce, and vice versa.

![Salsify to Elastic Path Flow](/assets/Salsify-to-Elastic-Path.png)

### Prerequisites

 - Ensure that you have [collected your setup Information](#collecting-your-setup-information).
 - Ensure that you have created a [price book](/docs/commerce-manager/product-experience-manager/pricebooks/pxm-pricebooks#creating-price-books), [hierarchies](/docs/commerce-manager/product-experience-manager/hierarchies/creating_hierarchies), and [templates](/docs/commerce-manager/product-experience-manager/extending-products/templates#creating-templates) in Commerce Manager.

 ### Procedure

1. In Commerce Manager, go to **COMPOSER > Integrations Hub**.
1. Under **Product Information**, click **Salsify**
1. Click **Configure**. The Salsify integration guides you through the steps you need to follow to complete the integration.
1. Click **Next**. The **Connection** page is displayed.
1. On the **Connection** page, do the following:
    1. Complete the **Commerce Connection** credential details:
        - **Client-ID**  - Your Commerce Client ID.
        - **Client-Secret** - Your Commerce Client Secret.
        - **Token URL** - Your Commerce API Token URL

    1. Click **Connect**. The authorization is successfully completed.
    1. Complete the **Salsify Connection** credentials:
        - **API Key** - Your Salsify API Key.
        - **Org Id** - Your Salsify Organization ID.
        - **API Base URL**  - Your Salsify API Base URL. Default value is `https://app.salsify.com/api/v1/orgs/`.

1. Click **Next**. The **Templates** page is displayed. 

    You can use templates to send your custom data or attributes to another system using JSONata.
1. Click **Edit** under **ElasticPath Product Template**.
1. Update the **Product Template** to map the Commerce product templates and attributes to Salsify.
    
    For example, suppose you want to import Salsify field brand and Feature-2 attributes into commerce Manager. You need to update `templateSlug` and `fieldSlug` fields to represent attribute slug in Commerce.

    The following example shows how this should look in the Product Template.

    ```Json
    "attributes":[
    [
        {
            "templateSlug":"products(extension)",
            "templateAttributes":[
                [
                    $merge([
                        ($product.Brand ?
                            {
                                "fieldSlug":"brand",
                                "type":"string",
                                "value":$product.Brand
                            }
                        )
                    ]),
                    $merge([
                        ($product.'Feature-2' ?
                            {
                                "fieldSlug":"feature2",
                                "type":"string",
                                "value":$product.'Feature 2'
                            }
                        )
                    ])
                ]  ~> $filter(function($v, $i, $a) {
                    $v.value
                })
            ]
        }
    ]
    ] ~> $filter(function($v, $i, $a) {
        $count($v.templateAttributes) > 0
    })
    ``` 


1. Click **Edit** under **ElasticPath Price Template**. Update the price book name of Commerce in `priceBookName` field. For example, if the price book name is `UKandIEPricebook` in Commerce cloud, update the same in the **Price Template**.
    For example: 

    ```Json
    "priceBookName": "UKandIEPricebook"
    ```
1. Click **Edit** under **ElasticPath Node Template**. Update the name of the hierarchy created in Commerce in the `hierarchySlug` field.
    For example:

    ```Json
    "hierarchySlug": "uk-hierarchy"
    ```

1. Click **Next**. The **Configuration** page is displayed.
    
    **Enable Salsify to Elastic Path Sync**, **Enable Salsify Event - Product Creation**, and **Enable Salsify Event - Product Updates** are enabled by default to automatically synchronize from Salsify to Commerce.

1. (Optional) If you want to trigger full sync, turn on the **Enable Full Sync Scheduler** toggle. The full sync will be triggered as per the **Full Sync Cron Job Time**. By default it is disabled.
        :::note
        Default value of **Full Sync Cron Job Time** is `0 0 31 12`. You can set your own time to run the full sync periodically.
        :::
1. Click **Finish**. Your integration is enabled.

## Synchronizing from Commerce to Salsify

As part of the Salsify Integration, changes in catalog data in Commerce automatically updates catalog data in Salsify, and and vice versa.

![Elastic Path to Salsify Flow](/assets/Elastic-Path-to-Salsify.png)

### Prerequisites

Ensure that you have [collected your setup Information](#collecting-your-setup-information).

### Procedure

1. Log in to Salsify account.
1. Go to **More > Properties**. The **Properties Page** is displayed.
1. To create a new property, go to **Actions > New Property**. The **Create Property** page is displayed. 
1. Enter the **Name** and **Data Type**, and click **Save**. You can create as many properties as you want to. 
1. In Commerce Manager, go to **COMPOSER > Integrations Hub**.
1. Under **Product Information**, click **Salsify**.
1. Click **Configure**.
1. Click **Next**. The **Connection** page is displayed.
1. On **Connection** page, do the following:
    1. Complete the **Commerce Connection** credential details:
        - **Client-ID**  - Your Commerce Client ID.
        - **Client-Secret** - Your Commerce Client Secret.
        - **Token URL** - Your Commerce API Token URL

    1. Click **Connect**. The authorization is successfully completed.
    1. Complete the **Salsify Connection** credentials:
        - **API Key** - Your Salsify API Key.
        - **Org Id** - Your Salsify Organization ID.
        - **API Base URL**  - Your Salsify API Base URL. Default value is `https://app.salsify.com/api/v1/orgs/`.

1. Click **Next**. The **Templates** page is displayed.
1. Click **Edit** under the **Salsify Product Template**.
1. Update the **Salsify Product Template** with new properties that you have created in the **Create Property** page in Salsify account.
    
    The following example illustrates mapping all the images from Commerce to `ImageMedium` field in Salsify.

    ```json
    "ImageMedium": [
        relationships.main_image.data.id,
        relationships.files.data.id
    ] ~> $filter(function($img) {
        $$.images[$.'salsify:id' = $img]
    })
    ```

1. Click **Next**. The **Configuration** page is displayed.

    **Enable Salsify to Elastic Path Sync**, **Enable Salsify Event - Product Creation**, and **Enable Salsify Event - Product Updates** toggles are enabled by default. You can disable these toggles if you don't want to synchronize from Salstify to Elastic Path.

1. (Optional) To automatically synchronize Elastic Path to Salsify, turn on the **Enable Elastic Path Sync to Salsify** toggle. It is disabled by default.
1. (Optional) If you want to trigger full sync, turn on the **Enable Full Sync Scheduler** toggle. The full sync will be triggered as per the **Full Sync Cron Job Time**. It is disabled by default.
    :::note
    Default value of **Full Sync Cron Job Time** is `0 0 31 12`. You can set your own time to run the full sync periodically.
    :::

1. Click **Finish**. Your integration is enabled.
1. In Commerce Manger, go to **SYSTEM> Store Settings > Webhooks** to see that the your webhook has been enabled.

## Demos

 Watch the following videos:

<iframe width="560" height="315" src="https://www.youtube.com/embed/uxM0bGrqnDQ" title="Salsify to Commerce Configuration" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/Iv0eOuuzIpM" title="Commerce to Salsify Configuration" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
