---
title: Create an Item Percent Discount with Product Attribute
nav_label: Create an Item Percent with Product Attribute
sidebar_position: 4
---

## `POST` Create an Item Percent with Product Attribute

```http
https://useast.api.elasticpath.com/v2/rule-promotions
```
To learn how to create product attributes, see [Product Attributes](/docs/api/flows/create-a-field).

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
        "name": "Items with item attribute discount",
        "description": "All items with attribute brand EP get 20% discount",
        "enabled": true,
        "automatic": true,
        "start": "2024-02-01",
        "end": "2050-01-01",
        "rule_set": {
          "rules": {
            "strategy": "item_attribute",
            "operator": "in",
            "args": [
              "products(product_template)",
              "brand",
              "string",
              "EP"
        ]
      },
          "actions": [
        {
            "strategy": "item_discount",
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
        "id": "57c02731-54ef-42f3-86d0-aaae0ef03610",
        "store_id": "9cf58db9-f5bb-4507-b8f8-831c61e5de06",
        "name": "Items with item attribute discount",
        "description": "All items with attribute brand EP get 20% discount",
        "enabled": true,
        "automatic": true,
        "rule_set": {
            "rules": {
                "strategy": "item_attribute",
                "operator": "in",
                "args": [
                    "products(product_template)",
                    "brand",
                    "string",
                    "EP"
                ]
            },
            "actions": [
                {
                    "strategy": "item_discount",
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
                "created_at": "2024-03-15T20:18:59.748Z",
                "updated_at": "2024-03-15T20:18:59.748Z"
            }
        }
    }
}
```

