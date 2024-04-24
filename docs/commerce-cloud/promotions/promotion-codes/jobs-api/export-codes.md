---
title: Create Promotion Codes Export Job
nav_label: Create Promotion Codes Export Job
sidebar_position: 4
---

## `POST` Create Promotion Codes Export Job

```http
https://useast.api.elasticpath.com/v2/promotions/:promotionID/jobs
```

Use this endpoint to create an asynchronous job to export promotion codes.

## Parameters

### Path parameters

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `promotionID` | Required | `string` | The unique identifier of a promotion. |

### Headers

| Name            | Required | Type     | Description                                         |
| --------------- | -------- | -------- | --------------------------------------------------- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Name       | Required | Type     | Description                               |
|:-----------|:---------|:---------|:------------------------------------------|
| `type`     | Required | `string` | Must be set to `promotion_job`. |
| `job_type` | Required | `string` | Specifies the type of task you want to run. For example, `code_generate` to generate codes or `code_export` to export codes. |
| `name` | Optional | `string` | Represents the name of the job. The maximum allowed value is 50. |

## Request Example - Curl

```bash
curl -X POST https://useast.api.elasticpath.com/v2/promotions/:promotionID/jobs \
     -H "Authorization: Bearer XXXX" \
     -H "content-type: application/json" \
     -d $ {
       "data": {
         "type": "promotion_job",
         "job_type": "code_export",
         "name": "export codes job",
    }
}
```

## Response Example

`201 Created`

```json
{
    "data": {
        "type": "promotion_job",
        "id": "2bfd0a50-f915-4164-a65e-26e42fcfe2c8",
        "promotion_id": "19c08913-cc8c-47d8-a211-450c9e945970",
        "job_type": "code_export",
        "name": "export codes job",
        "status": "pending",
        "meta": {
            "timestamps": {
                "created_at": "2023-08-01T23:27:51.343960201Z",
                "updated_at": "2023-08-01T23:27:51.343960201Z"
            }
        }
    }
}
```


