---
title: Configure Elastic Path Composable Commerce Stripe Plugin
nav_label: Configure Elastic Path Composable Commerce Stripe Plugin
sidebar_position: 161
---

The Elastic Path Composable Commerce Stripe Plugin enables Commerce to securely connect to Stripe for payment capabilities. This plugin provides a more secure way to authenticate. If you are using Stripe or Stripe Intent gateway, you must install the Stripe plugin in your [Stripe Dashboard](https://dashboard.stripe.com/login).

## Steps to Configure Elastic Path Composable Commerce Stripe Plugin

1. Login to your [Stripe Dashboard](https://dashboard.stripe.com/login).
2. Ensure that you are in either a test mode or a production mode, depending on whether you are configuring a production environment or a test environment. You can switch the modes using the toggle in the top-right corner of the dashboard.
3. Install the Elastic Path Composable Commerce Stripe Plugin within the Stripe Dashboard.
4. Once installed, navigate to the **View App Settings**, and then select **View API Keys**.
5. Copy the **Publishable key** value. This key is used when configuring Payment Elements on your front-end.
6. Copy the **Secret key** value. Paste this key in Commerce Manager or Payment gateway APIs for [Stripe](https://elasticpath.dev/docs/commerce-manager/payments/configure-other-payment-gateways#enabling-stripe) and [Stripe Intent](https://elasticpath.dev/docs/commerce-manager/payments/configure-other-payment-gateways#enabling-stripe-payment-intents) gateways to make the payments.