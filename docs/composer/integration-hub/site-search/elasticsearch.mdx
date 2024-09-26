---
title: Integrating with Elasticsearch
nav_label: Elasticsearch Integration
sidebar_position: 30
---

You can integrate Commerce with Elasticsearch quickly and easily in Commerce Manager.

Whenever you publish a catalog, the full catalog will be synced to Elasticsearch. This is triggered using events delivered by a webhook.

1. When a catalog is published, a `catalog-release.updated` event is triggered.
1. Once a `catalog-release.updated` event is received by the webhook, the integration begins to execute.
1. The integration performs the following:
    - Builds a taxonomy for the catalog.
    - Retrieves the mapping for Commerce fields to Elasticsearch fields.
    - Syncs all products to Elasticsearch.

## Elasticsearch Prerequisites

You must create an index called `search-products` in your Elasticsearch instance before configuring the integration in Commerce.

You must create the index using a `join` data type. The `join` data type is a special field that creates parent/child relations within documents of the same index. The `relations` section defines a set of possible relations within the documents, each relation being a parent name and a child name. See https://www.elastic.co/guide/en/elasticsearch/reference/8.6/parent-join.html for more information.

```json
{
    "mappings": {
        "properties": {
            "my_join_field": {
                "type": "join",
                "relations": {
                    "parentID": "childID"
                }
            }
        }
    }
}
```

## Collecting Your Setup Information

Before you begin configuring your Elasticsearch integration in Commerce Manager, you need to collect the necessary setup information from Elasticsearch and Commerce Manager.

:::caution
Collect the following information and make sure you have it available, for example, in a text file, before configuring your Elasticsearch integration in Commerce Manager. If you leave the Elasticsearch Integration page in Commerce Manager, the integration is not saved and you must remove the integration and create a new one.
:::

### Collecting Elasticsearch Setup Information

You can find this information in the **Management** section on the Elasticsearch Dashboard.

| Option                | Description                                            |
|:----------------------|:-------------------------------------------------------|
| **Admin API Token**   | Your Admin API Key for your Elasticsearch account.     |
| **Indexing Endpoint** | Your Indexing Endpoint for your Elasticsearch account. |
| **Elasticsearch Host** | Your Elastic Search URL.                       |

### Collecting Commerce Manager Setup Information

Collect the following Commerce API keys. You can find this information in **System** > **Application Keys** in Commerce Manager when logged in as a user with Seller Admin privileges.

| Commerce API Key | Description                            |
|:------------------------------------|:---------------------------------------|
| **API Base URL**                    | Your Commerce API Base URL. |
| **Client ID**                       | Your Commerce Client ID. |
| **Client Secret**                   | Your Commerce Client Secret. |

:::note
When integrating with third-party providers, we recommend you use the closest region in the third-party service to reduce latency as much as possible. See [Regions and URLs table](/guides/Getting-Started/elastic-path-domains#regions-and-ur-ls).
:::

## Configuring the Integration

Now that you've collected the setup information let's begin by configuring the integration.

1. In Commerce Manager, go to **COMPOSER** > **Integrations Hub**.
1. Under **Search** click on the **Elasticsearch Cloud Full Catalog Sync** Integration.
1. Click **Configure**. The **Trigger details** are displayed.
1, Click **Next**.
1. Enter the setup information you collected previously.
1. Click **Finish**.

The integration starts an execution which:

- Configures a webhook to listen to the `catalog-release.updated` event, named **EPCC Constructor.io Integration**.
- Creates a flow for containing field mappings between Commerce and Elasticsearch, called **Constructor.io Mapping**.

:::caution
It is important that you don't delete the **Constructor.io Mapping** flow or the **EPCC Constructor.io Integration** webhook, or the integration ceases to work.
:::

Now that you've configured the integration, let's learn how you use it.

## Understanding Field Mappings Between Commerce and Constructor.io

To sync the catalog to Elasticsearch you must map the data to pass from Commerce to Elasticsearch.

The integration uses a flow to contain the fields that you want to pass from Commerce to Elasticsearch. These can be any fields you like. There are some special fields and a default set which are created when you first configure the integration. See the table below.

The following table describes some example fields in Commerce Manager and their corresponding fields in Elasticsearch.

| Commerce Field | Maps to Elasticsearch Field              |
|:----------------------------------|:-----------------------------------------|
| **attributes.productId**              | ep_product                               |
| **attributes.commodity_type**        | ep_commodity_type                        |
| **attributes.description**        | ep_description                           |
| **attributes.mpn**                | ep_mpn                                   |
| **attributes.name**               | ep_description                           |
| **attributes.sku**                | ep_sku                                   |
| **attributes.slug**               | ep_slug                                  |
| **attributes.status**             | ep_status                                |
| **upc**                           | ep_upc                                   |
| **main_image**                    | `ep_main_image_url` in Elasticsearch. You can change the name in Elasticsearch but if you also change the field name in Commerce Manager, the URL lookup function is not triggered. |
| **taxonomy**                      | ep_categories. This field is used to trigger the creation of a hierarchy in Elasticsearch. |

### Creating New Field Mappings

1. In Commerce Manager, go to **SYSTEM** > **Flows** > **Elasticsearch Mapping**. If you just configured your integration, refresh Commerce Manager to pick up the newly-added flow from the integration.
1. Click **New Field**.
1. Create the field mappings you desire by supplying the EPCC field and the Elasticsearch field.
1. In Elasticsearch, create the fields you created in the previous step. Refer to the documentation provided with Elasticsearch for more information.
