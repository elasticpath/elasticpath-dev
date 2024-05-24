---
title: Create a Cart Fixed Discount Rule Promotion
nav_label: Create a Cart Fixed Discount Rule Promotion
sidebar_position: 3
---

## `POST` Create a Cart Fixed Discount Rule Promotion

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
