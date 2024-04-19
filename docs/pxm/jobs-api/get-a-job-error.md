---
title: Get Job Errors
nav_label: Get Job Errors
sidebar_position: 40
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

The `jobs` endpoint displays the status of a number of endpoints that function as jobs, for example, product [import](/docs/pxm/products/importing-products/overview) and [export](/docs/pxm/products/exporting-products/export-products), and [duplicating hierarchies](/docs/pxm/hierarchies/hierarchies-api/duplicate-a-hierarchy).

## `GET` Get a Job’s Errors

```http
https://useast.api.elasticpath.com/pcm/jobs/:jobId/errors
```

## Parameters

### Path parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `jobId` | Required | `string` | The ID of the job to retrieve errors for.|

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Example

```bash
curl -X GET https://useast.api.elasticpath.com/pcm/job/:jobId/errors \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

## Response Examples

`200 OK`

```json
{
  "data": [
    {
      "type": "pim-job-error",
      "id": "2950cae3-1050-4c43-9fbd-2aa60dc5c249",
      "attributes": {
          "message": "data.attributes.sku: Must be unique amongst products."
    }
  }
]
}
```

```json
{
    "errors": [
        {
            "status": "422",
            "title": "Failed Validation",
            "detail": "missing required csv header: name"
        }
    ]
}
```

## Related resources

- [Product Import](/docs/pxm/products/importing-products/overview)
