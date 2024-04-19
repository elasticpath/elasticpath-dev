---
title: Get an Application Key
nav_label: Get an Application Key
sidebar_position: 21
---

## `GET` Get an Application Key

```http
https://useast.api.elasticpath.com/v2/application-keys/:id
```

## Parameters

### Path Parameters

| Name | Required | Type     | Description                                                   |
|:-----|:---------|:---------|:--------------------------------------------------------------|
| `id` | Required | `string` | The unique identifier of the application key to be retrieved. |

### Headers

| Name            | Required | Type     | Description                                         |
|:----------------|:---------|:---------|:----------------------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Example - Curl

```bash
curl -X GET https://useast.api.elasticpath.com/v2/application-keys/:id \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

## Response Example

`200 OK`

```json
{
    "data": {
        "id": "ba9ef8a0-075d-4a6f-b888-8fb080a1ae5d",
        "name": "New key 2",
        "type": "application_key",
        "client_id": "d41f447c7b87eb043ad55f641c7e5e3f176e5843c2",
        "reserved_rate_limit": 0,
        "meta": {
            "timestamps": {
                "last_used_at": "2022-10-11T12:44:16.309Z",
                "created_at": "2022-10-11T12:44:16.309Z",
                "updated_at": "2022-10-11T12:44:16.309Z"
            }
        }
    },
    "links": {
        "self": "https://useast.api.elasticpath.com/v2/application-keys/ba9ef8a0-075d-4a6f-b888-8fb080a1ae5d"
    }
}
```
