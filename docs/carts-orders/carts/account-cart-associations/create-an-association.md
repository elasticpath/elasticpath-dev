---
title: Create an Account-Cart Association
nav_label: Create an Account-Cart Association
sidebar_position: 3
---

You can create associations between an account and one or more carts. Once cart association is established an account, the account can access those carts across any device.

## `POST` Create an association between an account and a cart

```http
https://useast.api.elasticpath.com/v2/carts/:cartId/relationships/accounts
```

Creates an association between a cart (`:cart_id`) and an account.

## Parameters

### Path parameters

| Name     | Required | Type     | Description                                                                                                                                   |
| -------- | -------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `cartId` | Required | `string` | The ID for the cart created by the account. Ensure that you follow the guidelines for [Safe Characters](/guides/Getting-Started/api-overview/safe-characters). |

### Headers

| Name                      | Required | Type     | Description                                                                                                                                                |
| ------------------------- |----------| -------- |------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `EP-Account-Management-Authentication-Token` | Optional | `string` | An Account Management Authentication token to access a specific account's carts.                                                                           |
| `Authorization`           | Required | `string` | The Bearer token required to get access to the API. If `EP-Account-Management-Authentication-Token` is unset, the grant type must be `client_credentials`. |

### Body

| Name          | Required | Type     | Description                                               |
| ------------- | -------- | -------- | --------------------------------------------------------- |
| `type` | Required | `string` | The type of related object. Ensure that it is `account`. |
| `id`   | Required | `string` | The ID of the account.                                   |

## Request Examples

### With account token

Requires an [`implicit` token](/guides/Getting-Started/authentication/Tokens/implicit-token) with a [`account` token](/guides/Getting-Started/authentication/Tokens/account-management-authentication-token).

#### Curl

```bash
curl -X POST https://useast.api.elasticpath.com/v2/carts/:cartId/relationships/accounts \
     -H "EP-Account-Management-Authentication-Token: XXXX" \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
      "data": [{
          "type": "account",
          "id": "b3f2b6de-8fd4-4cdf-a9d9-c5f7cecccdfe"
          }]
      }
```

#### JavaScript SDK

```javascript
const accountId = "25617d3e-14a6-434c-bfab-3fda87517aaf";
const accountToken = "xxxx";

// Where `EPCC` is an authenticated client
await EPCC.Carts.AddAccountAssociation(accountId, accountToken);
```

### Without account token

Requires a [`client_credentials` token](/guides/Getting-Started/authentication/Tokens/client-credential-token).

#### Curl

```bash
curl -X POST https://useast.api.elasticpath.com/v2/carts/:cartId/relationships/accounts \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
      "data": [{
          "type": "account",
          "id": "b3f2b6de-8fd4-4cdf-a9d9-c5f7cecccdfe"
          }]
      }
```

#### JavaScript SDK

```javascript
const accountId = "25617d3e-14a6-434c-bfab-3fda87517aaf";

// Where `EPCC` is an authenticated client
await EPCC.Carts.AddAccountAssociation(accountId);
```

## Response Example

`200 OK`

```json
{
    "data": [
        {
            "type": "account",
            "id": "b3f2b6de-8fd4-4cdf-a9d9-c5f7cecccdfe"
        }
    ]
}
```

`204 No Content` is sent back in case the account has already been associated to the cart.
