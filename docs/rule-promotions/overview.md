---
title: Overview
nav_label: Overview
sidebar_position: 1
---

The Rule Promotions provide the flexibility to offer diverse discounts to shoppers. They support discounts of varying complexities, from code-based customer discounts, to Buy X Get Y scenarios, fixed price promotions, and more based on your business needs.

You can create a Rule Promotion using the [Rule Promotions API](/docs/rule-promotions/rule-promotions-api/rule-promotions-api-overview) or [Commerce Manager](/docs/commerce-manager/promotions-builder). 

To apply Rule Promotions API in carts and orders, ensure that you have enabled the `use_rule_promotions` field in [Cart Settings](/docs/api/settings/put-v-2-settings-cart). You can also update a specific cart to use Rule Promotions. See [Update a Cart](/docs/api/carts/update-a-cart). This turns on hybrid mode, which means you can simultaneously use both [Promotions Standard](/docs/api/promotions/promotions-standard-introduction) and Rule Promotions. For example, let's consider the following scenario:

If the cart has:
- A Promotion Standard offering a 10% discount on the shopping cart
- A Rule Promotion offering a 20% discount on the shopping cart

    Shoppers qualify for both discounts, prompting the system to apply both types of discount to your shopping cart. This means you get a 10% discount from the Promotions Standard and a 20% discount from the Rule Promotion. The Promotions Standard discount is always applied before the Rule Promotion discount, regardless of their creation dates. After applying the Promotions Standard discount, the Rule Promotion discount is then applied based on its creation date, with the newest promotion applied first and the oldest promotion stacked on top of the newest promotion.

:::note

- Cart-level discounts that are checked out will appear on orders with the same type as they do in carts, labeled as `promotion_item`. For backward compatibility, this change is specific to Rule Promotions only.
- When managing promotions and discounts, multiple types of discounts use the same promotion code. The system breaks down these discounts in the cart item’s metadata. This breakdown is detailed in the `discounts.constituents` object, showing which part of the discount comes from which specific promotion, identified by their promotion ID. When you use the [Get Cart Items](/docs/api/carts/get-cart-items) endpoint, the response example shows the breakdown of the same promotion code used in both Promotions Standard and Rule Promotions.

:::

## Rule Set

A rule set is essentially a set of criteria that determine when and how a promotion should be applied. It consists of conditions and corresponding actions. It can also contain targeted catalogs and currencies. 

### Conditions

Conditions describe the criteria necessary for discount eligibility. For example, *Buy X get Y 50% off*. This condition requires the shopper to buy one item to receive 50% discount on another item. For more information, see [Rule Promotions API overview](/docs/rule-promotions/rule-promotions-api/rule-promotions-api-overview).

### Actions

Actions describe how discounts are applied to eligible carts and orders. These signify the discount type, level, configuration, and any limitations or restrictions when applying.

You can create actions to specify:

- Action conditions: Specifying which items should be included or excluded when applying the discounts. This can be based on factors such as item SKUs, product attributes, quantities, categories. For more information, see [Create a Condition Rule Promotion](/docs/rule-promotions/rule-promotions-api/item-rule-promotions/create-condition-rule-promotion).
- Action limitations: Imposing restrictions or limitations on the number of products eligible for discounts, maximum discount amounts, and total applications for discounts. For more information, see [Action Limitations](/docs/rule-promotions/rule-promotions-api/action-limitations/action-limitations-overview).

### Sub Conditions

Sub conditions offer further refinement within rules and actions, specifying additional criteria that must be met for the promotion or discount to be applied. These can include conditions such as minimum quantities for specific item SKUs, exclusion of certain items, or additional constraints for eligibility. For more information, see [Create a Cart Percent Discount with Sub Conditions](/docs/rule-promotions/rule-promotions-api/cart-rule-promotions/create-a-cart-percent-discount-with-subconditions) and [Create an Item Rule Promotion with Sub Conditions](/docs/rule-promotions/rule-promotions-api/item-rule-promotions/create-an-item-rule-promotion-with-sub-conditions).

### Strategies

Strategies describe the type of condition or action.

For instance:
- Rule strategies define the types of conditions that need to be met for eligibility. These might include cart total amount, item prices, cart custom attributes, and more. 
- Action strategies refer to the type of action execution run when the eligibility criteria are met. For actions, the possible strategies are `cart_discount` and `item_discount`. For more information, see [Rule Promotions API Overview](/docs/rule-promotions/rule-promotions-api/rule-promotions-api-overview).

### Catalogs and Currencies

You can specify which catalogs and currencies the rules apply to. When catalogs are defined in a promotion, the promotion cannot apply to custom items. When no catalogs are defined, the promotion can apply to any item type, including custom items. 

You can choose to apply discounts to carts in a specific currency. If no currencies are defined, the discount applies to carts in any currency.

You can only set one currency for each rule promotion.

## Logical Operators

Operators are used to determine when a promotion should be triggered. Different rule strategies support different operators. For more information, see [Rule Promotions API Overview](/docs/rule-promotions/rule-promotions-api/rule-promotions-api-overview).

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

You can generate codes for a Rule Promotion so that shoppers receive the discount when the code is provided. You can enable this feature by setting the `automatic` field to `false` in the promotions schema when you create a Rule Promotion. For more information, see [Create Rule Promotion Codes](/docs/rule-promotions/rule-promotion-codes/create-rule-promotion-codes#post-create-rule-promotion-codes). To create promotion codes in Commerce Manager, see [Creating Promotion Codes in Commerce Manager](/docs/commerce-manager/promotions-builder/creating-promotion-codes).

To learn more about promotion codes, see [Promotion Codes](/docs/api/promotions/promotion-codes).

:::note
- The promotion codes are case-insensitive.
- Multiple promotions can have the same code name. This means that different promotions can be identified using the same code names, allowing shoppers to apply a single coupon code that triggers multiple promotions. For more information see [Duplicate Codes](/docs/rule-promotions/rule-promotion-codes/create-rule-promotion-codes#duplicate-codes).
:::

## Cart-level Discount Apportioning

Discount apportioning involves distributing cart-level discounts among the individual items in the cart, ensuring transparency and clarity in how discounts are allocated and represented at both the cart and item levels. Each discount includes essential details such as IDs, codes, amounts, and indicates their source as `rule-promotion`. It is important to note that item-level apportioning for cart-level discounts specifically applies to Rule Promotions.

Even if an apportioned amount amounts to zero, it is distributed among all items for consistency. Apportioned item-level discounts include a flag, such as `is_cart_discount`, to easily identify them as originating from cart-level promotions, aiding API consumers in reconciliation. This flag is used to check if the discount applied to cart item is from cart discount.

:::note
- The new discount apportioning algorithm ensures accuracy and consistency in the `item.discounts` and `item.meta.display_price.discounts` fields. However, slight differences may occur in the `item.meta.display_price.discount` fields due to intricacies in partial-amount rounding. It is important to consider the `item.discounts` and `item.meta.display_price.discounts` as the accurate representations of discount values.
- Apportioning for uneven values may reflect differently between a cart’s items and its corresponding order items post-checkout. Although the distribution of discounts may vary slightly between the cart and the order, the fundamental calculations and total discount amounts remain the same.
- The cart total will be calculated based on the discount values apportioned to individual items.
:::

Consider the following scenario:
- Create a [cart fixed discount rule promotion](/docs/rule-promotions/rule-promotions-api/cart-rule-promotions/create-a-cart-fixed-discount-rule-promotion), with a cart discount of $10. When a cart with eligible items, SKU1 and SKU2, with a price of $100 each, applies this cart discount, the system accurately distributes the discount among the items based on their proportions to the overall cart total.
- In this case, SKU1 and SKU2 with a price of $100 each, receive an apportioned discount of $5.00. Both items display the apportioned discount details in the `discounts` array in the response, along with the `is_cart_discount` flag indicating it's a cart-level discount. Upon checkout, the order items also reflect the apportioned discount details, ensuring transparency and accuracy in discount allocation.

See the following response example:

```json
{
    "data": [
        {
            "id": "832b6901-6943-43dd-b59d-273667500cad",
            "type": "custom_item",
            "name": "item",
            "description": "custom item",
            "sku": "SKU101",
            "slug": "",
            "image": {
                "mime_type": "",
                "file_name": "",
                "href": ""
            },
            "quantity": 1,
            "manage_stock": false,
            "unit_price": {
                "amount": 10000,
                "currency": "USD",
                "includes_tax": false
            },
            "value": {
                "amount": 10000,
                "currency": "USD",
                "includes_tax": false
            },
            "discounts": [
                {
                    "amount": {
                        "amount": -500,
                        "currency": "USD",
                        "includes_tax": false
                    },
                    "code": "auto_b0dbd44d-e361-4388-acaa-aec40990e86f",
                    "id": "b0dbd44d-e361-4388-acaa-aec40990e86f",
                    "promotion_source": "rule-promotion",
                    "is_cart_discount": true
                }
            ],
            "links": {},
            "meta": {
                "display_price": {
                    "with_tax": {
                        "unit": {
                            "amount": 9500,
                            "currency": "USD",
                            "formatted": "$95.00"
                        },
                        "value": {
                            "amount": 9500,
                            "currency": "USD",
                            "formatted": "$95.00"
                        }
                    },
                    "without_tax": {
                        "unit": {
                            "amount": 9500,
                            "currency": "USD",
                            "formatted": "$95.00"
                        },
                        "value": {
                            "amount": 9500,
                            "currency": "USD",
                            "formatted": "$95.00"
                        }
                    },
                    "tax": {
                        "unit": {
                            "amount": 0,
                            "currency": "USD",
                            "formatted": "$0.00"
                        },
                        "value": {
                            "amount": 0,
                            "currency": "USD",
                            "formatted": "$0.00"
                        }
                    },
                    "discount": {
                        "unit": {
                            "amount": -500,
                            "currency": "USD",
                            "formatted": "-$5.00"
                        },
                        "value": {
                            "amount": -500,
                            "currency": "USD",
                            "formatted": "-$5.00"
                        }
                    },
                    "without_discount": {
                        "unit": {
                            "amount": 10000,
                            "currency": "USD",
                            "formatted": "$100.00"
                        },
                        "value": {
                            "amount": 10000,
                            "currency": "USD",
                            "formatted": "$100.00"
                        }
                    },
                    "discounts": {
                        "auto_b0dbd44d-e361-4388-acaa-aec40990e86f": {
                            "amount": -500,
                            "currency": "USD",
                            "formatted": "-$5.00"
                        }
                    }
                },
                "timestamps": {
                    "created_at": "2024-04-30T19:12:04Z",
                    "updated_at": "2024-04-30T19:12:04Z"
                }
            }
        },
        {
            "id": "9bec80e8-6c48-4d5d-800d-8507ed68e5dc",
            "type": "promotion_item",
            "promotion_id": "b0dbd44d-e361-4388-acaa-aec40990e86f",
            "name": "$10 off carts >= $100",
            "description": "Promotion",
            "sku": "auto_b0dbd44d-e361-4388-acaa-aec40990e86f",
            "slug": "",
            "image": {
                "mime_type": "",
                "file_name": "",
                "href": ""
            },
            "quantity": 1,
            "manage_stock": false,
            "unit_price": {
                "amount": -1000,
                "currency": "USD",
                "includes_tax": false
            },
            "value": {
                "amount": -1000,
                "currency": "USD",
                "includes_tax": false
            },
            "links": {},
            "meta": {
                "display_price": {
                    "with_tax": {
                        "unit": {
                            "amount": -1000,
                            "currency": "USD",
                            "formatted": "-$10.00"
                        },
                        "value": {
                            "amount": -1000,
                            "currency": "USD",
                            "formatted": "-$10.00"
                        }
                    },
                    "without_tax": {
                        "unit": {
                            "amount": -1000,
                            "currency": "USD",
                            "formatted": "-$10.00"
                        },
                        "value": {
                            "amount": -1000,
                            "currency": "USD",
                            "formatted": "-$10.00"
                        }
                    },
                    "tax": {
                        "unit": {
                            "amount": 0,
                            "currency": "USD",
                            "formatted": "$0.00"
                        },
                        "value": {
                            "amount": 0,
                            "currency": "USD",
                            "formatted": "$0.00"
                        }
                    },
                    "discount": {
                        "unit": {
                            "amount": 0,
                            "currency": "USD",
                            "formatted": "$0.00"
                        },
                        "value": {
                            "amount": 0,
                            "currency": "USD",
                            "formatted": "$0.00"
                        }
                    },
                    "without_discount": {
                        "unit": {
                            "amount": 0,
                            "currency": "",
                            "formatted": "0"
                        },
                        "value": {
                            "amount": 0,
                            "currency": "",
                            "formatted": "0"
                        }
                    }
                },
                "timestamps": {
                    "created_at": "2024-04-30T19:12:04Z",
                    "updated_at": "2024-04-30T19:12:09Z"
                }
            },
            "promotion_source": "rule-promotion"
        },
        {
            "id": "a4a27cb4-7eb4-4d10-ac0c-98416a0051ad",
            "type": "custom_item",
            "name": "item",
            "description": "custom item",
            "sku": "SKU100",
            "slug": "",
            "image": {
                "mime_type": "",
                "file_name": "",
                "href": ""
            },
            "quantity": 1,
            "manage_stock": false,
            "unit_price": {
                "amount": 10000,
                "currency": "USD",
                "includes_tax": false
            },
            "value": {
                "amount": 10000,
                "currency": "USD",
                "includes_tax": false
            },
            "discounts": [
                {
                    "amount": {
                        "amount": -500,
                        "currency": "USD",
                        "includes_tax": false
                    },
                    "code": "auto_b0dbd44d-e361-4388-acaa-aec40990e86f",
                    "id": "b0dbd44d-e361-4388-acaa-aec40990e86f",
                    "promotion_source": "rule-promotion",
                    "is_cart_discount": true
                }
            ],
            "links": {},
            "meta": {
                "display_price": {
                    "with_tax": {
                        "unit": {
                            "amount": 9500,
                            "currency": "USD",
                            "formatted": "$95.00"
                        },
                        "value": {
                            "amount": 9500,
                            "currency": "USD",
                            "formatted": "$95.00"
                        }
                    },
                    "without_tax": {
                        "unit": {
                            "amount": 9500,
                            "currency": "USD",
                            "formatted": "$95.00"
                        },
                        "value": {
                            "amount": 9500,
                            "currency": "USD",
                            "formatted": "$95.00"
                        }
                    },
                    "tax": {
                        "unit": {
                            "amount": 0,
                            "currency": "USD",
                            "formatted": "$0.00"
                        },
                        "value": {
                            "amount": 0,
                            "currency": "USD",
                            "formatted": "$0.00"
                        }
                    },
                    "discount": {
                        "unit": {
                            "amount": -500,
                            "currency": "USD",
                            "formatted": "-$5.00"
                        },
                        "value": {
                            "amount": -500,
                            "currency": "USD",
                            "formatted": "-$5.00"
                        }
                    },
                    "without_discount": {
                        "unit": {
                            "amount": 10000,
                            "currency": "USD",
                            "formatted": "$100.00"
                        },
                        "value": {
                            "amount": 10000,
                            "currency": "USD",
                            "formatted": "$100.00"
                        }
                    },
                    "discounts": {
                        "auto_b0dbd44d-e361-4388-acaa-aec40990e86f": {
                            "amount": -500,
                            "currency": "USD",
                            "formatted": "-$5.00"
                        }
                    }
                },
                "timestamps": {
                    "created_at": "2024-04-30T19:12:09Z",
                    "updated_at": "2024-04-30T19:12:09Z"
                }
            }
        }
    ],
    "meta": {
        "display_price": {
            "with_tax": {
                "amount": 19000,
                "currency": "USD",
                "formatted": "$190.00"
            },
            "without_tax": {
                "amount": 19000,
                "currency": "USD",
                "formatted": "$190.00"
            },
            "tax": {
                "amount": 0,
                "currency": "USD",
                "formatted": "$0.00"
            },
            "discount": {
                "amount": -1000,
                "currency": "USD",
                "formatted": "-$10.00"
            },
            "without_discount": {
                "amount": 20000,
                "currency": "USD",
                "formatted": "$200.00"
            },
            "shipping": {
                "amount": 0,
                "currency": "USD",
                "formatted": "$0.00"
            }
        },
        "timestamps": {
            "created_at": "2024-04-25T00:34:48Z",
            "updated_at": "2024-04-30T19:12:09Z",
            "expires_at": "2024-05-07T19:12:09Z"
        },
        "messages": [
            {
                "source": {
                    "type": "custom_item",
                    "id": "832b6901-6943-43dd-b59d-273667500cad"
                },
                "title": "Discount Updated",
                "description": "Item discount has been updated."
            },
            {
                "source": {
                    "type": "custom_item",
                    "id": "a4a27cb4-7eb4-4d10-ac0c-98416a0051ad"
                },
                "title": "Discount Added",
                "description": "Item discount has been added."
            }
        ]
    }
}
``` 

## Condensed Promotion

A condensed promotion is essentially an object that contains specific meta information about a promotion applied to the cart or order. 

Condensed promotions can be retrieved from the following endpoints:

 - [Get a Cart](/docs/carts-orders/get-a-cart#get-include-promotions): This endpoint displays cart-level condensed promotions within the included object. If `?include=items` is specified, the included object also contains cart item-level promotions. The relationships field at the cart level has a promotions section only when `?include=promotions` is specified.
 - [Get Cart Items](/docs/carts-orders/get-cart-items#get-include-promotions): This endpoint shows both cart-level and item-level discounts in a condensed format within the included object.
 - [Get an Order](/docs/carts-orders/get-an-order#get-include-custom-discounts): This endpoint displays order-level condensed promotions within the included object.
 - [Get Order items](/docs/carts-orders/get-order-items#get-include-promotions): This endpoint displays both order-level and item-level promotions in the included object.

This applies to both [Promotions Standard](/docs/api/promotions/promotions-standard-introduction) and Rule Promotions.

## Handling both Item SKU and Product ID together in Rule Promotion

Nested conditions allow for more complex rule structures, where conditions are grouped together within other conditions. The use of nested conditions with an `and` strategy is not allowed. At this level of nesting, only an `or` strategy with either an `item_sku` or an `item_product_id` is valid. 

This approach:

- Supports only the `OR` within the `children` array
- Allows the conditions to be based on either item SKUs or product IDs
- Supports only the `in` operator for defining this conditions

This method is applicable to both cart-level and item-level discount rule promotions. For an example, illustrating how to create a `or` condition for `item_sku` and `item_product_id` strategy, refer to [Create an Item Percent Discount with Item SKU Or Item Product ID](/docs/rule-promotions/rule-promotions-api/item-rule-promotions/create-item-percent-discount-with-item-sku-or-item-productid).

You can include both SKUs and product IDs within the same rule promotion, providing flexibility in defining conditions and accommodating scenarios involving SKUless bundles or products without SKUs.

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
|  Promotions by product ID                                          | ✅  | ✅ |

## Related Resources

- [Promotions Builder in Commerce Manager](/docs/commerce-manager/promotions-builder/creating-a-promotion-in-promotions-builder)
- [Rule Promotions API](/docs/rule-promotions/rule-promotions-api/rule-promotions-api-overview)
- [Promotion Codes](/docs/promotions/promotions-overview#promotion-codes)
