---
title: Create a Cart Fixed Discount
nav_label: Create a Cart Fixed Discount
sidebar_position: 3
---

## `POST` Create a Cart Fixed Discount

```http
https://useast.api.elasticpath.com/v2/rule-promotions
```

## Parameters

### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

For descriptions about the fields, refer to [Promotions Builder API overview](/docs/promotions-builder/promotions-builder-api/promotions-builder-api-overview).

## Request Example

```bash
curl -X POST https://useast.api.elasticpath.com/v2/rule-promotions \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
      "data": {
        "type": "rule_promotion",
        "name": "$5 off cart when cart is $100 or more",
        "description": "cart rule $5 off your order!",
        "enabled": true,
        "automatic": true,
        "start": "2023-12-01",
        "end": "2024-01-01",
        "rule_set": {
            "catalog_ids":["09b9359f-897f-407f-89a2-702e167fe781"],
            "currencies":["CAD"],
            "rules": {
                "strategy": "cart_total",
                "operator": "gte",
                "args": [10000]
            },
            "actions": [
                {
                    "strategy": "cart_discount",
                    "args": ["fixed", 500]
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
        "id": "d9b7f262-c1dd-4765-8987-4d712164d8f6",
        "store_id": "85ea6cac-589a-4141-80d0-42b91aae73a7",
        "name": "$5 off cart when cart is $100 or more",
        "description": "cart rule $5 off your order!",
        "enabled": true,
        "automatic": true,
        "rule_set": {
            "catalog_ids": [
                "09b9359f-897f-407f-89a2-702e167fe781"
            ],
            "currencies": [
                "CAD"
            ],
        "rule": {
            "rules": {
                "strategy": "cart_total",
                "operator": "gte",
                "args": [
                    10000
                ]
            },
            "actions": [
                {
                    "strategy": "cart_discount",
                    "args": [
                        "fixed",
                        500
                    ]
                }
            ]
        },
        "start": "2023-12-01T00:00:00Z",
        "end": "2024-01-01T00:00:00Z",
        "meta": {
            "timestamps": {
                "created_at": "2023-12-20T17:41:50.284Z",
                "updated_at": "2023-12-20T17:41:50.284Z"
            }
        }
    }
}
```

## Request Example - Priority and Stackable Flags

The following request example shows how to create a rule promotion with `priority` and `stackable` flags:

```bash
curl -X POST https://useast.api.elasticpath.com/v2/rule-promotions \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
      "data": {
        "type": "rule_promotion",
        "name": "promo with priority 100",
        "description": "promo with priority 100",
        "enabled": false,
        "automatic": false,
        "priority": 100,
        "stackable": true,
        "start": "2023-12-01",
        "end": "2024-01-01",
        "rule_set": {
            "rules": {
                "strategy": "cart_total",
                "operator": "gte",
                "args": [10000]
            },
            "actions": [
                {
                    "strategy": "cart_discount",
                    "args": ["fixed", 500]
                }
            ]
        }
    }
}
```

## Response Example - Priority and Stackable Flags

The following response example shows the `priority` and `stackable` values:

`201 Created`

```json
{
    "data": {
        "type": "rule_promotion",
        "id": "422d4cff-3069-4ec2-9d04-410db05444e3",
        "store_id": "85ea6cac-589a-4141-80d0-42b91aae73a7",
        "name": "promo with priority 100",
        "description": "promo with priority 100",
        "enabled": false,
        "automatic": false,
        "rule_set": {
            "rules": {
                "strategy": "cart_total",
                "operator": "gte",
                "args": [
                    10000
                ]
            },
            "actions": [
                {
                    "strategy": "cart_discount",
                    "args": [
                        "fixed",
                        500
                    ]
                }
            ]
        },
        "start": "2023-12-01T00:00:00Z",
        "end": "2024-12-31T00:00:00Z",
        "stackable": true,
        "priority": 100,
        "meta": {
            "timestamps": {
                "created_at": "2024-07-09T17:03:04.211Z",
                "updated_at": "2024-07-09T17:03:04.211Z"
            }
        }
    }
}
```

The following error message is returned when you attempt to create a rule promotion with a `priority` that is already in use by another promotion:

```json
{
    "errors": [
        {
            "status": "422",
            "title": "Duplicate priority",
            "detail": "Priority already in use in another running or scheduled promotion"
        }
    ]
}
```
