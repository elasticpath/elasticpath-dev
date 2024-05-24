---
title: Integrating Stripe Payment Intents
nav_label: Stripe Payment Intents
sidebar_position: 264
---

You can quickly and easily integrate Studio with Stripe. Once configured, you can use the Stripe Payment Intents features on your Studio storefront. These features include:

- authorizing a payment and capturing the funds later, for example, if you only want to capture funds when order is fulfilled.
- handling dynamic payments where payment amount may change before payment is captured.
- integrating 3D Secure into your payment flow, providing an additional layer of security for credit and debit card transactions.

## Prerequisites

1. Depending on the payment methods you want to support, you may need to configure them in Stripe.
2. Log in to the [Stripe Dashboard](https://dashboard.stripe.com/login) to find your Stripe Secret Key.
3. Go to Commerce Manager to ensure the **Stripe Payment Intents** gateway is [enabled](/docs/commerce-manager/payments/configure-other-payment-gateways#enabling-stripe-payment-intents).

## Configure the Stripe Integration

Follow these steps to configure the Stripe integration in Studio.

1. Select **Settings** > **Integrations**.
2. Navigate to **Payments**.
3. Select **+** next to **Stripe Payment Intents**.
4. Configure the Stripe component settings.

    | Option              | Description                                                                                                              |
    |:--------------------|:-------------------------------------------------------------------------------------------------------------------------|
    | **Publishable key** | Your publishable key for your Stripe account. You can get this from the [Stripe Dashboard](https://dashboard.stripe.com/login) under the **API keys** tab. |
    | **Account ID**      | Your Stripe account ID. See [Prerequisites](#prerequisites).                                                             |

5. Select **Restrict Shipping to Default Country** if you want to restrict shipping your products to your native country.
6. Select **Connect Account**. 




