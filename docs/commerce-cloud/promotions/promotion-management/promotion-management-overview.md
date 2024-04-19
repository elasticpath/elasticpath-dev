---
title: Promotion Management Overview
nav_label: Promotion Management Overview
sidebar_position: 1
---

With promotions, you can provide different types of discounts to all your customers or specific customers. A promotion can be set to apply automatically or by entering a code. Automatic promotions are applied when the selected items meet the promotions criteria. Promotions with codes are applied when customers enter the promotion code to get to discount. Commerce offers the following types of promotions:

#### Cart-level Promotions
- [Cart Fixed Discount Promotion](/docs/commerce-cloud/promotions/promotion-management/create-a-cart-fixed-discount-promotion): Adds a fixed amount discount to a cart.
- [Cart Percent Discount Promotion](/docs/commerce-cloud/promotions/promotion-management/create-a-cart-percent-discount-promotion): Adds a percentage discount to a cart based on the value of the `cart_items` and `custom_items` objects.
#### Item-level Promotions
- [X for Y Discount Promotion](/docs/commerce-cloud/promotions/promotion-management/create-X-for-Y-discount-promotion): Provides an option to sell more than one item of the same product for a specific price. For example,  _2 for 1_ or _3 for 2_ promotions. If a cart contains more items that are eligible for _2 for 1_ promotion, the promotion amount is multiplied by the number of eligible collection.
- [X for Amount Discount Promotion](/docs/commerce-cloud/promotions/promotion-management/create-X-for-amount-discount-promotion): Provides an option to sell a specific number of items of the same product for a fixed amount. For example, buy two items for $10 or four items for $20.
- [Fixed Bundle Discount Promotions](/docs/commerce-cloud/promotions/promotion-management/create-fixed-bundle-discount-promotion): Provides a fixed price for a selection of products when you buy the selected products together. For example, buy products _x, y, and z for $15_ or buy _two x and three y or z for $25_.
- [Item Fixed Discount Promotion](/docs/commerce-cloud/promotions/promotion-management/create-item-fixed-discount-promotion): Reduces the product price for multiple items by a fixed amount, such as $5.00 off.
- [Item Percent Discount Promotion](/docs/commerce-cloud/promotions/promotion-management/create-item-percent-discount-promotion): Reduces the product price for multiple items by a percentage, such as 10% off.
- [Free Gift Promotions](/docs/commerce-cloud/promotions/promotion-management/create-free-gift-promotion): Offers a free item when a specific product or a group of products are purchased.

To learn how promotions work with bundles, see [Understanding How Promotions work with Bundles](/docs/commerce-cloud/promotions/promotions-overview#understanding-how-promotions-work-with-bundles).

:::note
Already existing promotions created before September 28, 2022 will not have `created_by` and `updated_by` attributes in their response body.
:::

:::caution

- Item-level promotions are only supported by the line calculation method. For more information about this method, see the [Calculation Method](/docs/commerce-cloud/global-project-settings/settings-overview#calculation-method) section.
- The `max_discount_value` setting specifies the maximum possible discount for the cart. To avoid the conflict with the promotions and the promotion to work, we recommend not to use this setting for the following promotions:

    - Item Fixed Discount Promotion
    - Cart Fixed Discount Promotion
    - X for Y Discount Promotion
    - X for Amount Discount Promotion
    - Fixed Bundle Discount Promotions
    - Free Gift Promotions

- The `max_applications_per_cart` setting, which specifies the maximum number of applications of a promotion per cart, is applicable to line-item promotions only. For example, in a store that offers _buy SKU1 get a free gift_ promotion with `max_applications_per_cart:1` setting, the buyer can only use the free gift promotion once per cart. If `max_applications_per_cart` is not set, the buyer can use the promotion multiple times. You can also set `max_applications_per_cart` to zero to remove any usage limit.
- The `exclude` array consists of `productID`s or `SKU`s of products to be excluded from the cart-level promotions, such as `fixed_discount` and `percent_discount`. However, the stores that use simple calculation method do not support excluding products from promotions.

:::

## The `schema` Object

Promotions are defined by schemas that are used internally to verify promotions and calculate discounts. For each promotion, you must define a schema when you create the promotion. Each promotion type has its own required fields.

## Promotion Codes

You can apply promotions automatically to all customer carts, or you can create promotion codes that customers must enter to receive the discount. For more information, see the [Creating Promotion Codes](/docs/commerce-cloud/promotions/promotion-codes/create-promotion-codes) section.

When a promotion expires, the promotion codes attached to the promotion automatically become invalid. However, when you re-enable the expired promotion, the promotion codes attached to the promotion are deleted. 

When you checkout a cart with an expired promotion, the expired promotion will be automatically removed from a cart and the checkout process is initiated. As a best practice, we recommend to update your cart to remove the expired promotion before initiating the checkout process.

When extending the end date of an expired promotion with over 1000 codes, you will receive an error response. See [Updating a Promotion](/docs/commerce-cloud/promotions/promotion-management/update-promotions#errors). In such cases, we recommend [duplicating the promotion](/docs/commerce-cloud/promotions/promotions-cm/overview#duplicating-promotions), allowing you to set the new end dates and create promotion codes as needed.



