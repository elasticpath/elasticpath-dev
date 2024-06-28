---
title: Create an Item Fixed Discount Rule Promotion
nav_label: Create an Item Fixed Discount Rule Promotion
sidebar_position: 1.5
---

## `POST` Create an Item Fixed Discount Rule Promotion

:::note
You can create an item discount where the mimimum discount amount is either $0 or 0%.
:::

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
        "name": "Buy item get $10 off",
        "description": "Buy item get $10 off",
        "enabled": true,
        "automatic": true,
        "start": "2024-02-10",
        "end": "2024-02-22",
        "rule_set": {
            "rules": {
                "strategy": "and",
                "children": [
                    {
                        "strategy": "item_sku",
                        "operator": "in",
                        "args": [
                            "sku1"
                        ]
                    }
                ]
            },
            "actions": [
                {
                    "strategy": "item_discount",
                    "args": [
                        "fixed",
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
        "id": "0c341523-6a7e-4195-8658-6dc3399d71e0",
        "store_id": "9cf58db9-f5bb-4507-b8f8-831c61e5de06",
        "name": "Buy item get $10 off",
        "description": "Buy item get $10 off",
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
                        "fixed",
                        1000
                    ]
                }
            ]
        },
        "start": "2024-02-01T00:00:00Z",
        "end": "2050-01-01T00:00:00Z",
        "meta": {
            "timestamps": {
                "created_at": "2024-04-11T21:07:22.306Z",
                "updated_at": "2024-04-11T21:07:22.306Z"
            }
        }
    }
}
```



