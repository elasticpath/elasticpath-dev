---
title: Create a Cart Percent Discount Rule Promotion
nav_label: Create a Cart Percent Discount Rule Promotion
sidebar_position: 2
---

## `POST` Create a Cart Percent Discount Rule Promotion

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
        "name": "10% off cart rule",
        "description": "cart rule 10% off your order!",
        "enabled": false,
        "automatic": false,
        "start": "2024-01-01",
        "end": "2025-01-01",
        "rule_set": {
            "rules": {
                "strategy": "cart_total",
                "operator": "gte",
                "args": [100]
            },
            "actions": [
                {
                    "strategy": "cart_discount",
                    "args": ["percent", 20]
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
        "id": "009527e4-1cb4-40c7-9da4-8cd2aed864cf",
        "store_id": "85ea6cac-589a-4141-80d0-42b91aae73a7",
        "name": "10% off cart rule",
        "description": "cart rule 10% off your order!",
        "enabled": false,
        "automatic": false,
        "rule": {
            "rules": {
                "strategy": "cart_total",
                "operator": "gte",
                "args": [
                    100
                ]
            },
            "actions": [
                {
                    "strategy": "cart_discount",
                    "args": [
                        "percent",
                        20
                    ]
                }
            ]
        },
        "start": "2024-01-01T00:00:00Z",
        "end": "2025-01-01T00:00:00Z",
        "meta": {
            "timestamps": {
                "created_at": "2023-12-18T22:12:36.276Z",
                "updated_at": "2023-12-18T22:12:36.276Z"
            }
        }
    }
}
```
