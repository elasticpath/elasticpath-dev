---
title: Create a Password Profile
nav_label: Create a Password Profile
sidebar_position: 40
---

## `POST` Create a Password Profile

```http
https://useast.api.elasticpath.com/v2/authentication-realms/:realm-id/password-profiles
```

## Parameters

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API.  |

### Body

| Name                            | Required | Type | Description                                                                                                                                                                                                                                                                      |
| --- | --- | --- | --- |
| `type`                          | Required | `string` | Represents the type of object being returned. You must use `password_profile`.                                                                                                                                                                                                   |
| `username_format`                | Required | `string` | Represents the password profile format. The options are, `any` or `email`. With the `any` setting, you can provide usernames in any format including email address. With the `email` setting, you can only provide email address as the username. The default  setting is `any`. |
| `name`                          | Required | `string` | Specifies the name of the password profile.                                                                                                                                                                                                                                      |
| `enable_one_time_password_token` | Optional |  `boolean` | Set to `true` to enable one-time password token requests and events. The default value is `false`.                                                                                                                                                                                                    |

## Request Examples

### Curl

```bash
curl -X POST https://useast.api.elasticpath.com/v2/authentication-realms/:realm-id/password-profiles/ \
    -H "Authorization: Bearer XXXX" \
    -H "Content-Type: application/json" \
    -d $'{
     "data": {
        "type": "password_profile",
        "username_format": "email" ,
        "name" : "password profile",
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
Moltin.PasswordProfile.Create({
      realmId,
      body
    }
  )
```

## Response Example

`201 Created`


```json
{
    "data": {
        "meta": {
            "created_at": "2021-06-03T21:12:14.896Z",
            "updated_at": "2021-06-03T21:12:14.896Z"
        },
        "type": "password_profile",
        "id": "0a6f5f8a-3a61-4ad1-9ea1-60fd1aa71243",
        "username_format": "email",
        "name": "password profile",
        "enable_one_time_password_token" : true
    },
    "links": {
        "self": "http://useast.api.elasticpath.com/v2/authentication-realms/c624ab3d-44f0-49cc-bff7-446ff39a24f0/password-profiles/0a6f5f8a-3a61-4ad1-9ea1-60fd1aa71243"
    }
}
```
