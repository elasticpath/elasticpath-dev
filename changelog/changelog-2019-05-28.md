---
title: 'Changelog 2019-05-28'
date: '2019-05-28'
---
{% badge type="minor" /%} Cart items now returned with `GET` cart call.
{% badge type="minor" /%} Adding a promo code to an empty cart now returns 422: "At least one product must be included in your cart to qualify for this offer".
{% badge type="minor" /%} Adding the same promo code to a cart more than once returns 201 but ensures the code is applied only once.
{% badge type="minor" /%} Updating a modifier no longer changes the child product IDs on rebuild.
