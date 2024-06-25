---
title: Confirm an Order
nav_label: Confirm an Order
sidebar_position: 160
---

## `POST` Confirm an Order

```http
https://useast.api.elasticpath.com/v2/orders/:orderID/confirm
```

Use this endpoint to confirm the stripe payment intent and synchronize it with Commerce Cloud. See [Cart Payment Intent](/docs/carts-orders/cart-payment-intent).

## Parameters

### Path parameters

| Name | Required | Type     | Description                             |
|:-----|:---------|:---------|:----------------------------------------|
| `orderID` | Required | `string` | The ID of the order that you want to confirm. |

### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Name   | Required | Type     | Description |
|:-------|:---------|:---------|:------------|
| `options` | Optional | `object` | Defines various Stripe options, such as `order_id` and `statement_descriptor`, when confirming an order that is linked to a Payment Intent. Refer to [Stripe Documentation](https://stripe.com/docs/api/payment_intents) for additional available `options`. | 
| `options.metadata.order_id` | Optional | `string` | Represents the unique identifier of the order linked to the Payment Intent. |
| `options.metadata.statement_descriptor` | Optional | `string` | Represents description of a charge on your shoppers statements. |

## Request Example

```bash
curl -X POST https://useast.api.elasticpath.com/v2/orders/:orderID/confirm \
    -H "Authorization: Bearer XXXX" \
    -H "Content-Type: application/json" \
    -d $ {
      "data": {
        "options": {
            "metadata": {
                "order_id": "{{orderID}}",
                "statement_descriptor": "Confirmed intent"
            }
        }
    }
}
```

## Response Example

```json
{
    "data": {
        "id": "33693acb-ef86-49b1-88ff-29ecdfad1e3e",
        "type": "transaction",
        "reference": "pi_xxxxxxxxxxxxxxxxxx",
        "name": "Stripe Payment Intent",
        "custom_reference": "pi_xxxxxxxxxxxxxxxxxx",
        "gateway": "elastic_path_payments_stripe",
        "amount": 10000,
        "refunded_amount": 0,
        "currency": "USD",
        "transaction_type": "authorize",
        "status": "pending",
        "relationships": {
            "order": {
                "data": {
                    "type": "order",
                    "id": "d99142c0-1bfb-407a-a4a6-ed0e7641cf9a"
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
                "created_at": "2024-01-08T21:43:08Z",
                "updated_at": "2024-01-08T21:43:08Z"
            }
        },
        "payment_intent": {
            "amount": 10000,
            "amount_capturable": 0,
            "amount_details": {
                "tip": {
                    "amount": 0
                }
            },
            "amount_received": 0,
            "application": {
                "deleted": false,
                "id": "ca_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
                "name": "",
                "object": ""
            },
            "application_fee_amount": 0,
            "automatic_payment_methods": {
                "enabled": true
            },
            "canceled_at": 0,
            "cancellation_reason": "",
            "capture_method": "manual",
            "charges": {
                "data": [],
                "has_more": false,
                "total_count": 0,
                "url": "/v1/charges?payment_intent=pi_xxxxxxxxxxxxxxxxxx"
            },
            "client_secret": "pi_xxxxxxxxxxxxxxxxxx_secret_xxxxxxxxxxxxxxxxxx",
            "confirmation_method": "automatic",
            "created": 1704750178,
            "currency": "usd",
            "customer": null,
            "description": "",
            "id": "pi_xxxxxxxxxxxxxxxxxx",
            "invoice": null,
            "last_payment_error": null,
            "livemode": false,
            "metadata": {
                "order_id": "d99142c0-1bfb-407a-a4a6-ed0e7641cf9a",
                "statement_descriptor": "Confirmed intent"
            },
            "next_action": null,
            "object": "payment_intent",
            "on_behalf_of": null,
            "payment_method": null,
            "payment_method_options": {
                "acss_debit": null,
                "affirm": null,
                "afterpay_clearpay": null,
                "alipay": null,
                "au_becs_debit": null,
                "bacs_debit": null,
                "bancontact": null,
                "blik": null,
                "boleto": null,
                "card": {
                    "capture_method": "",
                    "installments": null,
                    "mandate_options": null,
                    "network": "",
                    "request_three_d_secure": "automatic",
                    "setup_future_usage": "",
                    "statement_descriptor_suffix_kana": "",
                    "statement_descriptor_suffix_kanji": ""
                },
                "card_present": null,
                "customer_balance": null,
                "eps": null,
                "fpx": null,
                "giropay": null,
                "grabpay": null,
                "ideal": null,
                "interac_present": null,
                "klarna": null,
                "konbini": null,
                "link": {
                    "capture_method": "",
                    "persistent_token": "",
                    "setup_future_usage": ""
                },
                "oxxo": null,
                "p24": null,
                "paynow": null,
                "promptpay": null,
                "sepa_debit": null,
                "sofort": null,
                "us_bank_account": null,
                "wechat_pay": null
            },
            "payment_method_types": [
                "card",
                "link"
            ],
            "processing": null,
            "receipt_email": "john@example.com",
            "review": null,
            "setup_future_usage": "",
            "shipping": null,
            "source": null,
            "statement_descriptor": "",
            "statement_descriptor_suffix": "",
            "status": "requires_payment_method",
            "transfer_data": null,
            "transfer_group": ""
        },
        "payment_details": {
            "detailed_status": "requires_payment_method"
        },
        "next_actions": [
            "cancel"
        ]
    }
}
```

