---
title: Get all Transactions
nav_label: Get all Transactions
sidebar_position: 2
---

## `GET` Get all transactions

```http
https://useast.api.elasticpath.com/v2/orders/:orderId/transactions
```

## Parameters

### Path parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `orderId` | Required | `string` | The Universally Unique Identifier (UUID) of the order you require transactions for. |

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Examples

### Curl

```bash
curl -X GET https://useast.api.elasticpath.com/v2/orders/:orderId/transactions \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

### JavaScript SDK

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X',
  client_secret: 'X'
})
const id = 'XXXX'
Moltin.Orders.Transactions(id).then(transactions => {
  // Do something
})
```

## Response Example

`200 OK`

```json
{
    "data": [
        {
            "id": "015a3452-29a2-45b4-8b0d-0d697b224d45",
            "type": "transaction",
            "reference": "manual",
            "gateway": "manual",
            "amount": 19000,
            "currency": "USD",
            "transaction_type": "capture",
            "status": "complete",
            "relationships": {
                "order": {
                    "data": {
                        "type": "order",
                        "id": "24f17926-af4b-439c-ae3c-13aa371bce77"
                    }
                }
            },
            "meta": {
                "display_price": {
                    "amount": 19000,
                    "currency": "USD",
                    "formatted": "$190.00"
                },
				"timestamps": {
					"created_at": "2018-12-17T16:19:53.379Z",
					"updated_at": "2018-12-17T16:19:53.379Z"
				}
            }
        }
    ]
}
```
