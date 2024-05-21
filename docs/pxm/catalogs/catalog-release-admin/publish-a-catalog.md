---
title: Publish a Catalog
nav_label: Publish a Catalog
sidebar_position: 20
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `POST` Publish a Catalog

```http
https://useast.api.elasticpath.com/pcm/catalogs/:catalogId/releases
```

Publishes a catalog. You must publish a catalog before you can retrieve that catalog in an organization or store. The hierarchies, `live` products, and prices associated with a published catalog are in read-only mode. If you make a change to these resources, for example, a change to your price book or hierarchies, you need to republish the catalog.

You can [get a catalog release](/docs/pxm/catalogs/catalog-latest-release/get-a-release-of-a-catalog) to retrieve a published catalog. Currently, published catalogs are limited to the current release and two releases prior to the current release.

You can see the differences between the last 2 consecutive catalog releases. This is useful if want to understand how your products have changed in your catalog, ensuring your site search integration is kept up-to-date.

Once a catalog release has completed publishing, the `delta relationship` links to the delta document.

```json
{
  "relationships": {
    "delta": {
      "links": {
        "related": "https://dm682dv8sdgh.cloudfront.net/catalog-release-delta/6e27ceff-21d6-41f7-b284-3f558ad20aad.json.gz?Expires=1658238000&Signature=Pt-4fPpUyXAFDUaROMR~SUv7fAvGNxFDlmz9hlEQfvu-8EJEngbdgCnogkqVE~HmgWIZ4cOdZ8JnyE3w8K2pGQxNrBU76K5mIHXEQoyNrMwDIHHLsxmuSZfeGlkGfDy9p195TGhfmEF0vu7d3EGd4cdomr4mj9Jyf3hsKMCFACWxo9dYUYdE-7dV32JNa7v0OvIEHyedtbJNx4qEa~zKLjQzszfNUXiL-fTyO632Szmx1HtZaK7jPUWpgU38YHND41rJmMZ66OtakqRU9UFlkApYByBQSb18~N5ZRqCK5aBe7Mka7JCR2iri~~K958CN6zJbFKeG4yOZq7k1rAsSZQ__&Key-Pair-Id=K89TDABUFK1DV"
      }
    }
  }
}
```

The `delta` links are signed and only valid for 1 hour. Re-reading a catalog release, for example, using [Getting a release of a catalog](/docs/pxm/catalogs/catalog-latest-release/get-a-release-of-a-catalog) returns a fresh a link.

You can use the `is_full_delta` attribute returned from the `get a release of a catalog` endpoint to determine if you need to refresh the data in your company system before injecting fresh data in a `delta` link. The `is_full_delta` attribute tells you if this is a full publish of the catalog. Using a search service as an example, if the `is_full_delta` attribute is `true`, you should remove all data about that catalog from the search service before injecting fresh data from the `delta` file. If the `is_full_delta` attribute is `false`, then data from the previous catalog overlays the existing data in the `delta` file. To publish a catalog and inject fresh data in a `delta` link, set `export_full_delta` to `true`.

If a previous catalog publish date is greater than 90 days, then a full catalog publish is automatically performed. If you publish your catalogs infrequently, Commerce may perform a full publish when you are expecting a delta publish. 

:::caution
Generating a full delta is resource intensive and slows down the publishing process and so should only be performed in certain circumstances, for example, when initializing an integration with a service like Algolia.
:::

The `is_full_delta` attribute is always `true` the first time a catalog is published.

The information is stored in a collection of `json` documents in a compressed file. You can either manually check the file or, for example, use them to automatically update another company system you may have. Files are:

- Only available for 30 days.
- Removed when a catalog release is deleted.

Each document has a `delta_type` with one of the following values, depending on whether a product has been deleted, updated or created in a catalog release.

- `delete` describes products deleted from this release of a catalog.
- `createupdate` describes products updated in this release of a catalog.

An example of a file is shown below.

```json
{
  "delta_type": "delete",
  "id": "4bd64b2e-30af-4005-ae7b-fd5d2c23b668",
  "type": "product"
}

{
  "delta_type": "createupdate",
  "id": "be5a60a9-91ff-403d-a2f1-6a258498da4e",
  "type": "product",
  "attributes": {
    "base_product": false,
    "base_product_id": "",
    "commodity_type": "digital",
    "components": {
      "ghi": {
        "name": "Ghi",
        "options": [
          {
            "attributes": {
              "exists": false,
              "quantity": 4,
              "type": ""
            },
            "id": "ghi1"
          }
        ]
      }
    },
    "created_at": "1973-03-03T09:46:39Z",
    "description": "foo bar",
    "extensions": {
      "abc": {
        "key1": "value1",
        "key2": 0,
        "key3": false
      }
    },
    "manage_stock": false,
    "manufacturer_part_num": "mfr1",
    "name": "foo",
    "price_modifiers": [
      "jkl"
    ],
    "sku": "sku1",
    "slug": "slug-name",
    "store_id": "be5a60a9-91ff-403d-a2f1-6a258498da4e",
    "upc_ean": "123",
    "updated_at": "1973-03-03T09:46:39Z"
  },
  "meta": {
    "catalog_id": "",
    "catalog_source": "",
    "pricebook_id": "",
    "variation_matrix": {
      "foo": "bar"
    },
    "variations": {
      "c": {
        "id": "c",
        "name": "color",
        "options": [
          {
            "description": "red color",
            "id": "r",
            "name": "red"
          }
        ]
      }
    }
  }
}
```

## Multi-Store Management Solutions

In a multi-store management solution:

- You can create organization catalogs. Your organization catalogs are available for your stores to use.
- Your stores can create their own catalogs.
- Your stores can create catalogs that have a combination of organization products and store products.

If you are publishing a catalog in a store that contains resources from an organization, in Commerce Manager, you must enable the **Include Organization Resources in Catalog Publishes** checkbox.

1. Go to **SYSTEM** > **Store Settings**.
2. Click **General Settings**.
3. Select **PXM** from the list.
4. Select the **Include Organization Resources in Catalog Publishes** checkbox.

See [Organization Catalogs](/docs/organizations/org-level-pxm-entities/pxm-org-entities-in-store-level-catalogs).

## Parameters

### Path parameters

 | Name | Required | Type | Description |
 | :--- | :--- | :--- | :--- |
 | `catalogId` | Required | `string` | The unique identifier of an unpublished catalog. |

### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to grant access to the API. Note that this must be a client credentials token. |

### Body

| Name                | Required | Type      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|:--------------------|:---------|:----------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `export_full_delta` | Optional | `boolean` | Set to `true` if you want to export all the data from a catalog release in a `delta` link. The `is_full_delta` attribute is returned from the `get a release of a catalog` endpoint. The `is_full_delta` attribute tells you if the delta file contains the full content of a catalog release. You can use the `is_full_delta` to determine if you need to refresh the data in your company system before publishing a catalog release with fresh data in a `delta` link. Using a search service as an example, if the `is_full_delta` attribute is `true`, you should remove all data about that catalog from the search service before publishing a catalog release and injecting fresh data from the `delta` file. If the `is_full_delta` attribute is `false`, then data from the previous catalog overlays the existing data in the `delta` file. The `is_full_delta` attribute is always `true` the first time a catalog is published. |

## Request Example

```bash
curl -X POST https://useast.api.elasticpath.com/pcm/catalogs/6dbd8b80-1176-4f62-b3c0-b543bc5a5f6a/releases \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
      "data": {
          "export_full_delta":true
     }
```

## Response Example

`201 Created`

```json
{
    "data": {
        "id": "fe68399b-5d9d-4afb-a7d0-621218bd3e9f",
        "type": "catalog-release",
        "attributes": {
            "hierarchies": [
                {
                    "id": "eb3bd9e6-857c-4886-bc3f-fcebd600ae22"
                }
            ],
            "catalog_id": "6dbd8b80-1176-4f62-b3c0-b543bc5a5f6a",
            "description": "Catalog Configuration for PY Store",
            "name": "Ranges Catalog"
        },
        "meta": {
            "is_full_delta": true,
            "is_full_publish": true,
            "owner": "store",
            "created_at": "2021-06-02T15:07:07.386Z",
            "release_status": "PUBLISHED"
        },
        "relationships": {
            "delta": {
              "links": {
                "related": "https://dm682dv8sdgh.cloudfront.net/catalog-release-delta/6e27ceff-21d6-41f7-b284-3f558ad20aad.json.gz?Expires=1658238000&Signature=Pt-4fPpUyXAFDUaROMR~SUv7fAvGNxFDlmz9hlEQfvu-8EJEngbdgCnogkqVE~HmgWIZ4cOdZ8JnyE3w8K2pGQxNrBU76K5mIHXEQoyNrMwDIHHLsxmuSZfeGlkGfDy9p195TGhfmEF0vu7d3EGd4cdomr4mj9Jyf3hsKMCFACWxo9dYUYdE-7dV32JNa7v0OvIEHyedtbJNx4qEa~zKLjQzszfNUXiL-fTyO632Szmx1HtZaK7jPUWpgU38YHND41rJmMZ66OtakqRU9UFlkApYByBQSb18~N5ZRqCK5aBe7Mka7JCR2iri~~K958CN6zJbFKeG4yOZq7k1rAsSZQ__&Key-Pair-Id=K89TDABUFK1DV"
              }
          },
            "hierarchies": {
                "links": {
                    "related": "/pcm/catalogs/6dbd8b80-1176-4f62-b3c0-b543bc5a5f6a/releases/fe68399b-5d9d-4afb-a7d0-621218bd3e9f/hierarchies"
                }
            },
            "products": {
                "links": {
                    "related": "/pcm/catalogs/6dbd8b80-1176-4f62-b3c0-b543bc5a5f6a/releases/fe68399b-5d9d-4afb-a7d0-621218bd3e9f/products"
                }
            }
        }
    },
    "links": {
        "self": "/pcm/catalogs/6dbd8b80-1176-4f62-b3c0-b543bc5a5f6a/releases"
    }
}
```
