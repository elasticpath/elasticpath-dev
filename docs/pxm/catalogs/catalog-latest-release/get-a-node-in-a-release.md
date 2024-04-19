---
title: Get a Node in the Latest Release
nav_label: Get a Node
sidebar_position: 80
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `GET` Get a Node from a Catalog Release

```http
https://useast.api.elasticpath.com/pcm/catalogs/:catalogId/releases/latest/nodes/:nodeId
```

Returns a node from a published catalog.

:::note
Currently, published catalogs are limited to the current release and two releases prior to the current release.
:::

:::caution
Use `releaseId` to delete a specific release than the latest catalog.
:::

You can see the parent nodes a node is associated with in the `bread_crumb` metadata for each node. This is useful if you want to improve how your shoppers search your store, for example. For more information, see [Product Experience Manager Catalogs API](/docs/pxm/catalogs/catalog-latest-release/overview).

The response lists the products associated with a node. If products are [curated](/docs/pxm/products/pxm-products#curated-products), they are displayed in `curated_products`. Product curation allows you to promote specific products within each of your nodes, enabling you to create unique product collections in your storefront. 

- If you don't provide any `curated_products`, products are listed by their `updated_at` time in descending order, with the most recently updated product first.
- If you configure `curated_products` for only a few products, the curated products are displayed first and the other products are displayed in the order of `updated_at` time.
- You can only curate 20 products or less. You cannot have more than 20 curated products.
- If a curated product is removed from a node, the product is also removed from the `curated_products` list. 
- A product that is curated has the `"curated_product": true` attribute displayed.

## Parameters

### Path parameters

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `catalogId` | Required | `string` | The unique identifier of the catalog. |
| `releaseId` | Required | `string` | The unique identifier of a published version of the catalog or `latestPublished` for the most recently fully published catalog. You should use `latestPublished` in your storefront to make sure you have the latest fully published version of a catalog. |
| `nodeId` | Required | `string` | The unique identifier of a hierarchy node. |

### Headers

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token to grant access to the API. Implicit Bearer token only returns products with live status; products with draft status are not included. |

## Request Example

```bash
curl -X GET https://useast.api.elasticpath.com/pcm/catalogs/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/latest/nodes/39f96a3f-5577-473f-a263-f21fb2013469 \
     -H "Authorization: Bearer XXXX" \
     -H "content-type: application/json" \
```

## Response Example

`200 OK`

```json
{
    "data": {
        "id": "39f96a3f-5577-473f-a263-f21fb2013469",
        "type": "node",
        "attributes": {
            "created_at": "2021-03-08T17:50:14.629Z",
            "description": "All cooling units for food",
            "name": "Refrigerators",
            "slug": "Refrigerators-MA1",
            "curated_products": [
               "57ddfc7c-81c1-4855-88a5-2dd9d2055897",
               "42d940f9-fe26-4eed-9070-5e00234febe5",
               "2ab84aa8-232c-4199-8cc5-e1554ff58884"
            ],
            "updated_at": "2021-03-08T17:50:14.629Z",
            "published_at": "2021-04-13T02:36:16.505Z"
        },
        "meta": {
            "bread_crumb": [
              "04e748f1-83db-4013-85c8-9edfb0e1b5fa",
              "94b882fa-85de-470e-acb3-5b11358e02de",
              "a96a898b-444c-40b6-9c27-5fc74d08e685"
            ]
        },
        "relationships": {
            "children": {
                "links": {
                    "related": "/pcm/catalogs/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/aea233e7-1300-48ce-9b45-7d0c0b60dde3/nodes/39f96a3f-5577-473f-a263-f21fb2013469/relationships/children"
                }
            },
            "hierarchy": {
                "data": {
                    "id": "0e119de2-5fb0-4bca-9b84-b3fc6c903007",
                    "type": "hierarchy"
                },
                "links": {
                    "related": "/pcm/catalogs/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/aea233e7-1300-48ce-9b45-7d0c0b60dde3/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007"
                }
            },
            "parent": {
                "data": {
                    "id": "0e119de2-5fb0-4bca-9b84-b3fc6c903007",
                    "type": "node"
                },
                "links": {
                    "related": "/pcm/catalogs/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/aea233e7-1300-48ce-9b45-7d0c0b60dde3/nodes/0e119de2-5fb0-4bca-9b84-b3fc6c903007"
                }
            },
            "products": {
                "links": {
                    "related": "/pcm/catalogs/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/aea233e7-1300-48ce-9b45-7d0c0b60dde3/nodes/39f96a3f-5577-473f-a263-f21fb2013469/relationships/products"
                }
            }
        }
    },
    "links": {
        "self": "/pcm/catalogs/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/latest/nodes/39f96a3f-5577-473f-a263-f21fb2013469"
    }
}
```
