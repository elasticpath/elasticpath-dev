---
title: Cancel A Job
nav_label: Cancel A Job
sidebar_position: 30
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

The `jobs` endpoint displays the status of a number of endpoints that function as jobs, for example, product [import](/docs/pxm/products/importing-products/overview) and [export](/docs/pxm/products/exporting-products/export-products), and [duplicating hierarchies](/docs/pxm/hierarchies/hierarchies-api/duplicate-a-hierarchy). See [Overview](/docs/pxm/jobs-api/overview).

Jobs are processed one at a time. You can continue to send job requests, but those jobs are queued. In other words, Commerce looks for any jobs that have a status of `PENDING` and starts the job with the earliest created date. If you decide that a specific job needs to be prioritized over another, you can cancel the less critical job using the `Cancel a job` endpoint. You can only cancel jobs whose status is `PENDING`. 

## `POST` Cancel A Job

```http
https://useast.api.elasticpath.com/pcm/jobs/:jobId/cancel
```

## Parameters

### Path parameters

| Name | Required | Type | Description                                |
| --- | --- | --- |--------------------------------------------|
| `jobId` | Required | `string` | The ID of the job that you want to cancel. |

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Example

```bash
curl -X POST https://useast.api.elasticpath.com/pcm/job/1e5da4bf-b2c0-4619-bb3d-f749875b15bb/cancel \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

## Response Example

`200 OK`

```json
{
  "data": {
    "type": "pim-job",
    "id": "1e5da4bf-b2c0-4619-bb3d-f749875b15bb",
    "attributes": {
      "completed_at": null,
      "created_at": "2024-01-05T13:46:41.695Z",
      "started_at": null,
      "status": "cancelled",
      "type": "product-import",
      "updated_at": "2024-01-05T13:46:42.07Z"
    },
    "meta": {
      "x_request_id": "4fde01c1-95ba-4dd6-948e-b9d5763ff9c2"
    }
  }
}
```


