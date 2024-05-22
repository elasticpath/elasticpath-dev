---
title: Get all Price Books
nav_label: Get all Price Books
sidebar_position: 20
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `GET` all Price Books

```http
https://useast.api.elasticpath.com/pcm/pricebooks
```

Retrieves a list of all price books. 

## Parameters

### Headers

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token to grant access to the API. |

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `filter`| Optional | `string` | Specifies the filter attributes. See [Filtering](#filtering). |
| `page[limit]` | Optional | `integer` | The number of items to return per page. Minimum value is `1`. See [Pagination](/guides/Getting-Started/pagination). |
| `page[offset]` | Optional | `integer` | The number of items to offset the results by. Offset is zero-based. See [Pagination](/guides/Getting-Started/pagination). |

## Filtering

The following attributes and operators are supported.

| Operator | Attribute       | Description | Example                                     |
| :--- |:----------------| :--- |:--------------------------------------------|
| `eq` | `external_ref`  | Equals. Checks if the values of two operands are equal. If they are, the condition is true. | `filter=eq(external_ref,some-external-ref)` |

For more information, see [Filtering](/guides/Getting-Started/filtering).

## Request Example

```bash
curl -X GET https://useast.api.elasticpath.com/pcm/pricebooks/ \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

## Response Example

`200 OK`

```json
{
    "data": [
        {
            "id": "fe3f3f4c-bf36-44fc-9af6-e460276b2a45",
            "type": "pricebook",
            "attributes": {
                "created_at": "2022-03-03T10:19:59.826Z",
                "description": "This is a standard price book",
                "name": "priceBook1_552319338751",
                "updated_at": "2022-03-03T10:19:59.826Z"
            },
            "meta": {
                "owner": "store"
            }
        },
        {
            "id": "37c89ce1-027d-48cb-a028-8114d9f95f16",
            "type": "pricebook",
            "attributes": {
                "created_at": "2022-03-25T18:05:08.262Z",
                "description": "This is a promotion price book",
                "name": "price_book_038866834317",
                "updated_at": "2022-03-25T18:05:08.262Z"
            },
            "meta": {
                "owner": "store"
            }
        },
        {
            "id": "2776c693-9774-4067-814c-72ee0f9e7568",
            "type": "pricebook",
            "attributes": {
                "created_at": "2023-01-30T09:43:12.049Z",
                "description": "This is a seasonal sales price book",
                "name": "Seasonal Sales Pricebook",
                "updated_at": "2023-02-07T11:20:44.315Z"
            },
            "meta": {
                "owner": "store"
            }
        },
        {
            "id": "60472644-9682-4364-8ff6-40c92f4bb091",
            "type": "pricebook",
            "attributes": {
                "created_at": "2023-02-07T11:31:57.067Z",
                "description": "Winter Prices",
                "name": "Winter Pricebook",
                "updated_at": "2023-02-07T11:31:57.067Z"
            },
            "meta": {
                "owner": "store"
            }
        }
    ],
    "links": {
        "first": "/pcm/pricebooks?page[offset]=0&page[limit]=25&",
        "last": "/pcm/pricebooks?page[offset]=0&page[limit]=25&",
        "self": "/pcm/pricebooks"
    },
    "meta": {
        "page": {
            "current": 1,
            "limit": 25,
            "total": 4
        },
        "results": {
            "total": 4
        }
    }
}
```
