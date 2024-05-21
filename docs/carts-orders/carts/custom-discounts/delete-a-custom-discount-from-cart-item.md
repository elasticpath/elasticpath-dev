---
title: Delete a Custom Discount from Cart Item
nav_label: Delete a Custom Discount from Cart Item
sidebar_position: 7
---

## `DELETE` Delete a Custom Discount from Cart Item

```http
https://useast.api.elasticpath.com/v2/carts/:cartID/items/:cartitemID/custom-discounts/:customDiscountID
```

Use this endpoint to delete a custom discount from cart item.

## Parameters

### Path parameters

| Name                      | Required | Type     | Description                                                              |
|:--------------------------|:---------|:---------|:-------------------------------------------------------------------------|
| `cartID` | Required | `string` | Specifies the system generated ID for the cart that the shopper created. |
| `cartitemID` | Required | `string` | Specifies the unique identifier for this cart item.                      |
| `customdiscountID` | Required | `string` | Specifies the ID for the custom discount to be deleted.                  |

### Headers

| Name                      | Required | Type     | Description                |
|:--------------------------|:---------|:---------|:---------------------------|
| `Authorization`           | Required | `string` | The Bearer token required to get access to the API. This endpoint requires the [client_credentials](/guides/Getting-Started/authentication/Tokens/client-credential-token) token for security reasons. This is different from other add to cart endpoints. |


## Request Example - Curl

```bash
curl -X DELETE https://useast.api.elasticpath.com/v2/carts/:cartID/items/:cartitemID/custom-discounts/:customDiscountID \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

## Response Example

`204 No Content`
