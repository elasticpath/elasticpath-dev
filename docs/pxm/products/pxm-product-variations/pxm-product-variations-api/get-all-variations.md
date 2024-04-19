---
title: Get all variations
nav_label: Get all Variations
sidebar_position: 10
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `GET` Get all variations

```http
https://useast.api.elasticpath.com/pcm/variations
```

## Parameters

### Headers

| Name            | Required | Type     | Description                                         |
| --------------- | -------- | -------- | --------------------------------------------------- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Example

```bash
curl -X GET https://useast.api.elasticpath.com/pcm/variations \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \

```

## Response Example

`200 OK`

```json
{
    "data": [
        {
            "type": "product-variation",
            "id": "a726a358-096d-4c63-b390-dc8f601f0fe2",
            "attributes": {
                "name": "color"
            },
            "meta": {
                "sort_order": "23",
                "owner": "store"
            }
        },
        {
            "type": "product-variation",
            "id": "dac5f09e-a767-49ff-9ce7-6ce72aaf26e4",
            "attributes": {
                "name": "Size"
            },
            "meta": {
                "sort_order": "23",
                "owner": "store"
            }
        }
    ]
}
```
