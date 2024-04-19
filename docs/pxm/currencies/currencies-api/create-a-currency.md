---
title: Create a Currency
nav_label: Create a Currency
sidebar_position: 40
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `POST` Create a Currency

```http
https://useast.api.elasticpath.com/v2/currencies
```

## Parameters

### Headers

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Name | Required | Type | Description                                                                      |
| :--- | :--- | :--- |:---------------------------------------------------------------------------------|
| `enabled` | Required | `boolean` | Specifies if this currency is available for products. Either `true` or `false`   |
| `default` | Required | `boolean` | Specifies whether this is the default currency or not. Either `true` or `false`  |
| `decimal_places` | Required | `integer`  | Indicates how many decimal places the currency is formatted to.                  |
| `thousand_separator` | Required | `string`  | Indicates the thousand separator character. Example: `,`                         |
| `decimal_point` | Required | `string`  | Indicates the decimal point character. Example: `.`                              |
| `format` | Required | `string`  | Specifies how the price currency is displayed. Example: `"¥{price}"`.            |
| `exchange_rate` | Required | `number` | Specifies the exchange rate from the default currency.                           |
| `code` | Required | `string`  | Specifies the currency code. Example `YEN`.                                      |
| `type` | Required | `string`  | Represents the type represents the object being returned.                        |

## Request Examples

### Curl

```bash
curl -X POST https://useast.api.elasticpath.com/v2/currencies \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
       "data": {
         "type": "currency",
         "code": "YEN",
         "exchange_rate": 1,
         "format": "¥{price}",
         "decimal_point": ".",
         "thousand_separator": ",",
         "decimal_places": 2,
         "default": false,
         "enabled": true
       }
     }
```

### JavaScript SDK

```javascript
const currency = {
    code: "YEN",
    exchange_rate: 1, 
    format: "¥{price}",
    decimal_point: ".",
    thousand_separator: ",",
    decimal_places: 2,
    default: false,
    enabled: true,
};

// Where `EPCC` is an authenticated client
await EPCC.Currencies.Create(currency);
```

## Response Example

`201 Created`

```json
{
    "data": {
        "id": "190c3e9e-8006-4231-8c29-833fb4f6bff0",
        "type": "currency",
        "code": "YEN",
        "exchange_rate": 1,
        "format": "¥{price}",
        "decimal_point": ".",
        "thousand_separator": ",",
        "decimal_places": 2,
        "default": false,
        "enabled": true,
        "links": {
            "self": "https://useast.api.elasticpath.com/currencies/190c3e9e-8006-4231-8c29-833fb4f6bff0"
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

`400: Bad Request`

You'll get an error if you try to create a currency with an existing `code`.

```json
{
    "errors": [
        {
            "status": 400,
            "title": "Currency already exists",
            "detail": "The specified currency code already exists for this store"
        }
    ]
}
```
