---
title: Anonymize Orders
nav_label: Anonymize Orders
sidebar_position: 7
---

You can anonymize an order when it is fulfilled, canceled, or fully refunded.

When anonymization is successful, Personal Identifiable Information such as `customer` details, `shipping_address`, and `billing_address` are replaced with `*`.

When an existing order is anonymized, all `custom_attributes` values associated with an order are also anonymized.

## `POST` Anonymize Orders 

```http
https://useast.api.elasticpath.com/v2/orders/anonymize
```

## Parameters

### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Name   | Required | Type     | Description |
|:-------|:---------|:---------|:------------|
| `order_ids` | Required | `array [string]` | The unique identifiers of the orders to be anonymized. You can anonymize multiple orders at the same time. |

## Request Example - Curl

```bash
curl -X POST https://useast.api.elasticpath.com/v2/orders/anonymize \
    -H "Authorization: Bearer XXXX" \
    -H "Content-Type: application/json" \
    -d $ {
      "data": {
        "order_ids": [
            "db21f851-ae44-4111-a175-ee2c6c257031"
    ]
  }
}
```

## Response Example

`200 OK`

```json
{
    "data": [
        {
            "type": "order",
            "id": "db21f851-ae44-4111-a175-ee2c6c257031",
            "status": "cancelled",
            "payment": "unpaid",
            "shipping": "unfulfilled",
            "anonymized": true,
            "customer": {
                "name": "**",
                "email": "**"
            },
            "shipping_address": {
                "first_name": "**",
                "last_name": "**",
                "phone_number": "**",
                "company_name": "**",
                "line_1": "**",
                "line_2": "**",
                "city": "**",
                "postcode": "**",
                "county": "**",
                "country": "**",
                "instructions": ""
            },
            "billing_address": {
                "first_name": "**",
                "last_name": "**",
                "company_name": "**",
                "line_1": "**",
                "line_2": "**",
                "city": "**",
                "postcode": "**",
                "county": "**",
                "country": "**"
            },
            "links": {},
            "meta": {
                "display_price": {
                    "with_tax": {
                        "amount": 0,
                        "currency": "GBP",
                        "formatted": "£0.00"
                    },
                    "without_tax": {
                        "amount": 0,
                        "currency": "GBP",
                        "formatted": "£0.00"
                    },
                    "tax": {
                        "amount": 0,
                        "currency": "GBP",
                        "formatted": "£0.00"
                    },
                    "discount": {
                        "amount": -96046,
                        "currency": "GBP",
                        "formatted": "-£960.46"
                    },
                    "balance_owing": {
                        "amount": 0,
                        "currency": "GBP",
                        "formatted": "£0.00"
                    },
                    "paid": {
                        "amount": 0,
                        "currency": "GBP",
                        "formatted": "£0.00"
                    },
                    "authorized": {
                        "amount": 0,
                        "currency": "GBP",
                        "formatted": "£0.00"
                    },
                    "without_discount": {
                        "amount": 0,
                        "currency": "GBP",
                        "formatted": "£0.00"
                    }
                },
                "timestamps": {
                    "created_at": "2022-01-13T16:28:53Z",
                    "updated_at": "2023-06-02T16:06:14Z"
                }
            },
            "relationships": {
                "items": {
                    "data": [
                        {
                            "type": "item",
                            "id": "e377d477-8db5-4a5f-9553-805ec234ebfb"
                        },
                        {
                            "type": "item",
                            "id": "b2a98b16-cf68-4048-843d-28afa70463cd"
                        },
                        {
                            "type": "item",
                            "id": "da30a0b6-53ac-49bd-8b0d-3b9a555936e3"
                        },
                        {
                            "type": "item",
                            "id": "70f00979-9bd1-4bc1-b976-c92112f3d899"
                        },
                        {
                            "type": "item",
                            "id": "0e2c8332-7bea-4b73-a9eb-243b2389ca0c"
                        },
                        {
                            "type": "item",
                            "id": "a5b9bf8e-f2f2-4d67-a952-a5b98baf9a1e"
                        }
                    ]
                },
                "customer": {
                    "data": {
                        "type": "customer",
                        "id": "23e43853-2826-4a0e-970b-f7e5d3eefcb2"
                    }
                }
            }
        }
    ]
}
```

## Errors

The following error is returned when you try to anonymize an order that is unfulfilled:

```Json
{
    "errors": [
        {
            "status": 422,
            "title": "Could not anonymize orders",
            "detail": "Order has status: order:complete, payment:paid, shipping:unfulfilled; only fulfilled or refunded or cancelled orders may be anonymized",
            "meta": {
                "order_id": "0b508e02-d3de-4673-83ca-087875d06d8f"
            }
        }
    ]
}
```


