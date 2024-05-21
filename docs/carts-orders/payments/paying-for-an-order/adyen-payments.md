---
title: Adyen Payments
nav_label: Adyen Payments
sidebar_position: 2
---

[Adyen](https://www.adyen.com) integration supports the following payment methods:

- `authorize`
- `capture`
- `purchase`

## `POST` Pay by token

```http
https://useast.api.elasticpath.com/v2/orders/:orderId/payments
```

## Parameters

### Path parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `orderId` | Required | `string` | The Universally Unique Identifier (UUID) of the order that you want to pay for. |

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `payment` | Required | `string` | The Adyen `recurringDetailReference` payment method identifier. |
| `method` | Required | `string` | Enter `purchase` or `authorize`. |
| `amount` | Optional | `integer` | Specifies the amount to be paid for the transaction. |
| `gateway` | Required | `string` | Enter `adyen`. |
| `options.shopper_reference` | Required | `string` | The shopper reference token associated with the saved payment method. |
| `options.recurring_processing_model` | Optional | `string` | Enter `CardOnFile` for a one-time purchase. |


## Request Examples

### Curl

```bash
curl -X POST https://useast.api.elasticpath.com/v2/orders/:order_id/payments \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
      "data": {
        "gateway": "adyen",
        "method": "purchase",
        "amount": 100,
        "payment": "##8315932173953405",
        "options": {
			"shopper_reference": "MyShopper12345",
			"recurring_processing_model": "CardOnFile"
        }
      }
    }
```

### JavaScript SDK

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X'
})
const orderId = 'XXXX'
Moltin.Orders.Payment(orderId, {
  gateway: 'adyen',
  method: 'purchase',
  payment: "##8315932173953405",
  options: {
    shopper_reference: "MyShopper12345",
	recurring_processing_model: "CardOnFile"
  }
}).then(() => {
  // Do something
})
```

## Response Example

`200 OK`

```json
{
    "data": {
        "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
        "type": "transaction",
        "reference": "#882593221587009K#",
        "gateway": "adyen",
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
