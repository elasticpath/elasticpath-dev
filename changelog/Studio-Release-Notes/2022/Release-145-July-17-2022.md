---
title: Studio Release 145 | July 17, 2022
date: 2022-07-17
tags:
  - Studio
---

#### Overview

This was a huge release for us and broke (again!) the record for most number of shipped items in a release (previously
held by [Release 143](https://support.unstack.com/hc/en-us/articles/7071137271575). Highlights include improvements to
Shopify product syncing, updated callouts components, and better handling of bad components in the editor. Also, a ton
of bug fixes.

#### Banner Features

**Better Shopify Sync**

In this release, we’ve added support for Shopify webhooks which should remove the delay between making changes to
products and sync. Webhooks allow Unstack to receive notifications from Shopify when products change and update the
product immediately.

We also introduced an improvement to syncing media on the initial sync so that media will be synced as needed rather
than delaying the initial sync. Importing media takes a lot of time, so doing this as needed should make the initial
sync go faster.

**Updated Callouts component**

Following the changes we made to the media component in a previous release, the callouts component has also been updated
to follow similar conventions.

All in all ***7*** components have been combined into two callouts components: icons and images. The new components
allow you to adjust the number of columns on desktop and have styles for Cards and 3D Cards. Image cropping and icon
size are also adjustable.

**Deprecating older components**

With the recent work on the media and callouts components, we can now deprecate 11 components that are no longer needed.
All of the functionality in these components is available in our new updated components.

Going forward any component that has been deprecated will have a "Deprecated" badge in the editor and they will not show
up as components that you can add to pages. This will ensure that sites continue to operate as expected, while also
ensuring that new users aren’t overwhelmed by too many versions of the same component.

![Deprecated Badge](/assets/studio/Screen_Shot_2022-07-06_at_12.46.53_PM.png)

**Better error handling for bad components**

We've made improvements to the instances where poorly-implemented components crash. Now you'll see error messages for
individual components when they fail to render in the editor and you can now delete them if you want to start over.

The aim here was to make it easier to identify and repair pages where components fail to render. Previously, the entire
editor might crash when issues like these arose.

#### Complete List of Resolved Items

#### **Product Component**

*
    + **Tweak** - Made a change to our backend logic when auto-resizing images.
        + **Bug** - Fixed an issue where product images would sometimes be missing.

#### **Product Collections**

*
    + **Bug** - Fixed an issue where the product collection drawer would load infinitely without returning results.

#### **Editor Improvements**

*
    + **Feature** - Updated the editor so components that have crashed can always be removed within the editor.
        + **Feature** - Updated error messaging when there are issues loading components in the editor.
        + **Feature** - Implemented "Section-level" error boundaries to prevent the entire app from crashing when a
          component in the editor returns an error.
        + **Tweak** - Adjusted the component list to no longer show deprecated components.
        + **Tweak** - Pushed several updates for Smart Links.
        + **Bug** - Fixed an issue where resizing a a browser window while working in the component editor would cause a
          crash in the app.
        + **Bug** - Fixed an issue where item-preview pageview and form endpoint would return an "Item not found" error.
        + **Bug** - Fixed an issue where the image placeholder in the "Box" component would return an error if certain
          layout options were selected.

#### **Style Guide Improvements**

*
    + **Bug** - Fixed an issue where large heading options would wrap to a second line in the text toolbar.
        + **Bug** - Fixed an issue where the margin that headings had in the editor didn't match the rendered version of
          the headings.
        + **Bug** - Fixed an issue where headings had a margin applied to them within the text toolbar.
        + **Bug** - Fixed an issue where hex codes added without "#" wouldn't render correctly.
        + **Bug** - Fixed an issue for a user who was unable to open their Style Guide.
        + **Bug** - Fixed a spelling issue for the word "Vertical" in Style Guide > Forms > Spacing.

#### **Smart Links**

*
    + **Bug** - Fixed an issue where Shopify users were able to find "Home Page" through the smart link toolbar.

#### **Shopify**

*
    + **Feature** - Added support for screenshotting draft pages for use in page thumbnails.
        + Feature - Updated sync job with webhooks to automatically detect changes to products and sync them
          accordingly.
        + Feature - Improved media object syncing for Shopify objects.
        + **Tweak** - Made changes to plan selection screen.
        + **Tweak** - Updated sync job so that it no longer tries to sync inactive stores.
        + **Tweak** - With the changes we've made to our sync jobs, we updated the text of embedded app to no longer
          mention an every 30 minute sync.
        + Bug - Fixed an issue where the arrows for scrolling through landing page templates were not available.

#### **Data Driven Content**

*
    + **Bug** - Fixed an issue where the row options would be pushed out of view if the page slug was too long.

#### **Components**

*
    + **Feature** - Added NoML support for custom properties on boxes.
        + **Feature** - Added NoML support for custom properties on any element.
        + **Feature** - Launched deprecation tooling for retiring older versions of standard components.
        + **Feature** - Released new image callouts component
        + **Feature** - Released new icon callouts component
        + **Feature** - Deprecated old image callouts components
        + **Feature** - Deprecated old icon callouts components
        + **Bug** - Fixed an issue where FAQ components would break if a product component was also on the same page.
        + **Bug** - Fixed an issue where the "Media/Text + Callouts" alignment wasn't working.
        + **Bug** - Fixed an issue where some media boxes were missing their toolbar.
        + **Bug** - Fixed an issue with embedded Vimeo videos.
        + **Bug** - Fixed an issue where background images would appear differently in the editor than they did on the
          rendered page.
        + **Bug** - Fixed an issue with the "Pricing/Table" component when used on a dark background
        + **Bug** - Fixed an issue with the margin of the "Quotes" component.
        + **Bug** - Fixed an issue with missing padding on the "Media/Text 8:4" component.
        + **Bug** - Fixed a missing icon issue when the "Media/Text + Quote" section was loaded on a mobile device.

#### **Customers/Contacts**

*
    + **Bug** - Fixed an issue with the customer list where creation dates were being ordered incorrectly.

#### **Other**

*
    + **Bug** - Fixed an issue where Shopify 404 pages would show a random brands logo.
        + **Bug** - Fixed an issue where DNS settings would not display properly.
        + **Bug** - Fixed an issue where cloning a page would result in a 500 error.
