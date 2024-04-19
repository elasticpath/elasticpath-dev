---
title: Update Settings
nav_label: Update Settings
sidebar_position: 40
---

You can use the Settings endpoint to update your project settings at any time. These global settings take immediate effect.

## `PUT` Update Project Settings

```http
https://useast.api.elasticpath.com/v2/settings
```

## Parameters

### Headers

| Name            | Required | Type     | Description                                         |
| --------------- | -------- | -------- | --------------------------------------------------- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `calculation_method` | Optional | `string`  | The method used to calculate card and order totals. |
| `additional_languages` | Optional | `array`   | An array of `alpha2` codes for supported languages |
| `list_child_products` | Optional | `boolean` | Display child products or not in product listings. |
| `page_length` | Optional | `integer` | Number of results per page (**max**: `100`). |
| `type` | Required | `string`  | This describes the type of request payload you’re sending. |
|`address_mandatory_fields`| Optional | `array`   | An array of fields that are required for creating an [address](/docs/commerce-cloud/addresses/about-addresses-api#the-address-object). |

## Request Example

### Curl

```bash
curl -X PUT https://useast.api.elasticpath.com/v2/settings \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
       "data": {
         "type": "settings",
         "page_length": 70,
         "list_child_products": false,
         "additional_languages": ["es","fr","de"],
         "calculation_method": "line",
         "address_mandatory_fields": [
            "first_name",
            "last_name",
            "line_1",
            "city",
            "region",
            "postcode",
            "country",
            "instructions"
        ]
       }
     }
```

### JavaScript SDK

```javascript
const data = {
    type: "settings",
    page_length: 70,
    list_child_products: false,
    additional_languages: ["es", "fr", "de"],
    calculation_method: "line",
    address_mandatory_fields: [
        "first_name",
        "last_name",
        "line_1",
        "city",
        "region",
        "postcode",
        "country",
        "instructions",
    ],
};

// Where `EPCC` is an authenticated client
await EPCC.Settings.Update(data);
```

## Response Example

`200 OK`

```json
{
    "id": "XXX-XXX-XXX",
    "data": {
        "type": "settings",
        "page_length": 70,
        "list_child_products": true,
        "additional_languages": ["es", "fr", "de"],
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
            "country",
            "instructions"
        ]
    },
    "meta": {
      "owner": "store"
    }
}
```
