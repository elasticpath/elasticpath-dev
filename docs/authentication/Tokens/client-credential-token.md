---
title: Client credential token
nav_label: Client Credential
sidebar_position: 1
---

A `client_credentials` token is used when the credentials are not publicly exposed, usually a server-side language such as PHP or Node.js. This type of authentication enables `CRUD` access to all resources.

`client_id` and `client_secret` are created and managed via [Application Keys](/docs/authentication/application-keys/create-an-application-key).

To see the access granted by a `client_credentials` token, refer to [Permissions](/docs/authentication/Tokens/permissions).

## `POST` Create a client credential token

```http
https://useast.api.elasticpath.com/oauth/access_token
```

### Form data parameters

| Name            | Required | Type     | Description                                                    |
| --------------- | -------- | -------- | -------------------------------------------------------------- |
| `grant_type`    | Required | `string` | The grant type, in this case it must be **client_credentials** |
| `client_secret` | Required | `string` | Your **client_secret**                                         |
| `client_id`     | Required | `string` | Your **client_id**                                             |

## Request Examples

### Curl

```bash
curl -X POST "https://useast.api.elasticpath.com/oauth/access_token" \
     -H "Content-Type: application/json" \
     -d "client_id=XXXX" \
     -d "client_secret=XXXX" \
     -d "grant_type=client_credentials"
```

### JavaScript SDK

```javascript
import { gateway as EPCC_Gateway } from "@moltin/sdk";

const EPCC = await EPCC_Gateway({
    client_id: "DkkDs01npaexROx8fB8NpMCQIPMiYxgacjYY48J12i",
    client_secret: "eAomGPn4kT9HdTDTbpTVnpyX9NqfzRlMJnc5qBRFhF",
});
```

## Response Example

`200 OK`

```json
{
    "expires": 1524486008,
    "identifier": "client_credentials",
    "expires_in": 3600,
    "access_token": "xa3521ca621113e44eeed9232fa3e54571cb08bc",
    "token_type": "Bearer"
}
```
