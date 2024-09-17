---
title: Get a Promotion Code Usage
nav_label: Get a Promotion Code Usage
sidebar_position: 2
---

## `GET` Get a Promotion Code Usage

```http
https://useast.api.elasticpath.com/v2/promotions/:id/codes/:code-name/usages
```
Use this endpoint to track the usage history of a specific promotion code within the specific promotion. For example, `order_id`, `code`, `times_used`.

## Parameters

### Path parameters

| Name | Required | Type     | Description                      |
| ---- | -------- | -------- | -------------------------------- |
| `id` | Required | `string` | Specifies the unique identifier for the promotion. |
| `code-name` | Required | `string` | Specifies the name of the code. For example, `10OFF`.  |

### Headers

| Name            | Required | Type     | Description                                         |
| --------------- | -------- | -------- | --------------------------------------------------- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Query parameters

| Name | Required | Type     | Description                      |
| ---- | -------- | -------- | -------------------------------- |
| `filter` | Optional | `string` | Filter attributes. For more information, see [Filtering](#filtering). |
| `page[limit]`  | Optional | `integer` | The number of records per page. |
| `page[offset]` | Optional | `integer` | The number of records to offset the results by. |
| `sort` | Optional | `string` | Supported attribute is `used_on`. When specified, the results are sorted in ascending order based on the value of the field. To sort in descending order, prefix the attribute with -, for example, -used_on. The default sort order is `used_on` in ascending order. See [Sorting](/guides/Getting-Started/sorting). |

## Filtering

| Attribute | Type | Operators | Example  |
| ---------| --------- | ---------------------------| -------- |
| `code` | `string` | `eq` | `eq(code,cart1off)` | 
| `id` | `string` | `eq` | 
| `used_on` | `string` | `gt`,`ge`,`le` and `lt` | `gt(used_on,2023-07-11)` |

## Request Example

```bash
curl https://useast.api.elasticpath.com/v2/promotions/:id/codes/:code-name/usages \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

## Response Example

`200 OK`

```json
{
    "data": [
        {
            "id": "a042bd4b-21a6-4f55-8add-5a3e8b862ddc",
            "order_id": "01e2a292-f92e-4579-973c-2f3bc70acec1",
            "code_id": "7905c48a-55b0-4bf0-abd7-c2cdbbb944e9",
            "code": "cart2uses",
            "times_used": 1,
            "used_on": "2023-05-30T23:10:56.016Z",
            "cusomter_id": "1eaf092c-f6e1-48e6-a64f-1c092b711916",
            "customer_email": "test@email.com",
            "meta": {
                "timestamps": {
                    "updated_at": "2024-01-03T17:37:47.111Z"
                }
            },
            "anonymized": false
        }
    ]
}
```