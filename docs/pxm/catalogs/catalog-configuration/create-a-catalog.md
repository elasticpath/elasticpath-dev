---
title: Create a Catalog
nav_label: Create a Catalog
sidebar_position: 40
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `POST` Create a Catalog

```http
https://useast.api.elasticpath.com/pcm/catalogs
```

Before you create a catalog, you must define the following resources:

- Hierarchies - hierarchies and nodes to categorize the products.
- Products - product information, associated assets, and links to hierarchy nodes.
- Price Books - prices for the products associated with the hierarchies.

You can create multiple price books for different scenarios, such as seasonal sales, business versus retail customer pricing, and reward programs. When creating a catalog, you can specify up to five price books. You must configure a priority for your price books. Product prices are displayed in the catalog according to the priority of the price books. Priority is a number and the price book with the highest number has the highest priority. 

:::note
You cannot create a catalog without a price book.
:::

## Parameters

### Headers

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. You must use a client credentials token. |

### Body

A [`Catalog`](/docs/pxm/catalogs) object with one or more hierarchies of products and a price book.

| Attribute | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `type` | Required | `string` | The type of object being returned. Always: `catalog` |
| `attributes.name` | Required | `string` | **Product Experience Manager** The name of the catalog. |
| `attributes.description` | Required | `string` | A description of the catalog, such as the purpose for the catalog. |
| `attributes.hierarchy_ids` | Required | `[string]` | The unique identifiers of the hierarchies to associate with this catalog. |
| `attributes.pricebook_id` | Optional | `string` | The unique identifier of the price book to associate with this catalog. For example `"pricebook_id":"6756e5a1-9474-4e3a-a62c-8e6f30c12ce8"`.  **Note**: You can specify either a `pricebook_id` or `pricebook_ids` but not both. If you specify both a `pricebook_id` and `pricebook_ids`, a `422 Unprocessable Entity` error is displayed. |
| `attributes.pricebook_ids` | Optional | `string` | The unique identifiers of the price books to associate with this catalog. For example `"id":"6756e5a1-9474-4e3a-a62c-8e6f30c12ce8"`. You can have up to 5 pricebooks. If you have multiple price books, you must configure a priority for your price books. Priority is a number and the price book with the highest number has the highest priority. You can specify any numbers that you want. For example, 1, 2, 3 or 2, 4, 6 and so on. See example below. **Note**: You can specify either a `pricebook_id` or `pricebook_ids` but not both. If you specify both a `pricebook_id` and `pricebook_ids`, a `422 Unprocessable Entity` error is displayed. |

## Request Example

```bash
curl -X POST https://useast.api.elasticpath.com/pcm/catalogs \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
        "data": {
        "type": "catalog",
        "attributes": {
            "name": "New store catalog",
            "hierarchy_ids": [
                "9f100138-da93-4546-9511-d9dff5753edc"
            ],
            "pricebook_ids": [
                {
                    "id": "6756e5a1-9474-4e3a-a62c-8e6f30c12ce8",
                    "priority": 0
                },
                {
                    "id": "4e8c45d9-3d5a-4f65-98e0-8203aa311aff",
                    "priority": 1
                },
                {
                    "id": "7986791d-9599-432a-a6d3-cd4a25a92aba",
                    "priority": 2
                }
            ],
            "description": "This is the catalog description"
        }
    }
}
```

## Response Example

`201 Created`

```json
{
    "data": {
        "attributes": {
            "pricebook_ids": [
                {
                    "id": "6756e5a1-9474-4e3a-a62c-8e6f30c12ce8",
                    "priority": 0
                },
                {
                    "id": "4e8c45d9-3d5a-4f65-98e0-8203aa311aff",
                    "priority": 1
                },
                {
                    "id": "7986791d-9599-432a-a6d3-cd4a25a92aba",
                    "priority": 2
                }
            ],
            "owner": "store",
            "created_at": "2022-05-11T15:49:22.515Z",
            "description": "This is the catalog description",
            "hierarchy_ids": [
                "9f100138-da93-4546-9511-d9dff5753edc"
            ],
            "name": "New store catalog",
            "updated_at": "2022-05-11T15:49:22.515Z"
        },
        "id": "43d26dec-548b-4620-9b5a-b7308b67cba7",
        "relationships": {
            "releases": {
                "links": {
                    "related": "/pcm/catalogs/43d26dec-548b-4620-9b5a-b7308b67cba7/releases"
                },
                "meta": {}
            },
            "rules": {
                "links": {
                    "related": "/pcm/catalogs/rules?filter=eq(catalog_id,43d26dec-548b-4620-9b5a-b7308b67cba7)"
                }
            }
        },
        "type": "catalog"
    },
    "links": {
        "self": "/pcm/catalogs/43d26dec-548b-4620-9b5a-b7308b67cba7"
    }
}
```
