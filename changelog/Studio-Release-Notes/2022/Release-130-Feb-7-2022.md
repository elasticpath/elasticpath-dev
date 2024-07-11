---
title: Studio Release 130 | Feb 7, 2022
date: 2022-02-07
tags:
  - Studio
---

#### Overview

Another monster release for the engineering team packed with features, tweaks, and bug fixes! This work was delayed for
a few weeks while we tested the new JSX syntax for NoML. As a consequence more issues were rolled into this release
because it includes work from the past three weeks.

#### Banner Features

**Showing a variant featured image**

Shopify allows users to associate a single image with each variant. In this release, we added functionality to the
product component that selects the variant image when the appropriate options are selected. This will zip to an image of
the shirt in red when the red color is selected.

**Banner Components**

A reoccurring feature request, we implemented a basic banner component. That might sound kind of silly, but to date, we
didn’t have a good way to build a component that had smaller buttons and padding. It’s now trivial to add a banner to
any page.

 ![Banner](/assets/studio/Screen_Shot_2022-02-16_at_9.55.00_AM.png) 

**JSX-Style Components**

We’ve reworked the syntax of NoML to align with React’s JSX syntax. This is one of the things we needed to push out to
make it easier for us to iterate on components, allows us to render dynamic changes within the section editor, and is a
syntax that is familiar to a lot of developers.

 ![NoML Syntax](/assets/studio/Screen_Shot_2022-02-16_at_9.56.47_AM.png)

**Custom Code with Text Component**

This behaves a lot like the Media component, but instead of an image you can add custom code. This will make it much
easier to add custom embeds (for example a map) with text on the left or right.

![Custom Code with Text Component](/assets/studio/Screen_Shot_2022-02-16_at_9.58.03_AM.png)]

#### Complete List of Resolved Items

* Pushed several polish-updates for Conditional Content.
* Added support for variant-specific featured images. Now when a variant is specified, the images used in the product
  component should pull from that variant.
* New component: "Banner"
* New component: "Custom Code/Text"
* Pushed a change to the timing of account creation from Shopify.
* Updated the language used in Shopify when setting a product as "Available" in Unstack. Previously this said "Manage
  Availability" - now it reads "Available to Unstack Page Builder".
* Removed an upgrade prompt in app that isn't relevant to Shopify users.
* Fixed the appearance of collection thumbnails when a collection had less that four products.
* Removed an option to "Disconnect" Unstack from Shopify from the Unstack Admin.
* Rolled out a series of improvements to improve the appearance of template thumbnails.
* Fixed an issue where price, product options and other product info wouldn't load in the editor.
* Fixed an issue where a backend job would sometimes break the connection between an Unstack account and the
  corresponding Shopify account.
* Fixed a permissions issue some users ran into when creating a landing page from a template.
* Fixed an issue with the product gallery arrows that would sometimes result in the arrows not being vertically aligned.
* Fixed an issue where multiple versions of the same product could be added to a single collection component.
* Fixed an issue where the order of products in a collection component was different when viewing the component in the
  page builder compared to when the same component was viewed on a rendered (live) page.
* Fixed an issue where products deleted in Shopify would still show up in Unstack.
* Exposed a public, read-only API for our global page templates.
* Pushed a number of improvements to our usage of webhooks.
* Pushed an update to allow website and landing page templates to be use interchangeably
* Pushed an update to speed up the component-saving process.
* Fixed an issue with landing pages where there would sometimes be extra padding at the top of the page.
* Fixed an issue where some users weren't able to publish a page.
* Fixed an issue where deleted authors wouldn't have the corresponding author-page also deleted/flushed from the cache.
* Fixed an issue with delivery times of lead notification emails.
* Fixed an issue where a landing page header would sometimes disappear.
* "Contacts" renamed to "Customers" in the app and emails.
