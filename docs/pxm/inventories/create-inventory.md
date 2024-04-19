---
title: Create Inventory
nav_label: Create Inventory
sidebar_position: 80
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

:::warning Product Experience Manager Only 
This endpoint works only with products that are created with the Products API.
:::

## `POST` Create Inventory

```http
https://useast.api.elasticpath.com/v2/inventories/:productId
```

Sets the inventory quantity for the specified product. When you take this action, you are choosing to manage the inventory for this product in Commerce.

## Parameters

### Path parameters

| Name        | Required | Type     | Description                           |
| :---------- | :------- | :------- | :------------------------------------ |
| `productId` | Required | `string` | The unique identifier of the product. |

### Headers

| Name            | Required | Type     | Description                                  |
| :-------------- | :------- | :------- | :------------------------------------------- |
| `Authorization` | Required | `string` | The Bearer token to grant access to the API. |

### Body

| Name       | Required | Type      | Description                        |
| :--------- | :------- | :-------- | :--------------------------------- |
| `quantity` | Required | `integer` | The amount of inventory available. |

## Request Example

```bash
curl -X POST https://useast.api.elasticpath.com/v2/inventories/f5bd4e59-a95f-4bda-bfe6-0f34f47ac94b \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
        "data": {
            "quantity": 1000
            }
        }
```

## Response Example

`200 OK`

```json
{
    "data": {
       "quantity": 1000
        }
    }
}
```
