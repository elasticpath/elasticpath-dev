---
title: Get Cart Settings
nav_label: Get Cart Settings
sidebar_position: 2
---

## `GET` Get Cart Settings

```http
https://useast.api.elasticpath.com/v2/settings/cart
```

## Parameters

### Headers

| Name            | Required | Type     | Description                                                                                  |
| --------------- | -------- | -------- | -------------------------------------------------------------------------------------------- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. Grant type must be `client_credentials`. |

## Request Examples

### Curl

```bash
curl -X GET https://useast.api.elasticpath.com/v2/settings/cart \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

### JavaScript SDK

```javascript
// Where `EPCC` is an authenticated client
await EPCC.Settings.Cart();
```

## Response Example

`200 OK`

```json
{
    "data": {
        "type": "settings",
        "cart_expiry_days": 7,
        "discounts": {
            "custom_discounts_enabled": false
        }
    }
}
```
