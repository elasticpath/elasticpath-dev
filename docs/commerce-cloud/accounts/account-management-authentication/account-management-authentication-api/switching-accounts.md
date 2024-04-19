---
title: Switching Accounts
nav_label: Switching Accounts
sidebar_position: 16
---

Commerce provides authentication tokens for an account and an account member when switching accounts.

## `POST` Generate an Account Management Authentication Token

```http
https://useast.api.elasticpath.com/v2/account-members/tokens
```

## Parameters

### Headers

| Name                                         | Required | Type     | Description |
|:---------------------------------------------|:---------|:---------|:--------|
| `Authorization`                              | Required | `string` | The Bearer token required to get access to the API. |
| `EP-Account-Management-Authentication-Token` | Required | `string` | A previously issued account management authentication token. |

### Body

| Name                       | Required | Type     | Description               |
|:---------------------------|:---------|:---------|:--------------------------|
| `type`                     | Required | `string` | Specifies the type of the object. You must use `account_management_authentication_token`. |
| `authentication_mechanism` | Required | `string` | Specifies the authentication mechanism. You must use `account_management_authentication_token`. |

## Request Example

### Curl

```bash
curl -X POST https://useast.api.elasticpath.com/v2/account-members/tokens/ \
    -H "Authorization: Bearer XXXX" \
    -H "Content-Type: application/json" \
    -H "EP-Account-Management-Authentication-Token: XXXX"
    -d $'{
        "data": {
            "type": "account_management_authentication_token",
            "authentication_mechanism": "account_management_authentication_token"
          }
    }'
```

### JavaScript SDK

```javascript
const MoltinGateway = require("@moltin/sdk").gateway;
const Moltin = MoltinGateway({
    client_id: "X",
});
const token = "XXXX";
const body = {
    type: 'account_management_authentication_token',
    authentication_mechanism: 'account_management_authentication_token'
}
Moltin.AccountMembers.GenerateAccountToken(body,token).then((token) => {
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
