---
title: Get a Price Book
nav_label: Get a Price Book
sidebar_position: 21
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `GET` a Price Book by ID

```http
https://useast.api.elasticpath.com/pcm/pricebooks/:id
```

Retrieves the specified price book. To include prices in the response, append `?include=prices` to the path.

## Parameters

### Path parameters

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `id` | Required | `string` | The unique identifier of the price book. |

### Query parameters

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `include` | Optional | `string` | To include the product prices in the response, add `include=prices`. |

### Headers

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token to grant access to the API. |

## Request Example

```bash
curl -X GET https://useast.api.elasticpath.com/pcm/pricebooks/2cf0d38c-58aa-420d-8658-4385dccea609?include=prices \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

## Response Example

The following response contains prices in the `included` section. If the `include` parameter is not used, the `included` section is empty.

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
            "updated_at": "2021-02-08T21:36:42.335Z"
        },
        "meta": {
            "owner": "store"
        }
    },
    "included": [
        {
            "id": "76c78677-a22a-4104-8fb7-11f1cfc3b146",
            "attributes": {
                "currencies": {
                    "CAD": {
                        "amount": 125,
                        "includes_tax": false
                    },
                    "GBP": {
                        "amount": 75,
                        "includes_tax": false
                    },
                    "USD": {
                        "amount": 100,
                        "includes_tax": false
                    }
                },
                "sku": "product-1"
            },
            "type": "product-price"
        }
    ],
     "links": {
        "self": "/pcm/pricebooks/2cf0d38c-58aa-420d-8658-4385dccea609"
    }
}
```
