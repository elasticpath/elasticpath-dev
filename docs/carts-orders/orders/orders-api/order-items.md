---
title: Order Items
nav_label: Order Items
sidebar_position: 1.5
---

## The Order Item Object

| Attribute              | Type                                         | Description |
|:-----------------------|:---------------------------------------------|:-----|
| `id`                   | `string`                                     | The unique identifier for this order item. |
| `type`                 | `string`                                     | The `type` represents the object being returned. |
| `product_id`           | `string`                                     | The unique identifier for this order item. |
| `name`                 | `string`                                     | The name of this order item. |
| `sku`                  | `string`                                     | The SKU code for the order item. |
| `quantity`             | `integer`                                    | The quantity of this item were ordered. |
| `unit_price`           | [`object`](#the-unit-price-object)           | The pricing information about a single instance of this item. |
| `discounts`            | [`object`](#the-discounts-object)            | The list of all promotion codes and corresponding discount amount applied for the item. |
| `value`                | [`object`](#the-value-object)                | The pricing information and total value of this order based on the quantity. |
| `links`                | [`object`](#the-links-object)                | A collection of URLs related to this resource. |
| `components`           | [`object`](#the-components-object)           | The bundle name, id, type, and quantity. |
| `bundle_configuration` | [`object`](#the-bundle_configuration-object) | The list of all the `selected_options`. |
| `meta`                 | [`object`](#the-meta-object)                 | Additional information [calculated](/docs/commerce-cloud/global-project-settings/settings-overview#calculation-method) for this order. |
| `relationships`        | [`object`](#the-relationships-object)        | The relationships object. |
| `catalog_source`       | `string`                                     | The catalog source. Always `pim` or `legacy`. |
| `catalog_id`           | `string`                                     | The unique identifier of the catalog associated with the product is shown if `catalog_source=pim` is set. |

## Sample Object

```json
{
    "data": [
        {
            "type": "order_item",
            "id": "4f3d66d5-c42b-45d5-86fb-08e38f466fc7",
            "quantity": 1,
            "product_id": "24f50e56-b229-46ad-8ab6-eb0b8d51429f",
            "name": "$10 off your order!",
            "sku": "10off",
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
                    "created_at": "2022-10-19T22:03:37Z",
                    "updated_at": "2022-10-19T22:03:37Z"
                }
            },
            "relationships": {
                "cart_item": {
                    "data": {
                        "type": "cart_item",
                        "id": "8561c752-9e6a-480c-b02f-57563144af36"
                    }
                }
            }
        },
        {
            "type": "order_item",
            "id": "d3c5fcd1-80dc-4b3b-b8d3-a2ce0ebedc60",
            "quantity": 1,
            "product_id": "ed9faf9e-d131-44e9-ac60-9a4037c9bd09",
            "name": "nested bundle",
            "sku": "nested-bundle",
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
            "links": {},
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
                    "created_at": "2022-10-19T22:03:37Z",
                    "updated_at": "2022-10-19T22:03:37Z"
                }
            },
            "relationships": {
                "cart_item": {
                    "data": {
                        "type": "cart_item",
                        "id": "f003b967-6d12-4289-8d39-4451ea0ea17a"
                    }
                }
            },
            "catalog_id": "09b9359f-897f-407f-89a2-702e167fe781",
            "catalog_source": "pim"
        }
    ]
}
```

## The `unit price` Object

| Attribute                 | Type      | Description                           |
|:--------------------------|:----------|:--------------------------------------|
| `unit_price.amount`       | `integer` | The singular price of this item.      |
| `unit_price.currency`     | `string`  | The unit price currency of this item. |
| `unit_price.includes_tax` | `boolean` | Is the price inclusive of tax.        |

## The `value` Object

| Attribute            | Type      | Description                               |
|:---------------------|:----------|:------------------------------------------|
| `value.amount`       | `integer` | The total price for this item (`quantity` \* `unit_price.amount`). |
| `value.currency`     | `string`  | The value currency of this item.          |
| `value.includes_tax` | `boolean` | Is the price inclusive of tax.            |

## The `discounts` Object

| Attribute                       | Type      | Description                    |
|:--------------------------------|:----------|:-------------------------------|
| `discounts.amount.amount`       | `integer` | The discount amount for this item. |
| `discounts.amount.currency`     | `string`  | The currency for this item.    |
| `discounts.amount.includes_tax` | `string`  | Is the discount inclusive of tax? |
| `discounts.code`                | `string`  | The discount code.             |
| `discounts.id`                  | `string`  | The unique identifier of the promotion. |

## The `links` Object

| Attribute       | Type     | Description                                     |
|:----------------|:---------|:------------------------------------------------|
| `links.product` | `string` | A link to the product this cart item is a snapshot of (not for `custom_items`). |

## The `components` Object

| Attribute                     | Type     | Description                       |
|:------------------------------|:---------|:----------------------------------|
| `components.name`             | `string` | The component name. The component name is the name that is displayed in your storefront. |
| `components.options`          | `array`  | The product options that make up this component. |
| `components.options.id`       | `string` | The unique Id of the product you want to add to their component. |
| `components.options.type`     | `string` | Must be always `product`.         |
| `components.options.quantity` | `string` | The number of this product option that a shopper must purchase. |

## The `bundle_configuration` Object

| Attribute                               | Type     | Description             |
|:----------------------------------------|:---------|:------------------------|
| `bundle_configuration.selected_options` | `object` | The components a shopper has selected options from in a dynamic bundle. |

## The `meta` Object

| Attribute                                             | Type      | Description |
|:------------------------------------------------------|:----------|:---------|
| `meta.display_price`                                  | `object`  | Formatted display prices based on the currency settings for this request. |
| `meta.display_price.with_tax`                         | `object`  | Tax inclusive totals. |
| `meta.display_price.with_tax.unit`                    | `object`  | Tax inclusive totals for a single instance of this order item. |
| `meta.display_price.with_tax.unit.amount`             | `integer` | The raw price of a single instance this order item (inc tax). |
| `meta.display_price.with_tax.unit.currency`           | `string`  | The currency set for this order item. |
| `meta.display_price.with_tax.unit.formatted`          | `string`  | The tax inclusive formatted total of this order item line based on the currency. |
| `meta.display_price.with_tax.value`                   | `object`  | Tax inclusive totals for this order item based on the quantity. |
| `meta.display_price.with_tax.value.amount`            | `integer` | The raw total price this order item (inc tax). |
| `meta.display_price.with_tax.value.currency`          | `string`  | The currency set for this order item. |
| `meta.display_price.with_tax.value.formatted`         | `string`  | The tax inclusive formatted total of this order item line based on the currency. |
| `meta.display_price.without_tax`                      | `object`  | Tax exclusive totals. |
| `meta.display_price.without_tax.unit`                 | `object`  | Tax exclusive totals for a single instance of this order item. |
| `meta.display_price.without_tax.unit.amount`          | `integer` | The raw price of a single instance this order item (ex tax). |
| `meta.display_price.without_tax.unit.currency`        | `string`  | The currency set for this order item. |
| `meta.display_price.without_tax.unit.formatted`       | `string`  | The tax exclusive formatted total of this order item line based on the currency. |
| `meta.display_price.without_tax.value`                | `object`  | Tax exclusive totals for this order item based on the quantity. |
| `meta.display_price.without_tax.value.amount`         | `integer` | The raw total price for this order item (ex tax). |
| `meta.display_price.without_tax.value.currency`       | `string`  | The currency set for this order item. |
| `meta.display_price.without_tax.value.formatted`      | `string`  | The tax exclusive formatted total of this order item line based on the currency. |
| `meta.display_price.tax`                              | `object`  | Tax totals. |
| `meta.display_price.tax.unit`                         | `object`  | Tax totals for a single instance of this order item. |
| `meta.display_price.tax.unit.amount`                  | `integer` | The subtotal of the added tax value for a single instance of this order item. |
| `meta.display_price.tax.unit.currency`                | `string`  | The currency set for the tax. |
| `meta.display_price.tax.unit.formatted`               | `string`  | The formatted value for the tax subtotal. |
| `meta.display_price.tax.value`                        | `object`  | Tax totals for this order item based on the quantity. |
| `meta.display_price.tax.value.amount`                 | `integer` | The subtotal of the added tax value. |
| `meta.display_price.tax.value.currency`               | `string`  | The currency set for the tax. |
| `meta.display_price.tax.value.formatted`              | `string`  | The formatted value for the tax subtotal. |
| `meta.display_price.discount`                         | `object`  | The `discount` object describes the unit discount value and total discount value. |
| `meta.display_price.discount.unit`                    | `object`  | The `unit` object specifies the amount, currency, and formatted value of the total discounted amount applied to a unit item. |
| `meta.display_price.discount.unit.amount`             | `integer` | The discounted amount applied to individual unit item. |
| `meta.display_price.discount.unit.currency`           | `integer` | The currency set for the order item. |
| `meta.display_price.discount.unit.formatted`          | `string`  | The formatted value of the total discounted amount applied to the individual unit item. |
| `meta.display_price.discount.value`                   | `object`  | The `value` object specifies the amount, currency, and formatted value of the total discounted amount applied to the order based on the quantity. |
| `meta.display_price.discount.value.amount`            | `integer` | The total discounted amount applied to the order item based on the quantity. |` |
| `meta.display_price.discount.value.currency`          | `string`  | The currency set for the order item. |
| `meta.display_price.discount.value.formatted`         | `string`  | The formatted value of the total discounted amount applied to the order item based on the quantity. |
| `meta.display_price.without_discount`                 | `object`  | The `without_discount` object describes the unit value and total value of the order without the discount. |
| `meta.display_price.without_discount.unit`            | `object`  | The `unit` object specifies the amount, currency, and formatted value applied to a unit item without the discount. |
| `meta.display_price.without_discount.unit.amount`     | `integer` | The total price applied to a unit item without the discount. |
| `meta.display_price.without_discount.unit.currency`   | `string`  | The currency set for this order item. |
| `meta.display_price.without_discount.unit.formatted`  | `integer` | The total formatted amount for this item without the discount. |
| `meta.display_price.without_discount.value`           | `object`  | The `value` object specifies the amount, currency, and formatted value of the order item without the discount based on the quantity. |
| `meta.display_price.without_discount.value.amount`    | `integer` | The total amount applied to the order item without the discount based on the quantity. |
| `meta.display_price.without_discount.value.currency`  | `string`  | The currency set for this order item. |
| `meta.display_price.without_discount.value.formatted` | `string`  | The total amount applied to the order item without the discount based on the quantity. |
| `meta.display_price.discounts`                        | `object`  | The list of all promotion codes and corresponding discount amount applied for the item. |
| `meta.display_price.discounts.amount`                 | `integer` | The discounted amount applied to item. |
| `meta.display_price.discounts.currency`               | `string`  | The currency set for this order item. |
| `meta.display_price.discounts.formatted`              | `string`  | The formatted value of the discount price applied for this item. |
| `meta.timestamps`                                     | `object`  | Timestamps for this product. |
| `meta.timestamps.created_at`                          | `string`  | The creation date of this product. |
| `meta.timestamps.updated_at`                          | `string`  | The last updated date of this product. |

## The `relationships` Object

| Attribute                           | Type     | Description                 |
|:------------------------------------|:---------|:----------------------------|
| `relationships.cart_item`           | `object` | The cart item.              |
| `relationships.cart_item.data`      | `object` | The associated cart.        |
| `relationships.cart_item.data.type` | `string` | The type represents the object being returned. |
| `relationships.cart_item.data.id`   | `string` | The unique identifier for this cart item. |
| `relationships.taxes`               | `object` | The taxes object.           |
| `relationships.taxes.data`          | `array`  | Array of tax items associated with the order item. |
| `relationships.taxes.data.type`     | `string` | The type represents the object being returned. |
| `relationships.taxes.data.id`       | `string` | The unique identifier for this tax item. |
