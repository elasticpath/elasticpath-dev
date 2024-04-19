---
title: Delete a User Authentication Info
nav_label: Delete a User Authentication Info
sidebar_position: 60
---

## `DELETE` Delete by ID

```http
https://useast.api.elasticpath.com/v2/authentication-realms/:realm-id/user-authentication-info/:user-authentication-info-id
```

## Parameters

### Path parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `realm-id` | Required | `string` | The ID for the authentication-realm containing the requested `user-authentication-info` object. |
| `user-authentication-info-id` | Required | `string` | The ID for the requested `user-authentication-info` object. |

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Examples

### Curl

```bash
curl -X DELETE https://useast.api.elasticpath.com/v2/authentication-realms/:realm-id/user-authentication-info/:id2 \
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
Moltin.UserAuthenticationInfo.Delete({
      realmId,
      userAuthenticationInfoId
    }
  )
```

## Response Example

`204 No Content`
