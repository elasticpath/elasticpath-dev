---
title: Create an Item Percent Discount with Limitation and Condition Rule Promotion
nav_label: Create an Item Percent Discount with Limitation and Condition Rule Promotion
sidebar_position: 3
---

## `POST` Create an Item Percent Discount with Limitation and Condition Rule Promotion

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
        "name": "Buy X get one Y for free",
        "description": "Buy X get ONLY one Y for free",
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
              "percent",
              100
            ],
            "limitations": {
              "max_quantity": 1
          },
            "condition": {
              "strategy": "and",
                "children": [
              {
                  "strategy": "item_sku",
                  "operator": "in",
                  "args": [
                    "sku2"
                ]
              }
            ]
          }
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
        "id": "c4294755-2b0b-4d22-9301-b97f6c3ea282",
        "store_id": "9cf58db9-f5bb-4507-b8f8-831c61e5de06",
        "name": "Buy X get one Y for free",
        "description": "Buy X get ONLY one Y for free",
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
                        "percent",
                        100
                    ],
                    "condition": {
                        "strategy": "and",
                        "children": [
                            {
                                "strategy": "item_sku",
                                "operator": "in",
                                "args": [
                                    "sku2"
                                ]
                            }
                        ]
                    },
                    "limitations": {
                        "max_quantity": 1
                    }
                }
            ]
        },
        "start": "2024-02-01T00:00:00Z",
        "end": "2050-01-01T00:00:00Z",
        "meta": {
            "timestamps": {
                "created_at": "2024-04-12T13:14:18.994Z",
                "updated_at": "2024-04-12T13:14:18.994Z"
            }
        }
    }
}
```



