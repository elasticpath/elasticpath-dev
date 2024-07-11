---
title: Studio Release 131 | Feb 16, 2022
date: 2022-02-16
tags:
  - Studio
---

#### Overview

Another large release shipping a few key features and a ton of small fixes.

#### Banner Features

**Shopify Free Plan**

We’re now putting all new Shopify accounts on a free plan. This is a temporary change until we introduce multiple
Shopify plans in Q2 of 2022.

**Collapsing Product Descriptions**

Stores often pack product descriptions with content that’s valuable for SEO. When rendered inside of our product
component that text spills down the page creating an odd unbalanced view.

In this release, we rolled out a change that hides the text behind a “Read more” link if it is longer than 5 lines.

![Read More LInk](/assets/studio/read-more.gif)

**Resize-only for media**

We’ve had a number of issues with image optimization being too aggressive so we’ve changed the default when adding media
to Resize only.

![Media Resizing](/assets/studio/Screen_Shot_2022-02-24_at_11.02.11_AM.png)

**Deleting users & accounts**

We added functionality for our internal teams to be able to permanently delete users and accounts from our database. In
the past we haven't had a good way of handling this and previous requests took longer to resolve than we'd like.

**JSX Rendering Backend**

We shipped the next phase of the prep work needed to support Component Properties. When we rolled out refactor NoML to
be more like JSX we added a translation layer to translate from the new syntax into the old. This allowed us to use to
avoid rewriting the rendering layer. In this release we rewrote the rendering layer so it’s no longer using the old
syntax.

#### Complete List of Resolved Items

* Launched the free plan for Shopify.
* Fixed an issue where templates with product collection components (but no product components) were asking for a
  product.
* Fixed an issue where customers synced from Shopify has their locations malformed during the sync.
* Rolled out an improvement for collapsing product descriptions when they are more than five lines long.
* Fixed an issue where the "Add to Bag" button was missing from the editor.
* Fixed another issue where the order of products in a collection component was different when viewing the component in
  the page builder compared to when the same component was viewed on a rendered (live) page.
* Pushed improvements to our JSX rending backend.
* Changed the default image optimization setting to "Resize Only".
* Fixed an issue where some page settings would be auto-populated if using a page template.
* Fixed an issue with landing page headers inheriting the wrong styles when rendering over a dark background.
* Removed DDC option from nav menu on Free, Lite, Full, and Full+ plans.
* Fixed an issue with DDC pages where they used the slug placeholder of "%" as value of both the canonical and OG:URL,
  URLs.
* Removed contact.type & contact.persona from conditional content UI as neither are used.
* Created a tool for our Support team to be able to delete users & accounts from the database.
* Fixed an issue with the Pricing/Features section being cutoff when too many cards are added.
* Fixed a bug that occurred when a date was removed from the settings of a blog article.
* Fixed an issue where users weren't able to save a page when missing a required field.
* Fixed an issue with an image in the "new lead" email notifications.
