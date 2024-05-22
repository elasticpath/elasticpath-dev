---
title: Add Promotion to Cart
nav_label: Add Promotion to Cart
sidebar_position: 4
---

You can use the promotions API to apply discounts to your cart as a special cart item type. Any requests to add a product to cart will return a collection of [cart items](/docs/carts-orders/carts/cart-items/cart-items-overview). A cart can contain a maximum of 100 unique items. Items include products, custom items, tax items, and promotions.

When you add products to a cart with `custom_inputs`, there are certain limitations on usage of the `custom_inputs` with the following promotion types:

- For [Free Gift Promotions](/docs/promotions/promotion-management/create-free-gift-promotion), you can add `custom_inputs` to gift items.
- For [Fixed Bundle Discount Promotions](/docs/promotions/promotion-management/create-fixed-bundle-discount-promotion), the promotion applies as long as the cart contains the bundle SKUs even when there are different `custom_inputs`.
- For [X for Y Discount Promotion](/docs/promotions/promotion-management/create-X-for-Y-discount-promotion) and [X for amount discount promotion](/docs/promotions/promotion-management/create-X-for-amount-discount-promotion), the promotion applies when there are two SKUs with the same `custom_inputs`. The promotion does not apply when there are different `custom_inputs` and the SKUs are in different line items.

To remove promotion from the cart via the promotion code, see [Remove Promotion Code from Cart](/docs/carts-orders/carts/cart-items/remove-promotion-code-from-cart).

## `POST` Add Promotion to Cart

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
| `Authorization`           | Required | `string` | The Bearer token required to get access to the API. |
| `X-Moltin-Customer-Token` | Optional | `string` | A customer token to use for a customer specific promotion. |
| `X-MOLTIN-CURRENCY` | Optional | `string` | The currency to be used for the products in the cart. If you do not specify a currency, the site’s default currency is used. |

### Body

| Name   | Required | Type     | Description                                   |
|:-------|:---------|:---------|:----------------------------------------------|
| `code` | Optional | `string` | Specifies the promotion code. For more information about `codes[].user[]`, see the [Create Promotion codes](/docs/promotions/promotion-codes/create-promotion-codes) section. |
| `type` | Required | `string` | Specifies the type of resource, which is `promotion_item`. |

## Request Examples

### Curl

```bash
curl -X POST https://useast.api.elasticpath.com//v2/carts/:id/items \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -H "X-Moltin-Customer-Token: XXXX" \
     -d $ {
       "data": {
         "type": "promotion_item",
         "code": "PROMO_CODE"
       }
     }
```

### JavaScript SDK

```javascript
const reference = "XXXX";
const promoCode = "SAVE10";

// Where `EPCC` is an authenticated client
await EPCC.Cart(reference).AddPromotion(promoCode);
```

## Response Examples

`201 Created`

```json
{
    "data": [
        {
            "id": "74b855dd-ff40-41a4-95fb-b904786ea087",
                "type": "cart_item",
                "product_id": "37eeefd8-d939-491a-8c88-218a3cf97702",
                "name": "New v2 StockProduct - 468538288112",
                "description": "The New v2 StockProduct",
                "sku": "newProdSku_468538288112",
                "slug": "newProdSlug_468538288112",
                "image": {
                    "mime_type": "",
                    "file_name": "",
                    "href": ""
                },
                "quantity": 1,
                "manage_stock": true,
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
                "discounts": [
                    {
                        "amount": {
                            "amount": -333,
                            "currency": "USD",
                            "includes_tax": false
                        },
                        "code": "auto_8f4d596d-1110-44fc-beae-c3ea3e4e4232",
                        "id": "8f4d596d-1110-44fc-beae-c3ea3e4e4232"
                    }
                ],
                "links": {
                    "product": "https://useast.api.elasticpath.com/v2/products/df32387b-6ce6-4802-9b90-1126a5c5a54f"
                },
                "meta": {
                    "display_price": {
                        "with_tax": {
                            "unit": {
                                "amount": 9667,
                                "currency": "USD",
                                "formatted": "$96.67"
                            },
                            "value": {
                                "amount": 9667,
                                "currency": "USD",
                                "formatted": "$96.67"
                            }
                        },
                        "without_tax": {
                            "unit": {
                                "amount": 9667,
                                "currency": "USD",
                                "formatted": "$96.67"
                            },
                            "value": {
                                "amount": 9667,
                                "currency": "USD",
                                "formatted": "$96.67"
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
                                "amount": -333,
                                "currency": "USD",
                                "formatted": "-$3.33"
                            },
                            "value": {
                                "amount": -333,
                                "currency": "USD",
                                "formatted": "-$3.33"
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
                        },
                        "discounts": {
                            "auto_8f4d596d-1110-44fc-beae-c3ea3e4e4232": {
                                    "amount": -333,
                                    "currency": "USD",
                                    "formatted": "-$3.37"
                                }
                            }
                        }
                    },
                    "timestamps": {
                        "created_at": "2022-07-28T01:06:42Z",
                        "updated_at": "2022-07-28T01:06:42Z"
                    }
                },
                "catalog_source": "legacy"
            },
            {
                "id": "910c9b88-65bf-4ea2-9303-99f192458861",
                "type": "cart_item",
                "product_id": "b63b1587-0431-476c-b782-8205341e657f",
                "name": "New v2 StockProduct - 031366383494",
                "description": "end-to-end test product",
                "sku": "ProdSku1523345240956",
                "slug": "newProdSlug_031366383494",
                "image": {
                    "mime_type": "",
                    "file_name": "",
                    "href": ""
                },
                "quantity": 2,
                "manage_stock": true,
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
                "discounts": [
                    {
                        "amount": {
                            "amount": -667,
                            "currency": "USD",
                            "includes_tax": false
                        },
                        "code": "auto_8f4d596d-1110-44fc-beae-c3ea3e4e4232",
                        "id": "8f4d596d-1110-44fc-beae-c3ea3e4e4232"
                    }
                ],
                "links": {
                    "product": "https://useast.api.elasticpath.com/v2/products/df32387b-6ce6-4802-9b90-1126a5c5a54f"
                },
                "meta": {
                    "display_price": {
                        "with_tax": {
                            "unit": {
                                "amount": 9667,
                                "currency": "USD",
                                "formatted": "$96.67"
                            },
                            "value": {
                                "amount": 19333,
                                "currency": "USD",
                                "formatted": "$193.33"
                            }
                        },
                        "without_tax": {
                            "unit": {
                                "amount": 9667,
                                "currency": "USD",
                                "formatted": "$96.67"
                            },
                            "value": {
                                "amount": 19333,
                                "currency": "USD",
                                "formatted": "$193.33"
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
                                "amount": -334,
                                "currency": "USD",
                                "formatted": "-$3.34"
                            },
                            "value": {
                                "amount": -667,
                                "currency": "USD",
                                "formatted": "-$6.67"
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
                        },
                        "discounts": {
                            "auto_8f4d596d-1110-44fc-beae-c3ea3e4e4232": {
                                    "amount": -667,
                                    "currency": "USD",
                                    "formatted": "-$6.67"
                            },
                            "auto_f1c6fa1e-df13-4255-9ee2-a8a58e1f0e4c": {
                                    "amount": -1000,
                                    "currency": "USD",
                                    "formatted": "-$10.00"
                                }
                            }
                        }
                    },
                    "timestamps": {
                        "created_at": "2022-07-28T01:07:02Z",
                        "updated_at": "2022-07-28T01:07:53Z"
                    }
                },
                "catalog_source": "legacy"
            }
        ]
    }
}
```

When you add an eligible item for free gifts to the cart, the `promotion_suggestions` response is returned even if the gift items are not currently in stock. The `promotion_suggestions` response is not returned if the free gifts are automatically added to the cart.

```json
"errors": [
        {
            "status": 400,
            "title": "Insufficient stock",
            "detail": "There is not enough stock to add gift2 to your cart",
            "meta": {
                "id": "f2b68648-9621-45a3-aed6-1b526b0f5beb",
                "sku": "gift2"
            }
        }
    ],
    "meta": {
        "display_price": {
            "with_tax": {
                "amount": 20000,
                "currency": "USD",
                "formatted": "$200.00"
            },
            "without_tax": {
                "amount": 20000,
                "currency": "USD",
                "formatted": "$200.00"
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
                "amount": 20000,
                "currency": "USD",
                "formatted": "$200.00"
            },
            "shipping": {
                "amount": 0,
                "currency": "USD",
                "formatted": "$0.00"
            }
        },
        "timestamps": {
            "created_at": "2023-09-14T23:58:20Z",
            "updated_at": "2023-09-14T23:59:09Z",
            "expires_at": "2023-09-21T23:59:09Z"
        },
        "promotion_suggestions": [
            {
                "promotion_id": "40540373-d5d3-4fb1-b421-b03701525afb",
                "code": "auto_40540373-d5d3-4fb1-b421-b03701525afb",
                "info": "SKU1 and SKU2 for free gift",
                "bundle": [
                    {
                        "targets": [
                            "gift2"
                        ],
                        "quantity": 2,
                        "auto_add_free_gift": true
                    }
                ],
                "message": "Gift"
            }
        ]
    }
```

## Errors

`404 Not Found`

If you try to add a code that does not exist, you get a `404` response.

```json
{
    "errors": [
        {
            "status": 404,
            "title": "Not Found",
            "detail": "No promotion could be found with the given code."
        }
    ]
}
```

When you apply promotions, and if the currency of the item or cart does not match the currency of the promotion, a following response indicating the currency mismatch is returned:

```Json
"messages": [
            {
                "source": {
                    "type": "promotion",
                    "id": "dc9341db-c191-4559-a041-3d0a08bdd20c"
                },
                "title": "currency mismatch",
                "description": "discount unavailable in currency EUR"
            }
         ]
```

The promotion with the mismatched currency will be skipped, and any other applicable promotions will be applied.
