---
title: Bulk Add Items to Cart
nav_label: Bulk Add Items to Cart
sidebar_position: 130
---

The bulk add feature allows shoppers to add an array of items to their cart in one action, rather than adding each item one at a time. Shoppers can choose to add items using either the SKU or product ID. Additionally, they can also include quantity and shipping group details in bulk requests. This minimizes the time for shoppers while adding items to their cart. Shoppers can even add multiple items with the same or different shipping groups to their cart.

When you add multiple items that qualify for free gifts to the cart, the corresponding free gifts for all eligible products are also automatically added to the cart.

An example for bulk add is:

```json
{
    "data": [
        {
            "type": "cart_item",
            "sku": "sku-1",
            "quantity": 1
        },
        {
            "type": "cart_item",
            "sku": "sku-2",
            "quantity": 1
        }
    ],
    "options": {
        "add_all_or_nothing": true
    }
}
```

With the bulk add items to cart capability, you can use one or more of the following cart actions in a transaction:

- [Add Product to Cart](/docs/api/carts/cart-merge#add-product-to-cart)
- [Add Custom Item to Cart](/docs/api/carts/cart-merge#add-custom-item-to-cart)
- [Add Promotion to Cart](/docs/api/carts/cart-merge#add-promotion-to-cart)

:::caution
The request body depends on the type of items that you want to add, such as promotion, custom or product.
:::

## Dynamic Bundles

A bundle is a purchasable product that is composed of a combination of two or more products that you want to sell together. You can create multiple components within a bundle. Each component can have one or more options. Each option is a product and a quantity. You can configure minimum and/or maximum values for the number of product options in a component that your shoppers can select. For example, you can enable a shopper to select 1 or more product options from a list of 10. These are called [dynamic bundles](/docs/api/pxm/products/products#dynamic-bundles).

Your dynamic bundles are displayed in your published catalogs. Shoppers make their selections. A shoppers selections are stored in the [configure a shopper bundle](/docs/api/pxm/catalog/configure-by-context-product) endpoint. The shoppers selections are stored in a `bundle_configuration` which is supplied in the `add product to cart` request.

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

When a cart is checked out, the options a shopper selected are added to the order. See [order items](/docs/api/carts/get-order-items).

## Personalized Products

You can allow your shoppers to add custom text to a product when adding product items to their carts. This is useful, for example, if you have a product like a T-shirt that can be personalized. You can do this using the `custom_inputs` attribute. The `custom_inputs` attribute must be an object. For example, you sell greetings cards that can be printed with your shoppers personalized messages.

Once you have defined your custom inputs on a product, you must configure the custom inputs in your orders.

For example, a birthday card may have custom inputs for name and message defined for a product.

```json
{
  "custom_inputs": {
    "name": {
      "name": "Name",
      "validation_rules": {
        "type": "string"
      },
      "message": {
        "name": "Message",
        "validation_rules": {
          "type": "string"
        }
      }
    }
  }
}
```

When the product is added to the cart, those custom inputs are supplied.

```json
{
  "custom_inputs": {
    "name": {
      "name": "Fred",
      "message": "Happy Birthday"
    }
  }
}
```

If the same product has different `custom_inputs` attributes, then these are added as separate items in a cart.

The `custom_inputs` attribute is stored in the cart item and must not exceed 1MB. When a cart is [checked out](/docs/api/carts/checkout), the `custom_inputs` attribute becomes part of the [order](/docs/api/carts/get-an-order) items.

When you add products to a cart with `custom_inputs`, there are certain limitations on usage of the `custom_inputs` with the following promotion types:

- For [Free Gift Promotions](/docs/api/promotions/create-a-promotion#request), you can add `custom_inputs` to gift items.
- For [Fixed Bundle Discount Promotions](/docs/api/promotions/create-a-promotion#request), the promotion applies as long as the cart contains the bundle SKUs even when there are different `custom_inputs`.
- For [X for Y Discount Promotion](/docs/api/promotions/create-a-promotion#request) and [X for amount discount promotion](/docs/api/promotions/create-a-promotion#request), the promotion applies when there are two SKUs with the same `custom_inputs`. The promotion does not apply when there are different `custom_inputs` and the SKUs are in different line items.

## `POST` Bulk Add to Cart

```text
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
| `X-Moltin-Customer-Token` | Required | `string` | The unique identifier of a signed-in customer. Corresponds to the `customer_ids` attribute in a `catalog_rule` object. |
| `EP-Channel`              | Required | `string` | The channel, such as website or mobile app. Corresponds to the `channel` attribute in a `catalog_rule` object. |
| `EP-Context-Tag`          | Required | `string` | A tag defined in the store, such as `clearance`. Corresponds to the `tag` attribute in a `catalog_rule` object. |

### Body

| Name                         | Required | Type      | Description            |
|:-----------------------------|:---------|:----------|:-----------------------|
| `options.add_all_or_nothing` | Optional | `boolean` | When `true`, if an error occurs for any item, no items are added in the cart. When `false`, valid items are added in the cart and the items with errors are reported in the response. Default is `true`. |

#### Custom item body

| Name                 | Required | Type      | Description                    |
|:---------------------|:---------|:----------|:-------------------------------|
| `type`               | Required | `string`  | The type of item, such as `custom_item`. |
| `name`               | Required | `string`  | Specifies the name of the item. |
| `sku`                | Required | `string`  | The SKU of the item.           |
| `description`        | Optional | `string`  | Specifies the description of the item. |
| `quantity`           | Required | `integer` | Specifies the amount of items to add to the cart. |
| `price.amount`       | Required | `integer` | The price of the items.        |
| `price.includes_tax` | Optional | `boolean` | If true, the price includes tax. The default is true. |
| `amount`             | Required | `integer` | Specifies the total cost of the items added to the cart. |
| `tax`                | Optional | `array`   | Specifies a list of tax items to apply to the cart item. **Note**: Only administrators with client credentials can use this field. |
| `custom_inputs`      | Optional | `object`  | The custom text to be added to a product. See [custom_inputs](/docs/api/pxm/products/create-product#personalizing-products). |
| `shipping_group_id` | Optional | `string` | The shipping group ID to be added. See [Get a Cart Shipping Group by ID](/docs/ship-groups/shipping-groups/shipping-groups-api/get-a-cart-shipping-group-by-id). |

#### Cart item body

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `type`          | Required | `string` | Specifies the type, such as `cart_item`. |
| `id`            | Required | `string` | Specifies the ID of the item that you want to add to cart. **Note**: Ensure that you select only one of the two options, by SKU or by product id. |
| `sku`           | Required | `string` | Specifies the item SKU that you want to add to cart. **Note**: Ensure that you select only one of the two options, by SKU or by product id. |
| `custom_inputs` | Optional | `object` | The custom text to be added to a product. See [custom_inputs](/docs/api/pxm/products/create-product#personalizing-products) |
| `shipping_group_id` | Optional | `string` | The shipping group ID to be added. See [Get a Cart Shipping Group by ID](/docs/ship-groups/shipping-groups/shipping-groups-api/get-a-cart-shipping-group-by-id). |

#### Promotion item body

| Name   | Required | Type     | Description                                   |
|:-------|:---------|:---------|:----------------------------------------------|
| `type` | Required | `string` | Specifies the promotional item, such as `promotion_item`. |
| `code` | Required | `string` | Specifies the code for the promotional item, such as `promoCode`. |

## Request Example - Product ID

### Curl

```json
curl -X POST https://useast.api.elasticpath.com//v2/carts/:id/items \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -H "X-Moltin-Customer-Token: XXXX" \
     -d $ {
        "data": [
        {
        "type": "custom_item",
        "name": "My Custom Item",
        "sku": "my-custom-item",
        "description": "My first custom item!",
        "custom_inputs": {
          "personalization": "My personal message"
      },
        "quantity": 1,
        "price": {
            "amount": 20000,
            "includes_tax": true
      }
    },
    {
        "type": "cart_item",
        "id": "838520de-b64a-4a0e-9d4c-f5bb53c83ec3",
        "quantity": 1
    },
    {
        "type": "promotion_item",
        "code": "5off"
    }
  ],
        "options": {
            "add_all_or_nothing": true
    }
}
```

#### JavaScript SDK

```javascript
const reference = "XXXX";
const items = [
    {
        type: "custom_item",
        name: "My Custom Item",
        sku: "my-custom-item",
        description: "My first custom item!",
        quantity: 1,
        price: {
            amount: 20000,
            includes_tax: true,
        },
    },
    {
        type: "cart_item",
        id: "838520de-b64a-4a0e-9d4c-f5bb53c83ec3",
        quantity: 1,
    },
    {
        type: "promotion_item",
        code: "5off",
    },
];

// Where `EPCC` is an authenticated client
await EPCC.Cart(reference).BulkAdd(items);
```

## Response Example - Product ID

`201 Created`

```json
{
    "data": [
        {
            "id": "931dcd00-7621-4bb6-95bb-12fc58b10d7d",
            "type": "custom_item",
            "name": "My Custom Item",
            "description": "My first custom item!",
            "sku": "my-custom-item",
            "slug": "",
            "custom_inputs": {
                "personalization": "My personal message"
            },
            "image": {
                "mime_type": "",
                "file_name": "",
                "href": ""
            },
            "quantity": 1,
            "manage_stock": false,
            "unit_price": {
                "amount": 20000,
                "currency": "USD",
                "includes_tax": true
            },
            "value": {
                "amount": 20000,
                "currency": "USD",
                "includes_tax": true
            },
            "links": {},
            "meta": {
                "display_price": {
                    "with_tax": {
                        "unit": {
                            "amount": 20000,
                            "currency": "USD",
                            "formatted": "$200.00"
                        },
                        "value": {
                            "amount": 20000,
                            "currency": "USD",
                            "formatted": "$200.00"
                        }
                    },
                    "without_tax": {
                        "unit": {
                            "amount": 20000,
                            "currency": "USD",
                            "formatted": "$200.00"
                        },
                        "value": {
                            "amount": 20000,
                            "currency": "USD",
                            "formatted": "$200.00"
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
                    }
                },
                "timestamps": {
                    "created_at": "2020-08-27T15:33:49Z",
                    "updated_at": "2020-08-27T15:33:49Z"
                },
                "catalog_id": "92073438-7640-4ace-9670-c8c5c1a89cd7",
                "catalog_source": "pim"
            }
        },
        {
            "id": "2e5ad28c-e112-4a43-a148-37ce842f49c0",
            "type": "cart_item",
            "product_id": "838520de-b64a-4a0e-9d4c-f5bb53c83ec3",
            "name": "Item Name",
            "description": "item description",
            "sku": "item_sku",
            "slug": "item_slug",
            "image": {
                "mime_type": "",
                "file_name": "",
                "href": ""
            },
            "quantity": 1,
            "manage_stock": false,
            "unit_price": {
                "amount": 5000,
                "currency": "USD",
                "includes_tax": false
            },
            "value": {
                "amount": 5000,
                "currency": "USD",
                "includes_tax": false
            },
            "links": {
                "product": "https://useast.api.elasticpath.com/v2/products/838520de-b64a-4a0e-9d4c-f5bb53c83ec3"
            },
            "meta": {
                "display_price": {
                    "with_tax": {
                        "unit": {
                            "amount": 5000,
                            "currency": "USD",
                            "formatted": "$50.00"
                        },
                        "value": {
                            "amount": 5000,
                            "currency": "USD",
                            "formatted": "$50.00"
                        }
                    },
                    "without_tax": {
                        "unit": {
                            "amount": 5000,
                            "currency": "USD",
                            "formatted": "$50.00"
                        },
                        "value": {
                            "amount": 5000,
                            "currency": "USD",
                            "formatted": "$50.00"
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
                    }
                },
                "timestamps": {
                    "created_at": "2020-08-27T15:33:49Z",
                    "updated_at": "2020-08-27T15:33:49Z"
                }
            },
            "catalog_id": "92073438-7640-4ace-9670-c8c5c1a89cd7",
            "catalog_source": "pim"
        },
        {
            "id": "1425513e-8446-4e84-a72b-8e77d47f906f",
            "type": "promotion_item",
            "promotion_id": "38ef7ac1-2066-4507-90c9-2de4b49d3717",
            "name": "$5 off",
            "description": "Promotion",
            "sku": "5off",
            "slug": "",
            "image": {
                "mime_type": "",
                "file_name": "",
                "href": ""
            },
            "quantity": 1,
            "manage_stock": false,
            "unit_price": {
                "amount": -500,
                "currency": "USD",
                "includes_tax": false
            },
            "value": {
                "amount": -500,
                "currency": "USD",
                "includes_tax": false
            },
            "links": {},
            "meta": {
                "display_price": {
                    "with_tax": {
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
                    "without_tax": {
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
                    }
                },
                "timestamps": {
                    "created_at": "2020-08-27T15:33:49Z",
                    "updated_at": "2020-08-27T15:33:49Z"
                }
            },
            "catalog_id": "92073438-7640-4ace-9670-c8c5c1a89cd7",
            "catalog_source": "pim"
        }
    ],
    "meta": {
        "display_price": {
            "with_tax": {
                "amount": 24500,
                "currency": "USD",
                "formatted": "$245.00"
            },
            "without_tax": {
                "amount": 24500,
                "currency": "USD",
                "formatted": "$245.00"
            },
            "tax": {
                "amount": 0,
                "currency": "USD",
                "formatted": "$0.00"
            }
        },
        "timestamps": {
            "created_at": "2020-08-27T15:33:49Z",
            "updated_at": "2020-08-27T15:33:49Z"
        },
        "messages": [
            {
                "source": {
                    "type": "promotion_item",
                    "id": "1425513e-8446-4e84-a72b-8e77d47f906f"
                },
                "title": "Promotion Added",
                "description": "Promotion has been added to cart."
            }
        ]
    }
}
```

## Request Example - SKU

```json
{
  "data": [
     {
      "type": "cart_item",
      "sku": "sku-1",
      "quantity": 1
    },
    {
      "type": "cart_item",
      "sku": "sku-2",
      "quantity": 1
    }
  ],
    "options": {
        "add_all_or_nothing": true
  }
}
```

## Response Example - SKU

`201 Created`

```json
{
    "data": [
        {
            "id": "0ac4ee19-7d8e-4b2f-b087-e4073ec801a4",
            "type": "cart_item",
            "product_id": "6648dde1-f7c1-4e77-9698-1fd541d121af",
            "name": "Product Name",
            "description": "description",
            "sku": "sku-1",
            "slug": "1",
            "image": {
                "mime_type": "",
                "file_name": "",
                "href": ""
            },
            "quantity": 1,
            "manage_stock": true,
            "unit_price": {
                "amount": 11,
                "currency": "USD",
                "includes_tax": true
            },
            "value": {
                "amount": 11,
                "currency": "USD",
                "includes_tax": true
            },
            "links": {
                "product": "https://useast.api.elasticpath.com/v2/products/6648dde1-f7c1-4e77-9698-1fd541d121af"
            },
            "meta": {
                "display_price": {
                    "with_tax": {
                        "unit": {
                            "amount": 11,
                            "currency": "USD",
                            "formatted": "$0.11"
                        },
                        "value": {
                            "amount": 11,
                            "currency": "USD",
                            "formatted": "$0.11"
                        }
                    },
                    "without_tax": {
                        "unit": {
                            "amount": 11,
                            "currency": "USD",
                            "formatted": "$0.11"
                        },
                        "value": {
                            "amount": 11,
                            "currency": "USD",
                            "formatted": "$0.11"
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
                    }
                },
                "timestamps": {
                    "created_at": "2020-10-23T23:15:24Z",
                    "updated_at": "2020-10-23T23:15:24Z"
                }
            },
            "catalog_id": "92073438-7640-4ace-9670-c8c5c1a89cd7",
            "catalog_source": "pim"
        },
        {
            "id": "18c23ab3-92e5-4671-9c28-fbfcc8f7db18",
            "type": "cart_item",
            "product_id": "acede2a9-f763-453a-a3ae-cc4f66e6dca3",
            "name": "Product Name 2",
            "description": "Description 2",
            "sku": "sku-2",
            "slug": "2",
            "image": {
                "mime_type": "",
                "file_name": "",
                "href": ""
            },
            "quantity": 1,
            "manage_stock": true,
            "unit_price": {
                "amount": 22,
                "currency": "USD",
                "includes_tax": true
            },
            "value": {
                "amount": 22,
                "currency": "USD",
                "includes_tax": true
            },
            "links": {
                "product": "https://useast.api.elasticpath.com/v2/products/acede2a9-f763-453a-a3ae-cc4f66e6dca3"
            },
            "meta": {
                "display_price": {
                    "with_tax": {
                        "unit": {
                            "amount": 22,
                            "currency": "USD",
                            "formatted": "$0.22"
                        },
                        "value": {
                            "amount": 22,
                            "currency": "USD",
                            "formatted": "$0.22"
                        }
                    },
                    "without_tax": {
                        "unit": {
                            "amount": 22,
                            "currency": "USD",
                            "formatted": "$0.22"
                        },
                        "value": {
                            "amount": 22,
                            "currency": "USD",
                            "formatted": "$0.22"
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
                    }
                },
                "timestamps": {
                    "created_at": "2020-10-23T23:15:24Z",
                    "updated_at": "2020-10-23T23:15:24Z"
                }
            },
            "catalog_id": "92073438-7640-4ace-9670-c8c5c1a89cd7",
            "catalog_source": "pim"
        }
    ],
    "meta": {
        "display_price": {
            "with_tax": {
                "amount": 33,
                "currency": "USD",
                "formatted": "$0.33"
            },
            "without_tax": {
                "amount": 33,
                "currency": "USD",
                "formatted": "$0.33"
            },
            "tax": {
                "amount": 0,
                "currency": "USD",
                "formatted": "$0.00"
            }
        },
        "timestamps": {
            "created_at": "2020-10-23T23:15:24Z",
            "updated_at": "2020-10-23T23:15:24Z"
        }
    }
}
```

## Request Example - Add items with shipping groups

```bash
curl -X POST https://useast.api.elasticpath.com/v2/carts/:id/items \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
    "data": [
        {
            "type": "cart_item",
            "sku": "sku1",
            "quantity": 1,
            "shipping_group_id": "cc63b873-4eff-450c-86d2-ec255160ba2e"
            
        },
        {
            "type": "cart_item",
            "sku": "sku2",
            "quantity": 1,
            "shipping_group_id": "5b37d927-e19f-4477-89f8-f18c2841e629"
        }
    ],
    "options": {
        "add_all_or_nothing": false
    }
}
```

## Response Example - Add items with shipping groups

`201 Created`

```json
{
    "data": [
        {
            "id": "564c710b-695e-46e4-a4cb-54114f4ec604",
            "type": "cart_item",
            "product_id": "5ed105c9-112d-4a9d-87b7-e08dcc797b0b",
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
                "product": "https://useast.api.elasticpath.com/v2/products/5ed105c9-112d-4a9d-87b7-e08dcc797b0b"
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
                    "created_at": "2023-06-29T16:50:07Z",
                    "updated_at": "2023-06-29T16:50:07Z"
                }
            },
            "catalog_id": "c1a94a13-ca0d-4793-982a-a55e77a9f9ff",
            "catalog_source": "pim",
            "shipping_group_id": "cc63b873-4eff-450c-86d2-ec255160ba2e"
        },
        {
            "id": "4089e7e2-4727-4322-a767-2a8493897887",
            "type": "cart_item",
            "product_id": "a0bb6fad-5fe6-4831-b731-91cc582bcf97",
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
                "product": "https://useast.api.elasticpath.com/v2/products/a0bb6fad-5fe6-4831-b731-91cc582bcf97"
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
                    "created_at": "2023-06-29T16:50:07Z",
                    "updated_at": "2023-06-29T16:50:07Z"
                }
            },
            "catalog_id": "c1a94a13-ca0d-4793-982a-a55e77a9f9ff",
            "catalog_source": "pim",
            "shipping_group_id": "5b37d927-e19f-4477-89f8-f18c2841e629"
        }
    ],
    "meta": {
        "display_price": {
            "with_tax": {
                "amount": 21000,
                "currency": "USD",
                "formatted": "$210.00"
            },
            "without_tax": {
                "amount": 21000,
                "currency": "USD",
                "formatted": "$210.00"
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
                "amount": 21000,
                "currency": "USD",
                "formatted": "$210.00"
            },
           "shipping": {
                "amount": 1000,
                "currency": "USD",
                "formatted": "$10.00"
            }

        },
        "timestamps": {
            "created_at": "2023-06-29T16:50:07Z",
            "updated_at": "2023-06-29T16:50:07Z",
            "expires_at": "2023-07-06T16:50:07Z"
        }
    }
}
```

## Request Examples

### Product ID - Curl

```bash
curl -X POST https://useast.api.elasticpath.com/v2/carts/:id/items \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
      "data": [
    {
      "type": "custom_item",
      "name": "My Custom Item",
      "sku": "my-custom-item",
      "description": "My first custom item!",
      "quantity": 1,
      "price": {
        "amount": 20000,
        "includes_tax": true
      }
    },
    {
      "type": "cart_item",
      "id": "838520de-b64a-4a0e-9d4c-f5bb53c83ec3",
      "quantity": 1
    },
    {
      "type": "promotion_item",
      "code": "5off"
    }
  ],
      "options": {
        "add_all_or_nothing": true
  }
}'
```

### SKU - Curl

```bash
curl -X POST https://useast.api.elasticpath.com/v2/carts/:reference/items \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
      "data": [
    {
      "type": "custom_item",
      "name": "My Custom Item",
      "sku": "my-custom-item",
      "description": "My first custom item!",
      "quantity": 1,
      "price": {
        "amount": 20000,
        "includes_tax": true
      }
    },
    {
      "type": "cart_item",
      "sku": "sku-1",
      "quantity": 1
    },
    {
      "type": "promotion_item",
      "code": "5off"
    }
  ],
      "options": {
        "add_all_or_nothing": true
  }
}'
```

### Bundle - Curl

```bash
curl -X POST https://useast.api.elasticpath.com/v2/carts/:id/items \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
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
}'
```

## Response Example

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

## Response Codes

You might encounter the following response codes, depending on the scenario:

- `400 Bad Request` - An error is found, such as insufficient available stock.
- `404 Not found` - The requested product could not be found.

:::note
For items added in bulk, error codes are returned for each item individually in a response.
:::

### Bulk add error example

`404 Not Found`

```json
{
    "errors": [
        {
            "status": 404,
            "title": "Product not found",
            "detail": "The requested product could not be found",
            "meta": {
                "sku": "sku-1"
            }
        },
        {
            "status": 400,
            "title": "Insufficient stock",
            "detail": "There is not enough stock to add Product 2 to your cart",
            "meta": {
                "id": "91b074df-2b2a-44ff-be2d-fdb4fa2ddfb4",
                "sku": "sku-2"
            }
        }
    ]
}
```
