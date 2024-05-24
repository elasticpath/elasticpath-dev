---
title: Remove Cart Item
nav_label: Remove Cart Item
sidebar_position: 11
---

You can easily remove items from the Cart. A successful Cart item removal request returns the [cart items](/docs/carts-orders/carts/cart-items/cart-items-overview).

## `DELETE` Remove Item from Cart

```http
https://useast.api.elasticpath.com/v2/carts/:cartID/items/:cartitemID
```

## Parameters

### Path parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `cartID` | Required | `string` | The unique identifier of the cart that you created. |
| `cartitemID` | Required | `string` | The unique identifier for this cart item. |

### Headers

| Name            | Required | Type     | Description                                         |
| --------------- | -------- | -------- | --------------------------------------------------- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Examples

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
await Moltin.Cart(reference).RemoveItem(itemId)();
```

## Response Example

`200 OK`

```json
{
    "data": [],
    "meta": {
        "display_price": {
            "with_tax": {
                "amount": 0,
                "currency": "",
                "formatted": "0"
            },
            "without_tax": {
                "amount": 0,
                "currency": "",
                "formatted": "0"
            }
        },
        "timestamps": {
            "created_at": "2018-05-08T10:25:40.02Z",
            "updated_at": "2018-05-08T10:25:40.02Z",
            "expires_at": "2018-05-20T10:25:40.02Z"
        }
    }
}
```
