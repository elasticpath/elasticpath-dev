---
title: Create First-time Shopper's Coupon Code
nav_label: Create First-time Shopper's Coupon Code
sidebar_position: 10
---

First-time shopper is a shopper who has not completed any purchases or authorized orders with the store. 

:::note
- Orders without payment transactions do not count as completed purchases. 
- Canceling or refunding an order does not reinstate first-time shopper status.
:::

## `POST` Create First-time Shopper's Coupon Code

```http
https://useast.api.elasticpath.com/v2/rule-promotions/:promotionID/codes
```

## Parameters

### Path parameters

| Name | Required | Type     | Description                      |
|:-----|:---------|:---------|:---------------------------------|
| `promotionID` | Required | `string` | The unique identifier of the promotion. |

### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Name           | Required | Type      | Description                          |
|:---------------|:---------|:----------|:-------------------------------------|
| `type`         | Required | `string`  | Specifies the type of the resource. The type of resource for promotions is `promotion_codes`. |
| `codes`        | Required | `array`   | Specifies the code details in an array of objects. |
| `codes[].code` | Required | `string`  | Specifies the string to use as a code for the promotion. |
| `is_for_new_shopper` | Optional | `boolean` | Indicates whether the coupon is for first-time shoppers. If set to `true`, the discount applies only if the shopper has never made a payment for an order in the store. If `false` or not provided, the discount applies to all shoppers. |

## Request Example

```bash
curl -X POST https://useast.api.elasticpath.com/v2/rule-promotions/:promotionID/codes \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
      "data":{
        "type": "promotion_codes",
        "codes": [
          {
          "code": "first_time",
          "is_for_new_shopper": true
          }
        ]
      }
     }
```

## Response Example

`201 Created`

```json
{
    "data": [
        {
            "id": "7ba5cd3d-a6dc-4745-97e6-3957f8c050df",
            "code": "first_time",
            "is_for_new_shopper": true
        }
    ]
}
```

## Errors

The following error is returned when you attempt to create a code with `uses` or `user` parameters:

```json
{
    "errors": [
        {
            "status": 400,
            "source": "",
            "title": "Invalid Code",
            "detail": "Code - first_time_uses can't have limited uses or assigned to users since it's for first time shoppers."
        }
    ]
}
```



          