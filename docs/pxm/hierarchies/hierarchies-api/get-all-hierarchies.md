---
title: Get all Hierarchies
nav_label: Get all Hierarchies
sidebar_position: 20
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `GET` Get all Hierarchies

```http
https://useast.api.elasticpath.com/pcm/hierarchies
```

Retrieves a list of all hierarchies.

## Parameters

### Headers

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Query parameters

| Name           | Required | Type      | Description                                                                                                                                                                                                                                                                                                 |
|:---------------|:---------|:----------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `page[limit]`  | Optional | `integer` | The number of records per page. See [Pagination](/guides/Getting%20Started/api-overview/pagination).                                                                                                                                                                                                                                                                            |
| `page[offset]` | Optionsal | `integer` | The number of records to offset the results by. See [Pagination](/guides/Getting%20Started/api-overview/pagination).                                                                                                                                                                                                                                                            |


## Request Example

```bash
curl -X GET https://useast.api.elasticpath.com/pcm/hierarchies \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

## Response Example

`200 OK`

```json
{
    "data": [
        {
            "type": "hierarchy",
            "id": "0e119de2-5fb0-4bca-9b84-b3fc6c903007",
            "attributes": {
                "description": "Free standing appliances",
                "name": "Major Appliances",
                "slug": "Major-Appliances-MA0"
            },
            "relationships": {
                "children": {
                    "data": [],
                    "links": {
                        "related": "/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007/children"
                    }
                }
            },
            "meta": {
                "created_at": "2023-02-07T14:01:51.247Z",
                "owner": "store",
                "updated_at": "2023-02-07T14:01:51.247Z"
            }
        },
        {
            "type": "hierarchy",
            "id": "4a5a476e-f28d-491f-95d7-86e53f05daf9",
            "attributes": {
                "description": "Counter-top appliances",
                "name": "Small Appliances",
                "slug": "Small-Appliances-SA0"
            },
            "relationships": {
                "children": {
                    "data": [],
                    "links": {
                        "related": "/hierarchies/4a5a476e-f28d-491f-95d7-86e53f05daf9/children"
                    }
                }
            },
            "meta": {
                "created_at": "2023-02-07T14:01:51.247Z",
                "owner": "store",
                "updated_at": "2023-02-07T14:01:51.247Z"
            }
        }
    ]
}
```
