---
title: Cancel a Transaction
nav_label: Cancel a Transaction
sidebar_position: 6
---

## `POST` Cancel a Transaction

```http
https://useast.api.elasticpath.com/v2/orders/:orderId/transactions/:transactionId/cancel
```

Use this endpoint to cancel or void a pending or authorized transaction. The transaction can be canceled or voided when it is in `pending` and `completed` statuses.

:::note
This endpoint works only for Stripe and PayPal and does not work for manual gateway.
:::

## Parameters

### Path parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `transactionId` | Required | `string` | The unique identifier of the transaction to be canceled or voided. |
| `orderId` | Required | `string` | The unique identifier of the order. |

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Name | Required | Type | Description                                                                                                                                                                                                                                                                                                       |
| --- | --- | --- |-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `reason` | Optional | `string` | Specifies the reason for canceling the transaction. The reason may include `duplicate`, `fraudulent`, `requested_by_customer`, or `abandoned`. |

## Request Examples

### Curl

```bash
curl -X POST https://useast.api.elasticpath.com/v2/orders/:orderId/transactions/:transaction_id/cancel \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
        "data": {
            "reason": "requested_by_customer",
            "options": {}
        }
      }
```

### JavaScript SDK

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X',
  client_secret: 'X'
})

const orderId = "25617d3e-14a6-434c-bfab-3fda87517aaf";
const transactionId = "af18b745-0ea6-41ba-8042-cb91178b21f7";

Moltin.Transactions.Cancel({
    order: orderId
    transaction: transactionId
  },
  {
    reason: 'duplicate'
  }).then(transaction => {
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
        "reference": "pi_xxxxxxxxxxxxxx",
        "gateway": "elastic_path_payments_stripe",
        "amount": 20000,
        "refunded_amount": 0,
        "currency": "USD",
        "transaction_type": "authorize",
        "status": "cancelled",
        "relationships": {
            "order": {
                "data": {
                    "type": "order",
                    "id": "5xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
                }
            }
        },
        "meta": {
            "display_price": {
                "amount": 20000,
                "currency": "USD",
                "formatted": "$200.00"
            },
            "display_refunded_amount": {
                "total": {
                    "amount": 0,
                    "currency": "USD",
                    "formatted": "$0.00"
                }
            },
            "timestamps": {
                "created_at": "2023-03-08T20:22:04Z",
                "updated_at": "2023-03-08T20:23:25Z"
            }
        },
        "payment_intent": {
            "amount": 20000,
            "amount_capturable": 0,
            "amount_details": {
                "tip": {}
            },
            "amount_received": 0,
            "application": "ca_xxxxxxxxxxxxxxx",
            "application_fee_amount": null,
            "automatic_payment_methods": null,
            "canceled_at": 1678307005,
            "cancellation_reason": "requested_by_customer",
            "capture_method": "manual",
            "charges": {
                "data": [],
                "has_more": false,
                "object": "list",
                "total_count": 0,
                "url": "/v1/charges?payment_intent=pi_xxxxxxxxxxxxxx"
            },
            "client_secret": "XXXXXXXXXXXXXX-XXXXXX-XXXXXXX",
            "confirmation_method": "manual",
            "created": 1678306924,
            "currency": "usd",
            "customer": null,
            "description": null,
            "id": "pi_XXXXXXXXXXXX",
            "invoice": null,
            "last_payment_error": null,
            "latest_charge": null,
            "livemode": false,
            "metadata": {
                "email": "andy@example.com",
                "ip_address": "174.91.171.193",
                "order_id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
            },
            "next_action": null,
            "object": "payment_intent",
            "on_behalf_of": null,
            "payment_method": "pm_xxxxxxxxxxxx",
            "payment_method_options": {
                "card": {
                    "installments": null,
                    "mandate_options": null,
                    "network": null,
                    "request_three_d_secure": "automatic"
                }
            },
            "payment_method_types": [
                "card"
            ],
            "processing": null,
            "receipt_email": "john@example.com",
            "review": null,
            "setup_future_usage": null,
            "shipping": null,
            "source": null,
            "statement_descriptor": null,
            "statement_descriptor_suffix": null,
            "status": "canceled",
            "transfer_data": null,
            "transfer_group": null
        },
        "payment_details": {
            "detailed_status": ""
        }
    }
}
```
