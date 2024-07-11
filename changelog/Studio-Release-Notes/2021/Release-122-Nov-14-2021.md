---
title: Studio Release 122 | Nov 14, 2021
date: 2021-11-14
tags:
  - Studio
---

#### Overview

The banner feature for this release is conditional content for DDC. We built this feature to enable a beta user of ours
to hide and show content for their pages based on content in their data tables. We're also working on conditional
content for all pages to support personalization, but this will come in a future release.

We also fixed a ton of bugs in this release and rolled out better synchronization of properties across internal tools to
make it easier for Marketing and Customer Success to build engage with users.

#### Complete List of Resolved Items

* Released an update to allow our backend to properly handle conditional content with DDC pages.
* Released an update to allow our frontend to properly handle conditional content with DDC pages.
* Adjusted backend to create better user properties in our internal systems. Custom events were also added.
* Improved the Product component with two new layouts: ***Offset*** and ***Collage.***
* Fixed an issue where Checkout would sometimes fail.
* Fixed an issue where "Company Name" in Unstack would be blank for Shopify users.
* Fixed an issue where certain products wouldn't pull into Unstack from Shopify.
* Fixed an issue where the "Add to Cart" button would break a page when using the "Landing Page" header type. Also fixed
  an additional issue with the appearance of the cart on these pages.
* Fixed an issue where a previously-configured custom domain would sometimes disconnect.
* Fixed an issue where the cart would sometimes fails when adding specific products.
* Fixed an issue that would sometimes arise when a user re-adds the Unstack app to their account.
* Fixed an issue where certain items wouldn't sync to collections in Unstack even if they were part of the collection in
  Shopify.
* Fixed an issue where "invalid JSON" was being included on AMP pages.
* Fixed an issue where previous versions of blog posts would sometimes 404.
* Adjusted how the app handles the appearance of accounts without logos.
* Fixed an issue with site integrations where the settings wouldn't be shown after configuring.
* A fix for an internal billing processes was also released.
