---
title: Create a User Authentication Info
nav_label: Create a User Authentication Info
sidebar_position: 40
---

## `POST` Create a User Authentication Info

```http
https://useast.api.elasticpath.com/v2/authentication-realms/:realm-id/user-authentication-info
```

## Parameters

### Path parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `realm-id` | Required | `string` | The ID for the authentication-realm containing the requested `user-authentication-info` object. |

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API.  |

### Body

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `name` | Required |`string` | The name used for the `user_authentication_info`. |
| `email` | Required | `string` | The email used for the `user_authentication_info`. |
| `type` | Required |`string` | The type of the object to create. Always `user_authentication_info`.  |

## Request Examples

### Curl

```bash
curl -X POST https://useast.api.elasticpath.com/v2/authentication-realms/:realm-id/user-authentication-info/ \
    -H "Authorization: Bearer XXXX" \
    -H "Content-Type: application/json" \
    -d $'{
     "data": {
       "type": "user_authentication_info",
        "name": "John Doe",
        "email": "john.doe@banks.com"
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
Moltin.UserAuthenticationInfo.Create({
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
    "id": "787af9a4-83e1-4216-bc60-df076daef0c5",
    "name": "John Doe",
    "email": "john.doe@banks.com",
    "meta": {
      "created_at": "2021-06-02T18:44:07.617Z",
      "updated_at": "2021-06-02T18:44:07.617Z",
      "creation_status": "COMPLETE"
    },
    "type": "user_authentication_info"
  },
  "links": {
    "self": "https://useast.api.elasticpath.com/v2/authentication-realms/b6cf44b5-5d52-46b8-ae6f-7f28847fb269/user-authentication-info/787af9a4-83e1-4216-bc60-df076daef0c5"
  }
}
```
