---
title: Get Order Shipping Groups
nav_label: Get Order Shipping Groups
sidebar_position: 5
---

## `GET` Get Order Shipping Groups

```http
https://useast.api.elasticpath.com/v2/orders/:id/shipping-groups
```

Once the checkout process is completed, an order is created, and the shipping group is associated with the order. The `relation` field in the response body is changed to `order`, and the relevant `order_id` is added to the shipping groups, indicating that the shipping group has been checked out.

## Parameters 

### Path parameters

| Name | Required | Type     | Description                             |
|:-----|:---------|:---------|:----------------------------------------|
| `id` | Required | `string` | The unique identifier of the order to retrieve all shipping groups for an order. |

### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Example

```bash
curl -X GET https://useast.api.elasticpath.com/v2/orders/:id/shipping-groups
    -H "Authorization: Bearer XXXX" \
    -H "content-type: application/json" \
```

## Response Example

`200 OK`

```json
{
    "data": [
        {
            "type": "shipping_group",
            "id": "65eaafee-0a77-40f5-81b0-42b825bf1f71",
            "relation": "order",
            "order_id": "9ba16dd0-ef51-4ad3-97bc-c76dfe666499",
            "cart_id": "c9a5a598-0136-4db8-aa27-acd5505caa4b",
            "shipping_type": "UPS Ground",
            "tracking_reference": "ground_1234",
            "address": {
                "first_name": "Andy",
                "last_name": "Dwyer",
                "company_name": "Ron Swanson Enterprises",
                "line_1": "1 Sunny Street",
                "line_2": "",
                "city": "Vancouver",
                "postcode": "92802",
                "county": "Orange",
                "country": "US",
                "region": "WA"
            },
            "delivery_estimate": {
                "start": "2023-04-26T22:52:19Z",
                "end": "2023-04-27T22:52:19Z"
            },
            "created_at": "2023-06-27T23:15:38.625Z",
            "updated_at": "2023-06-27T23:15:50.839Z",
            "relationships": {
                "order": {
                    "data": {
                        "type": "order",
                        "id": "9ba16dd0-ef51-4ad3-97bc-c76dfe666499"
                    }
                }
            },
            "meta": {
                "shipping_display_price": {
                    "total": {
                        "amount": 160,
                        "currency": "USD",
                        "formatted": "$1.60"
                    },
                    "base": {
                        "amount": 100,
                        "currency": "USD",
                        "formatted": "$1.00"
                    },
                    "tax": {
                        "amount": 50,
                        "currency": "USD",
                        "formatted": "$0.50"
                    },
                    "fees": {
                        "amount": 10,
                        "currency": "USD",
                        "formatted": "$0.10"
                    }
                }
            }
        }
    ]
}
```
