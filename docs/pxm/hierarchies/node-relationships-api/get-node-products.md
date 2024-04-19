---
title: Get a Nodeʼs Products
nav_label: Get a Nodeʼs Products
sidebar_position: 10
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `GET` Get a Nodeʼs Products

```http
https://useast.api.elasticpath.com/pcm/hierarchies/:hierarchyId/nodes/:nodeId/products
```

Returns the products associated with the specified hierarchy node. If the products have been curated using the [update a hierarchy node](/docs/pxm/products/pxm-products-commerce-manager/curating-products) endpoint, then the products are returned in the order specified in the `curated_products` attribute in the body of the [update a hierarchy node](/docs/pxm/products/pxm-products-commerce-manager/curating-products) request. A product that is curated has the `"curated_product": true` attribute displayed. See [Curating Products](/docs/pxm/products/curating-products).

## Parameters

### Path parameters

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `hierarchyId` | Required | `string` | The unique identifier of the hierarchy. |
| `nodeId` | Required | `string` | The unique identifier of the node in the hierarchy. |

### Headers

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token to grant access to the API. |

### Query parameters

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `page[limit]` | Optional | `integer` | The number of items to return per page. Minimum value is `1`. See [Pagination](/docs/commerce-cloud/api-overview/pagination). |
| `page[offset]` | Optional | `integer` | The number of items to offset the results by. Offset is zero-based. See [Pagination](/docs/commerce-cloud/api-overview/pagination). |

## Request Example

```bash
curl -X GET https://useast.api.elasticpath.com/pcm/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007/nodes/de3c3590-4138-4943-b04d-d7b7dc48fa54/products \
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
            "id": "14e055d0-eebb-4090-8594-a0a7aeea2151",
            "attributes": {
                "commodity_type": "physical",
                "curated_product": true,
                "description": "This gas model includes a convection oven.",
                "mpn": "BE-R-2222-bbbb-2b2b",
                "name": "BestEver Range, Model 2b2b",
                "sku": "BE-Range-2b2b",
                "slug": "bestever-range-2b2b",
                "status": "draft",
                "upc_ean": "222233334444"
            },
            "relationships": {
                "files": {
                    "data": [],
                    "links": {
                        "self": "/products/14e055d0-eebb-4090-8594-a0a7aeea2151/relationships/files"
                    }
                },
                "templates": {
                    "data": [],
                    "links": {
                        "self": "/products/14e055d0-eebb-4090-8594-a0a7aeea2151/relationships/templates"
                    }
                }
            }
        },
        {
            "type": "product",
            "id": "ca9cee27-eabd-472a-ae0a-11dcbcc0f7af",
            "attributes": {
                "commodity_type": "physical",
                "description": "The 30 inch version of this popular range.",
                "mpn": "BE-R-2222-bbbb-2b2b-30",
                "name": "BestEver Range 30 inch, Model 2b2b-30",
                "sku": "BE-Range-2b2b-30",
                "slug": "bestever-range-2b2b-30",
                "status": "draft",
                "upc_ean": "222230303030"
            },
            "relationships": {
                "files": {
                    "data": [],
                    "links": {
                        "self": "/products/ca9cee27-eabd-472a-ae0a-11dcbcc0f7af/relationships/files"
                    }
                },
                "templates": {
                    "data": [],
                    "links": {
                        "self": "/products/ca9cee27-eabd-472a-ae0a-11dcbcc0f7af/relationships/templates"
                    }
                }
            }
        },
        {
            "type": "product",
            "id": "d4d4744f-a2e5-4925-a613-5aeb0971337e",
            "attributes": {
                "commodity_type": "physical",
                "description": "The 32 inch version of this popular range.",
                "mpn": "BE-R-2222-bbbb-2b2b-32",
                "name": "BestEver Range 32 inch, Model 2b2b-32",
                "sku": "BE-Range-2b2b-32",
                "slug": "bestever-range-2b2b-32",
                "status": "draft",
                "upc_ean": "222232323232"
            },
            "relationships": {
                "files": {
                    "data": [],
                    "links": {
                        "self": "/products/d4d4744f-a2e5-4925-a613-5aeb0971337e/relationships/files"
                    }
                },
                "templates": {
                    "data": [],
                    "links": {
                        "self": "/products/d4d4744f-a2e5-4925-a613-5aeb0971337e/relationships/templates"
                    }
                }
            }
        }
    ]
}
```
