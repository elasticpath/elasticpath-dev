---
title: Authentication API Overview
nav_label: Authentication API Overview
sidebar_position: 10
---

All requests to the API need to be accompanied by an authorization header with an authentication token:

```json
Authorization: Bearer 212LJ3k0i2382364HIUEjfeJB98yvH
```

Authentication token gives permissions for the client to access their data, and is used to authenticate a request to the API endpoint.

:::note
Read our [Quick Start guide](/guides/Getting-Started/your-first-api-request) on how to make your first API request.
:::

Authentication tokens are generated via the `authentication` endpoint and expire within 1 hour. They need to be then regenerated. If you’re using our [JavaScript SDK](https://github.com/moltin/js-sdk), this is automatically handled for you.

There are two main token types available for use within your store `client_credentials` and `implicit`. The [implicit token](/docs/authentication/Tokens/implicit-token) is the more limited of the two, restricting access to mostly read-only, whereas [client credential token](/docs/authentication/Tokens/client-credential-token) has full read and write access.

For more details on token formatting, see [Content Type](/guides/Getting-Started/content-type).

:::caution
Do not use or disclose your `client_secret` in public.
:::

## Attributes

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `expires` | `timestamp` | The epoch time that this token expires at. |
| `identifier` | `string` | The type of token requested. This can be a `client_credentials` or `implicit`. |
| `expires_in` | `integer` | The duration in seconds after which the token expires. |
| `access_token` | `string` | The access token you use for subsequent authenticated requests to the API. |
| `token_type` | `string` | Right now this is only `Bearer`. |

## Sample Response

```json
{
  "expires": 1500638876,
  "identifier": "client_credentials",
  "expires_in": 3600,
  "access_token": "xa3521ca621113e44eeed9232fa3e54571cb08bc",
  "token_type": "Bearer"
}

```

## Client Credentials vs. Implicit Use Case Scenarios

Typically, you would use the implicit authentication method for client-side browser based applications (i.e. frontend), and client credentials for all administrative tasks (`CRUD`) you need to perform at the backend.

## Account Authentication
You can also generate [account tokens](/docs/api/accounts/post-v-2-account-members-tokens) to authenticate account members (shoppers) with one of many available authentication methods. You must use account management authentication token with the implicit token to access orders or account APIs. Using the tokens, you can create and filter orders and addresses.

## Customer Authentication

You can also generate [customer tokens](/docs/customer-management/customer-management-api/customer-tokens#post-generate-a-token) to authenticate the customers with single sign-on, or email address and password. You must use customer token with the implicit token to access orders or customer APIs. Using the tokens, you can create and filter orders and addresses.
