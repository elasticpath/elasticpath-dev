---
title: Integrating Stripe Connect
nav_label: Stripe Connect
sidebar_position: 263
---

You can quickly and easily integrate Studio with Stripe Connect. Once configured, you can use the Stripe Connect features on your Studio storefront. These features include:

- Multi-party payments, splitting payments between multiple shoppers and managing complex payment flows. 
- Flexible APIs and SDKs to allow you to integrate payment and payout functionality on your Studio storefront. 
- Tools for verifying the identities of shoppers on your Studio storefront.
- Scheduled, automated or manual payments to shoppers on your Studio storefront.

## Prerequisites

1. Depending on the payment methods you want to support, you may need to configure them in Stripe.
2. Log in to the [Stripe Dashboard](https://dashboard.stripe.com/login) to find your Stripe Account ID.
3. Go to Commerce Manager to ensure the **Stripe Connect** gateway is [enabled](/docs/commerce-manager/payments/configure-other-payment-gateways#enabling-stripe-connect).

## Configure the Stripe Integration

Follow these steps to configure the **Stripe Connect** integration in Studio.

1. Select **Settings** > **Integrations**.
2. Navigate to **Payment**.
3. Select **+** next to **Stripe Connect**.
4. Configure the Stripe component settings.

    | Option              | Description                                                                                                              |
    |:--------------------|:-------------------------------------------------------------------------------------------------------------------------|
    | **Publishable key** | Your publishable key for your Stripe account. You can get this from the [Stripe Dashboard](https://dashboard.stripe.com/login) under the **API keys** tab. |
    | **Account ID**      | Your Stripe account ID. See [Prerequisites](#prerequisites).                                                             |

5. Select **Restrict Shipping to Default Country** if you want to restrict shipping your products to your native country.
6. Select **Connect Account**. 




