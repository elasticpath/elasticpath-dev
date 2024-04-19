---
title: Get Promotion History
nav_label: Get Promotion History
sidebar_position: 13
---

## `GET` Get Promotion History

```http
https://useast.api.elasticpath.com/v2/promotions/{{promotionId}}/history
```

## Parameters

### Path parameters

| Name          | Required | Type     | Description                      |
| ------------- | -------- | -------- | -------------------------------- |
| `promotionId` | Required | `string` | The unique promotion identifier. |

### Headers

| Name            | Required | Type     | Description                                         |
| --------------- | -------- | -------- | --------------------------------------------------- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Example

```bash
curl https://useast.api.elasticpath.com/v2/promotions/{{promotionID}}/history\
     -H "Authorization: Bearer XXXX" \
     -H "content-type: application/json" \
```

## Response Example

`200 OK`

```json
{
    "data": [
        {
            "id": "cdba9315-204f-4887-b9e7-2b142e107860",
            "type": "promotion",
            "parent_id": "cdba9315-204f-4887-b9e7-2b142e107860",
            "name": "Cart promotion v2",
            "description": "$10 off your order!",
            "enabled": false,
            "current": true,
            "promotion_type": "fixed_discount",
            "min_cart_value": [
                {
                    "currency": "USD",
                    "amount": 10000
                }
            ],
            "schema": {
                "currencies": [
                    {
                        "currency": "USD",
                        "amount": 1000
                    }
                ],
                "exclude": {
                    "targets": null
                }
            },
            "start": "2000-01-01T00:00:00Z",
            "end": "2100-01-01T00:00:00Z",
            "created_by": "seller@elasticpath.com",
            "updated_by": "another_seller@elasticpath.com",
            "meta": {
                "timestamps": {
                    "created_at": "2021-10-12T23:39:54.585Z",
                    "updated_at": "2021-10-12T23:40:22.646Z"
                }
            }
        },
        {
            "id": "a4876cef-0813-4f03-873c-c19f0c54dbaa",
            "type": "promotion",
            "parent_id": "cdba9315-204f-4887-b9e7-2b142e107860",
            "name": "Cart promotion v1",
            "description": "$10 off your order!",
            "enabled": false,
            "current": false,
            "promotion_type": "fixed_discount",
            "min_cart_value": [
                {
                    "currency": "USD",
                    "amount": 10000
                }
            ],
            "schema": {
                "currencies": [
                    {
                        "currency": "USD",
                        "amount": 1000
                    }
                ],
                "exclude": {
                    "targets": []
                }
            },
            "start": "2000-01-01T00:00:00Z",
            "end": "2100-01-01T00:00:00Z",
            "created_by": "seller@elasticpath.com",
            "updated_by": "another_seller@elasticpath.com",
            "meta": {
                "timestamps": {
                    "created_at": "2021-10-12T23:39:54.585Z",
                    "updated_at": "2021-10-12T23:40:22.639Z"
                }
            }
        }
    ],
    "links": {
        "current": "https://epcc-integration.global.ssl.fastly.net/v2/promotions/cdba9315-204f-4887-b9e7-2b142e107860/history?page[offset]=0&page[limit]=25",
        "first": "https://epcc-integration.global.ssl.fastly.net/v2/promotions/cdba9315-204f-4887-b9e7-2b142e107860/history?page[offset]=0&page[limit]=25",
        "last": "https://epcc-integration.global.ssl.fastly.net/v2/promotions/cdba9315-204f-4887-b9e7-2b142e107860/history?page[offset]=0&page[limit]=25",
        "prev": "https://epcc-integration.global.ssl.fastly.net/v2/promotions/cdba9315-204f-4887-b9e7-2b142e107860/history?page[offset]=0&page[limit]=25",
        "next": "https://epcc-integration.global.ssl.fastly.net/v2/promotions/cdba9315-204f-4887-b9e7-2b142e107860/history?page[offset]=0&page[limit]=25"
    },
    "meta": {
        "page": {
            "limit": 25,
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
