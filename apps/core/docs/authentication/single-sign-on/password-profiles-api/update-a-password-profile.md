---
title: Update a Password Profile
nav_label: Update a Password Profile
sidebar_position: 50
---


## `PUT` Update a Password Profile

```http
https://useast.api.elasticpath.com/v2/authentication-realms/:realm-id/password-profiles/:profile-id
```

## Parameters

### Path parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `realm-id` | Required | `string` | The ID for the authentication-realm containing the password profile. |
| `profile-id` | Required | `string` | The ID for the requested password profile. |

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API.  |

### Body

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `type` | Required | `string` | Represents the type of object being returned. You must use `password_profile`. |
| `username_format` | Required | `string` | The passport profile format. The options are `any` or `email`. |
| `name` | Required | `string` | The name of the passport profile. |
| `enable_one_time_password_token` | Optional |  `boolean` | Set to true to enable one time password token requests and events.                                                                                                                                                                                                                 |

## Request Examples

### Curl

```bash
curl -X PUT https://useast.api.elasticpath.com/v2/authentication-realms/:realm-id/password-profiles/:profile-id \
    -H "Authorization: Bearer XXXX" \
    -H "Content-Type: application/json" \
    -d $'{
     "data": {
        "type": "password_profile",
        "username_format": "any",
        "name": "password profile",
        "enable_one_time_password_token" : true
     }
   }'
```

### JavaScript SDK

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X'
})
const realmId = 'XXXX'
const profileId = 'XXXX'
Moltin.PasswordProfile.Update({
      realmId,
      profileId,
      body
    }
  )
```

## Response Example

`200 OK`

```json
{
    "data": {
        "meta": {
            "created_at": "2021-06-03T21:12:14.896Z",
            "updated_at": "2021-06-03T21:19:30.169Z"
        },
        "type": "password_profile",
        "id": "0a6f5f8a-3a61-4ad1-9ea1-60fd1aa71243",
        "username_format": "any",
        "name": "password profile",
        "enable_one_time_password_token" : true
    },
    "links": {
        "self": "http://useast.api.elasticpath.com/v2/authentication-realms/c624ab3d-44f0-49cc-bff7-446ff39a24f0/password-profiles/0a6f5f8a-3a61-4ad1-9ea1-60fd1aa71243"
    }
}
```
