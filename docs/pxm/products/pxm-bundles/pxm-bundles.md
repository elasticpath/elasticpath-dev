---
title: Overview
nav_label: Overview
sidebar_position: 10
---

:::caution
The Bundles API is for Administrator use only. Do not use these endpoints on your customer-facing frontends.
:::

With Product Experience Manager, you can create and manage bundles. A bundle is a purchasable product, comprising of one or more products that you want to sell together. 

You can use bundles in different ways. For example, a consumer electronics and video game company, *Playtend Games* can sell a *Playtend* video game console as a bundle that includes the console, controller, and game. The price of the bundle might be different from the total of the individual products. 

Alternatively, you may have a fixed, marketable banner product featuring only one item, such as a 'product of the week.' In this use case, the banner bundle description remains constant, while the product within the bundle can be easily swapped in and out.

You must not assign a product to a bundle if the product is in draft status as this invalidates the bundle.

You can have:

- Dynamic bundles. Dynamic bundles allow your shoppers to choose their own options in a bundle. See [Dynamic Bundles](/docs/pxm/products/pxm-bundles/dynamic-bundles).
- Bundles of bundles. Your bundle consists of child bundles. See [Bundles of Bundles](/docs/pxm/products/pxm-bundles/bundles-of-bundles).

## Bundle Components and Options

You can create multiple components within a bundle. Each component must have at least one or more options. Each option is a product and a quantity. 

:::caution
You cannot have more than 1500 options in a bundle. 
:::

For example, *Playtend Games* can create a bundle where the total bundle price is calculated based on the options that the buyers choose. Shoppers can select a base console option, two games options, and a controller option as in the following example:

1. Select one of the following options in the gaming console component:

    - Gaming Console 512 MB Storage. Regular price is $500, selling for $475.
    - Gaming Console 1 GB Storage. Regular price is $750, selling for $725.

1. From each component, select an option:

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

## Bundle Pricing

Bundles can have:

- Fixed pricing - enables you to assign a fixed price for all products in a bundle. 
- Automatic/cumulative pricing - the price of a bundle is generated automatically based on the sum of the component products.

For more information, see [Bundle Pricing](/docs/pxm/products/pxm-bundles/bundle-pricing).

## Creating Bundles

You can create bundles using:

- [Bundles API](/docs/pxm/products/pxm-bundles/pxm-bundles-api/create-a-bundle).
- [Commerce Manager](/docs/commerce-manager/product-experience-manager/bundles/bundle-configuration).
