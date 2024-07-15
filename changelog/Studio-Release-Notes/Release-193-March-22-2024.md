---
title: Studio Release 193 | March 21, 2024
date: 2024-03-21
tags:
  - Studio
---

#### Overview

New Stripe Payment Intents integration is now available and lots of bug fixes in this release.

#### Stripe Payment Intents

You can now integrate Studio with Stripe Payment Intents, enabling you to use the Stripe Payment Intents features on your Studio storefront. These features include:

- authorizing a payment and capturing the funds later, for example, if you only want to capture funds when order is fulfilled.
- handling dynamic payments where payment amount may change before payment is captured.
- integrating 3D Secure into your payment flow, providing an additional layer of security for credit and debit card transactions.

For more information, see [Stripe Payment Intents](/docs/studio/Integrations/stripe-payment-intents).

#### Complete List of Resolved Items

#### Elastic Path Composable Commerce

* **Bug** - Fixed an issue where the product variation option description was not displaying on the editor.

#### NOML 

* **Bug** - Improved error handling for invalid NOML.

#### Checkout

* **Bug** - Fixed an issue where confusing validation messages were displayed for delivery during checkout.
* **Bug** - Fixed an issue where a **Shipping Options IH fow url not configured properly** error was displayed on the checkout page.


#### Shipping

* **Bug** - Fixed an issue where if only **Pickup at warehouse** is selected, the **Pickup at warehouse** options are not shown.

