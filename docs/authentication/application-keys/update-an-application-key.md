---
title: Update an Application Key
nav_label: Update an Application Key
sidebar_position: 50
---

## `PUT` Update an Application Key

```http
https://useast.api.elasticpath.com/v2/application-keys/:id
```

## Parameters

### Path parameters

| Name | Required | Type     | Description                                                 |
|:-----|:---------|:---------|:------------------------------------------------------------|
| `id` | Required | `string` | The unique identifier of the application key to be updated. |

### Headers

| Name            | Required | Type     | Description                                         |
|:----------------|:---------|:---------|:----------------------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

 Name   | Required | Type     | Description                                                             |
|:-------|:---------|:---------|:------------------------------------------------------------------------|
| `type` | Required | `string` | Represents the type of object being returned. Always `application_key`. |
| `name` | Required | `string` | Specifies the new name of the application key to be updated.            |
| `reserved_rate_limit` | Optional| `integer` | Indicates the reserved rate limit for an application key. For more information, see [Application Keys Overview](/docs/authentication/application-keys/application-keys-overview). |

## Request Example - Curl

```bash
curl -X PUT https://useast.api.elasticpath.com/v2/application-keys/:id \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
       "data":
       {
        "type": "application_key",
        "name": "New Key Name",
        "reserved_rate_limit": 15
      }
    }
```

## Response Example

`200 OK`

```json
{
    "data": {
        "id": "ba9ef8a0-075d-4a6f-b888-8fb080a1ae5d",
        "name": "New Key Name",
        "type": "application_key",
        "client_id": "d41f447c7b87eb043ad55f641c7e5e3f176e5843c2",
        "reserved_rate_limit": 15,
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
