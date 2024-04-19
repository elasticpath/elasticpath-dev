---
title: Merging Carts
nav_label: Merging Carts
sidebar_position: 6
---

A shopper can have more than one cart and decide to merge the carts into one cart. If a shopper adds items to a cart anonymously and then signs into their account as a registered user, the system asks them which cart to use. For example, a shopper has an existing cart with items `A`, `B` and `C` in it. The shopper returns later and adds items `D` and `E` while not signed in. The shopper then signs in and wants to merge the new cart with the existing cart. After the carts merge, the cart contains items `A`, `B`, `C`, `D` and `E`.

Any items that are duplicated from the anonymous cart to the registered cart are incremented by the quantity from the anonymous cart. For example, the shopper has an existing cart with items `A`, `B` and `C`, returns later and adds two more `A` items and one `B` item while not signed in. The shopper then signs in and wants to merge the new cart with the existing cart. The existing cart will contain three `A` items, two `B` items, and one `C` item.

:::note
When a shopper merges items from another cart into their own cart, properties such as custom attributes, custom discounts, and payment intent ID will remain unchanged in the original cart.
:::

## `POST` Add items to cart from another cart

```http
https://useast.api.elasticpath.com/v2/carts/:id/items
```

Call this endpoint each time a shopper merges items from one cart to another.

## Parameters

### Path parameters

| Name        | Required | Type     | Description                                      |
| ----------- | -------- | -------- | ------------------------------------------------ |
| `id` | Required | `string` | The unique identifier of the cart that you created. |

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token to grant access to the API. |
| `X-Moltin-Customer-Token` | Required |`string` | The unique identifier of a signed-in customer. Corresponds to the `customer_ids` attribute in a `catalog_rule` object. |
| `EP-Channel`  | Required | `string` | The channel, such as website or mobile app. Corresponds to the `channel` attribute in a `catalog_rule` object.
| `EP-Context-Tag` | Required | `string` | A tag defined in the store, such as `clearance`. Corresponds to the `tag` attribute in a `catalog_rule` object. |

### Body

| Name                         | Required | Type      | Description                                                                                                                                                                                              |
| ---------------------------- | -------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                | Required | `string`  | The type of related object. Must be `cart_items`.                                                                                                                                              |
| `cart_id`             | Required | `string`  | The original cart to be merged from.                                                                                                                                                                     |
| `options.add_all_or_nothing` | Optional | `boolean` | When `true`, if an error occurs for any item, no items are added to the cart. When `false`, valid items are added to the cart and the items with errors are reported in the response. Default is `true`. |

## Request Example

```bash
curl -X POST https://useast.api.elasticpath.com/v2/carts/:id/items \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
        "data":[
           {
             "type": "cart_items",
             "cart_id": "da0b0a12-8232-4be1-a354-a1a64b11de91"
           }
        ],
        "options": {
                "add_all_or_nothing": false
            }
        }
```

## Response Example

`201 Created`

```json
{
    "data": [
        {
            "id": "8838d444-87f4-411f-9d89-9fc809f0b1cb",
            "type": "cart_item",
            "product_id": "9eda5ba0-4f4a-4074-8547-ccb05d1b5981",
            "name": "Crown",
            "description": "Abstract, sculptural, refined and edgy with a modern twist. Its symmetrical, spoked structure generates a clever geometric presence, which works well in a contemporary environment.",
            "sku": "CWLP100BLK",
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

## Errors

The cart linked to the shipping group ID cannot be merged with another cart because the shipping group is associated to a specific cart ID. If you attempt to merge one cart associated with the shipping group ID with another cart, only the cart items are merged and the following error response is returned:

```json
{
            "status": 404,
            "title": "Cart shipping group not found",
            "detail": "Shipping group not found for this cart.  Please verify the shipping group exists for this cart and is not already associated with an order.",
            "meta": {
                "cart_id": "2",
                "shipping_group_id": "4d475574-fb84-4d53-99c0-fda98e646a49"
            }
}
```
