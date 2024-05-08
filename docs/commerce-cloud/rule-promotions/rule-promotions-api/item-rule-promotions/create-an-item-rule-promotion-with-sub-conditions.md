---
title: Create an Item Rule Promotion with Sub Conditions
nav_label: Create an Item Rule Promotion with Sub Conditions
nav_position: 8
---

## `POST` Create an Item Rule Promotion with Sub Conditions

Sub conditions in Rule Promotions refer to additional criteria or conditions that must be met for a particular promotion to be applied.

For promotions applied at the item level, sub conditions are enabled for `item_category` and `item_attributes` strategies. When multiple sub conditions exist, they function as `and` conditions, requiring all sub conditions to be fulfilled for the promotion to be applied.

```http
https://useast.api.elasticpath.com/v2/rule-promotions
```

## Parameters

### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

For descriptions about the fields, refer to [Rules Promotion API overview](/docs/commerce-cloud/rule-promotions/rule-promotions-api/rule-promotions-api-overview).

In the below request example, sub conditions are specified within the `rule_set.rules.children` array.

- The main rule is that promotion applies to items from a specific category.
- The sub conditions ensure that the promotion excludes items from another category and items with a specific SKU.

This setup means that for the promotion to apply, the item must meet all the specified conditions, that is, it must be in the specified category but not in the excluded category or SKU.
You can add multiple sub conditions within the  `rule_set.rules.children` array.

## Request Example

```bash
curl -X POST https://useast.api.elasticpath.com/v2/rule-promotions \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
      "data": {
        "type": "rule_promotion",
        "name": "Items discount for a category excluding sub-category and item",
        "description": "50% item discount excluding sub-category and item",
        "enabled": true,
        "automatic": true,
        "start": "2024-02-01",
        "end": "2050-01-01",
        "rule_set": {
            "rules": {
                "strategy": "item_category",
                "operator": "in",
                "args": [
                    "978447fc-c99b-49e3-8058-437d271a1f52"
                ],
                "children": [
                    {
                        "strategy": "item_category",
                        "operator": "nin",
                        "args": [
                            "7700645a-55bd-4159-a8f3-ade7fed387c4"
                        ]
                    },
                    {
                        "strategy": "item_sku",
                        "operator": "nin",
                        "args": [
                            "nike_running1"
                        ]
                    }
                ]
            },
            "actions": [
                {
                    "strategy": "item_discount",
                    "args": [
                        "percent",
                        50
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
        "id": "4ec3470f-c8ab-4e4f-95ca-55d0051489cc",
        "store_id": "85ea6cac-589a-4141-80d0-42b91aae73a7",
        "name": "Items discount for a category excluding sub-category and item",
        "description": "50% item discount excluding sub-category and item",
        "enabled": true,
        "automatic": true,
        "rule_set": {
            "rules": {
                "strategy": "item_category",
                "operator": "in",
                "args": [
                    "978447fc-c99b-49e3-8058-437d271a1f52"
                ],
                "children": [
                    {
                        "strategy": "item_category",
                        "operator": "nin",
                        "args": [
                            "7700645a-55bd-4159-a8f3-ade7fed387c4"
                        ]
                    },
                    {
                        "strategy": "item_sku",
                        "operator": "nin",
                        "args": [
                            "nike_running1"
                        ]
                    }
                ]
            },
            "actions": [
                {
                    "strategy": "item_discount",
                    "args": [
                        "percent",
                        50
                    ]
                }
            ]
        },
        "start": "2024-02-01T00:00:00Z",
        "end": "2050-01-01T00:00:00Z",
        "meta": {
            "timestamps": {
                "created_at": "2024-04-17T22:42:43.122Z",
                "updated_at": "2024-04-17T22:42:43.122Z"
            }
        }
    }
}
```
