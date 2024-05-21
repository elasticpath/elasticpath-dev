---
title: Delete a Single Rule Promotion Code
nav_label: Delete a Single Rule Promotion Code
sidebar_position: 3
---

## `DELETE` Delete a Single Rule Promotion Code

```http
https://useast.api.elasticpath.com/v2/rule-promotions/:promotionID/codes/:code
```

## Parameters

### Path parameters

| Name | Required | Type     | Description                      |
|:-----|:---------|:---------|:---------------------------------|
| `promotionID` | Required | `string` | The unique identifier of the rule promotion. |
| `code` | Required | `string` | The code that you want to delete. |

### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Example

```bash
curl https://useast.api.elasticpath.com/v2/rule-promotions/:promotionID/codes/:code \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

## Response Example

`204 No Content`
