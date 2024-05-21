---
title: Get all Hierarchies in the Latest Release
nav_label: Get all Hierarchies
sidebar_position: 30
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `GET` Get all Hierarchies from a Catalog Release

```text
https://useast.api.elasticpath.com/pcm/catalogs/:catalogId/releases/latest/hierarchies
```

Returns the hierarchies from a published catalog.

:::note
Currently, published catalogs are limited to the current release and two releases prior to the current release.
:::

:::caution
Use `releaseId` to delete a specific release than the latest catalog.
:::

## Parameters

### Path parameters

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `catalogId` | Required | `string` | The unique identifier of the catalog. |
| `releaseId` | Required | `string` | The unique identifier of a published release of the catalog or `latest` for the most recently published version. |

### Headers

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token to grant access to the API. Note that this must be a client credentials token. |

### Query parameters

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `filter`| Optional | `string` | Specifies the filter attributes. See [Filtering](#filtering). |
| `page[limit]` | Optional | `integer` | The number of items to return per page. Minimum value is `1`. See [Pagination](/guides/Getting%20Started/api-overview/pagination). |
| `page[offset]` | Optional | `integer` | The number of items to offset the results by. Offset is zero-based. See [Pagination](/guides/Getting%20Started/api-overview/pagination). |

## Filtering

The following operators and attributes are available when filtering on this endpoint.

| Operator | Description | Supported Attributes | Example |
| :--- |:--- |:--- |:--- |
| `Eq` | Checks if the values of two operands are equal. If they are, the condition is true. | `name`, `slug`| `filter=eq(name,some-name)` |
| `In` | Checks if the values are included in the specified string. If they are, the condition is true. | `id` | `filter=in(id,some-id)` | 

For more information, see [Filtering](/guides/Getting%20Started/api-overview/filtering).

### Building breadcrumbs in a storefront

In a catalog, you can use a filter to return a list of nodes in a hierarchy structure that a product belongs to. You can use this to build breadcrumbs in your storefront. An example is shown below.

`filter=in(id,c83bfe55-0d87-4302-a86d-ab19e7e323f1,6003d7ef-84f3-49bb-a8bd-4cbfa203dcbb)`

- Specify the node Ids in the filter expression.
- You can have as many node Ids as you want.
- It does not matter what order you specify the node Ids. The nodes are returned in the order they were last updated.

## Request Example

```bash
curl -X GET https://useast.api.elasticpath.com/pcm/catalogs/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/latest/hierarchies \
     -H "Authorization: Bearer XXXX" \
     -H "content-type: application/json" \
```

## Response Example

`200 OK`

```json
{
    "data": [
        {
            "id": "0e119de2-5fb0-4bca-9b84-b3fc6c903007",
            "type": "hierarchy",
            "attributes": {
                "created_at": "2021-03-05T21:45:28.395Z",
                "description": "Free-standing appliances",
                "name": "Major Appliances",
                "slug": "Major-Appliances-MA0",
                "updated_at": "2021-03-05T22:15:44.684Z",
                "published_at": "2021-04-13T02:36:16.505Z"
            },
            "relationships": {
                "children": {
                    "links": {
                        "related": "/pcm/catalogs/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/latest/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007/children"
                    }
                },
                "nodes": {
                    "links": {
                        "related": "/pcm/catalogs/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/latest/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007/nodes"
                    }
                },
                "products": {
                    "links": {
                        "related": "/pcm/catalogs/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/latest/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007/products"
                    }
                }
            }
        },
        {
            "id": "4a5a476e-f28d-491f-95d7-86e53f05daf9",
            "type": "hierarchy",
            "attributes": {
                "created_at": "2021-03-05T21:55:39.042Z",
                "description": "Counter-top appliances",
                "name": "Small Appliances",
                "slug": "Small-Appliances-SA0",
                "updated_at": "2021-03-05T22:13:55.756Z",
                "published_at": "2021-04-13T02:36:16.505Z"
            },
            "relationships": {
                "children": {
                    "links": {
                        "related": "/pcm/catalogs/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/latest/hierarchies/4a5a476e-f28d-491f-95d7-86e53f05daf9/children"
                    }
                },
                "nodes": {
                    "links": {
                        "related": "/pcm/catalogs/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/latest/hierarchies/4a5a476e-f28d-491f-95d7-86e53f05daf9/nodes"
                    }
                },
                "products": {
                    "links": {
                        "related": "/pcm/catalogs/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/latest/hierarchies/4a5a476e-f28d-491f-95d7-86e53f05daf9/products"
                    }
                }
            }
        }
    ],
    "links": {
        "first": "/pcm/catalogs/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/latest/hierarchies?page[offset]=0&page[limit]=25&",
        "last": "/pcm/catalogs/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/latest/hierarchies?page[offset]=0&page[limit]=25&",
        "self": "/pcm/catalogs/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/latest/hierarchies"
    }
}
```
