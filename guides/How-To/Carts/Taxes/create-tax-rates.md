---
title: Create tax rates
nav_label: Create tax rates
nav_position: 5
---

You can apply tax items to a cart for every product added to that cart.

- Apply a custom tax item in a scenario in which you have your own tax calculation system configured, or if you want to apply a flat tax rate.
- Integrate a third party tax calculator in a scenario in which you need a tax calculation system.

Add tax to items in your cart to apply relevant taxes for checked out products.

This guide explains how to apply a flat rate sales tax. How you calculate the rates is up to you, and so this guide assumes that you already know how to calculate tax rates.

Key points about taxes and how they work:

- Tax calculation logic. The `includes_tax` field on the product can be set to true or false:
    - `true` Composable Commerce performs a backward calculation of taxes meaning the original product price is not affected during checkout.
    - `false` Composable Commerce calculates tax and add it to the original product price.
- Promotions and Taxes. Taxes are calculated after all promotional savings have been applied.
- Cart-level promotions. Promotional savings are equally distributed across all items in the cart. If there is a remainder after distributing promotional savings across cart items, the promo saving is rounded up, so that there is no remainder left.

## Prerequisite

If you want to follow along, you need the following item:

- An [access token](/guides/Getting-Started/your-first-api-request)

## Step-by-step walkthrough

1. Add a product to a cart
2. Add a tax item to a cart
3. Get taxed item

### Add a product to a cart

Add a product to a cart. If the product has the `includes_tax` field set to `true`, and you created a tax item, the cart applies the calculated tax rate to the product.

```sh
curl -X POST https://useast.api.elasticpath.com/v2/carts/:reference/items \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
        "data": {
          "type": "cart_item",
          "id": "d4fb11d4-2fd6-43a1-a047-7b869d41cf96",
          "quantity": 4
      }
  }
```

### Add a tax item to a cart

Create a tax item. To apply a tax item to a cart item, add a tax item to the cart.

:::note
The ability to create tax items is not available through Commerce Manager.
:::

```sh
curl -X POST https://useast.api.elasticpath.com/v2/carts/:cartID/items/:itemID/taxes \
-H "Authorization: XXXX" \
-H "Content-Type: application/json" \
-d ${
    "data": {
      "type": "tax_item",
      "name": "Tax Name",
      "jurisdiction": "UK",
      "code": "MYTAX01",
      "rate": 0.102
    }
  }
```

### Get taxed item

Relationships between cart items and tax items are created automatically when the product is added to a cart. Products added to a cart must have the `includes_tax` field set up to `true`.

