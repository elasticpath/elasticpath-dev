---
title: Get Rule Promotion Codes
nav_label: Get Rule Promotion Codes
sidebar_position: 1
---

## `GET` Get Rule Promotion Codes

```http
https://useast.api.elasticpath.com/v2/rule-promotions/:promotionID/codes
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
curl https://useast.api.elasticpath.com/v2/rule-promotions/:promotionID/codes \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

## Response Example

`200 OK`

```json
{
    "data": [
        {
            "id": "2282a20a-448c-4f5b-aa61-e5070355e941",
            "code": "spring2024",
            "meta": {
                "timestamps": {
                    "created_at": "2024-03-15T19:00:12.813Z"
                }
            }
        },
        {
            "id": "af3c06c1-8b5a-4a78-99a9-7a906a05897d",
            "code": "summer2024",
            "uses": 1,
            "max_uses": 1,
            "consume_unit": "per_checkout",
            "meta": {
                "timestamps": {
                    "created_at": "2024-03-20T18:58:28.738Z"
                }
            }
        }
    ],
    "links": {
        "current": "https://useast.api.elasticpath.com/v2/rule-promotions/bbd7f4c6-4766-49de-b05b-14c6a644f8f7/codes?page[offset]=0&page[limit]=10",
        "first": "https://useast.api.elasticpath.com/v2/rule-promotions/bbd7f4c6-4766-49de-b05b-14c6a644f8f7/codes?page[offset]=0&page[limit]=10",
        "last": "https://useast.api.elasticpath.com/v2/rule-promotions/bbd7f4c6-4766-49de-b05b-14c6a644f8f7/codes?page[offset]=0&page[limit]=10",
        "prev": "https://useast.api.elasticpath.com/v2/rule-promotions/bbd7f4c6-4766-49de-b05b-14c6a644f8f7/codes?page[offset]=0&page[limit]=10",
        "next": "https://useast.api.elasticpath.com/v2/rule-promotions/bbd7f4c6-4766-49de-b05b-14c6a644f8f7/codes?page[offset]=0&page[limit]=10"
    },
    "meta": {
        "page": {
            "limit": 10,
            "offset": 0,
            "current": 1,
            "total": 1
        },
        "results": {
            "total": 2
        }
    }
}
```
