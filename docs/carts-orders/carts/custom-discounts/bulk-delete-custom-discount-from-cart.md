---
title: Bulk Delete Custom Discount from Cart
nav_label: Bulk Delete Custom Discount from Cart
sidebar_position: 9
---

## `DELETE` Bulk Delete Custom Discount from Cart

```http
https://useast.api.elasticpath.com/v2/carts/:cartID/custom-discounts
```

## Parameters

### Path parameters

| Name     | Required | Type     | Description                                                              |
|:---------|:---------|:---------|:-------------------------------------------------------------------------|
| `cartID` | Required | `string` | Specifies the system generated ID for the cart that the shopper created. |

### Headers

| Name                      | Required | Type     | Description                |
|:--------------------------|:---------|:---------|:---------------------------|
| `Authorization`           | Required | `string` | The Bearer token required to get access to the API. This endpoint requires the [client_credentials](/guides/Getting-Started/authentication/Tokens/client-credential-token) token for security reasons. This is different from other add to cart endpoints. |


## Request Example - Curl

```bash
curl -X DELETE https://useast.api.elasticpath.com/v2/carts/:cartID/custom-discounts \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

## Response Example

`204 No Content`




