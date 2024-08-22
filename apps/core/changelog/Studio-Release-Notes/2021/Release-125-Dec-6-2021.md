---
title: Studio Release 125 | Dec 6, 2021
date: 2021-12-06
tags:
  - Studio
---

#### Overview

We fixed a ton of bugs in this release, improved our Typekit integration, and added additional onboarding features that
should make things easier for users to get started.

#### Banner Features

**Typekit**

It's now super easy to use Typekit with Unstack. Simply add the integration from the Integrations page with your Kit ID
and add the fonts you need from a new tab in the fonts menu.

Previously, users had to use custom CSS to utilize Typekit with Unstack. Now they can adjust all of these settings from
within Unstack.

We're also detecting the kit ID from their company website or Shopify store and auto-enabling the integration during
onboarding.

![Typekit](/assets/studio/Screen_Shot_2021-11-30_at_4.00.27_PM.png)

**Better onboarding**

We've improved two aspects of in-app onboarding in this release:

1. We're now automatically importing logos and styles from Shopify storefronts as part of the "add app" flow.
2. We've also changed the "New page" flow so that it always presents templates to users. The template screenshots are
   now taller making it easier to see what you are selecting.

   ![Template Selection](/assets/studio/Choose_template.png)

#### Complete List of Resolved Items

* Improvements to our Typekit integration.
* Adjusted oAuth to Shopify process to use the Shopify store domain to scrape style data and pull it into Unstack.
  Additional scraping support for:
    + Typekit Integration ID
    + Logo used in Shopify
    + Additional Homepage Media Assets
* Adjusted "Choose Template" screen to make it taller and easier to see what you're selecting.
* Adjusted "New Page" flow to combine the "Templates" and "New Page" buttons.
* Pushed changes to internal tooling for Support and Marketing team.
* Added a new category to the media manager for "Products".
* Pushed an additional fix for incorrect values being shown as the total number of form submissions.
* Fixed an issue where the Google Search Console integration couldn't be configured.
* Fixed an issue with the filter "Deleted Pages" being absent from landing page manager.
* Adjusted the order that products in collections are rendered. Previously this was random, but now it should mirror the
  MANUAL sort order in Shopify.
* Fixed an issue with landing page header appearance in the editor vs. the live page.
* Fixed an issue that arose when deleting an account.
* Fixed a media-display issue when a site is viewed using Microsoft Edge.
