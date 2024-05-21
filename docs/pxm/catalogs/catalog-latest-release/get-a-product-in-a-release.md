---
title: Get a Product in the Latest Release
nav_label: Get a Product
sidebar_position: 110
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `GET` Get a Product from a Catalog Release

```http
https://useast.api.elasticpath.com/pcm/catalogs/:catalogId/releases/:releaseId/products/:productId
```

Returns a product from a published catalog. The product must be in `live` status. Currently, published catalogs are limited to the current release and two releases prior to the current release.

You can see the parent nodes a product is associated with in the `bread_crumbs` and `bread_crumb_nodes` metadata for each product. This is useful if you want to improve how your shoppers search your store, for example. See [Product and Node Associations in Breadcrumb Metadata](/docs/pxm/catalogs/breadcrumbs).

The `variations` object lists the variation IDs and variation option IDs and their corresponding product IDs that are generated when the variation and variation options are built with a product. The `variations` object can then be added to your catalogs. By default, variations and variation options are sorted randomly. You can use the `sort_order`attribute to sort the order of your variation and variation options in `variations`. Once a parent product is published in a catalog, the get a product in a catalog release response displays the sorted variations and variation options. Variations and variation options are displayed in descending order according to their `sort_order` values.

## Parameters

### Path parameters

| Name        | Required | Type     | Description                              |
|:------------|:---------|:---------|:-----------------------------------------|
| `catalogId` | Required | `string` | The unique identifier of a catalog.      |
| `releaseId` | Required | `string` | The unique identifier of a published version of the catalog or `latestPublished` for the most recently fully published catalog. You should use `latestPublished` in your storefront to make sure you have the latest fully published version of a catalog. |
| `productId` | Required | `string` | The unique identifier of a product.      |

### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. Implicit Bearer token only returns products with `live` status. The token does not return products with `draft` status. |

### Query parameters

| Name       | Required | Type    | Description                                                                                                                                                                                                                      |
|:-----------|:---------|:--------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `include`  | Optional | `string` | The top-level resources, such as files or main image, component product data and key attribute data, such as SKU or slug, to return for component products in a product bundle. See [Including Resources](#including-resources). |

## Including Resources

You can use the `include` parameter to include the following resources with this endpoint.

| Parameter            | Required | Description                                                                                                                                                                                                           |
|:---------------------|:---------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------| 
| `component_products` | Optional | The  component product data and key attribute data, such as SKU or slug, to return for component products in a product bundle. See [Create a Bundle](/docs/pxm/products/pxm-bundles/pxm-bundles-api/create-a-bundle). |
| `main_image`         | Optional | The main images associated with a product. See [Files](/docs/pxm/products/product-assets/assets-overview).                                                                                                            |
| `files`              | Optional | Any files associated with a product. See [Files](/docs/pxm/products/product-assets/assets-overview).                                                                                                                  |
For more information, see [Including Resources](/guides/Getting%20Started/api-overview/includes).

## Request Example

```bash
curl GET https://useast.api.elasticpath.com/pcm/catalogs/d9b4c1c8-64e8-4b96-b713-7961cf30cacc/releases/latest/relationships/products/14e055d0-eebb-4090-8594-a0a7aeea2151 \
     -H "Authorization: Bearer XXXX" \
     -H "content-type: application/json" \
```

## Response Examples

### Example 1

```json
{
    "data": {
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
                "Seimans",
                "self-cleaning",
                "lifestyle"
            ],
            "upc_ean": "222233334444",
            "updated_at": "2021-04-20T20:46:27.089Z",
            "published_at": "2021-04-20T21:06:03.009Z"
        },
        "meta": {
            "catalog_id": "d9b4c1c8-64e8-4b96-b713-7961cf30cacc",
            "catalog_source": "pim",
            "product_types": [
                "standard"
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
                ],
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
            }
        }
    },
    "links": {
        "self": "/pcm/catalogs/d9b4c1c8-64e8-4b96-b713-7961cf30cacc/releases/latest/products/14e055d0-eebb-4090-8594-a0a7aeea2151"
    }
}
```

### Example 2

`200 OK`

```json
{
    "data": {
        "attributes": {
            "availability": "available",
            "base_product": false,
            "base_product_id": "cdf574bc-e36e-48fc-9eac-01c87839b285",
            "commodity_type": "physical",
            "components": ["string"],
            "created_at": "1970-01-01T00:00:00.000",
            "description": "This is a product",
            "dimensions": "4x5x2",
            "manage_stock": false,
            "name": "Blue shirt",
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
            "product_hash": "string",
            "sku": "blue-shirt",
            "slug": "blue-shirt",
            "status": "live",
            "translations": ["string"],
            "updated_at": "1970-01-01T00:00:00.000",
            "weight": {
                "g": 0,
                "kg": 0,
                "lb": 0,
                "oz": 0
            }
        },
        "id": "8fccaa19-dba9-4621-8d11-31a222a68c7c",
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
            "children": [
                {
                    "id": "5cd99ff5-bb12-404d-9f2b-33756cfa0315",
                    "type": "product"
                }
            ],
            "custom-modifiers": ["string"],
            "files": ["string"],
            "main-image": "string",
            "modifiers": ["string"],
            "product-spec": ["string"],
            "variationOpts": ["string"],
            "variations": ["string"]
        },
        "type": "product"
    }
}
```

## Request Example with Include Component Products

```bash
curl GET https://useast.api.elasticpath.com/pcm/catalogs/:catalogId/releases/:releaseId/products/:productId?include=component_products
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
        }
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
