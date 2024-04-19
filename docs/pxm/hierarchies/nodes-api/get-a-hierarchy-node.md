---
title: Get a Hierarchy Node
nav_label: Get a Node
sidebar_position: 10
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `GET` Get a Hierarchy Node

```http
https://useast.api.elasticpath.com/pcm/hierarchies/:hierarchyId/nodes/:nodeId
```

Retrieves a node from a hierarchy.

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

## Request Example

```bash
curl -X GET https://useast.api.elasticpath.com/pcm/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007/nodes/d167d384-d2cf-4d05-ad41-6fc567855765 \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

## Response Example

`200 OK`

```json
{
    "data": {
        "type": "node",
        "id": "d167d384-d2cf-4d05-ad41-6fc567855765",
        "attributes": {
            "description": "Electric stoves and ovens",
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
            "parent": {
                "data": {
                    "type": "node",
                    "id": "e2f3372c-89ed-49ae-a9c7-0dc1888f10ec"
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
            "updated_at": "2023-02-07T14:06:33.499Z"
        }
    }
}
```
