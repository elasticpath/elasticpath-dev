---
title: Get Promotion Jobs
nav_label: Get Promotion Jobs
sidebar_position: 1
---

## `GET` GET Promotion Jobs

```http
https://useast.api.elasticpath.com/v2/promotions/:promotionID/jobs
```

## Parameters

### Path parameters

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `promotionID` | Required | `string` | The unique identifier of a promotion. |

### Query parameters

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `filter` | Optional | `string` | Specifies the filter attributes. See [Filtering](#filtering). |

### Headers

| Name            | Required | Type     | Description                                         |
| --------------- | -------- | -------- | --------------------------------------------------- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Filtering

The following operators and attributes are available when filtering on this endpoint.

| Attribute | Type | Operator | Example |
| ----------| ----- | -------- | ------ |
| `job_type` | `string` | `eq` | `eq(job_type, code_export)` |
| `status` | `string` | `eq` | `eq(status, complete)` |

## Request Example - Curl

```bash
curl -X GET https://useast.api.elasticpath.com/v2/promotions/:promotionID/jobs \
     -H "Authorization: Bearer XXXX" \
     -H "content-type: application/json" \
```

## Response Example

In the response example, you can see the `result.generated` field, which indicates the number of codes generated during the job processing. Aditionally, you may also see the optional `result.deleted` field, indicating the number of codes deleted during the job cancellation. The `parameters` and `result` objects are shown only when `job_type` is `code_generate`.

`200 OK`

```json
{
    "data": [
        {
            "type": "promotion_job",
            "id": "84d86114-a92d-4c34-92f1-3e36ef6cabeb",
            "promotion_id": "ad386702-e780-42c6-b190-0527ad768917",
            "job_type": "code_generate",
            "name": "job",
            "parameters": {
                "number_of_codes": 100,
                "consume_unit": "per_cart",
                "max_uses_per_code": 1,
                "code_length": 8,
                "code_prefix": "promo-"
            },
            "status": "processing",
            "meta": {
                "timestamps": {
                    "created_at": "2023-12-06T13:52:29.587Z",
                    "updated_at": "2023-12-06T13:52:49.133Z"
                }
            }
        },
        {
            "type": "promotion_job",
            "id": "a7a54f06-b760-4f79-84cc-10eb899b3d14",
            "promotion_id": "ad386702-e780-42c6-b190-0527ad768917",
            "job_type": "code_generate",
            "name": "job",
            "parameters": {
                "number_of_codes": 1000,
                "consume_unit": "per_cart",
                "max_uses_per_code": 1,
                "code_length": 8,
                "code_prefix": "promo-"
            },
            "status": "completed",
            "meta": {
                "timestamps": {
                    "created_at": "2023-12-06T13:51:59.179Z",
                    "updated_at": "2023-12-06T13:52:06.835Z"
                }
            },
            "result": {
                "generated": 1000,
                "deleted": 1000
            }
        }
    ],
    "links": {
        "current": "https://useast.api.elasticpath.com/v2/promotions/ad386702-e780-42c6-b190-0527ad768917/jobs?page[offset]=0&page[limit]=25",
        "first": "https://useast.api.elasticpath.com/v2/promotions/ad386702-e780-42c6-b190-0527ad768917/jobs?page[offset]=0&page[limit]=25",
        "last": "https://useast.api.elasticpath.com/v2/promotions/ad386702-e780-42c6-b190-0527ad768917/jobs?page[offset]=0&page[limit]=25",
        "prev": "https://useast.api.elasticpath.com/v2/promotions/ad386702-e780-42c6-b190-0527ad768917/jobs?page[offset]=0&page[limit]=25",
        "next": "https://useast.api.elasticpath.com/v2/promotions/ad386702-e780-42c6-b190-0527ad768917/jobs?page[offset]=0&page[limit]=25"
    },
    "meta": {
        "page": {
            "limit": 25,
            "offset": 0,
            "current": 1,
            "total": 1
        },
        "results": {
            "total": 2
        }
    }
}
```

If an error occurs during job processing, the response includes an optional `error` field. For example, when you `GET` promotion jobs, the following response shows the details within the `error` field if an error occurred during job processing.

```json
{
    "data": [
        {
            "type": "promotion_job",
            "id": "84d86114-a92d-4c34-92f1-3e36ef6cabeb",
            "promotion_id": "ad386702-e780-42c6-b190-0527ad768917",
            "job_type": "code_generate",
            "name": "job",
            "parameters": {
                "number_of_codes": 1000,
                "consume_unit": "per_cart",
                "max_uses_per_code": 1,
                "code_length": 8,
                "code_prefix": "promo-"
            },
            "status": "failed",
            "error": "codes limit exceeded",
            "meta": {
                "timestamps": {
                    "created_at": "2023-12-06T13:52:29.587Z",
                    "updated_at": "2023-12-06T13:54:49.133Z"
                }
            }
        }
    ],
    "links": {
        "current": "https://useast.api.elasticpath.com/v2/promotions/ad386702-e780-42c6-b190-0527ad768917/jobs?page[offset]=0&page[limit]=25",
        "first": "https://useast.api.elasticpath.com/v2/promotions/ad386702-e780-42c6-b190-0527ad768917/jobs?page[offset]=0&page[limit]=25",
        "last": "https://useast.api.elasticpath.com/v2/promotions/ad386702-e780-42c6-b190-0527ad768917/jobs?page[offset]=0&page[limit]=25",
        "prev": "https://useast.api.elasticpath.com/v2/promotions/ad386702-e780-42c6-b190-0527ad768917/jobs?page[offset]=0&page[limit]=25",
        "next": "https://useast.api.elasticpath.com/v2/promotions/ad386702-e780-42c6-b190-0527ad768917/jobs?page[offset]=0&page[limit]=25"
    },
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
    }
}
```


