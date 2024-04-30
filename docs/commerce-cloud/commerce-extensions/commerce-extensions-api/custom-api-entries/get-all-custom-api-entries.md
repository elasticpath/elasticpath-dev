---
title: Get all Custom API Entries
nav_label: Get all Custom API Entries
sidebar_position: 2
---

## `GET` Get a list of Custom API Entries on Custom API

```http
https://useast.api.elasticpath.com/v2/extensions/:customApiSlug
```

## Paramerers

### Path parameters

| Name   | Required | Type     | Description                              |
|--------|----------|----------|------------------------------------------|
| `customApiSlug` | Required | `string` | The unique identifier of the Custom API. |
| `customEntryId` | Required | `string` | The unique identifier of the custom entry. |

### Headers

| Name            | Required | Type     | Description                                         |
|-----------------|----------|----------|-----------------------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Query parameters

| Name           | Required | Type      | Description                                                                                                                                                                                                                                                                                                                                                                                 |
|----------------|----------|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `filter`       | Optional | `string`  | Specifies the filter attributes. For more information, see the [Filtering entries](#filtering) section.                                                                                                                                                                                                                                                                                     |
| `page[limit]`  | Optional | `integer` | The number of records per page.                                                                                                                                                                                                                                                                                                                                                             |
| `page[offset]` | Optional | `integer` | The number of records to offset the results by.                                                                                                                                                                                                                                                                                                                                             |
| `sort`         | Optional | `string`  | Supported attributes are `created_at`,`id`, or `updated_at`. When specified, the results are sorted in ascending order based on the value of the field. To sort in descending order, prefix the attribute with `-`, for example, `-updated_at`. The default sort order is `created_at` in descending order. For more information, see [Sorting](/docs/commerce-cloud/api-overview/sorting). |

## Filtering

The following operators and attributes are available for [filtering](/docs/commerce-cloud/api-overview/filtering) entries:

| Attribute    | Type   | Operators                     | Example                                       |
|--------------|--------|-------------------------------|-----------------------------------------------|
| `id`         | string | `lt`,`le`,`eq`,`gt`,`ge`,`in` | `eq(id,859aeba1-03c2-4822-bd4c-89afce93d7eb)` |
| `created_at` | string | `lt`,`le`,`eq`,`gt`,`ge`      | `ge(created_at,2024-04-29T00:00:00.000Z)`     |
| `updated_at` | string | `lt`,`le`,`eq`,`gt`,`ge`      | `le(updated_at,2024-04-29T00:00:00.000Z)`     |


Entries can also be filtered by the slug for each [Custom Field](/docs/commerce-cloud/commerce-extensions/commerce-extensions-api/custom-fields/overview). For example if there are Custom API entries with `data.values.name`, you can get all entries with name containing string "wish" by setting filter query parameter `like(name,*wish*)`

## Request Example

```bash
curl -X GET https://useast.api.elasticpath.com/v2/extensions/:slug \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

## Response Example

`200 OK`

```json
{
  "data": [
    {
      "id": "859aeba1-03c2-4822-bd4c-89afce93d7eb",
      "links": {
        "self": "https://useast.api.elasticpath.com/v2/extensions/wishlists/859aeba1-03c2-4822-bd4c-89afce93d7eb"
      },
      "meta": {
        "timestamps": {
          "created_at": "2024-02-12T16:58:11.189Z",
          "updated_at": "2024-02-12T16:58:11.189Z"
        },
        "data_size": 1
      },
      "type": "wishlist_ext",
      "name": "My Wishlist"
    }
  ],
  "meta": {
    "page": {
      "limit": 10,
      "offset": 0,
      "current": 1,
      "total": 1
    },
    "results": {
      "total": 1
    }
  }
}
```
