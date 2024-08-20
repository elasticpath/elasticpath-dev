---
title: Get Promotion Usages
nav_label: Get Promotion Usages
sidebar_position: 6
---

## `GET` Get Promotion Usages

```http
https://useast.api.elasticpath.com/v2/rule-promotions/:promotionID/usages
```

This endpoint retrieves the usage history of a specific promotion, including details such as `order_id`, `code`, and `times_used`.

## Parameters

### Path parameters

| Name | Required | Type     | Description                      |
|:-----|:---------|:---------|:---------------------------------|
| `promotionID` | Required | `string` | The unique identifier for the rule promotion. |

### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Query parameters

| Name | Required | Type     | Description                      |
| ---- | -------- | -------- | -------------------------------- |
| `filter` | Optional | `string` | Filter attributes. For more information, see [Filtering](/docs/promotions-builder/promotions-builder-codes/get-promotion-usages#filtering). |
| `page[limit]`  | Optional | `integer` | The number of records per page. |
| `page[offset]` | Optional | `integer` | The number of records to offset the results by. |
| `sort` | Optional | `string` | Supported attribute is `used_on`. When specified, the results are sorted in an ascending order. To sort in descending order, prefix the attribute with -, for example, `-used_on`. See [Sorting](/guides/Getting-Started/sorting). |

## Filtering 

The following operators and attributes are available for filtering usages:

| Attribute | Type | Operators | Example  |
| ---------| --------- | ---------------------------| -------- |
| `id` | `string` | `eq` | `eq(id,8dac76b3-9282-4730-b1dd-bdd2a95610cb)` |
| `code` | `string` | `eq` | `eq(code,cart1off)` | 
| `used_on` | `string` | `gt`,`ge`,`le` and `lt` | `gt(used_on,2023-07-11)` |

## Request Example

```bash
curl https://useast.api.elasticpath.com/v2/rule-promotions/:promotionID/usages \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

## Response Example

When a cart with a promotion is checked out using an `accountID`, the `accountID` will be included in the response.

`200 OK`

```json
{
    "data": [
        {
            "id": "96a80700-4895-4d74-b96f-3ea39417ed29",
            "order_id": "5728c924-cd08-4b4a-a36a-1a926ee92ad3",
            "code_id": "fd23fcc6-e2cc-4900-9505-d38147c3019a",
            "code": "bxgy",
            "times_used": 1,
            "used_on": "2024-08-15T18:25:41.209Z",
            "customer_email": "andy@example.com",
            "meta": {
                "timestamps": {
                    "updated_at": "2024-08-15T18:25:41.209Z"
                }
            },
            "anonymized": false,
            "account_id": "c40ee30c-f5f9-4a40-8f3f-08f7c652b0c5"
        }
    ],
    "links": {
        "current": "https://useast.api.elasticpath.com/v2/rule-promotions/26067b82-a50c-462c-b3ed-1ca77aa13bd1/usages?page[offset]=0&page[limit]=10",
        "first": "https://useast.api.elasticpath.com/v2/rule-promotions/26067b82-a50c-462c-b3ed-1ca77aa13bd1/usages?page[offset]=0&page[limit]=10",
        "last": "https://useast.api.elasticpath.com/v2/rule-promotions/26067b82-a50c-462c-b3ed-1ca77aa13bd1/usages?page[offset]=0&page[limit]=10",
        "prev": "https://useast.api.elasticpath.com/v2/rule-promotions/26067b82-a50c-462c-b3ed-1ca77aa13bd1/usages?page[offset]=0&page[limit]=10",
        "next": "https://useast.api.elasticpath.com/v2/rule-promotions/26067b82-a50c-462c-b3ed-1ca77aa13bd1/usages?page[offset]=0&page[limit]=10"
    },
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