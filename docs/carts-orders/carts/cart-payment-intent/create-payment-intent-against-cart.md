---
title: Create Stripe Payment Intent for a Cart
nav_label: Create Stripe Payment Intent for a Cart
sidebar_position: 2
---

## `POST` Create Stripe Payment Intent for a Cart Using an Automatic Payment Method

```http
https://useast.api.elasticpath.com/v2/carts/:cartID/payments
```

## Parameters

### Path parameters

| Name      | Required | Type     | Description                                |
|:----------|:---------|:---------|:-------------------------------------------|
| `cartID` | Required | `string` | The universally unique identifier of the cart that you want to create a payment intent for. |

### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Name                      | Required | Type      | Description               |
|:--------------------------|:---------|:----------|:--------------------------|
| `gateway` | Required | `string` | Specifies the gateway. You must use `elastic_path_payments_stripe` as the required gateway. |
|`method` | Required | `string` | Specifies the transaction method, such as `purchase` or `authorize`. |
| `options` | Optional | `object` | Defines various Stripe options, such as `automatic_payment_methods` and `receipt_email`, when creating a Payment Intent for a cart. Refer to [Stripe Documentation](https://stripe.com/docs/api/payment_intents) for additional available `options`. |
| `options.automatic_payment_methods.enabled` | Optional | `boolean` | When set to `true`, it displays all enabled payment methods from the [Stripe dashboard](https://dashboard.stripe.com/login). When set to `false`, the Stripe default, which is `card`, is used. |
| `options.receipt_email`   | Optional | `string`  | Indicates the email address to which you want to send the Stripe receipts for the transactions within the store. This feature is available only in the live mode. |

## Request Example 

```bash
curl -X POST https://useast.api.elasticpath.com/v2/carts/:cartID/payments \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
        "data": {
          "gateway": "elastic_path_payments_stripe",
          "method": "purchase",
          "options": {
            "automatic_payment_methods": {
                "enabled": true
            "receipt_email": "john@example.com",
      }
    }
  }
}
```

## Response Example

`201 Created`

```json
{
    "data": {
        "id": "12345",
        "type": "cart",
        "name": "Cart",
        "description": "",
        "discount_settings": {
            "custom_discounts_enabled": false
        },
        "payment_intent_id": "pi_XXXXXXXX",
        "links": {
            "self": "https://useast.api.elasticpath.com/v2/carts/12345"
        },
        "meta": {
            "display_price": {
                "with_tax": {
                    "amount": 9000,
                    "currency": "USD",
                    "formatted": "$90.00"
                },
                "without_tax": {
                    "amount": 9000,
                    "currency": "USD",
                    "formatted": "$90.00"
                },
                "tax": {
                    "amount": 0,
                    "currency": "USD",
                    "formatted": "$0.00"
                },
                "discount": {
                    "amount": -1000,
                    "currency": "USD",
                    "formatted": "-$10.00"
                },
                "without_discount": {
                    "amount": 10000,
                    "currency": "USD",
                    "formatted": "$100.00"
                },
                "shipping": {
                    "amount": 0,
                    "currency": "USD",
                    "formatted": "$0.00"
                }
            },
            "timestamps": {
                "created_at": "2024-01-18T20:27:56Z",
                "updated_at": "2024-01-18T20:27:58Z",
                "expires_at": "2024-01-25T20:27:56Z"
            }
        },
        "relationships": {
            "items": {
                "data": [
                    {
                        "type": "custom_item",
                        "id": "005ddbf3-442c-41e9-a66f-16f7372d4537"
                    },
                    {
                        "type": "promotion_item",
                        "id": "933f5f0c-ac3e-4e8d-8547-9618840b2e08"
                    }
                ]
            },
            "customers": {},
            "accounts": {}
        }
    },
    "meta": {
        "payment_intent": {
            "payment_intent": {
                "amount": 9000,
                "amount_capturable": 0,
                "amount_details": {
                    "tip": {
                        "amount": 0
                    }
                },
                "amount_received": 0,
                "application": {
                    "deleted": false,
                    "id": "ca_XXXXXXXX",
                    "name": "",
                    "object": ""
                },
                "application_fee_amount": 0,
                "automatic_payment_methods": {
                    "enabled": true
                },
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
                "created": 1705609678,
                "currency": "usd",
                "customer": null,
                "description": "",
                "id": "pi_XXXXXXXX",
                "invoice": null,
                "last_payment_error": null,
                "livemode": false,
                "metadata": {},
                "next_action": null,
                "object": "payment_intent",
                "on_behalf_of": null,
                "payment_method": null,
                "payment_method_options": {
                    "acss_debit": {
                        "mandate_options": null,
                        "setup_future_usage": "",
                        "verification_method": "automatic"
                    },
                    "affirm": {
                        "capture_method": "",
                        "setup_future_usage": ""
                    },
                    "afterpay_clearpay": {
                        "capture_method": "",
                        "reference": "",
                        "setup_future_usage": ""
                    },
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
                    "klarna": {
                        "capture_method": "",
                        "preferred_locale": "",
                        "setup_future_usage": ""
                    },
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
                    "us_bank_account": {
                        "financial_connections": {
                            "permissions": [
                                "payment_method"
                            ],
                            "return_url": ""
                        },
                        "setup_future_usage": "",
                        "verification_method": "automatic"
                    },
                    "wechat_pay": null
                },
                "payment_method_types": [
                    "card",
                    "acss_debit",
                    "afterpay_clearpay",
                    "klarna",
                    "link",
                    "us_bank_account",
                    "affirm",
                    "cashapp"
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
            }
        }
    }
}
```

## `POST` Create Stripe Payment Intent for a Cart Using a Specific Payment Method

```http
https://useast.api.elasticpath.com/v2/carts/:cartID/payments
```

## Parameters

### Path parameters

| Name      | Required | Type     | Description                                |
|:----------|:---------|:---------|:-------------------------------------------|
| `cartID` | Required | `string` | The universally unique identifier of the cart for which you want to create a payment intent. |

### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Name                      | Required | Type      | Description               |
|:--------------------------|:---------|:----------|:--------------------------|
| `gateway` | Required | `string` | Specifies the gateway. You must use `elastic_path_payments_stripe` as the required gateway. |
|`method` | Required | `string` | Specifies the transaction method, such as `purchase` or `authorize`. |
| `payment_method_types`  | Required | `string` | Specifies the Stripe payment method types configured for the store. See [Stripe Documentation](https://stripe.com/docs/api/payment_intents/create#create_payment_intent-payment_method_types). |
| `options` | Optional | `object` | Defines various Stripe options, such as `receipt_email` and `description`, when creating a Payment Intent for a cart. Refer to [Stripe Documentation](https://stripe.com/docs/api/payment_intents) for additional available `options`. |
| `options.description` |  Optional  | `string` | Indicates the statement description. |
| `options.receipt_email`   | Optional | `string`  | Indicates the email address to which you want to send the Stripe receipts for the transactions within the store. This feature is available only in the live mode. |

## Request Example 

```bash
curl -X POST https://useast.api.elasticpath.com/v2/carts/:cartID/payments \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
        "data": {
          "gateway": "elastic_path_payments_stripe",
          "method": "purchase",
          "payment_method_types":["affirm", "card", "link"],
          "options": {
            "receipt_email": "john@example.com"
    }
  }
}
```

## Response Example

`201 Created`

```json
{
    "data": {
        "id": "12345",
        "type": "cart",
        "name": "Cart",
        "description": "",
        "discount_settings": {
            "custom_discounts_enabled": false
        },
        "payment_intent_id": "pi_XXXXXXXX",
        "links": {
            "self": "https://useast.api.elasticpath.com/v2/carts/12345"
        },
        "meta": {
            "display_price": {
                "with_tax": {
                    "amount": 9000,
                    "currency": "USD",
                    "formatted": "$90.00"
                },
                "without_tax": {
                    "amount": 9000,
                    "currency": "USD",
                    "formatted": "$90.00"
                },
                "tax": {
                    "amount": 0,
                    "currency": "USD",
                    "formatted": "$0.00"
                },
                "discount": {
                    "amount": -1000,
                    "currency": "USD",
                    "formatted": "-$10.00"
                },
                "without_discount": {
                    "amount": 10000,
                    "currency": "USD",
                    "formatted": "$100.00"
                },
                "shipping": {
                    "amount": 0,
                    "currency": "USD",
                    "formatted": "$0.00"
                }
            },
            "timestamps": {
                "created_at": "2024-01-18T20:24:29Z",
                "updated_at": "2024-01-18T20:25:04Z",
                "expires_at": "2024-01-25T20:24:29Z"
            }
        },
        "relationships": {
            "items": {
                "data": [
                    {
                        "type": "custom_item",
                        "id": "76e14c07-7310-456e-8ec6-0c8f67549c88"
                    },
                    {
                        "type": "promotion_item",
                        "id": "8928ac6f-89ea-4d76-bc31-6c48285e4dac"
                    }
                ]
            },
            "customers": {},
            "accounts": {}
        }
    },
    "meta": {
        "payment_intent": {
            "payment_intent": {
                "amount": 9000,
                "amount_capturable": 0,
                "amount_details": {
                    "tip": {
                        "amount": 0
                    }
                },
                "amount_received": 0,
                "application": {
                    "deleted": false,
                    "id": "ca_XXXXXXXX",
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
                "created": 1705609504,
                "currency": "usd",
                "customer": null,
                "description": "",
                "id": "pi_XXXXXXXX",
                "invoice": null,
                "last_payment_error": null,
                "livemode": false,
                "metadata": {},
                "next_action": null,
                "object": "payment_intent",
                "on_behalf_of": null,
                "payment_method": null,
                "payment_method_options": {
                    "acss_debit": null,
                    "affirm": {
                        "capture_method": "",
                        "setup_future_usage": ""
                    },
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
                    "affirm",
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
            }
        }
    }
}
```

