---
title: Delete a Variation
nav_label: Delete a Variation
sidebar_position: 50
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `DELETE` Delete a variation

```http
https://useast.api.elasticpath.com/pcm/variations/:variationId
```

:::note
You can only delete the variations that are not in use. If you delete a variation that is still in use, a `422 Failed Validation` error message is returned.
:::

## Parameters

### Path parameters

| Name          | Required | Type     | Description                        |
| ------------- | -------- | -------- | ---------------------------------- |
| `variationId` | Required | `string` | The ID of the variation to delete. |

### Headers

| Name            | Required | Type     | Description                                         |
| --------------- | -------- | -------- | --------------------------------------------------- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Example

```bash
curl -X DELETE https://useast.api.elasticpath.com/pcm/variations/:id \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \

```

## Response Example

`204 No Content`
