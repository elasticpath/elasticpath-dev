---
title: Get all Modifiers
nav_label: Get All Modifiers
sidebar_position: 20
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `GET` Get all Modifiers

```http
https://useast.api.elasticpath.com/pcm/variations/:variationId/options/:optionId/modifiers
```

### Parameters

#### Path parameters

| Name       | Required | Type     | Description                               |
|:-----------|:---------|:---------|:------------------------------------------|
| `optionId` | Required | `string` | The ID of the option for which you want to retrieve modifiers. |

#### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Request example

```bash
curl -X GET https://useast.api.elasticpath.com/pcm/variations/:variationId/options/:optionId/modifiers \
     -H "Authorization: Bearer XXXX"
     -H "Content-Type: application/json" \
```

### Response example

`200 OK`

```json
{
    "data": [
        {
            "type": "product-variation-modifier",
            "id": "310e10f1-9bb9-4bdd-99ec-b9b0e4d54d5d",
            "attributes": {
                "seek": "{color}",
                "set": "red",
                "type": "slug_builder"
            }
        },
        {
            "type": "product-variation-modifier",
            "id": "941fb129-ad57-4d50-a7c4-68cf88f6bb9e",
            "attributes": {
                "type": "commodity_type",
                "value": "digital"
            }
        }
    ]
}
```
