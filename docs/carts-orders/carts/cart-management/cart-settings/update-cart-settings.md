---
title: Update Cart Settings
nav_label: Update Cart Settings
sidebar_position: 3
---

## `PUT` Update Cart Settings

```http
https://useast.api.elasticpath.com/v2/settings/cart
```

## Parameters

### Headers

| Name            | Required | Type     | Description                                                                                  |
| --------------- | -------- | -------- | -------------------------------------------------------------------------------------------- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. Grant type must be `client_credentials`. |

### Body

| Name               | Required | Type     | Description                                       |
| ------------------ | -------- | -------- | ------------------------------------------------- |
| `type`             | Required | `string` | The type is `settings`.                           |
| `cart_expiry_days` | Required | `number` | The number of days in which the cart will expire. |
| `discounts.custom_discounts_enabled` | Optional | `boolean` | When set to `true`, custom discounts are enabled. Default is `false`. **Note**: This setting only affects the new empty carts while the existing active carts will not be affected. |
| `discounts.use_rule_promotions` | Optional | `boolean` | When set to `true`, this parameter allows the cart to use rule promotions. |

## Request Examples

#### Curl

```bash
curl -X PUT https://useast.api.elasticpath.com/v2/settings/cart \
     -H "Authorization: Bearer XXXX"
     -d $ {
        "data": {
           "type": "settings",
           "cart_expiry_days": 365
           "discounts": {
                "custom_discounts_enabled": false,
                "use_rule_promotions": true
        }
      }
    }
}
```

### JavaScript SDK

```javascript
const data = {
    type: "settings",
    cart_expiry_days: 365,
};

// Where `EPCC` is an authenticated client
await EPCC.Settings.UpdateCart(data);
```

## Response Example

`200 OK`

```json
{
    "data": {
        "type": "settings",
        "cart_expiry_days": 7,
        "discounts": {
            "custom_discounts_enabled": false,
            "use_rule_promotions": true
        }
    }
}
```

## Errors

You might encounter the following error response if `cart_expiry_days` is not set to less than or equal to 365.

```json
{
    "errors": [
        {
            "status": 400,
            "source": "data.cart_expiry_days",
            "title": "number_lte",
            "detail": "Must be less than or equal to 365",
            "meta": {
                "value": 366
            }
        }
    ]
}
```

In this example, when `discounts.custom_discounts_enabled` is set to `true` and the existing cart has fixed discount promotion, the promotion will not be applied to the cart and the following error response is returned:

```json
{
    "errors": [
        {
            "status": 422,
            "title": "Could not apply EP promotion with the given code",
            "detail": "The cart is configured to use custom discounts",
            "meta": {
                "code": "nike80"
            }
        }
    ]
}
```
