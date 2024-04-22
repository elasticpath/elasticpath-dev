---
title: Bulk Update Items in Cart
nav_label: Bulk Update Items in Cart
sidebar_position: 8
---

The bulk update feature allows shoppers to update an array of items to their cart in one action, rather than updating each item one at a time. Shoppers can update quantity and shipping group details in bulk requests. This minimizes the time for shoppers while updating items to their cart. Shoppers can even update multiple items with the same or different shipping groups to their cart.

When you update multiple items that qualify for free gifts in the cart, the corresponding free gifts for all eligible products are also automatically updated in the cart.

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

## Personalized products

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

The `custom_inputs` attribute is stored in the cart item and must not exceed 1MB. When a cart is [checked out](/docs/commerce-cloud/checkout), the `custom_inputs` attribute becomes part of the [order](/docs/commerce-cloud/orders/orders-api/get-an-order) items.

When you add products to a cart with `custom_inputs`, there are certain limitations on usage of the `custom_inputs` with the following promotion types:

- For [Free Gift Promotions](/docs/commerce-cloud/promotions/promotion-management/create-free-gift-promotion), you can add `custom_inputs` to gift items.
- For [Fixed Bundle Discount Promotions](/docs/commerce-cloud/promotions/promotion-management/create-fixed-bundle-discount-promotion), the promotion applies as long as the cart contains the bundle SKUs even when there are different `custom_inputs`.
- For [X for Y Discount Promotion](/docs/commerce-cloud/promotions/promotion-management/create-X-for-Y-discount-promotion) and [X for amount discount promotion](/docs/commerce-cloud/promotions/promotion-management/create-X-for-amount-discount-promotion), the promotion applies when there are two SKUs with the same `custom_inputs`. The promotion does not apply when there are different `custom_inputs` and the SKUs are in different line items.

:::tip
To remove an item from the cart, update the cart quantity to zero.
:::

## `PUT` Bulk Update Items to Cart

```http
https://useast.api.elasticpath.com/v2/carts/:id/items
```

## Parameters

### Path parameters

| Name        | Required | Type     | Description                                      |
| ----------- | -------- | -------- | ------------------------------------------------ |
| `id` | Required | `string` | The unique identifier of the cart that you created. |

### Headers

| Name                | Required | Type     | Description                                                                                                                                                                                       |
| ------------------- | -------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `X-MOLTIN-CURRENCY` | Optional | `string` | Specifies the currency to be used for the products in the cart. If you do not specify a currency, the site’s default currency is used. This header only affects the first item added to the cart. |
| `Authorization`     | Required | `string` | The Bearer token required to get access to the API.                                                                                                                                               |

### Body

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `id` | Required | `string` | Specifies the `cartitemID` of the item that you want to update in cart. |
| `quantity` | Required | `integer` | Specifies the amount of items to update in the cart. |
| `options.update_all_or_nothing` | Optional | `boolean`| When `true`, if an error occurs for any item, no items are updated in the cart. When `false`, valid items are updated in the cart and the items with errors are reported in the response. Default is `true`. |
| `custom_inputs` | Optional | `object` | The custom text to be added to a product. See [custom_inputs](/docs/pxm/products/ep-pxm-products-api/update-a-product#using-custom-inputs-attribute). |
| `shipping_group_id` | Optional | `string` | The shipping group ID to be updated. See [Get a Cart Shipping Group by ID](/docs/commerce-cloud/shipping-groups/shipping-groups-api/get-a-cart-shipping-group-by-id). |

## Request Example - Product

### Curl

```bash
curl -X PUT https://useast.api.elasticpath.com/v2/carts/:id/items \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
      "data": [
              {
                  "id": "8a4f1c77-4435-4b83-b0e4-020af02999c3",
                  "quantity": 2
              },
              {
                  "id": "14f1d7f8-43ed-4e7a-92ea-d73ea605c338",
                  "quantity": 3
              }
          ],
            "options": {
                "update_all_or_nothing": true
  }

}
```

### JavaScript SDK

```javascript
const reference = "xxxx";
const cartItems = [
    {
        id: "8a4f1c77-4435-4b83-b0e4-020af02999c3",
        quantity: 2,
    },
    {
        id: "14f1d7f8-43ed-4e7a-92ea-d73ea605c338",
        quantity: 3,
    },
];

// Where `EPCC` is an authenticated client
await EPCC.Cart(reference).UpdateItems(cartItems);
```

## Response Example - Product

`200 OK`

```json
{
    "data": [
        {
            "id": "8a4f1c77-4435-4b83-b0e4-020af02999c3",
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
                            "amount": 19857,
                            "currency": "USD",
                            "formatted": "$198.57"
                        },
                        "value": {
                            "amount": 39714,
                            "currency": "USD",
                            "formatted": "$397.14"
                        }
                    },
                    "without_tax": {
                        "unit": {
                            "amount": 19857,
                            "currency": "USD",
                            "formatted": "$198.57"
                        },
                        "value": {
                            "amount": 39714,
                            "currency": "USD",
                            "formatted": "$397.14"
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
                    "created_at": "2020-09-30T16:12:39Z",
                    "updated_at": "2020-09-30T16:12:39Z"
                }
            },
            "catalog_id": "92073438-7640-4ace-9670-c8c5c1a89cd7",
            "catalog_source": "pim"
        },
        {
            "id": "14f1d7f8-43ed-4e7a-92ea-d73ea605c338",
            "type": "cart_item",
            "product_id": "11d7ab79-c454-40f1-993c-1ad5ea424bfa",
            "name": "product2",
            "description": "product2",
            "sku": "product2_sku",
            "slug": "product2",
            "image": {
                "mime_type": "",
                "file_name": "",
                "href": ""
            },
            "quantity": 3,
            "manage_stock": false,
            "unit_price": {
                "amount": 10000,
                "currency": "USD",
                "includes_tax": true
            },
            "value": {
                "amount": 30000,
                "currency": "USD",
                "includes_tax": true
            },
            "links": {
                "product": "https://useast.api.elasticpath.com/v2/products/11d7ab79-c454-40f1-993c-1ad5ea424bfa"
            },
            "meta": {
                "display_price": {
                    "with_tax": {
                        "unit": {
                            "amount": 9929,
                            "currency": "USD",
                            "formatted": "$99.29"
                        },
                        "value": {
                            "amount": 29786,
                            "currency": "USD",
                            "formatted": "$297.86"
                        }
                    },
                    "without_tax": {
                        "unit": {
                            "amount": 9929,
                            "currency": "USD",
                            "formatted": "$99.29"
                        },
                        "value": {
                            "amount": 29786,
                            "currency": "USD",
                            "formatted": "$297.86"
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
                    "created_at": "2020-09-30T16:12:39Z",
                    "updated_at": "2020-09-30T16:12:39Z"
                }
            },
            "catalog_id": "92073438-7640-4ace-9670-c8c5c1a89cd7",
            "catalog_source": "pim"
        },
        {
            "id": "a1648bb5-3d64-4ef1-ac6b-d2c316ee1bbc",
            "type": "promotion_item",
            "promotion_id": "8d7ed6cf-b9e3-4bc7-9944-2d43bbed3276",
            "name": "$5 off your order!",
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
                            "amount": 0,
                            "currency": "",
                            "formatted": "0"
                        },
                        "value": {
                            "amount": 0,
                            "currency": "",
                            "formatted": "0"
                        }
                    },
                    "without_tax": {
                        "unit": {
                            "amount": 0,
                            "currency": "",
                            "formatted": "0"
                        },
                        "value": {
                            "amount": 0,
                            "currency": "",
                            "formatted": "0"
                        }
                    },
                    "tax": {
                        "unit": {
                            "amount": 0,
                            "currency": "",
                            "formatted": "0"
                        },
                        "value": {
                            "amount": 0,
                            "currency": "",
                            "formatted": "0"
                        }
                    }
                },
                "timestamps": {
                    "created_at": "2020-09-30T16:23:14Z",
                    "updated_at": "2020-09-30T16:23:14Z"
                }
            },
            "catalog_id": "92073438-7640-4ace-9670-c8c5c1a89cd7",
            "catalog_source": "pim"
        }
    ],
    "meta": {
        "display_price": {
            "with_tax": {
                "amount": 69500,
                "currency": "USD",
                "formatted": "$695.00"
            },
            "without_tax": {
                "amount": 69500,
                "currency": "USD",
                "formatted": "$695.00"
            },
            "tax": {
                "amount": 0,
                "currency": "USD",
                "formatted": "$0.00"
            }
        },
        "timestamps": {
            "created_at": "2020-09-30T16:12:39Z",
            "updated_at": "2020-09-30T16:23:14Z",
            "expires_at": "2021-09-30T16:12:39Z"
        }
    }
}
```

## Request Example - Bundle

```bash
curl -X PUT https://useast.api.elasticpath.com/v2/carts/:id/items \
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
'
```

## Response Example - Bundle

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

## Request Example - Update Items with Shipping Groups

You can use the following request example to bulk update items with the shipping groups. If you want to disassociate a shipping group from a cart item that previously had a shipping group assigned, you must pass an empty `shipping_group_id` field in the request example.

```bash
curl -X PUT https://useast.api.elasticpath.com/v2/carts/:id/items \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
    "data": [
        {
            "id": "69edac98-d608-4042-b614-812d7a8695ca",
            "quantity": 2,
            "shipping_group_id": "143ec79c-f375-4929-9cfa-891f285f4fef"
            
        },
        {
            "id": "cfd10ccd-95a9-4c3b-8b30-eff3fb455f9c",
            "quantity": 3,
            "shipping_group_id": "0b899b92-0fc1-42c2-be0f-72d98ac7231c"
        }
    ],
    "options": {
        "add_all_or_nothing": false
    }
}
```

## Response Example - Update Items with Shipping Groups

`200 OK`

```json
{
    "data": [
        {
            "id": "69edac98-d608-4042-b614-812d7a8695ca",
            "type": "custom_item",
            "test_custom_field": null,
            "name": "My Custom Item",
            "description": "My first custom item!",
            "sku": "my-custom-item1",
            "slug": "",
            "image": {
                "mime_type": "",
                "file_name": "",
                "href": ""
            },
            "quantity": 2,
            "manage_stock": false,
            "unit_price": {
                "amount": 10000,
                "currency": "USD",
                "includes_tax": false
            },
            "value": {
                "amount": 20000,
                "currency": "USD",
                "includes_tax": false
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
                            "amount": 20000,
                            "currency": "USD",
                            "formatted": "$200.00"
                        }
                    },
                    "without_tax": {
                        "unit": {
                            "amount": 10000,
                            "currency": "USD",
                            "formatted": "$100.00"
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
                            "amount": 10000,
                            "currency": "USD",
                            "formatted": "$100.00"
                        },
                        "value": {
                            "amount": 20000,
                            "currency": "USD",
                            "formatted": "$200.00"
                        }
                    }
                },
                "timestamps": {
                    "created_at": "2023-07-18T18:25:14Z",
                    "updated_at": "2023-07-18T18:25:14Z"
                }
            },
            "shipping_group_id": "143ec79c-f375-4929-9cfa-891f285f4fef"
        },
        {
            "id": "cfd10ccd-95a9-4c3b-8b30-eff3fb455f9c",
            "type": "custom_item",
            "test_custom_field": null,
            "name": "My Custom Item",
            "description": "My first custom item!",
            "sku": "my-custom-item2",
            "slug": "",
            "image": {
                "mime_type": "",
                "file_name": "",
                "href": ""
            },
            "quantity": 3,
            "manage_stock": false,
            "unit_price": {
                "amount": 10000,
                "currency": "USD",
                "includes_tax": false
            },
            "value": {
                "amount": 30000,
                "currency": "USD",
                "includes_tax": false
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
                            "amount": 30000,
                            "currency": "USD",
                            "formatted": "$300.00"
                        }
                    },
                    "without_tax": {
                        "unit": {
                            "amount": 10000,
                            "currency": "USD",
                            "formatted": "$100.00"
                        },
                        "value": {
                            "amount": 30000,
                            "currency": "USD",
                            "formatted": "$300.00"
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
                            "amount": 30000,
                            "currency": "USD",
                            "formatted": "$300.00"
                        }
                    }
                },
                "timestamps": {
                    "created_at": "2023-07-18T18:25:20Z",
                    "updated_at": "2023-07-18T18:25:20Z"
                }
            },
            "shipping_group_id": "0b899b92-0fc1-42c2-be0f-72d98ac7231c"
        }
    ],
    "meta": {
        "display_price": {
            "with_tax": {
                "amount": 50800,
                "currency": "USD",
                "formatted": "$508.00"
            },
            "without_tax": {
                "amount": 50800,
                "currency": "USD",
                "formatted": "$508.00"
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
                "amount": 50800,
                "currency": "USD",
                "formatted": "$508.00"
            },
            "shipping": {
                "amount": 800,
                "currency": "USD",
                "formatted": "$8.00"
            }
        },
        "timestamps": {
            "created_at": "2023-07-18T18:25:14Z",
            "updated_at": "2023-07-18T18:26:31Z",
            "expires_at": "2023-07-25T18:26:31Z"
        }
    }
}
```
