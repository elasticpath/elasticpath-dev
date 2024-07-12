---
title: Overview
sidebar_label: Overview
sidebar_position: 10
---

With Product Experience Manager, you can create and manage bundles. A bundle is a purchasable product comprising one or more products that you want to sell together. For example, a consumer electronics and video game company, *Playtend Games* can sell a *Playtend* video game console as a bundle that includes the console, controller, and game. The price of the bundle might be different from the total of the individual products. A bundle must contain at least two products, either the same items or different items. You must not assign a product to a bundle, if the product is in draft status as this invalidates the bundle.

You can have:

- Dynamic bundles: Dynamic bundles allow your shoppers to choose their own options in a bundle. See [Dynamic Bundles](/docs/api/pxm/products/products#dynamic-bundles).
- Bundles of bundles: Your bundle consists of child bundles. See [Bundles of Bundles](/docs/api/pxm/products/products#bundles-of-bundles).

## Bundle Components and Options

You can create multiple components within a bundle. Each component must have at least one or more options. Each option is a product and a quantity. 

:::caution
You cannot have more than 1500 options in a bundle. 
:::

For example, *Playtend Games* can create a bundle where the total bundle price is calculated based on the options that the buyers choose. Shoppers can select a base console option, two games options, and a controller option as in the following example:

1. Select one of the following options in the gaming console component:

    - Gaming Console 512 MB Storage. Regular price is $500, selling for $475.
    - Gaming Console 1 GB Storage. Regular price is $750, selling for $725.

1. From each of the following components, select one of the following options:

    - Component 1:

        - Playtend Roboselect Game, selling for $50
        - Playtend Burndown Game, selling for $45
        - Playtend Invaders Game, selling for $50

    - Component 2:

        - Playtend Doomsday Game, selling for $35
        - Playtend Happyday Game, selling for $35
        - Playtend Birthday Game, selling for $40

1. Select one of the following options in the controllers component:

    - Red Controller, selling for $40
    - Blue Controller, selling for $40
    - Green Controller, selling for $40
    - Invaders Controller, selling for $75

If the shopper chooses the following options for their bundle, the total is $885:

- Gaming Console 1 GB Storage ($725)
- Playtend Burndown Game ($45)
- Playtend Birthday Game ($40)
- Invaders Controller ($75)

You can specify a sort value for your components and options. The sort value is visible when you add the products to your catalogs. You can then use the sort value to program your storefront to display the bundle components and component options in the order that you want.

:::caution
Commerce Manager does not sort components and component options. You must program your storefront to sort the components and component options in the order that you want.
:::

## Bundle Pricing

Bundles can have:

- Fixed pricing - enables you to assign a fixed price for all products in a bundle. 
- Automatic/cumulative pricing - the price of a bundle is generated automatically based on the sum of the component products.

For more information, see [Bundle Pricing](/docs/api/pxm/products/products#bundle-pricing) 

## Adding Products From Bundles of Bundles to Carts

When using bundles of bundles, only products from child bundles should be added to a cart. This is because if you add a parent bundle to a cart and call the cart, the cart returns information about the parent bundle and the name of the child bundle, but no child bundle components are returned.

When designing your storefront, you must only allow child bundles to be added to carts. 

## Demo

<iframe width="560" height="315" src="https://www.youtube.com/embed/Sds4sdDiECI" title="Bundles Configuration" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
