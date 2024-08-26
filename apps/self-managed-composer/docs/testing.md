---
id: testing
title: Testing the Plugin
sidebar_label: Testing
---

After you configure the Composer plugin, you can test that it works by following these steps:

1. Browse to Cortex Studio.
2. Create a public access token.
3. Register as a new customer or login as an existing customer. This should trigger a [Customer event webhook trigger](event-payloads.md#customer-events).
4. Create a new custom shopping cart. This should trigger a [Shopping cart event webhook trigger](event-payloads.md#shopping-cart-events).
5. Add an item to cart. This should trigger a [Shopping cart item event webhook trigger](event-payloads.md#shopping-cart-item-events).
6. Purchase the cart. This should trigger a [Order release event webhook trigger](event-payloads.md#order-released-events). Note that if the product is physical, it may take several minutes or hours until the order is released, depending on the pick delay configuration.
