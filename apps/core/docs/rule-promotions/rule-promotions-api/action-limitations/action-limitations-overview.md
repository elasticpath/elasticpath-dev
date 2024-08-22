---
title: Action Limitations Overview
nav_label: Action Limitations Overview
sidebar_position: 1
---

Action limitations refer to restrictions or limitations that can be applied to promotions. These limitations dictate how the promotion can be used and what criteria must be met for it to be applied. 

They can be combined with action conditions to create specific rules for the promotion. For more information, see [Create an Item Fixed Discount with Condition Rule Promotion](/docs/rule-promotions/rule-promotions-api/item-rule-promotions/create-condition-rule-promotion).

The following are the limitations that are applied to promotions:

- Maximum Discount: This limitation sets the total discount amount that can be applied to the promotion. This limitation applies to Cart Percent and Item percent discount promotions.
- Maximum Quantity: This limitation ensures the promotion is limited to a specific quantity of the same items. This limitation applies to Item discount promotions.
- Items: This limitation applies only to Item fixed and Item Percent discount promotions. It restricts the total number of items in the cart that are eligible for the promotion. It is applied based on a price strategy, such as `cheapest` or `expensive`. By default price strategy is `cheapest`. You can also combine this with other limitations like `max_discount` and `max_quantity`.
     - Cheapest: This limitation ensures that the promotion is applied to the cheapest item or items in the cart.
     - Expensive: This limitation applies the promotion to the most expensive items in the cart.

These limitations can be combined and applied separately according to your business requirements. See [Create Action Limitations](/docs/rule-promotions/rule-promotions-api/action-limitations/create-limitations-and-exclusion-rule-promotion).
