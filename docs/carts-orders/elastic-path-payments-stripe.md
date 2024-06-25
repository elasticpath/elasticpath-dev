---
title: Elastic Path Payments Powered by Stripe
nav_label: Paying for an Order - Elastic Path Payments
sidebar_position: 170
---

The Elastic Path Payments Powered by Stripe integration supports the following payment methods:

- `authorize`
- `capture`
- `confirm`
- `purchase`
- `refund`

:::note
You can contact Elastic Path sales or [customer success team](mailto:customersuccess@elasticpath.com) to get more information about Elastic Path Payments powered by Stripe and to check whether it will work for you.
:::

## Authorization or Purchase - `POST` Pay using Token or Source

```http
https://useast.api.elasticpath.com/v2/orders/:orderId/payments
```

### Parameters

#### Path parameters

| Name      | Required | Type     | Description                                |
|:----------|:---------|:---------|:-------------------------------------------|
| `orderId` | Required | `string` | The universally unique identifier of the order that you want to pay for. |

#### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

#### Body

| Name                      | Required | Type      | Description               |
|:--------------------------|:---------|:----------|:--------------------------|
| `options.idempotency_key` | Optional | `string`  | Provides the option to send a Stripe Idempotency Key. |
| `options.receipt_email`   | Optional | `string`  | Provides the email address to which you want to send the Stripe receipts for the transactions within the store. This feature is available only in the live mode. |
| `payment`                 | Required | `string`  | Specifies the Stripe token or source. |
| `options.customer`        | Optional | `string`  | Specifies the Stripe customer ID. This is required if you want to send a [source](https://stripe.com/docs/api/sources). |
| `method`                  | Required | `string`  | Specifies the transaction method, such as `purchase` or `authorize`. |
| `amount`                  | Optional | `integer` | Specifies the amount to be paid for the transaction. |
| `gateway`                 | Required | `string`  | Specifies the gateway. You must use `elastic_path_payments_stripe` as the required gateway. |

### Request examples

We recommend that you use the payment method or source with Stripe payments. For more information about generating a payment method on the client-side, see the [Stripe Elements](https://stripe.com/docs/payments/elements) documentation.

:::caution
When you pass `source` instead of a `token`, ensure that you include the Stripe customer ID in the request.
:::

:::note
If you are using Stripe API, pass your `Stripe-Account` ID in the header to make the payment. For example, see the following request:

```bash
curl https://api.stripe.com/v1/payment_methods \
  -u pk_live_EP_STRIPE_PUBLISHABLE_KEY: \
-H Stripe-Account:acct_xxxxxxx\
  -d type=card \
  -d "card[number]"=xxxxxxxxxxxx \
  -d "card[exp_month]"=6 \
  -d "card[exp_year]"=2023 \
  -d "card[cvc]"=314
```

:::

#### Curl

```bash
curl -X POST https://useast.api.elasticpath.com/v2/orders/:orderId/payments \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
        "data": {
          "gateway": "elastic_path_payments_stripe",
          "method": "purchase",
          "amount": 5499,
          "payment": "pm_card_threeDSecureRequired",
          "options": {
            "receipt_email": "john@example.com"
          }
        }
      }
```

#### JavaScript SDK

```javascript
const MoltinGateway = require("@moltin/sdk").gateway;
const Moltin = MoltinGateway({
    client_id: "X",
});
const id = "XXXX";
const payment = {
    gateway: "elastic_path_payments_stripe",
    method: "purchase",
    payment: "pm_card_threeDSecureRequired",
};
Moltin.Orders.Payment(id, payment).then(() => {
    // Do something
});
```

### Response example

`201 Created`

:::note
The `x` values in the `"id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"` are replaced with the returned values.
:::

```json
{
    "data": {
        "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
        "type": "transaction",
        "reference": "pi_xxxxxxxxxxxxx",
        "gateway": "elastic_path_payments_stripe",
        "amount": 5499,
        "currency": "USD",
        "transaction-type": "purchase",
        "transaction_type": "purchase",
        "status": "pending",
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
                "amount": 5499,
                "currency": "USD",
                "formatted": "$54.99"
            },
            "display_refunded_amount": {
                "total": {
                    "amount": 0,
                    "currency": "USD",
                    "formatted": "$0.00"
                }
            },
            "created_at": "2019-08-28T10:40:21.925Z",
            "timestamps": {
                "created_at": "2019-08-28T10:40:21Z",
                "updated_at": "2019-08-28T10:40:23Z"
            }
        },
        "client_parameters": {
            "token": "pi_xxxxxxxxxxxxxxxx",
            "secret": "pi_xxxxxxxxxxxxxx_secret_xxxxxxxxxxxxxx"
        }
    }
}
```

## Authorization or Purchase - `POST` Pay using Stripe Payment Element

```http
https://useast.api.elasticpath.com/v2/orders/:orderId/payments
```

### Parameters

#### Path parameters

| Name      | Required | Type     | Description                                |
|:----------|:---------|:---------|:-------------------------------------------|
| `orderId` | Required | `string` | The universally unique identifier of the order that you want to pay for. |

#### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

#### Body

:::note
If both `payment_method_types` and ` automatic_payment_methods` are not enabled, the Stripe default, which is `card`, will be used. Attempting to set both `payment_method_types` and `automatic_payment_methods` to `true` will result in an error as Stripe doesn't allow both options to be enabled at the same time.
:::

| Name                    | Required | Type     | Description                  |
|:------------------------|:---------|:---------|:-----------------------------|
| `gateway`               | Required | `string` | Specifies the gateway. You must use `elastic_path_payments_stripe` as the required gateway. |
| `method`                | Required | `string` | Specifies the transaction method, such as `purchase` or `authorize`. |
| `options.receipt_email` | Optional | `string` | Provides the email address to which you want to send the Stripe receipts for the transactions within the store. This feature is available only in the live mode. |
| `options.automatic_payment_methods.enabled` | Optional | `boolean` | When set to `true`, it displays all enabled payment methods from the [Stripe dashboard](https://dashboard.stripe.com/login). When set to `false`, the Stripe default, which is `card`, will be used. |
| `payment_method_types`  | Required | `string` | Specifies the Stripe payment method types configured for the store. See [Stripe Documentation](https://stripe.com/docs/api/payment_intents/create#create_payment_intent-payment_method_types). |

### Request examples

#### Curl

```bash
curl -X POST https://useast.api.elasticpath.com/v2/orders/:orderId/payments \
     -H "Authorization: Bearer XXXX" \
     -d $ {
       "data": {
         "gateway": "elastic_path_payments_stripe",
         "method": "purchase",
         "options": {
           "receipt_email": "john@example.com"
           "automatic_payment_methods": {
                "enabled": true
        }
    }
  }
}
```

#### JavaScript SDK

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X'
})
const id = 'XXXX'
const payment = {
  gateway: 'elastic_path_payments_stripe',
  method: 'purchase',
  options: {
    receipt_email: "john@example.com"
  },
  payment_method_types: ["link", "card"],
}

Moltin.Orders.Payment(id, payment).then(() => {
  // Do something
})
```

### Response example

`201 Created`

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
        "transaction_type": "purchase-setup",
        "status": "pending",
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
                "created_at": "2022-07-18T22:16:11Z",
                "updated_at": "2022-07-18T22:16:32Z"
            }
        },
        "client_parameters": {
            "token": "pi_xxxxxxxxxxxxxx",
            "secret": "pi_xxxxxxxxxxxxxx_secret_xxxxxxxxxxxxxx"
        },
        "payment_intent": {
            "amount": 20000,
            "amount_capturable": 0,
            "amount_details": {
                "tip": {}
            },
            "amount_received": 0,
            "application": {
                "deleted": false,
                "id": "ca_KH5gI4U1QcTNYo08rUpmVAGds0YBp0ZG",
                "name": "",
                "object": ""
            },
            "application_fee_amount": null,
            "automatic_payment_methods": {
                "enabled": true
            },
            "canceled_at": null,
            "cancellation_reason": null,
            "capture_method": "manual",
            "charges": {
                "data": [],
                "has_more": false,
                "object": "list",
                "total_count": 0,
                "url": "/v1/charges?payment_intent=pi_xxxxxxxxxxxxxx"
            },
            "client_secret": "pi_xxxxxxxxxxxxxx_secret_xxxxxxxxxxxxxx",
            "confirmation_method": "automatic",
            "created": 1658182571,
            "currency": "usd",
            "customer": null,
            "description": null,
            "id": "pi_xxxxxxxxxxxxxx",
            "invoice": null,
            "last_payment_error": null,
            "livemode": false,
            "metadata": {
                "email": "andy@example.com",
                "ip_address": "##.###.###.###",
                "order_id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
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
                "bancontact": {
                    "preferred_language": "en",
                    "setup_future_usage": ""
                },
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
                "eps": {
                    "setup_future_usage": ""
                },
                "fpx": null,
                "giropay": {
                    "setup_future_usage": ""
                },
                "grabpay": null,
                "ideal": {
                    "setup_future_usage": ""
                },
                "interac_present": null,
                "klarna": null,
                "konbini": null,
                "link": {
                    "capture_method": "",
                    "persistent_token": "",
                    "setup_future_usage": ""
                },
                "oxxo": null,
                "p24": {
                    "setup_future_usage": ""
                },
                "paynow": null,
                "promptpay": null,
                "sepa_debit": {
                    "mandate_options": null,
                    "setup_future_usage": ""
                },
                "sofort": null,
                "us_bank_account": null,
                "wechat_pay": null
            },
            "payment_method_types": [
                "card",
                "bancontact",
                "eps",
                "giropay",
                "ideal",
                "p24",
                "sepa_debit",
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
## Authorization or Purchase - `POST` Pay using 3D Secure

```http
https://useast.api.elasticpath.com/v2/orders/:orderId/payments
```

### Parameters

#### Path parameters

| Name      | Required | Type     | Description                                |
|:----------|:---------|:---------|:-------------------------------------------|
| `orderId` | Required | `string` | The universally unique identifier of the order that you want to pay for. |

#### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

#### Body

| Name                    | Required | Type     | Description                  |
|:------------------------|:---------|:---------|:-----------------------------|
| `gateway`               | Required | `string` | Specifies the gateway. You must use `elastic_path_payments_stripe` as the required gateway. |
| `method`                | Required | `string` | Specifies the transaction method, such as `purchase` or `authorize`. |
| `payment` |  Required | `string` | Use `pm_card_threeDSecureRequired` or `pm_card_threeDSecure2Required`. |
| `options.return_url` | Optional | `string` | 	Indicates the URL to redirect the user in the case of approved payment.|
| `options.receipt_email` | Optional | `string` | Provides the email address to which you want to send the Stripe receipts for the transactions within the store. This feature is available only in the live mode. |
| `options.confirm` | Optional | `boolean` | Set to `true` to confirm the payment. Default value is `true`. |
| `options.execute_threed` | Optional | `boolean` | Set this field to `true` to use 3D secure. Default value is `true`. |
| `confirmation_method`  | Required | `string` | Specifies confirmation method for payment. Values can be set to `manual` or `automatic`. Default is `automatic`. |

### Request Example - Curl

```bash
curl -X POST https://useast.api.elasticpath.com/v2/orders/:orderId/payments \
     -H "Authorization: Bearer XXXX" \
     -d $'{
       "data": {
         "gateway": "elastic_path_payments_stripe",
         "method": "authorize",
         "payment": "pm_card_threeDSecureRequired",
         "options": {
            "return_url": "https://your.frontend.url/return",
            "receipt_email": "john@example.com",
            "confirm": true,
            "execute_threed": true,
            "confirmation_method": "manual"

         }
       }
     }
```

### Response Example

`200 OK`

```Json
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
        "status": "pending",
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
                "created_at": "2023-03-09T14:01:32Z",
                "updated_at": "2023-03-09T14:01:33Z"
            }
        },
        "client_parameters": {
            "token": "pi_xxxxxxxxxxxxxx",
            "secret": "pi_xxxxxxxxxxxxxx_secret_xxxxxxxxxxxxxx"
        },
        "payment_intent": {
            "amount": 20000,
            "amount_capturable": 0,
            "amount_details": {
                "tip": {}
            },
            "amount_received": 0,
            "application": "ca_xxxxxxxxxxxxxx",
            "application_fee_amount": null,
            "automatic_payment_methods": null,
            "canceled_at": null,
            "cancellation_reason": null,
            "capture_method": "manual",
            "charges": {
                "data": [],
                "has_more": false,
                "object": "list",
                "total_count": 0,
                "url": "/v1/charges?payment_intent=pi_xxxxxxxxxxxxxx"
            },
            "client_secret": "pi_xxxxxxxxxxxxxx_secret_xxxxxxxxxxxxxx",
            "confirmation_method": "manual",
            "created": 1678370492,
            "currency": "usd",
            "customer": null,
            "description": null,
            "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
            "invoice": null,
            "last_payment_error": null,
            "latest_charge": null,
            "livemode": false,
            "metadata": {
                "email": "andy@example.com",
                "ip_address": "174.91.171.193",
                "order_id": "73f1bd38-8dda-441a-98b3-57d05af4d9ac"
            },
            "next_action": {
                "redirect_to_url": {
                    "return_url": "https://your.frontend.url/return",
                    "url": "https://hooks.stripe.com/redirect/authenticate/src_1Mjk2CS5G6YfGRXYqAAR6EsF?client_secret=src_client_secret_XEsFaMSCQwEeDnVUbQUa9P8P&source_redirect_slug=test_YWNjdF8xS2pBaElTNUc2WWZHUlhZLF9OVWpWT2N0eDJoNGRjQkhJMnhsUkUyNmdpd2NkM0xk01003bGfQmde"
                },
                "type": "redirect_to_url"
            },
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
            "status": "requires_action",
            "transfer_data": null,
            "transfer_group": null
        },
        "payment_details": {
            "detailed_status": "requires_action"
        },
        "next_actions": [
            "cancel"
        ]
    }
}
```

## Confirmation - `POST` Confirm the Security Validation

```http
https://useast.api.elasticpath.com/v2/orders/:orderId/transactions/:transactionId/confirm
```

### Parameters

#### Path parameters

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `orderId`       | Required | `string` | The universally unique identifier of the order that you want to pay for. |
| `transactionId` | Required | `string` | The universally unique identifier of the transaction that requires client action to process validation. |

#### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Request example

If the response for the authorization or purchase request consists of `client_parameters`, Stripe might required client action to perform a 3D Secure validation. Use the Stripe client libraries and process the 3D Secure validation. When the validation succeeds, continue the payment processing by making a request as in the following example:

```bash
curl -X POST https://useast.api.elasticpath.com/v2/orders/:orderId/transactions/:transactionId/confirm \
     -H "Authorization: Bearer XXXX" \
     -d $ {
        "data": {
        }
      }
```

### Response example

`201 Created`

:::note
The `x` values in the `"id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"` are replaced with the returned values.
:::

```json
{
    "data": {
        "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
        "type": "transaction",
        "reference": "xxxxxx",
        "gateway": "elastic_path_payments_stripe",
        "amount": 100,
        "currency": "USD",
        "transaction_type": "purchase",
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
            "display_refunded_amount": {
                "total": {
                    "amount": 0,
                    "currency": "USD",
                    "formatted": "$0.00"
                }
            },
            "timestamps": {
                "created_at": "2020-05-25T20:58:57Z",
                "updated_at": "2020-05-25T13:59:01-07:00"
            }
        }
    }
}
```

## Confirmation - `POST` Capture the Payment Authorization

```http
https://useast.api.elasticpath.com/v2/orders/:orderId/transactions/:transactionId/capture
```

Use this endpoint to capture a transaction initiated by the shopper. Usually capture does not occur at the same time as authorization. For more information, see the [Capture](/docs/api/carts/payments#capture) section.

### Parameters

#### Path parameters

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `orderId`       | Required | `string` | The universally unique identifier of the order that you want to pay for. |
| `transactionId` | Required | `string` | The universally unique identifier of the successful transaction for this payment. |

#### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Request example

```bash
curl -X POST https://useast.api.elasticpath.com/v2/orders/:orderId/transactions/:transactionId/capture \
     -H "Authorization: Bearer XXXX"
```

### Response example

`201 Created`

:::note
The `x` values in the `"id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"` are replaced with the returned values.
:::

```json
{
    "data": {
        "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
        "type": "transaction",
        "reference": "xxxxxx",
        "gateway": "elastic_path_payments_stripe",
        "amount": 100,
        "currency": "USD",
        "transaction_type": "capture",
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
            "display_refunded_amount": {
                "total": {
                    "amount": 0,
                    "currency": "USD",
                    "formatted": "$0.00"
                }
            },
            "timestamps": {
                "created_at": "2020-05-25T20:58:57Z",
                "updated_at": "2020-05-25T13:59:01-07:00"
            }
        }
    }
}
```

## Refund - `Post` Refund the Payment

```http
https://useast.api.elasticpath.com/v2/orders/:orderId/transactions/:transactionId/refund
```

Use this endpoint to refund the amount initiated by the shopper.

### Parameters

#### Path parameters

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `orderId`       | Required | `string` | The universally unique identifier of the order that you want to pay for. |
| `transactionId` | Required | `string` | The universally unique identifier of the successful transaction for this payment. |

#### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

#### Body

| Name                    | Required | Type      | Description                 |
|:------------------------|:---------|:----------|:----------------------------|
| `amount`                | Required | `integer` | Specifies the amount to be refunded. |
| `options.note_to_payer` | Optional | `string`  | Specifies the reason for the refund. It appears in both the transaction history of the payer and the emails that the payer receives. |

### Request example

```bash
curl -X POST https://useast.api.elasticpath.com/v2/orders/:orderId/transactions/:transactionId/refund \
     -H "Authorization: Bearer XXXX"
     "data": {
     "amount": 1,
      "options": {
       "note_to_payer": "Test note to payer"
    }
  }
}
```

### Response example

`200 OK`

```json
{
    "data": {
        "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
        "type": "transaction",
        "reference": "pi_3Kr4EBHGgiZNYgWz1eio9cFS",
        "gateway": "elastic_path_payments_stripe",
        "amount": 80000,
        "refunded_amount": 2,
        "refund_mechanism": "automatic",
        "currency": "GBP",
        "transaction_type": "refund",
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
                "amount": 80000,
                "currency": "GBP",
                "formatted": "£800.00"
            },
            "display_refunded_amount": {
                "total": {
                    "amount": 2,
                    "currency": "GBP",
                    "formatted": "£0.02"
                }
            },
            "timestamps": {
                "created_at": "2022-04-21T17:55:38Z",
                "updated_at": "2022-04-22T15:37:07Z"
            }
        }
    }
}
```
