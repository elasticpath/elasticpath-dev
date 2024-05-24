---
title: Overview
nav_label: Overview
sidebar_position: 0.5
---

The Promotions Builder provides the flexibility to offer diverse discounts to shoppers. Leveraging a rule-based implementation behind the scenes, this feature allows users to set specific promotion eligibility conditions and define corresponding discount actions at various levels.

Within the Promotions Builder, you can configure promotions using various conditions:

- [Cart](/docs/commerce-manager/promotions-builder/creating-a-promotion-in-promotions-builder#creating-a-cart-condition): Define a minimum cart subtotal or quantity requirements.
- [Cart Items](/docs/commerce-manager/promotions-builder/creating-a-promotion-in-promotions-builder#creating-a-cart-items-condition): Specify product SKUs, product categories, or products with attributes for eligibility.
- [Custom Attributes](/docs/commerce-manager/promotions-builder/creating-a-promotion-in-promotions-builder#adding-cart-custom-attributes): Choose your own cart custom attributes.

Promotions in the Promotions Builder support the following actions:

- [Cart Discount](/docs/commerce-manager/promotions-builder/creating-a-promotion-in-promotions-builder#creating-a-cart-discount-promotion): A cart discount applies to all items in the cart unless specific exclusions are specified. It can be either a fixed discount or a percentage discount.
    - Fixed discount: This reduces the cart total by a fixed amount, such as $5.00 off.
    - Percentage discount: This reduces the cart total by a specific percentage, such as 10% off.
- [Item Discount](/docs/commerce-manager/promotions-builder/creating-a-promotion-in-promotions-builder#creating-an-item-discount-promotion): An item discount applies to the eligible items specified in the conditions. It can be a fixed amount, percentage, fixed price, or other discount specified such as **BXGY**.
- [BXGY](/docs/commerce-manager/promotions-builder/creating-a-promotion-in-promotions-builder#creating-a-bxgy-promotion): Buy X and Get Y (BXGY) discounts apply to the items identified within the promotional actions. This means that when a Buy X Get Y promotion is triggered, the specified items receive the associated discounts outlined in the promotion's configuration.

To understand the difference between Promotions Standard and Promotions Builder, see [Feature Comparison](/docs/rule-promotions/overview#feature-comparison-promotions-standard-vs-rule-promotions).

As a best practice, we recommend creating new promotions in the Promotions Builder and allowing Promotions Standard to expire. While Promotions Standard can currently run side by side with new ones, transitioning to the Promotions Builder ensures alignment with updated features and facilitates smoother management of promotions over time.

## Stacking Multiple Promotions

You can simultaneously apply multiple promotions, stacking both cart-level and item-level discounts on top of each other.

The promotions are applied sequentially based on their creation dates. The oldest promotion is applied first, with the newer promotions stacked upon it. For example, if a SKU matches the criteria of the oldest promotion, the promotion will be applied to the item price each time. For instance, if the item price is $50, each stacked promotion will be applied against the $50 item price.

## Scenarios

### Scenario 1 - Creating a Promotion with Custom Attributes

Let's say you want to offer registered shoppers a 20% discount when they purchase products made of platinum metal.

The system checks if the shopper is registered and if the product they added is made of platinum.

To set this up in the Promotions Builder:
1. Create a [Cart Custom attribute](/docs/commerce-manager/promotions-builder/creating-a-promotion-in-promotions-builder#adding-cart-custom-attributes) that determines if your shoppers are registered when shopping. Set this value as **true** for anyone who has signed up for an account.
2. Configure a [Cart Items condition](/docs/commerce-manager/promotions-builder/creating-a-promotion-in-promotions-builder#creating-a-cart-items-condition) to check for the product attribute as metal type, and specify that the discount applies to product with the value as *platinum*.
3. Set up an [Item Discount](/docs/commerce-manager/promotions-builder/creating-a-promotion-in-promotions-builder#creating-an-item-discount-promotion) in the **Actions** section as 20% off.

See the following image:

![Scenario 1](/assets/promotion-example-scenario-1.png)

### Scenario 2 : Creating a Buy X Get Y (BXGY) Promotion

Let's consider a scenario where you want to offer a discount on silver jewelery for shoppers who buy gift cards for the holidays.

To set this up in the Promotions Builder:

1. Configure a [Cart Items condition](/docs/commerce-manager/promotions-builder/creating-a-promotion-in-promotions-builder#creating-a-cart-items-condition), and select **Product** option and add the eligible gift card items.
2. Create a [BXGY](/docs/commerce-manager/promotions-builder/creating-a-promotion-in-promotions-builder#creating-a-bxgy-promotion) promotion in the **Actions** section. Configure an item discount for 70% off on all products with the *jewellery-metal-type* template, which contains *metal-type* with values as *silver*.

![Scenario 2](/assets/promotion-example-scenario-2.png)

### Scenario 3 - Creating a Promotion with Multiple Discount Actions

Consider a scenario where you want to offer 20% off to all shoppers who spend $3000 or more on engagement rings. Additionally shoppers also receive a 10% discount on the cheapest item from the *Bangles* category.

To set this up in the Promotions Builder:

1. Configure a [Cart condition](/docs/commerce-manager/promotions-builder/creating-a-promotion-in-promotions-builder#creating-a-cart-condition) to check if the subtotal is equal to or greater than $3000.
2. Add a [Cart Items condition](/docs/commerce-manager/promotions-builder/creating-a-promotion-in-promotions-builder#creating-a-cart-items-condition) specifying the engagement rings category.
3. Set up an [Cart Discount](/docs/commerce-manager/promotions-builder/creating-a-promotion-in-promotions-builder#creating-a-cart-discount-promotion) in the **Actions** section for 20% off on engagement rings.
4. Configure [BXGY](/docs/commerce-manager/promotions-builder/creating-a-promotion-in-promotions-builder#creating-a-bxgy-promotion) and create another item discount to apply a 10% discount on the cheapest item from the *Bangles* category.

![Scenario 3](/assets/promotion-example-scenario-3.png)

### Scenario 4 - Creating a Tiered Promotions

Consider a scenario where you want to provide shoppers with various cart subtotal tiers to receive different discounts. Shoppers need one coupon code to trigger the various tiers. For example, use the coupon code *summer2024*. 

The shoppers need to:
- Spend equal to or less than $100 and get 10% off the cart subtotal.
- Spend between $100 and $500 and get 20% off the cart subtotal.

To set this up in the Promotions Builder:

1. Configure the first promotion for the $100 tier:
    1. Add a [Cart condition](/docs/commerce-manager/promotions-builder/creating-a-promotion-in-promotions-builder#creating-a-cart-condition) to check if the subtotal is less than $100.
    1. Set up a [Cart Discount](/docs/commerce-manager/promotions-builder/creating-a-promotion-in-promotions-builder#creating-a-cart-discount-promotion) for 10% off the cart subtotal.
    1. Use the coupon code *summer2024* to trigger this promotion.

1. Configure the second promotion for the $100 to $500 tier:
    1. Add a [Cart condition](/docs/commerce-manager/promotions-builder/creating-a-promotion-in-promotions-builder#creating-a-cart-condition) to check if the subtotal is greater than $100 and less than or equal to $500.
    1. Set up a [Cart Discount](/docs/commerce-manager/promotions-builder/creating-a-promotion-in-promotions-builder#creating-a-cart-discount-promotion) for 20% off the cart subtotal.
    1. Again, use the coupon code *summer2024* to trigger this promotion.

The following image shows an example of the $100 tier promotion:
![Scenario 4](/assets/promotion-example-scenario-4-1.png)

The following image shows an example of the $100 to $500 tier promotion:
![Scenario 4](/assets/promotion-example-scenario-4-2.png)

### Scenario 5 - Creating a Promotion with the Maximum Item Quantity Limitation

Suppose your shoppers purchase two of the same items by offering a 50% discount on one of them.

To set this up in the Promotions Builder:

1. Specify the required quantity of SKUs that need to be purchased as part of the condition. This can be done by configuring the **items quantity** parameter in [Create Cart Condition](/docs/commerce-manager/promotions-builder/creating-a-promotion-in-promotions-builder#creating-a-cart-condition).
2. Configure a [Cart Item condition](/docs/commerce-manager/promotions-builder/creating-a-promotion-in-promotions-builder#creating-a-cart-items-condition) to target the desired item.
3. Create a [BXGY discount](/docs/commerce-manager/promotions-builder/creating-a-promotion-in-promotions-builder#creating-a-bxgy-promotion) in the **Actions** section for a 50% discount with a maximum quantity limit for the discount to apply to.

By implementing this promotion, shoppers could be encouraged to purchase two of the same items, with one item being discounted by 50%.

![Scenario 5](/assets/promotion-example-scenario-5.png)

### Scenario 6 - Creating a Fixed Price Discount Promotion

Suppose you want to offer a discounted price for a particular product using the promotion code, rather than discounting the price for all shoppers in Price Books.

To set this up in the Promotions Builder:

1. Specify the cart item to target the specific product. To do this, see [Cart Item condition](/docs/commerce-manager/promotions-builder/creating-a-promotion-in-promotions-builder#creating-a-cart-items-condition).
2. Create an [Item Discount](/docs/commerce-manager/promotions-builder/creating-a-promotion-in-promotions-builder#creating-an-item-discount-promotion) in the **Actions** section and choose **a fixed price**.
3. Specify the quantity required to avail the discounted price for the item.

By implementing this, shoppers can use a promotion code to purchase the product at a reduced price, offering targeted discounts without affecting all shoppers in Price Books.

![Scenario 6](/assets/promotion-example-scenario-6.png)

