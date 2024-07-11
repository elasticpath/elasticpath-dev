---
title: Studio Release 192 | March 13, 2024
date: 2024-03-13
tags:
  - Studio
---

#### Overview

Shopper Single Sign-On is now available and lots of bug fixes in this release.

#### Shopper Single Sign-On

Instead of requiring your shoppers to create yet another account, you can implement single sign-on in Studio. 

Shopper single sign-on allows shoppers using Studio storefronts to access multiple applications and services with a single set of credentials, streamlining the login process and improving your shoppers experience of your online store. In addition, you can gather more comprehensive user data preferences, enabling you to deliver more personalized shopping experiences. For more information, see [Shopper Single Sign-On](/docs/studio/Settings/sso).

#### CSS Variables - Beta Release

Studio now enables you to customize your Studio storefronts appearance using CSS variables. You can use these variables in the Component Editor when you are creating your [custom components](/docs/studio/developers/custom-themes/custom-components). See [CSS Variables](/docs/studio/developers/custom-themes/css-variables).

#### Complete List of Resolved Items

#### Mobile

* **Bug** - Fixed an issue where the product component in mobile view was not visible on the rendered page.

#### Checkout 

* **Bug** - Fixed an issue where the total was not showing the currency code.

#### Blogs

* **Bug** - Fixed an issue where a blog category would not delete if there were published articles in the category.

#### Accounts

* **Bug** - Fixed an issue where shoppers are redirected to account instead of the home page when logged out.

#### Application Editor

* **Bug** - Fixed an issue where on product display pages, the options were not enabled so the cart was not enabled.
* **Bug** - Popup forms data not displaying in Customers section.

#### Shipping

* **Bug** - Fixed an issue where the shipping line item was displaying as **undefined**.
* **Bug** - Fixed an issue where the shipping item in order totals was showing as 0 when it should have been using the price from the shipping line item.
* **Bug** - Fixed an issue where the shipping line item was showing in the cart when it should only be shown in the subtotal for items in the cart.
