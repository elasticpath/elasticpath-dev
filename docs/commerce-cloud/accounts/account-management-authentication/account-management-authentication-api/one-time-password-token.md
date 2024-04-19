---
title: One-Time Password Token Authentication
nav_label: One-Time Password Token Authentication
sidebar_position: 15
---

Commerce provides authentication tokens for an account and an account member using a one-time password token.

## `POST` Generate an Account Management Authentication Token

```http
https://useast.api.elasticpath.com/v2/account-members/tokens
```

## Parameters

### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Name                       | Required | Type     | Description                                                                                                                                                            |
|:---------------------------|:---------|:---------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `type`                     | Required | `string` | The type of the object. You must use `account_management_authentication_token`.                                                                                        |
| `authentication_mechanism` | Required | `string` | The authentication mechanism. For logging in with a one-time password token, you must use `passwordless`.                                                                    |
| `password_profile_id`      | Required | `string` | The password profile ID. For more information, see [password profiles page](/docs/commerce-cloud/authentication/single-sign-on/password-profiles-api/overview). |
| `username`                 | Required | `string` | The username.                                                                                                                                                          |
| `one_time_password_token`                 | Required | `string` | The one-time password token.                                                                                                                                                          |

## Request Example

### Curl

```bash
curl -X POST https://useast.api.elasticpath.com/v2/account-members/tokens \
    -H "Authorization: Bearer XXXX" \
    -H "Content-Type: application/json" \
    -d $'{
       "data":{
         "type": "account_management_authentication_token",
         "authentication_mechanism": "passwordless",
         "password_profile_id": "c5687352-d102-46fd-b85e-256f10574019",
         "username":  "jane.doe@gmail.com",
         "one_time_password_token": "abd1g5",
       }
    }'
```

#### JavaScript SDK

```javascript
const MoltinGateway = require("@moltin/sdk").gateway;
const Moltin = MoltinGateway({
    client_id: "X",
});
 const body = {
      type: 'account_management_authentication_token',
      authentication_mechanism: 'passwordless',
      username,
      one_time_password_token,
      password_profile_id
    }
Moltin.AccountMembers.GenerateAccountToken(body).then((token) => {
    // Do something
});
```

## Response Example

`201 Created`

```json
{
    "meta": {
        "account_member_id": "c825bd75-c12a-4918-ad46-11ffbe3ad616",
        "page": {
            "limit": 20,
            "offset": 0,
            "current": 1,
            "total": 1
        },
        "results": {
            "total": 1
        }
    },
    "data": [
        {
            "account_name": "Personal Account",
            "account_id": "e46ca02d-c4fb-42ec-81d1-26fd1ef9fc68",
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X21lbWJlcl9zZWxmX21hbmFnZW1lbnQiOiJkaXNhYmxlZCIsImFuY2VzdG9ycyI6IiIsImV4cCI6MTY4OTc4OTAxMiwiaWF0IjoxNjg5NzAyNjEyLCJyZWFsbV9pZCI6IjI2ZThiMDQzLWFhMDgtNGFmYS1iN2IxLTVjOTI2ZjY3MDZjMiIsInNjb3BlIjoiZTQ2Y2EwMmQtYzRmYi00MmVjLTgxZDEtMjZmZDFlZjlmYzY4Iiwic3RvcmVfaWQiOiJkNWZjYzBhNC00MWMwLTQzYmQtODRjMS1jNzZjODBjMzVhN2MiLCJzdWIiOiJjODI1YmQ3NS1jMTJhLTQ5MTgtYWQ0Ni0xMWZmYmUzYWQ2MTYifQ.Ivz--cxNu8BMzXwM48FSjTI1z2732DEIIKfofRizN2o",
            "type": "account_management_authentication_token",
            "expires": "2023-07-19T17:50:12.070Z"
        }
    ],
    "links": {
        "current": "http://useast.api.elasticpath.com/v2/account-members/tokens?page[offset]=0&page[limit]=20",
        "first": "http://useast.api.elasticpath.com/v2/account-members/tokens?page[offset]=0&page[limit]=20",
        "last": "http://useast.api.elasticpath.com/v2/account-members/tokens?page[offset]=0&page[limit]=20",
        "next": "null",
        "prev": "null"
    }
}
```
