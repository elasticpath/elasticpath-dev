---
title: Self Sign Up Authentication
nav_label: Self Sign Up Authentication
sidebar_position: 14
---

Commerce provides authentication tokens for an account and an account member using self sign up.

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
| `authentication_mechanism` | Required | `string` | The authentication mechanism. For logging in with a username and password, you must use `self_signup`.                                                                 |
| `password_profile_id`      | Required | `string` | The password profile ID. For more information, see [password profiles page](/docs/commerce-cloud/authentication/single-sign-on/password-profiles-api/overview). |
| `username`                 | Required | `string` | The username. Should be an email. Example: joedoe@gmail.com                                                                                                            |
| `password`                 | Required | `string` | The password.                                                                                                                                                          |
| `name`                     | Required | `string` | The name. Example: Joe Doe                                                                                                                                             |
| `email`                    | Required | `string` | The email. Example: joedoe@gmail.com                                                                                                                                   |

## Request Example

### Curl

```bash
curl -X POST https://useast.api.elasticpath.com/v2/account-members/tokens \
    -H "Authorization: Bearer XXXX" \
    -H "Content-Type: application/json" \
    -d $'{
       "data":{
         "type": "account_management_authentication_token",
         "authentication_mechanism": "self_signup",
         "password_profile_id": "c5687352-d102-46fd-b85e-256f10574019",
         "username":  "username@gmail.com",
         "password": "pa$$word",
         "name": "totallylegit",
         "email": "totallylegit@gmail.com"
       }
    }'
```

### JavaScript SDK

```javascript
const MoltinGateway = require("@moltin/sdk").gateway;
const Moltin = MoltinGateway({
    client_id: "X",
});

const email = "ron@swanson.com";
const password = "mysecretpassword";
const profileId = "XXXX";
const username = "ron@swanson.com";
const name = "Ron Swanson";

 const body = {
    type: 'account_management_authentication_token',
    authentication_mechanism: 'self_signup',
    username: username,
    password: password,
    name: name,
    email: email,
    password_profile_id: profileId
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
        "page": {
            "limit": 20,
            "offset": 0,
            "current": 1,
            "total": 1
        },
        "results": {
            "total": 2
        }
    },
    "data": [
        {
            "account_name": "acc-name-1",
            "account_id": "9e227208-b592-49c0-8c8f-043b66c634b0",
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOiIyMDIxLTAzLTE2VDE5OjM2OjExLjA3MFoiLCJpYXQiOiIyMDIxLTAzLTE1VDE5OjM2OjExLjA3MFoiLCJzY29wZSI6IjFjNDVlNGVjLTI2ZTAtNDA0My04NmU0LWMxNWI5Y2Y5ODVhMyIsInN1YiI6IjFjNDVlNGVjLTI2ZTAtNDA0My04NmU0LWMxNWI5Y2Y5ODVhMiJ9.ytQ3UutTl_RJ8NiB1xN29Ta23p-FXsYOhcUM7MUQ4CM",
            "type": "account_management_authentication_token",
            "expires": "2021-03-16T19:36:11.070Z"
        },
        {
            "account_name": "acc-name-2",
            "account_id": "87acbe78-921f-4a25-84db-09dc276754ba",
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MTU5MTg3NTksImlhdCI6MTYxNTkxODc0NCwic2NvcGUiOiI5N2FjYmU3OC05MjFmLTRhMjUtODRkYi0wOWRjMjc2NzU0YmEiLCJzdWIiOiI5N2FjYmU3OC05MjFmLTRhMjUtODRkYi0wOWRjMjc2NzU0YmEifQ.NphZBSWYxfl3-odXOxD0l6Zj7E9HxOG7qp34Sizm0WU",
            "type": "account_management_authentication_token",
            "expires": "2021-03-16T18:19:19.070Z"
        }
    ],
    "links": {
        "current": "https://useast.api.elasticpath.com/v2/account-members/tokens?page[offset]=0&page[limit]=20",
        "first": "https://useast.api.elasticpath.com/v2/account-members/tokens?page[offset]=0&page[limit]=20",
        "last": "https://useast.api.elasticpath.com/v2/account-members/tokens?page[offset]=0&page[limit]=20",
        "next": "null",
        "prev": "null"
    }
}
```
