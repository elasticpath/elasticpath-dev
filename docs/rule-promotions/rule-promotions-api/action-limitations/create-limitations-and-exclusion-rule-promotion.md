---
title: Create Action Limitations and Exclusions Rule Promotion
nav_label: Create Action Limitations and Exclusions Rule promotion
sidebar_position: 3
---

## `POST` Create Action Limitations and Exclusions Rule promotion

```http
https://useast.api.elasticpath.com/v2/rule-promotions
```

## Parameters

### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Body

For descriptions of other fields such as `type`, `name`, `description`, `enabled`, `automatic`, `start`, `end`, `rule_set`, and `actions.strategy` refer to [Rules Promotion API overview](/docs/rule-promotions/rule-promotions-api/rule-promotions-api-overview).


| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `action.limitations.max_discount` | Optional | `integer` | Specifies the maximum amount of discount applied to the shopping cart. For example, for a cart percent discount, you can set a maximum of $50 discount for a cart with a 50% discount. For item percent discount promotion, each item can be discounted by 20% with a maximum discount limitation of $10. |
| `action.limitations.max_quantity` | Optional | `integer` | Specifies the maximum quantity of each eligible item to which the promotion is applied. For example, if `max_quantity` is set to two, only two units of SKU1 can receive the discount. | 
| `action.limitations.items.max_items` | Required if defining items limitations. | `integer` | Specifies the maximum number of items eligible for the discount. For example, in a promotion offering 50% off eligible items within a category, if the maximum number of items is set to five, only up to 5 items from that category receive the discount. |
| `actions.limitations.items.price_strategy` | Optional | `string` | Specifies the strategy for determining which items to discount based on their individual prices. The available options are `cheapest` and `expensive`. When set to `cheapest`, the discount is applied to the cheapest items in the cart. When set to `expensive`, the discount is applied to the most expensive items in the cart. If neither `cheapest` nor `expensive` is chosen, the discount applies to all eligible items. |

## Request Example

```bash
curl -X POST https://useast.api.elasticpath.com/v2/rule-promotions \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
      "data": {
        "type": "rule_promotion",
        "name": "50% max $10 max 2 items 2 quantities from category",
        "description": "Items from category 50% off max $10 off 2 cheapest items with max quantity of 2 excluding one item",
        "enabled": true,
        "automatic": true,
        "start": "2024-02-01",
        "end": "2050-01-01",
        "rule_set": {
            "rules": {
                "strategy": "and",
                "children": [
          {
                    "strategy": "item_category",
                    "operator": "in",
                    "args": [
                        "e3807d4d-010e-494c-8227-9a5cfd8f1177"
                    ]
          },
          {
                    "strategy": "item_sku",
                    "operator": "nin",
                    "args": [
                        "exclude_item_sku"
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
          ],
                "limitations": {
                    "max_quantity": 2,
                    "max_discount": 1000,
                    "items": {
                        "max_items": 2,
                        "price_strategy": "cheapest"
            }
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
        "id": "81ffcf93-c090-49c8-9d74-893057fc9ad3",
        "store_id": "9cf58db9-f5bb-4507-b8f8-831c61e5de06",
        "name": "50% max $10 max 2 items 2 quantities from category",
        "description": "Items from category 50% off max $10 off 2 cheapest items with max quantity of 2 excluding one item",
        "enabled": true,
        "automatic": true,
        "rule_set": {
            "catalog_ids": null,
            "currencies": null,
            "rules": {
                "strategy": "and",
                "operator": "",
                "args": null,
                "children": [
                    {
                        "strategy": "item_category",
                        "operator": "in",
                        "args": [
                            "e3807d4d-010e-494c-8227-9a5cfd8f1177"
                        ]
                    },
                    {
                        "strategy": "item_sku",
                        "operator": "nin",
                        "args": [
                            "exclude_item_sku"
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
                    ],
                    "limitations": {
                        "max_discount": 1000,
                        "max_quantity": 2,
                        "items": {
                            "max_items": 2,
                            "price_strategy": "cheapest"
                        }
                    }
                }
            ]
        },
        "start": "2024-02-01T00:00:00Z",
        "end": "2050-01-01T00:00:00Z",
        "meta": {
            "timestamps": {
                "created_at": "2024-03-12T20:44:20.681Z",
                "updated_at": "2024-03-12T20:44:20.681Z"
            }
        }
    }
}
```
