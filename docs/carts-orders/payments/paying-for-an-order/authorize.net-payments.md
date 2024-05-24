---
title: Authorize.net Payments
nav_label: Authorize.net
sidebar_position: 3
---

The Authorize.net integration supports the following payment methods:

- `authorize`
- `capture`
- `purchase`
- `refund`

## `POST` Pay by Token

```http
https://useast.api.elasticpath.com/v2/orders/:orderId/payments
```

## Parameters

### Path parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `orderId` | Required | `string` | The Universally Unique Identifier (UUID) of the order you want to pay for. |

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `payment` | Required | `string` | The Authorize.net customer profile ID. |
| `method` | Required | `string` | `purchase`, `authorize`, `capture` |
| `amount` | Optional | `integer` | Specifies the amount to be paid for the transaction. |
| `gateway` | Required | `string` | You use `authorize_net` in this case. |
| `options.customer_payment_profile_id` | Required | `string` | The Authorize.net customer payment profile ID. |

## Request Example

```bash
curl -X POST https://useast.api.elasticpath.com/v2/orders/:orderId/payments \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
        "data": {
          "gateway": "authorize_net",
          "method": "purchase",
          "amount": 100,
          "payment": "xxx",
          "options": {
            "customer_payment_profile_id": "xxx"
          }
        }
      }
```

## Response Example

`200 OK`


```json
{
    "data": {
        "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
        "type": "transaction",
        "reference": "xxx",
        "gateway": "authorize_net",
        "amount": 100,
        "currency": "USD",
        "transaction-type": "purchase",
        "status": "complete",
        "relationships": {
            "order": {
                "data": {
                    "type": "order",
                    "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
                }
            }
        },
        "meta": {
            "display_price": {
                "amount": 100,
                "currency": "USD",
                "formatted": "$100.00"
            },
            "created_at": "2019-01-31T17:20:39.378Z"
        }
    }
}
```
