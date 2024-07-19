---
title: Introduction
nav_label: Introduction
sidebar_position: 1
---

Shipping groups or split shipping refers to the separation of cart or order items into distinct shipping groups, with common shipping elements for corresponding items defined at this group level. This can include separate delivery addresses, tracking details, delivery methods, or shipping prices for different sets of items. Split shipping allows users to organize, update, and attach shipping concepts to eCommerce offerings according to their specific business requirements.

For example, consider the following scenario:

1. A shopper adds a gaming console, laptop, and headphones to the cart, and wants to deliver these items to different addresses.
1. Generate shipping groups for a cart. See [Create a cart shipping group](/docs/ship-groups/shipping-groups/shipping-groups-api/create-cart-shipping-group).
1. Associate the cart items with the corresponding shipping group IDs. This step is important because it is necessary to associate items with shipping groups to include shipping groups in the corresponding cart, order, and totals. 
1. [Checkout](/docs/api/carts/checkout) a cart. An unpaid order is created, and the checked out cart shipping groups are linked to the corresponding order. When you [Get an Order](/docs/api/carts/get-an-order), you can see that the shipping groups are linked to that order.

:::note
- You cannot split a bundle into multiple shipping groups. Therefore, if a bundle is included in an order, the entire bundle is associated to the same shipping group. 
- The shipping prices do not impact eligibility for item-level and cart-level promotions.
:::

The following are the characteristics of shipping groups:
- Shipping groups are designed to function independently of the items, therefore, providing flexibility in handling various business scenarios and workflows, and allowing both new and existing customers to utilize shipping group features according to their business requirements.
- With shipping groups, you can integrate third-party shipping services (external shipping engines) to generate details associated with item shipments. By integrating external shipping engines through shipping APIs, businesses can streamline their shipping processes according to their requirements.
- We offer tracking fields for shipping groups, which include reference fields for cross-service awareness, tracking, and delivery estimates. See [cart shipping group](/docs/ship-groups/shipping-groups/shipping-groups-api/create-cart-shipping-group).
- When using shipping groups, shoppers have the flexibility to add different addresses to each shipping group. This means that each shipping group within an order can have a unique shipping address. Without shipping groups, the entire order would be associated with a single address.
- Shipping groups provide the ability to add shipping prices to them. The shipping display price includes the base, tax, fees, and total. These are required to calculate [cart and order totals](/guides/How-To/Carts/calculate-totals).
