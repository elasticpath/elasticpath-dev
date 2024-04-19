---
title: Implicit token
nav_label: Implicit
sidebar_position: 2
---

An `implicit` token is typically used for situations where you are requesting data on the client side and you are exposing your public key. When authenticated implicitly, you can only fetch (`GET`) data with live status (products, categories, brands, etc).

The `implicit` token is most appropriate for use inside client-side applications, such as JavaScript.

:::caution
An `implicit` token can be thought of as a **Read only** token.
:::

## `POST` Create an implicit token

```http
https://useast.api.elasticpath.com/oauth/access_token
```

### Form data parameters

| Name         | Required | Type     | Description                                          |
| ------------ | -------- | -------- | ---------------------------------------------------- |
| `client_id`  | Required | `string` | Your **client_id**                                   |
| `grant_type` | Required | `string` | The grant type, in this case it must be **implicit** |

## Request Examples

### Curl

```bash
curl -X POST "https://useast.api.elasticpath.com/oauth/access_token" \
     -H "Content-Type: application/json" \
     -d "client_id=XXXX" \
     -d "grant_type=implicit"

```

### JavaScript SDK

```javascript
import { gateway as EPCC_Gateway } from "@moltin/sdk";

const EPCC = await EPCC_Gateway({
    client_id: "DkkDs01npaexROx8fB8NpMCQIPMiYxgacjYY48J12i",
});
```

## Response Example

`200 OK`

```json
{
    "expires": 1524486008,
    "identifier": "implicit",
    "expires_in": 3600,
    "access_token": "xa3521ca621113e44eeed9232fa3e54571cb08bc",
    "token_type": "Bearer"
}
```
