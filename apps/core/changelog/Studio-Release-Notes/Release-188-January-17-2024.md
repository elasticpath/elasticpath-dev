---
title: Studio Release 188 | January 17, 2024
date: 2024-01-17
tags: 
  - Studio
---
#### Overview

Improvements towards a seamless integration with Elastic Path Composable Commerce and lots of bug fixes in this release.

#### Catalog Rules

It is now possible to have multiple Studio storefronts with one instance of Elastic Path Composable Commerce. You can use channels and tags in the Elastic Path Composable Commerce integration to match the right catalog and price book with the right Studio storefront. See [Catalog Rules](/docs/commerce-manager/product-experience-manager/catalogs/catalog-rules).

![catalog rules in epcc integration](/assets/studio/epcc_integration_cr.png)

#### Sale Pricing

If you have configured the following for your products in Product Experience Manager, you can now view them on the product details and product collection pages in Studio.

- sale pricing
  ![EPCC sale pricing](/assets/studio/salepricing.png)
- child products

#### Product Drawer Improvements

Finally, Product Experience Manager product types are now displayed in the product details and product collection pages in Studio.

![EPCC sale pricing](/assets/studio/producttypes.png)

#### Products and Collections

When using Algolia with Studio, any sale pricing returned in the search results are now displayed.

Finally, a new NoML attribute allows you to configure whether a product list price is displayed.

#### Product Search

*Applies to searching with the Studio app only* Smart links now allow partial match on product title. In other words, once you start typing in a empty field, any products that partially match the search criteria are automatically displayed. This also applies to the product drawer.

#### Complete List of Resolved Items

#### Product Collections

* **Bug** - Fixed an issue where the price in the product collection component was appearing as **N/A**.

#### Performance

* **Bug** - Fixed an issue where product category pages could be slow to load if there were many products in a category.

#### Miscellaneous Bugs

* **Bug** - Fixed an issue where if a contact does not exist, many personalization rules were skipped.
* **Bug** - Fixed an issue where if a popover had a long title, the title overlapped the **Close** button.
* **Bug** - Fixed an issue where scrolling down a blog article and pasting text caused Studio to scroll back to the top of the page. 

