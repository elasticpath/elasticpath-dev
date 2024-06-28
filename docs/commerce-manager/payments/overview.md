---
title: Overview
nav_label: Overview
sidebar_position: 1
---

You can view your store’s payment gateways on the **SYSTEM > Store Settings > Payment Gateways** tab.

For an overview of how payments work in Commerce, see [Payments](/docs/api/carts/payments).

:::caution
If the order total is zero or the payment is processed through non-supported payment providers, you can configure [Manual Gateway](/docs/api/payments/update-manual-gateway) to process your store payments.
:::

We support the following payment gateways:

- Elastic Path Payments powered by Stripe
- PayPal Express Checkout
- Stripe Connect
- Stripe Payment Intents
- CyberSource
- Authorize.net
- Adyen
- Braintree
- CardConnect
- Manual
- Stripe

## Sorting and Filtering Payment Gateways

You can sort the payment gateway list by **Name** or **Status**.

You can filter the payment gateway list to show which gateways are **Enabled** or **Disabled**.

## Modifying a Payment Gateway

1. Select the payment gateway name on the **SYSTEM > Store Settings > Payment Gateways** tab.
1. Enter the details for the selected payment gateway.

:::note
- Each payment gateway can require different information, and the field names can be relevant to the specific gateway only.
- Contact your payment provider for details.
:::
