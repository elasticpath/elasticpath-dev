---
title: Bulk Delete Tax Items from Cart
nav_label: Bulk Delete Tax Items from Cart
sidebar_position: 4.8
---

## `DELETE` Bulk Delete Tax Items

```http
https://useast.api.elasticpath.com/v2/carts/:cartID/taxes
```

## Parameters

### Path parameters

| Name        | Required | Type     | Description                       |
| ----------- | -------- | -------- | --------------------------------- |
| `cartID`    | Required | `string` | The unique identifier of the cart item.     |

### Headers

| Name            | Required | Type     | Description                                         |
| --------------- | -------- | -------- | --------------------------------------------------- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Example - Curl

```bash
curl -X DELETE https://useast.api.elasticpath.com/v2/carts/:cartID/taxes \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

## Response Example

`204 No Content`
