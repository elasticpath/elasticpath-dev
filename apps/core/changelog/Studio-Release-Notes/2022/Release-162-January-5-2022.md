---
title: Studio Release 162 | January 5, 2022
date: 2022-01-22
tags:
  - Studio
---

#### Overview

Following the end of the holiday season we shipped a number of quality of life improvements for components and a handful
of other changes.

#### Banner Features

**Better reviews ⭐⭐⭐⭐⭐**

Our reviews component has been revamped to include better layout support as well as properties for toggling stars,
avatars, and taglines.

**Animated logos & more!**

Our standard logos component has been updated with support for animated scrolling! We also added support for grayscale,
black & white, or reversed filtering.

**Content subscriptions are no more**

While this is a valuable feature for people who want to require a subscription in order to access content, Stripe
deprecated their payment forms entirely and is now telling users to
use [payment links](https://stripe.com/payments/payment-links) to achieve the same functionality. We were faced with
updating our code to use payment links instead of forms (which was costly) or phasing out the feature. As this is not a
widely used feature we chose the latter.

**Meta description is now optional!**

Previously we required that users add a meta description to their page before we let them publish that page. This is no
longer the case. While it can be important for SEO, people often bypass this requirement with dummy content. This is
actually worse for SEO. And if you don’t need to worry about SEO for your use case it makes no sense to require it.
Given this, we decided the best thing was just to make it an optional field.

#### Complete List of Resolved Items

#### Product Component

* **Tweak** - Adjusted the "Product/Custom Text" section so that the images would be properly optimized.
* **Tweak** - Adjusted the "Select a product" drawer so that the products would appear the same size regardless of how
  long the product name was.

#### Product Collections

* **Bug** - Fixed an issue where small alt images would overlay on the bigger primary images.

#### Other Components

* **Feature** - Improved logos component
* **Feature** - Improved reviews component

#### Editor Improvements

* **Tweak** - Updated the page editor to no longer require a meta description when publishing a page.
* **Bug** - Fixed an issue where creating a new page from a template would sometimes lead to no header being set on the
  rendered page, regardless of what was defined in the page settings.

#### Official Integrations

* **Tweak** - Stripe deprecation. Removed from list of integrations, removed option from gated content, settings, and "
  Payments" option removed from Unstack admin.
