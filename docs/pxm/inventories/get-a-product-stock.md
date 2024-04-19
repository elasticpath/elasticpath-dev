---
title: Get a Productʼs Stock
nav_label: Get a Productʼs Stock
sidebar_position: 40
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `GET` Get Stock by Product ID

```http
https://useast.api.elasticpath.com/v2/inventories/:productId
```

## Parameters

### Path parameters

| Name        | Required | Type     | Description                               |
|:------------|:---------|:---------|:------------------------------------------|
| `productId` | Required | `string` | The ID for the product you require stock. |

### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Examples

### Curl

```bash
curl -X GET https://useast.api.elasticpath.com/v2/inventories/:productId \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

### JavaScript SDK

```javascript
const MoltinGateway = require("@moltin/sdk").gateway;
const Moltin = MoltinGateway({
    client_id: "X",
});
const productId = "XXXX";
Moltin.Inventories.Get(productId).then((inventories) => {
    // Do something
});
```

## Response Example

`200 OK`

```json
{
    "data": {
        "id": "9eda5ba0-4f4a-4074-8547-ccb05d1b5981",
        "type": "stock",
        "total": 20,
        "available": 20,
        "allocated": 0
    }
}
```
