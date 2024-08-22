---
title: Studio Release 148 | August 23, 2022
date: 2022-08-23
tags:
  - Studio
---

#### Overview

Given the scope/size of [Release 148](https://support.unstack.com/hc/en-us/articles/8567253215127), this release was
focused on a couple small changes, some internal tooling, and bug fixes.

#### Banner Features

**Updated Actions Menu**

We updated our actions menu to simply the options and increase visibility on darker backgrounds. On the left is the new
design; on the right is the previous design.

![Actions Link](/assets/studio/actions.png)
![Add Action](/assets/studio/screely-1663010689605.png)

**Updated Shopify APIs**

Shopify deprecated a number of older APIs that we depend on so we updated our code to use the new APIs before the older
APIs reached their end-of-life.

#### Complete List of Resolved Items

#### Editor Improvements

* **Tweak** - Fixed an issue where action items were overlapping with one another.
  + **Bug** - Fixed an issue where the section and box toolbars would overlap with one another when selecting a
  fill color on some sections.
  + **Bug** - Fixed an issue with the title position in the new editor header.
  + **Bug** - Fixed an issue where "dark background" button styles weren't inherited properly.

#### Smart Links

* **Bug** - Fixed an issue where the smart link search would persist when editing the URL of a social logo in the
  Footer.
  + **Bug** - Fixed an issue where the smart link search would persist after selecting a product to link.

#### Banner Component

* **Bug** - Fixed an issue where the button in the banner was being cut off on mobile.

#### Shopify

* **Tweak** - Updated the Shopify APIs that we were using.
  + **Bug** - Fixed an issue where accounts with expired trials weren't being asked to choose a plan.
  + **Bug** - Fixed an issue where some "Add to Cart" buttons were greyed out despite the product being available
  and in-stock.
  + **Bug** - Fixed an issue where some "Add to Cart" buttons weren't working properly on Firefox & Safari.

#### Misc. Improvements/Changes

* **Feature** - Improved the NoML around pagination for sliders.
  + **Feature** - Created internal Zapier integration for our support, success, and marketing teams.
  + **Bug** - Fixed an issue where some images with transparent backgrounds weren't rendering properly
  + **Bug** - Fixed an issue where a small white margin was being added to the bottom of all pages.
