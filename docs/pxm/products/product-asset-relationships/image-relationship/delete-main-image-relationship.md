---
title: Delete Main Image Relationship
nav_label: Delete Main Image Relationship
sidebar_position: 40
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `DELETE` Delete Main Image Relationships

```http
https://useast.api.elasticpath.com/pcm/products/:productId/relationships/main_image
```

:::caution
A `409: Conflict` response is returned when a record you are updating has been changed by another user at the same time.
:::

## Parameters

### Path parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `productId` | Required | `string` | The ID of the product from which you want to remove the main image.|

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Example

```bash
curl -X DELETE https://useast.api.elasticpath.com/pcm/products/:productId/relationships/main_image \
     -H "Authorization: Bearer XXXX" \
```

## Response Example

`204 No Content`
