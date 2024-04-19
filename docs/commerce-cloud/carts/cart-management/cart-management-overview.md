---
title: Cart Management Overview
nav_label: Carts Management Overview
sidebar_position: 1
---

A Cart contains the product and custom cart items that a user intends to purchase. After a Cart is ready for Checkout, you can use the [Checkout](/docs/commerce-cloud/checkout/checkout) endpoint to convert the cart to an order.

:::note
Adding, modifying, or removing any cart items, custom items, or promotions always returns the cart meta, calculated using the [calculation method](/docs/commerce-cloud/global-project-settings/settings-overview#calculation-method). **This is useful to update the client with up-to-date totals.**
:::

:::caution
We will automatically delete carts 7 days after they were last updated.
:::

:::note
If you do not pass a `X-MOLTIN-CURRENCY` header specifying what currency you would like the cart to use, the products in the cart are converted to your default currency.
:::

## The Cart object

### Attributes

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | The unique identifier for the cart. Use SDK or create it yourself. |
| `type` | `string` | The type of object being returned. |
| `name` | `string` | The name of this item. |
| `description` | `string` | A description of the cart item. |
| `links` | [`object`](#the-cart-links-object) | The links object. |
| `meta` | [`object`](#the-cart-meta-object) | Additional information [calculated](/docs/commerce-cloud/global-project-settings/settings-overview#calculation-method) for this cart. |

### Sample Object

```JSON
{
    "data": {
        "id": "1",
        "name": "Cart",
        "description": "",
        "type": "cart",
        "links": {
            "self": "https://useast.api.elasticpath.com/carts/carts/1"
        },
        "meta": {
            "display_price": {
                "with_tax": {
                    "amount": 0,
                    "currency": "",
                    "formatted": "0"
                },
                "without_tax": {
                    "amount": 0,
                    "currency": "",
                    "formatted": "0"
                },
                "tax": {
                    "amount": 0,
                    "currency": "",
                    "formatted": "0"
                },
                "discount": {
                    "amount": 0,
                    "currency": "",
                    "formatted": "0"
                },
                "without_discount": {
                    "amount": 0,
                    "currency": "",
                    "formatted": "0"
                }
            },
            "timestamps": {
                "created_at": "2023-01-06T20:12:23Z",
                "updated_at": "2023-01-12T16:09:59Z",
                "expires_at": "2023-01-19T16:09:59Z"
            }
        },
        "relationships": {
            "items": {
                "data": null
            },
            "customers": {}
        }
    }
}
```

## The Cart `links` object

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `self` | `string` | The URL of this cart. |

## The Cart `meta` object

The `meta` object includes the [calculated](/docs/commerce-cloud/global-project-settings/settings-overview#calculation-method) card totals.

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `meta.display_price` | `object` | A collection of fields related to the total and currency of this cart. |
| `meta.display_price.with_tax` | `object` | Tax inclusive totals. |
| `meta.display_price.with_tax.amount` | `integer` | The raw total of this cart (inclusive of tax). |
| `meta.display_price.with_tax.currency` | `string` | The currency set for this cart. |
| `meta.display_price.with_tax.formatted` | `string` | The tax inclusive formatted total based on the currency. |
| `meta.display_price.without_tax` | `object` | Tax exclusive totals. |
| `meta.display_price.without_tax.amount` | `integer` | The raw total of this cart (exclusive of tax). |
| `meta.display_price.without_tax.currency` | `string` | The currency set for this cart. |
| `meta.display_price.without_tax.formatted` | `string` | The tax exclusive formatted total based on the currency. |
| `meta.display_price.tax` | `object` | Tax totals. |
| `meta.display_price.tax.amount` | `integer` | The subtotal of the added tax value. |
| `meta.display_price.tax.currency` | `string` | The currency set for the tax. |
| `meta.display_price.tax.formatted` | `string` | The formatted value for the tax subtotal. |
| `meta.display_price.discount` | `object` | The `discount` object describes `amount`, `currency`, `formatted` value of the cart with the discount. |
| `meta.display_price.discount.amount` | `integer` | The total discounted amount applied to the cart. |
| `meta.display_price.discount.currency` | `string` | The currency set for the amount. |
| `meta.display_price.discount.formatted` | `string` | The formatted value for the discount. |
| `meta.display_price.without_discount` | `object` | The `without_discount` object describes `amount`, `currency`, `formatted` value of the cart without the discount. |
| `meta.display_price.without_discount.amount` | `integer` | The total price applied to a cart without the discount. |
| `meta.display_price.without_discount.currency`| `string` | The currency set for this cart. |
| `meta.display_price.without_discount.formatted`| `integer` | The total formatted amount without the discount. |
| `meta.timestamps` | `object` | Timestamps for this cart. |
| `meta.timestamps.created_at` | `string` | The date this cart was created. |
| `meta.timestamps.expires_at` | `string` | The date this cart will expire. |
| `meta.timestamps.updated_at` | `string` | The date this cart was last updated. |
