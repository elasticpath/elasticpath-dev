---
title: Get Product-Template Relationships
nav_label: Get Product-Template Relationships
sidebar_position: 10
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `GET` Get Product-Template Relationships

```http
https://useast.api.elasticpath.com/pcm/products/:productId/relationships/templates
```

Retrieves the templates that are associated with the specified product.

## Parameters

### Path parameters

| Name        | Required | Type     | Description                           |
|:------------|:---------|:---------|:--------------------------------------|
| `productId` | Required | `string` | The unique identifier of the product. |

### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token to grant access to the API. |

## Request Example

```bash
curl -X GET https://useast.api.elasticpath.com/pcm/products/14e055d0-eebb-4090-8594-a0a7aeea2151/relationships/templates \
     -H "Authorization: Bearer XXXX" \
```

## Response Example

`200 OK`

```json
{
    "data": [
        {
            "type": "template",
            "id": "24c2a332-a76a-4988-81e3-8a24324998a6"
        }
    ]
}
```
