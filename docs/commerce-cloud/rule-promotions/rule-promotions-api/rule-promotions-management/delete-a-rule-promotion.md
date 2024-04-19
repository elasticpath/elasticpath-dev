---
title: Delete a Rule Promotion
nav_label: Delete a Rule Promotion
sidebar_position: 9
---

## `DELETE` Delete a Rule Promotion

```http
https://useast.api.elasticpath.com/v2/rule-promotions/:promotionID
```

## Parameters

### Path parameters

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `promotionID` | Required | `string` | The unique identifier of the promotion. |

### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Example

```bash
curl -X GET https://useast.api.elasticpath.com/v2/rule-promotions:promotionID \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

## Response Example

`204 No Content`
