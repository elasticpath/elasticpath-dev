---
title: Create a Mixed of Cart and Item Percent Discount Rule Promotion
nav_label: Create a Mixed of Cart and Item Percent Discount Rule Promotion
sidebar_position: 5
---

## `POST` Create a Mixed of Cart and Item Percent Discount Rule Promotion

You can create a rule promotion using a combination of cart and item percent discount.

For example, you can create a mixed promotion strategy involving both cart and item percent discounts, where eligible shoppers receive a 20% discount on the entire cart and a 50% discount on specific items, such as `sku1`.

```http
https://useast.api.elasticpath.com/v2/rule-promotions
```

## Parameters

### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

For descriptions of the fields, refer to [Rules Promotion API overview](/docs/rule-promotions/rule-promotions-api/rule-promotions-api-overview).

## Request Example

```bash
curl -X POST https://useast.api.elasticpath.com/v2/rule-promotions \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
      "data": {
        "type": "rule_promotion",
        "name": "Buy sku1 and get cart 20% off and item sku1 50%",
        "description": "Buy sku1 and get cart 20% off and item sku1 50%",
        "enabled": true,
        "automatic": true,
        "start": "2024-02-01",
        "end": "2024-02-10",
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
                        "percent",
                        50
                    ],
                    "condition": {
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
                    }
                },
                {
                    "strategy": "cart_discount",
                    "args": [
                        "percent",
                        20
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
        "id": "57e20480-7a0c-49f1-88e7-34925dadceb9",
        "store_id": "9cf58db9-f5bb-4507-b8f8-831c61e5de06",
        "name": "Buy sku1 and get cart 20% off and item sku1 50%",
        "description": "Buy sku1 and get cart 20% off and item sku1 50%",
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
                        50
                    ],
                    "condition": {
                        "strategy": "and",
                        "operator": "",
                        "args": null,
                        "children": [
                            {
                                "strategy": "item_sku",
                                "operator": "in",
                                "args": [
                                    "sku1"
                                ]
                            }
                        ]
                    }
                },
                {
                    "strategy": "cart_discount",
                    "args": [
                        "percent",
                        20
                    ]
                }
            ]
        },
        "start": "2024-02-01T00:00:00Z",
        "end": "2050-01-01T00:00:00Z",
        "meta": {
            "timestamps": {
                "created_at": "2024-03-13T15:35:15.641Z",
                "updated_at": "2024-03-13T15:35:15.641Z"
            }
        }
    }
}
```
