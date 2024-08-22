---
title: Studio Release 146 | July 26, 2022
date: 2022-07-26
tags:
  - Studio
---

#### Overview

This release bookends a lot of the improvements
in [Release 143](https://support.unstack.com/hc/en-us/articles/7071137271575), [Release 144](https://support.unstack.com/hc/en-us/articles/8055797179671),
and [Release 145](https://support.unstack.com/hc/en-us/articles/8056370053271) with some finishing work and a number of
bug fixes. The most significant feature added is the ability to customize shadows in the style guide.

#### Banner Features

**Shadow settings in the style guide**

Full shadow customization is now available through the Style Guide!

**Out-of-stock products**

The product component will now display “Out of Stock” on the add-to-cart button in addition to disabling it when the
number of available products is less than 0.

![Out of Stock](/assets/studio/Screen_Shot_2022-07-25_at_2.58.15_PM.png)

**Smart Link Polish**

Some additional work was done on smart links to expand on current tooling and to squash some persistent issues with
toolbar functionality.

#### Complete List of Resolved Items

#### **Shopify**

* **Bug** - Fixed an issue where navigation links in the liquid header/footer would appear differently in Unstack
  than they did in Shopify.

#### **Editor Improvements**

* **Feature** - Added support for pre-defined shadow settings in the Style Guide.
  + **Feature** - Added NoML support for defining default shadows on components.
  + **Tweak** - Adjusted box toolbars so they don't float over content when expanded.
  + **Bug** - Fixed an issue where the default box shadow setting was not properly indicated in the box toolbar.
  + **Bug** - Fixed an issue where the A/B Testing button would require two clicks to open sub-toolbar.

#### **Smart links**

* **Tweak** - Pushed several more stability updates for Smart Links

#### **Components**

* **Tweak** - Adjusted the text of the product component's Add-To-Cart button to say "Out of stock" when the product
  is out of stock.
  + **Bug** - Fixed an issue with the banner component where an applied background image wouldn't be displayed.
  + **Bug** - Fixed an issue with the background color of the banner component not rendering properly

#### **Style Guide Improvements**

* **Bug** - Fixed an issue where the color selection drawer would show the color in RGB.
    + **Bug** - Fixed an issue where Brand Primary was being set to "rgba (0,0,0,0)" by default.

#### **Klaviyo**

* **Tweak** - Refreshed client-side properties that are pushed to Klaviyo.
    + **Tweak** - Cleaned up contact info in our database.
    + **Bug** - Fixed a CSS collision issue with Klaviyo popover forms.

#### **Customer Issues**

* **Bug** - Fixed an issue where a user couldn't open their Style Guide
    + **Bug** - Updated FAQ schema
    + **Bug** - Fixed a product images issue
    + **Bug** - Updated URL & OG URL definitions for author pages
