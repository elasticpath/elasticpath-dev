---
title: Delete Product-Template Relationships
nav_label: Delete Product-Template Relationships
sidebar_position: 30
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `DELETE` Delete Product-template Relationships

```http
https://useast.api.elasticpath.com/pcm/products/:productId/relationships/templates
```

:::caution
A `409: Conflict` response is returned when a record you are updating has been changed by another user at the same time.
:::

## Parameters

### Path parameters

| Name        | Required | Type     | Description                           |
|:------------|:---------|:---------|:--------------------------------------|
| `productId` | Required | `string` | The unique identifier of the product. |

### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token to grant access to the API. |

### Body

| Name   | Required | Type     | Description                                   |
|:-------|:---------|:---------|:----------------------------------------------|
| `type` | Required | `string` | The type of the resource object. You must use `template`. |
| `id`   | Required | `string` | The unique identifier of the template.        |

This request deletes relationships between the specified product and the templates.

## Request Example

```bash
curl -X DELETE https://useast.api.elasticpath.com/pcm/products/14e055d0-eebb-4090-8594-a0a7aeea2151/relationships/templates \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
        "data": [
            {
            "type": "template",
            "id": "string"
            }
        ]
     }'
```

## Response Example

`204 No Content`
