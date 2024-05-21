---
title: Get a Job
nav_label: Get a Job
sidebar_position: 30
---

## `GET` Get a Job

```http
https://useast.api.elasticpath.com/v2/jobs/:id
```

## Parameters

### Path parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `id` | Required | `string` | The ID for the requested job. |

### Headers

| Name            | Required | Type     | Description                                         |
| --------------- | -------- | -------- | --------------------------------------------------- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Examples

### Curl

```bash
curl -X GET https://useast.api.elasticpath.com/v2/jobs/:id \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

### JavaScript SDK

```javascript
const jobId = "25617d3e-14a6-434c-bfab-3fda87517aaf";

// Where `EPCC` is an authenticated client
await EPCC.Jobs.Get(jobId);
```

## Response Example

`200 OK`

```bash
{
    "data": {
        "id": "974c9db4-38da-4dbf-90c2-33eed5f3e77c",
        "type": "job",
        "job_type": "order_export",
        "status": "failed",
        "error": "No results matched the supplied filter",
        "link": {
            "href": ""
        },
        "links": {
            "self": "https://useast.api.elasticpath.com/v2/jobs/974c9db4-38da-4dbf-90c2-33eed5f3e77c"
        },
        "timestamps": {
            "created_at": "2018-10-04T11:08:49.156490335Z",
            "updated_at": "2018-10-04T11:08:49.162867081Z"
        }
    }
}
```
