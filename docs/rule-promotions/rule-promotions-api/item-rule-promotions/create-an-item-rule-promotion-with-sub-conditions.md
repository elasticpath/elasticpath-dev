---
title: Create an Item Rule Promotion with Sub Conditions
nav_label: Create an Item Rule Promotion with Sub Conditions
nav_position: 8
---

## `POST` Create an Item Rule Promotion with Sub Conditions

Sub conditions in Rule Promotions refer to additional criteria or conditions that must be met for a particular promotion to be applied.

For promotions applied at the item level, sub conditions are supported for: 

- `item_category`: Applies the promotion based on item category.
- `item_attributes`: Applies the promotion based on specific item attributes.
- `item_quantity`:  Applies the promotion based on the quantity of items.
- `item_sku`: Applies the promotion to specific SKUs.

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

The following request example outlines how a 50% discount applies to items that meet all the specified conditions. The main rule is based on the cart's total value, while the sub conditions focus on item categories and attributes. 

Rules (`rule_set.rules.children`): Here, the sub-conditions specify the additional criteria for the promotion to apply:
 - `item_category`: Only items within a specified category are eligible.
 - `item_attribute`: Items must not have a specific attribute to qualify for the discount.

Actions (`rule_set.actions.condition`): Here, the sub conditions refines where the discount is applied, requiring further criteria:
 - `item_category`: The discount is applied only to items within a specified category.
 - `item_attribute`: Items with a specified attribute are excluded from the discount.

This promotion sets up a 50% discount that applies only to items that meet all of the following conditions:

- The total cart value is at least $100.
- The items are part of a specified category.
- The items do not possess a specific attribute (For example, "sale2024").

## Request Example

```bash
curl -X POST https://useast.api.elasticpath.com/v2/rule-promotions \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
      "data": {
        "type": "rule_promotion",
        "name": "Items discount for a category excluding items with attribute",
        "description": "50% item discount excluding items with attribute when eligible items exceed $100",
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
                    "strategy": "item_category",
                    "operator": "in",
                    "args": [
                        "{{categoryID}}"
                    ]
                },
                {
                    "strategy": "item_attribute",
                    "operator": "nin",
                    "args": [
                        "products(product_template)",
                        "sales",
                        "string",
                        "sale2024"
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
                "condition": {
                    "strategy": "item_category",
                    "operator": "in",
                    "args": [
                        "{{categoryID}}"
                    ],
                    "children": [
                    {
                        "strategy": "item_attribute",
                        "operator": "nin",
                        "args": [
                            "products(product_template)",
                            "sales",
                            "string",
                            "sale2024"
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
        "id": "f558aebb-5108-44dc-9022-a9d6422110cf",
        "store_id": "9cf58db9-f5bb-4507-b8f8-831c61e5de06",
        "name": "Items discount for a category excluding items with attribute",
        "description": "50% item discount excluding items with attribute when eligible items exceed $100",
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
                        "strategy": "item_category",
                        "operator": "in",
                        "args": [
                            "{{categoryID}}"
                        ]
                    },
                    {
                        "strategy": "item_attribute",
                        "operator": "nin",
                        "args": [
                            "products(product_template)",
                            "sales",
                            "string",
                            "sale2024"
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
                    "condition": {
                        "strategy": "item_category",
                        "operator": "in",
                        "args": [
                            "{{categoryID}}"
                        ],
                        "children": [
                            {
                                "strategy": "item_attribute",
                                "operator": "nin",
                                "args": [
                                    "products(product_template)",
                                    "sales",
                                    "string",
                                    "sale2024"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "start": "2024-02-01T00:00:00Z",
        "end": "2050-01-01T00:00:00Z",
        "meta": {
            "timestamps": {
                "created_at": "2024-05-14T19:31:37.135Z",
                "updated_at": "2024-05-14T19:31:37.135Z"
            }
        }
    }
}
```