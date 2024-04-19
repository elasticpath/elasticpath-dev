---
title: OpenID Connect Authentication
nav_label: OpenID Connect Authentication
sidebar_position: 12
---

Commerce provides authentication tokens for an account and an account member using OpenID Connect.

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

| Name                       | Required | Type     | Description                                                                                                                                                                                                                                                                                                                                                                                          |
|:---------------------------|:---------|:---------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `type`                     | Required | `string` | Specifies the type of the object. You must use `account_management_authentication_token`.                                                                                                                                                                                                                                                                                                            |
| `authentication_mechanism` | Required | `string` | Specifies the authentication mechanism. For an OpenID Connect login, you must use `oidc`.                                                                                                                                                                                                                                                                                                            |
| `oauth_authorization_code` | Required | `string` | Specifies the code returned from the OpenID Connect Provider authentication.                                                                                                                                                                                                                                                                                                                         |
| `oauth_redirect_uri`       | Required | `string` | Specifies the URL of the front-end that handles the callback of the token.                                                                                                                                                                                                                                                                                                                           |
| `oauth_code_verifier`      | Required | `string` | Specifies the Proof Key for Code Exchange (PKCE) code verifier corresponding to the code challenge supplied to the authorization endpoint. For more information about code verifier and challenge, see [Generating a Code Verifier and Challenge](/docs/commerce-cloud/authentication/single-sign-on/get-single-sign-on-customer-token#generate-proof-key-for-code-exchange-pkce-parameters). |

## Request Example

### Curl

```bash
curl -X POST https://useast.api.elasticpath.com/v2/account-members/tokens \
    -H "Authorization: Bearer XXXX" \
    -H "Content-Type: application/json" \
    -d $'{
       "data":{
         "type": "account_management_authentication_token",
         "authentication_mechanism": "oidc",
         "oauth_authorization_code":  "c2490f06-6d8e-4927-99aa-4bf02b419e96",
         "oauth_redirect_uri": "https://example-store.com/oauth2/callback",
         "oauth_code_verifier": "0E934PurR8ExVg6Pj7T4kQewxKzWSfSFG5d15FGfww8"
       }
    }'
```

### JavaScript SDK

```javascript
const MoltinGateway = require("@moltin/sdk").gateway;
const Moltin = MoltinGateway({
    client_id: "X",
});

const code = "XXXX";
const redirectUri = "XXXX";
const codeVerifier = "XXXX";

const body = {
    type: 'account_management_authentication_token',
    authentication_mechanism: 'oidc',
    oauth_authorization_code: code,
    oauth_redirect_uri: redirectUri,
    oauth_code_verifier: codeVerifier
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
