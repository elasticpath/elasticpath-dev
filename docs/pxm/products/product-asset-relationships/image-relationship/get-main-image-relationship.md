---
title: Get Main Image Relationship
nav_label: Get Main Image Relationship
sidebar_position: 10
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `GET` Get Main Image Relationships

```http
https://useast.api.elasticpath.com/pcm/products/:productId/relationships/main_image
```

## Parameters

### Path parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `productId` | Required | `string` | The ID of the product you want to relate to the main image. |

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Example

```bash
curl -X GET https://useast.api.elasticpath.com/pcm/products/:productId/relationships/main_image \
     -H "Authorization: Bearer XXXX" \
```

## Response Example

`200 OK`

```json
{
  "data": [
    {
      "type": "file",
      "id": "file-1"
    }
  ]
}
```
