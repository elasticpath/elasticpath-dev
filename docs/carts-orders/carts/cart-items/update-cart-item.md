---
title: Update Cart Item
nav_label: Update Cart Item
sidebar_position: 10
---

You can easily update a cart item. A successful update returns the [cart items](/docs/carts-orders/carts/cart-items/cart-items-overview).

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

When a cart is checked out, the options a shopper selected are added to the order. See [order items](/docs/carts-orders/orders/orders-api/order-items).

## Personalized Products

You can allow your shoppers to add custom text to a product when checking out their carts. This is useful, for example, if you have a product like a T-shirt that can be personalized. You can do this using the `custom_inputs` attribute when [creating your products](/docs/pxm/products/ep-pxm-products-api/create-a-product).

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

The `custom_inputs` attribute must be an object. If the same product has different `custom_inputs` attributes, then these are added as separate items in a cart.

The `custom_inputs` attribute is stored in the cart item and must not exceed 1MB. When a cart is [checked out](/docs/carts-orders/checkout), the `custom_inputs` attribute becomes part of the [order](/docs/carts-orders/orders/orders-api/get-an-order) items.

When you add products to cart with `custom_inputs`, there are certain limitations on usage of the `custom_inputs` with the following promotion types:

- For [Free Gift Promotions](/docs/promotions/promotion-management/create-free-gift-promotion), you can add `custom_inputs` to gift items.
- For [Fixed Bundle Discount Promotions](/docs/promotions/promotion-management/create-fixed-bundle-discount-promotion), the promotion applies as long as the cart contains the bundle SKUs even when there are different `custom_inputs`.
- For [X for Y Discount Promotion](/docs/promotions/promotion-management/create-X-for-Y-discount-promotion) and [X for amount discount promotion](/docs/promotions/promotion-management/create-X-for-amount-discount-promotion), the promotion applies when there are two SKUs with the same `custom_inputs`. This promotion does not apply when there are different `custom_inputs` and the SKUs are in different line items.

## `PUT` Update Cart Item

```http
https://useast.api.elasticpath.com/v2/carts/:cartID/items/:cartitemID
```

## Parameters

### Path parameters

| Name        | Required | Type     | Description                                     |
| ----------- | -------- | -------- | ----------------------------------------------- |
| `cartID` | Required | `string` | A unique identifier of the cart that you created. |
| `cartitemID`| Required | `string` | A unique identifier of the cart item. |

### Headers

| Name            | Required | Type     | Description                                         |
| --------------- | -------- | -------- | --------------------------------------------------- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Name       | Required | Type      | Description                            |
| ---------- | -------- | --------- | -------------------------------------- |
| `quantity` | Required | `integer` | The amount of products to add to cart. |
| `custom_inputs` | Optional | `object` | The custom text to be added to a product. |
| `shipping_group_id` | Optional | `string` | The unique identifier of the shipping group to be added to the cart. |


## Request Example - Update a Product

### Curl

```bash
curl -X PUT https://useast.api.elasticpath.com/v2/carts/:cartID/items/:cartitemID \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
      "data": {
        "type": "cart_item",
        "id": "76746981-f63a-45f4-ba9e-59773d89dc2e",
        "custom_inputs": {
            "personalization": "My personal message"
        },
        "quantity": 2
      }
    }
```

### JavaScript SDK

```javascript
const reference = "XXXX";
const itemId = "25617d3e-14a6-434c-bfab-3fda87517aaf";
const quantity = 10;

// Where `EPCC` is an authenticated client
await EPCC.Cart(reference).UpdateItem(itemId, quantity);
```

## Response Example

`200 OK`

```json
{
    "data": [
        {
            "id": "df9468c2-627c-4e73-bdd3-587d6a81c465",
            "type": "cart_item",
            "product_id": "9eda5ba0-4f4a-4074-8547-ccb05d1b5981",
            "name": "Crown",
            "description": "Abstract, sculptural, refined and edgy with a modern twist. Its symmetrical, spoked structure generates a clever geometric presence, which works well in a contemporary environment.",
            "sku": "CWLP100BLK",
             "custom_inputs": {
                 "personalization": "Congratulations Steven & John"
            },
            "image": {
                "mime_type": "image/png",
                "file_name": "lamp7-trans.png",
                "href": "https://files-eu.epusercontent.com/e8c53cb0-120d-4ea5-8941-ce74dec06038/7cc08cbb-256e-4271-9b01-d03a9fac9f0a.png"
            },
            "quantity": 10,
            "manage_stock": true,
            "unit_price": {
                "amount": 47500,
                "currency": "USD",
                "includes_tax": true
            },
            "value": {
                "amount": 475000,
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
                            "formatted": "$475.00"
                        },
                        "value": {
                            "amount": 475000,
                            "currency": "USD",
                            "formatted": "$4750.00"
                        }
                    },
                    "without_tax": {
                        "unit": {
                            "amount": 47500,
                            "currency": "USD",
                            "formatted": "$475.00"
                        },
                        "value": {
                            "amount": 475000,
                            "currency": "USD",
                            "formatted": "$4750.00"
                        }
                    }
                },
                "timestamps": {
                    "created_at": "2018-05-08T10:25:40.02Z",
                    "updated_at": "2018-05-08T10:25:40.02Z"
                }
            },
            "catalog_id": "92073438-7640-4ace-9670-c8c5c1a89cd7",
            "catalog_source": "pim"
        }
    ],
    "meta": {
        "display_price": {
            "with_tax": {
                "amount": 475000,
                "currency": "USD",
                "formatted": "$4750.00"
            },
            "without_tax": {
                "amount": 475000,
                "currency": "USD",
                "formatted": "$4750.00"
            }
        },
        "timestamps": {
            "created_at": "2018-05-08T10:25:40.02Z",
            "updated_at": "2018-05-08T10:25:40.02Z",
            "expires_at": "2018-05-20T10:25:40.02Z"
        }
    }
}
```

## Request Example - Update a Bundle

```bash
curl -X POST https://useast.api.elasticpath.com/v2/carts/:cartID/items/:cartitemID \
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

## Response Example - Update a Bundle

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

## Request Example - Update Cart Item with Shipping Group ID

Once you have created a [cart shipping group](/docs/ship-groups/shipping-groups/shipping-groups-api/create-cart-shipping-group), you need to link it to the cart item. This is important, because it is necessary to associate items with shipping groups in order to include shipping groups in the corresponding cart, order, and totals.

Use the following request example to associate the shipping group ID to the desired cart item(s):

```bash
curl -X PUT https://useast.api.elasticpath.com/v2/carts/:cartID/items/:cartitemID \
     -H "Authorization: Bearer XXXX"
     -H "Content-Type: application/json" \
     -d $'{
      "data": {
        "id": "{{cartitemID}}",
        "type": "cart_item",
        "shipping_group_id": "eb063818-939a-458f-97a4-2601c0c2b445"
  }
}
```

## Response Example - Update Cart Item with Shipping Group ID

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
                    "created_at": "2023-06-26T17:36:27Z",
                    "updated_at": "2023-06-26T17:36:27Z"
                }
            },
            "shipping_group_id": "eb063818-939a-458f-97a4-2601c0c2b445"
        }
    ],
    "meta": {
        "display_price": {
            "with_tax": {
                "amount": 20700,
                "currency": "USD",
                "formatted": "$207.00"
            },
            "without_tax": {
                "amount": 20700,
                "currency": "USD",
                "formatted": "$207.00"
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
                "amount": 20700,
                "currency": "USD",
                "formatted": "$207.00"
            },
            "shipping": {
                "amount": 700,
                "currency": "USD",
                "formatted": "$7.00"
            }
        },
        "timestamps": {
            "created_at": "2023-06-26T17:36:27Z",
            "updated_at": "2023-06-26T19:53:48Z",
            "expires_at": "2023-07-03T19:53:48Z"
        }
    }
}
```

## Errors

The following response is returned when the item doesn't exist:

`404 Not Found`

```json
{
    "errors": [
        {
            "status": 404,
            "title": "Not Found",
            "detail": "The Item doesn't exist in the cart"
        }
    ]
}
```

When the shipping group is already included in another cart, has been checked out, cannot be added with the item, or doesn't exist, the following response is returned. In this response, the product is added to cart, but an error is also returned indicating that the shipping group cannot be found for the cart.

```json
{
    "data": [
        {
            "id": "c304cb3d-93f5-4317-97c3-5704aa6c1a76",
            "type": "custom_item",
            "name": "My Custom Item 5",
            "description": "SKU5",
            "sku": "SKU5",
            "slug": "",
            "image": {
                "mime_type": "",
                "file_name": "",
                "href": ""
            },
            "quantity": 1,
            "manage_stock": false,
            "unit_price": {
                "amount": 200,
                "currency": "USD",
                "includes_tax": true
            },
            "value": {
                "amount": 200,
                "currency": "USD",
                "includes_tax": true
            },
            "links": {},
            "meta": {
                "display_price": {
                    "with_tax": {
                        "unit": {
                            "amount": 200,
                            "currency": "USD",
                            "formatted": "$2.00"
                        },
                        "value": {
                            "amount": 200,
                            "currency": "USD",
                            "formatted": "$2.00"
                        }
                    },
                    "without_tax": {
                        "unit": {
                            "amount": 200,
                            "currency": "USD",
                            "formatted": "$2.00"
                        },
                        "value": {
                            "amount": 200,
                            "currency": "USD",
                            "formatted": "$2.00"
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
                            "amount": 200,
                            "currency": "USD",
                            "formatted": "$2.00"
                        },
                        "value": {
                            "amount": 200,
                            "currency": "USD",
                            "formatted": "$2.00"
                        }
                    }
                },
                "timestamps": {
                    "created_at": "2023-07-06T23:26:23Z",
                    "updated_at": "2023-07-06T23:26:23Z"
                }
            }
        }
    ],
    "errors": [
        {
            "status": 404,
            "title": "Cart shipping group not found",
            "detail": "Shipping group not found for this cart. Please verify the shipping group exists for this cart and is not already associated with an order.",
            "meta": {
                "cart_id": "123",
                "shipping_group_id": "4658e5e5-bbf3-4da2-92ef-a832dfcfe677"
            }
        }
    ],
    "meta": {
        "display_price": {
            "with_tax": {
                "amount": 200,
                "currency": "USD",
                "formatted": "$2.00"
            },
            "without_tax": {
                "amount": 200,
                "currency": "USD",
                "formatted": "$2.00"
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
                "amount": 200,
                "currency": "USD",
                "formatted": "$2.00"
            },
            "shipping": {
                "amount": 0,
                "currency": "USD",
                "formatted": "$0.00"
            }
        },
        "timestamps": {
            "created_at": "2023-07-06T23:26:23Z",
            "updated_at": "2023-07-06T23:26:23Z",
            "expires_at": "2023-07-13T23:26:23Z"
        }
    }
}
```

