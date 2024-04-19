---
title: Update Inventory
nav_label: Update Inventory
sidebar_position: 90
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## Action types

| Type         | Description                                                   |
|:-------------|:--------------------------------------------------------------|
| `increment`  | Use this when you receive stock from a supplier, making products available for purchase. |
| `decrement`  | Use this when you want to remove stock from product inventory. |
| `allocate`   | Use this when you want to allocate stock, normally to a reseller who sells on the stock. |
| `deallocate` | Use this when you want to deallocate any previously allocated stock. |

## `POST` Create a Stock Transaction for a Product

```http
https://useast.api.elasticpath.com/v2/inventories/:productId/transactions
```

## Parameters

### Path parameters

| Name        | Required | Type     | Description                              |
|:------------|:---------|:---------|:-----------------------------------------|
| `productId` | Required | `string` | The ID for the product you’re performing this action on. |

### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Name       | Required | Type      | Description                              |
|:-----------|:---------|:----------|:-----------------------------------------|
| `quantity` | Required | `integer` | The amount of stock affected by this transaction. |
| `action`   | Required | `string`  | `increment`, `decrement`, `allocate`, `deallocate`. |
| `type`     | Required | `string`  | Always `stock-transaction`.              |

## Request Examples

### Curl

```bash
curl -X POST https://useast.api.elasticpath.com/v2/inventories/:productId/transactions \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
       "data": {
         "type": "stock-transaction",
         "action": "increment",
         "quantity": 10
       }
     }
```

### JavaScript SDK

```javascript
const MoltinGateway = require("@moltin/sdk").gateway;
const Moltin = MoltinGateway({
    client_id: "X",
    client_secret: "X",
});
const productId = "XXXX";
const quantity = 10;
Moltin.Inventories.IncrementStock(productId, quantity).then((transaction) => {
    // Do something
});
Moltin.Inventories.DecrementStock(productId, quantity).then((transaction) => {
    // Do something
});
Moltin.Inventories.AllocateStock(productId, quantity).then((transaction) => {
    // Do something
});
Moltin.Inventories.DeallocateStock(productId, quantity).then((transaction) => {
    // Do something
});
```

## Response Example

`200 OK`

You get the following response for any of the `action` types.

```json
{
    "data": {
        "id": "da9a0008-d2c4-4a17-bbc6-5e0b2f9430aa",
        "type": "stock-transaction",
        "action": "increment",
        "product_id": "9eda5ba0-4f4a-4074-8547-ccb05d1b5981",
        "quantity": 10,
        "timestamps": {
            "created_at": "2018-05-01 10:10:57 +0000 UTC"
        }
    }
}
```

`422: Unprocessable Entity`

You get the following error if you try to perform an action with incorrect amounts.

```json
{
    "errors": [
        {
            "status": 422,
            "title": "Cannot complete request",
            "detail": "Your request could not be completed due to insufficient stock levels"
        }
    ]
}
```
