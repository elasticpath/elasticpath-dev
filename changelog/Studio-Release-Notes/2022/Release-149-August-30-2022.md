---
title: Studio Release 149 | August 30, 2022
date: 2022-08-30
tags:
  - Studio
---

#### Overview

A solid release with new expanded component development features, several bug fixes, and an easier way for Shopify users
to log in.

#### Banner Features

**Element Properties**

Expanding on the component property work that we've done over the last few months, this release introduces this
functionality to individual elements within components. At the time of this release none of our components are using
this functionality, but stay tuned in the coming weeks as we add some really neat features to our product & media
components. 👀

**Removing Unneeded Components**

As part of our quest to make Unstack easier for customers to understand and use we deprecated a large number of media
and text components. These components had features that aren’t commonly used and only added clutter when people were
looking for the more commonly used components.

These changes reduce the total count of components to 30. That’s down from 60 in the spring!

Here’s the list of deprecated components:

1. Media / Text + Features
2. Media / Text + Features (Desktop App)
3. Media / Text + Features (Mobile App)
4. Media / Text + Logos
5. Media / Text + Logos (Desktop App)
6. Media / Text + Logos (Mobile App)
7. Media / Text + Quote
8. Media / Text + Quote (Desktop App)
9. Media / Text + Quote (Mobile App)
10. Media / Text + Isometric
11. Media / Text + Isometric (Desktop App)
12. Media / Text + Isometric (Mobile App)
13. Media / Text + Stacked (Mobile App)
14. Media with stacked callouts
15. Text / 2 Column

In the page editor, these components will now have the “Deprecated” badge. They will continue to function as before, but
you will no longer be able to add them to new pages.

**Login with Shopify**

We've added a “Sign in here” button for Shopify merchants! Clicking this button will take our merchants to Shopify where
they can sign in and access Unstack.

![]Signing in(/assets/studio/Screen_Shot_2022-08-26_at_12.46.26_PM.png)

#### Complete List of Resolved Items

#### Element Properties

* **Feature** - Added support for Element properties on boxes.
    + **Feature** - Added support for Element properties on other elements.

Shopify

* **Feature** - Added support for logging in with Shopify.
    + **Bug** - Fixed an issue where deleted products weren't being removed from Unstack.
    + **Bug** - Fixed an issue where accounts with expired trials were missing their products after the trial
      expired.

#### Editor

* **Bug** - Fixed an issue where the article editor was missing the (?) that opens the help panel.
    + **Bug** - Fixed an issue where max-width was showing differently in the editor and rendered page.

#### Smart Links

* **Bug** - Fixed an issue where the smart link field would persist after linking a product.

#### Misc. Changes/Fixes

* **Tweak** - Updated the URL that the "Shopify + Unstack FAQ" link uses in the Quickstart.
    + **Bug** - Fixed an issue where product inventory in Unstack would show negative values.
    + **Bug** - Fixed a display issue with the add to cart modal.
    + **Bug** - Fixed an issue where an unrelated logo was showing on Shopify 404 pages.
    + **Bug** - Fixed an issue where the navigation header was pushed down.
    + **Bug** - Fixed an issue where form settings were inaccessible.
    + **Bug** - Fixed an issue where the header logo wasn't being properly centered on mobile or desktop.
    + **Bug** - Fixed an issue where the add-to-cart button would sometimes appear greyed out despite having
      inventory
