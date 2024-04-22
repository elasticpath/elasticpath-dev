---
title: Get a Product
nav_label: Get a Product
sidebar_position: 30
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `GET` Get a Product

```http
https://useast.api.elasticpath.com/pcm/products/:productId
```

Retrieves a product by its identifier.

You can also use `include=component_products` to retrieve top-level resources, such as files or images, and key attribute data, such as SKU or slug for component products in a product bundle. With this option, you can get more information about the products in a product bundle in your store front, improving the buying experience for your shoppers. For more information, see [Create a Bundle](/docs/pxm/products/pxm-bundles/pxm-bundles-api/create-a-bundle).

## Parameters

### Path parameters

| Name        | Required | Type     | Description                           |
|:------------|:---------|:---------|:--------------------------------------|
| `productId` | Required | `string` | The unique identifier of the product. |

### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token to grant access to the API. |

### Query Parameters

| Key       | Value                | Description                               |
|:----------|:---------------------|:------------------------------------------|
| `include` | `component_products` | The top-level resources, such as files or images, and key attribute data, such as SKU or slug, to return for component products in a product bundle. For more information, see [Create a Bundle](/docs/pxm/products/pxm-bundles/pxm-bundles-api/create-a-bundle). |

## Request Example

### Curl

```bash
curl GET https://useast.api.elasticpath.com/pcm/products/f5bd4e59-a95f-4bda-bfe6-0f34f47ac94b \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

## Response Example

`200 OK`

```json
{
    "data": {
        "type": "product",
        "id": "f5bd4e59-a95f-4bda-bfe6-0f34f47ac94b",
        "attributes": {
            "commodity_type": "physical",
            "description": "This electric model offers an induction heating element and convection oven.",
            "mpn": "BE-R-1111-aaaa-1a1a",
            "name": "BestEver Range, Model 1a1a",
            "sku": "BE-Range-1a1a",
            "slug": "bestever-range-1a1a",
            "status": "draft",
            "upc_ean": "111122223333"
        },
        "relationships": {
            "files": {
                "data": [],
                "links": {
                    "self": "/products/f5bd4e59-a95f-4bda-bfe6-0f34f47ac94b/relationships/files"
                }
            },
            "templates": {
                "data": [],
                "links": {
                    "self": "/products/f5bd4e59-a95f-4bda-bfe6-0f34f47ac94b/relationships/templates"
                }
            }
        },
        "meta": {
            "created_at": "2023-09-28T10:43:41.72Z",
            "owner": "organization",
            "product_types": [
                "standard"
            ],
            "tags": [
                "Seimans",
                "self-cleaning",
                "lifestyle"
            ],
            "updated_at": "2023-09-28T10:43:41.72Z",
            "variation_matrix": {}
        }
    }
}
```

## Request Example with Include Component Products

### Curl

```bash
curl GET https://useast.api.elasticpath.com/pcm/products/:productId?include=component_products
     -H "Authorization: Bearer XXXX" \
```

### Response example

`200 OK`

```json
{
    "data": {
        "type": "product",
        "id": "4ca7de77-994d-4e7c-b834-4cb2ae156f57",
        "attributes": {
            "commodity_type": "physical",
            "components": {
                "Apples": {
                    "name": "Apples",
                    "options": [
                        {
                            "id": "f809fe4f-83f7-4db4-8175-e467a0d1974a",
                            "type": "product",
                            "quantity": 12
                        }
                    ]
                },
                "Oranges": {
                    "name": "Oranges",
                    "options": [
                        {
                            "id": "7f8f596a-2dc0-4e78-ba0d-3810eac6f86a",
                            "type": "product",
                            "quantity": 12
                        }
                    ]
                }
            },
            "description": "fruit",
            "name": "fruit Bundle",
            "slug": "45-b",
            "status": "live"
        },
        "relationships": {
            "children": {
                "data": [],
                "links": {
                    "self": "/products/4ca7de77-994d-4e7c-b834-4cb2ae156f57/children"
                }
            },
            "component_products": {
                "data": [],
                "links": {
                    "self": "/products/4ca7de77-994d-4e7c-b834-4cb2ae156f57/relationships/component_products"
                }
            },
            "files": {
                "data": [],
                "links": {
                    "self": "/products/4ca7de77-994d-4e7c-b834-4cb2ae156f57/relationships/files"
                }
            },
            "main_image": {
                "data": null
            },
            "templates": {
                "data": [],
                "links": {
                    "self": "/products/4ca7de77-994d-4e7c-b834-4cb2ae156f57/relationships/templates"
                }
            },
            "variations": {
                "data": [],
                "links": {
                    "self": "/products/4ca7de77-994d-4e7c-b834-4cb2ae156f57/relationships/variations"
                }
            }
        },
        "meta": {
            "created_at": "2022-02-01T12:51:51.132Z",
            "owner": "store",
            "product_types": [
                "bundle"
            ],
            "tags": [
                "Organic",
                "Everyday",
                "Norton Farm"
            ],
            "updated_at": "2022-02-01T12:51:51.132Z",
            "variation_matrix": {}
        }
    },
    "included": {
        "component_products": [
            {
                "type": "product",
                "id": "f809fe4f-83f7-4db4-8175-e467a0d1974a",
                "attributes": {
                    "commodity_type": "physical",
                    "description": "fruit",
                    "name": "Apples",
                    "sku": "45",
                    "status": "live"
                },
                "relationships": {
                    "children": {
                        "data": [],
                        "links": {
                            "self": "/products/f809fe4f-83f7-4db4-8175-e467a0d1974a/children"
                        }
                    },
                    "component_products": {
                        "data": [],
                        "links": {
                            "self": "/products/f809fe4f-83f7-4db4-8175-e467a0d1974a/relationships/component_products"
                        }
                    },
                    "files": {
                        "data": [],
                        "links": {
                            "self": "/products/f809fe4f-83f7-4db4-8175-e467a0d1974a/relationships/files"
                        }
                    },
                    "main_image": {
                        "data": null
                    },
                    "templates": {
                        "data": [],
                        "links": {
                            "self": "/products/f809fe4f-83f7-4db4-8175-e467a0d1974a/relationships/templates"
                        }
                    },
                    "variations": {
                        "data": [],
                        "links": {
                            "self": "/products/f809fe4f-83f7-4db4-8175-e467a0d1974a/relationships/variations"
                        }
                    }
                },
                "meta": {
                    "created_at": "2022-02-01T12:50:33.347Z",
                    "owner": "store",
                    "product_types": [
                        "standard"
                    ],
                    "tags": [
                        "Organic",
                        "Everyday",
                        "Norton Farm"
                    ],
                    "updated_at": "2022-02-01T12:50:33.347Z",
                    "variation_matrix": {}
                }
            },
            {
                "type": "product",
                "id": "7f8f596a-2dc0-4e78-ba0d-3810eac6f86a",
                "attributes": {
                    "commodity_type": "physical",
                    "description": "fruit",
                    "name": "Oranges",
                    "sku": "46",
                    "status": "live"
                },
                "relationships": {
                    "children": {
                        "data": [],
                        "links": {
                            "self": "/products/7f8f596a-2dc0-4e78-ba0d-3810eac6f86a/children"
                        }
                    },
                    "component_products": {
                        "data": [],
                        "links": {
                            "self": "/products/7f8f596a-2dc0-4e78-ba0d-3810eac6f86a/relationships/component_products"
                        }
                    },
                    "files": {
                        "data": [],
                        "links": {
                            "self": "/products/7f8f596a-2dc0-4e78-ba0d-3810eac6f86a/relationships/files"
                        }
                    },
                    "main_image": {
                        "data": null
                    },
                    "templates": {
                        "data": [],
                        "links": {
                            "self": "/products/7f8f596a-2dc0-4e78-ba0d-3810eac6f86a/relationships/templates"
                        }
                    },
                    "variations": {
                        "data": [],
                        "links": {
                            "self": "/products/7f8f596a-2dc0-4e78-ba0d-3810eac6f86a/relationships/variations"
                        }
                    }
                },
                "meta": {
                    "created_at": "2022-02-01T12:49:19.298Z",
                    "owner": "store",
                    "product_types": [
                        "standard"
                    ],
                    "tags": [
                        "Organic",
                        "Everyday",
                        "Norton Farm"
                    ],
                    "updated_at": "2022-02-01T12:49:19.298Z",
                    "variation_matrix": {}
                }
            }
        ]
    }
}
```

## Related Resources

- [Bundles - Product Experience Manager](/docs/pxm/products/pxm-bundles)
- [Bundles API](/docs/pxm/products/pxm-bundles/pxm-bundles-api/create-a-bundle)
