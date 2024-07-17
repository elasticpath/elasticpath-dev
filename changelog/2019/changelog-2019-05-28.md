---
title: 'Changelog 2019-05-28'
date: '2019-05-28'
tags:
  - Carts & Orders
  - Promotions Standard
  - v2 Catalogue
---
**Minor** Cart items now returned with `GET` cart call.

**Minor** Adding a promo code to an empty cart now returns 422: "At least one product must be included in your cart to qualify for this offer".

**Minor** Adding the same promo code to a cart more than once returns 201 but ensures the code is applied only once.

**Minor** Updating a modifier no longer changes the child product IDs on rebuild.
