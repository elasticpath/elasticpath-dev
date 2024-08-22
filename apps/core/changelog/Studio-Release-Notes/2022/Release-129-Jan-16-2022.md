---
title: Studio Release 129 | Jan 16, 2022
date: 2022-01-16
tags:
  - Studio
---

#### Overview

We had a monster release with a number of small, but significant features added to the product and a ton of bug fixes.

#### Banner Features

**Better product collection component**

We just rolled out a new version of the product collection component. Not only does it look amazing compared to the old
version it also allows you to automatically crop collection photos to a Portrait, Landscape, or Square aspect ratio.

 ![Product Collection Component](/assets/studio/product-collection-cropping.gif)

**Hello strike-through!**

A reoccurring feature request, we finally had a chance to add a strikethrough button to the rich text editor. The needs
of eCommerce customers made this a low-effort high-reward feature addition. Now customers can use strike-through to show
price comparisons.

![Strikethrough](/assets/studio/Screen_Shot_2022-01-24_at_9.51.13_PM.png)

**Better organization of templates**

We now have more control over how templates are organized on the choose a template screen. New categories exist for
Products, Collections, Lead Capture, and Other pages.

**New eCommerce templates**

Also new as of last week, we’ve added two additional landing page templates. Our first collection page template and a
template that helps to demo our personalization features.

*Much more to come on this front.*

![Personalized Demo](/assets/studio/Personalization_Demo.png)

![Collection Page Templates](/assets/studio/Summer_Collection.png)

**Better sync for product changes from Shopify**

This won’t be fully realized until future releases, but we shipped the first work that will enable us to sync product
changes on the fly from Shopify. Sync will soon occur whenever a change is made to a product and you won’t need to start
the sync job manually any more.

#### Complete List of Resolved Items

* Added support for strike-through through our rich text editor.
* Added support for syncing product changes more frequently via webhooks.
* Adjusted the account-creation flow so that new landing pages aren't automatically created when a Shopify user signs
  up.
* Fixed a bug where Shopify accounts were missing our HubSpot and Salesforce integrations.
* Fixed an issue where the "Add to Cart" button wasn't working as intended.
* Fixed a bug where choosing a product would sometimes break the app.
* Fixed an issue with the cache that was preventing it from flushing when it needed to.
* Fixed an issue where A/B tests were missing from Shopify accounts.
* Fixed an issue where the featured image of a blog article wouldn't show in the "Large Media with Articles" component.
* Fixed an issue where "pinned" articles were not visible in the app.
* Fixed an issue where field values collected during a form submission wouldn't be saved to a contact.
* Fixed a 500 error when exporting blog posts via XML.
* Fixed a mobile formatting issue that arose when using a transparent header. The issue was that the logo and header
  text would overlap with one another.
* Fixed a spacing issue that occurred on the component-selection screen.
* Fixed an issue with pageviews not being tracked properly on dynamic pages.
* Fixed an issue where checkbox fields weren't displaying their values properly within contact records.
* Pushed a number of other backend (DevOps-specific) fixes as well.
* Pushed several updates to backend jobs and automatic processes for our sales/marketing teams.
