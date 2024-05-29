---
title: Create a Cart Percent Discount with Sub Conditions
nav_label: Create a Cart Percent Discount with Sub Conditions
sidebar_position: 5
---

## `POST` Create a Cart Percent Discount with Sub Conditions

Sub conditions refer to additional criteria or conditions that must be met for a particular promotion to be applied.

The `cart_total` strategy now supports the inclusion of sub conditions, allowing for more granular control over when promotions or actions associated with this strategy should be applied based on the contents of the cart. 

For promotions applied at the cart level, strategies applied are:

- `item_quantity`
- `item_category`
- `item_attribute`
- `item_sku`
- `item_product_id`

When multiple sub conditions exist, they function as `and` conditions, requiring all sub conditions to be fulfilled for the promotion to be applied.

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

## Request Example

In the following request example, sub conditions for the cart are specified within the `rule_set.rules.children` and `rule_set.actions.condition` objects.

For Rules (`rule_set.rules.children`): The sub condition specifies that items with the *exclusiveItem* SKU are excluded from the promotion when evaluating the cart's total value ("strategy": "cart_total").

For Actions (`rule_set.actions.condition`): The sub condition ensures that the 50% discount is applied only to items that do not have the SKU *exclusiveItem* SKU.

```bash
curl -X POST https://useast.api.elasticpath.com/v2/rule-promotions \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
      "data": {
        "type": "rule_promotion",
        "name": "50 percent off cart excluding exclusive item",
        "description": "50 percent off your order excluding exclusive item",
        "enabled": true,
        "automatic": true,
        "start": "2024-02-01",
        "end": "2050-01-01",
        "rule_set": {
            "rules": {
                "strategy": "cart_total",
                "operator": "gte",
                "args": [
                    10000
                ],
            "children": [
            {
                "strategy": "item_sku",
                "operator": "nin",
                "args": [
                "exclusiveItem"
                ]
            }
            ]
        },
            "actions": [
            {
                "strategy": "cart_discount",
                "args": [
                    "percent",
                        50
                    ],
                "condition": {
                    "strategy": "item_sku",
                    "operator": "nin",
                        "args": [
                            "exclusiveItem"
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
        "id": "32e00eac-aae5-4384-95fb-ae606356dfc5",
        "store_id": "9cf58db9-f5bb-4507-b8f8-831c61e5de06",
        "name": "50 percent off cart excluding exclusive item",
        "description": "50 percent off your order excluding exclusive item",
        "enabled": true,
        "automatic": true,
        "rule_set": {
            "rules": {
                "strategy": "cart_total",
                "operator": "gte",
                "args": [
                    10000
                ],
                "children": [
                    {
                        "strategy": "item_sku",
                        "operator": "nin",
                        "args": [
                            "exclusiveItem"
                        ]
                    }
                ]
            },
            "actions": [
                {
                    "strategy": "cart_discount",
                    "args": [
                        "percent",
                        50
                    ],
                    "condition": {
                        "strategy": "item_sku",
                        "operator": "nin",
                        "args": [
                            "exclusiveItem"
                        ]
                    }
                }
            ]
        },
        "start": "2024-02-01T00:00:00Z",
        "end": "2050-01-01T00:00:00Z",
        "meta": {
            "timestamps": {
                "created_at": "2024-05-13T18:05:14.087Z",
                "updated_at": "2024-05-13T18:05:14.087Z"
            }
        }
    }
}
```