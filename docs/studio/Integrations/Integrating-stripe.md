---
title: Integrating Elastic Path Payments Powered by Stripe
nav_label: Elastic Path Payments Powered by Stripe
sidebar_position: 112
---

You can quickly and easily integrate Studio with Stripe. Once configured, you can use the **Checkout** page that is automatically created for you when you connect to [Commerce](/docs/studio/getting-started-with-epcc) in your storefront. 

## Prerequisites

1. Ensure that you are [onboarded](/docs/payments/onboarding) to Elastic Path Payments Powered by Stripe. 

    :::note
    Depending on the payment methods you want to support, you may need to configure them in Stripe.
    :::

2. Log in to the [Stripe Dashboard](https://dashboard.stripe.com/login) to find your Stripe Account ID.
3. Go to Commerce Manager to ensure the Elastic Path Payments powered by Stripe gateway is [enabled]( /docs/payments/enable-elasticpath-payment-gateway).
4. Ensure that you have configured your **Elastic Path** integration with Studio. See [Getting Started with Composable Commerce](/docs/studio/getting-started-with-epcc).

## Configure the Stripe Integration

Follow these steps to configure the Stripe integration in Studio.

1. Select **Settings** > **Integrations**.
2. Navigate to **Payment & Storefront**.
3. Select **+** next to **Stripe**.
4. Configure the Stripe component settings.

    | Option              | Description                                                                                                              |
    |:--------------------|:-------------------------------------------------------------------------------------------------------------------------|
    | **Publishable key** | Your publishable key for your Stripe account. You can get this from the [Stripe Dashboard](https://dashboard.stripe.com/login) under the **API keys** tab. |
    | **Account ID**      | Your Stripe account ID. See [Prerequisites](#prerequisites).                                                             |

5. Select **Restrict Shipping to Default Country** if you want to restrict shipping your products to your native country.
6. Select **Connect Account**. The **Checkout** page that was automatically created when you connected to Commerce is now available for you to use in your storefront. 

![published checkout page](/assets/checkoutpublished.png)




