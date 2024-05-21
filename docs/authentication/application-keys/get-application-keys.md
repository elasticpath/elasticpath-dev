---
title: Get all Application Keys
nav_label: Get all Application Keys
sidebar_position: 20
---

## `GET` Get all Application Keys

```http
https://useast.api.elasticpath.com/v2/application-keys
```

## Parameters

### Headers

| Name            | Required | Type     | Description                                         |
|:----------------|:---------|:---------|:----------------------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Example - Curl

```bash
curl -X GET https://useast.api.elasticpath.com/v2/application-keys \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

## Response Example

`200 OK`

```json
{
    "data": [
        {
            "id": "2a0949f6-661b-4a19-b0ed-e97b41e98623",
            "name": "Test keys",
            "type": "application_key",
            "client_id": "d4fcc576f661778c29fcd7b78461da8291cc6b003d",
            "reserved_rate_limit": 15,
            "meta": {
                "timestamps": {
                    "last_used_at": "2022-08-24T19:53:52.474283Z",
                    "created_at": "2022-08-24T19:53:52.474283Z",
                    "updated_at": "2022-08-24T19:53:52.474283Z"
                }
            }
        },
        {
            "id": "015b8b6d-36a0-4c7f-b216-3cf233f49b95",
            "name": "user 1",
            "type": "application_key",
            "client_id": "ada730106344ad8e62b07abe2fcef7e540014f33c2",
            "reserved_rate_limit": 0,
            "meta": {
                "timestamps": {
                    "last_used_at": "2022-08-24T20:11:54.347893Z",
                    "created_at": "2022-08-24T20:11:54.347893Z",
                    "updated_at": "2022-08-24T20:11:54.347893Z"
                }
            }
        }
    ],
    "links": {
        "current": "https://useast.api.elasticpath.com/v2/application-keys?page[offset]=25&page[limit]=0",
        "first": "https://useast.api.elasticpath.com/v2/application-keys?page[offset]=0&page[limit]=25",
        "last": "https://useast.api.elasticpath.com/v2/application-keys?page[offset]=0&page[limit]=25",
        "next": null,
        "prev": null
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
    },
        "total_reserved_rate_limit": 15
  }
}
```

