---
title: Add Custom Item to Cart
nav_label: Add Custom Item to Cart
sidebar_position: 3
---

You can add a custom item to the cart when you don't manage things like shipping, taxes and inventory in Commerce.

## Personalized Products

You can allow your shoppers to add custom text when adding custom items to their carts. This is useful, for example, if you have a custom item that can be personalized. You can do this using the `custom_inputs` attribute. The `custom_inputs` attribute must be an object. For example, you sell greetings cards that can be printed with your shoppers personalized messages.

Once you have defined your custom inputs on a custom item, you must configure the custom inputs in your orders.

For example, you may want to add a gift message to an order, so you have custom inputs for name and message.

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

When the custom item is added to the cart, those custom inputs are supplied.

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

If the same custom item has different `custom_inputs` attributes then, these are added as separate items in a cart.

The `custom_inputs` attribute is stored in the cart item and must not exceed 1MB. When a cart is [checked out](/docs/carts-orders/checkout), the `custom_inputs` attribute becomes part of the [order](/docs/commerce-cloud/orders/orders-api/get-an-order) items.

When you add custom items to a cart with `custom_inputs`, there are certain limitations on usage of the `custom_inputs` with the following promotion types:

- For [Free Gift Promotions](/docs/promotions/promotion-management/create-free-gift-promotion), you can add `custom_inputs` to gift items.
- For [Fixed Bundle Discount Promotions](/docs/promotions/promotion-management/create-fixed-bundle-discount-promotion), the promotion applies as long as the cart contains the bundle SKUs even when there are different `custom_inputs`.
- For [X for Y Discount Promotion](/docs/promotions/promotion-management/create-X-for-Y-discount-promotion) and [X for amount discount promotion](/docs/promotions/promotion-management/create-X-for-amount-discount-promotion), the promotion applies when there are two SKUs with the same `custom_inputs`. The promotion does not apply when there are different `custom_inputs` and the SKUs are in different line items.

:::caution
- Any requests to add a custom item to a cart returns a collection of [cart items](/docs/commerce-cloud/carts/cart-items/cart-items-overview).
- [Tax items](/docs/carts-orders/carts/tax-items#the-tax-item-object) may optionally be added with the custom item. Only administrators with [client credentials](/docs/authentication/Tokens/client-credential-token) are able to do this. If included, they replace any existing taxes on the custom item.
- A cart can contain a maximum of 100 unique items. Items include products and custom items.
- Custom Cart Items are available through [implicit authentication](/docs/authentication/Tokens/implicit-token). Ensure that you always check each order has the correct details for each item, most importantly, price.
:::

## `POST` Add Custom Item to Cart

```http
https://useast.api.elasticpath.com/v2/carts/:id/items
```

## Parameters

### Path parameters

| Name     | Required | Type     | Description                                 |
|:---------|:---------|:---------|:--------------------------------------------|
| `id` | Required | `string` | The unique identifier of the cart that you created. |

### Headers

| Name                | Required | Type     | Description                      |
|:--------------------|:---------|:---------|:---------------------------------|
| `X-MOLTIN-CURRENCY` | Optional | `string` | Specifies the currency to be used for the products in the cart. Your site’s default is used if not specified. |
| `Authorization`     | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Name                 | Required | Type      | Description                    |
|:---------------------|:---------|:----------|:-------------------------------|
| `tax`                | Optional | `array`   | A list of tax items to apply to this cart item. |
| `type`               | Required | `string`  | `custom_item`                  |
| `name`               | Required | `string`  | The name of the custom item.   |
| `sku`                | Optional | `string`  | The SKU code to use for the custom item. See [best practices](/docs/carts-orders/carts/cart-items/add-custom-item-to-cart#best-practices) to use the `sku` code. |
| `description`        | Optional | `string`  | A description of the custom item. |
| `quantity`           | Required | `integer` | The amount of custom items to add to cart. |
| `price.amount`       | Required | `integer` | The unit price of the custom item. |
| `price.includes_tax` | Optional | `boolean` | `true` if relevant taxes have been included in the price, `false` if not. Defaults to `true` |
| `custom_inputs`      | Optional | `object`  | The custom text to be added to a product. See [custom_inputs](/docs/pxm/products/ep-pxm-products-api/update-a-product#using-custom-inputs-attribute). |
| `shipping_group_id` | Optional | `string` | The unique identifier of the shipping group to be added to the cart. See [Get a Cart Shipping Group by ID](/docs/ship-groups/shipping-groups/shipping-groups-api/get-a-cart-shipping-group-by-id). |

## Request Examples - Add Custom Item to Cart

### Curl

```bash
curl -X POST https://useast.api.elasticpath.com/v2/carts/:id/items \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
      "data": {
        "type": "custom_item",
        "name": "My Custom Item",
        "sku": "my-custom-item",
        "description": "My first custom item!",
        "quantity": 1,
        "price": {
          "amount": 10000
        }
      }
    }
```

### JavaScript SDK

```javascript
const reference = "XXXX";
const item = {
    name: "My Custom Item",
    sku: "my-custom-item",
    description: "My first custom item!",
    quantity: 1,
    price: {
        amount: 10000,
    },
};

// Where `EPCC` is an authenticated client
await EPCC.Cart(reference).AddCustomItem(item);
```

## Response Example - Add Custom Item to Cart

```json
{
    "data": [
        {
            "id": "bf2b8bcb-fdbd-4c01-a26a-432cc3107534",
            "type": "custom_item",
            "name": "My Custom Item",
            "description": "My first custom item!",
            "sku": "my-custom-item",
            "slug": "",
            "image": {
                "mime_type": "",
                "file_name": "",
                "href": ""
            },
            "quantity": 2,
            "manage_stock": false,
            "unit_price": {
                "amount": 20000,
                "currency": "USD",
                "includes_tax": true
            },
            "value": {
                "amount": 40000,
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
                            "amount": 40000,
                            "currency": "USD",
                            "formatted": "$400.00"
                        }
                    },
                    "without_tax": {
                        "unit": {
                            "amount": 20000,
                            "currency": "USD",
                            "formatted": "$200.00"
                        },
                        "value": {
                            "amount": 40000,
                            "currency": "USD",
                            "formatted": "$400.00"
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
                            "amount": 20000,
                            "currency": "USD",
                            "formatted": "$200.00"
                        },
                        "value": {
                            "amount": 40000,
                            "currency": "USD",
                            "formatted": "$400.00"
                        }
                    }
                },
                "timestamps": {
                    "created_at": "2023-09-29T19:22:07Z",
                    "updated_at": "2023-09-29T19:28:50Z"
                }
            }
        }
    ],
    "meta": {
        "display_price": {
            "with_tax": {
                "amount": 40000,
                "currency": "USD",
                "formatted": "$400.00"
            },
            "without_tax": {
                "amount": 40000,
                "currency": "USD",
                "formatted": "$400.00"
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
                "amount": 40000,
                "currency": "USD",
                "formatted": "$400.00"
            },
            "shipping": {
                "amount": 0,
                "currency": "USD",
                "formatted": "$0.00"
            }
        },
        "timestamps": {
            "created_at": "2023-09-29T19:21:38Z",
            "updated_at": "2023-09-29T19:28:50Z",
            "expires_at": "2023-10-06T19:28:50Z"
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
            "id": "c3b40ea2-94ed-40c0-b0b0-c84294fe05f9",
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
            "auto_add_quantity": 1,
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
                    "created_at": "2023-09-29T21:12:26Z",
                    "updated_at": "2023-09-29T21:12:26Z"
                }
            },
            "catalog_id": "09b9359f-897f-407f-89a2-702e167fe781",
            "catalog_source": "pim"
        },
        {
            "id": "45abd670-2023-4b53-8d09-f8b0b93b13f7",
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
                    "code": "auto_79cfa525-84ea-48a2-b7bc-d38a68792693",
                    "id": "79cfa525-84ea-48a2-b7bc-d38a68792693"
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
                        "auto_79cfa525-84ea-48a2-b7bc-d38a68792693": {
                            "amount": -500,
                            "currency": "USD",
                            "formatted": "-$5.00"
                        }
                    }
                },
                "timestamps": {
                    "created_at": "2023-09-29T21:12:26Z",
                    "updated_at": "2023-09-29T21:12:26Z"
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
            "created_at": "2023-09-29T21:12:26Z",
            "updated_at": "2023-09-29T21:12:26Z",
            "expires_at": "2023-10-06T21:12:26Z"
        },
        "messages": [
            {
                "source": {
                    "type": "cart_item",
                    "id": "45abd670-2023-4b53-8d09-f8b0b93b13f7"
                },
                "title": "Discount Added",
                "description": "Item discount has been added."
            }
        ]
    }
}
```

## Request Examples - Add a Product

### Curl

```bash
curl -X POST https://useast.api.elasticpath.com/v2/carts/:id/items \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
      "data": {
        "type": "custom_item",
        "name": "My Custom Item",
        "sku": "my-custom-item",
        "custom_inputs": {
            "personalization": "My personal message"
        },
        "description": "My first custom item!",
        "quantity": 1,
        "price": {
          "amount": 10000
        }
      }
    }'
```

### JavaScript SDK

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X'
})
const reference = 'XXXX'
const item = {
  name: 'My Custom Item',
  sku: 'my-custom-item',
  description: 'My first custom item!',
  quantity: 1,
  price: {
    amount: 10000
  }
}
Moltin.Cart(reference)
  .AddCustomItem(item)
  .then(cart => {
    // Do something
  })
```

## Response Example - Add a Product

`201 Created`

```json
{
    "data": [
        {
            "id": "581db51b-d4df-4aff-855d-e8ddbcf81b0c",
            "type": "custom_item",
            "name": "My Custom Item",
            "description": "My first custom item!",
            "sku": "my-custom-item",
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
                "amount": 10000,
                "currency": "USD",
                "includes_tax": true
            },
            "value": {
                "amount": 10000,
                "currency": "USD",
                "includes_tax": true
            },
            "links": {},
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
                    }
                },
                "timestamps": {
                    "created_at": "2018-05-08T10:11:17.871313413Z",
                    "updated_at": "2018-05-08T10:11:17.871313413Z"
                }
            }
        }
    ],
    "meta": {
        "display_price": {
            "with_tax": {
                "amount": 57500,
                "currency": "USD",
                "formatted": "$575.00"
            },
            "without_tax": {
                "amount": 57500,
                "currency": "USD",
                "formatted": "$575.00"
            }
        },
        "timestamps": {
            "created_at": "2018-05-08T10:00:20.171Z",
            "updated_at": "2018-05-08T10:11:17.871313413Z",
            "expires_at": "2018-05-20T10:11:17.871313413Z"
        }
    }
}
```

## Request Example - Add a Bundle - Curl

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
}
```

## Response Example for Adding a Bundle

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

## Request Example - Add Item with Shipping Group ID

Once you have created a [cart shipping group](/docs/ship-groups/shipping-groups/shipping-groups-api/create-cart-shipping-group), you need to link it to the cart items. This is important, because it is necessary to associate items with shipping groups in order to include shipping groups in the corresponding cart, order, and totals.

Use the following request example to associate the shipping group ID to the desired cart items:

```bash
curl -X POST https://useast.api.elasticpath.com/v2/carts/:id/items \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
      "data": {
        "type": "custom_item",
        "name": "My Custom Item",
        "sku": "my-custom-item",
        "description": "My first custom item!",
        "quantity": 1,
        "price": {
          "amount": 10000,
          "includes_tax": true
        },
        "shipping_group_id": "eb063818-939a-458f-97a4-2601c0c2b445"
      }
    }
```

## Response Example  - Add Item with Shipping Group ID

```json
{
    "data": [
        {
            "id": "dd6e4bc3-b2f5-4997-8c95-4515c3cb46a8",
            "type": "custom_item",
            "name": "My Custom Item",
            "description": "My first custom item!",
            "sku": "my-custom-item",
            "slug": "",
            "image": {
                "mime_type": "",
                "file_name": "",
                "href": ""
            },
            "quantity": 2,
            "manage_stock": false,
            "unit_price": {
                "amount": 20000,
                "currency": "USD",
                "includes_tax": true
            },
            "value": {
                "amount": 40000,
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
                            "amount": 40000,
                            "currency": "USD",
                            "formatted": "$400.00"
                        }
                    },
                    "without_tax": {
                        "unit": {
                            "amount": 20000,
                            "currency": "USD",
                            "formatted": "$200.00"
                        },
                        "value": {
                            "amount": 40000,
                            "currency": "USD",
                            "formatted": "$400.00"
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
                            "amount": 20000,
                            "currency": "USD",
                            "formatted": "$200.00"
                        },
                        "value": {
                            "amount": 40000,
                            "currency": "USD",
                            "formatted": "$400.00"
                        }
                    }
                },
                "timestamps": {
                    "created_at": "2023-06-26T17:36:27Z",
                    "updated_at": "2023-06-26T20:51:45Z"
                }
            },
            "shipping_group_id": "eb063818-939a-458f-97a4-2601c0c2b445"
        }
    ],
    "meta": {
        "display_price": {
            "with_tax": {
                "amount": 40700,
                "currency": "USD",
                "formatted": "$407.00"
            },
            "without_tax": {
                "amount": 40700,
                "currency": "USD",
                "formatted": "$407.00"
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
                "amount": 40700,
                "currency": "USD",
                "formatted": "$407.00"
            },
            "shipping": {
                "amount": 700,
                "currency": "USD",
                "formatted": "$7.00"
            }
        },
        "timestamps": {
            "created_at": "2023-06-26T17:36:27Z",
            "updated_at": "2023-06-26T20:51:45Z",
            "expires_at": "2023-07-03T20:51:45Z"
        }
    }
}
```

## Best Practices

We recommend to include a unique `sku` code within the request body while adding custom items to carts. If the same `sku` is used for multiple products, they are merged into a single line item.

For example, if a cart consists of the following items:
 - `product-1` with quantity 1 and `sku` code as `sku-1`
 - `product-2` with quantity 1 and `sku` code as `sku-1`
 - `product-3` with quantity 1 and `sku` code as `sku-2`.

The following response is returned where it combines all products with the same `sku` codes into a single line item, while products with a unique `sku` codes are represented as separate items.

```json
{
    "data": [
        {
            "id": "c58760f4-8889-4719-b34d-be1f1d11ae59",
            "type": "custom_item",
            "name": "product-1",
            "description": "My first custom item!",
            "sku": "sku-1",
            "slug": "",
            "image": {
                "mime_type": "",
                "file_name": "",
                "href": ""
            },
            "quantity": 2,
            "manage_stock": false,
            "unit_price": {
                "amount": 20000,
                "currency": "USD",
                "includes_tax": true
            },
            "value": {
                "amount": 40000,
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
                            "amount": 40000,
                            "currency": "USD",
                            "formatted": "$400.00"
                        }
                    },
                    "without_tax": {
                        "unit": {
                            "amount": 20000,
                            "currency": "USD",
                            "formatted": "$200.00"
                        },
                        "value": {
                            "amount": 40000,
                            "currency": "USD",
                            "formatted": "$400.00"
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
                            "amount": 20000,
                            "currency": "USD",
                            "formatted": "$200.00"
                        },
                        "value": {
                            "amount": 40000,
                            "currency": "USD",
                            "formatted": "$400.00"
                        }
                    }
                },
                "timestamps": {
                    "created_at": "2023-05-02T16:28:11Z",
                    "updated_at": "2023-05-02T16:28:18Z"
                }
            }
        },
        {
            "id": "09165e3c-eb21-445f-8cd2-68eac8844030",
            "type": "custom_item",
            "name": "product-3",
            "description": "My first custom item!",
            "sku": "sku-2",
            "slug": "",
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
                            "amount": 20000,
                            "currency": "USD",
                            "formatted": "$200.00"
                        },
                        "value": {
                            "amount": 20000,
                            "currency": "USD",
                            "formatted": "$200.00"
                        }
                    }
                },
                "timestamps": {
                    "created_at": "2023-05-02T16:28:29Z",
                    "updated_at": "2023-05-02T16:28:29Z"
                }
            }
        }
    ],
    "meta": {
        "display_price": {
            "with_tax": {
                "amount": 60000,
                "currency": "USD",
                "formatted": "$600.00"
            },
            "without_tax": {
                "amount": 60000,
                "currency": "USD",
                "formatted": "$600.00"
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
                "amount": 60000,
                "currency": "USD",
                "formatted": "$600.00"
            }
        },
        "timestamps": {
            "created_at": "2023-05-02T16:27:53Z",
            "updated_at": "2023-05-02T16:28:29Z",
            "expires_at": "2023-05-07T16:28:29Z"
        }
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
