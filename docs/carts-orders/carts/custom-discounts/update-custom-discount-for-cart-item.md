---
title: Update a Custom Discount for Cart Item
nav_label: Update a Custom Discount for Cart Item
sidebar_position: 6
---

## `PUT` Update a Custom Discount for Cart Item

```http
https://useast.api.elasticpath.com/v2/carts/:cartID/items/:cartitemID/custom-discounts/:customDiscountID
```

Use this endpoint to update a custom discount in your cart item.

## Parameters

### Path parameters

| Name                      | Required | Type     | Description                                                              |
|:--------------------------|:---------|:---------|:-------------------------------------------------------------------------|
| `cartID` | Required | `string` | Specifies the system generated ID for the cart that the shopper created. |
| `cartitemID` | Required | `string` | Specifies the unique identifier for this cart item.                      |
| `customdiscountID` | Required | `string` | Specifies the ID for the custom discount to be updated.                  |

### Headers

| Name                      | Required | Type     | Description                |
|:--------------------------|:---------|:---------|:---------------------------|
| `Authorization`           | Required | `string` | The Bearer token required to get access to the API. This endpoint requires the [client_credentials](/docs/authentication/Tokens/client-credential-token) token for security reasons. This is different from other add to cart endpoints. |

### Body

| Name          | Required | Type     | Description                            |
|:--------------|:---------|:---------|:---------------------------------------|
| `type` | Required | `string` | Specifies the type of the resource. Always `custom_discount`. |
| `external_id` | Required | `string` | Specifies an external id for the custom disocunt. |
| `discount_engine` | Required | `string` | Specifies from where the custom discount is applied. For example, Talon.one. |
| `amount`         | Required | `integer` | Specifies an amount for the custom discount. It must be less than zero. |
| `description`   | Required | `string` | Specifies a description for the custom discount. |
| `discount_code` | Required | `string` | Specifies the discount code used for the custom discount. |

## Request Example - Curl

```bash
curl -X PUT https://useast.api.elasticpath.com/v2/carts/:cartID/items/:cartitemID/custom-discounts/:customDiscountID \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
        "data": {
            "type": "custom_discount",
            "external_id": "updated-discount-id",
            "discount_engine": "Updated Discount Engine",
            "amount": -3000,
            "description": "updated custom discount description",
            "discount_code": "updated-custom-code"

  }
}
```

## Response Example

`200`

```json
{
    "data": {
        "type": "custom_discount",
        "id": "a26ed55b-964c-4e39-a0f3-ef5bfdf8c062",
        "external_id": "updated-discount-id",
        "discount_engine": "Updated Discount Engine",
        "amount": {
            "amount": -3000,
            "currency": "USD",
            "formatted": "-$30.00"
        },
        "description": "updated custom discount description",
        "discount_code": "updated-custom-code"
    }
}
```
