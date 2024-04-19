---
title: Get Product-File Relationships
sidebar_label: Get Product-File Relationships
sidebar_position: 10
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `GET` Get Product-File Relationships

```http
https://useast.api.elasticpath.com/pcm/products/:productId/relationships/files
```

This request retrieves all files that are associated with the specified product.

## Parameters

### Path parameters

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `productId` | Required | `string` | The unique identifier of the product. |

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token to grant access to the API. |

## Request Example

```bash
curl -X GET https://useast.api.elasticpath.com/pcm/products/14e055d0-eebb-4090-8594-a0a7aeea2151/relationships/files \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

## Response Example

`200 OK`

```json
{
    "data": [
        {
            "type": "file",
            "id": "ab0dabeb-c600-4ef5-89c5-2979c604703f",
            "meta": {
                "created_at": "2023-10-02T13:25:41.934Z"
            }
        }
    ]
}
```
