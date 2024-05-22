---
title: Cart Items Overview
nav_label: Cart Items Overview
sidebar_position: 1
---

## The Cart Item Object

Products added to a cart are referred to as a `cart_item`.

:::note
The `bundle_configuration` object was misspelled in the cart, cart items, and order items. Therefore, on October 18, 2022, we have deprecated `bundle_configuation`(misspelled) and recommend that you use `bundle_configuration` to create a bundle configuration.
:::


| Attribute | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | The unique identifier for this cart item. |
| `type` | `string` | `cart_item`, `custom_item` or `promotion_item` |
| `name` | `string` | The name of this item. |
| `description` | `string` | A description of the cart item. |
| `sku` | `string` | The SKU code for the item. |
| `image` | [`object`](#the-cart-item-image-object) | The product image. |
| `quantity` | `integer` | Number of items added to the cart. |
| `custom_inputs` | `object` | The custom text to be added to a product. |
| `unit_price` | [`object`](#the-cart-item-unit_price-object) | The pricing information about a single instance of this item. |
| `discounts` | [`object`](#the-cart-item-discounts-object) | The list of all promotion codes and corresponding discount amount applied for the item |
| `value` | [`object`](#the-cart-item-value-object) | The pricing information and total value of this item line based on the quantity. |
| `links` | [`object`](#the-cart-item-links-object) | A collection of URLs related to this resource. |
| `components` | [`object`](#the-cart-item-components-object) | The bundle name, id, type, and quantity. |
| `bundle_configuration` | [`object`](#the-cart-item-bundle_configuration-object) | The list of all the `selected_options`. |
| `meta` | [`object`](#the-cart-item-meta-object) | Additional information [calculated](/docs/api/settings/settings-introduction#calculation-method) for this cart. |
| `catalog_source` | `string` | The catalog source. Always `pim` or `legacy`. |
| `catalog_id` | `object` | The unique identifier of the catalog associated with the product is shown if `catalog_source=pim` is set. |

## Response Example

```json
{
    "data": [
        {
            "id": "f003b967-6d12-4289-8d39-4451ea0ea17a",
            "type": "cart_item",
            "product_id": "ed9faf9e-d131-44e9-ac60-9a4037c9bd09",
            "name": "nested bundle",
            "description": "nested bundle",
            "sku": "nested-bundle",
            "slug": "nested-bundle",
            "image": {
                "mime_type": "",
                "file_name": "",
                "href": ""
            },
            "quantity": 1,
            "manage_stock": false,
            "unit_price": {
                "amount": 9999,
                "currency": "USD",
                "includes_tax": false
            },
            "value": {
                "amount": 9999,
                "currency": "USD",
                "includes_tax": false
            },
            "discounts": [
                {
                    "amount": {
                        "amount": -1000,
                        "currency": "USD",
                        "includes_tax": false
                    },
                    "code": "nested-bundle_10",
                    "id": "c2d58e64-aaf0-4780-bd1e-6bdbcbacdd74"
                }
            ],
            "components": {
                "component 2": {
                    "name": "component 2",
                    "options": [
                        {
                            "id": "7d28f075-0110-4cd4-8d58-15cda55c8b5b",
                            "type": "product",
                            "quantity": 1
                        }
                    ]
                },
                "component1": {
                    "name": "component1",
                    "options": [
                        {
                            "id": "3a16e947-fcb1-4673-b5a9-8b0778b08f5c",
                            "type": "product",
                            "quantity": 1
                        },
                        {
                            "id": "bd139213-3cd0-4bc5-bcd4-bd74adf00db2",
                            "type": "product",
                            "quantity": 1
                        }
                    ]
                }
            },
            "bundle_configuration": {
                "selected_options": {
                    "component 2": {
                        "7d28f075-0110-4cd4-8d58-15cda55c8b5b": 1
                    },
                    "component1": {
                        "3a16e947-fcb1-4673-b5a9-8b0778b08f5c": 1
                    }
                }
            },
            "links": {
                "product": "https://useast.api.elasticpath.com/v2/products/ed9faf9e-d131-44e9-ac60-9a4037c9bd09"
            },
            "meta": {
                "display_price": {
                    "with_tax": {
                        "unit": {
                            "amount": 7999,
                            "currency": "USD",
                            "formatted": "$79.99"
                        },
                        "value": {
                            "amount": 7999,
                            "currency": "USD",
                            "formatted": "$79.99"
                        }
                    },
                    "without_tax": {
                        "unit": {
                            "amount": 7999,
                            "currency": "USD",
                            "formatted": "$79.99"
                        },
                        "value": {
                            "amount": 7999,
                            "currency": "USD",
                            "formatted": "$79.99"
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
                            "amount": -2000,
                            "currency": "USD",
                            "formatted": "-$20.00"
                        },
                        "value": {
                            "amount": -2000,
                            "currency": "USD",
                            "formatted": "-$20.00"
                        }
                    },
                    "without_discount": {
                        "unit": {
                            "amount": 9999,
                            "currency": "USD",
                            "formatted": "$99.99"
                        },
                        "value": {
                            "amount": 9999,
                            "currency": "USD",
                            "formatted": "$99.99"
                        }
                    },
                    "discounts": {
                        "nested-bundle_10": {
                            "amount": -1000,
                            "currency": "USD",
                            "formatted": "-$10.00"
                        }
                    }
                },
                "timestamps": {
                    "created_at": "2022-10-19T20:42:23Z",
                    "updated_at": "2022-10-19T20:42:23Z"
                }
            },
            "catalog_id": "09b9359f-897f-407f-89a2-702e167fe781",
            "catalog_source": "pim"
        },
        {
            "id": "8561c752-9e6a-480c-b02f-57563144af36",
            "type": "promotion_item",
            "promotion_id": "24f50e56-b229-46ad-8ab6-eb0b8d51429f",
            "name": "$10 off your order!",
            "description": "Promotion",
            "sku": "10off",
            "slug": "",
            "image": {
                "mime_type": "",
                "file_name": "",
                "href": ""
            },
            "quantity": 1,
            "manage_stock": false,
            "unit_price": {
                "amount": -1000,
                "currency": "USD",
                "includes_tax": false
            },
            "value": {
                "amount": -1000,
                "currency": "USD",
                "includes_tax": false
            },
            "links": {},
            "meta": {
                "display_price": {
                    "with_tax": {
                        "unit": {
                            "amount": -1000,
                            "currency": "USD",
                            "formatted": "-$10.00"
                        },
                        "value": {
                            "amount": -1000,
                            "currency": "USD",
                            "formatted": "-$10.00"
                        }
                    },
                    "without_tax": {
                        "unit": {
                            "amount": -1000,
                            "currency": "USD",
                            "formatted": "-$10.00"
                        },
                        "value": {
                            "amount": -1000,
                            "currency": "USD",
                            "formatted": "-$10.00"
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
                    "created_at": "2022-10-19T20:43:06Z",
                    "updated_at": "2022-10-19T21:01:58Z"
                }
            }
        }
    ],
    "meta": {
        "display_price": {
            "with_tax": {
                "amount": 7999,
                "currency": "USD",
                "formatted": "$79.99"
            },
            "without_tax": {
                "amount": 7999,
                "currency": "USD",
                "formatted": "$79.99"
            },
            "tax": {
                "amount": 0,
                "currency": "USD",
                "formatted": "$0.00"
            },
            "discount": {
                "amount": -2000,
                "currency": "USD",
                "formatted": "-$20.00"
            },
            "without_discount": {
                "amount": 9999,
                "currency": "USD",
                "formatted": "$99.99"
            }
        },
        "timestamps": {
            "created_at": "2022-10-19T20:42:23Z",
            "updated_at": "2022-10-19T21:01:58Z",
            "expires_at": "2022-10-26T21:01:58Z"
        }
    }
}
```

## The Cart Item `image` Object

:::note
The `image` object is empty if there is no main image assigned.
:::

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `file_name` | `string` | The name of the image file that was uploaded. |
| `mime_type` | `string` | The `MIME` type for the uploaded file. |
| `href` | `string` | The link to the image. |

## The Cart Item `unit_price` Object

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `unit_price.amount` | `integer` | The singular price of this item as an integer. |
| `unit_price.currency` | `string` | The currency this item was added to the cart as. |
| `unit_price.includes_tax` | `boolean` | Whether or not this price is tax inclusive. |

## The Cart Item `discounts` Object

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `discounts.amount.amount` | `integer` | The discount amount for this item. |
| `discounts.amount.currency` | `string`| The currency for this item. |
| `discounts.amount.includes_tax` | `string` | Is the discount inclusive of tax? |
| `discounts.code` | `string` | The discount code. |
| `discounts.id` | `string` | The unique identifier of the promotion. |

## The Cart Item `value` Object

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `value.amount` | `integer` | The total price for this item line (quantity * unit_price.amount). |
| `value.currency` | `string` | The currency this item was added to the cart as. |
| `value.includes_tax` | `boolean` | Whether or not this price is tax inclusive. |

## The Cart Item `links` Object

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `links.product` | `string` | A link to the product this cart item is a snapshot of (not for `custom_items`). |
| `value.currency` | `string` | The currency this item was added to the cart as. |

## The Cart Item `components` Object

| Attribute | Type | Description |
|:--- | :--- | :--- |
| `components.name` | `string` | The component name. The component name is the name that is displayed in your storefront.
| `components.options` | `array` | The product options that make up this component. |
| `components.options.id` | `string` | The unique Id of the product you want to add to their component. |
| `components.options.type` | `string` | Must be always `product`. |
| `components.options.quantity` | `string` | The number of this product option that a shopper must purchase. |

## The Cart Item `bundle_configuration` Object

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `bundle_configuration.selected_options` | `object` | The components a shopper has selected options from in a dynamic bundle. |

## The Cart Item `meta` Object

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `meta.display_price` | `object` | A collection of fields related to the totals and currency of this cart item. |
| `meta.display_price.with_tax` | `object` | Tax inclusive totals. |
| `meta.display_price.with_tax.unit` | `object` | Tax inclusive totals for a single instance of this cart item. |
| `meta.display_price.with_tax.unit.amount` | `integer` | The raw price of a single instance of this cart item (inc tax). |
| `meta.display_price.with_tax.unit.currency` | `string` | The currency set for this cart item. |
| `meta.display_price.with_tax.unit.formatted` | `string` | The tax inclusive formatted total of a single instance of this cart item based on the currency. |
| `meta.display_price.with_tax.value` | `object` | Tax inclusive totals for this cart item based on the quantity. |
| `meta.display_price.with_tax.value.amount` | `integer` | The raw total price of this cart item line (inc tax). |
| `meta.display_price.with_tax.value.currency` | `string` | The currency set for this cart item. |
| `meta.display_price.with_tax.value.formatted` | `string` | The tax inclusive formatted total of this cart item line based on the currency. |
| `meta.display_price.without_tax` | `object` | Tax exclusive totals. |
| `meta.display_price.without_tax.unit` | `object` | Tax exclusive totals for a single instance of this cart item. |
| `meta.display_price.without_tax.unit.amount` | `integer` | The raw price of a single instance of this cart item (ex tax). |
| `meta.display_price.without_tax.unit.currency` | `string` | The currency set for this cart item. |
| `meta.display_price.without_tax.unit.formatted` | `string` | The tax exclusive formatted total of a single instance of this cart item based on the currency. |
| `meta.display_price.without_tax.value` | `object` | Tax exclusive totals for this cart item based on the quantity. |
| `meta.display_price.without_tax.value.amount` | `integer` | The raw total price of this cart item line (ex tax). |
| `meta.display_price.without_tax.value.currency` | `string` | The currency set for this cart item. |
| `meta.display_price.without_tax.value.formatted` | `string` | The tax inclusive formatted total of this cart item line based on the currency. |
| `meta.display_price.tax` | `object` | Tax totals. |
| `meta.display_price.tax.unit` | `object` | Tax totals for a single instance of this cart item. |
| `meta.display_price.tax.unit.amount` | `integer` | The subtotal of the added tax value for a single instance of this cart item. |
| `meta.display_price.tax.unit.currency` | `string` | The currency set for the tax. |
| `meta.display_price.tax.unit.formatted` | `string` | The formatted value for the tax subtotal. |
| `meta.display_price.tax.value` | `object` | Tax totals for this cart item based on the quantity. |
| `meta.display_price.tax.value.amount` | `integer` | The subtotal of the added tax value. |
| `meta.display_price.tax.value.currency` | `string` | The currency set for the tax. |
| `meta.display_price.tax.value.formatted` | `string` | The formatted value for the tax subtotal. |
| `meta.display_price.discount` | `object` | The `discount` object describes the unit discount value and total discount value. |
| `meta.display_price.discount.unit` | `object` | The `unit` object specifies the amount, currency, and formatted value of the total discounted amount applied to a unit item. |
| `meta.display_price.discount.unit.amount` | `integer` | The discounted amount applied to an individual unit item. |
| `meta.display_price.discount.unit.currency` | `integer` | The currency set for the cart item. |
| `meta.display_price.discount.unit.formatted` | `string` | The formatted value of the total discounted amount applied to the individual unit item. |
| `meta.display_price.discount.value` | `object` | The `value` object specifies the amount, currency, and formatted value of the total discounted amount applied to this cart based on the quantity. |
| `meta.display_price.discount.value.amount` | `integer` | The total discounted amount applied to the cart item based on the quantity. |
| `meta.display_price.discount.value.currency` | `string` | The currency set for the cart item. |
| `meta.display_price.discount.value.formatted` | `string` | The formatted value of the total discounted amount applied to the cart item based on the quantity. |
| `meta.display_price.without_discount` | `object` | The `without_discount` object describes the unit value and total value of the cart without the discount. |
| `meta.display_price.without_discount.unit` | `object` | The `unit` object specifies the amount, currency, and formatted value applied to a unit item without the discount. |
| `meta.display_price.without_discount.unit.amount` | `integer` | The total price applied to a unit item without the discount. |
| `meta.display_price.without_discount.unit.currency`| `string` | The currency set for this cart item. |
| `meta.display_price.without_discount.unit.formatted`| `integer` | The total formatted amount for this item without the discount. |
| `meta.display_price.without_discount.value` | `object` | The `value` object specifies the amount, currency, and formatted value of the cart item without the discount based on the quantity. |
| `meta.display_price.without_discount.value.amount` | `integer` | The total amount applied to the cart item without the discount based on the quantity. |
| `meta.display_price.without_discount.value.currency` | `string` | The currency set for this cart item. |
| `meta.display_price.without_discount.value.formatted` | `string` | The total amount applied to the cart item without the discount based on the quantity. |
| `meta.display_price.discounts` | `object` | The list of all promotion codes and corresponding discount amount applied for the item. |
|  `meta.display_price.discounts.amount` | `integer`| The discounted amount applied to the individual item. |
| `meta.display_price.discounts.currency` | `string`| The currency set for this cart item. |
| `meta.display_price.discounts.formatted` | `string` | The formatted value of the discount amount applied for the individual item. |
| `meta.timestamps` | `object` | Timestamps for this cart item. |
| `meta.timestamps.created_at` | `string` | The creation date of this cart item. |
| `meta.timestamps.updated_at` | `string` | The last updated date of this cart item. |
