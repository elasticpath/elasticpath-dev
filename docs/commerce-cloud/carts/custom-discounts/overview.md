---
title: Overview
nav_label: Overview
sidebar_position: 1
---

With custom discounts, you can allow your shoppers to apply discounts from external services to their purchases. To apply custom discounts to carts and cart items, you need to set `custom_discounts_enabled` field to `true` in your [Update Cart Settings](/docs/commerce-cloud/carts/cart-management/cart-settings/update-cart-settings#put-update-cart-settings). You cannot add custom discounts to an empty cart.

The custom discount limit applies separately at the cart level and the cart item level. By default, it is set to 5 if this setting is not defined for the store.

:::caution
- To increase the custom discount limit, contact [Elastic Path Support](https://support.elasticpath.com/hc/en-us) team. After updating the setting, you can verify its status by calling the Get all settings endpoint. The response should include the `custom_discount_limit` field indicating the applied value.
- The stores that use [simple calculation method](/guides/Carts/calculate-totals#simple-calculation-method) do not support custom discounts.
:::


