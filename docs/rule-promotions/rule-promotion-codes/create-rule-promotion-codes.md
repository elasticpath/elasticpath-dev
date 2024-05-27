---
title: Create Rule Promotion Codes
nav_label: Create Rule Promotion Codes
sidebar_position: 2
---

## `POST` Create Rule Promotion Codes

```http
https://useast.api.elasticpath.com/v2/rule-promotions/:promotionID/codes
```

:::note
- The promotion codes are case-insensitive.
- Multiple promotions can have the same code name. This means that different promotions can be identified using the same code names, allowing shoppers to apply a single coupon code that triggers multiple promotions. For more information see [Duplicate Codes](#duplicate-codes).
:::

## Parameters

### Path parameters

| Name | Required | Type     | Description                      |
|:-----|:---------|:---------|:---------------------------------|
| `promotionID` | Required | `string` | The unique identifier of the rule promotion. |

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
| `codes[].uses` | Optional | `integer` | Specifies the number of times the code can be used. If no value is set, the customer can use the code any number of times. |
| `codes[].user` | Optional | `string`  | Specifies the customer ID of the shopper who can use the code. For more information, see the [Create a customer](/docs/customer-management/customer-management-api/create-a-customer) section. |
| `consume_unit` | Optional | `string`  | Specifies whether the code is consumed per application or per checkout. The options are `per_application` or `per_checkout`. The default setting is `per_checkout`. With `per_checkout`,  the code is used once for each checkout, regardless of the number of items in the cart. When set to `per_application`, the code is used per application. For cart discounts, each application counts as one usage. For item discounts, each application to either a single quantity or a bundle is counted as one usage. For example, in a store that offers 50% off on SKU1, SKU2, and SKU3, and limits the maximum usage of the promotion code to two, a shopper can apply the promotion up to two quantities. If the cart contains two or more quantities of SKU1, the promotion is applied 2 times to SKU1, and other quantities and items are at the regular price. If the cart contains one quantity of SKU1, one quantity of SKU2, and one quantity of SKU3, the promotion is applied once to SKU1 and once to SKU2. The code usage is applied at checkout and the code is considered consumed at that point. |

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
          "code": "spring2024"
          },
          {
          "code": "summer2024",
          "consume_unit": "per_checkout"
          },
          {
          "code": "summer2024_limited",
          "consume_unit": "per_application",
          "uses": 5
          },
          {
          "code": "summer2024_memberOnly",
          "consume_unit": "per_application",
          "uses": 1,
          "user": "vip_shopper@email.com"
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
            "id": "0a985bab-8f20-4124-b832-2d39053dfc56",
            "code": "spring2024"
        },
        {
            "id": "519be2f4-1a8a-4d97-a292-f45e9f55e0dd",
            "code": "summer2024",
            "consume_unit": "per_checkout"
        },
        {
            "id": "bdf30707-d6f1-4914-9a17-bc1d45e62216",
            "code": "summer2024_limited",
            "uses": 5,
            "max_uses": 5,
            "consume_unit": "per_application"
        },
        {
            "id": "95981144-dbde-4b1e-af7f-b6268af2925d",
            "code": "summer2024_memberOnly",
            "user": "vip_shopper@email.com",
            "uses": 1,
            "max_uses": 1,
            "consume_unit": "per_application"
        }
    ]
}
```

## Duplicate Codes

Multiple promotions can have the same code name. This means that different promotions can be identified using the same code names, allowing shoppers to apply a single coupon code that triggers multiple promotions.

Duplicate promotion codes are allowed among promotions in the store, regardless of their enabled or disabled status and validity dates. However, duplicate codes cannot be created within the same promotion. Even when codes are duplicated, they can serve different purposes and have a different `consume_unit`. For example, one code may have `per_application` and limited use, while another code with the same name can have `per_checkout` and unlimited use.

When creating codes, a list of duplicated codes is returned:

```json
"messages": [
        {
            "source": {
                "type": "promotion_codes",
                "codes": [
                    "spring2024",
                    "summer2024"
                ]
            },
            "title": "Duplicate code names",
            "description": "Code names duplicated in other promotions"
        }
    ]
```

## Errors

You cannot create promotion codes for automatic promotions. The following error is returned if you attempt to do so:

```json
{
    "errors": [
        {
            "status": "422",
            "title": "No codes allowed",
            "detail": "Cannot add codes to automatic promotion"
        }
    ]
}
```

The following error is returned if you attempt to create a promotion code that already exists in the same rule promotion:

```json
{
    "errors": [
        {
            "status": "422",
            "title": "Duplicate code",
            "detail": "Promotion code already in use"
        }
    ]
}
```

