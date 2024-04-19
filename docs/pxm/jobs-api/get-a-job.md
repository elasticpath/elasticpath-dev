---
title: Get A Job
nav_label: Get A Job
sidebar_position: 20
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

The `jobs` endpoint displays the status of a number of endpoints that function as jobs, for example, product [import](/docs/pxm/products/importing-products/overview) and [export](/docs/pxm/products/exporting-products/export-products), and [duplicating hierarchies](/docs/pxm/hierarchies/hierarchies-api/duplicate-a-hierarchy).

If, when viewing the status of the [Build Child Products](/docs/pxm/products/pxm-product-variations/child-products-api/build-child-products) endpoint, the job endpoint displays the following error:

**slug must be URL compatible.**  

This means the variation option name contains special characters, period, or spaces. While building child products, the option name is utilized as part of the product [SLUG](/docs/pxm/products/ep-pxm-products-api/pxm-products-api-overview#the-attributes-object). This error occurs when a variation option name is not URL safe.

See [Create Child Products Using Variations and Modifiers](/docs/pxm/products/pxm-product-variations/generate-pxm-variations).

## `GET` Get A Job

```http
https://useast.api.elasticpath.com/pcm/jobs/:jobId
```

## Parameters

### Path parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `jobId` | Required | `string` | The ID of the job that you want to retrieve.|

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Example

```bash
curl -X GET https://useast.api.elasticpath.com/pcm/job/2950cae3-1050-4c43-9fbd-2aa60dc5c249 \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

## Response Examples

`200 OK`

```json
{
  "data": {
    "type": "pim-job",
    "id": "2950cae3-1050-4c43-9fbd-2aa60dc5c249",
    "attributes": {
      "completed_at": "2024-01-05T13:46:42.142Z",
      "created_at": "2024-01-05T13:46:41.695Z",
      "started_at": "2024-01-05T13:46:42.07Z",
      "status": "success",
      "type": "child-products",
      "updated_at": "2024-01-05T13:46:42.07Z"
    },
    "meta": {
      "x_request_id": "7e832a26-d615-4305-b26a-e33c9c2fc06a"
    }
  }
}
```

```json
{
  "data": {
    "type": "pim-job",
    "id": "8f3404c0-8eb0-4063-b94a-2c01c88b4da6",
    "attributes": {
      "completed_at": "2024-01-05T13:46:42.142Z",
      "created_at": "2024-01-05T13:46:41.695Z",
      "started_at": "2024-01-05T13:46:42.07Z",
      "status": "success",
      "type": "product-import",
      "updated_at": "2024-01-05T13:46:42.07Z"
    },
    "meta": {
      "x_request_id": "7e832a26-d615-4305-b26a-e33c9c2fc06a"
    }
  }
}
```

## Related resources

- [Product Import](/docs/pxm/products/importing-products/overview)
