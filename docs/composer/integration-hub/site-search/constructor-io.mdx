---
title: Integrating with Constructor.io
nav_label: Constructor.io Integration
sidebar_position: 11
---

You can quickly and easily integrate Commerce with Constructor.io using the **Integrations Hub** in Commerce Manager. This enables you to search your Commerce products using Constructor.io. 

Whenever you publish a catalog, the full catalog is synced to Constructor.io. This is triggered using events delivered by a webhook.

1. When a catalog is published, a `catalog-release.updated` event is triggered.
1. Once a `catalog-release.updated` event is received by the webhook, the integration begins to execute.
1. The integration performs the following:

    - Retrieves the mapping for Commerce fields to Constructor.io fields.
    - Syncs all products to Constructor.io.

## Collecting Your Setup Information

Before you begin configuring your Constructor.io integration in Commerce Manager, you need to collect the necessary setup information from Constructor.io and Commerce Manager.

:::caution
Collect the following information and make sure you have it available, for example, in a text file, before configuring your Constructor.io integration in Commerce Manager. If you leave the Constructor.io Integration in Commerce Manager, the integration is not saved and you must remove the integration and create a new one.
:::

### Collecting Constructor.io Setup Information

To collect setup information from Constructor.io:

1. Go to Constructor.io.
1. Select your username.
1. Select **Account**.
1. Select **API Integration**.
1. Select **Generate API Token**.

### Collecting Commerce Manager Setup Information

In Commerce, create an application key for Constuctor.io.

1. Log in to Commerce Manager as a user with Seller Admin privileges.
1. Go to **SYSTEM** > **Application Keys**.
1. Select **Create New**.
1. Type a name for your application key.
1. Select **Create**.
1. Select **Dismiss** to view your application key. 
1. To configure the integration, you need to copy the following values:

    | Commerce API Key | Description                            |
    |:------------------------------------|:---------------------------------------|
    | **API Base URL**                    | Your Commerce API Base URL. |
    | **Client ID**                       | Your Commerce Client ID. |
    | **Client Secret**                   | Your Commerce Client Secret. |

:::note
When integrating with third-party providers, we recommend you use the closest region in the third-party service to reduce latency as much as possible. See [Regions and URLs table](/guides/Getting-Started/elastic-path-domains#regions-and-ur-ls).
:::

See [Creating an Application Key in Commerce Manager](/docs/commerce-manager/application-keys/application-keys-cm).

## Configuring the Integration

Now that you've collected the setup information, let's begin by configuring the integration.

1. In Commerce Manager, go to **COMPOSER** > **Integrations Hub**.
1. Under **Search**, click the **Constructor.io Full Catalog Sync** integration.
1. Review the **Overview** page and click **Configure**. The current version information is displayed.
1. Click **Configure**. The **Trigger details** are displayed.
1. Click **Next**.
1. Enter the setup information you collected previously.
1. Click **Finish**.

The integration starts an execution which:

- Configures a webhook to listen to the `catalog-release.updated` event, named **EPCC Constructor.io Integration**.
- Creates a flow for containing field mappings between Commerce and Constructor.io, called **Constructor.io Mapping**.

Now that you've configured the integration, let's learn how you use it.

## Understanding Field Mappings Between Commerce and Constructor.io

To sync the catalog to Constructor.io, you create a map of the data to pass from Commerce to Constructor.io.

The integration uses a flow to contain the fields that you want to pass from Commerce to Constructor.io. The flow contains:

- A default set of mapping fields. See the table below.
- Some special fields that perform additional transformation work.

    - `main_image` triggers a lookup of the URL from the file associated to the main image relationship on the product.
    - `taxonomy` retrieves the hierarchy and builds a custom Constructor.io-friendly format.

- Any other fields that you want, depending on your requirements. 

The following table describes the default fields in Commerce Manager and their corresponding fields in Constructor.io.

| Commerce Field | Maps to Constructor.io Field                                                          | 
|:----------------------------------|:------------------------------------------------------------------------------------- |
| **attributes.productId**          | ep_product                                                                          |  
| **attributes.commodity_type**     | ep_commodity_type                                                                             | 
| **attributes.description**        | ep_description                                                                       | 
| **attributes.mpn**                | ep_mpn                                                                               | 
| **attributes.name**               | ep_name                                                                              |
| **attributes.sku**                | ep_sku                                                                               |
| **attributes.slug**               | ep_slug                                                                              |
| **attributes.status**             | ep_status                                                                            |
| **upc**                           | ep_upc                                                                               |
| **main_image**                    | ep_main_image_url in Constructor.io. You can change the name in Constructor.io but if you also change the field name in Commerce Manager, the URL lookup function is not triggered. |
| **taxonomy**                      | ep_categories. This field is used to trigger the creation of a hierarchy in Constructor.io. |

### Creating new field mappings

1. In Commerce Manager, go to **SYSTEM** > **Flows** > **Constructor.io Mapping**. If you just configured your integration, refresh Commerce Manager to pick up the newly-added flow from the integration.
1. Click **New Field**.
1. Create the field mappings you desire by supplying the EPCC field and the Constructor.io field.
1. In Constructor.io, create the fields you created in the previous step. Refer to the documentation provided with [Constructor.io](https://docs.constructor.io/)  for more information.
