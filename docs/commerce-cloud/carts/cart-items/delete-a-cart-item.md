---
title: Delete a Cart Item
nav_label: Delete a Cart Item
sidebar_position: 11.5
---

## `DELETE` Delete a Cart Item

```http
https://useast.api.elasticpath.com/v2/carts/:cartID/items/:cartitemID
```

## Parameters

### Path parameters

| Name        | Required | Type     | Description                              |
|:------------|:---------|:---------|:-----------------------------------------|
| `cartID` | Required | `string` | The unique identifier of the cart created by you. |
| `cartitemID` | Required | `string` | The unique identifier of the cart item to be deleted. |

### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Example

### Curl

```bash
curl -X DELETE https://useast.api.elasticpath.com/v2/carts/:cartID/items/:cartitemID \
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
