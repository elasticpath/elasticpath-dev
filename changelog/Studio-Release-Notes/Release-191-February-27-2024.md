---
title: Studio Release 191 | February 27, 2024
date: 2024-02-27
tags:
  - Studio
---

#### IMPORTANT

Bootstrap Grid and Flex Grid are no longer supported.

#### Overview

A new integration with Advanced Commerce (Graphene HC), and lots of bug fixes in this release.

#### Integrations

Support for Advanced Commerce (Graphene HC) is now available. This means that you can synchronize your Studio storefront with your Advance Commerce (GrapheneHC) storefront giving you advanced searching and merchandizing capabilities. See [Advanced Commerce GrapheneHC](/docs/studio/Integrations/advanced-commerce).

#### Shipping

Shipping address fields have been renamed from **Address**, **Apartment Suite**, to **Address Line 1** and **Address Line 2**.

#### Layout

Now, when you click on either a product name or image, you are directed straight to the corresponding product page. 

#### Complete List of Resolved Items

#### Mobile 

* **Bug** - Fixed an issue where the Reviews component was not rendering correctly.

#### Blogs

* **Bug** - Fixed an issue where blogs were receiving a 500 internal server error.
* **Bug** - Fixed an issue where a blog index page was crashing if the page was not manually published once.

#### Pages

* **Bug** - Fixed an issue where pages prefixed with an account name were receiving a 500 internal server error.

#### Elastic Path Composable Commerce

* **Bug** - Fixed an issue where searching for Segment Elastic Path Composable Commerce products caused a CORs error.
* **Bug** - Fixed an issue where despite **List Price** being unchecked, the sale price is displayed when the page is published.
* **Bug** - Fixed an issue where, despite a product showing as no stock is available, you can still add the product to a cart.
* **Bug** - Fixed an issue where selecting a product in a product collection component and checkout page was not redirecting to the product page.

#### Images

* **Bug** - Fixed an issue where images were stretched to maximum size in the cart and checkout pages, rather than displaying in the defined size.
* **Bug** - Fixed an issue where the screenshot service was crashing intermittently.
