---
title: Create Relationships to Products
nav_label: Create Relationships to Products
sidebar_position: 30
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `POST` Create Relationships between a Node and Products

```http
https://useast.api.elasticpath.com/pcm/hierarchies/:hierarchyId/nodes/:nodeId/relationships/products
```

Creates relationships between the specified node and one or more products in a specified hierarchy.

## Parameters

### Path parameters

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `hierarchyId` | Required | `string` | The unique identifier of the hierarchy. |
| `nodeId` | Required | `string` | The unique identifier of the node in the hierarchy. |

### Headers

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token to grant access to the API. |

### Body

Required. An array of product references with the following attributes:

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `type` | Required | `string` | Always: `product` |
| `id` | Required | `string` | The unique identifier of the product. |

## Request Example

```bash
curl -X POST https://useast.api.elasticpath.com/pcm/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007/nodes/d167d384-d2cf-4d05-ad41-6fc567855765/relationships/products \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
        "data": [
            {
            "type": "product",
            "id": "f5bd4e59-a95f-4bda-bfe6-0f34f47ac94b"
            }
        ]
     }
```

## Response Example

`201 Created`

```json
{
    "data": [
        {
            "type": "node",
            "id": "d167d384-d2cf-4d05-ad41-6fc567855765",
            "attributes": {
                "description": "Electric stoves and ovens updated",
                "name": "Electric Ranges",
                "slug": "Electric-Ranges-MA2"
            },
            "relationships": {
                "children": {
                    "data": [],
                    "links": {
                        "related": "/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007/nodes/d167d384-d2cf-4d05-ad41-6fc567855765/children"
                    }
                },
                "products": {
                    "data": [],
                    "links": {
                        "related": "/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007/nodes/d167d384-d2cf-4d05-ad41-6fc567855765/products"
                    }
                }
                 },
            "meta": {
                "created_at": "2023-02-07T14:06:33.499Z",
                "owner": "store",
                "sort_order": 1,
                "updated_at": "2023-02-07T16:05:46.657Z"
            }
        }
    ]
}
```
