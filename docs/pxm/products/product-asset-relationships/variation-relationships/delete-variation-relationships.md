---
title: Delete Variation Relationships
nav_label: Delete Variation Relationships
sidebar_position: 40
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `DELETE` Delete Variations Relationships

```http
https://useast.api.elasticpath.com/pcm/products/:productId/relationships/variations
```

:::note
You can only delete a relationship that is not in use. If the variation relationship is still in use, a `422 Failed Validation` error message is returned.
:::

## Parameters

### Path parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `productId` | Required | `string` | The ID of the product you want to relate to the variation(s). |

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `data[].type` | Required | `string` | The type of resource object. You must use `product-variation`.|
| `data[].id` | Required | `string` | The ID of the product variation. |

## Request Example

```bash
curl -X DELETE https://useast.api.elasticpath.com/pcm/products/:productId/relationships/variations \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
      "data": [
        {
          "type": "product-variation",
          "id": ""2950cae3-1050-4c43-9fbd-2aa60dc5c249""
        }
     ]
  }'
```

## Response Example

`204 No Content`
