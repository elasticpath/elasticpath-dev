---
title: Delete a Product
nav_label: Delete a Product
sidebar_position: 60
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `DELETE` Delete a Product

```http
https://useast.api.elasticpath.com/pcm/products/:productId
```

Deletes the specified product.

You cannot delete a product if it is part of a bundle. You must first delete the bundle before you delete the product.

## Parameters

### Body

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `productId` | Required | `string` | The unique identifier of the product. |

### Headers

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token to grant access to the API. |

## Request Example

```bash
curl -X DELETE https://useast.api.elasticpath.com/pcm/products/6616b002-ef08-4661-a969-5278344dcf67 \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

## Response Example

`204 No Content`

```json

```
