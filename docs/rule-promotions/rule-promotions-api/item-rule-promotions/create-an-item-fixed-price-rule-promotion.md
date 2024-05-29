---
title: Create an Item Fixed Price Discount Rule Promotion
nav_label: Create an Item Fixed Price Discount Rule Promotion
sidebar_position: 1
---

## `POST` Create an Item Fixed Price Discount Rule Promotion

```http
https://useast.api.elasticpath.com/v2/rule-promotions
```

## Parameters

### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

For descriptions about the fields, refer to [Rules Promotion API overview](/docs/rule-promotions/rule-promotions-api/rule-promotions-api-overview).

## Request Example

```bash
curl -X POST https://useast.api.elasticpath.com/v2/rule-promotions \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
      "data": {
        "type": "rule_promotion",
        "name": "Buy 2 items for $100",
        "description": "Buy 2 items for $100",
        "enabled": true,
        "automatic": true,
        "start": "2024-02-01",
        "end": "2050-01-01",
        "rule_set": {
            "rules": {
            "strategy": "item_sku",
            "operator": "in",
            "args": [
                "sku1"
            ]
        },
            "actions": [
            {
                "strategy": "item_discount",
                "args": [
                    "fixed_price",
                    2,
                    10000
                ]
            }
        ] 
        }
    }
}
```

## Response Example

`201 Created`

```json
{
    "data": {
        "type": "rule_promotion",
        "id": "488eba3d-fae1-4d9a-80e6-6baa2bf7fc83",
        "store_id": "9cf58db9-f5bb-4507-b8f8-831c61e5de06",
        "name": "Buy 2 items for $100",
        "description": "Buy 2 items for $100",
        "enabled": true,
        "automatic": true,
        "rule_set": {
            "rules": {
                "strategy": "item_sku",
                "operator": "in",
                "args": [
                    "sku1"
                ]
            },
            "actions": [
                {
                    "strategy": "item_discount",
                    "args": [
                        "fixed_price",
                        2,
                        10000
                    ]
                }
            ]
        },
        "start": "2024-02-01T00:00:00Z",
        "end": "2050-01-01T00:00:00Z",
        "meta": {
            "timestamps": {
                "created_at": "2024-04-11T21:01:25.826Z",
                "updated_at": "2024-04-11T21:01:25.826Z"
            }
        }
    }
}
```



