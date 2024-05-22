---
title: Overview
nav_label: Overview
sidebar_position: 1
---

Payments for orders are processed through a payment gateway. Composable Commerce offers integrations for a selection of payment gateway providers, or you can create your own integrations.

Payment transactions are processed similarly for all gateways:

1. A payment transaction is created and an attempt to pay is made.
2. The transaction is forwarded to the third-party gateway specified by the customer.
3. The payment is processed by the third-party gateway.

Payment transactions are always processed outside of Composable Commerce for security reasons. Typically, you use a token rather than pass the card details directly. If, however, you want to pass the cart details directly to the third-party provider, Composable Commerce enforces the use of the secure HTTPS protocol. If the transaction is successful, a `200 OK` response is returned. Use the response (success or failure) to update the transaction, which automatically updates the order and payment statuses.

A payment transaction can also be refunded. You can select which way you want to process refunds:

- **Mark as Refunded**: You can use your payment gateway’s console to process a refund. Process the refund first in the payment gateway and then use the **Mark as Refunded** capability in Composable Commerce to complete the process.
- **Refund through Composable Commerce**: Start a full or partial refund to a supported payment provider directly from Commerce Manager or the API. You still have the ability to mark as refunded for a pre-integrated gateway, such as Stripe.

:::caution
Configure your store to use [Manual Gateway](/docs/carts-orders/payments/paying-for-an-order/manual-payments) to process payments if the order total is zero or the payment is through non-supported payment providers.
:::

## Order Status Workflow

The following image shows the workflow of the order status when you checkout a cart.

![Order Workflow](/assets/Order-Workflow.png)

### Summary of the workflow

1. [Checkout](/docs/commerce-cloud/checkout) a cart. When you checkout a cart, an unpaid order is returned.
1. [Paying for an order](/docs/carts-orders/payments/paying-for-an-order/overview). You can process the payment for an order through a payment gateway. You can pay for an order either using `purchase` payment method or `authorize` payment method.
1. Confirm the order. Order confirmation might be required when you purchase or authorize a transaction. If you use a `purchase` method, the order is immediately confirmed. If you use `authorize` method, funds are captured later when an item is dispatched or restocked, and then the order is considered as complete. See [Capture a Transaction](/docs/carts-orders/payments/transactions/capture-a-transaction).
1. [Fulfill](/docs/carts-orders/orders/orders-api/update-an-order#put-fulfill-an-order-by-id), [Refund](/docs/carts-orders/payments/transactions/refund-a-transaction) or [Cancel](/docs/carts-orders/orders/orders-api/update-an-order#put-cancel-an-order-by-id) the paid order. The order is considered as fulfilled when it is shipped. You can cancel the order after the checkout or if the order is not fulfilled. You can also choose to refund a partial payment or full payment.
1. (Optional) [Cancel a transaction](/docs/carts-orders/payments/transactions/cancel-a-transaction#post-cancel-a-transaction). You can cancel or void a `pending` or `authorized` transaction. The transaction can be canceled or voided when it is in `pending` and `completed` statuses. This works only for Stripe and PayPal and does not work for manual gateway.
1. (Optional) [Anonymize an order](/docs/carts-orders/orders/orders-cm#anonymizing-orders). You can anonymize an order when it is fulfilled, canceled, or fully refunded.

## Split Payments

Split payments involve multiple payment sources for a single order, using externally authorized payments. For example, you can pay for an order using a gift card and a credit card. An order with multiple payment transactions can also be in multiple payment states depending on each transaction.

Transactions for split payments are processed similarly for all gateways:

1. A partial payment transaction is created and an attempt to pay the partial amount is made.
2. The transaction for the specified amount is forwarded to the payment gateway specified by the customer.
3. The partial payment is processed.
4. Another partial payment transaction is created and an attempt to pay the remaining amount is made.
5. Another transaction for the remaining amount is forwarded to the payment gateway specified by the customer.
6. The payment is processed, paid, and complete. The payment status must show **paid** after the order is completed.

You can refund transactions for split payments. For more information about refund, see [Refund a Payment](/docs/carts-orders/payments/transactions/refund-a-transaction).

The following scenarios show how a shopper can use multiple sources for split payment:

- Gift card and credit card
- Purchase order and credit card
- Store credit and credit card
- Employee dollars and credit card
- Gift card and loyalty card
- Loyalty card and wallet

The following image shows a workflow of the split payments.

![Split Payments](/assets/split-payment-workflow.png)

The following table describes the payment and order statuses that you can see when an order is passed through multiple stages.

| Payment Status | Order Status | Inventory Status | Description |
| --- | --- | --- | --- |
| `partially_authorized` | `incomplete` | Allocated | Indicates that the payment is `partially_authorized` and the `balance_owing` value is greater than zero. In this case, one of the transactions is authorized and complete. |
| `partially_paid` | `incomplete` | Allocated | Indicates that the funds are captured but the `balance_owing` value is greater than zero. In this case, one of the transactions is captured or purchase is complete. |
| `unpaid` | `incomplete` | Not Allocated | Indicates that the order does not have any complete payment transactions. In this case, all the transactions or any of the transactions can be still pending. |
| `authorized` | `processing` | Allocated | Indicates that completed transactions cover the entire total amount for an order and at least one of the transactions is `authorized`. |
| `paid` | `complete` | Allocated | Indicates that the order is complete and the amount for the order is fully paid when all authorized transactions are captured or purchase transactions are complete. |

## Related Resources

- [Orders](/docs/carts-orders/orders)
- [Calculate cart and order totals](/guides/How-To/Carts/calculate-totals)
