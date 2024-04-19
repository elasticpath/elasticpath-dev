---
title: Managing URLs of Shopify Landing Pages
nav_label: Managing the URLs of Shopify Landing Pages
sidebar_position: 60
---

If you are a Shopify user, you may have noticed that the pages you create through Studio follow a similar structure to
the below example:

*[your-store-url.com]**/a/page/**[page-path]*

This is because Studio uses Shopify's proxy feature to create the page on the domain you've already-configured for your
Shopify store. Doing so reduces the time needed to get pages live since this prevents you from needing to configure DNS
records.

## How to change your proxy path

To change your proxy path, you first need to navigate to the settings of the Studio App *within Shopify*. This is done
by clicking ***Studio*** from the "Sales Channel" section of your navigation bar, and then select ***Manage App*** from
that screen.

From there, scroll to the "App proxy" section and click the "Customize URL" button. You'll need to make two changes
here:

1. For our app to use Shopify's proxy feature, a selection needs to be made from a number of pre-approved "paths" that
   Shopify makes available. The first field (the drop-down) shown when customizing your proxy URL contains four
   pre-approved "paths". *You must choose from one of the following:* **/apps/**,**/a/**, **/community/**, *or* *
   */tools/**
2. The second field shown when customizing your URL is a free-text field that can have any definition.

   By default, we
   put "page" here, but you can customize it with whatever you'd like.

   ![Unstack Page Builder](/assets/studio/bc2a70c9-cdd0-4aa6-832a-402f42042567.png)
   ![Application Proxy URL](/assets/studio/2a26b4a2-b41e-4bd9-a264-24278441d1ae.png)

3. Lastly, you'll need to take is to visit one of your Studio pages on your new URL. This tells our system that the
   proxy-path has been updated and makes the change in your Studio.

Without doing this, Studio won't recognize the proxy-path change which may cause page accessibility issues.

**Will changing the proxy path break my page URLs?**

No. When the new proxy path is set, that change is automatically sent to Studio and we will update the path settings on
our end to make sure the pages work.

**Why /a/page/?**

For our app to use Shopify's proxy feature, a selection needs to be made from a number of pre-approved "paths" that
Shopify makes available. Therefore, we chose the page as the default.




