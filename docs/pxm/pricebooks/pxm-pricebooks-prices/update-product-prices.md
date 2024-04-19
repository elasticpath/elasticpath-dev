---
title: Update a Product Price in a Price Book
nav_label: Update Product Price
sidebar_position: 40
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

You can update a product price in a price book.

## `PUT` Update a Product Price in a Price Book

```http
https://useast.api.elasticpath.com/pcm/pricebooks/:id/prices/:priceId
```

## Parameters

### Path parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `id` | Required | `string` | The unique identifier of the price book. |
| `priceId` | Required | `string` | The unique identifier of the product price. |

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token to grant the API access. |

### Body

Required. A  [`ProductPrice`](/docs/pxm/pricebooks/pxm-pricebooks/pxm-pricebooks-overview#the-productprice-object) object with the following attributes:

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `id` | Required | `string`| The generated unique identifier of the product price resource. The product price ID not the same as its product ID, which might appear in multiple pricebooks with different prices. |
| `type` | Required | `string` | Always: `product-price` |
| `attributes.sku` | Required | `string` | The unique stock keeping unit (SKU) represents the exact variant of a product item being sold in the store. |
| `attributes.currencies` | Required | [`object`](/docs/pxm/pricebooks/pxm-pricebooks/pxm-pricebooks-overview#the-currencies-object) | A collection of one or more `currencies: <key>` objects. |
| `attributes.currencies: <key>` | Required | `string` | Where `<key>` is the three-letter ISO code for the currency associated with this price. |
| `attributes.currencies: <key>: amount` | Required | `integer` | The price in the lowest denomination for the specified currency. |
| `attributes.currencies: <key>: includes_tax` | Optional | `boolean` | Whether this price includes tax. Default is `false`. |
| `attributes.currencies: <key>: tiers` | Optional | [`object`](/docs/pxm/pricebooks/pxm-pricebooks/pxm-pricebooks-overview#the-tiers-object) | The price tier that an item is eligible for based on the quantity purchased. **Note**: You cannot have conflicting tiers within the same currencies block. |
| `attributes.sales` | Optional | [`object`](/docs/pxm/pricebooks/pxm-pricebooks/pxm-pricebooks-overview#the-sales-object) | The sales price that an item is eligible for based on the price book. **Note**: You cannot have conflicting sales prices within the same block. |

### Update request example

```bash
curl -X PUT https://useast.api.elasticpath.com/pcm/pricebooks/2cf0d38c-58aa-420d-8658-4385dccea609/prices/76c78677-a22a-4104-8fb7-11f1cfc3b146 \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
       "data": {
           "id": "76c78677-a22a-4104-8fb7-11f1cfc3b146",
            "type": "product-price",
            "attributes": {
                "sku": "product-1"
                "currencies": {
                    "USD": {
                        "amount": 100,
                        "includes_tax": false
                    },
                    "GBP": {
                        "amount": 75,
                        "includes_tax": true
                    },
                    "CAD": {
                        "amount": 125,
                        "includes_tax": false
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
            }
       }
     }
```

### Response example

`200 OK`

```json
{
    "data": {
        "id": "76c78677-a22a-4104-8fb7-11f1cfc3b146",
        "attributes": {
            "sku": "product-1",
            "currencies": {
                "CAD": {
                    "amount": 125,
                    "includes_tax": false,
                    "tiers": {
                        "min_10": {
                            "minimum_quantity": 10,
                            "amount": 50
                        }
                    }
                },
                "GBP": {
                    "amount": 75,
                    "includes_tax": true,
                    "tiers": {
                        "min_10": {
                            "minimum_quantity": 10,
                            "amount": 50
                        }
                    }
                },
                "USD": {
                    "amount": 100,
                    "includes_tax": false,
                    "tiers": {
                        "min_10": {
                            "minimum_quantity": 10,
                            "amount": 50
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

### Bundle sale price update request example

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
                                "amount": 100,
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
The `includes_tax` setting must be the same for all options in a bundle. If you include tax for an option in a component within a bundle, you must include tax for all options in the bundle. You cannot set `includes_tax` setting only for an individual option in a bundle.
:::

### Response Example

`200 OK`

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
                  "bundle_ids": [
                      "a3cacaa9-b5bb-4096-bb6b-af41394ca850"
                  ],
                    "schedule": {},
                    "currencies": {
                        "USD": {
                            "amount": 100,
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

## Related Resources

- [Bundles - Product Experience Manager](/docs/pxm/products/pxm-bundles/pxm-bundles)
