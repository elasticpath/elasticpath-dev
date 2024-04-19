---
title: Replace Main Image Relationship
nav_label: Replace Main Image Relationship
sidebar_position: 30
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `PUT` Replace Main Image Relationships

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
| `productId` | Required | `string` | The ID of the product you want to relate to the main image. |

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `type` | Required | `string` | The type of resource object. You must use `file`.|
| `id` | Required | `string` | The ID of the new image file. |

## Request Example

```bash
curl -X PUT https://useast.api.elasticpath.com/pcm/products/:productId/relationships/main_image \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
      "data": [
        {
          "type": "file",
          "id": "3ab3deca-1f11-47b7-a409-24ea3234d72c"
        }
    }'
```

## Response Example

`204 No Content`
