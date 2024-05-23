---
title: Overview
nav_label: Overview
sidebar_position: 1
---

You can modify the cart expiry settings to set it to any number of days up to 365. Any existing carts default to the expiry of 7 days. To update cart settings in Commerce Manager, see [Updating Cart setting](/docs/api/settings/put-v-2-settings-cart).

With cart settings, you can: 
- Enable or disable custom discounts by setting the `custom_discounts_enabled` field to `true`. This allows you to activate your custom discounts from external services. See [Update Cart Setting](/docs/carts-orders/carts/cart-management/cart-settings/update-cart-settings).
- Enable or disable the use of rule promotions within the cart. You can apply this setting either at the store level using the [update cart setting](/docs/carts-orders/carts/cart-management/cart-settings/update-cart-settings) endpoint or individually to a specific cart using the [update a cart](/docs/carts-orders/carts/cart-management/update-a-cart) endpoint.

:::caution
- You cannot use both custom discounts and rule promotions at the same time.
- You must remove all existing discounts in the cart before updating it to use rule promotions.
:::
