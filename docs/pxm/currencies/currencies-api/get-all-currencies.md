---
title: Get all Currencies
nav_label: Get all Currencies
sidebar_position: 20
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `GET` Get all Currencies

```http
https://useast.api.elasticpath.com/v2/currencies
```

## Parameters

### Headers

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Examples

### Curl

```bash
curl -X GET https://useast.api.elasticpath.com/v2/currencies \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

### JavaScript SDK

```javascript
// Where `EPCC` is an authenticated client
await EPCC.Currencies.All();
```

## Response Example

`200 OK`


```json
{
  "data": [
    {
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
        "self":
          "https://useast.api.elasticpath.com/currencies/451b94f8-0536-4580-91e1-68bad2f05925"
      },
      "meta": {
        "timestamps": {
          "created_at": "2017-09-27T08:48:01.821Z",
          "updated_at": "2018-04-24T19:19:40.941Z"
        }
      }
    },
    {
      "id": "cd9f04a9-2338-469b-a1f2-096ac5973a90",
      "type": "currency",
      "code": "USD",
      "exchange_rate": 1,
      "format": "${price}",
      "decimal_point": ".",
      "thousand_separator": ",",
      "decimal_places": 2,
      "default": true,
      "enabled": true,
      "links": {
        "self":
          "https://useast.api.elasticpath.com/currencies/cd9f04a9-2338-469b-a1f2-096ac5973a90"
      },
      "meta": {
        "timestamps": {
          "created_at": "2017-06-12T13:36:23.541Z",
          "updated_at": "2018-05-01T14:32:53.956Z"
        }
      }
    }
  ]
}
```
