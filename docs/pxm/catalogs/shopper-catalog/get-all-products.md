---
title: Get all Products
nav_label: Get all Products
sidebar_position: 100
---

## `GET` Get the List of Products

```http
https://useast.api.elasticpath.com/catalog/products
```

Retrieves the list of products from the catalog. Only the products in a `live` status are retrieved.

If you have multiple catalog rules defined, the rule that best matches the shopperʼs context is used to determine which catalog is retrieved. If no catalog rules are configured, the first catalog found is returned. For information about how rules are matched, see [Resolving Catalog Rules](/docs/pxm/catalogs/shopper-catalog/catalog-shopper-overview#resolving-catalog-rules).

You can see the parent nodes a product is associated within the `bread_crumbs` and `bread_crumb_nodes` metadata for each product. For example, this is useful if you want to improve how your shoppers search your store. For more information, see [Catalog Releases Overview](/docs/pxm/catalogs/catalog-latest-release/overview).

## Parameters

### Headers

| Name                      | Required | Type     | Description                |
|:--------------------------|:---------|:---------|:---------------------------|
| `Authorization`           | Required | `string` | The Bearer token required to grant access to the API. Implicit Bearer token only returns products with `live` status. The token does not return products with draft status won’t be included. |
| `X-Moltin-Customer-Token` | Optional | `string` | The unique identifier of a signed-in customer. Corresponds to the `customer_ids` attribute in a `rule` object. |
| `EP-Channel`              | Optional | `string` | The channel, such as website or mobile app. Corresponds to the `channel` attribute in a `rule` object. |
| `EP-Context-Tag`          | Optional | `string` | A tag defined in the store, such as `clearance`. Corresponds to the `tag` attribute in a `rule` object. |
| `accept-language` | Optional | `string` | The natural language and locale that your storefront prefers. See [accept-language](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language). |

### Query parameters


| Name           | Required | Type      | Description                                                                                                                                                                                                                                  |
|:---------------|:---------|:----------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `filter` | Optional | `string` | Specifies the filter attributes. For more information, see [Filtering](#filtering).                                                                                                                                                          |
| `page[limit]`  | Optional | `integer` | The number of records per page. See [Pagination](/docs/commerce-cloud/api-overview/pagination).                                                                                                                                              |
| `page[offset]` | Optional | `integer` | The number of records to offset the results by. See [Pagination](/docs/commerce-cloud/api-overview/pagination).                                                                                                                              |
| `include`      | Optional | `string`  | If set to  `component_products` returns top-level resources such as files or main image, and key attribute data, such as SKU or slug, to return for component products in a product bundle. See [Including resources](#including-resources). |

## Filtering

The following operators and attributes are available when filtering on this endpoint.

| Operator | Description                                                                                                                                   | Supported Attributes                                                  | Example |
|:--- |:----------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------|:--- |
| `Eq` | Checks if the values of two operands are equal. If they are, the condition is true. For `product_types` and `tags`, you can only specify one. | `name`, `sku`, `slug`, `mpn`, `upc_ean`, `product_types`, `tags`      | `filter=eq(name,some-name)` |
| `In` | Checks if the values are included in the specified string. If they are, the condition is true. For `product_types` and `tags`, you can specify more than one.                                               | `id`, `name`, `sku`, `slug`, `mpn`, `upc_ean`, `product_types`, `tags` | `filter=in(id,some-id)` |

For more information, see [Filtering](/docs/commerce-cloud/api-overview/filtering).

### Building breadcrumbs in a storefront

In a catalog, you can use a filter to return a list of nodes in a hierarchy structure that a product belongs to. You can use this to build breadcrumbs in your storefront. An example is shown below.

`filter=in(id,c83bfe55-0d87-4302-a86d-ab19e7e323f1,6003d7ef-84f3-49bb-a8bd-4cbfa203dcbb)`

- Specify the node Ids in the filter expression.
- You can have as many node Ids as you want.
- It does not matter what order you specify the node Ids. The nodes are returned in the order they were last updated.

## Including Resources

You can use the `include` parameter to include the following resources with this endpoint.

| Parameter            | Required | Description                                                                                                                                                                                                           |
|:---------------------|:---------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------| 
| `component_products` | Optional | The  component product data and key attribute data, such as SKU or slug, to return for component products in a product bundle. See [Create a Bundle](/docs/pxm/products/pxm-bundles/pxm-bundles-api/create-a-bundle). |
| `main_image`         | Optional | The main images associated with a product. See [Files](/docs/pxm/products/product-assets/assets-overview).                                                                                                            |
| `files`              | Optional | Any files associated with a product. See [Files](/docs/pxm/products/product-assets/assets-overview).                                                                                                                  |

For more information, see [Including Resources](/docs/commerce-cloud/api-overview/includes).

## Request Example Without Bundles or Child Products

```bash
curl GET https://useast.api.elasticpath.com/catalog/products \
	 -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

### Response Example Without Bundles or Child Products

`200 OK`

```json
{
    "data": [
        {
            "id": "8fccaa19-dba9-4621-8d11-31a222a68c7c",
            "type": "product",
            "attributes": {
                "availability": "available",
                "published_at": "2021-01-01T00:00:00.000",
                "base_product": false,
                "base_product_id": "cdf574bc-e36e-48fc-9eac-01c87839b285",
                "commodity_type": "physical",
                "upc_ean": "0123456",
                "manufacturer_part_num": "mfn1",
                "created_at": "2021-11-01T00:00:00.000",
                "description": "This is a product",
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
                                "amount": 100,
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
                        "name": "Button shirt",
                        "sort_order": 1,
                        "options": [
                            {
                                "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                                "type": "product",
                                "quantity": 2
                            }
                        ]
                    },
                    "collar": {
                        "name": "Collared shirt",
                        "sort_order": 2,
                        "options": [
                            {
                                "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                                "type": "product",
                                "quantity": 2,
                                "sort_order": 2,
                            }
                        ]
                    },
                    "pockets": {
                        "name": "Pocketed shirt",
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
                "updated_at": "2021-01-01T00:00:00.000",
                "weight": {
                    "g": 997.903,
                    "kg": 1,
                    "lb": 2.2,
                    "oz": 32
                },
                "extensions": {
                    "size": {
                        "size": {},
                        "medium": {},
                        "large": {}
                    },
                    "additionalProp2": {
                        "additionalProp1": {},
                        "additionalProp2": {},
                        "additionalProp3": {}
                    },
                    "additionalProp3": {
                        "additionalProp1": {},
                        "additionalProp2": {},
                        "additionalProp3": {}
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
                        "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                        "type": "product"
                    }
                },
                "children": {
                    "data": [
                        {
                            "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                            "type": "product"
                        }
                    ]
                },
                "files": {
                    "data": [
                        {
                            "type": "file",
                            "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                            "created_at": "2021-01-01T00:00:00.000"
                        }
                    ]
                },
                "main_image": {
                    "data": {
                        "type": "main_image",
                        "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
                    }
                }
            },
            "meta": {
                "catalog_id": "362a16dc-f7c6-4280-83d6-4fcc152af091",
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
                "catalog_source": "pim",
                "sale_id": "fall_sale21",
                "sale_expires": "2021-11-01T00:00:00.000",
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
                    "springSale": {
                        "sale_id": "spring_sale22",
                        "sale_expires": "2022-06-01T00:00:00.000",
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
                    "fallSale": {
                        "sale_id": "fall_sale21",
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
                    "winterSale": {
                        "sale_id": "winter_sale21",
                        "sale_expires": "2021-12-01T00:00:00.000",
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
                    "fallSale": {
                        "sale_id": "fall_sale21",
                        "sale_expires": "2021-10-31T00:00:00.000",
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
                }
            }
        },
        {
            "id": "2ff32038-cd5d-4eb2-9f85-3447c2160cfc",
            "type": "product",
            "attributes": {
                "base_product": false,
                "commodity_type": "physical",
                "components": {
                    "games": {
                        "name": "Games",
                        "options": [
                            {
                                "id": "2ff32038-cd5d-4eb2-9f85-3447c2160cfc",
                                "type": "product",
                                "quantity": 10
                            }
                        ]
                    }
                },
                "created_at": "2021-03-08T14:46:59.129Z",
                "description": "This games bundle includes ten games.",
                "manage_stock": false,
                "manufacturer_part_num": "GA-P-1231-aaaa-2s2p",
                "name": "Best games bundle",
                "sku": "10-game-bundle",
                "slug": "ten-game-bundle",
                "status": "live",
                "upc_ean": "12322443333",
                "updated_at": "2021-04-20T20:46:09.117Z",
                "published_at": "2021-04-20T20:53:44.392Z"
            },
            "meta": {
              "catalog_id": "aea233e7-1300-48ce-9b45-7d0c0b60dde3",
              "catalog_source": "pim",
              "product_types": [
                "bundle"
              ],
              "bread_crumb_nodes": [
                         "04e748f1-83db-4013-85c8-9edfb0e1b5fa",
                         "a96a898b-444c-40b6-9c27-5fc74d08e685"
               ],
              "bread_crumbs": {
                     "04e748f1-83db-4013-85c8-9edfb0e1b5fa": [
                         "e5a64eae-56c2-48cd-b8b1-f5d3be734d52",
                         "94b882fa-85de-470e-acb3-5b11358e02de"
                     ],
                     "a96a898b-444c-40b6-9c27-5fc74d08e685": [
                         "e5a64eae-56c2-48cd-b8b1-f5d3be734d52"
                     ]
		        }
            }
        },
        {
            "id": "2ff32038-cd5d-4eb2-9f85-3447c2160cfc",
            "type": "product",
            "attributes": {
                "base_product": false,
                "commodity_type": "physical",
                "components": {
                    "games": {
                        "name": "Games",
                        "options": [
                            {
                                "id": "2ff32038-cd5d-4eb2-9f85-3447c2160cfc",
                                "type": "product",
                                "quantity": 10
                            }
                        ]
                    }
                },
                "created_at": "2021-03-08T14:46:59.129Z",
                "description": "This games bundle includes ten games.",
                "manage_stock": false,
                "manufacturer_part_num": "GA-P-1231-aaaa-2s2p",
                "name": "Best games bundle",
                "sku": "10-game-bundle",
                "slug": "ten-game-bundle",
                "status": "live",
                "upc_ean": "12322443333",
                "updated_at": "2021-04-20T20:46:09.117Z",
                "published_at": "2021-04-20T20:53:44.392Z"
            },
            "meta": {
                "catalog_id": "aea233e7-1300-48ce-9b45-7d0c0b60dde3",
                "catalog_source": "pim",
                "product_types": [
                    "bundle"
                ],
                "bread_crumbs": {
                    "04e748f1-83db-4013-85c8-9edfb0e1b5fa": [
                        "e5a64eae-56c2-48cd-b8b1-f5d3be734d52",
                        "94b882fa-85de-470e-acb3-5b11358e02de"
                    ],
                    "a96a898b-444c-40b6-9c27-5fc74d08e685": [
                        "e5a64eae-56c2-48cd-b8b1-f5d3be734d52"
                    ]
                }
            }
        },
        {
            "id": "2ff32038-cd5d-4eb2-9f85-3447c2160cfc",
            "type": "product",
            "attributes": {
                "base_product": false,
                "commodity_type": "physical",
                "components": {
                    "games": {
                        "name": "Games",
                        "options": [
                            {
                                "id": "2ff32038-cd5d-4eb2-9f85-3447c2160cfc",
                                "type": "product",
                                "quantity": 10
                            }
                        ]
                    },
                    "created_at": "2021-03-08T14:46:59.129Z",
                    "description": "This games bundle includes ten games.",
                    "manage_stock": false,
                    "manufacturer_part_num": "GA-P-1231-aaaa-2s2p",
                    "name": "Best games bundle",
                    "sku": "10-game-bundle",
                    "slug": "ten-game-bundle",
                    "status": "live",
                    "upc_ean": "12322443333",
                    "updated_at": "2021-04-20T20:46:09.117Z",
                    "published_at": "2021-04-20T20:53:44.392Z"
                }
            },
            "meta": {
                "catalog_id": "aea233e7-1300-48ce-9b45-7d0c0b60dde3",
                "catalog_source": "pim",
                "product_types": [
                    "bundle"
                ],
                "bread_crumbs": {
                    "04e748f1-83db-4013-85c8-9edfb0e1b5fa": [
                        "e5a64eae-56c2-48cd-b8b1-f5d3be734d52",
                        "94b882fa-85de-470e-acb3-5b11358e02de"
                    ],
                    "a96a898b-444c-40b6-9c27-5fc74d08e685": [
                        "e5a64eae-56c2-48cd-b8b1-f5d3be734d52"
                    ]
                }
            }
        }
    ],
    "links": {
        "first": "/catalog/products?page[offset]=0&page[limit]=25&",
        "last": "/catalog/products?page[offset]=0&page[limit]=25&",
        "self": "/catalog/products"
    }
}
```

## Response Example with bundles

`200 OK`

```json
{
    "data": [
        {
            "id": "058fa1b5-346a-4bae-b1a9-e6e1a44e844b",
            "type": "product",
            "attributes": {
                "base_product": false,
                "commodity_type": "physical",
                "created_at": "2022-01-13T16:04:20.890Z",
                "description": "A set of outstanding Bose headphones along with a subscription to the Bose service",
                "manage_stock": false,
                "manufacturer_part_num": "1234-5678-ABCDF",
                "name": "Bose Technology Bundle",
                "sku": "bose-tech-bundle",
                "status": "live",
                "upc_ean": "546784",
                "updated_at": "2022-01-13T17:53:37.974Z",
                "published_at": "2022-01-14T14:50:41.261Z"
            },
            "meta": {
                "catalog_id": "9df8650a-61ce-410f-9b35-7a086a0731bd",
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
                }
            }
        },
        {
            "id": "09a39785-62f3-4b6a-96aa-a6e3ddaec2bb",
            "type": "product",
            "attributes": {
                "base_product": false,
                "commodity_type": "physical",
                "created_at": "2021-11-17T10:56:51.543Z",
                "description": "Only allowed to be sold apart of the TECH BUNDLE.",
                "manage_stock": false,
                "name": "TECH BUNDLE 1 - Bose Headphones",
                "price": {
                    "EUR": {
                        "amount": 300,
                        "includes_tax": false
                    },
                    "GBP": {
                        "amount": 30000,
                        "includes_tax": false
                    },
                    "USD": {
                        "amount": 30000,
                        "includes_tax": false
                    }
                },
                "sku": "tb-bosehp",
                "slug": "tech-bundle-bose-headphones",
                "status": "live",
                "updated_at": "2022-01-13T17:53:37.974Z",
                "published_at": "2022-01-14T14:50:41.261Z"
            },
            "meta": {
                "catalog_id": "9df8650a-61ce-410f-9b35-7a086a0731bd",
                "catalog_source": "pim",
                "product_types": [
                    "standard"
                ],
                "display_price": {
                    "without_tax": {
                        "amount": 30000,
                        "currency": "GBP",
                        "formatted": "£300.00"
                    }
                }
            }
        },
        {
            "id": "15018fc5-9303-4609-9551-f30144b3fcfd",
            "type": "product",
            "attributes": {
                "base_product": true,
                "commodity_type": "digital",
                "created_at": "2021-11-17T10:58:07.215Z",
                "description": "Only allowed to be sold apart of the TECH BUNDLE 1",
                "extensions": {
                    "products(products-extension)": {
                        "external-order-no": "DEF-456"
                    }
                },
                "manage_stock": false,
                "name": "TECH BUNDLE 1 - BosePlay Subscription",
                "price": {
                    "EUR": {
                        "amount": 40,
                        "includes_tax": false
                    },
                    "GBP": {
                        "amount": 4000,
                        "includes_tax": false
                    },
                    "USD": {
                        "amount": 4000,
                        "includes_tax": false
                    }
                },
                "sku": "tb-boseplay",
                "slug": "tech-bundle-1-boseplay-subscription",
                "status": "live",
                "updated_at": "2022-01-13T17:53:37.974Z",
                "published_at": "2022-01-14T14:50:41.261Z"
            },
            "meta": {
                "catalog_id": "9df8650a-61ce-410f-9b35-7a086a0731bd",
                "catalog_source": "pim",
                "product_types": [
                    "standard"
                ],
                "display_price": {
                    "without_tax": {
                        "amount": 4000,
                        "currency": "GBP",
                        "formatted": "£40.00"
                    }
                },
                "variation_matrix": {
                    "3a7fae63-8f8d-4a26-bdc5-90bb97b58da3": "14e50c0d-b856-426b-97fb-d1804e3433b1",
                    "58c3cb43-ffa7-4f94-b305-8259ae7bf9e8": "34dc3cc4-cddc-4ce5-a94d-3bcc46e79346",
                    "622d1692-d0ae-4dc3-aca1-ea5c26e3578a": "6d1f354d-8e34-4499-a272-1baf6942a6f5"
                },
                "variations": [
                    {
                        "id": "e797bf50-60ee-4f93-a3c4-49c8d0e8c421",
                        "name": "Colour",
                        "sort_order": 5,
                        "options": [
                            {
                                "id": "622d1692-d0ae-4dc3-aca1-ea5c26e3578a",
                                "description": "Colour Red Variation",
                                "name": "Red",
                                "sort_order": -5
                            },
                            {
                                "id": "3a7fae63-8f8d-4a26-bdc5-90bb97b58da3",
                                "description": "Colour Blue Variation",
                                "name": "Blue",
                                "sort_order": -4
                            },
                            {
                                "id": "58c3cb43-ffa7-4f94-b305-8259ae7bf9e8",
                                "description": "Colour Green Variation",
                                "name": "Green",
                                "sort_order": -3
                            }
                        ]
                    }
                ]
            }
        }
    ],
    "links": {
        "first": "/catalog/products?page[offset]=0&page[limit]=100&",
        "last": "/catalog/products?page[offset]=0&page[limit]=100&",
        "self": "/catalog/products"
    },
    "meta": {
        "page": {
            "current": 1,
            "limit": 100,
            "total": 3
        },
        "results": {
            "total": 3
        }
    }
}
```

## Request Example with Include Component Products

```bash
curl GET https://useast.api.elasticpath.com/pcm/catalog/products?include=component_products
     -H "Authorization: Bearer XXXX" \
```

## Response Example with Include Component Products

```json
{
    "data": {
        "id": "00efcc23-9bab-4bc7-9272-6b95111814e8",
        "type": "product",
        "attributes": {
            "base_product": false,
            "commodity_type": "physical",
            "components": {
                "games": {
                    "max": 1,
                    "min": 1,
                    "name": "GamesOptions",
                    "options": [
                        {
                            "id": "d7b79eb8-19d8-45ea-86ed-2324a604dd9c",
                            "quantity": 1,
                            "type": "product"
                        },
                        {
                            "id": "baaebdd6-490e-4834-a4a5-307602f70ea0",
                            "quantity": 2,
                            "type": "product"
                        }
                    ]
                },
                "toys": {
                    "max": 2,
                    "min": 2,
                    "name": "ToysOptions",
                    "options": [
                        {
                            "id": "1aea6f97-f0d9-452c-b3c1-7fb5629ead82",
                            "quantity": 1,
                            "type": "product"
                        },
                        {
                            "id": "0192ccdd-6d33-4898-87d7-c4d87f2bf8ea",
                            "quantity": 1,
                            "type": "product"
                        },
                        {
                            "id": "de691397-2320-48fb-af7b-8b17d27a34a4",
                            "quantity": 1,
                            "type": "product"
                        }
                    ]
                }
            },
            "created_at": "2022-02-10T11:23:23.690Z",
            "description": "Pim Bundle Option with Multiple Products 279777684760",
            "manage_stock": false,
            "manufacturer_part_num": "Product-mpn-279777684760",
            "name": "pimBundle1_279777684760",
            "price": {
                "USD": {
                    "amount": 50000,
                    "includes_tax": true
                }
            },
            "sku": "pimBundle1-279777684760",
            "status": "live",
            "upc_ean": "279777684760",
            "updated_at": "2022-02-10T11:23:29.066Z",
            "published_at": "2022-02-14T10:54:17.286Z"
        },
        "meta": {
            "catalog_id": "e647ddae-474e-47df-9615-bfa01eb39a76",
            "catalog_source": "pim",
            "product_types": [
                "bundle"
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
            },
            "display_price": {
                "with_tax": {
                    "amount": 50000,
                    "currency": "USD",
                    "formatted": "$500.00"
                }
            }
        },
        "relationships": {
            "component_products": {
                "links": {
                    "self": "/catalog/products/00efcc23-9bab-4bc7-9272-6b95111814e8/relationships/component_products"
                }
            }
        }
    },
    "links": {
        "self": "/catalog/products/00efcc23-9bab-4bc7-9272-6b95111814e8?include=component_products&"
    },
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

- [Bundles - Product Experience Manager](/docs/pxm/products/pxm-bundles)
- [Products API](/docs/pxm/products/ep-pxm-products-api/pxm-products-api-overview)
- [Bundles API](/docs/pxm/products/pxm-bundles/pxm-bundles-api/create-a-bundle)
