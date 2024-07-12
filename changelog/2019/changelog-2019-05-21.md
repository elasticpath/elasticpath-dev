---
title: 'Changelog 2019-05-21'
date: '2019-05-21'
tags:
  - Carts & Orders
  - Integrations
---
**Minor** Improved the safety of carts using different currencies by rejecting requests which would mix up currencies. The following use cases apply:
  1. If you attempt to add a product to a cart which contains items in a different currency, you receive a 400 error.
  1. If you attempt to check out a cart in a different currency than the products that exist in the cart, you receive a 400 error.
  1. If you attempt to `GET` a cart in a different currency than the items in the cart, then the currency header should be ignored. You should see it in the original currency.
  1. If you attempt to `GET` cart items in a different currency than the items in the cart, then the currency header should be ignored. You should see it in the original currency.

**Minor** Fixed an issue with carts whereby changing the product quantity would change the order of cart items. This is now preserved.

**Minor** Added attribute validation so that only [known events](/docs/commerce-cloud/integrations/observable-events) are accepted.

**Minor** DELETE calls are now rejected to remove a relationship from a collection for incorrectly formatted requests.

**Minor** Checkout call now returns order items in the response.
