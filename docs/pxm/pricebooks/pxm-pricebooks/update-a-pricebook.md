---
title: Update a Price Book
nav_label: Update a Price Book
sidebar_position: 40
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `PUT` Update a Price Book by ID

```http
https://useast.api.elasticpath.com/pcm/pricebooks/:id
```

Updates the specified price book.

## Parameters

### Path parameters

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `id` | Required | `string` | The unique identifier of the price book you want to update. |

### Headers

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token to grant the API access. |

### Body

Required. A [`pricebook`](/docs/pxm/pricebooks/pxm-pricebooks/pxm-pricebooks-overview#the-pricebook-object) object with the following attributes:

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `id` | Required | `string` | The unique identifier of the price book. |
| `type` | Required | `string` | Always: `pricebook` |
| `attributes.name` | Optional | `string` | The name of the price book. |
| `attributes.description` | Optional  | `string` | The purpose for the price book, such as flash sale pricing or preferred customer pricing. |

## Request Example

```bash
curl -X PUT https://useast.api.elasticpath.com/pcm/pricebooks/2cf0d38c-58aa-420d-8658-4385dccea609 \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
        "data": {
            "id": "2cf0d38c-58aa-420d-8658-4385dccea609",
            "type": "pricebook",
            "attributes": {
                "name": "Customer A Pricing"
            }
        }
    }
```

## Response Example

`200 OK`

```json
{
    "data": {
        "id": "2cf0d38c-58aa-420d-8658-4385dccea609",
        "type": "pricebook",
        "attributes": {
            "created_at": "2021-02-08T20:56:27.537Z",
            "description": "Tier 1 pricing",
            "name": "Customer A Pricing",
            "updated_at": "2021-02-08T21:34:49.789Z"
            },
        "meta": {
            "owner": "store"
        }
    },
  "links": {
        "self": "/pcm/pricebooks/4c45e4ec-26e0-4043-86e4-c15b9cf985a7"
    }
}
```
