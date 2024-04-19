---
title: Create Variation Relationships
nav_label: Create Variation Relationship
sidebar_position: 20
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `POST` Create Variations Relationships

```http
https://useast.api.elasticpath.com/pcm/products/:productId/relationships/variations
```

:::caution
A `409: Conflict` response is returned when a record you are updating has been changed by another user at the same time.
:::

## Parameters

### Path parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `productId` | Required | `string` | The ID of the product you want to relate to the variations. |

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
curl -X POST https://useast.api.elasticpath.com/pcm/products/:productId/relationships/variations \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
      "data": [
        {
          "type": "product-variation",
          "id": "3ab3deca-1f11-47b7-a409-24ea3234d72c"
        },
        {
          "type": "product-variation",
          "id": "7c740aa0-7fb7-4bd6-9347-78988cf60f9a"
        }
      ]
    }'
```

## Response Example

`204 No Content`
