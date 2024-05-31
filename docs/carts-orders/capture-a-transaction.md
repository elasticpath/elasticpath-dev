---
title: Capture a Transaction
nav_label: Capture a Transaction
sidebar_position: 150
---

## `POST` Capture a Transaction

```http
https://useast.api.elasticpath.com/v2/orders/:orderId/transactions/:transactionId/capture
```

Use this endpoint to capture a previously authorized payment. In this step, you can also pass in a custom reference, such as the payment reference from your chosen gateway.

## Parameters

### Path parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `transactionId` | Required | `string` | The UUID of the transaction to capture. |
| `orderId` | Required | `string` | The UUID of the order. |

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Name | Required | Type | Description                                                                                                                                                                                                                                                                                                       |
| --- | --- | --- |-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `custom_reference` | Optional | `string` | A custom reference that you can use to identify this transaction. If the value is different from original transaction, it will be overwritten by this value. Empty string value will clear the original value. If you omit this field in the request, the original value from the previous transaction will still persist. |

## Request Example

```bash
curl -X POST https://useast.api.elasticpath.com/v2/orders/:orderId/transactions/:transaction_id/capture \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
        "data": {
            "custom_reference": "my_custom_reference"
        }
      }
```

## Response Example

`200 OK`

```json
{
    "data": {
        "id": "bcafac29-c8ca-4293-822c-d1213e085c7c",
        "type": "transaction",
        "reference": "manual",
        "custom_reference": "my_custom_reference",
        "gateway": "manual",
        "amount": 60000,
        "currency": "GBP",
        "transaction_type": "capture",
        "status": "complete",
        "relationships": {
            "order": {
                "data": {
                    "type": "order",
                    "id": "239f104c-0b56-433c-a5f8-b73349196269"
                }
            }
        },
        "meta": {
            "display_price": {
                "amount": 60000,
                "currency": "GBP",
                "formatted": "£600.00"
            },
            "timestamps": {
                "created_at": "2020-02-17T13:24:42Z",
                "updated_at": "2020-02-17T13:24:45Z"
            }
        }
    }
}
```

## `POST` Capture a Transaction - Manual

Use this endpoint to manually capture a previously authorized payment. 

```http
https://useast.api.elasticpath.com/v2/orders/:orderId/transactions/:transactionId/capture
```

## Parameters

### Path parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `transactionId` | Required | `string` | The UUID of the transaction to capture. |
| `orderId` | Required | `string` | The UUID of the order. |

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

|  Name | Required | Type | Description |
| --- | --- | --- | --- |                                                   
| `capture_mechanism` | Required | `string` | Always `manual`. |

## Request Example

```bash
curl -X POST https://useast.api.elasticpath.com/v2/orders/:orderId/transactions/:transaction_id/capture \
     -H "Authorization: Bearer XXXX"
     '{
        "data": {
            "capture_mechanism": "manual"
        }
      }'
```

## Response Example

`200 OK`

```Json
{
    "data": {
        "id": "09cf2557-ac72-46c4-8c66-243d065266e8",
        "type": "transaction",
        "reference": "pi_3MXQWxS5fsvVtlID1w1SejAP",
        "gateway": "elastic_path_payments_stripe",
        "amount": 20000,
        "refunded_amount": 0,
        "capture_mechanism": "manual",
        "currency": "USD",
        "transaction_type": "capture",
        "status": "complete",
        "relationships": {
            "order": {
                "data": {
                    "type": "order",
                    "id": "37e8325e-dd2d-48ff-9e1c-3ab82871a893"
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
                "created_at": "2023-02-03T14:46:23Z",
                "updated_at": "2023-02-03T14:46:47Z"
            }
        }
    }
}
```

## Errors

If you manually capture an authorized transaction, you can manually mark a transaction as refunded. Therefore, you cannot perform automatic refund. The following error response is returned if you perform automatic refund:

```Json
{
    "errors": [
        {
            "status": 400,
            "title": "Error while refunding",
            "detail": "Unable to automatically refund a manually capture transaction "
        }
    ]
}
```

When you capture a transaction that was authorized but expired, the following error response example is returned from Stripe:

```json
{
    "errors": [
        {
            "status": 400,
            "title": "Payment gateway processing failed",
            "detail": "This PaymentIntent could not be captured because it has a status of canceled. Only a PaymentIntent with one of the following statuses may be captured: requires_capture.",
            "meta": {
                "error": {
                    "code": "payment_intent_unexpected_state",
                    "doc_url": "https://stripe.com/docs/error-codes/payment-intent-unexpected-state",
                    "message": "This PaymentIntent could not be captured because it has a status of canceled. Only a PaymentIntent with one of the following statuses may be captured: requires_capture.",
                    "payment_intent": {
                        "amount": 10000,
                        "amount_capturable": 0,
                        "amount_details": {
                            "tip": {}
                        },
                        "amount_received": 0,
                        "application": "ca_XXXXXXXXXXXXXXXXX",
                        "application_fee_amount": null,
                        "automatic_payment_methods": null,
                        "canceled_at": 1678903544,
                        "cancellation_reason": "automatic",
                        "capture_method": "manual",
                        "charges": {
                            "data": [
                                {
                                    "amount": 10000,
                                    "amount_captured": 0,
                                    "amount_refunded": 10000,
                                    "application": "ca_XXXXXXXXXXXXXXXXXXXXXX",
                                    "application_fee": null,
                                    "application_fee_amount": null,
                                    "balance_transaction": null,
                                    "billing_details": {
                                        "address": {
                                            "city": null,
                                            "country": null,
                                            "line1": null,
                                            "line2": null,
                                            "postal_code": null,
                                            "state": null
                                        },
                                        "email": null,
                                        "name": null,
                                        "phone": null
                                    },
                                    "calculated_statement_descriptor": "BRITISH COLUMBIA",
                                    "captured": false,
                                    "created": 1678298743,
                                    "currency": "usd",
                                    "customer": null,
                                    "description": null,
                                    "destination": null,
                                    "dispute": null,
                                    "disputed": false,
                                    "failure_balance_transaction": null,
                                    "failure_code": null,
                                    "failure_message": null,
                                    "fraud_details": {},
                                    "id": "ch_XXXXXXXXXXXXXXXXXXXXXXX",
                                    "invoice": null,
                                    "livemode": false,
                                    "metadata": {
                                        "email": "andy@example.com",
                                        "ip_address": "206.116.129.195",
                                        "order_id": "bb4e20d2-c691-45ba-9194-3b56889a8a89"
                                    },
                                    "object": "charge",
                                    "on_behalf_of": null,
                                    "order": null,
                                    "outcome": {
                                        "network_status": "approved_by_network",
                                        "reason": null,
                                        "risk_level": "normal",
                                        "risk_score": 28,
                                        "seller_message": "Payment complete.",
                                        "type": "authorized"
                                    },
                                    "paid": true,
                                    "payment_intent": "pi_XXXXXXXXXXXXXXXXX",
                                    "payment_method": "pm_XXXXXXXXXXXXXXXXX",
                                    "payment_method_details": {
                                        "card": {
                                            "brand": "visa",
                                            "checks": {
                                                "address_line1_check": null,
                                                "address_postal_code_check": null,
                                                "cvc_check": null
                                            },
                                            "country": "US",
                                            "exp_month": 3,
                                            "exp_year": 2024,
                                            "fingerprint": "6EScLzf5uXxJBcOw",
                                            "funding": "credit",
                                            "installments": null,
                                            "last4": "4242",
                                            "mandate": null,
                                            "network": "visa",
                                            "three_d_secure": null,
                                            "wallet": null
                                        },
                                        "type": "card"
                                    },
                                    "receipt_email": "john@example.com",
                                    "receipt_number": null,
                                    "receipt_url": "https://pay.stripe.com/receipts/payment/CAcaFwoVYWNjdF8xS2pBaElTNUc2WWZHUlhZKKPN6KAGMgaEeIHxYGY6LBZTPB5PVZwD5OiKRdNSUpBHhCojSpNqWw1_S4FZfH8Apayi9bClrUzwHLCg",
                                    "refunded": true,
                                    "refunds": {
                                        "data": [
                                            {
                                                "amount": 10000,
                                                "balance_transaction": null,
                                                "charge": "ch_XXXXXXXXXXXXXXXXX",
                                                "created": 1678903544,
                                                "currency": "usd",
                                                "id": "re_XXXXXXXXXXXXXXXXXXXXXXX",
                                                "metadata": {},
                                                "object": "refund",
                                                "payment_intent": "pi_XXXXXXXXXXXXXXXXXXXXX",
                                                "reason": "expired_uncaptured_charge",
                                                "receipt_number": null,
                                                "source_transfer_reversal": null,
                                                "status": "succeeded",
                                                "transfer_reversal": null
                                            }
                                        ],
                                        "has_more": false,
                                        "object": "list",
                                        "total_count": 1,
                                        "url": "/v1/charges/ch_XXXXXXXXXXXXXXXXX/refunds"
                                    },
                                    "review": null,
                                    "shipping": null,
                                    "source": null,
                                    "source_transfer": null,
                                    "statement_descriptor": null,
                                    "statement_descriptor_suffix": null,
                                    "status": "succeeded",
                                    "transfer_data": null,
                                    "transfer_group": null
                                }
                            ],
                            "has_more": false,
                            "object": "list",
                            "total_count": 1,
                            "url": "/v1/charges?payment_intent=pi_XXXXXXXXXXXXXXXXXXX"
                        },
                        "client_secret": "pi_XXXXXXXXXXXXX_XXXXXXXXXXXXXXXXXXX",
                        "confirmation_method": "automatic",
                        "created": 1678298743,
                        "currency": "usd",
                        "customer": null,
                        "description": null,
                        "id": "pi_XXXXXXXXXXXXXXXXXXXX",
                        "invoice": null,
                        "last_payment_error": null,
                        "latest_charge": "ch_XXXXXXXXXXXXXXXXXXX",
                        "livemode": false,
                        "metadata": {
                            "email": "andy@example.com",
                            "ip_address": "206.116.129.195",
                            "order_id": "bb4e20d2-c691-45ba-9194-3b56889a8a89"
                        },
                        "next_action": null,
                        "object": "payment_intent",
                        "on_behalf_of": null,
                        "payment_method": "pm_XXXXXXXXXXXXXXXXX",
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
                    "request_log_url": "https://dashboard.stripe.com/acct_XXXXXXXXXXXX/test/logs/req_VQ55E6FnJYzKvT?t=1679435427",
                    "type": "invalid_request_error"
                }
            }
        }
    ]
}
```

When you capture a transaction that was authorized but expired, the following error response example is returned from Paypal: 

```json
{
    "errors": [
        {
            "status": 422,
            "title": "Error received from paypal",
            "detail": "The requested action could not be performed, semantically incorrect, or failed business validation.",
            "meta": {
                "debug_id": "cf56b76ac5b8d",
                "details": {
                    "description": "Authorization has expired.",
                    "issue": "AUTHORIZATION_EXPIRED"
                },
                "name": "UNPROCESSABLE_ENTITY"
            }
        }
    ]
}
```
:::note
You can cancel a transaction and initiate a new transaction to make the payment. The transaction status will remain `completed` until you [cancel a transaction](/docs/api/carts/cancel-a-transaction).
::: 

When you [GET a transaction](/docs/api/carts/get-a-transaction) that was authorized but expired, the following response is returned with `payment_details` and `next_actions`:

```json
{
    "data": [
        {
            "id": "f0336c18-33ac-4945-855d-f711f7da7477",
            "type": "transaction",
            "reference": "pi_XXXXXXXXXXXXXXXXX",
            "gateway": "elastic_path_payments_stripe",
            "amount": 10000,
            "refunded_amount": 0,
            "currency": "USD",
            "transaction_type": "authorize",
            "status": "complete",
            "relationships": {
                "order": {
                    "data": {
                        "type": "order",
                        "id": "bb4e20d2-c691-45ba-9194-3b56889a8a89"
                    }
                }
            },
            "meta": {
                "display_price": {
                    "amount": 10000,
                    "currency": "USD",
                    "formatted": "$100.00"
                },
                "display_refunded_amount": {
                    "total": {
                        "amount": 0,
                        "currency": "USD",
                        "formatted": "$0.00"
                    }
                },
                "timestamps": {
                    "created_at": "2023-03-08T18:05:43Z",
                    "updated_at": "2023-03-08T18:05:44Z"
                }
            },
            "payment_details": {
                "detailed_status": "expired_uncaptured_charge"
            },
            "next_actions": [
                "cancel",
                "capture"
            ]
        }
    ]
}
```
