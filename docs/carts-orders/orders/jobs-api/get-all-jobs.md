---
title: Get all Jobs
nav_label: Get all Jobs
sidebar_position: 20
---

## `GET` Get all Jobs

```http
https://useast.api.elasticpath.com/v2/jobs
```

## Parameters

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Example

### Curl

```bash
curl -X GET https://useast.api.elasticpath.com/v2/jobs \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

### JavaScript SDK

```javascript
// Where `EPCC` is an authenticated client
await EPCC.Jobs.All();
```

## Response Example

`200 OK`

```json
{
    "data": [
        {
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
    ]
}
```
