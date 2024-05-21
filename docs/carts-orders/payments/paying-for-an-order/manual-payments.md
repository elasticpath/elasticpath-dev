---
title: Manual Payments
nav_label: Manual Payments
sidebar_position: 12
---

By default, Commerce supports payment gateways using the Manual Payments integration. This integration supports the following payment methods:

- `authorize`
- `capture`
- `purchase`
- [`refund`](/docs/commerce-cloud/payments/transactions/refund-a-transaction)

:::caution
If the total amount to pay for an order is zero, third-party payment gateways, like Stripe, do not process the payment and return an error asking shoppers to increase the amount to a value greater than or equal to 1. You must use configure manual payment to process this transaction in your store.
:::

## `POST` Initialize the payment

Use the following endpoint for shoppers to start an authorization or purchase transaction:

```http
https://useast.api.elasticpath.com/v2/orders/:orderId/payments
```

### Parameters

#### Path parameters

| Name      | Required | Type     | Description                                |
|:----------|:---------|:---------|:-------------------------------------------|
| `orderId` | Required | `string` | Specifies the Universally Unique Identifier (UUID) of the order that you want to pay for. |

#### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

#### Body

| Name                 | Required | Type      | Description                    |
|:---------------------|:---------|:----------|:-------------------------------|
| `method`             | Required | `string`  | Specifies the transaction method, such as `purchase` or `authorize` |
| `gateway`            | Required | `string`  | Specifies the type of payment gateway. Use `manual` for the manual payment gateway. |
| `amount`             | Optional | `integer` | Specifies the amount to be paid for the transaction. |
| `paymentmethod_meta` | Optional | `object`  | Specifies user-defined metadata for the payment. For more details, see [The Payment Method Meta Object](#the-payment-method-meta-object). |

### Request Examples

#### Curl

```bash
curl -X POST https://useast.api.elasticpath.com/v2/orders/:orderId/payments \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
       "data": {
         "gateway": "manual",
         "method": "authorize",
         "amount": 5000,
         "paymentmethod_meta": {
           "custom_reference": "custom reference",
           "name": "payment method name",
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
const orderId = "XXXX";
const payment = {
  gateway: 'manual',
  method: 'authorize',
  paymentmethod_meta: {
      name: 'payment method name',
      custom_reference: 'custom reference'
    }
}
Moltin.Orders.Payment(orderId, payment).then(() => {
    // Do something
});
```

#### Response example

`200 OK`

```json
{
  "data": {
    "id": "180e3f07-d08a-470a-a577-a0118e0ddfaa",
    "type": "transaction",
    "reference": "manual",
    "name": "payment method name",
    "custom_reference": "custom reference",
    "gateway": "manual",
    "amount": 5000,
    "refunded_amount": 0,
    "currency": "USD",
    "transaction_type": "authorize",
    "status": "complete",
    "relationships": {
      "order": {
        "data": {
          "type": "order",
          "id": "a94b459a-c0cb-4a87-b342-8d997a1ff291"
        }
      }
    },
    "meta": {
      "display_price": {
        "amount": 5000,
        "currency": "USD",
        "formatted": "$50.00"
      },
      "display_refunded_amount": {
        "total": {
          "amount": 0,
          "currency": "USD",
          "formatted": "$0.00"
        }
      }
    }
  }
}
```

## `POST` Capture Transaction

Use the following endpoint to capture a transaction initiated by a shopper:

```http
https://useast.api.elasticpath.com/v2/orders/:orderId/transactions/:transactionId/capture
```

Usually, capture does not occur at the same time as authorization. For more information, see the [Capture](/docs/commerce-cloud/payments/paying-for-an-order/overview#capture) section.

:::caution
The `capture` method requires [client_credentials](/guides/Getting-Started/authentication/Tokens/client-credential-token#post-create-a-client-credential-token) authentication.
:::

### Parameters

#### Path parameters

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `transactionId` | Required | `string` | The UUID of the previously-authorized transaction. |
| `orderId`       | Required | `string` | The UUID of the order that you want to capture. |

#### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Request examples

#### Curl

```bash
curl -X POST https://useast.api.elasticpath.com/v2/orders/:orderId/transactions/:transactionId/capture \
     -H "Authorization: Bearer XXXX" \
```

#### JavaScript SDK

```javascript
const MoltinGateway = require("@moltin/sdk").gateway;
const Moltin = MoltinGateway({
    client_id: "X",
    client_secret: "X",
});
const orderId = "XXXX";
const transactionId = "XXXX";
Moltin.Transactions.Capture({
    order: orderId,
    transaction: transactionId,
}).then(() => {
    // Do something
});
```

### Response example

`200 OK`

```json
{
    "data": {
        "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
        "type": "transaction",
        "reference": "manual",
        "name": "payment method name",
        "custom_reference": "custom reference",
        "gateway": "manual",
        "amount": 5000,
        "refunded_amount": 0,
        "currency": "USD",
        "transaction-type": "capture",
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
               "amount": 5000,
               "currency": "USD",
               "formatted": "$50.00"
           },
           "display_refunded_amount": {
               "total": {
                   "amount": 0,
                   "currency": "USD",
                   "formatted": "$0.00"
               }
           },
           "timestamps": {
               "created_at": "2022-06-08T18:30:03Z",
               "updated_at": "2022-06-08T18:31:33Z"
           }
       }
   }
}
```

## The Payment Method Meta Object

| Attribute          | Type     | Description                                  |
|:-------------------|:---------|:---------------------------------------------|
| `name`             | `string` | A custom name associated with the payment method. |
| `custom_reference` | `string` | A reference associated with the payment method. This might include loyalty points or gift card identifiers. We recommend you not to include personal information in this field. |
