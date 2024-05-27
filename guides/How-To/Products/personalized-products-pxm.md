---
title: Personalized Products
nav_label: Personalized Products
sidebar_position: 30
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

You can allow your shoppers to add custom text to a product when adding product items to their carts. This is useful, for example, if you have a product like a T-shirt that can be personalized or you sell greetings cards that can be printed with your shoppers personalized messages. You can do this 

- using the API by configure the the `custom_inputs` attribute when you [create a product](https://beta.elasticpath.dev/docs/api/pxm/products/create-product).
- using Commerce Manager when you create/update a product. See [Personalizing Products](https://beta.elasticpath.dev/docs/commerce-manager/product-experience-manager/Products/personalizing-products).

Below is an example of a create a product request with the `custom_inputs` attribute configured.

```json
{
  "data": {
    "type": "product",
    "attributes": {
    /*** other product attributes ommitted ***/
    "custom_inputs": {
              "input": {
                  "name": "Input",
                  "validation_rules": [
                      {
                          "type": "string",
                          "options": {
                              "max_length": 50
                          }
                      }
                  ],
                  "required": false
              }
          }
      }
  }
}
```

When configuring the `custom_inputs` attribute:

- You can rename `input` to something more representative of the input that shoppers are adding, for example, `message` or `front`.
- `name` is the name that is displayed in your storefront.
- You can add validation rules. For example, the input field must be a `string` and/or up to 255 characters in length. The limit is 255 characters.
- You can specify if the input field is required.

For example, you may sell T-shirts that can have personalized text on the front and back of the shirt.

```json
{
  "data": {
    "type": "product",
    "attributes": {
    /*** other product attributes ommitted ***/
    "custom_inputs": {
        "front": {
          "name": "T-Shirt Front",
          "validation_rules": [
            {
              "type": "string",
              "options": {
                "max_length": 50
              }
            }
          ],
          "required": false
        },
        "back": {
          "name": "T-Shirt Back",
          "validation_rules": [
            {
              "type": "string",
              "options": {
                "max_length": 50
              }
            }
          ],
          "required": false
        }
      }
    }
  }
}
```

Once you have configured your custom inputs on a product, you must configure the custom inputs in your orders. See [adding your products to carts](https://beta.elasticpath.dev/docs/carts-orders/carts/cart-items/add-product-to-cart). When the product is added to the cart, those custom inputs are supplied.

```json
{
  "data": {
    "type": "cart_item",
    "attributes": {
    /*** other product attributes ommitted ***/
    "custom_inputs": {
        "T-Shirt Front": "Jane",
        "T_Shirt Back": "Jane Doe's Dance Academy"
        }
      }
   }
}
```

If the same product has different `custom_inputs` attributes, then these are added as separate items in a cart.

The `custom_inputs` attribute is stored in the cart item and must not exceed 1MB. When a cart is [checked out](https://beta.elasticpath.dev/docs/api/carts/checkout), the `custom_inputs` attribute becomes part of the [order](https://beta.elasticpath.dev/docs/api/carts/orders).

When you add products to a cart with `custom_inputs`, there are certain limitations on the usage of the `custom_inputs` with the following promotion types:

- For [Free Gift Promotions](https://beta.elasticpath.dev/docs/commerce-cloud/promotions/promotion-management/create-free-gift-promotion), you can add `custom_inputs` to gift items.
- For [Fixed Bundle Discount Promotions](https://beta.elasticpath.dev/docs/commerce-cloud/promotions/promotion-management/create-fixed-bundle-discount-promotion), the promotion applies as long as the cart contains the bundle SKUs even when there are different `custom_inputs`.
- For [X for Y Discount Promotion](https://beta.elasticpath.dev/docs/commerce-cloud/promotions/promotion-management/create-X-for-Y-discount-promotion) and [X for amount discount promotion](https://beta.elasticpath.dev/docs/commerce-cloud/promotions/promotion-management/create-X-for-amount-discount-promotion), the promotion applies when there are two SKUs with the same `custom_inputs`. The promotion does not apply when there are different `custom_inputs` and the SKUs are in different line items.

## Related Resources

- [Locales](https://beta.elasticpath.dev/docs/commerce-manager/product-experience-manager/locales/)
- [Catalogs](https://beta.elasticpath.dev/docs/pxm/catalogs)
- [Price Books](https://beta.elasticpath.dev/docs/api/pxm/pricebooks/price-books-introduction)
- [Products API](https://beta.elasticpath.dev/docs/api/pxm/products/products)
