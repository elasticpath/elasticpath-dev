---
title: Get all Settings
nav_label: Get all Settings
sidebar_position: 20
---

You can get all of the project settings via one API call using a `client_credential` token. The response is in object format as shown in the following example.

:::note
The default `calculation_method` is `line.`
:::

## `GET` Get all Project Settings

```http
https://useast.api.elasticpath.com/v2/settings
```

## Parameters

### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Examples

### Curl

```bash
curl -X GET https://useast.api.elasticpath.com/v2/settings \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

### JavaScript SDK

```javascript
// Where `EPCC` is an authenticated client
await EPCC.Settings.All();
```

## Response Example

`200 OK`

```json
{
    "data": {
        "type": "settings",
        "id": "XXX-XXX-XXX",
        "page_length": 25,
        "list_child_products": true,
        "additional_languages": [],
        "calculation_method": "line",
        "currency_limit": 10,
        "field_limit": 100,
        "integration_limit": 100,
        "event_limit": 5,
        "filter_limit": 10,
        "tax_item_limit": 5,
        "promotions_limit": 1000,
        "promotion_codes_limit": 1000,
        "page_offset_limit": 10000,
        "address_mandatory_fields": [
            "first_name",
            "last_name",
            "line_1",
            "city",
            "region",
            "postcode",
            "country"
        ]
    },
    "meta": {
      "owner": "store"
    }
}
```
