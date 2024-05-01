---
title: Get all Custom Fields
nav_label: Get all Custom Fields
sidebar_position: 2
---

## `GET` Get a list of Custom Fields on Custom API

```http
https://useast.api.elasticpath.com/v2/settings/extensions/custom-apis/:customApiId/fields
```

## Paramerers

### Path parameters

| Name          | Required | Type     | Description                              |
|---------------|----------|----------|------------------------------------------|
| `customApiId` | Required | `string` | The unique identifier of the Custom API. |

### Headers

| Name            | Required | Type     | Description                                         |
|-----------------|----------|----------|-----------------------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Query parameters

| Name           | Required | Type      | Description                                                                                                                                                                                                                                                                                                                                                                                                                   |
|----------------|----------|-----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `filter`       | Optional | `string`  | Specifies the filter attributes. For more information, see the [Filtering fields](#filtering) section.                                                                                                                                                                                                                                                                                                                        |
| `page[limit]`  | Optional | `integer` | The number of records per page.                                                                                                                                                                                                                                                                                                                                                                                               |
| `page[offset]` | Optional | `integer` | The number of records to offset the results by.                                                                                                                                                                                                                                                                                                                                                                               |
| `sort`         | Optional | `string`  | Supported attributes are `created_at`,`description`,`field_type`,`id`,`name`, or `updated_at`. When specified, the results are sorted in ascending order based on the value of the field. To sort in descending order, prefix the attribute with `-`, for example, `-updated_at`. The default sort order is `created_at` in descending order. For more information, see [Sorting](/docs/commerce-cloud/api-overview/sorting). |

## Filtering

The following operators and attributes are available for [filtering](/docs/commerce-cloud/api-overview/filtering) fields:

| Attribute     | Type   | Operators                     | Example                                       |
|---------------|--------|-------------------------------|-----------------------------------------------|
| `name`        | string | `eq`,`like`                   | `eq(name,"Last Name")`                        |
| `description` | string | `eq`,`like`                   | `like(description,*confidential*)`            |
| `slug`        | string | `eq`,`like`,`in`              | `like(slug,*private*)`                        |
| `field_type`  | string | `eq`,`in`                     | `eq(field_type,string)`                       |
| `id`          | string | `lt`,`le`,`eq`,`gt`,`ge`,`in` | `eq(id,859aeba1-03c2-4822-bd4c-89afce93d7eb)` |
| `created_at`  | string | `lt`,`le`,`eq`,`gt`,`ge`      | `ge(created_at,2024-04-29T00:00:00.000Z)`     |
| `updated_at`  | string | `lt`,`le`,`eq`,`gt`,`ge`      | `le(updated_at,2024-04-29T00:00:00.000Z)`     |

## Request Example

```bash
curl -X GET https://useast.api.elasticpath.com/v2/settings/extensions/custom-apis/:customApiId/fields \
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
        "self": "https://useast.api.elasticpath.com/v2/settings/extensions/custom-apis/7e067539-6f6c-46e1-8c55-940031b36c6a/fields/859aeba1-03c2-4822-bd4c-89afce93d7eb"
      },
      "meta": {
        "timestamps": {
          "created_at": "2024-02-12T16:58:11.189Z",
          "updated_at": "2024-02-12T16:58:11.189Z"
        }
      },
      "type": "custom_field",
      "name": "Name",
      "description": "Name of wishlist",
      "slug": "name",
      "field_type": "string",
      "validation": {
        "string": {
          "min_length": 0,
          "max_length": 32,
          "regex": null
        }
      }
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
