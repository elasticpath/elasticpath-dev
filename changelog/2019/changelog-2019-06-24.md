---
title: 'Changelog 2019-06-24'
date: '2019-06-24'
tags:
  - Carts & Orders
---
**Major** Added new methods, `simple` (default) and `line`, to [calculate totals](/docs/commerce-cloud/carts/calculate-totals) for carts and orders.

  **Minor** Fixed a bug where a `PUT` to a cart item with a quantity of `0` would return a `404`.

**Minor** Fixed a bug where passing mismatched IDs in the URL and body, or not passing an ID in the body would cause a `5xx` error.

**Minor** You can now add a tax item at the same time you add a cart item. See [Add Product to Cart](/docs/commerce-cloud/carts/cart-items/add-product-to-cart) or [Add Custom Item to Cart](/docs/commerce-cloud/carts/cart-items/add-custom-item-to-cart) and for tax item reference see [Tax Items](/docs/commerce-cloud/carts/tax-items#the-tax-item-object).
