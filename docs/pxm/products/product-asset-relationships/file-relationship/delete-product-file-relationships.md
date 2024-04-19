---
title: Delete Product-File Relationships
nav_label: Delete Product-File Relationships
sidebar_position: 40
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `DELETE` Delete Product-File Relationships

```http
https://useast.api.elasticpath.com/pcm/products/:productId/relationships/files
```

:::caution
A `409: Conflict` response is returned when a record you are updating has been changed by another user at the same time.
:::

## Parameters

### Path parameters

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `productId` | Required | `string` | The unique identifier of the product. |

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token to grant access to the API. |

### Body

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `type` | Required | `string` | The type of the resource object. You must use `file`. |
| `id` | Required | `string` | The unique identifier of the file. |

This request deletes relationships between the specified product and the files.

## Request Example

```bash
curl -X DELETE https://useast.api.elasticpath.com/pcm/products/14e055d0-eebb-4090-8594-a0a7aeea2151/relationships/files \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
        "data": [
            {
            "type": "file",
            "id": "string"
            }
        ]
     }'
```

## Response Example

`204 No Content`
