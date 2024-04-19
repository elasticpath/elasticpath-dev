---
title: Get Cart Shipping Groups
nav_label: Get Cart Shipping Groups
sidebar_position: 1
---

## `GET` Get Cart Shipping Groups

```http
https://useast.api.elasticpath.com/v2/carts/:id/shipping-groups
```

## Parameters 

### Path parameters

| Name | Required | Type     | Description                             |
|:-----|:---------|:---------|:----------------------------------------|
| `id` | Required | `string` | The unique identifier of the cart to retrieve shipping groups for a cart. |

### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Example

```bash
curl -X GET https://useast.api.elasticpath.com/v2/carts/:id/shipping-groups
    -H "Authorization: Bearer XXXX" \
    -H "content-type: application/json" \
```

## Response Example

`200 Ok`

```json
{
    "data": [
        {
            "type": "shipping_group",
            "id": "eb063818-939a-458f-97a4-2601c0c2b445",
            "relation": "cart",
            "order_id": "",
            "cart_id": "2b5cb684-7fdf-4a50-9e6a-9e880f7150ba",
            "shipping_type": "UPS Ground",
            "tracking_reference": "ground_1234",
            "address": {
                "first_name": "Ron",
                "last_name": "Swanson",
                "company_name": "Ron Swanson Enterprises",
                "phone_number": "",
                "line_1": "1 Sunny Street",
                "line_2": "",
                "postcode": "92802",
                "county": "Orange",
                "country": "US",
                "region": "CA",
                "instructions": ""
            },
            "delivery_estimate": {
                "start": "2023-04-25T00:00:00Z",
                "end": "2023-04-29T00:00:00Z"
            },
            "created_at": "2023-06-23T16:36:10.717Z",
            "updated_at": "2023-06-23T16:36:10.717Z",
            "relationships": {
                "cart": {
                    "data": {
                        "type": "cart",
                        "id": "2b5cb684-7fdf-4a50-9e6a-9e880f7150ba"
                    }
                }
            },
            "meta": {
                "shipping_display_price": {
                    "total": {
                        "amount": 700,
                        "currency": "USD",
                        "formatted": "$7.00"
                    },
                    "base": {
                        "amount": 500,
                        "currency": "USD",
                        "formatted": "$5.00"
                    },
                    "tax": {
                        "amount": 100,
                        "currency": "USD",
                        "formatted": "$1.00"
                    },
                    "fees": {
                        "amount": 100,
                        "currency": "USD",
                        "formatted": "$1.00"
                    }
                }
            }
        },
        {
            "type": "shipping_group",
            "id": "90d6ebd3-1aa6-44f8-b19a-91ddd4da306d",
            "relation": "cart",
            "order_id": "",
            "cart_id": "2b5cb684-7fdf-4a50-9e6a-9e880f7150ba",
            "shipping_type": "UPS Ground",
            "tracking_reference": "ground_1234",
            "address": {
                "first_name": "Ron",
                "last_name": "Swanson",
                "company_name": "Ron Swanson Enterprises",
                "phone_number": "",
                "line_1": "1 Sunny Street",
                "line_2": "",
                "postcode": "92802",
                "county": "Orange",
                "country": "US",
                "region": "CA",
                "instructions": ""
            },
            "delivery_estimate": {
                "start": "2023-04-25T00:00:00Z",
                "end": "2023-04-29T00:00:00Z"
            },
            "created_at": "2023-06-26T13:36:51.267Z",
            "updated_at": "2023-06-26T13:36:51.267Z",
            "relationships": {
                "cart": {
                    "data": {
                        "type": "cart",
                        "id": "2b5cb684-7fdf-4a50-9e6a-9e880f7150ba"
                    }
                }
            },
            "meta": {
                "shipping_display_price": {
                    "total": {
                        "amount": 700,
                        "currency": "USD",
                        "formatted": "$7.00"
                    },
                    "base": {
                        "amount": 500,
                        "currency": "USD",
                        "formatted": "$5.00"
                    },
                    "tax": {
                        "amount": 100,
                        "currency": "USD",
                        "formatted": "$1.00"
                    },
                    "fees": {
                        "amount": 100,
                        "currency": "USD",
                        "formatted": "$1.00"
                    }
                }
            }
        }
    ]
}
```
