---
title: Delete a Password Profile
nav_label: Delete a Password Profile
sidebar_position: 60
---

Deleting a `password-profile` object removes all related `user-authentication-password-profile-info` objects of the `password-profile` object.

## `DELETE` Delete by ID

```http
https://useast.api.elasticpath.com/v2/authentication-realms/:realm-id/password-profiles/:profile-id
```

## Parameters

### Path parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `realm-id` | Required | `string` | The ID for the authentication-realm containing the requested password profile. |
| `profile-id` | Required | `string` | The ID for the requested password profile to delete. |

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Examples

### Curl

```bash
curl -X DELETE https://useast.api.elasticpath.com/v2/authentication-realms/:realm-id/password-profiles/:profile-id \
     -H "Authorization: Bearer XXXX"
```

### JavaScript SDK

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X'
})
const realmId = 'XXXX'
const profileId = 'XXXX'
Moltin.PasswordProfile.Delete({
      realmId,
      profileId
    }
  )
```

## Response Example

`204 No Content`
