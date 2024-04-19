---
title: Get Variation Relationships
nav_label: Get Variation Relationships
sidebar_position: 10
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `GET` Get Variations Relationships

```http
https://useast.api.elasticpath.com/pcm/products/:productId/relationships/variations
```

## Parameters

### Path parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `productId` | Required | `string` | The ID of the product of which you want to retrieve the relationships. |

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Example

```bash
curl -X GET https://useast.api.elasticpath.com/pcm/products/:productId/relationships/variations \
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
      "id": "2950cae3-1050-4c43-9fbd-2aa60dc5c249"
    }
  ]
}
```
