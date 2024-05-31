---
title: Update Cart Payment Intent 
nav_label: Update Cart Payment Intent 
sidebar_position: 129
---

## `PUT` Update Cart Payment Intent

```http
https://useast.api.elasticpath.com/v2/carts/:cartID/payments/:payment_intent_id
```

Use this endpoint to update the Stripe payment intent with final cart details whenever there are changes in the cart total.

## Parameters

### Path parameters

| Name      | Required | Type     | Description                                |
|:----------|:---------|:---------|:-------------------------------------------|
| `cartID` | Required | `string` | The universally unique identifier of the cart for which you want to update a payment intent. |
| `payment_intent_id` |  Required | `string` | The universally unique identifier of the payment intent that you want to be updated. |

### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Body

| Name                      | Required | Type      | Description               |
|:--------------------------|:---------|:----------|:--------------------------|
| `gateway` | Required | `string` | Specifies the gateway. You must use `elastic_path_payments_stripe` as the required gateway. |
|`method` | Required | `string` | Specifies the transaction method, such as `purchase` or `authorize`. |
| `options` | Optional | `object` | Defines various Stripe options, such as `automatic_payment_methods` and `receipt_email`, when creating a Payment Intent for a cart. Refer to [Stripe Documentation](https://stripe.com/docs/api/payment_intents) for additional available `options`. |
|  `options.receipt_email`   | Optional | `string`  | Indicates the email address to which you want to send the Stripe receipts for the transactions within the store. This feature is available only in the live mode. |
| `options.metadata` | Optional | `object`| Represents a set of key-value pairs that can be linked to an object, providing a convenient way to store additional structured information about the object. See [Stripe Documentation](https://stripe.com/docs/api/payment_intents/update#update_payment_intent-metadata). |

## Request Example

```bash
curl -X PUT https://useast.api.elasticpath.com/v2/carts/:cartID/payments/:payment_intent_id \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
        "data": {
          "gateway": "elastic_path_payments_stripe",
          "method": "authorize",
          "options": {
            "receipt_email": "john@example.com",
            "metadata" : { 
              "updated-key" : "updated-value"
            }
          }
      }
    }
```

## Response Example

```json
{
    "data": {
        "id": "12345",
        "name": "Cart",
        "description": "",
        "type": "cart",
        "discount_settings": {
            "custom_discounts_enabled": false
        },
        "links": {
            "self": "https://useast.api.elasticpath.com/v2/carts/12345"
        },
        "meta": {
            "display_price": {
                "with_tax": {
                    "amount": 20000,
                    "currency": "CAD",
                    "formatted": "$200.00"
                },
                "without_tax": {
                    "amount": 20000,
                    "currency": "CAD",
                    "formatted": "$200.00"
                },
                "tax": {
                    "amount": 0,
                    "currency": "CAD",
                    "formatted": "$0.00"
                },
                "discount": {
                    "amount": 0,
                    "currency": "CAD",
                    "formatted": "$0.00"
                },
                "without_discount": {
                    "amount": 20000,
                    "currency": "CAD",
                    "formatted": "$200.00"
                },
                "shipping": {
                    "amount": 0,
                    "currency": "CAD",
                    "formatted": "$0.00"
                }
            },
            "timestamps": {
                "created_at": "2024-01-16T21:14:58Z",
                "updated_at": "2024-01-16T21:15:03Z",
                "expires_at": "2024-01-23T21:15:03Z"
            }
        },
        "relationships": {
            "items": {
                "data": [
                    {
                        "type": "custom_item",
                        "id": "c1cb7887-28b4-4e30-88b4-647dfce177bf"
                    },
                    {
                        "type": "promotion_item",
                        "id": "6e3cd3be-2f5c-47a0-8f0b-b2fbab4f3a3b"
                    }
                ]
            },
            "customers": {},
            "accounts": {}
        },
        "payment_intent_id": "pi_XXXXXXXX"
    },
    "meta": {
        "payment_intent": {
            "payment_intent": {
                "amount": 20000,
                "amount_capturable": 0,
                "amount_details": {
                    "tip": {
                        "amount": 0
                    }
                },
                "amount_received": 0,
                "application": {
                    "deleted": false,
                    "id": "XXXXXXXX",
                    "name": "",
                    "object": ""
                },
                "application_fee_amount": 0,
                "automatic_payment_methods": null,
                "canceled_at": 0,
                "cancellation_reason": "",
                "capture_method": "automatic",
                "charges": {
                    "data": [],
                    "has_more": false,
                    "total_count": 0,
                    "url": "/v1/charges?payment_intent=pi_XXXXXXXX"
                },
                "client_secret": "pi_XXXXXXXX",
                "confirmation_method": "automatic",
                "created": 1705439701,
                "currency": "cad",
                "customer": null,
                "description": "",
                "id": "pi_XXXXXXXX",
                "invoice": null,
                "last_payment_error": null,
                "livemode": false,
                "metadata": {
                    "updated-key": "updated-value"
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
                    "link": null,
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
                    "card"
                ],
                "processing": null,
                "receipt_email": "email@example.com",
                "review": null,
                "setup_future_usage": "",
                "shipping": null,
                "source": null,
                "statement_descriptor": "",
                "statement_descriptor_suffix": "",
                "status": "requires_payment_method",
                "transfer_data": null,
                "transfer_group": ""
            }
        }
    }
}
```

