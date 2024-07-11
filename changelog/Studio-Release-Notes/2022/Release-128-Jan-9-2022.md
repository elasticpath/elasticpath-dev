---
title: Studio Release 128 | Jan 9, 2022
date: 2022-01-09
tags:
  - Studio
---

#### Overview

Launch of Conditional Content! We updated the new page flow to better support product pages. We also shipped a ton of
bug fixes in this release and disabled Semrush.

#### Banner Features

**Conditional Content for Personalization**

Rounding out Conditional Content we’ve extended the functionality to support contact properties and behavior (in
addition to the previous work for DDC).

This work makes it possible to support a bunch of additional use cases that are especially important to eCommerce
customers who want to build personalized content for users. For instance, it’s now possible to show different content on
a page for repeat visitors.

 ![Conditional Content](/assets/studio/Two_conditions.png)

**Updates to product selection flow**

We’ve streamlined the process of adding a product to a page template by building it into the landing page flow.
Previously, you would be dumped straight into the editor after selecting a product page template. Now you’ll be asked to
select a product. As we continue to invest in improving our onboarding experience for Shopify customers you’ll see us
ship more features like this.

![Product Selection](/assets/studio/Choose_product.png)

**So long, Semrush!**

Our Semrush integration stopped working recently. As we were evaluating the work required to get it working again we
decided to disable the integration for now because it is not used that much in the eCommerce space.

We may re-enable this in the future if there is the right kind of demand, but for now, *so long, Semrush.*

#### Complete List of Resolved Items

* Pushed the final frontend changes for conditional content.
* Adjusted the behavior of the app when adding a product to a landing page.
* Removed Semrush reports from the app and navigation.
* Fixed an issue where the URLs of pages generated through DDC were not included in the sitemap.
* Pushed a fix for an issue where our MailChimp integration was not connecting properly.
* Fixed an issue where "New Lead" email notifications were not being sent out in a timely manner.
* Fixed an issue where some contacts from Shopify would crash the app.
* Fixed an issue where accounts on our "Enterprise" plan were showing as being on our "Free" plan.
* Fixed an issue where users could manually pick images for the product component. This was unintended as the chosen
  image could not be saved.
* Pushed a QoL update for "Contacts" in Unstack loading very slowly.
* Fixed an issue where users were not able to add logos to the "App/Media with Logos" component.
* Fixed an issue where videos in the "3D Image Callouts" component would appear malformed in the editor and weren't able
  to be manually played.
