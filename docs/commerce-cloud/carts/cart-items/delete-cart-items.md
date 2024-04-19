---
title: Delete Cart Items
nav_label: Delete Cart Items
sidebar_position: 12
---

A shopper can clean up their cart, deleting custom items, promotions, and so on, while the empty cart remains available. The cart id, name, description, and any account or customer associations persist. The shopper can continue to add items to the cart.

## `DELETE` Delete Cart Items

```http
https://useast.api.elasticpath.com/v2/carts/:cartID/items
```

## Parameters

### Path parameters

| Name        | Required | Type     | Description                              |
|:------------|:---------|:---------|:-----------------------------------------|
| `cartID` | Required | `string` | The unique identifier of the cart created by you. |

### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Example

### Curl

```bash
curl -X DELETE https://useast.api.elasticpath.com/v2/carts/:cartID/items \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

### JavaScript SDK

```javascript
const reference = "XXXX";

// Where `EPCC` is an authenticated client
await EPCC.Cart(reference).Delete();
```

## Response Example

`204 No Content`
