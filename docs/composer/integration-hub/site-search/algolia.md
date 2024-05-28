---
title: Integrating with Algolia
nav_label: Algolia Integration
sidebar_position: 10
---

You can integrate Commerce with Algolia quickly and easily in Commerce Manager.

Whenever you publish a catalog, the full catalog is synced to Algolia using an index name composed of the catalog name and the first part of the catalog ID. This is triggered using events delivered by a webhook.

1. When a catalog is published, a `catalog-release.updated` event is triggered.
1. Once a `catalog-release.updated` event is received by the webhook, the integration begins to execute.
1. The integration performs the following:

    - Retrieves product and taxonomy data for the catalog.
    - Retrieves the mapping for Commerce fields to Algolia fields.
    - Builds or updates the Algolia index.

For more information, watch a video.

<iframe width="560" height="315" src="https://www.youtube.com/embed/dKq9isxFtUI" title="Configuring Algolia in Commerce Manager" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Collecting Your Setup Information

Before you begin configuring your Algolia integration in Commerce Manager, you need to collect the necessary setup information from Algolia and Commerce Manager.

:::caution
Collect the following information and make sure you have it available, for example, in a text file, before configuring your Algolia integration in Commerce Manager. If you leave the Algolia Integration page in Commerce Manager, the integration is not saved and you must remove the integration and create a new one.
:::

### Collecting Algolia Setup Information

You can find this information in the **Settings, Teams and Access, API keys** section on the Algolia Dashboard.

| Option            | Description                                   |
|:------------------|:----------------------------------------------|
| **App ID**        | Your Application ID for your Algolia account. |
| **Admin API key** | Your Admin API Key for your Algolia account.  |

### Collecting Commerce Manager Setup Information

Collect the following Commerce API keys. You can find this information in **SYSTEM** > **Application Keys** in Commerce Manager when logged in as a user with Seller Admin privileges.

| Commerce API Key  | Description                  |
|:------------------|:-----------------------------|
| **API Base URL**  | Your Commerce API Base URL.  |
| **Client ID**     | Your Commerce Client ID.     |
| **Client Secret** | Your Commerce Client Secret. |

:::note
When integrating with third-party providers, we recommend you use the closest region in the third-party service to reduce latency as much as possible. See [Regions and URLs table](/guides/Getting-Started/elastic-path-domains#regions-and-ur-ls).
:::

## Configuring the Integration

Now that you've collected the setup information, let's begin by configuring the integration.

1. In Commerce Manager, go to **COMPOSER** > **Integrations Hub**.
1. Under **Search**, click on the **Algolia Full /Delta / Large Catalog** integration.
1. Review the **Summary** page and click **Configure**. The current version information is displayed.
1. Click **Next**.
1. Configure the following information and click **Finish**.

| Configuration parameter                                            | Value                                                                                                                                                                                                                                                                      |
|:-------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Algolia Configuration Data: algolia_app_id**                     | Your Application ID for your Algolia account.                                                                                                                                                                                                                              |
| **Algolia Configuration Data: algolia_admin_api_key**              | Your Admin API Key for your Algolia account.                                                                                                                                                                                                                               |
| **Commerce Configuration Data: Client ID**                         | Your Commerce API Client ID.                                                                                                                                                                                                                                               |
| **Commerce Configuration Data: Client Secret**                     | Your Commerce Client Secret.                                                                                                                                                                                                                                               |
| **Commerce Configuration Data: Token URL**                         | Your Commerce API Token URL. For example, `https://euwest.api.elasticpath.com//oauth/access_token` (EU) or `https://useast.api.elasticpath.com/oauth/access_token` (US). See [Regions and URLs](/guides/Getting-Started/elastic-path-domains#regions-and-ur-ls). |
| **epcc_base_url**                                                  | Your Commerce API Base URL. For example, `https://euwest.api.elasticpath.com` (EU) or `https://useast.api.elasticpath.com` (US).                                                                                                                                           |
| **webhook_key**                                                    | Send to create secret for EPCC Integration (Examples: Simple Phrase, UUID).                                                                                                                                                                                                |
| **Post Processing Configuration Data (Optional): webhook_url**     | Optional post-processing URL that the release details are sent to upon completion of an integration attempt.                                                                                                                                                               |
| **Post Processing Configuration Data (Optional): webhook_api_key** | Optional post-processing API key for the above URL.                                                                                                                                                                                                                        |
| **Integration Tuning Parameters: batch_size**                      | The default page size when synchronizing. The default is 250.                                                                                                                                                                                                              |
| **Integration Tuning Parameters: concurrent threads**              | The number of threads that process each batch. The default is 10.                                                                                                                                                                                                          |

:::note
We recommend that you do not change the default tuning parameters. Contact Customer Success for more information.
:::

The integration starts an execution which:

- Configures a webhook to listen to the `catalog-release.updated` event, named **EPCC Algolia Integration**.
- Creates a flow for containing field mappings between Commerce and Algolia, called **Algolia Mapping**.

:::caution
You must not delete the **Algolia Mapping** flow or the **EPCC Algolia Integration** webhook, or the integration ceases to work.
:::

Now that you've configured the integration, let's learn how you use it.

## Understanding Field Mappings Between Commerce and Algolia

To sync the catalog to Algolia, you create a map of the data to pass from Commerce to Algolia. The mapping consists of:

- Source field.
- Destination field.
- Any flags to trigger optional functions.

The integration uses a flow to contain the fields that you want to use. The source of the Commerce data is the [catalog delta file](/docs/api/pxm/catalog/publish-release).
 Additionally, there are some special fields that perform additional transformation work. When the integration is initially configured, a default set of mapping fields are created. However, you can change these depending on your requirements.

The following table describes some example fields in Commerce Manager and their corresponding fields in Algolia.

| Commerce Field             | Maps to Algolia Field                                                                                                                    | Flags            |
|:---------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|:-----------------|
| **attributes.sales**       | ep_sales                                                                                                                                 |                  |
| **attributes.price**       | ep_price                                                                                                                                 | forceSaleFlag    |
| **attributes.description** | ep_description                                                                                                                           |                  |
| **attributes.mpn**         | ep_mpn                                                                                                                                   |                  |
| **attributes.name**        | ep_name                                                                                                                                  |                  |
| **attributes.sku**         | ep_sku                                                                                                                                   |                  |
| **attributes.slug**        | ep_slug                                                                                                                                  |                  |
| **attributes.status**      | ep_status                                                                                                                                |                  |
| **upc**                    | ep_upc                                                                                                                                   |                  |
| **main_image**             | ep_main_image_url                                                                                                                        | includeHierarchy |
| **taxonomy**               | ep_categories. This field is used to trigger the creation of a hierarchy in Algolia.                                                     |                  |

The following are special field names:

- `main_image` triggers a lookup of the URL from the file associated to the main image relationship on the product.
- `taxonomy` retrieves the hierarchy and builds a custom Algolia-friendly format.

### Alternate Taxonomy Fields

In addition to the `ep_categories` attribute, you can use the `ep_slug_categories` attribute. This attribute contains the formatted hierarchy values, but uses the **category-node slug** rather than the **category-node name**.

For example, the `ep_categories` field appears as follows

```json
{
   lvl0: "Animal & Pet Supplies"
   lvl1: "Animal & Pet Supplies > Dog"
   lvl2: "Animal & Pet Supplies > Dog > Dog Containment"
   lvl3: "Animal & Pet Supplies > Dog > Dog Containment > Dog Houses Kennels & Pens"
}
```

And the `ep_slug_categories` field appears as follows:

```json
{
   lvl0: "animal-and-pet-supplies"
   lvl1: "animal-and-pet-supplies > dog"
   lvl2: "animal-and-pet-supplies > dog > dog-containment"
   lvl3: "animal-and-pet-supplies > dog > dog-containment > dog-houses-kennels-and-pens"
}
```

Optionally, you can also generate a new field called `ep_name_plus_slug_categories` which is a formatted representation or the **category-node name**, and **category-node slug** fields  available for faceting.

Using **Create Category Name Slug Attribute**, you can enable the creation and maintenance of this field.

Set **Create Category Name Slug Attribute** to `true` if you want to create the `ep_name_plus_slug_categories` attribute field. 

For example, when enabled, the `ep_name_plus_slug_categories` field appears as follows:

```json
{
  lvl0: "Animal & Pet Supplies#animal-and-pet-supplies"
  lvl1: "Animal & Pet Supplies#animal-and-pet-supplies > Dog#dog"
  lvl2: "Animal & Pet Supplies#animal-and-pet-supplies > Dog#dog > Dog Containment#dog-containment"
  lvl3: "Animal & Pet Supplies#animal-and-pet-supplies > Dog#dog > Dog Containment#dog-containment > Dog Houses Kennels & Pens#dog-houses-kennels-and-pens"
}
```

where, for each value the Name and SLUG values are concatenated to permit them both to be available to the front-end.

In all cases, when there are multiple product->node assignments, a comma is used to separate the data in the `ep_categories`, `ep_slug_categories` and the optional `ep_name_plus_slug_categories` fields.

For example, 
```json
   lvl0: "Farm and Ranch,Power Tools and Acc,Fasteners"
```
where the product is assigned to both `Farm and Ranch`, but also `Power Tools and Acc` as well as the `Fasteners` category nodes.

### Creating new field mappings

1. In Commerce Manager, go to **Flows** > **Algolia Mapping**. (If you have just configured your integration, refresh Commerce Manager to pick up the newly-added flow from the integration.)
1. Click **New Entry**.
1. Create the field mappings you desire by supplying the source field and destination field.
1. In Algolia, create the fields described above. Refer to the documentation provided with Algolia for more information.

### Mapping flags

The following mapping flags are available.

- **includeHierarchy** - Use this flag if you want the name of the hierarchy to be included in the [`bread_crumbs`](/docs/api/pxm/catalog/catalogs#understanding-how-products-and-nodes-are-associated).
- **forceSaleFlag** - By default, if a price is on sale, an `on_sale` flag is set to `true` in the price book. 
If you also want an `on_sale` flag at the root of the product, you can add this flag to the price mapping.
- **forceJSON** - It is a `boolean` value used to determine whether the input value should be parsed as JSON. 
This is useful if you want to treat an Elastic Path field as an embedded structure and not as a string.
- **convertDateToTS** - A `boolean` value used to determine whether the input value is parsed as a date. 
The date is converted into a number that represents a UNIX timestamp.
- **isNullValue** - Use this flag if you want to set the attribute value to `1` or `0` based on whether the EPCC value resolves to `NULL`. 
This is useful when Algolia filtering is used as Algolia does not support filtering on a null parameter value.

## Managing the Integration

Once the integration is configured and you have the mappings you want, the catalog is synced with Algolia with every new publish of your catalogs.

### Partial updates

If a catalog has already been published and changes are made to the catalog and the catalog is published again, this results in a partial catalog update. In other words, only the products that have been created, updated or removed from the previous catalog release are updated. These are made directly to the live index in Algolia.

### Full updates

A full catalog update can be triggered in the following scenarios.

1. The first time a catalog is published. The delta file is then used to create a temporary index. The settings, rules, and so on, from the live version are then copied onto the temporary index. Once the index is completely loaded, the temporary index is moved to the live index.
1. You can trigger a full catalog update by setting `export_full_delta` to `true` when [publishing a catalog](/docs/pxm/catalogs/catalog-release-admin/publish-a-catalog). Here is a sample request:

```bash
curl --location -g '{{pcmUrl}}/catalogs/{{catalogId}}/releases' \
--header 'accept: application/json' \
--header 'content-type: application/json' \
--data {
    "export_full_delta" : true
}
```

### Naming catalogs and indexes

Index names are created from the catalog name and a portion of the catalog id. This allows the integration to manage many catalogs at the same time. This dependency is important to consider when naming catalogs in Commerce and indexes in Algolia.

### Updating a single product in Algolia

You can update a single Commerce product in Algolia without publishing a catalog. You can do this by sending a payload directly to an Algolia index using a URL available in the Algolia Integration. Updates to a single product checks if other catalog sync operations are in progress and delay the update until the other operations are completed.

- you can add new fields. If there are new fields that do not currently exist, they are added. You must provide the full replacement value. In the example below, `ep_categories` is a complex object. To properly update the object, the full object must be provided.
- you can update the values of existing fields.

1. Go to **Composer** > **Integrations Hub**.
2. Under **Search**, click **Algolia Full /Delta / Large Catalog**.
3. From the **Summary** tab, navigate to **Trigger details** > **UpdateObject to Algolia - Direct**.
4. Expand **UpdateObject to Algolia - Direct**.
5. From **URL**, select **Copy URl to clipboard** icon.

   :::note
   The URL is unique to each deployed instance of the Algolia Integration.
   :::

6. In Postman, open `POST {{webhook-url}}` where `webhook-url` is the URL you just copied.
7. The **Body** of the request can have the following parameters:

    | Name | Required | String | Description |
    | --- | --- | --- | --- | 
    | `index_name` | Required | `string` | The name of the Algolia index that you want to update. |
    | `objectID` | Required | `string` | The product ID of the Commerce product that you want to update. |
    | `secret_key` | Required | `string` | The Commerce Client Secret that you used when you configured the Algolia Integration. |
    | `payload` | Required | `string` | The payload contains the mapped fields for the Algolia object that you want to update. The schema must match the existing Algolia object. |

    An example request is shown below:

   ```json
   {
     "index_name": "Main_123450",
     "objectID": "b8e9af84-69f9-472c-ad18-57557e1d2c75",
     "secret_key": "n4bQgYhMfWWaL+qgxVrQFaO/TxsrC4Is0V1sFbDwCgg=",
     "payload": {
       "ep_name": "WALL MOUNTING BRACKET",
       "ep_slug": "18-025-999",
       "ep_categories": {
       "lvl0": "Shop"
       }
     }
   }
   ```
