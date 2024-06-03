---
title: Create an Item Percent Discount with Item SKU or Item Product ID
nav_label: Create an Item Percent Discount with Item SKU Or Item Product ID
sidebar_position: 6
---

## Create an Item Percent Discount with Item SKU Or Item Product ID


```http
https://useast.api.elasticpath.com/v2/rule-promotions
```
You can create rule promotions with nested conditions, where the use of `or` with `item_sku` and `item_product_id` conditions allows for flexible and effective rule management. 

For more information on how to handle item SKU and product ID together, see [Handling both Item SKU and Product ID together in Rule Promotion](/docs/rule-promotions/overview#handling-both-item-sku-and-product-id-together-in-rule-promotion).

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
        "name": "Buy at least 1 item sku OR skuless bundle get 50% discount",
        "description": "Buy at least 1 item sku OR skuless bundle get 50% discount",
        "enabled": true,
        "automatic": true,
        "rule_set": {
            "rules": {
                "strategy": "and",
                "children": [
                    {
                        "strategy": "or",
                        "children": [
                            {
                                "strategy": "item_sku",
                                "operator": "in",
                                "args": [
                                    "product-sku-1",
                                    "product-sku-2"
                                ]
                            },
                            {
                                "strategy": "item_product_id",
                                "operator": "in",
                                "args": [
                                    "product-id-1",
                                    "product-id-2"
                                ]
                            }
                        ]
                    },
                    {
                        "strategy": "item_quantity",
                        "operator": "gte",
                        "args": [
                            1
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
                    ]
                }
            ]
        },
        "start": "2024-02-01T00:00:00Z",
        "end": "2050-01-01T00:00:00Z",
    }
}
```

## Response Example

```json
{
    "data": {
        "type": "rule_promotion",
        "id": "8102a685-81c7-41a4-bf97-9a8f40ca0634",
        "store_id": "9cf58db9-f5bb-4507-b8f8-831c61e5de06",
        "name": "Buy at least 1 item sku OR skuless bundle get 50% discount",
        "description": "Buy at least 1 item sku OR skuless bundle get 50% discount",
        "enabled": true,
        "automatic": true,
        "rule_set": {
            "rules": {
                "strategy": "and",
                "children": [
                    {
                        "strategy": "or",
                        "children": [
                            {
                                "strategy": "item_sku",
                                "operator": "in",
                                "args": [
                                    "product-id-1",
                                    "product-id-2"
                                ]
                            },
                            {
                                "strategy": "item_product_id",
                                "operator": "in",
                                "args": [
                                    "product-id-1",
                                    "product-id-2"
                                ]
                            }
                        ]
                    },
                    {
                        "strategy": "item_quantity",
                        "operator": "gte",
                        "args": [
                            1
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
                    ]
                }
            ]
        },
        "start": "2024-02-01T00:00:00Z",
        "end": "2050-01-01T00:00:00Z",
        "meta": {
            "timestamps": {
                "created_at": "2024-05-02T15:43:48.084Z",
                "updated_at": "2024-05-02T15:43:48.084Z"
            }
        }
    }
}
```
