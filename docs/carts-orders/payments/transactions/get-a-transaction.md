---
title: Get a Transaction
nav_label: Get a Transaction
sidebar_position: 3
---

## `GET` Get a single transaction

```http
https://useast.api.elasticpath.com/v2/orders/:orderId/transactions/:transctionId
```

## Parameters

### Path parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `orderId` | Required | `string` | The Universally Unique Identifier (UUID) of the order that you require transactions for. |
| `transactionId` | Required | `string` | The UUID of the transaction. |

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Example

```bash
curl -X GET https://useast.api.elasticpath.com/v2/orders/:orderId/transactions/:transctionId \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

## Response Example

`200 OK`

```json
{
    "data": {
            "id": "d9040c70-f7f3-4b7d-8422-09db00dd2da6",
            "type": "transaction",
            "reference": "manual",
            "gateway": "manual",
            "amount": 19000,
            "refunded_amount": 0,
            "currency": "USD",
            "transaction_type": "purchase",
            "status": "complete",
            "relationships": {
                "order": {
                    "data": {
                        "type": "order",
                        "id": "082a654a-8b8d-41cd-ba2a-e499a8e1e35d"
                    }
                }
            },
            "meta": {
                "display_price": {
                    "amount": 19000,
                    "currency": "USD",
                    "formatted": "$190.00"
                },
                "display_refunded_amount": {
                    "total": {
                        "amount": 0,
                        "currency": "USD",
                        "formatted": "$0.00"
                    }
                },
                "timestamps": {
                    "created_at": "2020-08-18T18:36:44Z",
                    "updated_at": "2020-08-18T18:36:45Z"
                }
            }
        }
}
```
