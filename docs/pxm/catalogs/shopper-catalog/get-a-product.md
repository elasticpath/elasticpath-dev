---
id: get-a-product
title: Get a Product
sidebar_label: Get a Product
sidebar_position: 110
---

## `GET` Get a Product

```text
https://useast.api.elasticpath.com/catalog/products/:productId
```

Returns the specified product from the catalog. The product must be in the `live` status.

If you have multiple catalog rules defined, the rule that best matches the shopperʼs context is used to determine which catalog is retrieved. For information about how rules are matched, see [Resolving Catalog Rules](/docs/pxm/catalogs/shopper-catalog/catalog-shopper-overview#resolving-catalog-rules).

You can see the parent nodes a product is associated with in the `bread_crumbs` and `bread_crumb_nodes` metadata for each product. This is useful if you want to improve how your shoppers search your store, for example. For more information, see [Catalog Releases Overview](/docs/pxm/catalogs/catalog-latest-release/overview).

## Parameters

### Path parameters

| Name        | Required | Type     | Description                          |
|:------------|:---------|:---------|:-------------------------------------|
| `productId` | Required | `string` | The unique identifier for a product. |

### Headers

| Name                      | Required | Type     | Description                |
|:--------------------------|:---------|:---------|:---------------------------|
| `Authorization`           | Required | `string` | The Bearer token required to get access to the API. Implicit Bearer token only returns products with `live` status. The token does not return products with `draft` status. |
| `EP-Channel`              | Optional | `string` | The channel, such as website or mobile app. Corresponds to the `channel` attribute in a `rule` object. |
| `X-Moltin-Customer-Token` | Optional | `string` | The unique identifier of a signed-in customer. Corresponds to the `customer_ids` attribute in a `rule` object. |
| `EP-Context-Tag`          | Optional | `string` | A tag defined in the store, such as `clearance`. Corresponds to the `tag` attribute in a `rule` object. |
| `accept-language` | Optional | `string` | The natural language and locale that your storefront prefers. See [accept-language](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language). |

### Query parameters

| Name       | Required | Type    | Description                                                                                                                                                                                                                      |
|:-----------|:---------|:--------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `include`  | Optional | `string` | The top-level resources, such as files or main image, component product data and key attribute data, such as SKU or slug, to return for component products in a product bundle. See [Including Resources](#including-resources). |

## Including Resources

You can use the `include` parameter to include the following resources with this endpoint.

| Parameter            | Required | Description                                                                                                                                                                                                                                                                                 |
|:---------------------|:---------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------| 
| `component_products` | Optional | The  component product data and key attribute data, such as SKU or slug, to return for component products in a product bundle. Pagination does not apply and a maximum of 1500 options are returned. See [Create a Bundle](/docs/pxm/products/pxm-bundles/pxm-bundles-api/create-a-bundle). |
| `main_image`         | Optional | The main images associated with a product. See [Files](/docs/pxm/products/product-assets/assets-overview).                                                                                                                                                                                  |
| `files`              | Optional | Any files associated with a product. See [Files](/docs/pxm/products/product-assets/assets-overview).                                                                                                                                                                                        |

For more information, see [Including Resources](/docs/commerce-cloud/api-overview/includes).


## Request Example

```bash
curl GET https://useast.api.elasticpath.com/catalog/products/14e055d0-eebb-4090-8594-a0a7aeea2151 \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

## Response Example

```json
{
    "data": {
        "type": "product",
        "id": "8fccaa19-dba9-4621-8d11-31a222a68c7c",
        "attributes": {
            "availability": "available",
            "published_at": "2021-04-20T21:06:03.009Z",
            "base_product": false,
            "base_product_id": "cdf574bc-e36e-48fc-9eac-01c87839b285",
            "commodity_type": "physical",
            "upc_ean": "0123456",
            "manufacturer_part_num": "mfn1",
            "created_at": "2021-03-10T20:00:43.734Z",
            "description": "Long sleeve shirt",
            "dimensions": "4x5x2",
            "manage_stock": false,
            "name": "Blue shirt",
            "price": {
                "USD": {
                    "amount": 100,
                    "includes_tax": false
                },
                "CAD": {
                    "amount": 100,
                    "includes_tax": false
                },
                "GBP": {
                    "amount": 100,
                    "includes_tax": false
                }
            },
            "tiers": {
                "min_5": {
                    "minimum_quantity": 5,
                    "price": {
                        "USD": {
                            "amount": 100,
                            "includes_tax": false
                        },
                        "CAD": {
                            "amount": 100,
                            "includes_tax": false
                        },
                        "GBP": {
                            "amount": 100,
                            "includes_tax": false
                        }
                    }
                },
                "min_10": {
                    "minimum_quantity": 10,
                    "price": {
                        "USD": {
                            "amount": 150,
                            "includes_tax": false
                        },
                        "CAD": {
                            "amount": 150,
                            "includes_tax": false
                        },
                        "GBP": {
                            "amount": 150,
                            "includes_tax": false
                        }
                    }
                },
                "min_15": {
                    "minimum_quantity": 15,
                    "price": {
                        "USD": {
                            "amount": 175,
                            "includes_tax": false
                        },
                        "CAD": {
                            "amount": 175,
                            "includes_tax": false
                        },
                        "GBP": {
                            "amount": 175,
                            "includes_tax": false
                        }
                    }
                }
            },
            "components": {
                "buttons": {
                    "name": "Buttoned down shirt",
                    "sort_order": 1,
                    "options": [
                        {
                            "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                            "type": "product",
                            "quantity": 2
                        }
                    ]
                },
                "pockets": {
                    "name": "Shirt with pockets",
                    "sort_order": 2,
                    "options": [
                        {
                            "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                            "type": "product",
                            "quantity": 2,
                            "sort_order": 2
                        }
                    ]
                },
                "collar": {
                    "name": "Shirt with collar",
                    "sort_order": 3,
                    "options": [
                        {
                            "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                            "type": "product",
                            "quantity": 2
                        }
                    ]
                }
            },
            "product_hash": "string",
            "sku": "blue-shirt",
            "slug": "blue-shirt",
            "status": "live",
            "updated_at": "2021-03-10T20:00:43.734Z",
            "weight": {
                "g": 997.903,
                "kg": 1,
                "lb": 2.2,
                "oz": 32
            },
            "extensions": {
                "size": {
                    "small": "smallID",
                    "medium": "mediumID",
                    "large": "largeID"
                }
            }
        },
        "relationships": {
            "categories": [
                {
                    "id": "65477ce0-fcb8-436b-a120-3d57979421dd",
                    "label": "category",
                    "name": "Formal dresswear"
                }
            ],
            "brands": [
                {
                    "id": "65477ce0-fcb8-436b-a120-3d57979421dd",
                    "label": "category",
                    "name": "Formal dresswear"
                }
            ],
            "collections": [
                {
                    "id": "65477ce0-fcb8-436b-a120-3d57979421dd",
                    "label": "category",
                    "name": "Formal dresswear"
                }
            ],
            "parent": {
                "data": {
                    "type": "product",
                    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
                }
            },
            "children": {
                "data": [
                    {
                        "type": "product",
                        "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
                    }
                ]
            },
            "files": {
                "data": [
                    {
                        "type": "file",
                        "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
                    }
                ]
            },
            "main_image": {
                "data": {
                    "type": "main_image",
                    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
                }
            },
            "catalog_source": "pim",
            "sale_id": "fall_sale21",
            "sale_expires": "2022-01-01T00:00:00.000",
            "original_price": {
                "USD": {
                    "amount": 100,
                    "includes_tax": false
                },
                "CAD": {
                    "amount": 100,
                    "includes_tax": false
                },
                "GBP": {
                    "amount": 100,
                    "includes_tax": false
                }
            },
            "original_display_price": {
                "with_tax": {
                    "amount": 47500,
                    "currency": "USD",
                    "formatted": "$475.00"
                },
                "without_tax": {
                    "amount": 47500,
                    "currency": "USD",
                    "formatted": "$475.00"
                }
            },
            "component_products": {
                "button_shirt": {
                    "sale_id": "winter_sale22",
                    "sale_expires": "2022-01-01T00:00:00.000",
                    "price": {
                        "USD": {
                            "amount": 100,
                            "includes_tax": false
                        },
                        "CAD": {
                            "amount": 100,
                            "includes_tax": false
                        },
                        "GBP": {
                            "amount": 100,
                            "includes_tax": false
                        }
                    },
                    "display_price": {
                        "with_tax": {
                            "amount": 47500,
                            "currency": "USD",
                            "formatted": "$475.00"
                        },
                        "without_tax": {
                            "amount": 47500,
                            "currency": "USD",
                            "formatted": "$475.00"
                        }
                    },
                    "original_price": {
                        "USD": {
                            "amount": 100,
                            "includes_tax": false
                        },
                        "CAD": {
                            "amount": 100,
                            "includes_tax": false
                        },
                        "GBP": {
                            "amount": 100,
                            "includes_tax": false
                        }
                    },
                    "original_display_price": {
                        "with_tax": {
                            "amount": 47500,
                            "currency": "USD",
                            "formatted": "$475.00"
                        },
                        "without_tax": {
                            "amount": 47500,
                            "currency": "USD",
                            "formatted": "$475.00"
                        }
                    }
                },
                "pocket_shirt": {
                    "sale_id": "fall_sal21",
                    "sale_expires": "2021-11-01T00:00:00.000",
                    "price": {
                        "USD": {
                            "amount": 100,
                            "includes_tax": false
                        },
                        "CAD": {
                            "amount": 100,
                            "includes_tax": false
                        },
                        "GBP": {
                            "amount": 100,
                            "includes_tax": false
                        }
                    },
                    "display_price": {
                        "with_tax": {
                            "amount": 47500,
                            "currency": "USD",
                            "formatted": "$475.00"
                        },
                        "without_tax": {
                            "amount": 47500,
                            "currency": "USD",
                            "formatted": "$475.00"
                        }
                    },
                    "original_price": {
                        "USD": {
                            "amount": 100,
                            "includes_tax": false
                        },
                        "CAD": {
                            "amount": 100,
                            "includes_tax": false
                        },
                        "GBP": {
                            "amount": 100,
                            "includes_tax": false
                        }
                    },
                    "original_display_price": {
                        "with_tax": {
                            "amount": 47500,
                            "currency": "USD",
                            "formatted": "$475.00"
                        },
                        "without_tax": {
                            "amount": 47500,
                            "currency": "USD",
                            "formatted": "$475.00"
                        }
                    }
                },
                "summerSale": {
                    "sale_id": "summer_sale22",
                    "sale_expires": "2022-08-01T00:00:00.000",
                    "price": {
                        "USD": {
                            "amount": 100,
                            "includes_tax": false
                        },
                        "CAD": {
                            "amount": 100,
                            "includes_tax": false
                        },
                        "GBP": {
                            "amount": 100,
                            "includes_tax": false
                        }
                    },
                    "display_price": {
                        "with_tax": {
                            "amount": 47500,
                            "currency": "USD",
                            "formatted": "$475.00"
                        },
                        "without_tax": {
                            "amount": 47500,
                            "currency": "USD",
                            "formatted": "$475.00"
                        }
                    },
                    "original_price": {
                        "USD": {
                            "amount": 100,
                            "includes_tax": false
                        },
                        "CAD": {
                            "amount": 100,
                            "includes_tax": false
                        },
                        "GBP": {
                            "amount": 100,
                            "includes_tax": false
                        }
                    },
                    "original_display_price": {
                        "with_tax": {
                            "amount": 47500,
                            "currency": "USD",
                            "formatted": "$475.00"
                        },
                        "without_tax": {
                            "amount": 47500,
                            "currency": "USD",
                            "formatted": "$475.00"
                        }
                    }
                }
            },
            "tiers": {
                "summerSale": {
                    "sale_id": "summer_sale22",
                    "sale_expires": "2022-08-01T00:00:00.000",
                    "display_price": {
                        "with_tax": {
                            "amount": 47500,
                            "currency": "USD",
                            "formatted": "$475.00"
                        },
                        "without_tax": {
                            "amount": 47500,
                            "currency": "USD",
                            "formatted": "$475.00"
                        }
                    },
                    "original_price": {
                        "USD": {
                            "amount": 100,
                            "includes_tax": false
                        },
                        "CAD": {
                            "amount": 100,
                            "includes_tax": false
                        },
                        "GBP": {
                            "amount": 100,
                            "includes_tax": false
                        }
                    },
                    "original_display_price": {
                        "with_tax": {
                            "amount": 47500,
                            "currency": "USD",
                            "formatted": "$475.00"
                        },
                        "without_tax": {
                            "amount": 47500,
                            "currency": "USD",
                            "formatted": "$475.00"
                        }
                    }
                },
                "fallSale": {
                    "sale_id": "fall_sale21",
                    "sale_expires": "2021-11-01T00:00:00.000",
                    "display_price": {
                        "with_tax": {
                            "amount": 47500,
                            "currency": "USD",
                            "formatted": "$475.00"
                        },
                        "without_tax": {
                            "amount": 47500,
                            "currency": "USD",
                            "formatted": "$475.00"
                        }
                    },
                    "original_price": {
                        "USD": {
                            "amount": 100,
                            "includes_tax": false
                        },
                        "CAD": {
                            "amount": 100,
                            "includes_tax": false
                        },
                        "GBP": {
                            "amount": 100,
                            "includes_tax": false
                        }
                    },
                    "original_display_price": {
                        "with_tax": {
                            "amount": 47500,
                            "currency": "USD",
                            "formatted": "$475.00"
                        },
                        "without_tax": {
                            "amount": 47500,
                            "currency": "USD",
                            "formatted": "$475.00"
                        }
                    }
                },
                "fallSale": {
                    "sale_id": "fall_sale21",
                    "sale_expires": "2022-01-01T00:00:00.000",
                    "display_price": {
                        "with_tax": {
                            "amount": 47500,
                            "currency": "USD",
                            "formatted": "$475.00"
                        },
                        "without_tax": {
                            "amount": 47500,
                            "currency": "USD",
                            "formatted": "$475.00"
                        }
                    },
                    "original_price": {
                        "USD": {
                            "amount": 100,
                            "includes_tax": false
                        },
                        "CAD": {
                            "amount": 100,
                            "includes_tax": false
                        },
                        "GBP": {
                            "amount": 100,
                            "includes_tax": false
                        }
                    },
                    "original_display_price": {
                        "with_tax": {
                            "amount": 47500,
                            "currency": "USD",
                            "formatted": "$475.00"
                        },
                        "without_tax": {
                            "amount": 47500,
                            "currency": "USD",
                            "formatted": "$475.00"
                        }
                    }
                }
            },
            "variation_matrix": {
                "3fa85f64-5717-4562-b3fc-2c963f66afa6": "4cd092fe-8878-4d93-8438-c305d2c6fb1f"
            },
            "variations": [
                {
                    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                    "name": "color",
                    "sort_order": 5,
                    "options": [
                        {
                            "id": "4cd092fe-8878-4d93-8438-c305d2c6fb1f",
                            "name": "Red",
                            "description": "Red",
                            "sort_order": 23
                        }
                    ]
                }
            ],
            "language": "en-GB"
        },
        "meta": {
            "catalog_id": "362a16dc-f7c6-4280-83d6-4fcc152af091",
            "product_types": [
                "child"
            ],
            "bread_crumb_nodes": [
                "94b882fa-85de-470e-acb3-5b11358e02de",
                "04e748f1-83db-4013-85c8-9edfb0e1b5fa",
                "a96a898b-444c-40b6-9c27-5fc74d08e685"
             ],
             "bread_crumbs": {
                "04e748f1-83db-4013-85c8-9edfb0e1b5fa": [
                   "e5a64eae-56c2-48cd-b8b1-f5d3be734d52",
                   "94b882fa-85de-470e-acb3-5b11358e02de"
               ],
               "94b882fa-85de-470e-acb3-5b11358e02de": [
                   "e5a64eae-56c2-48cd-b8b1-f5d3be734d52"
               ],
               "a96a898b-444c-40b6-9c27-5fc74d08e685": [
                   "e5a64eae-56c2-48cd-b8b1-f5d3be734d52"
            ]
           },
            "display_price": {
                "with_tax": {
                    "amount": 47500,
                    "currency": "USD",
                    "formatted": "$475.00"
                },
                "without_tax": {
                    "amount": 47500,
                    "currency": "USD",
                    "formatted": "$475.00"
                }
            }
        }
    },
    "links": {
        "self": "catalog/products/8fccaa19-dba9-4621-8d11-31a222a68c7c"
    }
}
```

## Request Example with Include Component Products

```bash
curl GET https://useast.api.elasticpath.com/pcm/catalog/00efcc23-9bab-4bc7-9272-6b95111814e8?include=component_products
     -H "Authorization: Bearer XXXX" \
```

## Response Example with Include Component Products

```json
{
    "data": {
        "id": "00efcc23-9bab-4bc7-9272-6b95111814e8",
        "type": "product",
        "attributes": {
          /*** other product attributes ommitted ***/
    "included": {
        "component_products": [
            {
                "id": "d7b79eb8-19d8-45ea-86ed-2324a604dd9c",
                "type": "product",
                "attributes": {
                    "base_product": false,
                    "commodity_type": "physical",
                    "created_at": "2022-02-10T11:23:15.781Z",
                    "description": "Product 789651886289",
                    "manage_stock": false,
                    "manufacturer_part_num": "Product-mpn-789651886289",
                    "name": "PIMProduct 789651886289",
                    "price": {
                        "USD": {
                            "amount": 1000,
                            "includes_tax": true
                        }
                    },
                    "sku": "optSku1",
                    "slug": "product-slug-789651886289",
                    "status": "live",
                    "upc_ean": "789651886289",
                    "updated_at": "2022-02-10T11:23:25.283Z",
                    "published_at": "2022-02-14T10:54:17.286Z"
                },
                "meta": {
                    "catalog_id": "e647ddae-474e-47df-9615-bfa01eb39a76",
                    "catalog_source": "pim",
                    "product_types": [
                        "standard"
                    ],
                    "bread_crumbs": {
                        "04e748f1-83db-4013-85c8-9edfb0e1b5fa": [
                            "e5a64eae-56c2-48cd-b8b1-f5d3be734d52",
                            "94b882fa-85de-470e-acb3-5b11358e02de"
                        ],
                        "a96a898b-444c-40b6-9c27-5fc74d08e685": [
                            "e5a64eae-56c2-48cd-b8b1-f5d3be734d52"
                        ]
                    },
                    "pricebook_id": "4a5f38b7-5984-4c52-9802-f947c5bd8891",
                    "display_price": {
                        "with_tax": {
                            "amount": 1000,
                            "currency": "USD",
                            "formatted": "$10.00"
                        }
                    }
                }
            },
            {
                "id": "baaebdd6-490e-4834-a4a5-307602f70ea0",
                "type": "product",
                "attributes": {
                    "base_product": false,
                    "commodity_type": "physical",
                    "created_at": "2022-02-10T11:23:18.638Z",
                    "description": "Product 916762898972",
                    "manage_stock": false,
                    "manufacturer_part_num": "Product-mpn-916762898972",
                    "name": "PIMProduct 916762898972",
                    "sku": "optSku3",
                    "slug": "product-slug-916762898972",
                    "status": "live",
                    "upc_ean": "916762898972",
                    "updated_at": "2022-02-10T11:23:18.638Z",
                    "published_at": "2022-02-14T10:54:17.286Z"
                },
                "meta": {
                    "catalog_id": "e647ddae-474e-47df-9615-bfa01eb39a76",
                    "catalog_source": "pim",
                    "product_types": [
                        "standard"
                    ],
                    "pricebook_id": "4a5f38b7-5984-4c52-9802-f947c5bd8891"
                }
            },
            {
                "id": "1aea6f97-f0d9-452c-b3c1-7fb5629ead82",
                "type": "product",
                "attributes": {
                    "base_product": false,
                    "commodity_type": "physical",
                    "created_at": "2022-02-10T11:23:17.067Z",
                    "description": "Product 711743382529",
                    "manage_stock": false,
                    "manufacturer_part_num": "Product-mpn-711743382529",
                    "name": "PIMProduct 711743382529",
                    "sku": "optSku2",
                    "slug": "product-slug-711743382529",
                    "status": "live",
                    "upc_ean": "711743382529",
                    "updated_at": "2022-02-10T11:23:17.067Z",
                    "published_at": "2022-02-14T10:54:17.286Z"
                },
                "meta": {
                    "catalog_id": "e647ddae-474e-47df-9615-bfa01eb39a76",
                    "catalog_source": "pim",
                    "product_types": [
                        "standard"
                    ],
                    "bread_crumbs": {
                        "04e748f1-83db-4013-85c8-9edfb0e1b5fa": [
                            "e5a64eae-56c2-48cd-b8b1-f5d3be734d52",
                            "94b882fa-85de-470e-acb3-5b11358e02de"
                        ],
                        "a96a898b-444c-40b6-9c27-5fc74d08e685": [
                            "e5a64eae-56c2-48cd-b8b1-f5d3be734d52"
                        ]
                    },
                    "pricebook_id": "4a5f38b7-5984-4c52-9802-f947c5bd8891"
                }
            },
            {
                "id": "0192ccdd-6d33-4898-87d7-c4d87f2bf8ea",
                "type": "product",
                "attributes": {
                    "base_product": false,
                    "commodity_type": "physical",
                    "created_at": "2022-02-10T11:23:20.791Z",
                    "description": "Product 632550476778",
                    "manage_stock": false,
                    "manufacturer_part_num": "Product-mpn-632550476778",
                    "name": "PIMProduct 632550476778",
                    "sku": "optSku4",
                    "slug": "product-slug-632550476778",
                    "status": "live",
                    "upc_ean": "632550476778",
                    "updated_at": "2022-02-10T11:23:20.791Z",
                    "published_at": "2022-02-14T10:54:17.286Z"
                },
                "meta": {
                    "catalog_id": "e647ddae-474e-47df-9615-bfa01eb39a76",
                    "catalog_source": "pim",
                    "product_types": [
                        "child"
                    ],
                    "bread_crumbs": {
                        "04e748f1-83db-4013-85c8-9edfb0e1b5fa": [
                            "e5a64eae-56c2-48cd-b8b1-f5d3be734d52",
                            "94b882fa-85de-470e-acb3-5b11358e02de"
                        ],
                        "a96a898b-444c-40b6-9c27-5fc74d08e685": [
                            "e5a64eae-56c2-48cd-b8b1-f5d3be734d52"
                        ]
                    },
                    "pricebook_id": "4a5f38b7-5984-4c52-9802-f947c5bd8891"
                }
            },
            {
                "id": "de691397-2320-48fb-af7b-8b17d27a34a4",
                "type": "product",
                "attributes": {
                    "base_product": false,
                    "commodity_type": "physical",
                    "created_at": "2022-02-10T11:23:22.108Z",
                    "description": "Product 199667152140",
                    "manage_stock": false,
                    "manufacturer_part_num": "Product-mpn-199667152140",
                    "name": "PIMProduct 199667152140",
                    "sku": "optSku5",
                    "slug": "product-slug-199667152140",
                    "status": "live",
                    "upc_ean": "199667152140",
                    "updated_at": "2022-02-10T11:23:22.108Z",
                    "published_at": "2022-02-14T10:54:17.286Z"
                },
                "meta": {
                    "catalog_id": "e647ddae-474e-47df-9615-bfa01eb39a76",
                    "catalog_source": "pim",
                    "product_types": [
                        "standard"
                    ],
                    "bread_crumbs": {
                        "04e748f1-83db-4013-85c8-9edfb0e1b5fa": [
                            "e5a64eae-56c2-48cd-b8b1-f5d3be734d52",
                            "94b882fa-85de-470e-acb3-5b11358e02de"
                        ],
                        "a96a898b-444c-40b6-9c27-5fc74d08e685": [
                            "e5a64eae-56c2-48cd-b8b1-f5d3be734d52"
                        ]
                    },
                    "pricebook_id": "4a5f38b7-5984-4c52-9802-f947c5bd8891"
                }
            }
        ]
    }
}
```

## Related Resources

- [Bundles - Product Experience Manager](/docs/pxm/products/pxm-bundles/pxm-bundles)
- [Products API](/docs/pxm/products/ep-pxm-products-api/pxm-products-api-overview)
- [Bundles API](/docs/pxm/products/pxm-bundles/pxm-bundles-api/create-a-bundle)
