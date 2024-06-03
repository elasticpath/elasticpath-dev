---
title: Update a Rule Promotion
nav_label: Update a Rule Promotion
sidebar_position: 8
---

## `PUT` Update a Rule Promotion

```http
https://useast.api.elasticpath.com/v2/rule-promotions/:promotionID
```

## Parameters

### Path parameters

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `promotionID` | Required | `string` | The unique identifier of the promotion to be updated. |

### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Body

For descriptions about the fields, refer to [Rules Promotion API overview](/docs/rule-promotions/rule-promotions-api/rule-promotions-api-overview).

## Request Example

```bash
curl -X PUT https://useast.api.elasticpath.com/v2/rule-promotions:promotionID \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
     "data": {
        "type": "rule_promotion",
        "name": "$10 off cart rule - updated",
        "description": "updated cart rule $10 off your order!",
        "enabled": false,
        "automatic": false,
        "rule_set": {
            "rules": {
                "strategy": "cart_total",
                "operator": "lt",
                "args": [
                    1000
                ]
            },
            "actions": [
                {
                    "strategy": "cart_discount",
                    "args": [
                        "fixed",
                        10
                    ]
                }
            ]
        },
        "start": "2024-01-01T00:00:00Z",
        "end": "2025-01-01T00:00:00Z"
    }
}
```

## Response Example

`200 OK`

```json
{
    "data": {
        "type": "rule_promotion",
        "id": "009527e4-1cb4-40c7-9da4-8cd2aed864cf",
        "store_id": "85ea6cac-589a-4141-80d0-42b91aae73a7",
        "name": "$10 off cart rule - updated",
        "description": "updated cart rule $10 off your order!",
        "enabled": false,
        "automatic": false,
        "rule": {
            "rules": {
                "strategy": "cart_total",
                "operator": "lt",
                "args": [
                    1000
                ]
            },
            "actions": [
                {
                    "strategy": "cart_discount",
                    "args": [
                        "fixed",
                        10
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
