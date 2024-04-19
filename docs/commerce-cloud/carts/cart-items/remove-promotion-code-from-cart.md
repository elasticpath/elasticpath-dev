---
title: Remove Promotion Code from Cart
nav_label: Remove Promotion Code from Cart
sidebar_position: 13
---

You can remove promotion code from a cart if it was applied manually. This endpoint does not work if the promotion is applied automatically.

## `DELETE` Remove Promotion Code from Cart

```http
https://useast.api.elasticpath.com/v2/carts/:cartID/discounts/:code
```

## Parameters

### Path parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `cartID` | Required | `string` | Specifies the unique identifier of a cart created by you. |
| `code` | Required | `string` | Specifies the promotion code to be removed from the cart. |

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Example - Curl

```bash
curl -X DELETE https://useast.api.elasticpath.com/v2/carts/:cartID/discounts/:code \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

## Response Example

`204 No Content`
