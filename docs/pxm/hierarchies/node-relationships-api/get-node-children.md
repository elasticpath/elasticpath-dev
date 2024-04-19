---
title: Get a Nodeʼs Children
nav_label: Get a Nodeʼs Children
sidebar_position: 20
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `GET` Get a Nodeʼs Children

```http
https://useast.api.elasticpath.com/pcm/hierarchies/:hierarchyId/nodes/:nodeId/children
```

Retrieves a list of child nodes for the specified node. By default, child nodes in the response are arranged by the `updated_at` time in descending order and the most recently updated child node appears at the top of the response.

You can change the order in which child nodes appear in the response by setting the `sort_order` value for each child when you [Create Relationships with Child Nodes](/docs/pxm/hierarchies/node-relationships-api/create-node-child-relationships).

You can use this endpoint to retrieve a list of products for the specified node. If the products have been curated using the [`update a hierarchy node`](/docs/pxm/hierarchies/hierarchies-api/update-a-hierarchy#curating-products-in-a-node) endpoint, then the products are returned in the order specified in the `curated_products` attribute in the body of the [`update a hierarchy node`](/docs/pxm/hierarchies/hierarchies-api/update-a-hierarchy#curating-products-in-a-node) request.

## Parameters

### Path parameters

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `hierarchyId` | Required | `string` | The unique identifier of the hierarchy. |
| `nodeId` | Required | `string` | The unique identifier of the node in the hierarchy. |

### Headers

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Query parameters

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `page[limit]` | Optional | `integer` | The number of items to return per page. Minimum value is `1`. See [Pagination](/docs/commerce-cloud/api-overview/pagination). |
| `page[offset]` | Optional | `integer` | The number of items to offset the results by. Offset is zero-based. See [Pagination](/docs/commerce-cloud/api-overview/pagination). |

## Request Example

```bash
curl -X GET https://useast.api.elasticpath.com/pcm/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007/nodes/e2f3372c-89ed-49ae-a9c7-0dc1888f10ec/children \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

## Response Example

`200 OK`

```json
{
    "data": [
        {
            "type": "node",
            "id": "de3c3590-4138-4943-b04d-d7b7dc48fa54",
            "attributes": {
                "description": "Gas stoves and ovens",
                "name": "Gas Ranges",
                "slug": "Gas-Ranges-MA2"
            },
            "relationships": {
                "children": {
                    "data": [],
                    "links": {
                        "related": "/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007/nodes/de3c3590-4138-4943-b04d-d7b7dc48fa54/children"
                    }
                },
                "products": {
                    "data": [],
                    "links": {
                        "related": "/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007/nodes/de3c3590-4138-4943-b04d-d7b7dc48fa54/products"
                    }
                }
            }
        },
        {
            "type": "node",
            "id": "f26c613b-320a-4744-a4cb-841a451c95ab",
            "attributes": {
                "description": "Electric stoves and ovens",
                "name": "Electric Ranges",
                "slug": "Electric-Ranges-MA2"
            },
            "relationships": {
                "children": {
                    "data": [],
                    "links": {
                        "related": "/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007/nodes/f26c613b-320a-4744-a4cb-841a451c95ab/children"
                    }
                },
                "products": {
                    "data": [],
                    "links": {
                        "related": "/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007/nodes/f26c613b-320a-4744-a4cb-841a451c95ab/products"
                    }
                }
            }
        }
    ]
}
```
