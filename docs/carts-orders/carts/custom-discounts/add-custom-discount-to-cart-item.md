---
title: Add a Custom Discount to Cart Item
nav_label: Add a Custom Discount to Cart Item
sidebar_position: 5
---

## `POST` Add a Custom Discount to Cart Item

```http
https://useast.api.elasticpath.com/v2/carts/:cartID/items/:cartitemID/custom-discounts
```

Use this endpoint to add a custom discount to cart item.

## Parameters

### Path Parameters

| Name         | Required | Type     | Description                                                              |
|:-------------|:---------|:---------|:-------------------------------------------------------------------------|
| `cartID`     | Required | `string` | Specifies the system generated ID for the cart that the shopper created. |
| `cartitemID` | Required | `string` | Specifies the unique identifier for this cart item.                      |

### Headers

| Name                      | Required | Type     | Description                |
|:--------------------------|:---------|:---------|:---------------------------|
| `Authorization`           | Required | `string` | The Bearer token required to get access to the API. This endpoint requires the [client_credentials](/guides/Getting%20Started/authentication/Tokens/client-credential-token) token for security reasons. This is different from other add to cart endpoints. |

### Body

| Name          | Required | Type     | Description                            |
|:--------------|:---------|:---------|:---------------------------------------|
| `type` | Required | `string` | Specifies the type of the resource. Always `custom_discount`. |
| `external_id` | Required | `string` | Specifies an external id for the custom disocunt. |
| `discount_engine` | Required | `string` | Specifies from where the custom discount is applied. |
| `amount`         | Required | `integer` | Specifies an amount to be applied for the custom discount. It must be less than zero. |
| `description`   | Required | `string` | Specifies a description for the custom discount. |
| `discount_code` | Required | `string` | Specifies the discount code used for the custom discount. |

## Request Example - Curl

```bash
curl -X POST https://useast.api.elasticpath.com/v2/carts/:cartID/items/:cartitemID/custom-discounts \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
        "data": {
            "type": "custom_discount",
            "external_id": "custom-discount-external-id",,
            "discount_engine": "Custom Discount engine",
            "amount": -500,
            "description": "custom discount description",
            "discount_code": "custom-code"

  }
}
```

## Response Example


`201 Created`

```json
{
    "data": {
        "type": "custom_discount",
        "id": "c7c67945-c8e5-443a-b243-48a86e643f9c",
        "external_id": "custom-discount-external-id",
        "discount_engine": "Custom Discount Engine",
        "amount": {
            "amount": -500,
            "currency": "USD",
            "formatted": "-$5.00"
         },
        "description": "custom discount description",
        "discount_code": "custom-code"
    }
}
```



