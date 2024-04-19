---
title: Create a Cart Percent Discount with Custom Attribute Rule Promotion
nav_label: Create a Cart Percent with Custom Attribute Rule Promotion
sidebar_position: 4
---

## `POST` Create a Cart Percent with Custom Attribute Rule Promotion

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

```bash
curl -X POST https://useast.api.elasticpath.com/v2/rule-promotions \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
     "data": {
        "type": "rule_promotion",
        "name": "$5 off cart with custom attribute",
        "description": "$5 off cart with custom attribute",
        "enabled": true,
        "automatic": true,
        "start": "2024-01-01",
        "end": "2024-01-26",
        "rule_set": {
            "rules": {
                "strategy": "cart_custom_attribute",
                "operator": "in",
                "args": [
                    "member_status",
                    "string",
                    "gold",
                    "platinum"
                ]
            },
            "actions": [
                {
                    "strategy": "cart_discount",
                    "args": [
                        "percent",
                        500
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
        "id": "e42ec2df-5682-4047-bc22-9e5eb932ca4a",
        "store_id": "85ea6cac-589a-4141-80d0-42b91aae73a7",
        "name": "$5 off cart with custom attribute",
        "description": "$5 off cart with custom attribute",
        "enabled": true,
        "automatic": true,
        "rule_set": {
            "catalog_ids": null,
            "currencies": null,
            "rules": {
                "strategy": "cart_custom_attribute",
                "operator": "in",
                "args": [
                    "member_status",
                    "string",
                    "gold",
                    "platinum"
                ]
            },
            "actions": [
                {
                    "strategy": "cart_discount",
                    "args": [
                        "percent",
                        500
                    ]
                }
            ]
        },
        "start": "2024-01-01T00:00:00Z",
        "end": "2024-01-26T00:00:00Z",
        "meta": {
            "timestamps": {
                "created_at": "2024-01-24T21:27:13.1Z",
                "updated_at": "2024-01-24T21:27:13.1Z"
            }
        }
    }
}
```
