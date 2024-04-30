---
title: Displaying Conditional Content For Specific Geographic Locations
nav_label: Displaying Conditional Content For Specific Geographic Locations
sidebar_position: 90
---

In this guide we'll cover two ways that you can use conditional content to show users of your pages specific sections if
they're from specific locations.

## Method #1 - contact.[data]

 ![Contact Data Condition](/assets/studio/screely-1657319346416.png)

The first way to use conditional content to show content to users from specific locations is by using the *
*contact.[data]** condition. This allows you to conditionally hide or show content to users based off the information
you've collected from them while using
your [Studio Forms](/docs/studio/content/Forms-&-Contacts/Building-Forms).

Some of the standard contact properties that you would use to configure this are the following:

1. contact.address1
2. contact.address2
3. contact.city
4. contact.state
5. contact.zip
6. contact.country

## Method #2 - URL query params...

![Custom URL Condition](/assets/studio/screely-1657579187325.png)

Another way to leverage a user's location to show specific content to that user is to pass their location to the landing
page URL via a custom URL query parameter.

Using the above screenshot as an example - let's say you want to a section to appear for your users if they are from
Boston. Therefore, if the URL of your landing page is **https://www.shop.unstacksupport.com/a/page/bucket-hat** all you
would need to do is append**?location=Boston** to the end of it. With that in place, only users who visit through this
link would see the section using that condition.

In the case the final URL of your landing page would be the following:

```
**https://www.shop.unstacksupport.com/a/page/bucket-hat?location=Boston**
```
