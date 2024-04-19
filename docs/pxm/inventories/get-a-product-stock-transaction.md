---
title: Get Single Stock Transaction
nav_label: Get Single Stock Transaction
sidebar_position: 60
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `GET` Get Single Stock Transaction

```http
https://useast.api.elasticpath.com/v2/inventories/:productId/transactions/:transactionId
```

## Parameters

### Path parameters

| Name            | Required | Type     | Description                                              |
| --------------- | -------- | -------- | -------------------------------------------------------- |
| `productId`     | Required | `string` | The ID of the product on which this action is performed. |
| `transactionId` | Required | `string` | The ID for the transaction created on the product.       |

### Headers

| Name            | Required | Type     | Description                                  |
| --------------- | -------- | -------- | -------------------------------------------- |
| `Authorization` | Required | `string` | The Bearer token to grant access to the API. |


## Request Example

```bash
curl -X GET https://useast.api.elasticpath.com/v2/inventories/:productId/transactions/:transactionId \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

## Response Example

`200 OK`

The response includes information about the specific stock transactions.

```json
{
    "data": {
        "id": "4638fc99-faec-416c-94e0-c3e0d11af436",
        "type": "stock-transaction",
        "action": "increment",
        "product_id": "9eda5ba0-4f4a-4074-8547-ccb05d1b5981",
        "quantity": 1,
        "timestamps": {
            "created_at": "2018-03-07 14:34:32 +0000 UTC"
        }
    }
}
```
