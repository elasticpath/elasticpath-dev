---
title: Cancel a Job
nav_label: Cancel a Job
sidebar_position: 5
---

## `POST` Cancel a Job

```http
https://useast.api.elasticpath.com/v2/promotions/:promotionID/jobs/:jobID/cancel
```

Use this endpoint to cancel an asynchronous job whose status is `pending` or `processing`.

## Parameters

### Path parameters

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `promotionID` | Required | `string` | The unique identifier of a promotion. |
| `jobID` | Required | `string` | The unique identifier of a job that you want to cancel. |

### Headers

| Name            | Required | Type     | Description                                         |
| --------------- | -------- | -------- | --------------------------------------------------- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |


## Request Example - Curl

```bash
curl -X POST https://useast.api.elasticpath.com/v2/promotions/:promotionID/jobs/:jobID/cancel \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $ {}
```

## Response Example

`200 OK`

```json
{
    "data": {
        "type": "promotion_job",
        "id": "cf437c4b-0905-45e8-b4a7-05646b6cc853",
        "promotion_id": "c2690b21-fdf9-41aa-9523-aaca21e6cd84",
        "job_type": "code_generate",
        "name": "Test cancel job ",
        "parameters": {
            "number_of_codes": 100,
            "consume_unit": "per_cart",
            "max_uses_per_code": 1,
            "code_length": 10,
            "code_prefix": "Summer-"
        },
        "status": "cancelled",
        "meta": {
            "timestamps": {
                "created_at": "2023-11-17T19:15:19.831Z",
                "updated_at": "2023-11-17T19:15:41.752Z"
            }
        }
    }
}
```

## Errors

The following error response is returned when you cancel a job whose status is `cancelling`, `cancelled`, `failed`, or `completed`.

```json
{
    "errors": [
        {
            "status": "422",
            "title": "Unprocessable Entity",
            "detail": "Only pending or processing jobs can be cancelled"
        }
    ]
}
```
