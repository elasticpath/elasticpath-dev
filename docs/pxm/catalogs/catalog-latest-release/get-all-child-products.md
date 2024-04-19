---
id: get-all-child-products
title: Get a Product's Children
sidebar_label: Get a Products Children
sidebar_position: 120
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `GET` Get a Product's Children

```http
https://useast.api.elasticpath.com/catalogs/:catalogId/releases/:releaseId/products/:productId/relationships/children
```

For a specified product and catalog release, retrieves a list of child products from a base product. Any product other than a base product results in a `422 Unprocessable Entity` response. Only the products in a `live` status are retrieved.

If you have multiple catalog rules defined, the rule that best matches the shopperʼs context is used to determine which catalog is retrieved. If no catalog rules are configured, the first catalog found is returned. For information about how rules are matched, see [Resolving Catalog Rules](/docs/pxm/catalogs/catalog-configuration/catalog-configuration-overview#resolving-catalog-rules).

You can see the parent nodes a product is associated within the `breadcrumbs` metadata for each product. For example, this is useful if you want to improve how your shoppers search your store. For more information, see [Catalog Releases Overview](/docs/pxm/catalogs/catalog-latest-release/overview).

## Parameters

### Path parameters

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `catalogId` | Required | `string` | The unique identifier of a catalog. |
| `releaseId` | Required | `string` | The unique identifier of a published version of a catalog or 'latest' for the most recently published version. |
| `productId` | Required | `string` | The unique identifier of a product. |

### Headers

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token required to grant access to the API. Implicit Bearer token only returns products with `live` status. The token does not return products with draft status won’t be included. |
| `X-Moltin-Customer-Token` | Optional | `string` | The unique identifier of a signed-in customer. Corresponds to the `customer_ids` attribute in a `rule` object. |
| `EP-Channel` | Optional | `string` | The channel, such as website or mobile app. Corresponds to the `channel` attribute in a `rule` object. |
| `EP-Context-Tag` | Optional | `string` | A tag defined in the store, such as `clearance`. Corresponds to the `tag` attribute in a `rule` object. |

### Query parameters

| Name           | Required | Type      | Description                                                                                                                                                                                                                                                                                                 |
|:---------------|:---------|:----------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `filter`| Optional | `string` | Specifies the filter attributes. See [Filtering](#filtering). |
| `page[limit]`  | Optional | `integer` | The number of records per page. See [Pagination](/docs/commerce-cloud/api-overview/pagination).                                                                                                                                                                                                                                                                            |
| `page[offset]` | Optionsal | `integer` | The number of records to offset the results by. See [Pagination](/docs/commerce-cloud/api-overview/pagination).                                                                                                                                                                                                                                                            |
| `include`      | Optional | `string`  | If set to  `component_products` returns top-level resources such as files or main image, and key attribute data, such as SKU or slug, to return for component products in a product bundle. For more information, see [Create a Bundle](/docs/pxm/products/pxm-bundles/pxm-bundles-api/create-a-bundle). |

## Filtering

The following operators and attributes are available when filtering on this endpoint.

| Operator | Description                                                                                                                                                                                                                     | Supported Attributes                                                  | Example |
| :--- |:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------| :--- |
| `Eq` | Checks if the values of two operands are equal. If they are, the condition is true. For `product_types` and `tags`, you can only specify one. For example, `filter=eq(product_types,child)`.                                    | `name`, `sku`, `slug`, `mpn`, `upc_ean`, `product_types`, `tags`      | `filter=eq(name,some-name)` |
| `In` | Checks if the values are included in the specified string. If they are, the condition is true. For `product_types` and `tags`, you can specify more than one. For example, `filter=in(product_types,child,bundle)`.             | `id`, `name`, `sku`, `slug`, `mpn`, `upc_ean`, `product_types`, `tags` | `sfilter=in(id,some-id)` |

For more information, see [Filtering](/docs/commerce-cloud/api-overview/filtering).

### Building breadcrumbs in a storefront

In a catalog, you can use a filter to return a list of nodes in a hierarchy structure that a product belongs to. You can use this to build breadcrumbs in your storefront. An example is shown below.

`filter=in(id,c83bfe55-0d87-4302-a86d-ab19e7e323f1,6003d7ef-84f3-49bb-a8bd-4cbfa203dcbb)`

- Specify the node Ids in the filter expression.
- You can have as many node Ids as you want.
- It does not matter what order you specify the node Ids. The nodes are returned in the order they were last updated.

## Request Example

```bash
curl GET https://useast.api.elasticpath.com/catalogs/6dff977e-a8c4-4e32-8d2c-407266dde6dd/releases/dfaa3923-db0c-4fd2-9e7f-9ba11293a8ab/products/9214719b-17fe-4ea7-896c-d61e60fc0d05/relationships/children \
	 -H "Authorization: Bearer XXXX" \
     -H "content-type: application/json" \
```

## Response Examples

`200 OK`

```json
{
    "data": [
        {
            "id": "0c158255-ea8a-43a3-bdcd-ec743d66cc20",
            "type": "product",
            "attributes": {
                "base_product": false,
                "base_product_id": "9214719b-17fe-4ea7-896c-d61e60fc0d05",
                "commodity_type": "physical",
                "created_at": "2022-08-26T15:49:41.862Z",
                "custom_inputs": {
                    "back": {
                        "name": "T-Shirt Back",
                        "required": false,
                        "validation_rules": [
                            {
                                "options": {
                                    "max_length": 50
                                },
                                "type": "string"
                            }
                        ]
                    },
                    "front": {
                        "name": "T-Shirt Front",
                        "required": false,
                        "validation_rules": [
                            {
                                "options": {
                                    "max_length": 50
                                },
                                "type": "string"
                            }
                        ]
                    }
                },
                "description": "T-shirt.",
                "manage_stock": false,
                "manufacturer_part_num": "1234-5678-SSSS",
                "name": "Shirt",
                "sku": "978055216732567MediumGreenWool",
                "slug": "978055216732567MediumGreenWool",
                "status": "live",
                "updated_at": "2022-08-26T15:49:41.862Z",
                "published_at": "2022-08-31T10:51:22.586Z"
            },
            "meta": {
                "catalog_id": "6dff977e-a8c4-4e32-8d2c-407266dde6dd",
                "catalog_source": "pim",
                "product_types": [
                    "child"
                ]
            },
            "relationships": {
                "parent": {
                    "data": {
                        "id": "9214719b-17fe-4ea7-896c-d61e60fc0d05",
                        "type": "product"
                    }
                }
            }
        },
        {
            "id": "22a1d342-9ca0-471b-ace1-3da317699cd8",
            "type": "product",
            "attributes": {
                "base_product": false,
                "base_product_id": "9214719b-17fe-4ea7-896c-d61e60fc0d05",
                "commodity_type": "physical",
                "created_at": "2022-08-26T15:49:41.862Z",
                "custom_inputs": {
                    "back": {
                        "name": "T-Shirt Back",
                        "required": false,
                        "validation_rules": [
                            {
                                "options": {
                                    "max_length": 50
                                },
                                "type": "string"
                            }
                        ]
                    },
                    "front": {
                        "name": "T-Shirt Front",
                        "required": false,
                        "validation_rules": [
                            {
                                "options": {
                                    "max_length": 50
                                },
                                "type": "string"
                            }
                        ]
                    }
                },
                "description": "T-shirt.",
                "manage_stock": false,
                "manufacturer_part_num": "1234-5678-SSSS",
                "name": "Shirt",
                "sku": "978055216732567SmallBlueWool",
                "slug": "978055216732567SmallBlueWool",
                "status": "live",
                "updated_at": "2022-08-26T15:49:41.862Z",
                "published_at": "2022-08-31T10:51:22.586Z"
            },
            "meta": {
                "catalog_id": "6dff977e-a8c4-4e32-8d2c-407266dde6dd",
                "catalog_source": "pim",
                "product_types": [
                    "child"
                ]
            },
            "relationships": {
                "parent": {
                    "data": {
                        "id": "9214719b-17fe-4ea7-896c-d61e60fc0d05",
                        "type": "product"
                    }
                }
            }
        },
        {
            "id": "2d5dbc03-9af7-4e07-a57a-a3cc9d530532",
            "type": "product",
            "attributes": {
                "base_product": false,
                "base_product_id": "9214719b-17fe-4ea7-896c-d61e60fc0d05",
                "commodity_type": "physical",
                "created_at": "2022-08-26T15:49:41.862Z",
                "custom_inputs": {
                    "back": {
                        "name": "T-Shirt Back",
                        "required": false,
                        "validation_rules": [
                            {
                                "options": {
                                    "max_length": 50
                                },
                                "type": "string"
                            }
                        ]
                    },
                    "front": {
                        "name": "T-Shirt Front",
                        "required": false,
                        "validation_rules": [
                            {
                                "options": {
                                    "max_length": 50
                                },
                                "type": "string"
                            }
                        ]
                    }
                },
                "description": "T-shirt.",
                "manage_stock": false,
                "manufacturer_part_num": "1234-5678-SSSS",
                "name": "Shirt",
                "sku": "978055216732567LargeBlueDenim",
                "slug": "978055216732567LargeBlueDenim",
                "status": "live",
                "updated_at": "2022-08-26T15:49:41.862Z",
                "published_at": "2022-08-31T10:51:22.586Z"
            },
            "meta": {
                "catalog_id": "6dff977e-a8c4-4e32-8d2c-407266dde6dd",
                "catalog_source": "pim",
                "product_types": [
                    "child"
                ]
            },
            "relationships": {
                "parent": {
                    "data": {
                        "id": "9214719b-17fe-4ea7-896c-d61e60fc0d05",
                        "type": "product"
                    }
                }
            }
        },
        {
            "id": "35abe58c-87ca-4549-9db2-b61fbae061d0",
            "type": "product",
            "attributes": {
                "base_product": false,
                "base_product_id": "9214719b-17fe-4ea7-896c-d61e60fc0d05",
                "commodity_type": "physical",
                "created_at": "2022-08-26T15:49:41.862Z",
                "custom_inputs": {
                    "back": {
                        "name": "T-Shirt Back",
                        "required": false,
                        "validation_rules": [
                            {
                                "options": {
                                    "max_length": 50
                                },
                                "type": "string"
                            }
                        ]
                    },
                    "front": {
                        "name": "T-Shirt Front",
                        "required": false,
                        "validation_rules": [
                            {
                                "options": {
                                    "max_length": 50
                                },
                                "type": "string"
                            }
                        ]
                    }
                },
                "description": "T-shirt.",
                "manage_stock": false,
                "manufacturer_part_num": "1234-5678-SSSS",
                "name": "Shirt",
                "sku": "978055216732567LargeRedDenim",
                "slug": "978055216732567LargeRedDenim",
                "status": "live",
                "updated_at": "2022-08-26T15:49:41.862Z",
                "published_at": "2022-08-31T10:51:22.586Z"
            },
            "meta": {
                "catalog_id": "6dff977e-a8c4-4e32-8d2c-407266dde6dd",
                "catalog_source": "pim",
                "product_types": [
                    "child"
                ]
            },
            "relationships": {
                "parent": {
                    "data": {
                        "id": "9214719b-17fe-4ea7-896c-d61e60fc0d05",
                        "type": "product"
                    }
                }
            }
        },
        {
            "id": "3f8f4605-fa07-48a9-b608-578d19bbf48a",
            "type": "product",
            "attributes": {
                "base_product": false,
                "base_product_id": "9214719b-17fe-4ea7-896c-d61e60fc0d05",
                "commodity_type": "physical",
                "created_at": "2022-08-26T15:49:41.862Z",
                "custom_inputs": {
                    "back": {
                        "name": "T-Shirt Back",
                        "required": false,
                        "validation_rules": [
                            {
                                "options": {
                                    "max_length": 50
                                },
                                "type": "string"
                            }
                        ]
                    },
                    "front": {
                        "name": "T-Shirt Front",
                        "required": false,
                        "validation_rules": [
                            {
                                "options": {
                                    "max_length": 50
                                },
                                "type": "string"
                            }
                        ]
                    }
                },
                "description": "T-shirt.",
                "manage_stock": false,
                "manufacturer_part_num": "1234-5678-SSSS",
                "name": "Shirt",
                "sku": "978055216732567MediumGreenDenim",
                "slug": "978055216732567MediumGreenDenim",
                "status": "live",
                "updated_at": "2022-08-26T15:49:41.862Z",
                "published_at": "2022-08-31T10:51:22.586Z"
            },
            "meta": {
                "catalog_id": "6dff977e-a8c4-4e32-8d2c-407266dde6dd",
                "catalog_source": "pim",
                "product_types": [
                    "child"
                ]
            },
            "relationships": {
                "parent": {
                    "data": {
                        "id": "9214719b-17fe-4ea7-896c-d61e60fc0d05",
                        "type": "product"
                    }
                }
            }
        },
        {
            "id": "40e3bb19-d17f-447a-afa7-fe8acf22c47d",
            "type": "product",
            "attributes": {
                "base_product": false,
                "base_product_id": "9214719b-17fe-4ea7-896c-d61e60fc0d05",
                "commodity_type": "physical",
                "created_at": "2022-08-26T15:49:41.862Z",
                "custom_inputs": {
                    "back": {
                        "name": "T-Shirt Back",
                        "required": false,
                        "validation_rules": [
                            {
                                "options": {
                                    "max_length": 50
                                },
                                "type": "string"
                            }
                        ]
                    },
                    "front": {
                        "name": "T-Shirt Front",
                        "required": false,
                        "validation_rules": [
                            {
                                "options": {
                                    "max_length": 50
                                },
                                "type": "string"
                            }
                        ]
                    }
                },
                "description": "T-shirt.",
                "manage_stock": false,
                "manufacturer_part_num": "1234-5678-SSSS",
                "name": "Shirt",
                "sku": "978055216732567LargeGreenDenim",
                "slug": "978055216732567LargeGreenDenim",
                "status": "live",
                "updated_at": "2022-08-26T15:49:41.862Z",
                "published_at": "2022-08-31T10:51:22.586Z"
            },
            "meta": {
                "catalog_id": "6dff977e-a8c4-4e32-8d2c-407266dde6dd",
                "catalog_source": "pim",
                "product_types": [
                    "child"
                ]
            },
            "relationships": {
                "parent": {
                    "data": {
                        "id": "9214719b-17fe-4ea7-896c-d61e60fc0d05",
                        "type": "product"
                    }
                }
            }
        },
        {
            "id": "4aed52ac-0e2e-4a35-b9b4-1364dfc5e371",
            "type": "product",
            "attributes": {
                "base_product": false,
                "base_product_id": "9214719b-17fe-4ea7-896c-d61e60fc0d05",
                "commodity_type": "physical",
                "created_at": "2022-08-26T15:49:41.862Z",
                "custom_inputs": {
                    "back": {
                        "name": "T-Shirt Back",
                        "required": false,
                        "validation_rules": [
                            {
                                "options": {
                                    "max_length": 50
                                },
                                "type": "string"
                            }
                        ]
                    },
                    "front": {
                        "name": "T-Shirt Front",
                        "required": false,
                        "validation_rules": [
                            {
                                "options": {
                                    "max_length": 50
                                },
                                "type": "string"
                            }
                        ]
                    }
                },
                "description": "T-shirt.",
                "manage_stock": false,
                "manufacturer_part_num": "1234-5678-SSSS",
                "name": "Shirt",
                "sku": "978055216732567MediumBlueDenim",
                "slug": "978055216732567MediumBlueDenim",
                "status": "live",
                "updated_at": "2022-08-26T15:49:41.862Z",
                "published_at": "2022-08-31T10:51:22.586Z"
            },
            "meta": {
                "catalog_id": "6dff977e-a8c4-4e32-8d2c-407266dde6dd",
                "catalog_source": "pim",
                "product_types": [
                    "child"
                ]
            },
            "relationships": {
                "parent": {
                    "data": {
                        "id": "9214719b-17fe-4ea7-896c-d61e60fc0d05",
                        "type": "product"
                    }
                }
            }
        },
        {
            "id": "5a3b0c90-d4c5-4249-acec-e7e41d6f6f40",
            "type": "product",
            "attributes": {
                "base_product": false,
                "base_product_id": "9214719b-17fe-4ea7-896c-d61e60fc0d05",
                "commodity_type": "physical",
                "created_at": "2022-08-26T15:49:41.862Z",
                "custom_inputs": {
                    "back": {
                        "name": "T-Shirt Back",
                        "required": false,
                        "validation_rules": [
                            {
                                "options": {
                                    "max_length": 50
                                },
                                "type": "string"
                            }
                        ]
                    },
                    "front": {
                        "name": "T-Shirt Front",
                        "required": false,
                        "validation_rules": [
                            {
                                "options": {
                                    "max_length": 50
                                },
                                "type": "string"
                            }
                        ]
                    }
                },
                "description": "T-shirt.",
                "manage_stock": false,
                "manufacturer_part_num": "1234-5678-SSSS",
                "name": "Shirt",
                "sku": "978055216732567SmallRedCotton",
                "slug": "978055216732567SmallRedCotton",
                "status": "live",
                "updated_at": "2022-08-26T15:49:41.862Z",
                "published_at": "2022-08-31T10:51:22.586Z"
            },
            "meta": {
                "catalog_id": "6dff977e-a8c4-4e32-8d2c-407266dde6dd",
                "catalog_source": "pim",
                "product_types": [
                    "child"
                ]
            },
            "relationships": {
                "parent": {
                    "data": {
                        "id": "9214719b-17fe-4ea7-896c-d61e60fc0d05",
                        "type": "product"
                    }
                }
            }
        },
        {
            "id": "5cabf636-d8bd-41c8-9060-ffa9fd763221",
            "type": "product",
            "attributes": {
                "base_product": false,
                "base_product_id": "9214719b-17fe-4ea7-896c-d61e60fc0d05",
                "commodity_type": "physical",
                "created_at": "2022-08-26T15:49:41.862Z",
                "custom_inputs": {
                    "back": {
                        "name": "T-Shirt Back",
                        "required": false,
                        "validation_rules": [
                            {
                                "options": {
                                    "max_length": 50
                                },
                                "type": "string"
                            }
                        ]
                    },
                    "front": {
                        "name": "T-Shirt Front",
                        "required": false,
                        "validation_rules": [
                            {
                                "options": {
                                    "max_length": 50
                                },
                                "type": "string"
                            }
                        ]
                    }
                },
                "description": "T-shirt.",
                "manage_stock": false,
                "manufacturer_part_num": "1234-5678-SSSS",
                "name": "Shirt",
                "sku": "978055216732567SmallBlueCotton",
                "slug": "978055216732567SmallBlueCotton",
                "status": "live",
                "updated_at": "2022-08-26T15:49:41.862Z",
                "published_at": "2022-08-31T10:51:22.586Z"
            },
            "meta": {
                "catalog_id": "6dff977e-a8c4-4e32-8d2c-407266dde6dd",
                "catalog_source": "pim",
                "product_types": [
                    "child"
                ]
            },
            "relationships": {
                "parent": {
                    "data": {
                        "id": "9214719b-17fe-4ea7-896c-d61e60fc0d05",
                        "type": "product"
                    }
                }
            }
        },
        {
            "id": "71025a18-e43d-45e8-90ac-553c1739df85",
            "type": "product",
            "attributes": {
                "base_product": false,
                "base_product_id": "9214719b-17fe-4ea7-896c-d61e60fc0d05",
                "commodity_type": "physical",
                "created_at": "2022-08-26T15:49:41.862Z",
                "custom_inputs": {
                    "back": {
                        "name": "T-Shirt Back",
                        "required": false,
                        "validation_rules": [
                            {
                                "options": {
                                    "max_length": 50
                                },
                                "type": "string"
                            }
                        ]
                    },
                    "front": {
                        "name": "T-Shirt Front",
                        "required": false,
                        "validation_rules": [
                            {
                                "options": {
                                    "max_length": 50
                                },
                                "type": "string"
                            }
                        ]
                    }
                },
                "description": "T-shirt.",
                "manage_stock": false,
                "manufacturer_part_num": "1234-5678-SSSS",
                "name": "Shirt",
                "sku": "978055216732567MediumRedDenim",
                "slug": "978055216732567MediumRedDenim",
                "status": "live",
                "updated_at": "2022-08-26T15:49:41.862Z",
                "published_at": "2022-08-31T10:51:22.586Z"
            },
            "meta": {
                "catalog_id": "6dff977e-a8c4-4e32-8d2c-407266dde6dd",
                "catalog_source": "pim",
                "product_types": [
                    "child"
                ]
            },
            "relationships": {
                "parent": {
                    "data": {
                        "id": "9214719b-17fe-4ea7-896c-d61e60fc0d05",
                        "type": "product"
                    }
                }
            }
        },
        {
            "id": "75739ce4-55fb-4d17-8ea2-f0ae6ec6f03a",
            "type": "product",
            "attributes": {
                "base_product": false,
                "base_product_id": "9214719b-17fe-4ea7-896c-d61e60fc0d05",
                "commodity_type": "physical",
                "created_at": "2022-08-26T15:49:41.862Z",
                "custom_inputs": {
                    "back": {
                        "name": "T-Shirt Back",
                        "required": false,
                        "validation_rules": [
                            {
                                "options": {
                                    "max_length": 50
                                },
                                "type": "string"
                            }
                        ]
                    },
                    "front": {
                        "name": "T-Shirt Front",
                        "required": false,
                        "validation_rules": [
                            {
                                "options": {
                                    "max_length": 50
                                },
                                "type": "string"
                            }
                        ]
                    }
                },
                "description": "T-shirt.",
                "manage_stock": false,
                "manufacturer_part_num": "1234-5678-SSSS",
                "name": "Shirt",
                "sku": "978055216732567LargeBlueWool",
                "slug": "978055216732567LargeBlueWool",
                "status": "live",
                "updated_at": "2022-08-26T15:49:41.862Z",
                "published_at": "2022-08-31T10:51:22.586Z"
            },
            "meta": {
                "catalog_id": "6dff977e-a8c4-4e32-8d2c-407266dde6dd",
                "catalog_source": "pim",
                "product_types": [
                    "child"
                ]
            },
            "relationships": {
                "parent": {
                    "data": {
                        "id": "9214719b-17fe-4ea7-896c-d61e60fc0d05",
                        "type": "product"
                    }
                }
            }
        },
        {
            "id": "7a076ae8-3a3c-4cf9-aea2-4fc2a81d16a2",
            "type": "product",
            "attributes": {
                "base_product": false,
                "base_product_id": "9214719b-17fe-4ea7-896c-d61e60fc0d05",
                "commodity_type": "physical",
                "created_at": "2022-08-26T15:49:41.862Z",
                "custom_inputs": {
                    "back": {
                        "name": "T-Shirt Back",
                        "required": false,
                        "validation_rules": [
                            {
                                "options": {
                                    "max_length": 50
                                },
                                "type": "string"
                            }
                        ]
                    },
                    "front": {
                        "name": "T-Shirt Front",
                        "required": false,
                        "validation_rules": [
                            {
                                "options": {
                                    "max_length": 50
                                },
                                "type": "string"
                            }
                        ]
                    }
                },
                "description": "T-shirt.",
                "manage_stock": false,
                "manufacturer_part_num": "1234-5678-SSSS",
                "name": "Shirt",
                "sku": "978055216732567LargeGreenCotton",
                "slug": "978055216732567LargeGreenCotton",
                "status": "live",
                "updated_at": "2022-08-26T15:49:41.862Z",
                "published_at": "2022-08-31T10:51:22.586Z"
            },
            "meta": {
                "catalog_id": "6dff977e-a8c4-4e32-8d2c-407266dde6dd",
                "catalog_source": "pim",
                "product_types": [
                    "child"
                ]
            },
            "relationships": {
                "parent": {
                    "data": {
                        "id": "9214719b-17fe-4ea7-896c-d61e60fc0d05",
                        "type": "product"
                    }
                }
            }
        },
        {
            "id": "7f667af1-ce4c-4b43-97a2-51799e013b53",
            "type": "product",
            "attributes": {
                "base_product": false,
                "base_product_id": "9214719b-17fe-4ea7-896c-d61e60fc0d05",
                "commodity_type": "physical",
                "created_at": "2022-08-26T15:49:41.862Z",
                "custom_inputs": {
                    "back": {
                        "name": "T-Shirt Back",
                        "required": false,
                        "validation_rules": [
                            {
                                "options": {
                                    "max_length": 50
                                },
                                "type": "string"
                            }
                        ]
                    },
                    "front": {
                        "name": "T-Shirt Front",
                        "required": false,
                        "validation_rules": [
                            {
                                "options": {
                                    "max_length": 50
                                },
                                "type": "string"
                            }
                        ]
                    }
                },
                "description": "T-shirt.",
                "manage_stock": false,
                "manufacturer_part_num": "1234-5678-SSSS",
                "name": "Shirt",
                "sku": "978055216732567SmallGreenDenim",
                "slug": "978055216732567SmallGreenDenim",
                "status": "live",
                "updated_at": "2022-08-26T15:49:41.862Z",
                "published_at": "2022-08-31T10:51:22.586Z"
            },
            "meta": {
                "catalog_id": "6dff977e-a8c4-4e32-8d2c-407266dde6dd",
                "catalog_source": "pim",
                "product_types": [
                    "child"
                ]
            },
            "relationships": {
                "parent": {
                    "data": {
                        "id": "9214719b-17fe-4ea7-896c-d61e60fc0d05",
                        "type": "product"
                    }
                }
            }
        },
        {
            "id": "883588eb-7482-4810-b9dd-6348d53588b2",
            "type": "product",
            "attributes": {
                "base_product": false,
                "base_product_id": "9214719b-17fe-4ea7-896c-d61e60fc0d05",
                "commodity_type": "physical",
                "created_at": "2022-08-26T15:49:41.862Z",
                "custom_inputs": {
                    "back": {
                        "name": "T-Shirt Back",
                        "required": false,
                        "validation_rules": [
                            {
                                "options": {
                                    "max_length": 50
                                },
                                "type": "string"
                            }
                        ]
                    },
                    "front": {
                        "name": "T-Shirt Front",
                        "required": false,
                        "validation_rules": [
                            {
                                "options": {
                                    "max_length": 50
                                },
                                "type": "string"
                            }
                        ]
                    }
                },
                "description": "T-shirt.",
                "manage_stock": false,
                "manufacturer_part_num": "1234-5678-SSSS",
                "name": "Shirt",
                "sku": "978055216732567MediumRedWool",
                "slug": "978055216732567MediumRedWool",
                "status": "live",
                "updated_at": "2022-08-26T15:49:41.862Z",
                "published_at": "2022-08-31T10:51:22.586Z"
            },
            "meta": {
                "catalog_id": "6dff977e-a8c4-4e32-8d2c-407266dde6dd",
                "catalog_source": "pim",
                "product_types": [
                    "child"
                ]
            },
            "relationships": {
                "parent": {
                    "data": {
                        "id": "9214719b-17fe-4ea7-896c-d61e60fc0d05",
                        "type": "product"
                    }
                }
            }
        },
        {
            "id": "88fff318-33c1-48de-a9cd-a0400bff0398",
            "type": "product",
            "attributes": {
                "base_product": false,
                "base_product_id": "9214719b-17fe-4ea7-896c-d61e60fc0d05",
                "commodity_type": "physical",
                "created_at": "2022-08-26T15:49:41.862Z",
                "custom_inputs": {
                    "back": {
                        "name": "T-Shirt Back",
                        "required": false,
                        "validation_rules": [
                            {
                                "options": {
                                    "max_length": 50
                                },
                                "type": "string"
                            }
                        ]
                    },
                    "front": {
                        "name": "T-Shirt Front",
                        "required": false,
                        "validation_rules": [
                            {
                                "options": {
                                    "max_length": 50
                                },
                                "type": "string"
                            }
                        ]
                    }
                },
                "description": "T-shirt.",
                "manage_stock": false,
                "manufacturer_part_num": "1234-5678-SSSS",
                "name": "Shirt",
                "sku": "978055216732567SmallRedWool",
                "slug": "978055216732567SmallRedWool",
                "status": "live",
                "updated_at": "2022-08-26T15:49:41.862Z",
                "published_at": "2022-08-31T10:51:22.586Z"
            },
            "meta": {
                "catalog_id": "6dff977e-a8c4-4e32-8d2c-407266dde6dd",
                "catalog_source": "pim",
                "product_types": [
                    "child"
                ]
            },
            "relationships": {
                "parent": {
                    "data": {
                        "id": "9214719b-17fe-4ea7-896c-d61e60fc0d05",
                        "type": "product"
                    }
                }
            }
        },
        {
            "id": "8bf923a6-a0d8-42c7-a60b-e6bb19b44dea",
            "type": "product",
            "attributes": {
                "base_product": false,
                "base_product_id": "9214719b-17fe-4ea7-896c-d61e60fc0d05",
                "commodity_type": "physical",
                "created_at": "2022-08-26T15:49:41.862Z",
                "custom_inputs": {
                    "back": {
                        "name": "T-Shirt Back",
                        "required": false,
                        "validation_rules": [
                            {
                                "options": {
                                    "max_length": 50
                                },
                                "type": "string"
                            }
                        ]
                    },
                    "front": {
                        "name": "T-Shirt Front",
                        "required": false,
                        "validation_rules": [
                            {
                                "options": {
                                    "max_length": 50
                                },
                                "type": "string"
                            }
                        ]
                    }
                },
                "description": "T-shirt.",
                "manage_stock": false,
                "manufacturer_part_num": "1234-5678-SSSS",
                "name": "Shirt",
                "sku": "978055216732567LargeRedCotton",
                "slug": "978055216732567LargeRedCotton",
                "status": "live",
                "updated_at": "2022-08-26T15:49:41.862Z",
                "published_at": "2022-08-31T10:51:22.586Z"
            },
            "meta": {
                "catalog_id": "6dff977e-a8c4-4e32-8d2c-407266dde6dd",
                "catalog_source": "pim",
                "product_types": [
                    "child"
              ]
            },
            "relationships": {
                "parent": {
                    "data": {
                        "id": "9214719b-17fe-4ea7-896c-d61e60fc0d05",
                        "type": "product"
                    }
                }
            }
        },
        {
            "id": "92172528-1f82-4734-9ccb-4da9198d618e",
            "type": "product",
            "attributes": {
                "base_product": false,
                "base_product_id": "9214719b-17fe-4ea7-896c-d61e60fc0d05",
                "commodity_type": "physical",
                "created_at": "2022-08-26T15:49:41.862Z",
                "custom_inputs": {
                    "back": {
                        "name": "T-Shirt Back",
                        "required": false,
                        "validation_rules": [
                            {
                                "options": {
                                    "max_length": 50
                                },
                                "type": "string"
                            }
                        ]
                    },
                    "front": {
                        "name": "T-Shirt Front",
                        "required": false,
                        "validation_rules": [
                            {
                                "options": {
                                    "max_length": 50
                                },
                                "type": "string"
                            }
                        ]
                    }
                },
                "description": "T-shirt.",
                "manage_stock": false,
                "manufacturer_part_num": "1234-5678-SSSS",
                "name": "Shirt",
                "sku": "978055216732567SmallRedDenim",
                "slug": "978055216732567SmallRedDenim",
                "status": "live",
                "updated_at": "2022-08-26T15:49:41.862Z",
                "published_at": "2022-08-31T10:51:22.586Z"
            },
            "meta": {
                "catalog_id": "6dff977e-a8c4-4e32-8d2c-407266dde6dd",
                "catalog_source": "pim",
                "product_types": [
                    "child"
                ]
            },
            "relationships": {
                "parent": {
                    "data": {
                        "id": "9214719b-17fe-4ea7-896c-d61e60fc0d05",
                        "type": "product"
                    }
                }
            }
        },
        {
            "id": "950edff1-0241-4178-862c-ce6c5655977b",
            "type": "product",
            "attributes": {
                "base_product": false,
                "base_product_id": "9214719b-17fe-4ea7-896c-d61e60fc0d05",
                "commodity_type": "physical",
                "created_at": "2022-08-26T15:49:41.862Z",
                "custom_inputs": {
                    "back": {
                        "name": "T-Shirt Back",
                        "required": false,
                        "validation_rules": [
                            {
                                "options": {
                                    "max_length": 50
                                },
                                "type": "string"
                            }
                        ]
                    },
                    "front": {
                        "name": "T-Shirt Front",
                        "required": false,
                        "validation_rules": [
                            {
                                "options": {
                                    "max_length": 50
                                },
                                "type": "string"
                            }
                        ]
                    }
                },
                "description": "T-shirt.",
                "manage_stock": false,
                "manufacturer_part_num": "1234-5678-SSSS",
                "name": "Shirt",
                "sku": "978055216732567MediumBlueCotton",
                "slug": "978055216732567MediumBlueCotton",
                "status": "live",
                "updated_at": "2022-08-26T15:49:41.862Z",
                "published_at": "2022-08-31T10:51:22.586Z"
            },
            "meta": {
                "catalog_id": "6dff977e-a8c4-4e32-8d2c-407266dde6dd",
                "catalog_source": "pim",
                "product_types": [
                    "child"
                ]
            },
            "relationships": {
                "parent": {
                    "data": {
                        "id": "9214719b-17fe-4ea7-896c-d61e60fc0d05",
                        "type": "product"
                    }
                }
            }
        },
        {
            "id": "9c524c3d-ee23-40a8-ad51-2d682bc5c850",
            "type": "product",
            "attributes": {
                "base_product": false,
                "base_product_id": "9214719b-17fe-4ea7-896c-d61e60fc0d05",
                "commodity_type": "physical",
                "created_at": "2022-08-26T15:49:41.862Z",
                "custom_inputs": {
                    "back": {
                        "name": "T-Shirt Back",
                        "required": false,
                        "validation_rules": [
                            {
                                "options": {
                                    "max_length": 50
                                },
                                "type": "string"
                            }
                        ]
                    },
                    "front": {
                        "name": "T-Shirt Front",
                        "required": false,
                        "validation_rules": [
                            {
                                "options": {
                                    "max_length": 50
                                },
                                "type": "string"
                            }
                        ]
                    }
                },
                "description": "T-shirt.",
                "manage_stock": false,
                "manufacturer_part_num": "1234-5678-SSSS",
                "name": "Shirt",
                "sku": "978055216732567MediumBlueWool",
                "slug": "978055216732567MediumBlueWool",
                "status": "live",
                "updated_at": "2022-08-26T15:49:41.862Z",
                "published_at": "2022-08-31T10:51:22.586Z"
            },
            "meta": {
                "catalog_id": "6dff977e-a8c4-4e32-8d2c-407266dde6dd",
                "catalog_source": "pim",
                "product_types": [
                    "child"
                ]
            },
            "relationships": {
                "parent": {
                    "data": {
                        "id": "9214719b-17fe-4ea7-896c-d61e60fc0d05",
                        "type": "product"
                    }
                }
            }
        },
        {
            "id": "9ce6e016-e29e-4b1e-8881-ff3923f23aa5",
            "type": "product",
            "attributes": {
                "base_product": false,
                "base_product_id": "9214719b-17fe-4ea7-896c-d61e60fc0d05",
                "commodity_type": "physical",
                "created_at": "2022-08-26T15:49:41.862Z",
                "custom_inputs": {
                    "back": {
                        "name": "T-Shirt Back",
                        "required": false,
                        "validation_rules": [
                            {
                                "options": {
                                    "max_length": 50
                                },
                                "type": "string"
                            }
                        ]
                    },
                    "front": {
                        "name": "T-Shirt Front",
                        "required": false,
                        "validation_rules": [
                            {
                                "options": {
                                    "max_length": 50
                                },
                                "type": "string"
                            }
                        ]
                    }
                },
                "description": "T-shirt.",
                "manage_stock": false,
                "manufacturer_part_num": "1234-5678-SSSS",
                "name": "Shirt",
                "sku": "978055216732567SmallGreenCotton",
                "slug": "978055216732567SmallGreenCotton",
                "status": "live",
                "updated_at": "2022-08-26T15:49:41.862Z",
                "published_at": "2022-08-31T10:51:22.586Z"
            },
            "meta": {
                "catalog_id": "6dff977e-a8c4-4e32-8d2c-407266dde6dd",
                "catalog_source": "pim"
            },
            "relationships": {
                "parent": {
                    "data": {
                        "id": "9214719b-17fe-4ea7-896c-d61e60fc0d05",
                        "type": "product"
                    }
                }
            }
        },
        {
            "id": "a0594487-209c-4029-aa61-38a65cfb0b64",
            "type": "product",
            "attributes": {
                "base_product": false,
                "base_product_id": "9214719b-17fe-4ea7-896c-d61e60fc0d05",
                "commodity_type": "physical",
                "created_at": "2022-08-26T15:49:41.862Z",
                "custom_inputs": {
                    "back": {
                        "name": "T-Shirt Back",
                        "required": false,
                        "validation_rules": [
                            {
                                "options": {
                                    "max_length": 50
                                },
                                "type": "string"
                            }
                        ]
                    },
                    "front": {
                        "name": "T-Shirt Front",
                        "required": false,
                        "validation_rules": [
                            {
                                "options": {
                                    "max_length": 50
                                },
                                "type": "string"
                            }
                        ]
                    }
                },
                "description": "T-shirt.",
                "manage_stock": false,
                "manufacturer_part_num": "1234-5678-SSSS",
                "name": "Shirt",
                "sku": "978055216732567LargeGreenWool",
                "slug": "978055216732567LargeGreenWool",
                "status": "live",
                "updated_at": "2022-08-26T15:49:41.862Z",
                "published_at": "2022-08-31T10:51:22.586Z"
            },
            "meta": {
                "catalog_id": "6dff977e-a8c4-4e32-8d2c-407266dde6dd",
                "catalog_source": "pim",
                "product_types": [
                    "child"
                ]
            },
            "relationships": {
                "parent": {
                    "data": {
                        "id": "9214719b-17fe-4ea7-896c-d61e60fc0d05",
                        "type": "product"
                    }
                }
            }
        },
        {
            "id": "ab8a2c62-664b-49dd-a8e7-b95ce3362929",
            "type": "product",
            "attributes": {
                "base_product": false,
                "base_product_id": "9214719b-17fe-4ea7-896c-d61e60fc0d05",
                "commodity_type": "physical",
                "created_at": "2022-08-26T15:49:41.862Z",
                "custom_inputs": {
                    "back": {
                        "name": "T-Shirt Back",
                        "required": false,
                        "validation_rules": [
                            {
                                "options": {
                                    "max_length": 50
                                },
                                "type": "string"
                            }
                        ]
                    },
                    "front": {
                        "name": "T-Shirt Front",
                        "required": false,
                        "validation_rules": [
                            {
                                "options": {
                                    "max_length": 50
                                },
                                "type": "string"
                            }
                        ]
                    }
                },
                "description": "T-shirt.",
                "manage_stock": false,
                "manufacturer_part_num": "1234-5678-SSSS",
                "name": "Shirt",
                "sku": "978055216732567SmallGreenWool",
                "slug": "978055216732567SmallGreenWool",
                "status": "live",
                "updated_at": "2022-08-26T15:49:41.862Z",
                "published_at": "2022-08-31T10:51:22.586Z"
            },
            "meta": {
                "catalog_id": "6dff977e-a8c4-4e32-8d2c-407266dde6dd",
                "catalog_source": "pim",
                "product_types": [
                    "child"
                ]
            },
            "relationships": {
                "parent": {
                    "data": {
                        "id": "9214719b-17fe-4ea7-896c-d61e60fc0d05",
                        "type": "product"
                    }
                }
            }
        },
        {
            "id": "cfdbc0ca-0067-483f-adbb-cadc68a8f94d",
            "type": "product",
            "attributes": {
                "base_product": false,
                "base_product_id": "9214719b-17fe-4ea7-896c-d61e60fc0d05",
                "commodity_type": "physical",
                "created_at": "2022-08-26T15:49:41.862Z",
                "custom_inputs": {
                    "back": {
                        "name": "T-Shirt Back",
                        "required": false,
                        "validation_rules": [
                            {
                                "options": {
                                    "max_length": 50
                                },
                                "type": "string"
                            }
                        ]
                    },
                    "front": {
                        "name": "T-Shirt Front",
                        "required": false,
                        "validation_rules": [
                            {
                                "options": {
                                    "max_length": 50
                                },
                                "type": "string"
                            }
                        ]
                    }
                },
                "description": "T-shirt.",
                "manage_stock": false,
                "manufacturer_part_num": "1234-5678-SSSS",
                "name": "Shirt",
                "sku": "978055216732567MediumGreenCotton",
                "slug": "978055216732567MediumGreenCotton",
                "status": "live",
                "updated_at": "2022-08-26T15:49:41.862Z",
                "published_at": "2022-08-31T10:51:22.586Z"
            },
            "meta": {
                "catalog_id": "6dff977e-a8c4-4e32-8d2c-407266dde6dd",
                "catalog_source": "pim",
                "product_types": [
                    "child"
                ]
            },
            "relationships": {
                "parent": {
                    "data": {
                        "id": "9214719b-17fe-4ea7-896c-d61e60fc0d05",
                        "type": "product"
                    }
                }
            }
        },
        {
            "id": "d43329df-5e5c-4193-8b26-0b15bb39a4a6",
            "type": "product",
            "attributes": {
                "base_product": false,
                "base_product_id": "9214719b-17fe-4ea7-896c-d61e60fc0d05",
                "commodity_type": "physical",
                "created_at": "2022-08-26T15:49:41.862Z",
                "custom_inputs": {
                    "back": {
                        "name": "T-Shirt Back",
                        "required": false,
                        "validation_rules": [
                            {
                                "options": {
                                    "max_length": 50
                                },
                                "type": "string"
                            }
                        ]
                    },
                    "front": {
                        "name": "T-Shirt Front",
                        "required": false,
                        "validation_rules": [
                            {
                                "options": {
                                    "max_length": 50
                                },
                                "type": "string"
                            }
                        ]
                    }
                },
                "description": "T-shirt.",
                "manage_stock": false,
                "manufacturer_part_num": "1234-5678-SSSS",
                "name": "Shirt",
                "sku": "978055216732567SmallBlueDenim",
                "slug": "978055216732567SmallBlueDenim",
                "status": "live",
                "updated_at": "2022-08-26T15:49:41.862Z",
                "published_at": "2022-08-31T10:51:22.586Z"
            },
            "meta": {
                "catalog_id": "6dff977e-a8c4-4e32-8d2c-407266dde6dd",
                "catalog_source": "pim",
                "product_types": [
                    "child"
                ]
            },
            "relationships": {
                "parent": {
                    "data": {
                        "id": "9214719b-17fe-4ea7-896c-d61e60fc0d05",
                        "type": "product"
                    }
                }
            }
        },
        {
            "id": "da871f80-2f9e-4960-9779-9fc649607f2f",
            "type": "product",
            "attributes": {
                "base_product": false,
                "base_product_id": "9214719b-17fe-4ea7-896c-d61e60fc0d05",
                "commodity_type": "physical",
                "created_at": "2022-08-26T15:49:41.862Z",
                "custom_inputs": {
                    "back": {
                        "name": "T-Shirt Back",
                        "required": false,
                        "validation_rules": [
                            {
                                "options": {
                                    "max_length": 50
                                },
                                "type": "string"
                            }
                        ]
                    },
                    "front": {
                        "name": "T-Shirt Front",
                        "required": false,
                        "validation_rules": [
                            {
                                "options": {
                                    "max_length": 50
                                },
                                "type": "string"
                            }
                        ]
                    }
                },
                "description": "T-shirt.",
                "manage_stock": false,
                "manufacturer_part_num": "1234-5678-SSSS",
                "name": "Shirt",
                "sku": "978055216732567LargeBlueCotton",
                "slug": "978055216732567LargeBlueCotton",
                "status": "live",
                "updated_at": "2022-08-26T15:49:41.862Z",
                "published_at": "2022-08-31T10:51:22.586Z"
            },
            "meta": {
                "catalog_id": "6dff977e-a8c4-4e32-8d2c-407266dde6dd",
                "catalog_source": "pim",
                "product_types": [
                    "child"
                ]
            },
            "relationships": {
                "parent": {
                    "data": {
                        "id": "9214719b-17fe-4ea7-896c-d61e60fc0d05",
                        "type": "product"
                    }
                }
            }
        }
    ],
    "links": {
        "first": "/pcm/catalogs/6dff977e-a8c4-4e32-8d2c-407266dde6dd/releases/dfaa3923-db0c-4fd2-9e7f-9ba11293a8ab/products/9214719b-17fe-4ea7-896c-d61e60fc0d05/relationships/children?page[offset]=0&page[limit]=25&",
        "last": "/pcm/catalogs/6dff977e-a8c4-4e32-8d2c-407266dde6dd/releases/dfaa3923-db0c-4fd2-9e7f-9ba11293a8ab/products/9214719b-17fe-4ea7-896c-d61e60fc0d05/relationships/children?page[offset]=25&page[limit]=25&",
        "next": "/pcm/catalogs/6dff977e-a8c4-4e32-8d2c-407266dde6dd/releases/dfaa3923-db0c-4fd2-9e7f-9ba11293a8ab/products/9214719b-17fe-4ea7-896c-d61e60fc0d05/relationships/children?page[offset]=25&page[limit]=25&",
        "self": "/pcm/catalogs/6dff977e-a8c4-4e32-8d2c-407266dde6dd/releases/dfaa3923-db0c-4fd2-9e7f-9ba11293a8ab/products/9214719b-17fe-4ea7-896c-d61e60fc0d05/relationships/children"
    },
    "meta": {
        "page": {
            "current": 1,
            "limit": 25,
            "total": 25
        },
        "results": {
            "total": 27
        }
    }
}
```

## Related Resources

- [Bundles - Product Experience Manager](/docs/pxm/products/pxm-bundles/pxm-bundles)
- [Products API](/docs/pxm/products/ep-pxm-products-api/pxm-products-api-overview)
- [Bundles API](/docs/pxm/products/pxm-bundles/pxm-bundles-api/create-a-bundle)
