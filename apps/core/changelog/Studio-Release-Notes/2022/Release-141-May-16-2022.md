---
title: Studio Release 141 | May 16, 2022
date: 2022-05-16
tags:
  - Studio
---

#### Overview

With this release we shipped Smartlinks for products and a number of improvements to our Klaviyo integration.

#### Banner Features

**Smartlinks for Products**

With this feature release it's now possible to turn any link or button into an "Add to Cart" button.

Simply enter the name of the product and select it in the auto-complete menu for the link. Then choose “Add to cart”
from the action dropdown.

**Identifying Klaviyo Users**

With this release we rolled out a series of changes that unify Klaviyo's user IDs with CX-Studio's user IDs. This makes
it
possible to build conditional content based on Klaviyo data which drastically expands our personalization capabilities.

#### Complete List of Resolved Items

* Updated the intro video used in the page editor.
* Resolved an issue where template options weren't sorting properly.
* Resolved an issue where non-ecommerce prebuilt sections were showing in ecommerce accounts.
* Fixed an issue where the images in "Logos" components were broken when using liquid header/footer
* Added NoML support for *defaultBorderWidth*, *defaultBorderColor*, *defaultBorderRadius*, and *default BorderStyle.*
* Fixed an issue where the editor would sometimes crash on older Shopify accounts.
* Improved the way that Studio handles product deletion. Now if a product is deleted from Shopify, all CX-Studio
  pages
  with references to that product will be unpublished.
* Fixed an issue where the price shown in the product component wouldn't appear properly on both light and dark
  backgrounds.
* Implemented a way for Studio to make a distinction on whether a variant is a specific color option.
* Added support for arrow functions (ex: ***=>***) in the section editor.
* Added support for linking directly to products via smart links.
* Fixed an issue where text added to the "Box Callout (Split)" component would display outside of the box when rendered.
* Fixed two bugs with "Gallery" component; one where there was extra space on top of the first row of images, and the
  second where text underneath the gallery images would align centered in the editor but would align left in the
  rendered version.
* Fixed several issues with the "Side by Side Media" component. One where alignment wasn't working properly, another
  where text and the (+) icon would overlap, and finally one where we changed the terminology used with alignment on the
  component; instead of "Left/Right" it now says "Default/Reversed".
* Changed the order of alignment properties on all components; instead of "Center, Left, Right" they know show as "Left,
  Center, Right".
* Added support for matching Studio users to
  a [Klaviyo Exchange ID](https://developers.klaviyo.com/en/reference/exchange) - if applicable.
* Updated developer documentation with new screenshots, and added notes
  for [using ```<Generator>```](https://developer.CX-Studio.com/docs/generators/collection), [using ```<Product>``` generator](https://developer.CX-Studio.com/docs/generators/product),
  and for working with layouts, component properties, and plugins.
* Updated contact sync process so that accounts with a large numbers of contacts are processed in a more efficient
  manner
