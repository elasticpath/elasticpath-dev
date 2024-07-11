---
title: Studio Release 160 | December 5, 2022
date: 2022-12-05
tags:
  - Studio
---

#### Overview

This was a smaller release. We shipped improvements for sync and mobile size & spacing polish, in addition to fixing a
number of bugs.

#### Banner Features

**De-Sync**

Our team shipped the first of several updates designed to improve our performance with Shopify. Mainly, we’re in the
process of moving towards a sync before publish model where we use Shopify's native APIs for searching and finding
products in the page editor, but we only sync products to our database at the last so that page speeds are as fast as
possible and the information remains up to date.

**Mobile size & spacing polish**

A number of improvements to the mobile size & spacing toolbar were shipped. This is a follow up release on some items
that went out with [Release 154](https://support.unstack.com/hc/en-us/articles/11074862660119).

#### Complete List of Resolved Items

#### Other

* **Tweak** - Shipped a number of improvements to the mobile size & spacing toolbar.
* **Bug** - Fixed an issue with the default padding toggle in the spacing dropdown.
* **Bug** - Fixed an issue where the "Button click in section" goal in A/B tests wasn't working properly.
* **Bug** - Resolved a console error that would appear when opening a forms "submitted by" customer list.
* **Bug** - Resolved an issue that arose when using the callouts add-on

#### Lambda

* **Bug** - Several bugs related to the Lambda service were found and ultimately resolved with this release.

#### Sync

* **Feature** - Moved product search to query Shopify's API directly.
* **Tweak** - Added back-end logging for our Shopify synchronizers
* **Bug** - Fixed a broken sync state for products that have more than 100 images.
