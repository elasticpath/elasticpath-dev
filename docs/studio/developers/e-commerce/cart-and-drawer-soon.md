---
title: Cart & Drawer
nav_label: Cart & Drawer
sidebar_position: 50
---

:::note
This generator is only available on eCommerce plans.
:::

![Shows frontend cart and drawer](/assets/unstack-cart-and-drawer.png)

The Cart generator allows you to show the products that your shoppers have selected in your storefront.

## Attributes

The following table describes the attributes you can configure for the Cart generator.

| Option | Format | Required | Description                                                                                                                    |
| --- | --- | --- |--------------------------------------------------------------------------------------------------------------------------------| 
| `products` | `object` | Required | A list of product elements that a shopper has in their cart. See [The `products` object](#the-products-object).                |
| `dataRef` | `DataLocater` | Required | The options of a product to be iterated on.                                                                                    |
| `il8n` | `object` | Required | An object that is used to represent total price information in different languages. See [The `il8n` object](#the-il8n-object). |

### The `products` object

| Option             | Format    | Required | Description                                                                                                                                                                                                                                                                   |
|--------------------|-----------| --- |-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------| 
| `online_store_url` | `link`    | Required | A link to the page showing the product details.                                                                                                                                                                                                                               |
| `media`            | `array`   | Required | An array of media elements used to show product images. To get the primary image of a product, use `product.media[0].src`.                                                                                                                                                    |
| `name`             | `string`  | Required | The name of a product.                                                                                                                                                                                                                                                        |
| `options`          | `array`   | Required | An array of options that describe the characteristics of a product. The options are structured as follows. <ul><li>`label`: A human-readable name for an option. For example, `Color`,</li><li>`name`: An internal identifier for an option. For example, `color`. </li></ul> |
| `id`               | `string`  | Required |                                                                                                                                                      |
| `quantity`         | `integer` | Required | An object that stores relevant information for the total price of the items in a cart represented in different languages.                                                                                                                                                     |


### The `il8n` object

| Option           | Format    | Required | Description                                                                                                                                             |
|------------------|-----------| --- |---------------------------------------------------------------------------------------------------------------------------------------------------------| 
| `il8n.sub_total` | `integer` | Required | The international region used for the sub total amount in a transaction, which is the total amount before any taxes, shipping or discounts are applied. |
| `il8n.price`     | `integer` | Required | The international region used for the total price of all the items in your cart with all taxes, shipping and discounts applied.                         |
