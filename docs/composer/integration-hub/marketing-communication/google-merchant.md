---
title: Integrating with Google Content API for Shopping
nav_label: Google Content API for Shopping Integration
sidebar_position: 10
---

You can integrate Commerce with the Google Content API for Shopping using the **Integrations Hub** in Commerce Manager. Once you have registered your Elastic Path Commmerce Cloud-powered storefront with the Google Merchant Center, you can use the integration to upload your products so that they automatically appear in Google Search results in the **Shopping** tab. When a search result is clicked, it links to your Commerce-powered storefront. 

![Google Content API for Shopping](/assets/google-shopping.png)

Whenever a catalog release is published in Commerce, the integration invokes the Google Content API for Shopping. The following data is displayed:

- Product name.
- Product description.
- Price.
- Image.
- Link to your product on your storefront.
- EAN/UPC.

The integration supports adding new products, updating existing products, and deleting products. 

:::caution

- All products default to an **in_stock** status in Google, regardless of their availability in Commerce.
- The integration does not support bundles.

:::

## Prerequisites

Before configuring the integration, there are some prequisites you need to meet in Google Merchant Center and Commerce.

### Prequisites in Google Merchant Center

You need to perform the following steps in Google Merchant Center before configuring the integration.

1. You must set up a Google Merchant account.
1. In the Google Merchant Center, you must verify ownership of your storefront. 
1. For products to be valid in Google, Google requires that you supply shipping details and prices, and a returns policy. The Google Merchant Center does not consider your products valid until this is done.
1. Once your Google Merchant account is set-up, you need to create an API authentication key for the Content API. The API key is some JSON data which you must save securely and not check-in to source control. You need the `client_email` and `private_key` from this JSON file when you configure the integration. 

    | Option | Description                            |
    |:------------------------------------|:---------------------------------------|
    | **client_email**                    | The email address associated with your Google Merchant account. |
    | **private_key**                     | Your Google Merchant account private key. |
    | **google_merchant_id**              | Your Google Merchant account ID. |

For more information, see [Merchant Center - Google for Retail](https://www.google.com/retail/solutions/merchant-center/).

### Prerequisites for Commerce

You need to perform the following steps in Commerce before configuring the integration.

1. Products that you want to synchronize with the Google Content API for Shopping must have a `EAN/UPC` attribute configured. Although this is an optional attribute for products in Commerce, Google analyses your product data for quality and may downrank your products in search results if your products do not have the `EAN/UPC` attribute configured.
1. You must have created your catalogs. See [create a catalog](/docs/api/pxm/catalog/create-catalog).
1. You must have collected the setup information from Commerce. You can find this information in Commerce Manager under **SYSTEM**, in **Application Keys**, when logged in as a user with Seller Admin privileges.

    | Option | Description                            |
    |:------------------------------------|:---------------------------------------|
    | **API Base URL**                    | Your Commerce API Base URL. For example, `https://useast.api.elasticpath.com/oauth/access_token`. See [Regions and URLs](/guides/Getting-Started/elastic-path-domains#regions-and-ur-ls). |
    | **Client ID**                       | Your Commerce Client ID. |
    | **Client Secret**                   | Your Commerce Client Secret. |

    :::note
    When integrating with third-party providers, we recommend you use the closest region in the third-party service to reduce latency as much as possible. See [Regions and URLs](/guides/Getting-Started/elastic-path-domains#regions-and-ur-ls).
    :::

## Configuring the Integration

Once you have met the [prequisites](#prerequisites), you are ready to configure the integration in **Integrations Hub**.

1. In Commerce Manager, go to **COMPOSER** > **Integrations Hub**.
1. Under **Marketing & Communication**, click **Google Content API for Shopping**. The integration guides you through the steps you need to follow to complete the integration.
1. Click **Configure**. The **Trigger details** consist of some details about the integration.
1. Click **Next**. The **Configuration** page is displayed.
1. Complete the information on the **Configuration** page.

    1. Complete the Google Merchant Account configuration fields.
        - **client_email**  - The email address associated with your Google Merchant account.
        - **private_key** - Your Google Merchant account private key.
        - **google_merchant_id** - Your Google Merchant account ID.
        - **target_country_and_currency** - The target country and currency that your products are sold in. The integration is currently limited to a single target country per store. 
        - **target_language** - The ISO language code for your products. 
    1. Complete the Commerce Configuration Data fields.
        - **Client-ID**  - Your Commerce Client ID.
        - **Client-Secret** - Your Commerce Client Secret.
        - **Token URL** - Your Commerce API Token URL.
    1. Click **Connect** to make sure that the authentication is completed successfully.
    1. In **epcc_base_url**, type your Commerce API base URL. For example, `https://useast.api.elasticpath.com`. See [Regions and URLs](/guides/Getting-Started/elastic-path-domains#regions-and-ur-ls).
    1. Create a new secret or passphrase and type it in **webhook_key**. This is used to authenticate the Elastic Path webhook and the integration.
    1. Complete the Integration Tuning Values fields. 
    
        :::note
        We recommend that you do not change the defaults. Contact Customer Success for more information.
        :::

        - **batch_size** - The number of pages to group into a single batch. Default is **250**.
        - **concurrent_threads** - Each batch is processed by a thread. Default is **10**. 

    1. Complete the Storefront Configuration Values fields.
        - **product_page_url_host_path_prefix** - the first part of the URL to the product page on your storefront. Google uses this to link the search result to your storefront. 
        - **product_identifier_scheme** - The attribute that is used to identify products in the URL of your product page. Select from:
            - Slug
            - SKU
            - Product ID
        - **url_parameter_string** - An optional parameter added to the end of the URL for the product page.
1. Click **Finish**. Your integration is enabled. You need to configure an integration for each store whose products you want to appear in Google searches.
1. Once the Integration is configured and running, any product data that is published to the catalog is automatically synchronised to Google. You can review the data in the Google Merchant Center. 

    :::caution
    Depending on the number of products in your catalog, it may take several minutes for your product data to appear in the Google Merchant Center, once the Commerce catalog is published.
    :::
    
1. You should review your products in the Google Merchant Center to make sure they are appearing in Google searches. You can check the status of your products in your Merchant Console.

## Using the Integration

To change any configuration details in your integration, open your Integration and go to **Summary** > **Reconfigure**.

In addition, from **Summary**, you can view, pause or delete your integration.

If there is an update to the integration, a message is displayed in **Summary**. Click **Update** to update your integration. You are guided through the steps to configure your integration.

## Troubleshooting the Integration

You can debug any issues in **Executions**. Click an execution to see the execution details. The **Logs** shows the output and any errors or warnings.

From **Step Outputs**, you can select a step to see its output. You can retry an individual step.

## Demo

<iframe width="560" height="315" src="https://www.youtube.com/embed/NVF5P1tnxCM" title="Configuring Google Merchant Center" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
