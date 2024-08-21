---
title: Studio Release 137 | April 4, 2022
date: 2022-04-04
tags:
  - Studio
---

#### Overview

This was our biggest release in several weeks with many things being shipped for the start of Q2!

#### Banner Features

**Improved Embedded app Start Screen**

Previously, when a user first adds the Unstack App to their Shopify account they were taken a very minimalistic channel
settings page that, at it's core, served as a way for users to open Unstack.

That said, we realized this page could be much more which led to the below changes; specifically the ability to access
both your page templates and branding options from this page.

Our hope is here that these changes should help our users make more progress on their goals, with fewer clicks.

**Product research pop up**

As part of our ongoing efforts to understand the reasons our users sign up for Unstack in the first place, we have added
a popup question that appears when you first install the Shopify app

![Pop-up Question](/assets/studio/Screen_Shot_2022-04-05_at_12.19.02_PM.png)

**Capitalization and letter-spacing**

If you're a user who likes the text of their headers or buttons to always be capitalized, lowercase, or mixed case you
are in luck! With this release we shipped changes to the Style Guide which allows you to make those changes at the
account level.

**Product Collection Component Changes**

Using component properties, we added several layout options to the "Product Collection" component. Specifically the
ability

**DDC Import & Export**

Data Driven Content, or DDC is a beta feature that we're very proud of. However, as a beta feature there is a lot of
work that still needs to get done. The release of the import & export feature is one of those things that has been in
the works for some time and is a huge milestone for this tool.

*Look for more on DDC soon!*

#### Complete List of Resolved Items

* Pushed a number of improvements to the start screen of the embedded app.
* Added text transform options to typography options in Style Guide.
* Added letter spacing options to typography options in Style Guide.
* Fixed a bug where certain thumbnails would extend below the boundary of the product component.
* Fixed a bug where the Product component in the editor would return "null:" if there product has no variant options.
* Fixed a bug where media in the product component was clickable.
* Added *number of columns* option to Product Collection component.
* Added *vertical align* option to box settings.
* Added DDC Import/Export tooling.
* Fixed a bug with the FAQ component where it wouldn't expand properly.
* Fixed an alignment issue in the Quotes/Reviews component.
* Fixed a bug with the Quotes/Reviews component when used in a carousel.
