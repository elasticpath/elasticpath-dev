---
title: Studio Release 161 | December 19, 2022
date: 2022-12-19
tags:
  - Studio
---

#### Overview

One of our larger releases. Lots of bug fixes and a handful of small tweaks.

#### Banner Features

**Mobile editing is now available!**

Previously access to this tool was limited to a select group of users, but now anyone can use it to quickly preview or
edit pages on mobile. We have more improvements in the works here, most notably the ability to customize images and
settings on mobile, but this first version is a huge step towards making our platform a serious contender for eCommerce.
According to Gartner, mobile accounts for 65% of all traffic on eCommerce sites.

 ![Mobile Editing](/assets/studio/11258761473687.png)

**Custom fonts are now supported natively!**

Previously, uploading a custom font involved our team writing some CSS to apply the custom font to your text elements.
However, now custom fonts that our team has uploaded for you can be used directly in the style guide.

![Customized Font](/assets/studio/11258820027031.png)

**Better "Add Section" button**

The new Add Section button finally made it into this release. The updated design and tooltip will hopefully make it much
easier for first-time users to understand how to add additional sections to pages.

![Add Section Button](/assets/studio/11258823664023.png)

#### Complete List of Resolved Items

#### Shopify

* **Tweak** - Adjusted the account creation process so that Shopify sites no longer have "hidden" articles or site pages
  created for them. This only affected internal reporting so no-one should see any changes on their side.
* **Bug** - Fixed an issue where redirects of proxy pages would lead users to broken pages.
* **Bug** - Fixed an issue where a 500 error would be logged in the console when marking the onboarding popup modal as "
  do not show this again".
* **Tweak** - Moved Product search to Shopify API
* **Tweak** - Moved collection search to Shopify API

#### Page Editor

* **Bug** - Fixed a handful of minor mobile editor bugs
* **Bug** - Fixed an issue where the background image button wasn't doing anything when clicked.
* **Bug** - Fixed an issue where the product title in modals was appearing as huge text.
* **Bug** - Fixed an issue where padding settings would overflow out of the media box toolbar.

#### Style Guide

* **Feature** - Custom fonts now appear in the style guide under a "custom" tab.
* **Tweak** - On landing page headers, the logo now links to the storefront.
* **Tweak** - Solid landing page headers now no longer inherit the background color of the first section on a page.

#### Forms

* **Bug** - Fixed an issue where side-by-side fields would wrap if the form width was less than 400.

#### Other

* **Tweak** - Removed "Payments" tab from global navigation.
