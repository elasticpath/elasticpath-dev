---
title: Create a User Authentication OpenID Connect Profile Info
nav_label: Create a User Authentication OpenID Connect Profile Info
sidebar_position: 40
---

## `POST` Create a User Authentication OpenID Connect Profile Info

```http
https://useast.api.elasticpath.com/v2/authentication-realms/:realm-id/user-authentication-info/:user-authentication-info-id/user-authentication-oidc-profile-info
```

## Parameters

### Path parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `realm-id` | Required | `string` | The ID for the authentication-realm containing the requested `user-authentication-oidc-profile-info` object. |
| `user-authentication-info-id` | Required | `string` | The ID for the `user-authentication-info` object that this `user-authentication-oidc-profile-info` object belongs to. |

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API.  |

### Body

| Name              | Required | Type | Description |
|-------------------| --- | --- | --- |
| `type`            | Required | `string` | The type of the object to create. It must be set to `user_authentication_oidc_profile_info`. |
| `subject`         | Required | `string` | The identifier within the issuer for the `user-authentication-info` object. For more information, see the [OpenID Connect specification](https://openid.net/specs/openid-connect-core-1_0.html#IDToken) section. |
| `issuer`          | Required | `string` | The identifier for the issuer of the oidc profile. For more information, see the [OpenID Connect specification](https://openid.net/specs/openid-connect-core-1_0.html#IDToken) section. |
| `oidc_profile_id` | Required | `string` | The identifier for the oidc profile to which  the `user-authentication-info` object should be linked. Once created, you cannot change `oidc_profile_id`. |


## Request Examples

### Curl

```bash
curl -X POST https://useast.api.elasticpath.com/v2/authentication-realms/:realm-id/user-authentication-info/:user-authentication-info-id/user-authentication-oidc-profile-info/ \
    -H "Authorization: Bearer XXXX" \
    -H "Content-Type: application/json" \
    -d $ {
     "data": {
        "type": "user_authentication_oidc_profile_info",
        "subject": "testsubject2",
        "issuer":"https://sso.provider.com/auth/realms/Sample/",
        "oidc_profile_id": "7f213d23-0a87-41b7-ad24-c58957ac7b9b"
        
     }
   }
```

### JavaScript SDK

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X'
})
const realmId = 'XXXX'
Moltin.UserAuthenticationOidcProfileInfo.Create({
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
    "id": "dc764c11-2a4b-4ab3-be71-45b06d6fec7b",
    "subject": "testsubject2",
    "issuer": "https://sso.provider.com/auth/realms/Sample/",
    "meta": {
      "created_at": "2021-06-07T18:25:02.696Z",
      "updated_at": "2021-06-07T18:25:02.696Z"
    },
    "type": "user_authentication_oidc_profile_info",
    "oidc_profile_id": "7f213d23-0a87-41b7-ad24-c58957ac7b9b"
  },
  "links": {
    "self": "https://useast.api.elasticpath.com/v2/authentication-realms/b6cf44b5-5d52-46b8-ae6f-7f28847fb269/user-authentication-info/9738663b-2f64-47e0-b70f-eecd9fb28f53/user-authentication-oidc-profile-info/dc764c11-2a4b-4ab3-be71-45b06d6fec7b"
  }
}
```
