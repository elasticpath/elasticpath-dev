---
title: Delete Multiple Rule Promotion Codes
nav_label: Delete Multiple Rule Promotion Codes
sidebar_position: 4
---

## `DELETE` Delete Multiple Rule Promotion Codes

```http
https://useast.api.elasticpath.com/v2/rule-promotions/:promotionID/codes/
```

## Parameters

### Path parameters

| Name | Required | Type     | Description                      |
|:-----|:---------|:---------|:---------------------------------|
| `promotionID` | Required | `string` | The unique identifier of the rule promotion. |

### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Example

```bash
curl https://useast.api.elasticpath.com/v2/rule-promotions/:promotionID/codes/ \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
     "data": {
          "type": "promotion_codes",
     "data": {
       "type": "promotion_codes",
       "codes": [
         {
           "code": "fall2024"
         },
         {
           "code": "Winter2024"
         }
       ]
    }
```
 
## Response Example

`204 No Content`
