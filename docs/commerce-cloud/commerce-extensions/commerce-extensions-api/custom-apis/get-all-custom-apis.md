---
title: Get all Custom APIs
nav_label: Get all Custom APIs
sidebar_position: 2
---

## `GET` Get a list of Custom APIs

```http
https://useast.api.elasticpath.com/v2/settings/extensions/custom-apis
```

## Paramerers

### Headers

| Name            | Required | Type     | Description                                         |
|-----------------|----------|----------|-----------------------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Query parameters

| Name           | Required | Type      | Description                                                                                                                                                                                                                                                                                                                                                                                                                 |
|----------------|----------|-----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `filter`       | Optional | `string`  | Specifies the filter attributes. For more information, see the [Filtering Custom APIs](#filtering) section.                                                                                                                                                                                                                                                                                                                 |
| `page[limit]`  | Optional | `integer` | The number of records per page.                                                                                                                                                                                                                                                                                                                                                                                             |
| `page[offset]` | Optional | `integer` | The number of records to offset the results by.                                                                                                                                                                                                                                                                                                                                                                             |
| `sort`         | Optional | `string`  | Supported attributes are `api_type`,`created_at`,`description`,`id`,`name`, or `updated_at`. When specified, the results are sorted in ascending order based on the value of the field. To sort in descending order, prefix the attribute with `-`, for example, `-updated_at`. The default sort order is `created_at` in descending order. For more information, see [Sorting](/docs/commerce-cloud/api-overview/sorting). |

## Filtering

The following operators and attributes are available for [filtering](/docs/commerce-cloud/api-overview/filtering):

| Attribute     | Type   | Operators                     | Example                                       |
|---------------|--------|-------------------------------|-----------------------------------------------|
| `name`        | string | `eq`,`like`                   | `eq(name,"Wishlist")`                         |
| `description` | string | `eq`,`like`                   | `like(description,*list*)`                    |
| `slug`        | string | `eq`,`like`,`in`              | `like(slug,*lists)`                           |
| `api_type`    | string | `eq`,`like`,`in`              | `like(api_type,wishlist*)`                    |
| `id`          | string | `lt`,`le`,`eq`,`gt`,`ge`,`in` | `eq(id,7e067539-6f6c-46e1-8c55-940031b36c6a)` |
| `created_at`  | string | `lt`,`le`,`eq`,`gt`,`ge`      | `ge(created_at,2024-04-29T00:00:00.000Z)`     |
| `updated_at`  | string | `lt`,`le`,`eq`,`gt`,`ge`      | `le(updated_at,2024-04-29T00:00:00.000Z)`     |

## Request Example - Curl

```bash
curl -X GET https://useast.api.elasticpath.com/v2/settings/extensions/custom-apis \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

## Response Example

`200 OK`

```json
{
  "data": [
    {
      "id": "7e067539-6f6c-46e1-8c55-940031b36c6a",
      "links": {
        "self": "https://useast.api.elasticpath.com/v2/settings/extensions/custom-apis/7e067539-6f6c-46e1-8c55-940031b36c6a"
      },
      "meta": {
        "timestamps": {
          "created_at": "2024-02-12T14:48:15.725Z",
          "updated_at": "2024-02-12T14:48:15.725Z"
        }
      },
      "type": "custom_api",
      "name": "Wishlist",
      "description": "Description for wishlist.",
      "slug": "wishlists",
      "api_type": "wishlist_ext"
    }
  ],
  "meta": {
    "page": {
      "limit": 25,
      "offset": 0,
      "current": 1,
      "total": 1
    },
    "results": {
      "total": 1
    }
  },
  "links": {
    "current": "https://useast.api.elasticpath.com/v2/settings/extensions/custom-apis?page[offset]=0&page[limit]=25",
    "first": "https://useast.api.elasticpath.comt/v2/settings/extensions/custom-apis?page[limit]=25&page[offset]=0",
    "last": "https://useast.api.elasticpath.com/v2/settings/extensions/custom-apis?page[offset]=0&page[limit]=25",
    "next": "null",
    "prev": "null"
  }
}
```
