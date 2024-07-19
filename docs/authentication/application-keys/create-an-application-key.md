---
title: Create an Application Key
nav_label: Create an Application Key
sidebar_position: 30
---

## `POST` Create an Application Key

```http
https://useast.api.elasticpath.com/v2/application-keys
```

## Parameters

### Headers

| Name            | Required | Type     | Description                                         |
|:----------------|:---------|:---------|:----------------------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

 Name   | Required | Type     | Description                                                             |
|:-------|:---------|:---------|:------------------------------------------------------------------------|
| `type` | Required | `string` | Represents the type of object being returned. Always `application_key`. |
| `name` | Required | `string` | Specifies the name of the application key to be created. |
| `reserved_rate_limit` | Optional| `integer` | Indicates the reserved rate limit for an application key. For more information, see [Application Keys Overview](/docs/authentication/application-keys/application-keys-overview). |

## Request Example - Curl

```bash
curl -X POST https://useast.api.elasticpath.com/v2/application-keys \
     -H "Authorization: Bearer XXXX"
     -H "Content-Type: application/json" \
     -d $ {
       "data":
       {
        "type": "application_key",
        "name": "Test keys",
        "reserved_rate_limit": 15
      }
}
```

## Response Example

`201 Created`

```json
{
    "data": {
        "id": "2a0949f6-661b-4a19-b0ed-e97b41e98623",
        "name": "Test keys",
        "type": "application_key",
        "client_id": "d4fcc576f661778c29fcd7b78461da8291cc6b003d",
        "client_secret": "8c52f85e3d6915e76f97139bdd71780f4ce0a8f13a",
        "reserved_rate_limit": 15,
        "meta": {
            "timestamps": {
                "last_used_at": "2022-08-24T19:53:52.474283337Z",
                "created_at": "2022-08-24T19:53:52.474283337Z",
                "updated_at": "2022-08-24T19:53:52.474283337Z"
            }
        }
    },
    "links": {
        "self": "https://useast.api.elasticpath.com/v2/application-keys/2a0949f6-661b-4a19-b0ed-e97b41e98623"
    }
}
```
