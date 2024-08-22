---
title: Studio Release 119 | Oct 20, 2021
date: 2021-10-20
tags:
  - Studio
---

#### Overview

This release included a variety of things from improvements to internal tooling, new integrations, bug fixes, and more.

#### Buy buttons moved above product description, & other small tweaks

A small update, but significant for our Shopify customers: We've moved the buy buttons above the description on the
product component. This puts it in a more prominent place, and works better for products with really long descriptions.
Really long descriptions could even push the button below the fold.

We also removed FAQs from product component and fixed the sticky details section for the vertical images layout.

 ![Rearranging UI Attributes](/assets/studio/Screenshot-2021-10-20-at-8.08.16-PM.png)

#### Complete List of Resolved Items

* Buy buttons were moved above the description
* FAQ section was removed from product component
* Fixed a bug where product details were not sticky and would not scroll with images when using the "List" layout of the
  Product component.
* If one exists, the URL that a product collection component uses has been changed to that of the PDP. If one doesn't
  exist, then "online\_store\_url" is used.
* Fixed a bug where the incorrect prices were being shown for products.
* Fixed a bug where the templates page wasn't working properly.
* Fixed a bug with the back button breaking the templates page.
* Pushed an update for increased site security for Shopify.
* Fixed a bug with page redirects when the pages are created via DDC.
* Fixed a bug where users on our Full Monthly plan couldn't add SSL to their account.
* Fixed a bug where "Save and publish" button in an article's settings is not reset to it's original state when there is
  an error saving an article.
* New Integrations
    + Padeo
    + Typekit (JS only)
    + jQuery
