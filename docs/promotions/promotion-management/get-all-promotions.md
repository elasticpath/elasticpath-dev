---
title: Get all Promotions
nav_label: Get all Promotions
sidebar_position: 10
---

## `GET` Get all Promotions

```http
https://useast.api.elasticpath.com/v2/promotions
```

## Parameters

### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

:::note
You can use pagination with this resource. For more information, see [pagination](/guides/Getting-Started/pagination).
:::

### Query parameters

| Name     | Required | Type     | Description |
|:---------|:---------|:---------|:-------------|
| `filter` | optional | `string` | Filter attributes. For more information, see [Filtering](#filtering). |
| `page[limit]`  | Optional | `integer` | The number of records per page.  |
| `page[offset]` | Optional | `integer` | The number of records to offset the results by.|

## Filtering

The following operators and attributes are available when filtering on this endpoint. See [Supported Filtering Characters](/guides/Getting-Started/filtering#supported-characters).

Use `code` filter to search codes within promotions.

| Attribute         | Type | Operator | Example              |
|:------------------| :--- |:---------|:---------------------|
| `code`            | `string` | `eq`     | `eq(code,some_code)` |

For filtering advanced promotion usages, pass the`EP-Public-Search-Type=cm_search` header. Advanced search filtering is only applicable when the promotion code is consumed and the promotion is not deleted.

| Attribute         | Type | Operator | Example              |
|:------------------| :--- |:---------|:---------------------|
| `promo_id` | `string` | `eq`     | `eq(promo_id, 69c63c9d-8ccf-44b1-8e98-1e7feebfb581)` |
| `promo_name` | `string` | `eq`, `like` | `eq(promo_name,cart percent discount)` |
| `promo_type` | `string` | `eq` | `eq(promo_type,fixed_discount)` |
| `promo_status` | `string` | `eq` | `eq(promo_status,Running)` |
| `promo_checkouts` | `string` | `eq`,`gt`, `ge`, `lt`, `le` | `eq(promo_checkouts,2)` |
| `promo_skus_prod_ids` | `string` | `eq`, `like` | `eq(promo_skus_prod_ids, sku1)` |
| `promo_start_date` | `string` | `eq`, `gt`, `gr`, `lt`, `le` | `eq(promo_start_date,2023-01-01)` |
| `promo_end_date` | `string` | `eq`, `gt`, `gr`, `lt`, `le` | `eq(promo_end_date,2050-06-15)` |
| `code_id` | `string`| `eq` | `eq(promo_id,2ea0cd1d-43a9-441b-b03f-3cab84aaee0c):eq(code_id,14b55e6c-3f80-436e-a90a-4de5f0e36240)` |
| `code_code` | `string`| `eq`, `like` | `eq(code_code,cart_fixed_10)` |
| `code_used` | `string`| `eq`, `gt`, `gr`, `lt`, `le` | `eq(code_used,2)` |
| `code_created_date` | `string`| `eq`, `gt`, `gr`, `lt`, `le` | `eq(code_created_date,2023-11-15)` |
| `order_id` | `string`| `eq`, `like` | `eq(order_id,ccb13673-627c-4976-88da-f77c542b528f)` |
| `order_customer_email` | `string`| `eq`, `like` | `like(order_customer_email,andy*)` |
| `order_created_date` | `string`| `eq`, `gt`, `gr`,`lt`, `le` | `le(order_created_date,2023-11-15)` |

## Request Example

```bash
curl -X GET https://useast.api.elasticpath.com/v2/promotions \
     -H "Authorization: Bearer XXXX" \
     -H "content-type: application/json" \
```

## Response Example

`200 OK`

```json
{
    "data": [
        {
            "type": "promotion",
            "id": "3cc6829b-e57f-4ead-b52e-8e23e119bfba",
            "name": "Promo #1",
            "description": "Initial Promotion",
            "enabled": true,
            "promotion_type": "fixed_discount",
            "schema": {
                "currencies": [
                    {
                        "currency": "USD",
                        "amount": 900
                    },
                    {
                        "currency": "GBP",
                        "amount": 1100
                    }
                ]
            },
            "start": "2017-01-13T00:00:00Z",
            "end": "2018-01-13T00:00:00Z",
            "created_by": "seller@elasticpath.com",
            "updated_by": "another_seller@elasticpath.com",
            "created_at": "2018-05-09T20:02:01.036Z",
            "updated_at": "2018-05-09T20:02:01.036Z"
        },
        {
            "type": "promotion",
            "id": "4d04f1e7-9254-4e68-b360-f5eb5d11220f",
            "name": "Promo #1",
            "description": "Initial Promotion",
            "enabled": true,
            "promotion_type": "fixed_discount",
            "schema": {
                "currencies": [
                    {
                        "currency": "USD",
                        "amount": 900
                    },
                    {
                        "currency": "GBP",
                        "amount": 1100
                    }
                ]
            },
            "start": "2017-01-13T00:00:00Z",
            "end": "2018-01-13T00:00:00Z",
            "created_by": "seller@elasticpath.com",
            "updated_by": "another_seller@elasticpath.com",
            "created_at": "2018-05-09T20:01:35.409Z",
            "updated_at": "2018-05-09T20:01:35.409Z"
        }
    ],
    "links": {
        "current": "https://useast.api.elasticpath.com/v2/promotions?page[offset]=0&page[limit]=50&filter=",
        "first": "https://useast.api.elasticpath.com/v2/promotions?page[offset]=0&page[limit]=50&filter=",
        "last": "https://useast.api.elasticpath.com/v2/promotions?page[offset]=600&page[limit]=50&filter=",
        "prev": "https://useast.api.elasticpath.com/v2/promotions?page[offset]=0&page[limit]=50&filter=",
        "next": "https://useast.api.elasticpath.com/v2/promotions?page[offset]=50&page[limit]=50&filter="
    },
    "meta": {
        "page": {
            "limit": 100,
            "offset": 0,
            "current": 1,
            "total": 1
        },
        "results": {
            "total": 100
        }
    }
}
```
