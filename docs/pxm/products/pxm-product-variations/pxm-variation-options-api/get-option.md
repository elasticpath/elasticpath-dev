---
title: Get an Option
nav_label: Get an Option
sidebar_position: 30
---

## `GET` Get a Product Variation Option

```http
https://useast.api.elasticpath.com/pcm/variations/:variationId/options/:optionId
```

## Parameters

### Path parameters

| Name          | Required | Type     | Description                                          |
| ------------- | -------- | -------- | ---------------------------------------------------- |
| `variationId` | Required | `string` | The ID of the variation that consists of the option. |
| `optionId`    | Required | `string` | The ID of the option that you want to retrieve.      |

### Headers

| Name            | Required | Type     | Description                                         |
| --------------- | -------- | -------- | --------------------------------------------------- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Example

```bash
curl -X GET https://useast.api.elasticpath.com/pcm/variations/684bceee-0ee3-4f43-ac32-50bb44c1eee5/options/39148bc3-3028-4196-9350-1b4ac927c9d6 \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

## Response Example

`200 OK`

```json
{
    "data": {
        "type": "product-variation-option",
        "id": "eb84ffe3-a723-4790-8019-d28e4695da14",
        "attributes": {
            "description": "This is a color.",
            "name": "Blue"
        },
        "meta": {
            "sort_order": "23",
            "owner": "store"
      }
    }
}
```
