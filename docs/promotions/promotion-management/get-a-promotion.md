---
title: Get a Promotion
nav_label: Get a Promotion
sidebar_position: 11
---

## `GET` Get by ID

```http
https://useast.api.elasticpath.com/v2/promotions/:id
```

## Parameters

### Path parameters

| Name | Required | Type     | Description              |
| ---- | -------- | -------- | ------------------------ |
| `id` | Required | `string` | The ID of the promotion. |

## Headers

| Name            | Required | Type     | Description                                         |
| --------------- | -------- | -------- | --------------------------------------------------- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Example

```bash
curl -X GET https://useast.api.elasticpath.com/v2/promotions/:id \
     -H "Authorization: Bearer XXXX" \
     -H "content-type: application/json" \
```

## Response Example

`200 OK`

```json
{
    "data": {
        "type": "promotion",
        "id": "3cc6829b-e57f-4ead-b52e-8e23e119bfba",
        "name": "Promo #1",
        "description": "Initial Promotion",
        "enabled": true,
        "promotion_type": "fixed_discount",
        "max_discount_value": [
            {
                "currency": "USD",
                "amount": 500000
            },
            {
                "currency": "GBP",
                "amount": 400000
            }
        ],
        "schema": {
            "currencies": [
                {
                    "currency": "GBP",
                    "amount": 1100
                },
                {
                    "currency": "USD",
                    "amount": 900
                }
            ]
        },
        "start": "2017-01-13T00:00:00Z",
        "end": "2018-01-13T00:00:00Z",
        "created_by": "seller@elasticpath.com",
        "updated_by": "another_seller@elasticpath.com",
        "meta": {
            "timestamps": {
                "created_at": "2018-05-09T20:02:01.036Z",
                "updated_at": "2018-05-09T20:02:01.036Z"
            }
        }
    }
}
```
