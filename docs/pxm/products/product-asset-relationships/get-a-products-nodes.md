---
title: Get a Productʼs Nodes
nav_label: Get a Productʼs Nodes
sidebar_position: 10
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `GET` Get a Productʼs Nodes

```http
https://useast.api.elasticpath.com/pcm/products/:productId/nodes
```

Retrieves the nodes that are associated with the specified product.

## Parameters

### Path parameters

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `productId` | Required | `string` | The unique identifier of the product. |

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token to grant access to the API. |

### Query parameters

| Name | Required | Optional | Description                                                                                                                               |
| --- | --- | --- |-------------------------------------------------------------------------------------------------------------------------------------------|
| `page[limit]` | Optional | `integer` | The number of items to return per page. You can set this value up to 100. See [Pagination](/guides/Getting-Started/api-overview/pagination). |
| `page[offset]` | Optional | `integer` | The number of items to offset the results by. Offset is zero-based. See [Pagination](/guides/Getting-Started/api-overview/pagination).       |

## Request Example

```bash
curl -X GET https://useast.api.elasticpath.com/pcm/products/14e055d0-eebb-4090-8594-a0a7aeea2151/nodes \
     -H "Authorization: Bearer XXXX" \
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
        }
    ]
}
```
