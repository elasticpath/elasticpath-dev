---
title: Studio Release 123 | Nov 22, 2021
date: 2021-11-22
tags:
  - Studio
---

#### Overview

Lots of small fixes in this release and other useful changes.

#### Banner Features

**New Admin Navigation**

You'll notice that a snazzy new UX complete with animations. Content has also been slightly reorganized according to new
information architecture.

![New Navigation Structure](/assets/studio/navigation.gif)

**Tracking form landing page to checkout**
This is a critical part of our ability to deliver in-depth metrics to merchants and is our first step towards rolling
out detailed sales metrics and more at a later date.

#### Complete List of Resolved Items

* Adjusted the "Reviews" component to support a two-column layout. This allows more revies to be shown in a side-by-side
  manner.
* Fixed an issue that the form "Submitted by" column was having where it showed the wrong count.
* Made adjustments to "empty" product component in the editor.
* New admin navigation and organization.
* Added two-column layout for "Reviews" component.
* Adjusted the appearance of the cart icon when used with dark backgrounds.
* Removed the "Invite Collaborators" onboarding step from Quickstart when the user is from Shopify.
* Adjusted the way the frontend handles a product-less and template-less Unstack account.
* Fixed a permissions issue when reinstalling the app.
* Fixed an issue where a certain product wasn't pulling into Unstack properly.
* Adjusted the header notification that will sometimes appear so that it doesn't cover the "Save Row" prompt in DDC.
* Fixed an issue that was caused when multiple foreign-key columns were used in a single table.
* Fixed an issue where SVG images weren't rendering in DDC tables.
* Adjusted a background job to reduce the total number of API calls that are made.
* Rolled out improvements to integration encryption.
* Fixed several minor styling issues with the navigation menu.
* Fixed an issue with broken media in pre-builts when adding them to other pages.
* Fixed an issue where RSS feeds weren't generating properly if the feed used non-English characters.
* Updated the URLs of our Terms of Use and Privacy Policy when gating content.
