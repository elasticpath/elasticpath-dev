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

For descriptions about the other fields, refer to [Rules Promotion API overview](/docs/commerce-cloud/rule-promotions/rule-promotions-api/rule-promotions-api-overview).

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `rule_set.rules.strategy` | Required | `string`| Specifies the strategy for the rule. The supported strategy is `cart_custom_attribute`. |
| ``rule_set.rules.operator` |  Required | `string`| Specifies the operators used for the rule strategy. The supported operators are `in` and `nin`. |
| `rule_set.rules.args` |  Required | `string`| Represents the condition value associated with each rule within the rule set. It requires at least three arguments.<ul><li>The first argument is the custom attribute key, a string of alphanumeric characters, underscores, or hyphens with a length between 1 to 255 characters. For example, `member_status`. See [Request Example](/docs/commerce-cloud/rule-promotions/rule-promotions-api/cart-rule-promotions/create-a-cart-percent-custom-attribute-rule-promotion#request-example)</li><li>The second argument is the custom attribute type, with one of the following values:</li><ul><li>`string`</li><li>`boolean`</li><li>`integer`</li><li>`float`</li></ul><li>The third argument is the values of the expected type based on the second argument. For example, based on the `member_status` and custom attribute type, the values could be `gold`, `silver`, and `platinum`.</li></ul><p>Note that the maximum number of objects in the `args` array is 24.</p> |

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
