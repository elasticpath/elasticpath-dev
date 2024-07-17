---
title: Studio Release 140 | May 9, 2022
date: 2022-05-09
tags:
  - Studio
---

#### Overview

Release 140 had a little bit of everything with improvements to
our [Klaviyo integration](https://support.unstack.com/hc/en-us/articles/360060834214), margin controls, better CSS
targeting, and app performance topping the list. We also managed to squash a bug where some users were getting multiple
new lead email notifications.

#### Banner Features

**Margin Controls**

We rolled out some changes to the style guide that allow you to adjust margins on headings and text. This should give
users greater control over how their site looks.

**Targeting Sections and Boxes with Custom Code**

We rolled out a number of changes to enable targeting of specific boxes or section with custom code. This will be
particularly helpful for any of our users who want to use custom CSS or custom JavaScript.

**App Performance**

We also rolled out a change in the way that the Unstack app loads our JavaScript packages. This should make it much
snappier when loading in the browser

**Fixed issue with multiple lead notification emails!**

A number of customers were reporting multiple notifications were being sent when forms were filled out. This was a
persistent issue over a couple of weeks so if you're reading this and you see the issue again please let us know!

**Media Upload Limit Changed to 50mb**

A welcome change for video and large images, we’ve changed the upload limits to 50MB from 10MB.

**Klaviyo Integration Improvements**

We've added support for pushing events to Klaviyo for *Viewed Page*, *Viewed Product* and *Added Product to Cart.*

#### Complete List of Resolved Items

* Removed the hover effects on product component media when hovering in the editor.
* Updated the add to cart button on live pages to appear as "disabled" until a variant has been selected.
* Fixed an issue with the collection component that would prevent the toggled header from being edited.
* Fixed an issue where collection components were using a products last image rather than the first image.
* Fixed an issue with the alignment of items in the "Media with Stacked Callout" component.
* Fixed an issue where the standard Media/Text component was missing on some accounts.
* Added support for adding CSS classes to sections and boxes within the editor.
* Added full margin controls for headers to the Style Guide.
* Fixed an issue where header spacing for H6 wasn't able to be defined.
* Added support for Klaviyo events; *Viewed Page*, *Viewed Product*, and *Added Product to Cart*.
* Added support for boolean component properties (*more on this soon!*)
* Fixed an issue where official template pages sometimes had their links persist in the new account.
* Fixed an issue where our support chat would prefill information about the user, but this information was unchangeable.
  Now this information is fully editable.
* Improved app responsiveness by changing the way that several third party modules load.
* Fixed an issue where liquid footers had a form present that shouldn't have been present.
* Fixed an issue where multiple email notifications were being sent out for the same lead.
* Updated language for "Quotes" in the Style Guide, to "Large Quotes"
* Increased the maximum file upload size from 10mb to 50mb.
* Fixed an issue where some users were getting an error that read "a page with that URL exists" despite no page with
  that URL existing.
* Fixed an issue where article previews were rendering hyperlinked text with an extra space.
* Fixed an issue where smart links on images in the article body weren't working properly.
* Fixed an issue where custom pre-built sections were being shown before the standard components in the component
  selector.
