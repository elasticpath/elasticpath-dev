---
title: Delete Product Prices from a Price Book
nav_label: Delete Product Prices
sidebar_position: 50
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `DELETE` a Product Price from a Price Book

```http
https://useast.api.elasticpath.com/pcm/pricebooks/:id/prices/:priceId
```

Deletes a product price (`:priceId`) from the specified price book (`:id`).

## Parameters

### Path parameters

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `id` | Required | `string` | The unique identifier of the price book. |
| `priceId` | Required | `string` | The unique identifier of the product price. |

### Headers

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token to grant access to the API. |

## Request Example

```bash
curl -X DELETE https://useast.api.elasticpath.com/pcm/pricebooks/2cf0d38c-58aa-420d-8658-4385dccea609/prices/76c78677-a22a-4104-8fb7-11f1cfc3b146 \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

## Response Example

`204 No Content`
