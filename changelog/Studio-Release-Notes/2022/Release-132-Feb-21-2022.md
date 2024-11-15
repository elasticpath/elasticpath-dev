---
title: Studio Release 132 | Feb 21, 2022
date: 2022-02-21
tags:
  - Studio
---

#### Overview

A smaller release, but we shipped a few features and tweaks in addition to a number of bug fixes. Tons of work on some
new features and editor improvements that will both land in a future release.

#### Banner Features

**Intro video for the page editor**

As part of our work to improve the onboarding experience, a popup intro video for the editor will appear the first five
times you enter the editor. You can also dismiss the tip permanently if you choose to.

![Introductory Video](/assets/studio/Screen_Shot_2022-02-24_at_11.10.37_AM.png)

**Product images for all media**

There’s a new folder in the media manager for Products where images that are imported from Shopify products will appear.
This will make it easier to use product images in any Studio component.

![Product Images](/assets/studio/Screen_Shot_2022-02-24_at_11.02.56_AM.png) 

**Domain settings for Shopify**

We cleaned up the domain settings for Shopify customers using the App Proxy functionality to load CX-Studio pages on
their
Shopify domain. When you’re using App Proxy it now shows “Point to Shopify” and you aren’t able to change it (*we will
probably enable people to change this in the future*).

![domain.png](/assets/studio/domain.png)

**Form Width**

In this release, we rolled out changes so that you can set a custom width for a form. All forms will use the style guide
setting by default, but you can now set a custom width:

1. In the admin portal, under **Forms**, open the form you want to change
2. Click on the **Settings** tab
3. Under **Max Width**, select **Custom...**
4. Enter a number and save!

   ![Form Width](/assets/studio/form-width.gif)

**Text-align Right**

You can now align text to the right! This is something we probably should have done a long time ago, but we’re only now
getting to it along with a number of other editor improvements.

![Rigt-alignment of Text](/assets/studio/Screen_Shot_2022-02-24_at_11.59.05_AM.png)

#### Complete List of Resolved Items

* Added intro video for the editor.
* Added deep-links. Among other things, this allows us to provide one URL that all users can use to access a specific
  part of their account. For example, <https://app.CX-Studio.com/goto/landing-pages> will now take you to the landing
  pages section in *your* account.
* Adjusted media policy to allow product images to be used any place where media can be used.
* Updated the Studio UI to account for Shopify plans which use the proxy by default.
* Fixed a mobile-specific issue where text would overlap in the product component.
* Pushed a change to allow users to be able to set a max-width for their forms.
* Added support for text-align *right.*
* Fixed an issue with our HubSpot integration which prevented users from being able to add their HubSpot forms to a
  page.
* Fixed an issue where white backgrounds were mixing button styles when a dark background was used.
