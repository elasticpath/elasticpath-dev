---
title: Studio Release 120 | Nov 2, 2021
date: 2021-11-02
tags:
  - Studio
---

#### Overview

The theme of this release was overwhelmingly ***Fix Shopify Bugs.***

That's right! As we worked on testing the app in preparation for submitting it to Shopify, we found numerous bugs. These
were the sort of thing that would trip up the unsuspecting user and would result in a bad experience. We triaged the
bugs we discovered and hit the most important ones in a week focused on Bug Bash.

In total, we fixed **18 bugs** in this release and shipped **14 tweaks**.

#### Complete List of Resolved Items

* Fixed a bug where adding a product to your cart would still show the "Your bag is currently empty" text.
* Fixed a bug where Times New Roman was being used as the font in cart drawers.
* Fixed an accessibility issue for Unstack account settings on smaller screens.
* Fixed an issue where a blog "fetch" job would fail.
* Fixed an issue where the variants column would always be empty.
* Fixed an issue where the Collection component would default to two products, instead of four.
* Fixed an issue where deleted product images in Shopify would continue to show up in the product component in Unstack.
* Fixed an issue where the user is sent to the wrong page when dismissing the "Quickstart".
* Fixed an issue where a black check SVG icon would flash on the screen before the in-app settings would load.
* Fixed an issue with broken links in used in settings.
* Fixed an issue where adding a product to your cart would return "Undefined".
* Fixed several backend issues that will help to make the app more stable.
* Fixed an issue where editing the product component would return "Not Found".
* Several internal updates for processes surrounding email campaigns and support tooling.
* Adjusted collections so that they show images from multiple product better.
* Adjust the default list of products in components so that it sorts by best selling or last updated.
* Adjusted the Shopify Cart to only initialize once a product is added or an icon is clicked.
* Changed the default component for landing pages from "CTA" to "Product" when Shopify is connected
* Adjusted the installation process so that reinstalling the app goes to the embedded app in Shopify rather than the
  Quickstart.
* Fixed a bug where prices were not being shown in the page editor.
* Fixed a bug where header background color was missing.
* Fixed a bug where AMP pages were sometimes throwing a 500 error.
* Fixed a bug where partner sites would be created with the staging-version of a widget.
* Fixed a bug where blog publish dates would appear in Arabic.
