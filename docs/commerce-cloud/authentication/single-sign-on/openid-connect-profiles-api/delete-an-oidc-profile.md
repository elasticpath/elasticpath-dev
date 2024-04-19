---
id: delete-an-oidc-profile
title: Delete an OpenID Connect Profile
sidebar_label: Delete an OpenID Connect Profile
---

## `DELETE` Delete by ID

```http
https://useast.api.elasticpath.com/v2/authentication-realms/:realmId/oidc-profiles/:profileId
```

## Parameters

### Path parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `realmId` | Required | `string` | The **ID** for the authentication-realm containing the requested OpenID Connect profile. |
| `profileId` | Required | `string` | The **ID** for the requested OpenID Connect profile to delete. |

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Examples

### Curl

```bash
curl -X DELETE https://useast.api.elasticpath.com/v2/authentication-realms/:realmId/oidc-profiles/:profileId \
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
Moltin.OidcProfile.Delete({
      realmId,
      profileId
    }
  )
```

## Response Example

`204 No Content`
