---
title: Delete Inventory
nav_label: Delete Inventory
sidebar_position: 100
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

:::warning Product Experience Manager Only
This endpoint works only with products that are created with the Products API.
:::

## `DELETE` Inventory

```http
https://useast.api.elasticpath.com/v2/inventories/:productId
```

Deletes the inventory for the specified product. The product inventory is null and is no longer managed by Commerce.

:::tip
If you want to keep managing inventory but have none of the product in stock, set the inventory to `0` instead of deleting the inventory.
:::

## Parameters

### Path parameters

| Name        | Required | Type     | Description                           |
| :---------- | :------- | :------- | :------------------------------------ |
| `productId` | Required | `string` | The unique identifier of the product. |

### Headers

| Name            | Required | Type     | Description                                  |
| :-------------- | :------- | :------- | :------------------------------------------- |
| `Authorization` | Required | `string` | The Bearer token to grant access to the API. |

## Request Example

```bash
curl -X POST https://useast.api.elasticpath.com/v2/inventories/f5bd4e59-a95f-4bda-bfe6-0f34f47ac94b \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

## Response Example

`204 No Content`

```json

```
