---
title: Integrating with Coveo
nav_label: Coveo Integration
sidebar_position: 20
---

You can integrate Commerce with Coveo quickly and easily in Commerce Manager.

Whenever you publish a catalog, the full catalog will be synced to Coveo. This is triggered using events delivered by a webhook.

1. When a catalog is published, a `catalog-release.updated` event is triggered.
1. Once a `catalog-release.updated` event is received by the webhook, the integration begins to execute.
1. The integration performs the following:
    - Builds a taxonomy for the catalog.
    - Retrieves the mapping for Commerce fields to Coveo fields.
    - Adds any missing fields to Coveo.
    - Delete Coveo contents.
    - Sync all products to Coveo.

For more information, watch a video.

<iframe width="560" height="315" src="https://www.youtube.com/embed/pqtwtFSJ8jM" title="Integrating with Coveo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Collecting Your Setup Information

Before you begin configuring your Coveo integration in Commerce Manager, you need to collect the necessary setup information from Coveo and Commerce Manager.

:::caution
Collect the following information and make sure you have it available, for example, in a text file, before configuring your Coveo integration in Commerce Manager. If you leave the Coveo Integration page in Commerce Manager, the integration is not saved and you must remove the integration and create a new one.
:::

### Collecting Coveo Setup Information

You can find this information in the Coveo Administration Console.

| Option                    | Description                                      |
|:--------------------------|:-------------------------------------------------|
| **Coveo Organization ID** | The key given to your organization. You can find this by clicking **Organization** > **Settings** and selecting the **Organization** tab. |
| **Source ID**             | The URL of your Coveo source. You can find this by clicking **Content** > **Sources**, selecting your source, and clicking **Edit**. |
| **Coveo Source API key**  | The key you stored when you created your source. |
| **Coveo Fields API key**  | The key you created that has access to create fields. |
| **Coveo Site URL**        | The base URL to be prefixed to the product URL. For example, if your products URL is `https://your.domain.com/products/:slug` then your base URl is `https://your.domain.com/products/`. |

### Collecting Commerce Manager Setup Information

Collect the following Commerce API keys. You can find this information in **SYSTEM** > **Application Keys** in Commerce Manager when logged in as a user with Seller Admin privileges.

| Commerce API Key                            | Description |
|:---------------------------------------------------------------|:------------|
| **Commerce Base URL**                       | Your Commerce base URL. |
| **Commerce Client ID**                      | Your Commerce Client ID. |
| **Commerce Client Secret**                  | Your Commerce Client Secret. |
| **Commerce Integration Webhook Secret Key** | This can be anything you choose. |

:::note
When integrating with third-party providers, we recommend you use the closest region in the third-party service to reduce latency as much as possible. See [Regions and URLs table](/guides/Getting-Started/elastic-path-domains#regions-and-ur-ls).
:::

## Configuring the Integration

Now that you've collected the setup information, let's begin by configuring the integration.

1. In Commerce Manager, go to **COMPOSER** > **Integrations Hub**.
1. Under **Search**, click on the **Coveo Full Catalog Sync** Integration.
1. Click **Configure**. The **Trigger details** are displayed.
1, Click **Next**.
1. Enter the setup information you collected previously.
1. Click **Finish**.

The integration starts an execution which:

- Configures a webhook to listen to the `catalog-release.updated` event, named **EPCC Coveo Integration**.
- Creates a flow for containing field mappings between Commerce and Algolia, called **Coveo Mapping**.

:::caution
It is important that you don't delete the **Coveo Mapping** flow or the **EPCC Coveo Integration** webhook, or the integration ceases to work.
:::

Now that you've configured the integration, let's learn how you use it.

## Understanding Field Mappings Between Commerce and Coveo

To sync the catalog to Coveo you must map the data to pass from Commerce to Coveo.

The integration uses a flow to contain the fields that you want to pass from Commerce to Coveo. These can be any fields you like. There are some special fields and a default set which are created when you first configure the integration. See the table below.

Coveo fields must have:

- A field type of either LONG, LONG_64, DOUBLE, DATE or STRING.
- Coveo schema details such as a JSON object containing any additional data needed.
- Coveo Facet is either TRUE or FALSE, depending on if the Coveo field is used as facet or not.
- Coveo Multifacet is either TRUE or FALSE, depending on if the Coveo field is used as a facet with multiple values or not.
- Multifacet tokenizer if the Coveo field is a multivalued facet where character delimits the values.

The following table describes some example fields in Commerce Manager and their corresponding fields in Coveo.

| Commerce Field | Maps to Coveo Field                      |
|:----------------------------------|:-----------------------------------------|
| **attributes.productId**           | ep_product                               |
| **attributes.commodity_type**         | ep_commodity_type                        |
| **attributes.description**        | ep_description                           |
| **attributes.mpn**                | ep_mpn                                   |
| **attributes.name**               | ep_description                           |
| **attributes.sku**                | ep_sku                                   |
| **attributes.slug**               | ep_slug                                  |
| **attributes.status**             | ep_status                                |
| **upc**                           | ep_upc                                   |
| **main_image**                    | `ep_main_image_url` in Coveo. You can change the name in Coveo but if you also change the field name in Commerce Manager, the URL lookup function is not triggered. |
| **taxonomy**                      | ep_categories. This field is used to trigger the creation of a hierarchy in Coveo. |

### Creating New Field Mappings

1. In Commerce Manager, go to the **Coveo Mapping** page under the Flows. (If you just configured your integration, refresh your Commerce Manager tab to pick up the newly added flow from the integration.)
1. Click **New Entry**.
1. Create the field mappings you desire by supplying the EPCC Field, the Coveo Field, the Coveo Field Type, and the additional Coveo details in the entry.
1. In Coveo, create the fields described above. Refer to the documentation provided with Coveo for more information.
