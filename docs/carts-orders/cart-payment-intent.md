---
title: Cart Payment Intent
nav_label: Cart Payment Intent
sidebar_position: 128
---

The Cart Payment Intent feature enables the creation of a Stripe Payment Intent specifically tied to a shopping cart and its subsequent order. This allows Payment Intent users to track payment details from the cart stage and seamlessly maintain consistency in payment information throughout the order stage. Using these features, you can create Payment Intents for their carts, update Payment Intents with final cart details, and synchronize Payment Intents from Stripe to Commerce.

:::note
- Typically, in Commerce, inventory is allocated at the time of payment initiation after an order is created. However, in the case of Cart Payment Intent, information about the payment is received only upon synchronizing the order from Stripe to Commerce. This may happen after the payment is completed. Therefore, there might be a delay between the payment made and allocation, increasing the chance of paying for items that are not in stock.
- There are certain fields you can choose to set up when [creating a payment intent](https://stripe.com/docs/api/payment_intents/create). However, if you decide to update a payment intent, the available options may not be the same as those allowed while creating a payment intent. See [updating a payment intent](https://stripe.com/docs/api/payment_intents/update).
:::


The following steps outline the workflow associated with the Payment Intent:

1. [Add items to cart](/docs/api/carts/cart-merge#add-custom-item-to-cart).
1. [Create a Payment Intent for the cart](/docs/carts-orders/cart-payment-intent). The Payment Intent is created in Stripe, reflecting the cart and transaction details, including currency, amounts, payment type, and any optional Stripe details. The Payment Intent ID is generated and linked to the cart.
1. [Update a Payment Intent](/docs/carts-orders/update-cart-payment-intent). This step is optional but becomes necessary when there are changes in the cart details at the time of payment. It ensures the Payment Intent accurately reflects the current cart details when processing the payments on the front end.
1. [Checkout the cart](/docs/carts-orders/checkout). An unpaid order is created, and the Payment Intent ID is linked to the order.
1. [Confirm the order](/docs/carts-orders/confirm-an-order). This is important because after checkout, it is essential to confirm the Payment Intent and synchronize it with Commerce. This results in a corresponding transaction and change in order statuses in Commerce. Additionally, the Payment Intent ID is removed from the order once it is linked via the transaction.

## Best Practices

We recommend you follow these practices to maintain consistency and accuracy when using Cart Payment Intent.

- After checkout, we recommend clearing the shopping cart. You can achieve this using a [Delete a cart](/docs/api/carts/delete-a-cart) endpoint or [Update a cart](/docs/api/carts/update-a-cart) to remove the Payment Intent ID. This helps to avoid potential issues where subsequent checkouts for the same cart might unintentionally use the previous Stripe Payment Intent ID.
- If it is not reasonable to clear the cart immediately after checkout due to several subsequent, duplicate checkouts to the same cart, ensure that you only synchronize the Payment Intent when finalizing the order. Each order confirmation is unaware of the others, and syncing Payment Intent IDs for each confirmation can lead to duplicate transactions in Commerce. In other words, if you synchronize Payment Intents for earlier versions of a repeated checkout, you'll end up with multiple orders from the same cart, each having transactions linked to the same Payment Intent.
- To pay the entire amount at once, use the [Update Cart Payment Intent](/docs/carts-orders/update-cart-payment-intent) endpoint to update the Stripe Payment Intent with the final cart details when preparing to take the payment. Doing so, ensures that the Payment Intent accurately reflects the current cart details when processing payments on the front end. We do not recommend calling the [Update Cart Payment Intent](/docs/carts-orders/update-cart-payment-intent) for each individual change in the cart, as this can lead to more requests and may slow down the front-end performance.
