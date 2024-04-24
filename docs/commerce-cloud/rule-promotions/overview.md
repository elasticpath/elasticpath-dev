---
title: Overview
nav_label: Overview
sidebar_position: 1
---

The Rule Promotions provide the flexibity to offer diverse discounts to shoppers. It supports discounts of varying complexities, from code-based customer discounts, to Buy X Get Y scenarios, fixed price promotions, and more based on your business needs.

You can create a rule promotion using the [Rule Promotions API](/docs/commerce-cloud/rule-promotions/rule-promotions-api/rule-promotions-api-overview) or [Commerce Manager](/docs/commerce-cloud/rule-promotions/promotions-in-commerce-manager/overview). 

To apply Rule Promotions API in carts and orders, ensure that you have enabled the `use_rule_promotions` field in [Cart Settings](/docs/commerce-cloud/carts/cart-management/cart-settings/update-cart-settings). You can also update a specific cart to use Rule Promotions. See [Update a Cart](/docs/commerce-cloud/carts/cart-management/update-a-cart). This turns on the hybrid mode, which means you can simultaneously use both [Promotions Standard](/docs/commerce-cloud/promotions/promotion-management/promotion-management-overview) and Rule Promotions. For example, let's consider the following scenario:

If the cart has:
- A Promotion Standard offering a 10% discount on the shopping cart
- A Rule Promotion offering 20% discount on the shopping cart

    Shoppers qualify for both discounts, prompting the system to apply both types of discount to your shopping cart. This means you get a 10% discount from the Promotions Standard and a 20% discount from the Rule Promotion. The promotions are stacked based on their creation date. This means the oldest promotion is applied first, followed by stacking of the newest promotion upon the oldest promotion. 

## Rule Set

A rule set is essentially a set of criteria that determine when and how a promotion should be applied. It consists of conditions and corresponding actions. It can also contain targeted catalogs and currencies. 

### Conditions 

Conditions describe the criteria necessary for discount eligibility. For example, *Buy X get Y 50% off*. This condition requires the shopper to buy one item to receive 50% discount on another item. For more information, see [Rule Promotions API overview](/docs/commerce-cloud/rule-promotions/rule-promotions-api/rule-promotions-api-overview).

### Actions

Actions describe how discounts are applied to eligible carts and orders. These signify the discount type, level, configuration, and any limitations or restrictions when applying.

You can create actions to specify:

- Action conditions: Specifying which items should be included or excluded when applying the discounts. This can be based on factors such as item SKUs, product attributes, quantities, categories. For more information, see [Create a Condition Rule Promotion](/docs/commerce-cloud/rule-promotions/rule-promotions-api/item-rule-promotions/create-condition-rule-promotion).
- Action limitations: Imposing restrictions or limitations on the number of products eligible for discounts, maximum discount amounts, and total applications for discounts. For more information, see [Action Limitations](/docs/commerce-cloud/rule-promotions/rule-promotions-api/action-limitations/action-limitations-overview).

### Strategies

Strategies describe the type of condition or action.

For instance:
- Rule strategies define the types of conditions that need to be met for eligibility. These might include cart total amount, item prices, cart custom attributes, and more. 
- Action strategies refer to the type of action execution run when the eligibility criteria are met. For actions, the possible strategies are `cart_discount` and `item_discount`. For more information, see [Rule Promotions API Overview](/docs/commerce-cloud/rule-promotions/rule-promotions-api/rule-promotions-api-overview).

### Catalogs and Currencies

You can specify which catalogs and currencies the rules apply to. When catalogs are defined in a promotion, the promotion cannot apply to custom items. When no catalogs are defined, the promotion can apply to any item type, including custom items. 

You can choose to apply discounts to carts in a specific currency. If no currencies are defined, the discount applies to carts in any currency.

You can only set one currency for each rule promotion.

## Logical Operators

Operators are used to determine when a promotion should be triggered. Different rule strategies support different operators. For more information, see [Rule Promotions API Overview](/docs/commerce-cloud/rule-promotions/rule-promotions-api/rule-promotions-api-overview).

## Arguments

Arguments are the values associated with conditions and actions within a rule promotion. The accepted arguments for each strategy can vary, though they are all passed in the same form. In cases where the arguments are arrays, values within the arrays are OR'ed together.

Consider the following scenarios:

- Let's consider a condition where we want to target specific product categories.

    ```json
    {
    "strategy": "item_category",
    "operator": "in",
    "args": [
        "dog-balls",
        "chew-toys"
    ]
    }
    ```

    In this condition example, we are using the `item_category` strategy to target products based on their category. The `in` operator is used to specify that we want to include items that belong to certain categories.  The arguments are the specific categories we want to include. In this case it is `dog-balls` and `chew-toys`.

    This condition instructs the system to consider items that fall into either the `dog-balls` or `chew-toys` categories for eligibility.

- In an action, the arguments specify the details or configuration when applying a discount. 

    ```json   
    {
    "actions": [
        {
        "strategy": "cart_discount",
        "args": [
            "percent",
            10
        ]
        }
    ]
    }
    ```

    In this action example, the strategy is `cart_discount`, indicating that the action involves applying a discount to the cart.  The arguments specify that the discount should be applied as a percentage, taking 10% off. In this case, it is `"percent", 10`.

## Promotion Codes

You can generate codes for a Rule Promotion so that shoppers receive the discount when the code is provided. You can enable this feature by setting the `automatic` field to `false` in the promotions schema when you create a Rule Promotion. For more information, see [Create Rule Promotion Codes](/docs/commerce-cloud/rule-promotions/rule-promotion-codes/create-rule-promotion-codes#post-create-rule-promotion-codes). To create promotion codes in Commerce Manager, see [Creating Promotion Codes in Commerce Manager](docs/commerce-cloud/rule-promotions/promotions-in-commerce-manager/creating-promotion-codes).

To learn more about promotion codes, see [Promotion Codes](/docs/commerce-cloud/promotions/promotions-overview#promotion-codes).

:::note
- The promotion codes are case-insensitive.
- Multiple promotions can have the same code name. This means that different promotions can be identified using the same code names, allowing shoppers to apply a single coupon code that triggers multiple promotions. For more information see [Duplicate Codes](/docs/commerce-cloud/rule-promotions/rule-promotion-codes/create-rule-promotion-codes#duplicate-codes).
:::

## Feature Comparison: Promotions Standard vs. Rule Promotions

| Features                           | Promotions Standard | Rule Promotions  |
|:---------------------------------- | -----------------------| ----------------------|
| Case sensitive coupon codes                                         | ✅      | ⛔️  |
| Duplicate coupon codes across active promotions                     | ⛔️      | ✅  |
| Multiple matching criteria in a single promotion                    | ⛔️      | ✅  |
| Multiple discount actions in a single promotion                     | ⛔️      | ✅  |
| Stacking by creation date                                           | ✅      | ✅  |
| Cart custom attributes                                              | ⛔️      | ✅  |
| Conditional operators (For example, greater than or equal to)       | ⛔️      | ✅  |
| Fixed price promotion (products, categories, attributes)            |  ✅ (for the same item only)  | ✅ |
| Discounts targeting All, Cheapest or Most expensive eligible items | ⛔️       | ✅  |
| Discounts targeting a specific quantity of items                   | ✅ (limited to bundle promotions) | ✅ |
| Maximum discount                                                   | ✅  | ✅  |
| Maximum quantity limit (of the same SKU)                           | ✅  | ✅  |
| Buy X get Y                                                        | ⛔️  | ✅  |
| Conditions by item price (currently API only)                      | ⛔️  | ✅  |
| Cart promotion preview                                             | ✅  | ✅ | 
| Promotions by product SKU, category, product attribute             | ✅  | ✅  |
| Bundle fixed discount                                              | ✅  | coming soon |
| Promotion history                                                  | ✅  | coming soon |
| Bulk code generation (over 1000)                                   | ✅  | coming soon |
| Advanced search                                                    | ⛔️  | coming soon |
| Buy X for Y (buy in multiples of)                                  | ✅  | coming soon |
| Stacking and ranking control                                       | ⛔️  | coming soon |
| Free gift with auto Add                                            | ✅  | coming soon |
| Free shipping promotions (for shipping groups)                     | ⛔️  | coming soon |
| Cart item quantity conditions (line item quantity)                 | ✅ (limited to bundle promotions) | coming soon |
| Item quantity conditions (minimum number of items in cart)         | ⛔️  | coming soon |
| Product ID (limited to Automatic/Cumulative Bundle)                | ⛔️  | coming soon |
|  Promotions by product ID                                          | ✅  | coming soon |

## Related Resources

- [Promotions Builder in Commerce Manager](/docs/commerce-cloud/rule-promotions/promotions-in-commerce-manager/creating-a-promotion-in-promotions-builder)
- [Rule Promotions API](/docs/commerce-cloud/rule-promotions/rule-promotions-api/rule-promotions-api-overview)
- [Promotion Codes](/docs/commerce-cloud/promotions/promotions-overview#promotion-codes)



