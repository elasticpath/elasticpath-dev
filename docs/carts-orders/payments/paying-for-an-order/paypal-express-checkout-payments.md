---
title: PayPal Express Checkout Payments
nav_label: PayPal Express Checkout
sidebar_position: 7
---

The PayPal Express Checkout integration supports the following payment methods:

- `authorize`
- `capture`
- `purchase`
- `refund`

## Step 1: `POST` Initialize payment

```http
https://useast.api.elasticpath.com/v2/orders/:orderId/payments
```

### Path parameters

| Name      | Required | Type     | Description                                |
|:----------|:---------|:---------|:-------------------------------------------|
| `orderId` | Required | `string` | The Universally Unique Identifier (UUID) of the order you want to pay for. |

#### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

#### Body

| Name                                              | Required | Type     | Description |
|:--------------------------------------------------|:---------|:---------|:---|
| `gateway`                                         | Required | `string` | Use the value `paypal_express_checkout`. |
| `method`                                          | Required | `string` | The method value, such as `purchase` or `authorize`. |
| `amount`                                          | Optional | `integer` | Specifies the amount to be paid for the transaction. |
| `options.description`                             | Optional | `string` | The description for the payment. |
| `options.soft_descriptor`                         | Optional | `string` | The descriptor appended to PayPal generated descriptor that is visible on the card statement of the payer. |
| `options.application_context.return_url`          | Optional | `string` | The callback URL for PayPal to redirect the user in the case of approved payment. |
| `options.application_context.cancel_url`          | Optional | `string` | The callback URL for PayPal to redirect user in the case a cancelled payment. |
| `options.application_context.shipping_preference` | Optional | `string` | The shipping preference. Use `SET_PROVIDED_ADDRESS` value. This parameter does allow the user to change their address on PayPal site. |
| `options.application_context.landing_page`        | Optional | `string` | The type of landing page to show on the PayPal site for customer checkout. Use values `LOGIN`, `BILLING`, or `NO_PREFERENCE`. |
| `options.application_context.locale`              | Optional | `string` | The locale pages that appear based on language and country code. PayPal supports a five-character code. For example, ja-JP. |
| `options.application_context.brand_name`          | Optional | `string` | The label that overrides the business name in the PayPal account on the payPal site. |

### Request examples

#### Curl

```bash
curl -X POST https://useast.api.elasticpath.com/v2/orders/:orderId/payments \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
        "data": {
          "gateway": "paypal_express_checkout",
          "method": "authorize",
          "amount": 10000,
          "options": {
              "description": "Test description",
              "soft_descriptor": "integration test",
              "application_context": {
                  "brand_name": "TEST brand",
                  "locale": "ja-JP",
                  "landing_page": "LOGIN",
                  "shipping_preference": "SET_PROVIDED_ADDRESS",
                  "user_action": "PAY_NOW",
                  "return_url": "https://frontend.mystore.com/payment-approved",
                  "cancel_url": "https://frontend.mystore.com/payment-cancelled"
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
    gateway: "paypal_express_checkout",
    method: "authorize",
    options: {
        description: "Test description",
        soft_descriptor: "integration test",
        application_context: {
            brand_name: "TEST brand",
            locale: "ja-JP",
            landing_page: "LOGIN",
            shipping_preference: "SET_PROVIDED_ADDRESS",
            user_action: "PAY_NOW",
            return_url: "https://frontend.mystore.com/payment-approved",
            cancel_url: "https://frontend.mystore.com/payment-cancelled",
        },
    },
};
Moltin.Orders.Payment(id, payment).then(() => {
    // Do something
});
```

### Response example

`200 OK`

```json
{
    "data": {
        "id": "e34825e3-87bf-4cdc-87a0-8c4134d26ca2",
        "type": "transaction",
        "reference": "22X32720UC532391T",
        "gateway": "paypal_express_checkout",
        "amount": 10000,
        "refunded_amount": 0,
        "currency": "USD",
        "transaction_type": "authorize",
        "status": "pending",
        "relationships": {
            "order": {
                "data": {
                    "type": "order",
                    "id": "098d9f5d-43b5-46c2-8960-85fadef158e3"
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
                "created_at": "2022-03-10T00:37:08Z",
                "updated_at": "2022-03-10T00:37:09Z"
            }
        },
        "client_parameters": {
            "redirect_url": "https://www.sandbox.paypal.com/checkoutnow?token=22X32720UC532391T"
        }
    }
}
```

## Step 2: `POST` Complete the payment

```http
https://useast.api.elasticpath.com/v2/orders/:orderId/transactions/:transactionId/confirm
```

### Path parameters

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `orderId`       | Required | `string` | The Universally Unique Identifier (UUID) of the order that you want to pay for. |
| `transactionId` | Required | `string` | The Universally Unique Identifier (UUID) of the transaction that was created in the previous step. |

#### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |


### Request example

```bash
curl -X POST https://useast.api.elasticpath.com/v2/orders/:orderId/transactions/:transactionId/confirm \
     -H "Authorization: Bearer XXXX" \
     -d $'{
        "data": {}
      }'
```

### Response example

`200 OK`

```json
{
    "data": {
        "id": "93aa35cf-6ee3-46a2-8f4b-c72607e221fa",
        "type": "transaction",
        "reference": "65N54820N71908123",
        "gateway": "paypal_express_checkout",
        "amount": 10000,
        "refunded_amount": 0,
        "currency": "USD",
        "transaction_type": "authorize",
        "status": "complete",
        "relationships": {
            "order": {
                "data": {
                    "type": "order",
                    "id": "97927cce-405b-4ba4-b121-97ffcf532254"
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
                "created_at": "2022-02-22T21:59:37Z",
                "updated_at": "2022-02-22T22:01:47Z"
            }
        }
    }
}
```

## Step 3: `POST` Capture the payment authorization

```http
https://useast.api.elasticpath.com/v2/orders/:orderId/transactions/:transactionId/capture
```

Use this endpoint to capture a transaction initiated by the shopper. Usually capture does not occur at the same time as authorization. For more information, see the [Capture](/docs/carts-orders/payments/paying-for-an-order/overview#capture) section.

### Path parameters

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `orderId`       | Required | `string` | The Universally Unique Identifier (UUID) of the order that you want to pay for. |
| `transactionId` | Required | `string` | The Universally Unique Identifier (UUID) of the `authorize` transaction that was created in the previous step. |

#### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

#### Body

| Name                      | Required | Type     | Description                |
|:--------------------------|:---------|:---------|:---------------------------|
| `options.soft_descriptor` | Optional | `string` | Specifies the payment descriptor on the account statement of the payer. |
| `options.note_to_payer`   | Optional | `string` | Specifies an informational note about the settlement. It appears in both the transaction history of the payer and the emails that the payer receives. |

### Request example

```bash
curl -X POST https://useast.api.elasticpath.com/v2/orders/:orderId/transactions/:transactionId/capture \
     -H "Authorization: Bearer XXXX"
     "data": {
      "options": {
       "soft_descriptor": "Test soft descriptor",
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
        "id": "3e456108-4636-4cac-9090-4e2e42e0b0eb",
        "type": "transaction",
        "reference": "7GM02080KY505435E",
        "gateway": "paypal_express_checkout",
        "amount": 10000,
        "refunded_amount": 0,
        "currency": "USD",
        "transaction_type": "capture",
        "status": "complete",
        "relationships": {
            "order": {
                "data": {
                    "type": "order",
                    "id": "236d6eff-97e5-4ead-a316-f5a13a412686"
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
                "created_at": "2022-02-22T22:06:40Z",
                "updated_at": "2022-02-22T22:08:19Z"
            }
        }
    }
}
```

## Step 4: `POST` Refund the payment

```http
https://useast.api.elasticpath.com/v2/orders/:orderId/transactions/:transactionId/refund
```

### Path parameters

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `orderId`       | Required | `string` | The Universally Unique Identifier (UUID) of the order that you want to pay for. |
| `transactionId` | Required | `string` | The Universally Unique Identifier (UUID) of the transaction that was created in the previous step. |

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
     "amount": 10000,
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
        "id": "c71df2f4-a995-44fd-ade7-4808fce006c6",
        "type": "transaction",
        "reference": "3M301358VJ168283F",
        "gateway": "paypal_express_checkout",
        "amount": 10000,
        "refunded_amount": 10000,
        "refund_mechanism": "automatic",
        "currency": "USD",
        "transaction_type": "refund",
        "status": "complete",
        "relationships": {
            "order": {
                "data": {
                    "type": "order",
                    "id": "098d9f5d-43b5-46c2-8960-85fadef158e3"
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
                    "amount": 10000,
                    "currency": "USD",
                    "formatted": "$100.00"
                }
            },
            "timestamps": {
                "created_at": "2022-03-10T00:44:38Z",
                "updated_at": "2022-03-10T00:45:50Z"
            }
        }
    }
}
```

## Related Resources

- [Implement PayPal Express Checkout](/docs/carts-orders/payments/payments-developer/implement-paypal-express-checkout.md)
- [Checkout workflow](/docs/carts-orders/checkout/checkout.md)
- [Carts API](/docs/carts-orders/carts/carts.md)
