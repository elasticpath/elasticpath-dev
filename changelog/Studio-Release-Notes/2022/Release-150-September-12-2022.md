---
title: Studio Release 150 | September 12, 2022
date: 2022-09-12
tags:
  - Studio
---

#### Overview

This release includes several bug fixes, improvements to the help panel, and most excitedly... the option to show/hide
certain sections or elements on mobile! 🎉

#### Banner Features

**Mobile Visibility Options!**

With this release we added the ability to control what devices you want to show sections or elements. You can now use
these controls to show a section on all devices, mobile only, or desktop only.

![Mobile Visibility](/assets/studio/mobile-visibility.png)

**Need help prompt**

As part of the many ways we're trying to help people get set up on Unstack, we've added an in-app prompt in the editor
that asks the user if they'd like to schedule a time with our Success team.

This prompt is shown to all users on pages that haven't been published (after the first day). After dismissal, it will
be shown periodically until the account has sufficient publish activity (10 clicks on the publish button).

![Need Help Prompt Message](/assets/studio/Screen_Shot_2022-09-12_at_1.37.49_PM.png) 

**Help panel polish**

We've updated our help panel with better controls for the video and a smaller layout for smaller viewports.

![Help Panel](/assets/studio/Screen_Shot_2022-09-12_at_1.43.40_PM.png)

#### Complete List of Resolved Items

Shopify

* **Tweak** - Previously, an empty billing info section was visible for Shopify Users in their account settings.
  With this update we removed this section.
    + **Feature** - Added "Need help" prompt to the editor
    + **Tweak** - Improved the help panel to include better video controls & to more-easily display the content of
      the help panel on smaller viewports.
    + **Bug** - Fixed an issue where the rendered version of the media component was missing it's media element when
      liquid header/footer was enabled on the account.

Page Editor

* **Tweak** - Adjusted the logic behind title updates to also update the page path of the page.
    + **Feature** - Added support for showing/hiding sections and boxes on mobile.
    + **Bug** - Fixed a bug where shadows weren't being properly applied to boxes.

Style Guide

* **Tweak** - Improved the diagrams used in the section padding & box padding sections of the style guide.
    + **Bug** - Fixed an issue where the header of the Style Guide was located too far down the page.

Product Component

* **Bug** - Fixed an issue where selecting a variant in a product component would improperly change the picture
  shown in the product component.
    + **Bug** - Fixed an issue where the variant buttons the product component were not appearing properly in the
      editor.

Other fixes

* **Bug** - Fixed an issue where deprecated components couldn't be duplicated if already on a page.
    + **Bug** - Fixed an issue where Firefox users weren't able to click "Manage Pages" in our embedded Shopify app.
    + **Bug** - Fixed an issue with the layout of the background toolbar
    + **Bug** - Fixed an issue where some images weren't rendering properly.
    + **Bug** - Fixed an issue where the code block formatting options
    + **Bug** - Fixed a header spacing issue that was causing the bag/cart icon to be offset.
