---
title: Studio Release 143 | June 23, 2022
date: 2022-06-23
tags:
  - Studio
---

#### Overview

Release 143, was one of (***if not the***) biggest releases we've ever done. With this release a number of banner
features went out as well as more than two-dozen bug fixes.

#### Banner Features

**Better Media Component**

With this release, we pushed out a new version of our Media/Text component that allows for much more control over its
appearance and behavior.

**Spacing/Width Defaults (Desktop & Mobile)**

We’re on a quest to enable sites of any width. In this release, we’ve introduced settings in the style guide that allow
you to adjust the default width of sections. As a bonus, we’ve also introduced the ability to configure default padding
on desktop **and** mobile.

**Box Shadows**

With this release you're now able to add shadows to any box.

**Sticky Buy Button**

When a page with a product component on it is viewed on mobile, an "Add to Cart" button will now follow the user as they
scroll down the page.

![Add to Buy Button](/assets/studio/mobile__3_.gif)

**Triple Whale Integration**

For all our Triple Whale users out there, we've update our
official [integration](https://support.unstack.com/hc/en-us/articles/6601516565655-Integrating-Triple-Whale) to include
support for add-to-cart event tracking!

**PostScript Integration**

We've also launched an official PostScript integration!

**Product Collection Drag & Drop**

With Release 143, products in a collection are now drag-and-droppable! The hope here is to make it easier to rearrange
items displayed in a collection.

![Drag and Drop Product Collections](/assets/studio/reorder.gif)

**Recently****Used Components**

Another change that everyone will love; there's now a component category for ***Recently Used*** that shows the last ten
components you've used.

**Immediate sync of 5 most recent products**

We changed the way that our sync job works so that as soon as you connect Unstack to your Shopify store for the first
time, the five most-recently-updated products will be synced from your account. The aim here is to help more people
start building more quickly and to make it a more seamless experience the first time someone loads their Unstack
account.

#### Complete List of Resolved Items

#### Better product component

* **Feature** - Sticky buy button for mobile
* **Bug** - Fixed an issue where product component images weren't loading properly on liquid header/footer sites.
* **Bug** - Fixed an issue with gallery interactions when full-screened.
* **Bug** - Fixed an issue where selecting one variant option would *activate* the add-to-cart button.

#### Better product collection components

* **Feature** - When a header is added to the product collection component, the actions are now located to the right.
* **Feature** - Drag and drop now supported for editing product order in collections
* **Bug** - Fixed an issue where price wouldn't show up properly in the editor for products added to a collection
  component.
* **Bug** - Fixed an issue where hitting "enter" when searching for products in the collection component would reload
  the page.
* **Bug** - Fixed an issue where the header of a product collection component wasn't editable.

#### Product & Collection Smart Links

* **Tweak** - Removed backwards compatibility for link behavior key
* **Bug** - Fixed an issue where multiple toolbars would appear when hovering over text in the box component.
* **Bug** - Fixed an issue where header and footer smartlinks to products wouldn't properly open if set to popup.
* **Bug** - Fixed an issue where marking a product as a "draft" in Shopify would break any smart-linked buttons in the
  editor.

#### Editor Improvements

* **Feature** - Added support for shadow settings on the box toolbar
* **Feature** - Added "Recently Used" component category as the default for component selection.
* **Tweak** - Made a change to the clickable area for toolbar dropdowns to make it easier to interact with the options.
* **Tweak** - Made a change to the paint can icon so that it now properly indicates when an option is selected.

#### Style Guide Improvements

* **Feature** - Added Style Guide support for width and padding defaults on both desktop & mobile.
* **Tweak** - Made several improvements to the initial styles scrape that takes place when you first connect Unstack to
  Shopify.
* **Bug** - Fixed an issue where adding a new heading wouldn't inherit the configuration of the most recently configured
  heading.
* **Bug** - Fixed an issue where the text "Light Background Color" was being cut off in the Style Guide.
* **Bug** - Fixed and issue where the styles-scrape job would sometimes fail to grab a Brand Primary

#### Components

* **Feature** - Added new version of the media/text component.
* **Bug** - Fixed a bug where certain components were returning "Unable to load component" errors.
* **Bug** - Fixed a bug where errors would appear when a Vimeo video was embedded on a page.
* **Bug** - Fixed an issue where rich text would run outside of "Box/Variable" component.
* **Bug** - Fixed an issue where the hover effect of a button would appear incorrectly on dark-themed components.

#### Shopify Syncing

* **Tweak** - Adjusted our initial product sync to first sync the five most recent products before continuing the job.
* **Bug** - Fixed an issue where some products would pull in multiple versions of the same variant.
* **Bug** - Fixed an issue where the initial sync would very rarely get stuck and would prevent future sync jobs from
  working properly.

#### Integrations

* **Feature** - Added a PostScript integration.
* **Tweak** - Adjusted our Triple Whale integration so that it fires add-to-cart events.

#### Templates

* **Bug** - Fixed an issue where some template thumbnails were not correctly generating due to animations on the pages.

#### Storefront

* **Bug** - Fixed an issue where certain storefront collection templates were returning 500 errors.

#### Media

* **Bug** - Fixed issue with system error messaging when trying to upload a file that is unsupported.
* **Bug** - Fixed an issue where media height wasn't matching html ```<img>``` height attribute.

#### Other

* **Bug** - Fixed a bug where the Unstack admin sometimes showed a card background behind the app pagination options.
* **Bug** - Fixed a bug where changes to the article sidebar wouldn't always be reflected.
* **Bug** - Fixed a bug where the editor would load indefinitely for a user if they came directly from the Style Guide.
* **Bug** - Fixed a bug where the adding a custom integration would offset the (+) button to add additional
  integrations.
* **Bug** - Fixed a bug where embedded forms would hover over header logo and text on mobile pages.
