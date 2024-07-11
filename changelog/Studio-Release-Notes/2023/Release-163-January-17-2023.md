---
title: Studio Release 163 | January 17, 2023
date: 2023-01-17
tags:
  - Studio
---

#### Overview

A small release of mostly bug fixes.

#### Banner Features

**Mobile editing updates**

Two updates here! The first, when you hide a section on a specific viewport it will no longer show on that viewport.
Secondly, we removed the desktop/mobile toggle from **Size & spacing**. To edit mobile padding or desktop padding,
you'll
now need to use the device toggle in the top of the editor.

*Below is what this option used to look like. You'll no longer find this option in any toolbar.*

![Previous Editing Options](/assets/studio/11568092306839.png)

**Stripe integration deprecation**

With [Release 162](https://support.unstack.com/hc/en-us/articles/11409394257303) we removed subscription-based content
gating, and with this deprecation of our Stripe integrations is complete. You'll no longer find the Stripe integration
in **Settings > Integrations**.

#### Complete List of Resolved Items

#### Mobile Editing & Preview

* **Tweak** - Adjusted device-specific sections so they aren't visible in viewports other than the one that is defined.
* **Tweak** - Remove device selector from "Size & spacing" setting
* **Bug** - Fixed an issue where child header links would be cut off on mobile if there were a lot of them.
* **Bug** - Fixed an issue where scrollbars would appear in places where they weren't supposed to.
* **Bug** - Fixed an issue where there would sometimes be overlapping scrollbars in the editor.
* **Bug** - Addressed an edge case where the toolbar of the first section could be inaccessible to users if their
  landing page had no header.

#### Product Collections

* **Bug** - Fixed an issue where "Add to Cart" text wrapped to two lines

#### Better Lighthouse Scores

* **Bug** - Fixed an issue where the font "Inter" was being loaded into all sites.

#### Integrations

* **Tweak** - Removed Stripe integration from all accounts

#### Misc. Bugs

* **Bug** - Fixed a slight alignment issue for left-aligned actions.
* **Bug** - Fixed an article content alignment issue. Article contents are once-again centered on the page.
* **Bug** - Fixed an issue with button text hover state on rendered pages.
