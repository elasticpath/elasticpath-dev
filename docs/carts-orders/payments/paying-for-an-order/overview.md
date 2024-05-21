---
title: Paying for an order Overview
nav_label: Paying for an order Overview
sidebar_position: 1
---

When you [checkout](/docs/commerce-cloud/checkout) a [cart](/docs/commerce-cloud/carts/carts.md), an unpaid [order](/docs/commerce-cloud/orders) is returned. You can process the payment for the order though a payment gateway.

:::caution

- You need to configure and enable a payment gateway before you can accept payments for orders.
- Configure your store to use [Manual Gateway](/docs/commerce-cloud/payments/paying-for-an-order/manual-payments) to process payments if the order total is zero or the payment is through non-supported payment providers.
- There are a number of actions that happen to your [inventory](https://app.gitbook.com/@moltin/s/api/catalog/inventory.mdx) when checking out and paying for an order. For more information, see [Inventory](/docs/pxm/inventories/inventory.mdx).
- We recommend to wait until the payment confirmation process is fully completed before proceeding with any additional updates to the order. Making simultaneous updates to the same entity immediately after payment confirmation can lead to a race condition. To learn more information on handling parallel calls to API objects, see [Parallel Calls to API Objects](/guides/Getting-Started/api-overview/api-contract#parallel-calls-to-api-objects).
::: 


## Payment Methods

Depending on the chosen gateway, you may or may **not** have access to `capture` funds immediately or `authorize` for later payment. For more information, see [Transactions](/docs/commerce-cloud/payments/transactions/transactions-overview).

To make a partial payment in Postman through any payment gateway, specify the desired payment amount in the `amount` field within the request body. To learn about Split Payments, see the [Split Payments](/docs/carts-orders/payments#split-payments) section.

### Purchase

The simplest method is `purchase`. The gateway attempts to charge the customer immediately, and the result of the attempt is returned.

You can partially pay funds using `purchase` method. The gateway attempts to charge the customer immediately, and the payment status for an order shows `partially_paid`.

When you [Get an order](/docs/commerce-cloud/orders/orders-api/get-an-order), you can see the following fields in the `meta` object:

- `balance_owing`: Specifies the outstanding funds required to complete an order. It considers all complete or pending transactions, including authorized, paid, and captured transactions. (`balance_owing` = order total - `authorized` amount - `paid` amount).
- `paid`: Specifies the total amount of purchased or captured transactions.
- `authorized`: Specifies the total amount of completed or pending authorized transactions for an order.

The following response is returned when you [Get an order](/docs/commerce-cloud/orders/orders-api/get-an-order):

`200 OK`

```JSON
{
    "data": {
        "type": "order",
        "id": "9a7bb3b4-4d64-48f2-b3b1-93be4cdfe6e0",
        "status": "incomplete",
        "payment": "partially_paid",
        "shipping": "unfulfilled",
        "anonymized": false,
        "customer": {
            "name": "Andy Dwyer",
            "email": "andy@example.com"
        },
        "shipping_address": {
            "first_name": "Andy",
            "last_name": "Dwyer",
            "phone_number": "",
            "company_name": "Ron Swanson Enterprises",
            "line_1": "1 Sunny Street",
            "line_2": "",
            "city": "Sunny Town",
            "postcode": "SU33 1YY",
            "county": "Sunnyville",
            "country": "GB",
            "instructions": ""
        },
        "billing_address": {
            "first_name": "Andy",
            "last_name": "Dwyer",
            "company_name": "Ron Swanson Enterprises",
            "line_1": "1 Sunny Street",
            "line_2": "",
            "city": "Sunny Town",
            "postcode": "SU33 1YY",
            "county": "Sunnyville",
            "country": "GB"
        },
        "links": {},
        "meta": {
            "display_price": {
                "with_tax": {
                    "amount": 60000,
                    "currency": "USD",
                    "formatted": "$600.00"
                },
                "without_tax": {
                    "amount": 60000,
                    "currency": "USD",
                    "formatted": "$600.00"
                },
                "tax": {
                    "amount": 0,
                    "currency": "USD",
                    "formatted": "$0.00"
                },
                "discount": {
                    "amount": 0,
                    "currency": "USD",
                    "formatted": "$0.00"
                },
                "balance_owing": {
                    "amount": 58000,
                    "currency": "USD",
                    "formatted": "$580.00"
                },
                "paid": {
                    "amount": 2000,
                    "currency": "USD",
                    "formatted": "$20.00"
                },
                "authorized": {
                    "amount": 0,
                    "currency": "USD",
                    "formatted": "$0.00"
                }
            },
            "timestamps": {
                "created_at": "2022-07-06T13:40:40Z",
                "updated_at": "2022-07-06T13:41:06Z"
            }
        },
        "relationships": {
            "items": {
                "data": [
                    {
                        "type": "item",
                        "id": "698cca74-4f4c-43cf-9c9e-3aaaefbb694b"
                    }
                ]
            }
        }
    }
}
```

### Authorize

You can `authorize` a payment so funds can later be captured when an item is dispatched or restocked.

You can partially pay for an order using `authorize` payment method so that the order is `partially_authorized`. The transaction must be `complete` for the order status to be `partially_authorized`.

The following response is returned when you [Get an order](/docs/carts-orders/orders/orders-api/get-an-order):

`200 OK`

```JSON
"data": {
    "data": {
        "type": "order",
        "id": "5c9e34f3-b9c6-4407-a4a6-5b7108645632",
        "status": "incomplete",
        "payment": "partially_authorized",
        "shipping": "unfulfilled",
        "anonymized": false,
        "customer": {
            "name": "Andy Dwyer",
            "email": "andy@example.com"
        },
        "shipping_address": {
            "first_name": "Andy",
            "last_name": "Dwyer",
            "phone_number": "",
            "company_name": "Ron Swanson Enterprises",
            "line_1": "1 Sunny Street",
            "line_2": "",
            "city": "Sunny Town",
            "postcode": "SU33 1YY",
            "county": "Sunnyville",
            "country": "GB",
            "instructions": ""
        },
        "billing_address": {
            "first_name": "Andy",
            "last_name": "Dwyer",
            "company_name": "Ron Swanson Enterprises",
            "line_1": "1 Sunny Street",
            "line_2": "",
            "city": "Sunny Town",
            "postcode": "SU33 1YY",
            "county": "Sunnyville",
            "country": "GB"
        },
        "links": {},
        "meta": {
            "display_price": {
                "with_tax": {
                    "amount": 60000,
                    "currency": "USD",
                    "formatted": "$600.00"
                },
                "without_tax": {
                    "amount": 60000,
                    "currency": "USD",
                    "formatted": "$600.00"
                },
                "tax": {
                    "amount": 0,
                    "currency": "USD",
                    "formatted": "$0.00"
                },
                "discount": {
                    "amount": 0,
                    "currency": "USD",
                    "formatted": "$0.00"
                },
                "balance_owing": {
                    "amount": 55000,
                    "currency": "USD",
                    "formatted": "$550.00"
                },
                "paid": {
                    "amount": 0,
                    "currency": "USD",
                    "formatted": "$0.00"
                },
                "authorized": {
                    "amount": 5000,
                    "currency": "USD",
                    "formatted": "$50.00"
                }
            },
            "timestamps": {
                "created_at": "2022-07-06T13:53:11Z",
                "updated_at": "2022-07-06T13:53:46Z"
            }
        },
        "relationships": {
            "items": {
                "data": [
                    {
                        "type": "item",
                        "id": "90724e6c-996c-4ec0-8f01-fac451eb3647"
                    }
                ]
            }
        }
    }
}
```

For more information about order and payment statuses for split payments, see [Split Payments](/docs/carts-orders/paymentsplit-payments-beta-release).

### Capture

After authorizing a transaction, you have to `capture` the authorized funds.

:::caution
We recommend capturing payments several hours to days after the authorization to mitigate risks of fraud and chargebacks. When you sell digital goods that are delivered immediately, we recommend using a single `purchase` call instead of separate `authorize` and `capture` calls.
:::

After the payment is `partially_authorized`, you must `capture` the authorized transaction later. Once you `capture` the authorized transactions, the order payment status will change to `partially_paid`. The following response is returned when you [Get an order](/docs/carts-orders/orders/orders-api/get-an-order):

 `200 OK`

 ```JSON
 {
    "data": {
        "type": "order",
        "id": "5c9e34f3-b9c6-4407-a4a6-5b7108645632",
        "status": "incomplete",
        "payment": "partially_paid",
        "shipping": "unfulfilled",
        "anonymized": false,
        "customer": {
            "name": "Andy Dwyer",
            "email": "andy@example.com"
        },
        "shipping_address": {
            "first_name": "Andy",
            "last_name": "Dwyer",
            "phone_number": "",
            "company_name": "Ron Swanson Enterprises",
            "line_1": "1 Sunny Street",
            "line_2": "",
            "city": "Sunny Town",
            "postcode": "SU33 1YY",
            "county": "Sunnyville",
            "country": "GB",
            "instructions": ""
        },
        "billing_address": {
            "first_name": "Andy",
            "last_name": "Dwyer",
            "company_name": "Ron Swanson Enterprises",
            "line_1": "1 Sunny Street",
            "line_2": "",
            "city": "Sunny Town",
            "postcode": "SU33 1YY",
            "county": "Sunnyville",
            "country": "GB"
        },
        "links": {},
        "meta": {
            "display_price": {
                "with_tax": {
                    "amount": 60000,
                    "currency": "USD",
                    "formatted": "$600.00"
                },
                "without_tax": {
                    "amount": 60000,
                    "currency": "USD",
                    "formatted": "$600.00"
                },
                "tax": {
                    "amount": 0,
                    "currency": "USD",
                    "formatted": "$0.00"
                },
                "discount": {
                    "amount": 0,
                    "currency": "USD",
                    "formatted": "$0.00"
                },
                "balance_owing": {
                    "amount": 55000,
                    "currency": "USD",
                    "formatted": "$550.00"
                },
                "paid": {
                    "amount": 5000,
                    "currency": "USD",
                    "formatted": "$50.00"
                },
                "authorized": {
                    "amount": 0,
                    "currency": "USD",
                    "formatted": "$0.00"
                }
            },
            "timestamps": {
                "created_at": "2022-07-06T13:53:11Z",
                "updated_at": "2022-07-06T13:54:53Z"
            }
        },
        "relationships": {
            "items": {
                "data": [
                    {
                        "type": "item",
                        "id": "90724e6c-996c-4ec0-8f01-fac451eb3647"
                    }
                ]
            }
        }
    }
}
```

For more information about order and payment statuses for split payments, see [Split Payments](/docs/carts-orders/paymentsplit-payments-beta-release).

### Refunds

You can use either the **Refund** through Composable Commerce or use the **Mark as Refunded** capability, or a combination of both capabilities.

For more information about refund for split payments, see [Refund a Payment](/docs/carts-orders/payments/transactions/refund-a-transaction).

#### Refund through Composable Commerce

You can start a full or partial refund to a supported payment provider directly from Commerce Manager or the API. When you start the refund process, the refund request is sent to the payment gateway. You no longer have to log on to your payment gateway’s console to process the refund.

When you process a refund, use the `refund` endpoint to pass the refund amount. If you don’t pass an amount, the refund is processed as `Mark as refunded`. For more information, see the [Mark as Refunded](#mark-as-refunded) section.

Each time a partial refund is triggered, the `transaction.updated` event is generated and updated with `refunded.amount`. The `order.updated` event is also triggered. The `order.refunded` event generates when the full amount is refunded.

#### Mark as Refunded

You can use your payment gateway’s console to process a refund. Process the refund first in the payment gateway and then use the **Mark as Refunded** capability in Composable Commerce to complete the process.

When an order is **Marked as refunded**, the payment status `order.payment.status` is set to `refunded`. In this case, the `order.updated`, `transaction.updated` and `order.refunded` events are generated.
