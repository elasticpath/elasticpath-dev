---
title: Get Integration Logs
nav_label: Get Integration Logs
sidebar_position: 100
---

As integrations can fail over time, Commerce provides the ability to browse all logs for your integrations. The API provides various endpoints to get all logs and jobs.

## `GET` Get all logs

```http
https://useast.api.elasticpath.com/v2/integrations/logs
```

### Parameters

#### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

#### Query parameters

| Name           | Required | Type      | Description                                                         |
| -------------- | -------- | --------- | ------------------------------------------------------------------- |
| `page[limit]`  | Optional | `integer` | The number of items to return per page.                             |
| `page[offset]` | Optional | `integer` | The number of items to offset the results by. Offset is zero-based. |

### Request example for Get All Logs

```bash
curl GET https://useast.api.elasticpath.com/v2/integrations/logs \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

### Response example

`200 OK`

```json
{
    "data": [
        {
            "id": "11de4222-fbda-498c-9ecb-cd46d598712f",
            "type": "integration-log",
            "succeeded": false,
            "attempt": 1,
            "processing_time": 0.2529,
            "body": "Not found",
            "status_code": 404,
            "error_detail": "Received a status code outside of 2xx range - treating webhook as a fail",
            "relationships": {
                "integration": {
                    "data": {
                        "type": "integration",
                        "id": "8edd44ef-1856-4456-90ec-d9fab8a25049"
                    }
                },
                "job": {
                    "data": {
                        "type": "integration-job",
                        "id": "3b69a7e2-78ad-4ee6-8a81-c9b1b8a9cd26"
                    }
                }
            },
            "meta": {
                "timestamps": {
                    "created_at": "2017-10-30T18:15:40.087650928Z"
                }
            }
        }
    ],
    "meta": {
        "limit": 100,
        "offset": 0,
        "current": 1,
        "total": 1
    },
    "results": {
        "total": 1
    }
}
```

## `GET` Get Logs for an Integration

```http
https://useast.api.elasticpath.com/v2/integrations/:id/logs
```

### Parameters

#### Path parameters

| Name | Required | Type     | Description                 |
| ---- | -------- | -------- | --------------------------- |
| `id` | Required | `string` | The ID for the integration. |

#### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

#### Query parameters

| Name           | Required | Type      | Description                                                         |
| -------------- | -------- | --------- | ------------------------------------------------------------------- |
| `page[limit]`  | Optional | `integer` | The number of items to return per page.                             |
| `page[offset]` | Optional | `integer` | The number of items to offset the results by. Offset is zero-based. |

### Request Examples for Logs for an Integration

#### Curl

```bash
curl GET https://useast.api.elasticpath.com/v2/integrations/:id/logs \
     -H "Authorization: Bearer XXXX"
```

#### JavaScript SDK

```javascript
const integrationId = "25617d3e-14a6-434c-bfab-3fda87517aaf";

// Where `EPCC` is an authenticated client
await EPCC.Integrations.GetLogs(integrationId);
```

### Response example for Logs for an Integration

`200 OK`

```json
{
    "data": [
        {
            "id": "11de4222-fbda-498c-9ecb-cd46d598712f",
            "type": "integration-log",
            "succeeded": false,
            "attempt": 1,
            "processing_time": 0.2529,
            "body": "Not found",
            "status_code": 404,
            "error_detail": "Received a status code outside of 2xx range - treating webhook as a fail",
            "relationships": {
                "integration": {
                    "data": {
                        "type": "integration",
                        "id": "8edd44ef-1856-4456-90ec-d9fab8a25049"
                    }
                },
                "job": {
                    "data": {
                        "type": "integration-job",
                        "id": "3b69a7e2-78ad-4ee6-8a81-c9b1b8a9cd26"
                    }
                }
            },
            "meta": {
                "timestamps": {
                    "created_at": "2017-10-30T18:15:40.087650928Z"
                }
            }
        }
    ],
    "meta": {
        "limit": 100,
        "offset": 0,
        "current": 1,
        "total": 1
    },
    "results": {
        "total": 1
    }
}
```

## `GET` Get jobs for an Integration

```http
https://useast.api.elasticpath.com/v2/integrations/:id/jobs
```

### Parameters

#### Path parameters

| Name | Required | Type     | Description                 |
| ---- | -------- | -------- | --------------------------- |
| `id` | Required | `string` | The ID for the integration. |

#### Headers

| Name            | Required | Type     | Description                                         |
| --------------- | -------- | -------- | --------------------------------------------------- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Request example For All Jobs

```bash
curl GET https://useast.api.elasticpath.com/v2/integrations/:id/jobs \
     -H "Authorization: Bearer XXXX"
```

### Response example

`200 OK`

```json
{
    "data": [
        {
            "id": "6560f600-b610-4c02-88ac-0d120e3d5071",
            "type": "integration-job"
        },
        {
            "id": "353c015a-92ab-4c06-ab8a-bef8a451b9be",
            "type": "integration-job"
        },
        {
            "id": "4af82fba-8f0a-41b1-add6-0fa16fe3579e",
            "type": "integration-job"
        }
    ]
}
```

## `GET` Get all logs for a job

```http
https://useast.api.elasticpath.com/v2/integrations/:event_id/jobs/:id/logs
```

### Parameters

#### Path parameters

| Name       | Required | Type     | Description           |
| ---------- | -------- | -------- | --------------------- |
| `id`       | Required | `string` | The ID for the job.   |
| `event_id` | Required | `string` | The ID for the event. |

#### Headers

| Name            | Required | Type     | Description                                         |
| --------------- | -------- | -------- | --------------------------------------------------- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Request Example For a Job For an Integration

```bash
curl GET https://useast.api.elasticpath.com/v2/integrations/:event_id/jobs/:id/logs \
     -H "Authorization: Bearer XXXX"
```
