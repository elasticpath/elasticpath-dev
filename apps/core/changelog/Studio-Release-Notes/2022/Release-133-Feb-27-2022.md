---
title: Studio Release 133 | Feb 27, 2022
date: 2022-02-27
tags:
  - Studio
---

#### Overview

A tiny release with a few fixes and tweaks.

#### Banner Features

**Polish on product list items**

We squared up the product and collection thumbnails to better accommodate stores that aren’t using portrait images (
landscape or square).

We also improved the hover effects and made some other subtle style tweaks. This impacts the product selection drawers
and the index pages for products and collections.

![Product List Items](/assets/studio/Screen_Shot_2022-02-24_at_12.45.30_PM.png)

**Dark and light text toggle on boxes**

Boxes now support their own light and dark background settings for text. Previously you could only set this setting on
the section. Now you can do it on individual boxes.

Both sections and individual boxes have this setting. If it’s not set on a specific box, the box will inherit the
setting from the section.

![Darka and Light Text Toggle](/assets/studio/Screen_Shot_2022-02-24_at_12.58.27_PM.png) 

#### Complete List of Resolved Items

* Pushed a several QoL updates for the list of products shown when selecting a product.
* Added dark/light text toggle to boxes.
* Pushed backend changes for how components handle properties.
* Adjusted the spacing of action links when used as the CTA in a section.
* Fixed a bug where a section could not be duplicated.
* Fixed the link "Click Here" uses when saving a template.
* Fixed a bug where the page manager filter for "Live pages with A/B tests" was not working properly.
* Fixed a backend bug having to do with invalid Stripe subscriptions.
