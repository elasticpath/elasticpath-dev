---
title: Delete a Cart
nav_label: Delete a Cart
sidebar_position: 5
---

You can delete a cart, including the items, name, description, and remove all associations.

## `DELETE` Delete cart by ID

```http
https://useast.api.elasticpath.com/v2/carts/:cartID
```

## Parameters

### Path parameters

| Name        | Required | Type     | Description                                      |
| ----------- | -------- | -------- | ------------------------------------------------ |
| `cartID` | Required | `string` | The unique identifier of the cart that you want to delete. |

### Headers

| Name            | Required | Type     | Description                                         |
| --------------- | -------- | -------- | --------------------------------------------------- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Examples

### Curl

```bash
curl -X DELETE https://useast.api.elasticpath.com/v2/carts/:cartID \
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
