---
title: Get all Options
nav_label: Get all Options
sidebar_position: 20
---

## `GET` Get all Options

```http
https://useast.api.elasticpath.com/pcm/variations/:variationId/options
```

## Parameters

### Path parameters

| Name          | Required | Type     | Description              |
| ------------- | -------- | -------- | ------------------------ |
| `variationId` | Required | `string` | The ID of the variation. |

### Headers

| Name            | Required | Type     | Description                                         |
| --------------- | -------- | -------- | --------------------------------------------------- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Example

```bash
curl -X GET https://useast.api.elasticpath.com/pcm/variations/:variationId/options \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

## Response Example

`200 OK`

```json
{
    "data": [
        {
            "type": "product-variation-option",
            "id": "806f74ec-f4d9-4ee3-b7ff-85ac1a67240c",
            "attributes": {
                "description": "red",
                "name": "red"
            },
            "meta": {
                "sort_order": "23",
                "owner": "store"
          }
        },
        {
            "type": "product-variation-option",
            "id": "a9f00bf1-ce46-45ab-8754-4779cab79fdf",
            "attributes": {
                "description": "blue",
                "name": "blue"
            },
            "meta": {
                "sort_order": "23",
                "owner": "store"
          }
        }
    ]
}
```
