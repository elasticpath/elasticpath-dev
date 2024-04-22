---
title: Create Product Prices in a Price Book
nav_label: Create Product Prices
sidebar_position: 30
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `POST` Add Product Prices to a Price Book

```http
https://useast.api.elasticpath.com/pcm/pricebooks/:id/prices
```

Adds the prices for a product to a specified price book. If the prices for the product already exist in the price book, the operation fails and the existing product prices are not updated.

:::tip
To update prices for a product, see [Update product prices](/docs/pxm/pricebooks/pxm-pricebooks-prices/update-product-prices).
:::

## Parameters

### Path parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `id` | Required | `string` | The unique identifier of the price book. |

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

Required. A [`ProductPrice`](/docs/pxm/pricebooks/pxm-pricebooks/pxm-pricebooks-overview#the-productprice-object) object with the following attributes:

{% table %}
* Name
* Required
* Type
* Description
---
* `type`
* Required
* `string`
* Must be `product-price`.
---
* `sku`
* Required
* `string`
* The product SKU that the prices belongs to. **Note**: If the prices for the product already exist in the price book, the operation fails and the existing product prices are not created.
---
* `external_ref`
* Optional
* `string`
* The unique attribute associated with the price book. This could be an external reference from a separate company system, for example. The maximum length is 2048 characters. A price external reference must be unique within a price book. A price external reference can be duplicated across multiple price books.
---
* `currencies`
* Required
* `object`
* 
   A collection of one or more `currencies: <key>` objects where *key* is the three-letter ISO code for the currency associated with this price. This is a product's price.
   {% list type="checkmark" %}
  *
    (Required) *key*
     {% list type="checkmark" %}
     * **Type**: `string`
     * **Description**: where *key* is the three-letter ISO code for the currency associated with this price.
     {% /list %}
  *
    (Required) `Amount`
     {% list type="checkmark" %}
     * **Type**: `integer`
     * **Description**: The price in the lowest denomination for the specified currency. This is a product's list price.
     {% /list %}
  *
    (Optional) `includes_tax`
     {% list type="checkmark" %}
     * **Type**: `integer`
     * **Description**: Whether this price includes tax. Default is `false`.
     {% /list %}
  *
     (Optional) `tiers`
     {% list type="checkmark" %}
      * **Type**: `object`
      * **Description**: The price tier that an item is eligible for based on the quantity purchased. You cannot have conflicting tiers within the same currencies block.
      {% /list %}
      *
        (Required) *key*
        {% list type="checkmark" %}
          * **Type**: `string`
          * **Description**: where *key* is the name of the tier, for example, `Pencils`.
        {% /list %}
      *
        (Required) `minimum_quantity`
        {% list type="checkmark" %}
          * **Type**: `integer`
          * **Description**: The minimum quantity defined for the specified price.
        {% /list %}
      *
         (Optional) `amount`
         {% list type="checkmark" %}
          * **Type**: `integer`
          * **Description**: The price for each quantity.
         {% /list %}
  {% /list %}
---
* `sales`
* Optional
* `object`
* 
  The sales price that an item is eligible for based on the price book.
  {% list type="checkmark" %}
  *
    (Required) *key*
    {% list type="checkmark" %}
      * **Type**: `string`
      * **Description**: where *key* is the name of the sale, such as `Summer Sale`
    {% /list %}
  *
    (Optional) `bundle_ids`
    {% list type="checkmark" %}
      * **Type**: `string`
      * **Description**: A list of product IDs in a bundle that you want to specify a sale price for.
    {% /list %}
  * 
    (Required) `schedule`
    {% list type="checkmark" %}
      * **Type**: `object`
      * **Description**: The schedule of the sale. Contains an optional `valid_from` and `valid_to` parameter for the start and end date of the sale.

        {% list type="checkmark" %}    

          For sale prices in the same price book:
    
           {% list type="checkmark" %}
           - the schedules must not overlap.
           - if you have just one sale price, without a schedule, this is effectively a permanent price. If you want to add more sale prices to the price book, you must configure a schedule for the sale price.
           {% /list %}
    
         Sale prices in different price books can have overlapping schedules.
        {% /list %}
    
    {% /list %}
  *
     (Required) `currencies`
     {% list type="checkmark" %}
      * **Type**: `object`
      * **Description**: A collection of one or more `currencies: <key>` objects. This is a product's sale price. Both list and sale price (or was/is prices) are available in the catalog response, enabling you to display slash pricing on your storefront. 
     {% /list %}
      *   
        (Required) *key*
        {% list type="checkmark" %}
         * **Type**: `string`
         * **Description**: where *key* is the three-letter ISO code for the currency associated with this price.
        {% /list %}
     *
       (Required) `Amount`
       {% list type="checkmark" %}
        * **Type**: `integer`
        * **Description**: The price in the lowest denomination for the specified currency. This is a product's list price.
        {% /list %}
    *
        (Optional) `includes_tax`
        {% list type="checkmark" %}
        * **Type**: `integer`
        * **Description**: Whether this price includes tax. Default is `false`.
        {% /list %}
    *
        (Optional) `tiers`
        {% list type="checkmark" %}
         * **Type**: `object`
         * **Description**: The price tier that an item is eligible for based on the quantity purchased. You cannot have conflicting tiers within the same currencies block.
        {% /list %}
      *
         (Required) *key*
         {% list type="checkmark" %}
          * **Type**: `string`
          * **Description**: where *key* is the name of the tier, for example, `Pencils`.
         {% /list %}
      *
          (Required) `minimum_quantity`
          {% list type="checkmark" %}
          * **Type**: `integer`
          * **Description**: The minimum quantity defined for the specified price.
          {% /list %}
      *
          (Optional) `amount`
          {% list type="checkmark" %}
          * **Type**: `integer`
          * **Description**: The price for each quantity.
          {% /list %}
        
  {% /list %}
{% /table %}

## Request Example

```bash
curl -X POST https://useast.api.elasticpath.com/pcm/pricebooks/2cf0d38c-58aa-420d-8658-4385dccea609/prices \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
        "data": {
            "type": "product-price",
            "attributes": {
                "sku": "product-1",
                "currencies": {
                    "USD": {
                        "amount": 100,
                        "includes_tax": false,
                        "tiers": {
                            "min_5": {
                                "minimum_quantity": 5,
                                "amount": 50
                            }
                        }
                    },
                    "GBP": {
                        "amount": 73,
                        "includes_tax": true,
                        "tiers": {
                            "min_20": {
                                "minimum_quantity": 20,
                                "amount": 60
                            }
                        }
                    },
                    "CAD": {
                        "amount": 127,
                        "includes_tax": false,
                        "tiers": {
                            "min_10": {
                                "minimum_quantity": 10,
                                "amount": 100
                            }
                        }
                    }
                },
                "sales": {
                    "summer": {
                        "schedule": {},
                        "currencies": {
                            "USD": {
                                "amount": 90,
                                "includes_tax": false,
                                "tiers": {
                                    "min_5": {
                                        "minimum_quantity": 5,
                                        "amount": 40
                                    }
                                }
                            },
                            "CAD": {
                                "amount": 117,
                                "includes_tax": false,
                                "tiers": {
                                    "min_10": {
                                        "minimum_quantity": 10,
                                        "amount": 80
                                    }
                                }
                            },
                            "GBP": {
                                "amount": 65,
                                "includes_tax": true,
                                "tiers": {
                                    "min_20": {
                                        "minimum_quantity": 20,
                                        "amount": 50
                                    }
                                }
                            }
                        }
                    }
                }
            },
          }'
```

## Response Example

`201 OK`

```json
{
    "data": {
        "id": "76c78677-a22a-4104-8fb7-11f1cfc3b146",
        "attributes": {
            "currencies": {
                "USD": {
                    "amount": 100,
                    "includes_tax": false,
                    "tiers": {
                        "min_5": {
                            "minimum_quantity": 5,
                            "amount": 50
                        }
                    }
                },
                "CAD": {
                    "amount": 127,
                    "includes_tax": false,
                    "tiers": {
                        "min_10": {
                            "minimum_quantity": 10,
                            "amount": 100
                        }
                    }
                },
                "GBP": {
                    "amount": 73,
                    "includes_tax": true,
                    "tiers": {
                        "min_20": {
                            "minimum_quantity": 20,
                            "amount": 60
                        }
                    }
                }
            },
            "sales": {
                "summer": {
                    "schedule": {},
                    "currencies": {
                        "USD": {
                            "amount": 90,
                            "includes_tax": false,
                            "tiers": {
                                "min_5": {
                                    "minimum_quantity": 5,
                                    "amount": 40
                                }
                            }
                        },
                        "CAD": {
                            "amount": 117,
                            "includes_tax": false,
                            "tiers": {
                                "min_10": {
                                    "minimum_quantity": 10,
                                    "amount": 80
                                }
                            }
                        },
                        "GBP": {
                            "amount": 65,
                            "includes_tax": true,
                            "tiers": {
                                "min_20": {
                                    "minimum_quantity": 20,
                                    "amount": 50
                                }
                            }
                        }
                    }
                }
            },
            "sku": "product-1"
        },
        "meta": {
            "owner": "store"
        },
        "type": "product-price"
    },
    "links": {
        "self": "/pcm/pricebooks/2cf0d38c-58aa-420d-8658-4385dccea609/prices/76c78677-a22a-4104-8fb7-11f1cfc3b146"
    }
}
```

## Create Bundle Sale Price 

Bundles consist of components and options. Each component must have at least one or more options. Each option is a product and a quantity. You can assign a sale price to a product option in a bundle component. 

1. In the product price book, create a sale.
2. Specify the bundle ID that contains the product option that you want to provide a sale price for.
3. Provide the sale price for the product option. You can add the same sale price for the same product option using an array of `bundle_ids` if you want to sell the product as part of different bundles. The sales price only applies to the bundle.

### Request example

The following request creates bundle sale price for the given product:

```bash
curl -X POST https://useast.api.elasticpath.com/pcm/pricebooks/2cf0d38c-58aa-420d-8658-4385dccea609/prices \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
        "data": {
            "type": "product-price",
            "attributes": {
                "currencies": {
                    "USD": {
                        "amount": 100,
                        "includes_tax": false,
                        "tiers": {
                            "min_5": {
                                "minimum_quantity": 5,
                                "amount": 50
                            }
                        }
                    },
                    "GBP": {
                        "amount": 73,
                        "includes_tax": true,
                        "tiers": {
                            "min_20": {
                                "minimum_quantity": 20,
                                "amount": 60
                            }
                        }
                    },
                    "CAD": {
                        "amount": 127,
                        "includes_tax": false,
                        "tiers": {
                            "min_10": {
                                "minimum_quantity": 10,
                                "amount": 100
                            }
                        }
                    }
                },
                "sales": {
                    "summer": {
                        "bundle_ids": [
                          "a3cacaa9-b5bb-4096-bb6b-af41394ca850"
                        ],
                        "schedule": {},
                        "currencies": {
                            "USD": {
                                "amount": 90,
                                "includes_tax": false,
                                "tiers": {
                                    "min_5": {
                                        "minimum_quantity": 5,
                                        "amount": 40
                                    }
                                }
                            },
                            "CAD": {
                                "amount": 117,
                                "includes_tax": false,
                                "tiers": {
                                    "min_10": {
                                        "minimum_quantity": 10,
                                        "amount": 80
                                    }
                                }
                            },
                            "GBP": {
                                "amount": 65,
                                "includes_tax": true,
                                "tiers": {
                                    "min_20": {
                                        "minimum_quantity": 20,
                                        "amount": 50
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "sku": "product-1"
          }'
```

:::note
The `includes_tax` setting must be the same for all options in a bundle. If you include tax for an option in a component within a bundle, you must include tax for all options in the bundle. You cannot set `includes_tax` setting for an individual option in a bundle.
:::

### Response Example

`200 OK`

```json
{
    "data": {
        "id": "76c78677-a22a-4104-8fb7-11f1cfc3b146",
        "attributes": {
          "sku": "product-1",
            "currencies": {
                "USD": {
                    "amount": 100,
                    "includes_tax": false,
                    "tiers": {
                        "min_5": {
                            "minimum_quantity": 5,
                            "amount": 50
                        }
                    }
                },
                "CAD": {
                    "amount": 127,
                    "includes_tax": false,
                    "tiers": {
                        "min_10": {
                            "minimum_quantity": 10,
                            "amount": 100
                        }
                    }
                },
                "GBP": {
                    "amount": 73,
                    "includes_tax": true,
                    "tiers": {
                        "min_20": {
                            "minimum_quantity": 20,
                            "amount": 60
                        }
                    }
                }
            },
            "sales": {
                "summer": {
                  "bundle_ids": [
                      "a3cacaa9-b5bb-4096-bb6b-af41394ca850"
                  ],
                    "schedule": {},
                    "currencies": {
                        "USD": {
                            "amount": 90,
                            "includes_tax": false,
                            "tiers": {
                                "min_5": {
                                    "minimum_quantity": 5,
                                    "amount": 40
                                }
                            }
                        },
                        "CAD": {
                            "amount": 117,
                            "includes_tax": false,
                            "tiers": {
                                "min_10": {
                                    "minimum_quantity": 10,
                                    "amount": 80
                                }
                            }
                        },
                        "GBP": {
                            "amount": 65,
                            "includes_tax": true,
                            "tiers": {
                                "min_20": {
                                    "minimum_quantity": 20,
                                    "amount": 50
                                }
                            }
                        }
                    }
                }
            },
        },
        "type": "product-price"
    },
    "links": {
        "self": "/pcm/pricebooks/2cf0d38c-58aa-420d-8658-4385dccea609/prices/76c78677-a22a-4104-8fb7-11f1cfc3b146"
    }
}
```

## Create Bundle Volume Price

Bundles consist of components and options. Each component must have at least one or more options. Each option is a product and a quantity. You can assign a sale price to a product option in a bundle component.

1. In the product price book, create a product price.
2. Specify the bundle ID that contains the product option that you want to provide a tier price for.
3. Provide the tier price for the product option. The tier price only applies to the bundle.

### Request Example

```bash
curl -X POST https://useast.api.elasticpath.com/pcm/pricebooks/2cf0d38c-58aa-420d-8658-4385dccea609/prices \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
            "data": {
              "type": "product-price",
              "attributes": {
                "sku": "478811",
                "currencies": {
                   "USD": {
                     "amount": 100,
                     "includes_tax": false,
                     "tiers": {
                       "min_5": {
                         "minimum_quantity": 5,
                        "amount": 50
                        }
                       }
                     }
                   }
                }
              }
            }
```

### Response Example

`200 OK`

```json
{
    "data": {
        "id": "4250c583-2f19-46de-9df5-3cbbd704f61f",
        "attributes": {
            "currencies": {
                "USD": {
                    "amount": 100,
                    "includes_tax": false,
                    "tiers": {
                        "min_5": {
                            "amount": 50,
                            "minimum_quantity": 5
                        }
                    }
                }
            },
            "sku": "478811"
        },
        "meta": {
            "owner": "store"
        },
        "type": "product-price"
    },
    "links": {
        "self": "/pcm/pricebooks/fe3f3f4c-bf36-44fc-9af6-e460276b2a45/prices/4250c583-2f19-46de-9df5-3cbbd704f61f"
    }
}
```

## Related Resources

- [Bundles](/docs/pxm/products/pxm-bundles)
