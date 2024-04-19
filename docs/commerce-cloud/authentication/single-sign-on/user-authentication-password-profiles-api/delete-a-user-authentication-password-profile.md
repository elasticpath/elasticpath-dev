---
title: Delete a User Authentication Password Profile
nav_label: Delete a User Authentication Password Profile
sidebar_position: 60
---

## `DELETE` Delete by ID

```http
https://useast.api.elasticpath.com/v2/authentication-realms/:realm-id/user-authentication-info/:user-authentication-info-id/user-authentication-password-profile-info/:user-authentication-password-profile-info
```

## Parameters

### Path parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `realm-id` | Required | `string` | The ID for the authentication-realm containing the requested `user-authentication-password-profile-info` object. |
| `user-authentication-info-id` | Required | `string` | The ID for the `user-authentication-info` object linked to the requested `user-authentication-password-profile-info` object. |
| `user-authentication-password-profile-info-id` | Required | `string` | The ID for the `user-authentication-info-password-profile-info` object. |

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Examples

### Curl

```bash
curl -X DELETE https://useast.api.elasticpath.com/v2/authentication-realms/:realm-id/user-authentication-info/:user-authentication-info-id/user-authentication-password-profile-info/:user-authentication-password-profile-info \
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
Moltin.UserAuthenticationPasswordProfile.Delete({
        realmId,
        userAuthenticationId,
        userAuthenticationPasswordProfileId
    }
  )
```

## Response Example

`204 No Content`
