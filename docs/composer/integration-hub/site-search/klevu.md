---
title: Integrating with Klevu Catalog Sync
nav_label: Klevu Catalog Sync
sidebar_position: 41
---

You can integrate Commerce with Klevu quickly and easily in Commerce Manager. Klevu is an advanced AI-driven search and product discovery platform specifically designed for e-commerce websites. Once you have integrated Klevu, you can synchronize catalog from Commerce Manager to Klevu.

## Collecting Commerce Manager Setup Information

Collect the following Commerce API keys. You can find this information in **System** > **Application Keys** in Commerce Manager when logged in as a user with Seller Admin privileges.

| Commerce API Key | Description                            |
|:------------------------------------|:---------------------------------------|
| **Client ID**                       | Your Commerce Client ID. |
| **Client Secret**                   | Your Commerce Client Secret. |
| **Token URL**                       | Your Commerce API token URL. <ul><li>US Region: https://useast.cm.elasticpath.com/oauth/access_token</li><li>EU Region: https://euwest.cm.elasticpath.com/oauth/access_token</li></ul> |


## Configuring the Integration

Now that you've collected the setup information let's begin by configuring the integration.

1. In Commerce Manager, go to **COMPOSER** > **Integrations Hub**.
1. Under **Search** click on the **Klevu Catalog Sync** Integration.
1. Click **Configure**. The **Trigger details** are displayed.
1. Click **Next**. The **Connections** page is displayed.
1. Enter the **Elastic Path Commerce Cloud Connection** details. See [Collecting Commerce Manager Setup Information](#collecting-commerce-manager-setup-information).
1. Click **Connect**. A new window is displayed to confirm the connection was successful. If successful, close this window and then click **Next**.
1. By default, **Fetch Main Image URL** and **Fetch Inventory** toggles are enabled. You can modify the default configuration policy, batch size and concurrency settings if necessary. We recommend keeping these settings as default.
1. Click **Next**.
1. Provide the **Base Product URL** and **Base Category URL** relevant to your products and categories. For example, `https://www.example.com/products` and `https://www.example.com/category`.
1. Click **Finish** to complete the configuration process.

## Understanding Klevu Mappings

Once you have configured the integration, it creates:

- A Custom API named **Klevu Keys** under **COMMERCE EXTENSIONS** to map Klevu store credentials for publishing the catalog.
- A flow named **Klevu Mapping** under **SYSTEM > Flows** for mapping Klevu and custom fields. 
- A Webhook event named **Klevu Catalog Sync**.

The following table describes the Commerce product fields and their corresponding Klevu attributes:

| Commerce Product Fields                    | Maps to Klevu Attributes |
|:----------------------------------|:-----------------------------------------|
| **product.attributes.sku**           | Klevu sku |
| **product.attributes.name**          | Klevu name |
| **product.attributes.description**    | Klevu description |
| **product.attributes.prices**         |  Klevu prices |
| **product_base_url**/**product.attributes.slug** | Klevu url |
| **Main image URL**                            | Klevu images default url |
| **product.meta.child_variations[forEach].option.name** | Klevu custom attribute.  A list of all possible variations is created and verified to ensure all potential attributes exist in Klevu before initiating the catalog sync. |
| **product.attributes.base_product_id** | Klevu parent Product |
| **product.meta.breadcrumbs [flattened]** |  Klevu categories |

## Creating New Entries and Publishing Catalogs

To synchronize each catalog, you must create a separate Klevu store and collect API key and Klevu Rest Auth key. Klevu does not support multiple indexes within a single Klevu store. 

Follow these steps to input Klevu credentials into the custom API **Klevu Keys**:

1. In Commerce Manager, navigate to **COMMERCE EXTENSIONS** > **Custom APIs**.
1. Select **Klevu Keys** and click **All Entries**.
1. Select **Create Entry**.
1. Specify the name of the catalog you wish to synchronize.
1. Paste the API key that you copied from the Klevu store in the **Klevu API Key** field.
1. Enter the Klevu API key for Indexing, which is `https://indexing.ksearchnet.com`.
1. Paste the Klevu Rest Auth key that you copied from your Klevu store in the **Klevu REST AUTH Key** field.
1. In the **Source Catalog ID** field, provide the catalog ID for the catalog you want to synchronize.
1. Click **Create Entry**.
1. Once you have created a new entry, you can publish the catalog. See [Publishing Catalogs](https://elasticpath.dev/docs/commerce-manager/product-experience-manager/catalogs/publishing-catalogs#publishing-catalogs).