---
title: Get a Variation
nav_label: Get a Variation
sidebar_position: 20
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `GET` Get a variation

```http
https://useast.api.elasticpath.com/pcm/variations/:variationId
```

## Parameters

### Headers

| Name            | Required | Type     | Description                                         |
| --------------- | -------- | -------- | --------------------------------------------------- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Path parameters

| Name          | Required | Type     | Description                     |
| ------------- | -------- | -------- | ------------------------------- |
| `variationId` | Required | `string` | The ID of the variation to get. |

## Request Example

```bash
curl -X GET https://useast.api.elasticpath.com/pcm/variations/1838ded2-3726-4288-bd82-7c4f14376aac \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \

```

## Response Example

`200 OK`

```json
{
    "data": {
        "type": "product-variation",
        "id": "1838ded2-3726-4288-bd82-7c4f14376aac",
        "attributes": {
            "name": "Paint color"
        },
        "meta": {
            "sort_order": "23",
            "owner": "store"
        }
    }
}
```
