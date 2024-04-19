---
title: Transactions Overview
nav_label: Transactions Overview
sidebar_position: 1
---

## The transaction Object

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | The ID of the transaction. |
| `type` | `string` | This attribute is always `transaction`. |
| `reference` | `string` | The payment gateway reference. |
| `gateway` | `string` | The name of the payment gateway used. |
| `amount` | `integer` | The amount for this transaction. |
| `currency` | `string` | The transaction currency. |
| `transaction_type` | string | The type of transaction, such as `purchase`,`capture`, `authorize` or `refund`. |
| `status` | string | The status provided by the gateway for this transaction, such as `complete` or `failed`. |
| `relationships` | object | This attribute contains the order object this transaction relates to. |
| `timestamps` | object | This attribute contains the `created_at` and `updated_at` properties. |

## Sample Object

```javascript
{
	"data": [
		{
			"id": "03f634c3-9c70-4aa1-8178-f7d41a45d92z",
			"type": "transaction",
			"reference": "ch_1CVFEDCTrBHFHIc3NNG6EaFU",
			"gateway": "stripe",
			"amount": 40000,
			"currency": "USD",
			"transaction-type": "purchase",
			"transaction_type": "purchase",
			"status": "complete",
			"relationships": {
				"order": {
					"data": {
						"type": "order",
						"id": "f6f63e5b-1e04-47aa-9213-993ead03d441"
					}
				}
			},
			"meta": {
				"display_price": {
		        	"amount": 40000,
			        "currency": "USD",
			        "formatted": "$400.00"
				},
				"created_at": "2019-06-24T13:14:21.913Z",
				"timestamps": {
					"created_at": "2019-06-24T13:14:21.913Z",
					"updated_at": "2019-06-24T13:14:21.913Z"
				}
			}
		}
	]
}
```
