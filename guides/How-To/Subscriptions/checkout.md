---
title: Implementing a Checkout Journey 
nav_label: Implementing a Checkout Journey
sidebar_position: 30
---

A well-designed checkout flow ensures that your shoppers can easily checkout a subscription, reducing friction and encouraging successful conversions. 

When an order that contains a subscription is paid for then the subscription gets created in the Subscriptions service. An account must exist for a subscriber, although the subscriber does not need to exist. If a subscriber does not exist, the subscriber is created.

All of this is automatic and does not require any input from your shoppers.

As an implementor, you must:

1. Create an account. See [Create an Account](/docs/api/accounts/post-v-2-accounts).
2. Depending on the payment gateway you are using, create a customer for the gateway. For example, if you are using Elastic Path Payments, then you must create a customer in your Stripe connected account. See [Elastic Path Payments Powered by Stripe](/docs/payments).
3. The checkout journey then follows the [checkout workflow](/docs/api/carts/checkout). 
4. When a shopper makes a payment, the payment request must specify the parameters described in [Payment Requests](/docs/api/subscriptions/invoices#payment-requests).