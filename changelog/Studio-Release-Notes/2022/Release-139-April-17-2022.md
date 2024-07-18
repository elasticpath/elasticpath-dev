---
title: Studio Release 139 | April 17, 2022
date: 2022-04-17
tags:
  - Studio
---

#### Overview

In release 139 we've added a number of new style guide settings and editor improvements!

#### Banner Features

**Box Border Styles**

We've made it easy to build round boxes and even add dotted or dashed borders to simulate coupons.

Also, check out that new fancy color picker!

**Additional Headings**

We're added support for additional header styles. H1, H2, H3 are configured by default, but you are now able to add H4,
H5, and H6.

**Toggles for product collections**

We added toggles for Title & Price to the product collection component. We also made it possible to adjust the gap
between products.

#### Complete List of Resolved Items

* Added support for border width, color, dash, and radius on box toolbars.
* Added a tooltip under the page path field so that entering text into that field will now show what the final URL will
  look like.
* Added support for H4, H5, H6.
* Fixed an issue where the color option for Blog H2 wasn't lined up properly in the Style Guide.
* Fixed an issue where some product sizes wouldn't show up as "in stock".
* Fixed an issue where the previous image/next image arrows in the product component would be misaligned vertically on
  first load.
* Fixed an issue where the second image in a product component would sometimes be pushed to the following row if there
  was a long product description or many thumbnails.
* Fixed an error that would appear if were multiple product components were added to the same page.
* Added support for a "Gap" between items in a product collection component.
* Added support for price and title toggles for the product collection component.
* Fixed an issue where products in a collection component would show the prices multiple times.
* Fixed an issue where the number of columns in a collection component couldn't be changed if a product wasn't already
  added to the component.
* Fixed an issue where some 301 redirects weren't properly including the proxy path in the redirect URL.
* Fixed an issue where entering an operator for the first time when defining a condition would take two clicks to
  respond, rather than one.
* Updated the images used in the quickstart section of the Unstack Admin.
* Adjusted the quickstart integration list to no longer include HubSpot or Salesforce if the user is an eCommerce
  merchant.
* Fixed an issue where the bubble behind the number of items in the a users "bag" was showing up as transparent.
* Fixed an issue where primary button would disappear on hover.
* Fixed an issue where solo buttons were sometimes misaligned.
* Fixed an issue where "&" was not rendering properly in the article preview.
* Fixed an issue where sections with long names forced other sections to wrap to the next line in the section editor
  list.
* Fixed an editor-specific form alignment issue.
* Fixed an issue where the footer logo placeholder text would show properly in the editor, but the placeholder image
  would appear in the rendered page.
