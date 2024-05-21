---
title: Get all Products in the Latest Release
nav_label: Get all Products
sidebar_position: 100
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `GET` Get the List of Products in a Catalog Release

```http
https://useast.api.elasticpath.com/pcm/catalogs/:catalogId/releases/:releaseId/products
```

Returns the products from a published catalog. Only the products in a `live` status are retrieved. Currently, published catalogs are limited to the current release and two releases prior to the current release.

You can see the parent nodes a product is associated with in the `bread_crumbs` and `bread_crumb_nodes` metadata for each product. This is useful if you want to improve how your shoppers search your store, for example. For more information, see [Product Experience Manager Catalogs API](/docs/pxm/catalogs/catalog-latest-release/overview).

The `variations` object lists the variation IDs and variation option IDs and their corresponding product IDs that are generated when the variation and variation options are built with a product. The `variations` object can then be added to your catalogs. By default, variations and variation options are sorted randomly. You can use the `sort_order`attribute to sort the order of your variation and variation options in `variations`. Once a parent product is published in a catalog, the Get a List of products in a catalog release response displays the sorted variations and variation options. Variations and variation options are displayed in descending order according to their `sort_order` values. 

## Parameters

### Path parameters

| Name        | Required | Type     | Description                              |
|:------------|:---------|:---------|:-----------------------------------------|
| `catalogId` | Required | `string` | The unique identifier of a catalog.      |
| `releaseId` | Required | `string` | The unique identifier of a published version of the catalog or `latestPublished` for the most recently fully published catalog. You should use `latestPublished` in your storefront to make sure you have the latest fully published version of a catalog. |

### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to this API. With implicit Bearer token, you can only fetch the products with `live` status. The token does not return products with `draft` status. |

### Query parameters

| Name | Required | Type | Description                                                                                                                                                                                                                                  |
| --- | ---| --- |----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `filter`| Optional | `string` | Specifies the filter attributes. See [Filtering](#filtering).                                                                                                                                                                                |
| `page[limit]`  | Optional | `integer` | The number of records per page. See [Pagination](/guides/Getting%20Started/api-overview/pagination).                                                                                                                                              |
| `page[offset]` | Optional | `integer` | The number of records to offset the results by. See [Pagination](/guides/Getting%20Started/api-overview/pagination).                                                                                                                              |
| `include`      | Optional | `string`  | If set to  `component_products` returns top-level resources such as files or main image, and key attribute data, such as SKU or slug, to return for component products in a product bundle. See [Including Resources](#including-resources). |

## Filtering

The following operators and attributes are available when filtering on this endpoint.

| Operator | Description                                                                                                                                                                                                                     | Supported Attributes                                                  | Example |
|:--- |:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------|:--- |
| `Eq` | Checks if the values of two operands are equal. If they are, the condition is true. For `product_types` and `tag`, you can only specify one. For example, `filter=eq(product_types,child)`.                                     | `name`, `sku`, `slug`, `mpn`, `upc_ean`, `product_types`, `tags`      | `filter=eq(name,some-name)` |
| `In` | Checks if the values are included in the specified string. If they are, the condition is true. For `product_types` and `tags`, you can specify more than one. For example, `filter=in(product_types,child,bundle)`.             | `id`, `name`, `sku`, `slug`, `mpn`, `upc_ean`, `product_types`, `tags` | `filter=in(id,some-id)` |

For more information, see [Filtering](/guides/Getting%20Started/api-overview/filtering).

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

For more information, see [Including Resources](/guides/Getting%20Started/api-overview/includes).

## Request Example

### Curl

```bash
curl GET https://useast.api.elasticpath.com/pcm/catalogs/d9b4c1c8-64e8-4b96-b713-7961cf30cacc/releases/latest/products \
     -H "Authorization: Bearer XXXX" \
     -H "content-type: application/json" \
```

## Response Example with Bundles

`200 OK`

```json
{
    "data": [
        {
            "id": "14e055d0-eebb-4090-8594-a0a7aeea2151",
            "type": "product",
            "attributes": {
                "base_product": false,
                "commodity_type": "physical",
                "created_at": "2021-03-10T20:00:43.734Z",
                "description": "This gas model includes a convection oven.",
                "manage_stock": false,
                "manufacturer_part_num": "BE-R-2222-bbbb-2b2b",
                "name": "BestEver Range, Model 2b2b",
                "price": {
                    "USD": {
                        "amount": 200,
                        "includes_tax": false
                    },
                    "CAD": {
                        "amount": 250,
                        "includes_tax": false
                    },
                    "GBP": {
                        "amount": 100,
                        "includes_tax": true
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
                                "amount": 125,
                                "includes_tax": false
                            },
                            "GBP": {
                                "amount": 80,
                                "includes_tax": true
                            }
                        }
                    }
                },
                "sku": "BE-Range-2b2b",
                "slug": "bestever-range-2b2b",
                "status": "live",
                "tags": [
                    "seimans",
                    "self-cleaning",
                    "lifestyle"
                ],
                "upc_ean": "222233334444",
                "updated_at": "2021-04-20T20:46:27.089Z",
                "published_at": "2021-04-20T20:53:44.392Z",
            },
            "meta": {
                "catalog_id": "aea233e7-1300-48ce-9b45-7d0c0b60dde3",
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
                "original_price": {
                    "USD": {
                        "amount": 400,
                        "includes_tax": false
                    },
                    "CAD": {
                        "amount": 500,
                        "includes_tax": false
                    },
                    "GBP": {
                        "amount": 300,
                        "includes_tax": true
                    }
                },
                "tiers": {
                    "min_5": {
                        "original_price": {
                            "USD": {
                                "amount": 150,
                                "includes_tax": false
                            },
                            "CAD": {
                                "amount": 175,
                                "includes_tax": false
                            },
                            "GBP": {
                                "amount": 120,
                                "includes_tax": true
                            }
                        }
                    }
                },
                "sale_expires": "2030-01-01T00:00:00.000Z",
                "sale_id": "summer"
            }
          }
        }
      },
        "original_price": {
          "USD": {
            "amount": 400,
            "includes_tax": false
          },
          "CAD": {
            "amount": 500,
            "includes_tax": false
          },
          "GBP": {
            "amount": 300,
            "includes_tax": true
          }
        },
        {
            "id": "ca9cee27-eabd-472a-ae0a-11dcbcc0f7af",
            "type": "product",
            "attributes": {
                "base_product": false,
                "commodity_type": "physical",
                "created_at": "2021-03-12T22:09:01.999Z",
                "description": "The 30 inch version of this popular range.",
                "manage_stock": false,
                "manufacturer_part_num": "BE-R-2222-bbbb-2b2b-30",
                "name": "BestEver Range 30 inch, Model 2b2b-30",
                "sku": "BE-Range-2b2b-30",
                "slug": "bestever-range-2b2b-30",
                "status": "live",
                "upc_ean": "222230303030",
                "updated_at": "2021-04-20T20:46:45.598Z",
                "published_at": "2021-04-20T20:53:44.392Z",
                "price": {
                    "USD": {
                        "amount": 200,
                        "includes_tax": false
                    },
                    "GBP": {
                        "amount": 100,
                        "includes_tax": true
                    }
                }
            },
            "meta": {
                "catalog_id": "aea233e7-1300-48ce-9b45-7d0c0b60dde3",
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
                  "variation_matrix": {
                    "28ef7445-2132-44f0-836c-9eda09a61df6": "9ebf2214-988b-4f66-87ce-5cd086b6f0d7",
                    "826486fa-1ef1-493c-81a8-9ca629df7602": "fc68cd75-ddf6-42f1-a7bf-b095bfa8f3e4"
                  },
                  "variations": [
                    {
                      "id": "138a8a6c-ad9a-4bdb-b465-04c88d765996",
                      "name": "Colour",
                      "sort_order": 5,
                      "options": [
                        {
                          "id": "28ef7445-2132-44f0-836c-9eda09a61df6",
                          "description": "Our most popular color",
                          "name": "BLUE",
                          "sort_order": -5
                        },
                        {
                          "id": "826486fa-1ef1-493c-81a8-9ca629df7602",
                          "description": "Our second colour",
                          "name": "RED"
                        }
                      ]
                    }
                  ]
                },
                "original_price": {
                    "USD": {
                        "amount": 300,
                        "includes_tax": false
                    },
                    "GBP": {
                        "amount": 150,
                        "includes_tax": true
                    }
                },
                "sale_expires": "2030-01-02T00:00:00.000Z",
                "sale_id": "summer"
            }
        },
        {
            "id": "d4d4744f-a2e5-4925-a613-5aeb0971337e",
            "type": "product",
            "attributes": {
                "base_product": false,
                "commodity_type": "physical",
                "created_at": "2021-03-12T22:09:46.577Z",
                "description": "The 32 inch version of this popular range.",
                "manage_stock": false,
                "manufacturer_part_num": "BE-R-2222-bbbb-2b2b-32",
                "name": "BestEver Range 32 inch, Model 2b2b-32",
                "sku": "BE-Range-2b2b-32",
                "slug": "bestever-range-2b2b-32",
                "status": "live",
                "upc_ean": "222232323232",
                "price": {
                    "USD": {
                        "amount": 23500,
                        "includes_tax": true
                    },
                    "CAD": {
                        "amount": 23500,
                        "includes_tax": true
                    }
                },
                "updated_at": "2021-04-20T20:47:03.519Z",
                "published_at": "2021-04-20T20:53:44.392Z"
            },
            "meta": {
                "catalog_id": "aea233e7-1300-48ce-9b45-7d0c0b60dde3",
                "catalog_source": "pim",
                "product_types": [
                    "standard"
                ]
            }
        },
        {
            "id": "f5bd4e59-a95f-4bda-bfe6-0f34f47ac94b",
            "type": "product",
            "attributes": {
                "base_product": false,
                "commodity_type": "physical",
                "created_at": "2021-03-08T14:46:59.129Z",
                "description": "This electric model offers an induction heating element and convection oven.",
                "manage_stock": false,
                "manufacturer_part_num": "BE-R-1111-aaaa-1a1a",
                "name": "BestEver Range, Model 1a1a",
                "sku": "BE-Range-1a1a",
                "slug": "bestever-range-1a1a",
                "status": "live",
                "upc_ean": "111122223333",
                "updated_at": "2021-04-20T20:46:09.117Z",
                "published_at": "2021-04-20T20:53:44.392Z"
            },
            "meta": {
                "catalog_id": "aea233e7-1300-48ce-9b45-7d0c0b60dde3",
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
        }
    ],
    "links": {
        "first": "/pcm/catalogs/d9b4c1c8-64e8-4b96-b713-7961cf30cacc/releases/latest/products?page[offset]=0&page[limit]=25&",
        "last": "/pcm/catalogs/d9b4c1c8-64e8-4b96-b713-7961cf30cacc/releases/latest/products?page[offset]=0&page[limit]=25&",
        "self": "/pcm/catalogs/d9b4c1c8-64e8-4b96-b713-7961cf30cacc/releases/latest/products"
    }
}
```

## Response Example without bundles

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
                "published_at": "2022-01-13T17:53:38.111Z"
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
                "published_at": "2022-01-13T17:53:38.111Z"
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
                },
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
                "published_at": "2022-01-13T17:53:38.111Z"
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
                },
                "display_price": {
                    "without_tax": {
                        "amount": 4000,
                        "currency": "GBP",
                        "formatted": "£40.00"
                    }
                },
                "links": {
                    "first": "/pcm/catalogs/9df8650a-61ce-410f-9b35-7a086a0731bd/releases/9bf7c680-a980-4a99-8217-ed8aa7aedd36/products?page[offset]=0&page[limit]=100&",
                    "last": "/pcm/catalogs/9df8650a-61ce-410f-9b35-7a086a0731bd/releases/9bf7c680-a980-4a99-8217-ed8aa7aedd36/products?page[offset]=0&page[limit]=100&",
                    "self": "/pcm/catalogs/9df8650a-61ce-410f-9b35-7a086a0731bd/releases/9bf7c680-a980-4a99-8217-ed8aa7aedd36/products"
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
        }
    ]
}
```

## Request Example with Include Component Products

```bash
curl GET https://useast.api.elasticpath.com/pcm/catalogs/:catalogId/releases/:releaseId/products?include=component_products
     -H "Authorization: Bearer XXXX" \
```

## Response Example with Include Component Products

```json
{
    "data": [
        {
            "id": "00efcc23-9bab-4bc7-9272-6b95111814e8",
            "type": "product",
            "attributes": {
                "base_product": false,
                "commodity_type": "physical",
                "components": {
                    "games": {
                        "name": "GamesOptions",
                        "max": 1,
                        "min": 1,
                        "sort_order": 1,
                        "options": [
                            {
                                "id": "d7b79eb8-19d8-45ea-86ed-2324a604dd9c",
                                "quantity": 1,
                                "type": "product",
                                "sort_order": 1
                            },
                            {
                                "id": "baaebdd6-490e-4834-a4a5-307602f70ea0",
                                "quantity": 2,
                                "type": "product",
                                "sort_order": 2
                            }
                        ]
                    },
                    "toys": {
                        "name": "ToysOptions",
                        "max": 2,
                        "min": 2,
                        "sort_order": 2,
                        "options": [
                            {
                                "id": "1aea6f97-f0d9-452c-b3c1-7fb5629ead82",
                                "quantity": 1,
                                "type": "product",
                                "sort_order": 2
                            },
                            {
                                "id": "0192ccdd-6d33-4898-87d7-c4d87f2bf8ea",
                                "quantity": 1,
                                "type": "product"
                                "sort_order": 1
                            },
                            {
                                "id": "de691397-2320-48fb-af7b-8b17d27a34a4",
                                "quantity": 1,
                                "type": "product",
                                "sort_order": 3
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
    ],
    "links": {
        "first": "/catalog/products?include=component_products&page[offset]=0&page[limit]=25&",
        "last": "/catalog/products?page[limit]=25&include=component_products&page[offset]=0&",
        "self": "/catalog/products?include=component_products&"
    },
    "meta": {
        "page": {
            "current": 1,
            "limit": 25,
            "total": 6
        },
        "results": {
            "total": 6
        }
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
