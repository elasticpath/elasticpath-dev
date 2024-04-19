---
title: Get Child Products
nav_label: Get Child Products
sidebar_position: 20
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `GET` Get Child Products

```http
https://useast.api.elasticpath.com/pcm/products/:productId/children
```

## Parameters

### Path parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `productId` | Required | `string` | The ID of the base product to list child products for. |

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Example

```bash
curl GET https://useast.api.elasticpath.com/pcm/products/b9ea1ff1-8e24-4d60-a6dd-5bb39fb25aa0/children \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

## Response Example

`200 OK`

```json
{
    "data": [
        {
        "type": "product",
        "id": "1d51f403-4845-4f03-9dae-9c9e48169946",
        "attributes": {
            "commodity_type": "physical",
            "description": "T-shirts",
            "locales": {
                "fr-FR": {
                    "name": "T-Shirt",
                    "description": "Unisexe"
                }
            },
            "name": "T-Shirt",
            "sku": "2345678920202T-Shirt",
            "slug": "2345678920202T-Shirt",
            "status": "live"
        },
        "relationships": {
            "base_product": {
                "data": {
                    "type": "product",
                    "id": "dc37c384-2ca9-498a-a10b-4b06d65884f0"
                }
            },
            "children": {
                "data": []
            },
            "files": {
                "data": [],
                "links": {
                    "self": "/products/1d51f403-4845-4f03-9dae-9c9e48169946/relationships/files"
                }
            },
            "main_image": {
                "data": null
            },
            "templates": {
                "data": [],
                "links": {
                    "self": "/products/1d51f403-4845-4f03-9dae-9c9e48169946/relationships/templates"
                }
            },
            "variations": {
                "data": [],
                "links": {
                    "self": "/products/1d51f403-4845-4f03-9dae-9c9e48169946/relationships/variations"
                }
            }
        },
        "meta": {
            "variation_matrix": {}
        }
    },
    {
        "type": "product",
        "id": "25f289a8-85d8-4eed-ae9f-b90548828908",
        "attributes": {
            "commodity_type": "digital",
            "description": "T-shirts",
            "locales": {
                "fr-FR": {
                    "name": "T-Shirt",
                    "description": "Unisexe"
                }
            },
            "name": "T-Shirt",
            "sku": "2345678920202Blue",
            "slug": "2345678920202Blue",
            "status": "live"
        },
        "relationships": {
            "base_product": {
                "data": {
                    "type": "product",
                    "id": "dc37c384-2ca9-498a-a10b-4b06d65884f0"
                }
            },
            "children": {
                "data": []
            },
            "files": {
                "data": [],
                "links": {
                    "self": "/products/25f289a8-85d8-4eed-ae9f-b90548828908/relationships/files"
                }
            },
            "main_image": {
                "data": null
            },
            "templates": {
                "data": [],
                "links": {
                    "self": "/products/25f289a8-85d8-4eed-ae9f-b90548828908/relationships/templates"
                }
            },
            "variations": {
                "data": [],
                "links": {
                    "self": "/products/25f289a8-85d8-4eed-ae9f-b90548828908/relationships/variations"
                }
            }
        },
        "meta": {
            "variation_matrix": {}
        }
    }
]
}
```
