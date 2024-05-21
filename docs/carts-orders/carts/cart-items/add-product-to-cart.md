---
title: Add Product to Cart
nav_label: Add Product to Cart
sidebar_position: 2
---

Adding a Product to Cart is the most common Cart action. If you want to add any [custom products](/docs/commerce-cloud/carts/cart-items/add-custom-item-to-cart) or [promotions](/docs/commerce-cloud/carts/cart-items/add-promotion-to-cart), you need to do that as a separate action.

## Dynamic Bundles

A bundle is a purchasable product that is composed of a combination of two or more products that you want to sell together. You can create multiple components within a bundle. Each component can have one or more options. Each option is a product and a quantity. You can configure minimum and/or maximum values for the number of product options in a component that your shoppers can select. For example, you can enable a shopper to select 1 or more product options from a list of 10. These are called [dynamic bundles](/docs/pxm/products/pxm-bundles#dynamic-bundles).

Your dynamic bundles are displayed in your published catalogs. Shoppers make their selections. A shoppers selections are stored in the [configure a shopper bundle](/docs/pxm/catalogs/shopper-catalog/configure-shopper-bundle) endpoint. The shoppers selections are stored in a `bundle_configuration` which is supplied in the `add product to cart` request.

 ```json
"bundle_configuration": {
                "selected_options": {
                    "games": {
                        "d7b79eb8-19d8-45ea-86ed-2324a604dd9c": 1
                    },
                    "toys": {
                        "0192ccdd-6d33-4898-87d7-c4d87f2bf8ea": 1,
                        "1aea6f97-f0d9-452c-b3c1-7fb5629ead82": 1
                    }
                }
         }
```

When a cart is checked out, the options a shopper selected are added to the order. See [order items](/docs/commerce-cloud/orders/orders-api/order-items).

## Personalized Products

You can allow your shoppers to add custom text to a product when adding product items to their carts. This is useful, for example, if you have a product like a T-shirt that can be personalized. You can do this using the `custom_inputs` attribute. The `custom_inputs` attribute must be an object. For example, you sell greetings cards that can be printed with your shoppers personalized messages.

First, you must configure a `custom_inputs` attribute when [creating a new product](/docs/pxm/products/ep-pxm-products-api/create-a-product) or [updating an existing product](/docs/pxm/products/ep-pxm-products-api/update-a-product). Once you have defined your custom inputs on a product, you must configure the custom inputs in your orders.

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

When the product is added to the cart, those custom inputs are supplied.

```json
{
  "data": {
    "id": "productID",
    "type": "cart_item",
    /*** other cart item attributes ommitted ***/
    "custom_inputs": {
        "T-Shirt Front": "Jane",
        "T_Shirt Back": "Jane Doe's Dance Academy"
        }
      }
    }
```

If the same product has different `custom_inputs` attributes, then these are added as separate items in a cart.

The `custom_inputs` attribute is stored in the cart item and must not exceed 1MB. When a cart is [checked out](/docs/carts-orders/checkout), the `custom_inputs` attribute becomes part of the [order](/docs/commerce-cloud/orders/orders-api/get-an-order).

When you add products to a cart with `custom_inputs`, there are certain limitations on usage of the `custom_inputs` with the following promotion types:

- For [Free Gift Promotions](/docs/promotions/promotion-management/create-free-gift-promotion), you can add `custom_inputs` to gift items.
- For [Fixed Bundle Discount Promotions](/docs/promotions/promotion-management/create-fixed-bundle-discount-promotion), the promotion applies as long as the cart contains the bundle SKUs even when there are different `custom_inputs`.
- For [X for Y Discount Promotion](/docs/promotions/promotion-management/create-X-for-Y-discount-promotion) and [X for amount discount promotion](/docs/promotions/promotion-management/create-X-for-amount-discount-promotion), the promotion applies when there are two SKUs with the same `custom_inputs`. The promotion does not apply when there are different `custom_inputs` and the SKUs are in different line items.

:::note

- Any requests to add a product to cart returns the collection of [cart items](/docs/carts-orders/carts/cart-items/cart-items-overview).
- [Tax items](/docs/carts-orders/cartsax-items#the-tax-item-object) may optionally be added with the product. Only administrators with [client credentials](/guides/Getting%20Started/authentication/Tokens/client-credential-token) are able to do this. If included, they replace any existing taxes on the product.
- The cart currency is set when the first item is added to the cart.
- The product being added to the cart requires a price in the same currency as the other items in the cart. The API returns a `400` error if a price is not defined in the correct currency.

:::

:::caution
A cart can contain a maximum of 100 unique items. Items include products and custom items.
:::

:::caution
There are a number of actions that happen to your [inventory](/docs/pxm/inventories/inventory.mdx) when checking out and paying for an order. For more information, see the [Inventory](/docs/pxm/inventories/inventory.mdx) documentation.
:::

## `POST` Add Product to Cart

```http
https://useast.api.elasticpath.com/v2/carts/:id/items
```

## Parameters

### Path parameters

| Name        | Required | Type     | Description                              |
|:------------|:---------|:---------|:-----------------------------------------|
| `id` | Required | `string` | The unique identifier of the cart that you created. |

### Headers

| Name                      | Required | Type     | Description                |
|:--------------------------|:---------|:---------|:---------------------------|
| `X-MOLTIN-CURRENCY`       | Optional | `string` | Specifies the currency to be used for the products in the cart. If you do not specify a currency, the site’s default currency is used. This header only affects the first item added to the cart. |
| `Authorization`           | Required | `string` | The Bearer token to grant access to the API. |
| `X-Moltin-Customer-Token` | Optional | `string` | The unique identifier of a signed-in customer. Corresponds to the `customer_ids` attribute in a `catalog_rule` object. |
| `EP-Channel`              | Optional | `string` | The channel, such as website or mobile app. Corresponds to the `channel` attribute in a `catalog_rule` object. |
| `EP-Context-Tag`          | Optional | `string` | A tag defined in the store, such as `clearance`. Corresponds to the `tag` attribute in a `catalog_rule` object. |

### Body : adding product using ID

| Name            | Required | Type      | Description                         |
|:----------------|:---------|:----------|:------------------------------------|
| `tax`           | Optional | `array`   | Displays a list of tax items to apply to the cart item. |
| `quantity`      | Required | `integer` | Specifies the number of products to add to the cart. |
| `type`          | Required | `string`  | Specifies the type of the resource, which is `cart_item`. |
| `id`            | Required | `string`  | Specifies the ID of the product you want to add to cart. |
| `custom_inputs` | Optional | `object`  | The custom text to be added to a product. |

### Body : adding product using SKU

| Name            | Required | Type      | Description                         |
|:----------------|:---------|:----------|:------------------------------------|
| `tax`           | Optional | `array`   | Displays a list of tax items to apply to the cart item. |
| `quantity`      | Required | `integer` | Specifies the number of products to add to the cart. |
| `type`          | Required | `string`  | Specifies the type of the resource, which is `cart_item`. |
| `sku`           | Required | `string`  | Specifies the item SKU that you want to add to cart. |
| `custom_inputs` | Optional | `object`  | The custom text to be added to a product. |

## Request Example - Adding a product

### Curl

```bash
curl -X POST https://euwest.api.elasticpath.com/v2/carts/:id/items \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
        "data": {
          "id": "df32387b-6ce6-4802-9b90-1126a5c5a54f",
          "type": "cart_item",
          "quantity": 1
          "custom_inputs": {
              "name": {
                "T-Shirt Front": "Jane",
                "T-Shirt Back": "Jane Doe's Dance Academy"
               }
            }
         }
     }
```

### JavaScript SDK

```javascript
const reference = "XXXX";
const productId = "25617d3e-14a6-434c-bfab-3fda87517aaf";
const quantity = 1;

// Optional: The default value of isSku is `false`, which adds products by product ID. To add products by SKU, set to `true`.
const isSku = false;

// Where `EPCC` is an authenticated client
await EPCC.Cart(reference).AddProduct(productId, quantity, (data = {}), isSku);
```

## Response Example - Adding a product

`201 Created`

```json
{
    "data": [
        {
            "id": "8838d444-87f4-411f-9d89-9fc809f0b1cb",
            "type": "cart_item",
            "product_id": "9eda5ba0-4f4a-4074-8547-ccb05d1b5981",
            "name": "Shirt",
            "description": "T-shirt.",
            "sku": "CWLP100BLK",
            "custom_inputs": {
              "T-Shirt Front": "Jane",
              "T-Shirt Back": "Jane Doe's Dance Academy"
            },
            "image": {
                "mime_type": "image/png",
                "file_name": "lamp7-trans.png",
                "href": "https://files-eu.epusercontent.com/e8c53cb0-120d-4ea5-8941-ce74dec06038/7cc08cbb-256e-4271-9b01-d03a9fac9f0a.png"
            },
            "quantity": 1,
            "manage_stock": true,
            "unit_price": {
                "amount": 47500,
                "currency": "USD",
                "includes_tax": true
            },
            "value": {
                "amount": 47500,
                "currency": "USD",
                "includes_tax": true
            },
            "links": {
                "product": "https://useast.api.elasticpath.com/products/9eda5ba0-4f4a-4074-8547-ccb05d1b5981"
            },
            "meta": {
                "display_price": {
                    "with_tax": {
                        "unit": {
                            "amount": 47500,
                            "currency": "USD",
                            "formatted": "47500"
                        },
                        "value": {
                            "amount": 47500,
                            "currency": "USD",
                            "formatted": "475.00"
                        }
                    },
                    "without_tax": {
                        "unit": {
                            "amount": 47500,
                            "currency": "USD",
                            "formatted": "47500"
                        },
                        "value": {
                            "amount": 47500,
                            "currency": "USD",
                            "formatted": "475.00"
                        }
                    }
                },
                "timestamps": {
                    "created_at": "2018-05-08T10:00:20.171620445Z",
                    "updated_at": "2018-05-08T10:00:20.171620445Z"
                }
            },
            "catalog_id": "92073438-7640-4ace-9670-c8c5c1a89cd7",
            "catalog_source": "pim"
        }
    ],
    "meta": {
        "display_price": {
            "with_tax": {
                "amount": 47500,
                "currency": "USD",
                "formatted": "475.00"
            },
            "without_tax": {
                "amount": 47500,
                "currency": "USD",
                "formatted": "475.00"
            }
        },
        "timestamps": {
            "created_at": "2018-05-08T10:00:20.171620445Z",
            "updated_at": "2018-05-08T10:00:20.171620445Z",
            "expires_at": "2018-05-20T10:00:20.171620445Z"
        }
    }
}
```

## Request Example - Adding a Bundle

### Curl

```bash
curl -X POST https://useast.api.elasticpath.com/v2/carts/:id/items \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d ${
  "data": {
    "id": "5ab67bb3-b2c3-4348-af33-e370bd39b0c9",
    "type": "cart_item",
    "quantity": 1,
    "bundle_configuration": {
      "selected_options": {
        "tshirt": {
          "23759a57-13c1-4887-9ec2-fb47444751bd": 1
        },
        "comics": {
          "c7bcf7fd-1fab-4635-8ae0-7f187a9dbbce": 1,
          "d9768b40-cf28-406e-bafc-a6d130627eca": 1
        }
      }
    }
  }
}
```

## Response Example - Adding a Bundle

```json
{
  "data": {
    "id": "5ab67bb3-b2c3-4348-af33-e370bd39b0c9",
    "type": "product",
    "attributes": {
      "name": "T-shirt and comics",
      "description": "A t-shirt and two comics",
      "components": {
        "tshirt": {
          "name": "T-shirt",
          "options": [
            {
              "id": "23759a57-13c1-4887-9ec2-fb47444751bd",
              "quantity": 1,
              "type": "product"
            },
            {
              "id": "ffb9024e-82ce-49f8-b2a1-95ce0a452056",
              "quantity": 1,
              "type": "product"
            }
          ]
        },
        "comics": {
          "name": "Comics",
          "minimum": 2,
          "maximum": 2,
          "options": [
            {
              "id": "c7bcf7fd-1fab-4635-8ae0-7f187a9dbbce",
              "quantity": 1,
              "type": "product"
            },
            {
              "id": "d9768b40-cf28-406e-bafc-a6d130627eca",
              "quantity": 1,
              "type": "product"
            },
            {
              "id": "623b47ee-f43b-45ab-8939-cc6269c323ec",
              "quantity": 1,
              "type": "product"
            },
            {
              "id": "bfdf583d-aad8-4b5c-879a-06d8f4304988",
              "quantity": 1,
              "type": "product"
            }
          ]
        }
      },
      "price": {
        "USD": {
          "amount": 4000,
          "includes_tax": false
        }
      },
      "sku": "tshcom",
      "published_at": "2022-02-28T16:40:39.731Z"
    },
    "meta": {
      "bundle_configuration": {
        "selected_options": {
          "tshirt": {
            "23759a57-13c1-4887-9ec2-fb47444751bd": 1
          },
          "comics": {
            "c7bcf7fd-1fab-4635-8ae0-7f187a9dbbce": 1,
            "d9768b40-cf28-406e-bafc-a6d130627eca": 1
          }
        }
      }
    }
  }
}
```

## Response Example - Automatically Adding Free Gift Items

The following response example is returned when free gift items are automatically added to the cart for all the eligible products:

:::caution
(Beta) The `auto_add_quantity` field indicates the number of items automatically added as free gifts to the cart.
:::

```json
{
    "data": [
        {
            "id": "78b81dac-c90a-4d9a-9d21-32a83c56060e",
            "type": "cart_item",
            "product_id": "5a4662d2-9a2b-4f6e-a215-2970db914b0c",
            "name": "sku1",
            "description": "sku1",
            "sku": "sku1",
            "slug": "sku1",
            "image": {
                "mime_type": "",
                "file_name": "",
                "href": ""
            },
            "quantity": 1,
            "manage_stock": false,
            "unit_price": {
                "amount": 10000,
                "currency": "USD",
                "includes_tax": false
            },
            "value": {
                "amount": 10000,
                "currency": "USD",
                "includes_tax": false
            },
            "links": {
                "product": "https://useast.api.elasticpath.com/v2/products/5a4662d2-9a2b-4f6e-a215-2970db914b0c"
            },
            "meta": {
                "display_price": {
                    "with_tax": {
                        "unit": {
                            "amount": 10000,
                            "currency": "USD",
                            "formatted": "$100.00"
                        },
                        "value": {
                            "amount": 10000,
                            "currency": "USD",
                            "formatted": "$100.00"
                        }
                    },
                    "without_tax": {
                        "unit": {
                            "amount": 10000,
                            "currency": "USD",
                            "formatted": "$100.00"
                        },
                        "value": {
                            "amount": 10000,
                            "currency": "USD",
                            "formatted": "$100.00"
                        }
                    },
                    "tax": {
                        "unit": {
                            "amount": 0,
                            "currency": "USD",
                            "formatted": "$0.00"
                        },
                        "value": {
                            "amount": 0,
                            "currency": "USD",
                            "formatted": "$0.00"
                        }
                    },
                    "discount": {
                        "unit": {
                            "amount": 0,
                            "currency": "USD",
                            "formatted": "$0.00"
                        },
                        "value": {
                            "amount": 0,
                            "currency": "USD",
                            "formatted": "$0.00"
                        }
                    },
                    "without_discount": {
                        "unit": {
                            "amount": 10000,
                            "currency": "USD",
                            "formatted": "$100.00"
                        },
                        "value": {
                            "amount": 10000,
                            "currency": "USD",
                            "formatted": "$100.00"
                        }
                    }
                },
                "timestamps": {
                    "created_at": "2023-12-07T22:00:21Z",
                    "updated_at": "2023-12-07T22:00:21Z"
                }
            },
            "catalog_id": "09b9359f-897f-407f-89a2-702e167fe781",
            "catalog_source": "pim"
        },
        {
            "id": "de623b2b-953d-413a-a2d1-3321791904a1",
            "type": "cart_item",
            "product_id": "84f6770a-724c-4430-a4ec-0873a0f7500a",
            "name": "gift",
            "description": "gift",
            "sku": "gift",
            "slug": "gift",
            "image": {
                "mime_type": "",
                "file_name": "",
                "href": ""
            },
            "quantity": 1,
            "auto_add_quantity": 1,
            "manage_stock": false,
            "unit_price": {
                "amount": 500,
                "currency": "USD",
                "includes_tax": false
            },
            "value": {
                "amount": 500,
                "currency": "USD",
                "includes_tax": false
            },
            "discounts": [
                {
                    "amount": {
                        "amount": -500,
                        "currency": "USD",
                        "includes_tax": false
                    },
                    "code": "auto_b39e5175-9145-4807-bc00-f668d7a5e643",
                    "id": "b39e5175-9145-4807-bc00-f668d7a5e643"
                }
            ],
            "links": {
                "product": "https://useast.api.elasticpath.com/v2/products/84f6770a-724c-4430-a4ec-0873a0f7500a"
            },
            "meta": {
                "display_price": {
                    "with_tax": {
                        "unit": {
                            "amount": 0,
                            "currency": "USD",
                            "formatted": "$0.00"
                        },
                        "value": {
                            "amount": 0,
                            "currency": "USD",
                            "formatted": "$0.00"
                        }
                    },
                    "without_tax": {
                        "unit": {
                            "amount": 0,
                            "currency": "USD",
                            "formatted": "$0.00"
                        },
                        "value": {
                            "amount": 0,
                            "currency": "USD",
                            "formatted": "$0.00"
                        }
                    },
                    "tax": {
                        "unit": {
                            "amount": 0,
                            "currency": "USD",
                            "formatted": "$0.00"
                        },
                        "value": {
                            "amount": 0,
                            "currency": "USD",
                            "formatted": "$0.00"
                        }
                    },
                    "discount": {
                        "unit": {
                            "amount": -500,
                            "currency": "USD",
                            "formatted": "-$5.00"
                        },
                        "value": {
                            "amount": -500,
                            "currency": "USD",
                            "formatted": "-$5.00"
                        }
                    },
                    "without_discount": {
                        "unit": {
                            "amount": 500,
                            "currency": "USD",
                            "formatted": "$5.00"
                        },
                        "value": {
                            "amount": 500,
                            "currency": "USD",
                            "formatted": "$5.00"
                        }
                    },
                    "discounts": {
                        "auto_b39e5175-9145-4807-bc00-f668d7a5e643": {
                            "amount": -500,
                            "currency": "USD",
                            "formatted": "-$5.00"
                        }
                    }
                },
                "timestamps": {
                    "created_at": "2023-12-07T22:00:21Z",
                    "updated_at": "2023-12-07T22:00:21Z"
                }
            },
            "catalog_id": "09b9359f-897f-407f-89a2-702e167fe781",
            "catalog_source": "pim"
        }
    ],
    "meta": {
        "display_price": {
            "with_tax": {
                "amount": 10000,
                "currency": "USD",
                "formatted": "$100.00"
            },
            "without_tax": {
                "amount": 10000,
                "currency": "USD",
                "formatted": "$100.00"
            },
            "tax": {
                "amount": 0,
                "currency": "USD",
                "formatted": "$0.00"
            },
            "discount": {
                "amount": -500,
                "currency": "USD",
                "formatted": "-$5.00"
            },
            "without_discount": {
                "amount": 10500,
                "currency": "USD",
                "formatted": "$105.00"
            },
            "shipping": {
                "amount": 0,
                "currency": "USD",
                "formatted": "$0.00"
            }
        },
        "timestamps": {
            "created_at": "2023-12-07T22:00:21Z",
            "updated_at": "2023-12-07T22:00:21Z",
            "expires_at": "2023-12-14T22:00:21Z"
        },
        "messages": [
            {
                "source": {
                    "type": "cart_item",
                    "id": "de623b2b-953d-413a-a2d1-3321791904a1"
                },
                "title": "Discount Added",
                "description": "Item discount has been added."
            }
        ]
    }
}
```

## Errors
 
The following response is received when the currency of automatically added free gift items do not match with the currency of the cart. The cart response includes an `errors` section addressing the issue with free gift items.

```json
{
    "data": [
        {
            "id": "a775bd97-3a6b-4c73-8ce8-37bf0760065c",
            "type": "cart_item",
            "product_id": "505aa5c4-e475-43bd-91ca-4d587fdd9c62",
            "name": "sku2",
            "description": "sku2",
            "sku": "sku2",
            "slug": "sku2",
            "image": {
                "mime_type": "",
                "file_name": "",
                "href": ""
            },
            "quantity": 1,
            "manage_stock": false,
            "unit_price": {
                "amount": 9000,
                "currency": "USD",
                "includes_tax": false
            },
            "value": {
                "amount": 9000,
                "currency": "USD",
                "includes_tax": false
            },
            "links": {
                "product": "https://useast.api.elasticpath.com/v2/products/505aa5c4-e475-43bd-91ca-4d587fdd9c62"
            },
            "meta": {
                "display_price": {
                    "with_tax": {
                        "unit": {
                            "amount": 9000,
                            "currency": "USD",
                            "formatted": "$90.00"
                        },
                        "value": {
                            "amount": 9000,
                            "currency": "USD",
                            "formatted": "$90.00"
                        }
                    },
                    "without_tax": {
                        "unit": {
                            "amount": 9000,
                            "currency": "USD",
                            "formatted": "$90.00"
                        },
                        "value": {
                            "amount": 9000,
                            "currency": "USD",
                            "formatted": "$90.00"
                        }
                    },
                    "tax": {
                        "unit": {
                            "amount": 0,
                            "currency": "USD",
                            "formatted": "$0.00"
                        },
                        "value": {
                            "amount": 0,
                            "currency": "USD",
                            "formatted": "$0.00"
                        }
                    },
                    "discount": {
                        "unit": {
                            "amount": 0,
                            "currency": "USD",
                            "formatted": "$0.00"
                        },
                        "value": {
                            "amount": 0,
                            "currency": "USD",
                            "formatted": "$0.00"
                        }
                    },
                    "without_discount": {
                        "unit": {
                            "amount": 9000,
                            "currency": "USD",
                            "formatted": "$90.00"
                        },
                        "value": {
                            "amount": 9000,
                            "currency": "USD",
                            "formatted": "$90.00"
                        }
                    }
                },
                "timestamps": {
                    "created_at": "2023-12-19T00:13:16Z",
                    "updated_at": "2023-12-19T00:13:16Z"
                }
            },
            "catalog_id": "09b9359f-897f-407f-89a2-702e167fe781",
            "catalog_source": "pim"
        }
    ],
    "errors": [
        {
            "status": 400,
            "title": "Could not add product",
            "detail": "This product does not have a price for USD",
            "meta": {
                "id": "f2b68648-9621-45a3-aed6-1b526b0f5beb",
                "sku": "gift2"
            }
        }
    ],
    "meta": {
        "display_price": {
            "with_tax": {
                "amount": 9000,
                "currency": "USD",
                "formatted": "$90.00"
            },
            "without_tax": {
                "amount": 9000,
                "currency": "USD",
                "formatted": "$90.00"
            },
            "tax": {
                "amount": 0,
                "currency": "USD",
                "formatted": "$0.00"
            },
            "discount": {
                "amount": 0,
                "currency": "USD",
                "formatted": "$0.00"
            },
            "without_discount": {
                "amount": 9000,
                "currency": "USD",
                "formatted": "$90.00"
            },
            "shipping": {
                "amount": 0,
                "currency": "USD",
                "formatted": "$0.00"
            }
        },
        "timestamps": {
            "created_at": "2023-12-19T00:13:15Z",
            "updated_at": "2023-12-19T00:13:16Z",
            "expires_at": "2023-12-26T00:13:16Z"
        },
        "promotion_suggestions": [
            {
                "promotion_id": "76178741-2314-40f6-97f9-3775611158e3",
                "code": "auto_76178741-2314-40f6-97f9-3775611158e3",
                "info": "gift2",
                "bundle": [
                    {
                        "targets": [
                            "gift2"
                        ],
                        "quantity": 1,
                        "auto_add_free_gift": true
                    }
                ],
                "message": "Gift"
            }
        ]
    }
}
```
