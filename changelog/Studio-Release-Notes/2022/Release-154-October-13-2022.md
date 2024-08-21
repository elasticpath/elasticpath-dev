---
title: Studio Release 154 | October 13, 2022
date: 2022-10-13
tags:
  - Studio
---

#### Overview

Our last couple releases were smaller than normal and this release is why. 154 was a huge release with 2 new features, 4
major improvements and a handful of bugs and tweaks.

#### Banner Features

**Mobile Padding**

This feature allows users to customize their section padding, box padding, and max width on mobile.

![Mobile Padding](/assets/studio/11075083034775.png)

**Popover forms with Smart Links**

A first step towards 1st party pop-up support; you can now link directly to forms via our smart-linking system. This
allows users to create popup forms that appear when a button is clicked.

![Popover forms with Smart Links](/assets/studio/11075222781591.png)

**Improved Gallery Component**

With this release we also shipped a new version of our "Gallery" component that include several improvements to both the
mobile and desktop experience.

![Gallery Component](/assets/studio/11075268663703.png)

**Improved Product Collection Component**

Following the changes we made to the gallery component, we realized that many of those updates could easily be pulled
into our product collection component. Therefore we did just that. Now you're able to give a border radius to images and
adjust the mobile experience.

![Improved Product Collection Component](/assets/studio/11075385201047.png)

**Add-ons for product and media components**

We also shipped improvements for both our Product and Media components. These improvements allow you to add banners or
FAQs right to the "Text" areas of both components.

#### Complete List of Resolved Items

**Mobile Editing & Preview**

* **Feature** - Added size & spacing tab to house mobile settings

**Component Updates**

* **Feature** - Add-on support for the Product component which allows for FAQs or Callouts to be added to the text area
  of the section.
* **Feature** - Add-on support for the Media component which allows for FAQs or Callouts to be added to the text area of
  the section.
* **Feature** - Added border radius and mobile slider options to the Product Collection component
* **Feature** - Added smart link support for Unstack forms
* **Feature** - Overhauled the gallery component with tons of new features

**Bugs & Tweaks**

* **Tweak** - Made adjustments to collection queries to speed up load time.
* **Tweak** - Updated product component to use dynamic image sizing.
* **Bug** - Fixed issue with collapsing RichText on Firefox
* **Bug** - Fixed issue where the image in a media component wasn't loading properly
* **Bug** - Fixed an issue where starting to create a blog category, but then leaving before finishing, would crash the
  app
* **Bug** - Fixed an issue where the first section of a landing page (when viewed on mobile) was getting extra padding)
* **Bug** - Fixed an issue where default device visibility was using the wrong icon.
* **Bug** - Fixed an issue where new pages weren't showing up first in the "new pages" list
* **Bug** - Fixed an issue where parent boxes with properties collided with the properties of child boxes.
