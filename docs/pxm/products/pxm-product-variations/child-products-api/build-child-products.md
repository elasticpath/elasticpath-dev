---
title: Build Child Products
nav_label: Build Child Products
sidebar_position: 10
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

Building child products is an asynchronous operation. When you build child products, a job is created. The `jobId` of the job is displayed in the response. When the job is complete, the build child products operation is also complete. You can use the `jobId` to see the status of your job using [Get a Job](/docs/pxm/jobs-api/get-a-job).

Jobs are processed one at a time. You can continue to send build child product requests, but those jobs are queued. In other words, Commerce looks for any jobs that have a status of PENDING and starts the job with the earliest created date. This process is repeated until all jobs are processed. See [Jobs](/docs/pxm/jobs-api/overview).

Re-building child products after adding or removing a new variation changes the total number of child products that you can generate from a base product. When you rebuild the child products after updating variations associated with the base product, all existing child products that belong to a base product are deleted. New child products are created with new product IDs.

If you have any bundles that reference child products directly, then you must update the bundles with the new child product IDs.

However, re-building child products after adding or removing an option does not change the existing product IDs.

## `POST` Build Child Products

```http
https://useast.api.elasticpath.com/pcm/products/:productId/build
```

Builds your child products.

## Parameters

### Path parameters

| Name        | Required | Type     | Description                                                 |
| ----------- | -------- | -------- | ----------------------------------------------------------- |
| `productId` | Required | `string` | The ID of the base product to build the child products for. |

### Headers

| Name            | Required | Type     | Description                                         |
| --------------- | -------- | -------- | --------------------------------------------------- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Example

This request builds child products for each combination of variation and options in the base product.

```bash
curl -X POST https://useast.api.elasticpath.com/pcm/products/:productId/build \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

## Response Example

`201 Created`
