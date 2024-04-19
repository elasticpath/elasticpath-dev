---
title: CyberSource Payments
nav_label: CyberSource
sidebar_position: 6
---

The CyberSource integration supports the following payment methods:

- `authorize`
- `capture`
- `purchase`
- `refund`

## `POST` Pay by token

```http
https://useast.api.elasticpath.com/v2/orders/:orderId/payments
```

## Parameters

### Path parameters

| Name      | Required | Type     | Description                                |
|:----------|:---------|:---------|:-------------------------------------------|
| `orderId` | Required | `string` | The Universally Unique Identifier (UUID) of the order that you want to pay for. |

### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Name      | Required | Type     | Description                      |
|:----------|:---------|:---------|:---------------------------------|
| `payment` | Required | `string` | The CyberSource token.           |
| `method`  | Optional | `string` | Enter `purchase` or `authorize`. |
| `amount` | Optional | `integer` | Specifies the amount to be paid for the transaction. |
| `gateway` | Optional | `string` | Enter `cyber_source`.            |

## Request Examples

### Curl

```bash
curl -X POST https://useast.api.elasticpath.com/v2/orders/:orderId/payments \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
        "data": {
          "gateway": "cyber_source",
          "method": "purchase",
          "amount": 100,
          "payment": ";;;;;;11234FS5353FGFRSS2562"
        }
      }'
```

### Using merchant defined fields

```bash
curl -X POST https://useast.api.elasticpath.com/v2/orders/:orderId/payments \
     -H "Authorization: Bearer XXXX" \
     -H "Authorization: Bearer XXXX" \
     -d $ {
    "data": {
        "gateway": "cyber_source",
        "method": "purchase",
        "payment": ";;;;;;A4A0599983621A96E05341588999E7DA"
        "options": {
            "mdd_field_1": "one thing",
            "mdd_field_2": "and another",
            "mdd_field_3": "and even more",
            "mdd_field_4": "and on.."
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
        "gateway": "cyber_source",
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
