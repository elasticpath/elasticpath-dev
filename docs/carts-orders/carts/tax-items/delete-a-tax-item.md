---
title: Delete a Tax Item
nav_label: Delete a Tax Item
sidebar_position: 5
---

## `DELETE` Delete by ID

```http
https://useast.api.elasticpath.com/v2/carts/:cartID/items/:itemId/taxes/:id
```

## Parameters

### Path parameters

| Name        | Required | Type     | Description                       |
| ----------- | -------- | -------- | --------------------------------- |
| `cartId`    | Required | `string` | The ID of the cart to target.     |
| `itemId`    | Required | `string` | The ID of the taxed cart item.    |
| `taxItemId` | Required | `string` | The ID of the tax item to delete. |

### Headers

| Name            | Required | Type     | Description                                         |
| --------------- | -------- | -------- | --------------------------------------------------- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Examples

### Curl

```bash
curl -X DELETE https://useast.api.elasticpath.com/v2/carts/:cartId/items/:itemId/taxes/:taxItemId \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

### JavaScript SDK

```javascript
const itemId = "25617d3e-14a6-434c-bfab-3fda87517aaf";
const taxItemId = "08c53828-bf85-460f-9a31-985547e0e567";

// Where `EPCC` is an authenticated client
await EPCC.Cart.RemoveItemTax(itemId, taxItemId);
```

## Response Example

`204 No Content`
