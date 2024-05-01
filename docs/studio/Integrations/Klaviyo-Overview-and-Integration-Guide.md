---
title: Integrating Klaviyo
nav_label: Klaviyo
sidebar_position: 201
---

## Overview

With [Studio's Klaviyo integration](https://connect.klaviyo.com/integrations/unstack), you're able to pass customer
data collected from your Studio forms directly to your Klaviyo lists or even embed a Klaviyo form in line on your
Studio pages.

    <iframe width="560" height="315" src="https://www.youtube.com/embed/SJTdDYbiPkM" title="Integrating Klaviyo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Connecting your Klaviyo Account

1. First, you'll need to open ***Settings*** and then ***Integrations***. From here, click the (+) next to *Klaviyo*

   ![Integrating Klaviyo](/assets/studio/screely-1651596977050__1_.png)

2. Upon clicking on the **(+)** symbol next to that integration, a drawer will slide in an ask for two things: a
   ***Public Key / Site ID*** and a ***Private API Key***.

   ![Klaviyo Public and Private Keys](/assets/studio/screely-1651597057240__1_.png)

3. To find both of these values you'll need to log into Klaviyo, visit your Account settings, and navigate to the *API
   Keys*section. You'll likely already have a ***Public API Key*** created, but you may need to create a
   ***Private API Key***. This can be done via the blue button on the right hand side of this page.

   ![Klaviyo Private API Key](/assets/studio/screely-1651596899486__1_.png)

4. Once you have both keys, drop them into their corresponding fields in Studio and hit ***Connect Account***
5. Klaviyo should now be connected to your Studio account!

**Adding Studio Form Submissions to Klaviyo Lists**

## Studio Support for Klaviyo Segments

We do not directly
support [Klaviyo Segments](https://help.klaviyo.com/hc/en-us/articles/115005237908-Guide-to-Creating-Segments). However,
you can enroll a contact into a segment based on their list enrollment status.

Once Klaviyo is connected to your Studio account you're able pass the data collected through your Studio forms,
directly to specific lists in Klaviyo. This is done by opening the form settings in Studio, and defining a list from
the drop down under Klaviyo.

![Settings](/assets/studio/screely-1651597429041.png)

Now, whenever this form is submitted, the collected information will be passed to the selected Klaviyo list.

## Not seeing this option?

It's likely that your form is missing an "Email" field. If this is the case, the "Add to Klaviyo List" option will not
appear properly.

**Embedding a Klaviyo form in your page**

## Compatibility Warning!

Double check that the Klaviyo form that you're trying to embed is an "Embed" form. Embedding a Popover or Flyout form
will work, but will have visual issues.

With our Klaviyo integration, you're also able to embed your Klaviyo forms directly into your pages. This can be done by
following the below steps:

1. Open the editor of the page you'd like to add the Klaviyo form to and add a form as you normally would.

   ![Add Form](/assets/studio/screely-1651597552568.png)

2. When the slide-in menu appears, select ***Klaviyo*** from the "*Form Type*" drop-down. This will prompt you to also
   add a ***Klaviyo Form ID.***

   ![Add Klaviyo Form](/assets/studio/screely-1651597611809.png)

3. To find your ***Klaviyo Form ID*** you'll need to open your form in Klaviyo and find it's ID. The ID can be found in
   a couple places, but one of the easier places to find it is the URL of the form editor. In the below screenshot the ID
   is **UARhGc**.

   *This ID will never include a ?, #, or /*

   ![Klaviyo ID in URL](/assets/studio/screely-1651597937621.png)

4. Paste this ID into the ***Klaviyo Form ID*** field and save! Your form should now be embedded on your Studio page.

   ![Paste Klaviyo Form ID](/assets/studio/screely-1651598006627.png)

## Why don't I see my form in the editor?

Our editor doesn't currently display your Klaviyo form. Open the Preview or the Live version of the page to see your
form in action.

## What data/events do we send to Klaviyo?

### Studio Contact Info -> Klaviyo

Regardless of what information is being collected by your form, only the contact's *first name*, *last name*, *email*,
*phone number*, *company name, city, state, and country* are sent to Klaviyo.

If a user submits a form more than once and their info changes (for example a new address or phone number), the
properties in Klaviyo will be updated.

### Support for Custom Fields

It's not currently possible to push custom field data into Klaviyo using an Studio form. If this is something that's
important to you, we recommend embedding a Klaviyo form in your page instead.

### Studio Events -> Klaviyo

By default, Studio automatically pushes a number of important events to Klaviyo based on user behavior. There is no
configuration or code required. Simply add your public and private API keys. Please note that server side events like
“order placed” will come from your Shopify API integration with Klaviyo.

1. Active on site
2. Viewed product
3. Added to cart
4. Started checkout
5. Order created
6. Account created
7. Form submitted

## Troubleshooting

**I know users have submitted my Studio form, but I'm not seeing them on my Klaviyo list. What gives?**

It's very likely that your list is set to **double opt-in**. This will prevent users from being added to your lists
until they confirm via email that they'd like to be added to that
list. [Here's a link to Klaviyo's documentation on this if you'd like to learn more](https://help.klaviyo.com/hc/en-us/articles/115005251108-Guide-to-the-Double-Opt-In-Process).

**Data not making it's way back to Klaviyo?**

Make sure that you have *profile\_id* added to *Account > Settings > UTM Tracking* in Klaviyo.

 ![UTM Tracking](/assets/studio/screely-1653590953111.png)




