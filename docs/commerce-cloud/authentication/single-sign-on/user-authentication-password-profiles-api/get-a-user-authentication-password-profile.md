---
title: Get a User Authentication Password Profile
nav_label: Get a User Authentication Password Profile
sidebar_position: 30
---

## `GET` Get by ID

```http
https://useast.api.elasticpath.com/v2/authentication-realms/:realm-id/user-authentication-info/:user-authentication-info-id/user-authentication-password-profile-info/:user-authentication-password-profile-info-id
```

## Parameters

### Path parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `realm-id` | Required | `string` | The ID for the authentication-realm containing the requested `user-authentication-password-profile-info` object. |
| `user-authentication-info-id` | Required | `string` | The ID for the `user-authentication-info` linked to the requested `user-authentication-password-profile-info` object. |
| `user-authentication-password-profile-info-id` | Required | `string` | The ID for the `user-authentication-password-profile-info` object. |

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Examples

### Curl

```bash
curl -X GET https://useast.api.elasticpath.com/v2/authentication-realms/:realm-id/user-authentication-info/:user-authentication-info-id/user-authentication-password-profile-info/:user-authentication-password-profile-info \
     -H "Authorization: Bearer XXXX"
```

### JavaScript SDK

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X'
})
const realmId = 'XXXX'
const userAuthenticationInfoId = 'XXXX'
const userAuthenticationPasswordProfileId = 'XXXX'
Moltin.UserAuthenticationPasswordProfile.Get({
        realmId,
        userAuthenticationId,
        userAuthenticationPasswordProfileId
    }
  )
```

## Response Example

`200 OK`

```json
{
    "data": {
        "id": "2b2dd626-9960-40c6-a9f9-d4af96eed3fb",
        "username": "john.doe",
        "meta": {
            "created_at": "2021-06-07T15:58:08.198Z",
            "updated_at": "2021-06-07T15:58:08.198Z"
        },
        "type": "user_authentication_password_profile_info",
        "password_profile_id": "a760a1f3-5680-420e-bcc4-a924de8b1a11"
    },
    "links": {
        "self": "https://useast.api.elasticpath.com/authentication-realms/12b33a5d-b536-47a8-987d-9cdba15f1647/user-authentication-info/a9dc5358-c3ee-44f9-a36c-3057213e750d/user-authentication-password-profile-info/2b2dd626-9960-40c6-a9f9-d4af96eed3fb"
    }
}
```
