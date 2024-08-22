---
title: Get Rule Promotions
nav_label: Get Rule Promotions
sidebar_position: 7
---

## `GET` Get Rule Promotions

```http
https://useast.api.elasticpath.com/v2/rule-promotions
```

## Parameters

### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Query parameters

| Name     | Required | Type     | Description                          |
|:---------|:---------|:---------|:-------------------------------------|
| `filter` | Optional | `string` | Filter attributes. For more information, see [Filtering](#filtering). |

## Filtering

Promotion codes are case-insenstive. You can search for codes using only `numbers` or codes containing both `string` and `numbers`.

The following operators and attributes are available when filtering on this endpoint. See [Supported Filtering Characters](/guides/Getting-Started/filtering#supported-characters).

| Attribute | Type     | Operator    | Example        |
|:--------- |:---------|:------------|:---------------|
| `code`    | `string`, `number` |  `eq`       |  `eq(code,summer2024)` |       

## Request Example

```bash
curl -X GET https://useast.api.elasticpath.com/v2/rule-promotions \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

## Response Example

`200 OK`

```json
{
    "data": [
        {
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
        },
…
}
```
