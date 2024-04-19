---
title: Get Promotion Codes
nav_label: Get Promotion Codes
sidebar_position: 1
---

## `GET` Get Codes by Promotion ID

```http
https://useast.api.elasticpath.com/v2/promotions/:id/codes
```

## Parameters

### Path parameters

| Name | Required | Type     | Description                      |
| ---- | -------- | -------- | -------------------------------- |
| `id` | Required | `string` | The unique promotion identifier. |

### Headers

| Name            | Required | Type     | Description                                         |
| --------------- | -------- | -------- | --------------------------------------------------- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Query parameters

| Name            | Required | Type     | Description                                         |
| --------------- | -------- | -------- | --------------------------------------------------- |
| `filter` | Optional | `string` | Specifies the filter attributes. See [Filtering](#filtering). |

## Filtering

The following operators and attributes are available when filtering promotion codes within a specific promotion. You can apply filtering to both used and unused promotion codes.

| Attribute | Type | Operator | Example |
| ----------| ----- | -------- | ------ |
| `code` | `string` | `eq` | `eq(code,DRF8-8VSX)` |


## Request Example

```bash
curl https://useast.api.elasticpath.com/v2/promotions/:id/codes \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

## Response Example

`200 OK`

```json
{
    "data": [
        {
            "code": "ZXY_CBA"
        },
        {
            "code": "ABC_XYZ"
        }
    ]
}
```
