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

Exclusions can be applied to any of these conditions and promotions, allowing you to refine your discount strategies further. For example, you can exclude specific products, categories, or attributes from promotions, providing more flexibility in setting up promotion rules.

To understand the difference between Promotions Standard and Promotions Builder, see [Feature Comparison](/docs/rule-promotions/overview#feature-comparison-promotions-standard-vs-rule-promotions).

As a best practice, we recommend creating new promotions in the Promotions Builder and allowing Promotions Standard to expire. While Promotions Standard can currently run side by side with new ones, transitioning to the Promotions Builder ensures alignment with updated features and facilitates smoother management of promotions over time.

## Stacking and Prioritizing Multiple Promotions

You can simultaneously apply multiple promotions, stacking both cart-level and item-level discounts on top of each other. When stacking promotions, the priority number assigned to each promotion determines the order in which they are applied. Higher numbers indicate higher priority, meaning those promotions will be applied first.

For example, if you have two promotions that can be stacked, the promotion with priority 90 will be applied before the promotion with priority 60.

If no priority is set, the promotions are applied sequentially based on their creation dates. The newest promotion is applied first and discounted prices calculated against any previously-discounted item prices. For example, if a SKU matches the criteria of the multiple promotions, the promotions will be applied will be applied in order from the newest to the oldest. If the original item price is $50 and the newest promotion applies a 10% discount, the item price would be reduced to $45. The next promotion would then be applied to this new price.

:::note

Standard Promotions are always applied first, regardless of any priorities set. Once all Standard Promotions have been applied, promotions configured in Promotions Builder are applied in the order determined by their assigned priority numbers.

:::

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

### Scenario 7 - Creating a Promotion to Exclude Items from Promotion Eligibility

Let's say you want to create a promotion where certain products are excluded from making the cart eligible for a discount.

In this scenario, you can set a condition to exclude specific products, categories, or products with certain attributes from making the promotion eligible for a discount. For example, if shoppers buy any product in the *Fashion Rings Jewellery* category, they will receive 20% off one of the cheapest items. However, if the excluded item, such as the *Platinum Flower ring*, is the only item in the cart, the discount will not be triggered.

To set this up in the Promotions Builder:

1. **Add a condition**: Select the eligible category for the promotion condition, such as the *Fashion Rings Jewellery* category, to determine which products should be considered for the discount.
1. **Add exclusion**: Specify the specific products, categories, or attributes that should be excluded from making the cart eligible for a discount. For example, exclude the *Platinum Flower ring*.
1. **Set up the promotion**: Specify the discount details, such as the percentage off and applicable products or categories in the **Actions** section. See [Creating Actions](/docs/commerce-manager/promotions-builder/creating-a-promotion-in-promotions-builder#creating-actions).

![Scenario 7](/assets/promotion-example-scenario-7-1.png)

### Scenario 8 - Creating a Promotion to Exclude Products from Both Eligibility and Discount

Let's say you want to create a promotion where specific products are excluded from both making the cart eligible for a discount and from receiving the discount themselves.

In this scenario, if shoppers buy any product from the *Fashion Rings* category, they can receive a 20% discount on other products from the *Fashion Rings Jewellery* category. However, products with the attribute *Platinum Metal Type* are excluded. This means these products will not make the cart eligible for the discount, nor will they receive the discount if they are included in the cart.

To set this up in the Promotions Builder:

1. **Add a condition and exclusions**: Select the eligible category for the promotion condition, such as the *Fashion Rings* category, to define which products can qualify for the discount, and specify any products or attributes to be excluded from the promotion. For example, exclude products with the *Platinum Metal Type* attribute to ensure they do not make the cart eligible for a discount.
1. **Configure the action and exclusions**: Configure a BXGY promotion in the **Actions** section to offer 20% off products in the *Fashion Rings Jewellery* category. After configuring the action, add exclusions to ensure that products with the *Platinum Metal Type* attribute are also excluded from receiving the discount. See [Creating a BXGY Promotion](/docs/commerce-manager/promotions-builder/creating-a-promotion-in-promotions-builder#creating-a-bxgy-promotion).

![Scenario 8](/assets/promotion-example-scenario-7-2.png)

## Demos

<iframe class="vidyard_iframe" title="Promotions Builder" src="//play.vidyard.com/4xHaUsR9fh8Z5PUjF4o5nm.html?" width="640" height="360" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen referrerpolicy="no-referrer-when-downgrade"></iframe>