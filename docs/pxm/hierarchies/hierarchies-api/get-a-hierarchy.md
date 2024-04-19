---
title: Get a Hierarchy
nav_label: Get a Hierarchy
sidebar_position: 30
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `GET` Get a Hierarchy

```http
https://useast.api.elasticpath.com/pcm/hierarchies/:hierarchyId
```

Retrieves the specified hierarchy.

## Parameters

### Path parameters

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `hierarchyId` | Required | `string` | The unique identifier of the hierarchy. |

### Query parameters

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `include` | Optional | `string` | To include all the nodes in the hierarchy within the response, add:`include=children` |

### Headers

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Example

```bash
curl -X GET https://useast.api.elasticpath.com/pcm/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007 \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

## Response Example

`200 OK`

```json
{
    "data": {
        "type": "hierarchy",
        "id": "0e119de2-5fb0-4bca-9b84-b3fc6c903007",
        "attributes": {
            "description": "Free standing appliances",
            "name": "Major Appliances",
            "slug": "Major-Appliances-MA0"
        },
        "relationships": {
            "children": {
                "data": [],
                "links": {
                    "related": "/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007/children"
                }
            }
        },
        "meta": {
            "created_at": "2023-02-07T14:01:51.247Z",
            "owner": "store",
            "updated_at": "2023-02-07T14:01:51.247Z"
        }
    }
}
```
