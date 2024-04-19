---
title: Get a Currency
nav_label: Get a Currency
sidebar_position: 30
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `GET` Get a Currency by ID

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

## Request Examples

### Curl

```bash
curl -X GET https://useast.api.elasticpath.com/v2/currencies/:id \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```˜

### JavaScript SDK

```javascript
const currencyId = "25617d3e-14a6-434c-bfab-3fda87517aaf";

// Where `EPCC` is an authenticated client
await EPCC.Currencies.Get(currencyId);
```

## Response Example

`200 OK`

```json
{
    "data": {
        "id": "451b94f8-0536-4580-91e1-68bad2f05925",
        "type": "currency",
        "code": "GBP",
        "exchange_rate": 1,
        "format": "£{price}",
        "decimal_point": ".",
        "thousand_separator": ",",
        "decimal_places": 0,
        "default": false,
        "enabled": true,
        "links": {
            "self": "https://useast.api.elasticpath.com/currencies/451b94f8-0536-4580-91e1-68bad2f05925"
        },
        "meta": {
            "timestamps": {
                "created_at": "2017-09-27T08:48:01.821Z",
                "updated_at": "2018-04-24T19:19:40.941Z"
            }
        }
    }
}
```
