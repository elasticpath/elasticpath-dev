---
title: Update a Currency
nav_label: Update a Currency
sidebar_position: 50
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `PUT` Update a Currency by ID

```http
https://useast.api.elasticpath.com/v2/currencies/:id
```

## Parameters

### Path parameters

| Name | Required | Type     | Description                        |
|:-----|:---------|:---------|:-----------------------------------|
| `id` | Required | `string` | The ID for the requested Currency. |

### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Name                 | Required | Type      | Description                    |
|:---------------------|:---------|:----------|:-------------------------------|
| `type` | Required | `string`  | Represents the object being returned. Always `currency`. |
| `code` | Optional | `string`  | Specifies the currency code. Example: `YEN`. |
| `enabled` | Optional | `boolean` | Specifies if this currency is available for products. Either `true` or `false` |
| `default` | Optional | `boolean` | Specifies whether this is the default currency or not. Either `true` or `false` |
| `decimal_places` | Optional | `integer`  | Indicates how many decimal places the currency is formatted to. |
| `thousand_separator` | Optional | `string`  | Indicates the thousand separator character. Example: `,` |
| `decimal_point` | Optional | `string`  |  Indicates the decimal point character. Example: `.` |
| `format` | Optional | `string`  | Specifies how the price currency is displayed. Example: `"¥{price}"`. |
| `exchange_rate` | Optional | `number` | Specifies the exchange rate from the default currency. |

## Request Examples

:::note
When an organization creates a new currency or if there is a mismatch between the store currencies and organization currencies, pass an empty request body on a store-level currency to invalidate the cache. This will ensure that the store currencies are updated with the new organization currency.
:::

### Curl

```bash
curl -X PUT https://useast.api.elasticpath.com/v2/currencies/:id \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
       "data": {
         "default": true
       }
     }
```

### JavaScript SDK

```javascript
const currencyId = "25617d3e-14a6-434c-bfab-3fda87517aaf";
const currency = {
    exchange_rate: 1.5,
};

// Where `EPCC` is an authenticated client
await EPCC.Currencies.Update(currencyId, currency);
```

## Response Example

`200 OK`


```json
{
  "data": {
    "id": "190c3e9e-8006-4231-8c29-833fb4f6bff0",
    "type": "currency",
    "code": "YEN",
    "exchange_rate": 1.5,
    "format": "¥{price}",
    "decimal_point": ",",
    "thousand_separator": ".",
    "decimal_places": 2,
    "default": false,
    "enabled": true,
    "links": {
      "self":
        "https://useast.api.elasticpath.com/currencies/190c3e9e-8006-4231-8c29-833fb4f6bff0"
    },
    "meta": {
      "timestamps": {
        "created_at": "2018-05-02T09:01:56.303640168Z",
        "updated_at": "2018-05-02T09:01:56.303641068Z"
      }
    }
  }
}
```
