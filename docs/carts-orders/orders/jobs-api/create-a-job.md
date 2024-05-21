---
title: Create a Job
nav_label: Create a Job
nav-position: 40
---

Currently, you can invoke the jobs service to [export orders](/docs/commerce-cloud/orders/orders-api/export-orders).

Jobs automatically expire one week after creation. You must fetch the exported data before the jobs expire.

## `POST` Create a Job

```http
https://useast.api.elasticpath.com/v2/jobs
```

## Parameters

### Path parameters

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Headers

| Name            | Required | Type     | Description                                         |
| --------------- | -------- | -------- | --------------------------------------------------- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Name       | Required | Type     | Description                               |
|:-----------|:---------|:---------|:------------------------------------------|
| `filter`   | Required | `string` | The same filter that you use when getting all orders. For more information, see the [Filtering orders](/docs/commerce-cloud/orders/orders-api/orders-api-overview#filtering) section. |
| `job_type` | Required | `string` | The type of task you want to run, e.g., `order_export`. |
| `type`     | Optional | `string` | Must be set to `job`.                     |

## Request Examples

### Curl

```bash
curl -X POST https://useast.api.elasticpath.com/v2/jobs \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
       "data": {
         "filter": "gt(created_at,2018-09-01):lt(created_at,2018-10-01):eq(payment,refunded)",
         "job_type": "order_export"
       }
     }'
```

### JavaScript SDK

```javascript
const data = {
    filter: "gt(created_at,2018-09-01):lt(created_at,2018-10-01):eq(payment,refunded)",
    job_type: "order_export",
};

// Where `EPCC` is an authenticated client
await EPCC.Jobs.Create(data);
```

## Response Example

```json
{
    "data": {
        "type": "job",
        "id": "v4154f5b-df0c-4781-be28-c2d5669b29f9",
        "job_type": "order_export",
        "link": {
            "href": ""
        },
        "links": {
            "self": "http://exporter.dev.molt.in/v2/jobs/v4154f5b-df0c-4781-be28-c2d5669b29f9"
        },
        "status": "pending",
        "timestamps": {
            "created_at": "2018-08-20T15:01:13.0194505Z",
            "updated_at": "0001-01-01T00:00:00Z"
        }
    }
}
```
