---
title: Get All Jobs
nav_label: Get All Jobs
sidebar_position: 10
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

The `jobs` endpoint displays the status of a number of endpoints that function as jobs, for example, product [import](/docs/pxm/products/importing-products/overview) and [export](/docs/pxm/products/exporting-products/export-products), and [duplicating hierarchies](/docs/pxm/hierarchies/hierarchies-api/duplicate-a-hierarchy).

## `GET` Get All Jobs

```http
https://useast.api.elasticpath.com/pcm/jobs
```

## Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Query parameters

| Name | Required | Optional | Description |
| --- | --- | --- | --- |
| `page[limit]` | Optional | `integer` | The number of items to return per page. See [Pagination](/docs/commerce-cloud/api-overview/pagination). |
| `page[offset]` | Optional | `integer` | The number of items to offset the results by. Offset is zero-based. See [Pagination](/docs/commerce-cloud/api-overview/pagination). |


## Request Example

```bash
curl -X GET https://useast.api.elasticpath.com/pcm/jobs \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

## Response Examples

`200 OK`

```json
{
  "data": [
    {
      "type": "pim-job",
      "id": "92f237be-beac-4f22-945f-b6b73681ac09",
      "attributes": {
        "completed_at": "2024-02-20T22:13:41.99Z",
        "created_at": "2024-02-20T22:13:41.844Z",
        "started_at": "2024-02-20T22:13:41.903Z",
        "status": "success",
        "type": "child-products",
        "updated_at": "2024-02-20T22:13:41.903Z"
      },
      "meta": {
        "x_request_id": "1ff806e0-90ec-47c7-a64e-3b4774ec5187"
      }
    },
    {
      "type": "pim-job",
      "id": "011333ea-e17c-4220-b9e0-f0c1ed3f8bd7",
      "attributes": {
        "completed_at": "2024-02-20T22:13:24.469Z",
        "created_at": "2024-02-20T22:13:24.087Z",
        "started_at": "2024-02-20T22:13:24.389Z",
        "status": "success",
        "type": "child-products",
        "updated_at": "2024-02-20T22:13:24.389Z"
      },
      "meta": {
        "x_request_id": "e9b4ed5e-d1dc-4ce3-843b-5c0c29378661"
      }
    },
    {
      "type": "pim-job",
      "id": "93390c6c-dd0e-4a8b-99e4-10350f343ef2",
      "attributes": {
        "completed_at": "2024-02-20T22:09:45.262Z",
        "created_at": "2024-02-20T22:09:44.63Z",
        "started_at": "2024-02-20T22:09:45.171Z",
        "status": "success",
        "type": "child-products",
        "updated_at": "2024-02-20T22:09:45.171Z"
      },
      "meta": {
        "x_request_id": "0359b7d4-4467-46c7-b21a-54ea16bb123d"
      }
    },
    {
      "type": "pim-job",
      "id": "71c14f72-fccd-4b7f-8378-7fa592378032",
      "attributes": {
        "completed_at": "2024-02-20T22:03:20.086Z",
        "created_at": "2024-02-20T22:03:19.843Z",
        "started_at": "2024-02-20T22:03:20.007Z",
        "status": "success",
        "type": "child-products",
        "updated_at": "2024-02-20T22:03:20.007Z"
      },
      "meta": {
        "x_request_id": "1ca42949-7472-4d0c-923e-144541f2a013"
      }
    },
    {
      "type": "pim-job",
      "id": "4485a7ac-1da4-4771-85fb-e9442ef56c75",
      "attributes": {
        "completed_at": "2024-02-20T21:50:32.21Z",
        "created_at": "2024-02-20T21:50:32.07Z",
        "started_at": "2024-02-20T21:50:32.129Z",
        "status": "success",
        "type": "child-products",
        "updated_at": "2024-02-20T21:50:32.129Z"
      },
      "meta": {
        "x_request_id": "ae43cf7e-eb3d-41b3-8088-af5f4e87c3ae"
      }
    }
  ],
  "meta": {
    "results": {
      "total": 5
    }
  }
}
```


## Related resources

- [Product Import](/docs/pxm/products/importing-products/overview)
