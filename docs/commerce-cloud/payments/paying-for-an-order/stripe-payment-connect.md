---
title: Stripe Connect
nav_label: Stripe Connect
sidebar_position: 9
---

The Stripe Connect integration supports the following payment methods:

- `authorize`
- `capture`
- `confirm`
- `purchase`
- `refund`

:::note
You can contact Elastic Path sales or [customer success team](mailto:customersuccess@elasticpath.com) to get more information about Stripe Connect and to check whether it will work for you.
:::

## Authorization or Purchase - `POST` Pay by Token or Source

```http
https://useast.api.elasticpath.com/v2/orders/:orderId/payments
```

### Parameters

#### Path parameters

| Name      | Required | Type     | Description                                |
|:----------|:---------|:---------|:-------------------------------------------|
| `orderId` | Required | `string` | The Universally Unique Identifier (UUID) of the order that you want to pay for. |

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
| `gateway`                 | Required | `string`  | Specifies the gateway. You must use `stripe_connect` as the required gateway. |

### Request Examples

We recommend that you use the payment method or source with Stripe payments. For more information about generating a payment method on the client-side, see the [Stripe Elements](https://stripe.com/docs/payments/elements) documentation.

:::caution
When you pass `source` instead of a `token`, ensure that you include the Stripe customer ID in the request.
:::

#### Curl

```bash
curl -X POST https://useast.api.elasticpath.com/v2/orders/:orderId/payments \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
        "data": {
          "gateway": "stripe_connect",
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
    gateway: "stripe_connect",
    method: "purchase",
    payment: "pm_card_threeDSecureRequired",
};
Moltin.Orders.Payment(id, payment).then(() => {
    // Do something
});
```

## Response Example

`200 OK`

:::note
The `x` values in the `"id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"` are replaced with the returned values.
:::

```json
{
    "data": {
        "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
        "type": "transaction",
        "reference": "pi_xxxxxxxxxxxxx",
        "gateway": "stripe_connect",
        "amount": 5499,
        "refunded_amount": 0,
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

## Confirmation - `POST` Confirm the Security Validation Succeeded

```http
https://useast.api.elasticpath.com/v2/orders/:orderId/transactions/:transactionId/confirm
```

### Parameters

#### Path parameters

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `orderId`       | Required | `string` | The UUID of the order that you want to pay for. |
| `transactionId` | Required | `string` | The UUID of the transaction that requires client action to process validation. |

#### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Request example

If the response for the authorization or purchase request consists of `client_parameters`, Stripe might required client action to perform a 3D Secure validation. Use the Stripe client libraries and process the 3D Secure validation. When the validation succeeds, continue the payment processing by making a request as in the following example:

```bash
curl -X POST https://useast.api.elasticpath.com/v2/orders/:orderId/transactions/:transactionId/confirm \
     -H "Authorization: Bearer XXXX" \
     -d $'{
        "data": {
        }
      }'
```

### Response example

`200 OK`

:::note
The `x` values in the `"id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"` are replaced with the returned values.
:::

```json
{
    "data": {
        "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
        "type": "transaction",
        "reference": "xxxxxx",
        "gateway": "stripe_connect",
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

## Confirmation - `POST` Capture the payment authorization

```http
https://useast.api.elasticpath.com/v2/orders/:orderId/transactions/:transactionId/capture
```

Use this endpoint to capture a transaction initiated by the shopper. Usually capture does not occur at the same time as authorization. For more information, see the [Capture](/docs/commerce-cloud/payments/paying-for-an-order/overview#capture) section.

### Parameters

#### Path parameters

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `orderId`       | Required | `string` | The UUID of the order that you want to pay for. |
| `transactionId` | Required | `string` | The UUID of the successful `authorize` transaction for this payment. |

#### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Request example

```bash
curl -X POST https://useast.api.elasticpath.com/v2/orders/:orderId/transactions/:transactionId/capture \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

## Response example

`200 OK`

:::note
The `x` values in the `"id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"` are replaced with the returned values.
:::

```json
{
    "data": {
        "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
        "type": "transaction",
        "reference": "xxxxxx",
        "gateway": "stripe_connect",
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
| `orderId`       | Required | `string` | The UUID of the order that you want to pay for. |
| `transactionId` | Required | `string` | The UUID of the successful `authorize` transaction for this payment. |

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
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
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
        "gateway": "stripe_connect",
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
