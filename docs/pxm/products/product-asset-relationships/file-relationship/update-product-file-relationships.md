---
title: Update Product-File Relationships
nav_label: Update Product-File Relationships
sidebar_position: 30
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `PUT` Update Product-File Relationships

```http
https://useast.api.elasticpath.com/pcm/products/:productId/relationships/files
```

This request updates relationships between the specified product and the files. All the existing relationships are replaced with the new relationships.

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
| `id` | Required | `string` | The unique identifier of the new file. |

## Request Example

```bash
curl -X PUT https://useast.api.elasticpath.com/pcm/products/14e055d0-eebb-4090-8594-a0a7aeea2151/relationships/files \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
        "data": [
            {
            "type": "file",
            "id": "a2282db-6f96-4db3-a69f-905b5312dc65"
            }
        ]
     }'
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
