---
title: Delete an Account-Cart Association
nav_label: Delete an Account-Cart Association
sidebar_position: 4
---

You can delete an association between an account and a cart.

## `DELETE` Delete an Account-Cart Association

```http
https://useast.api.elasticpath.com/v2/carts/:cartId/relationships/accounts
```

Deletes an association between a cart (`:cartId`) and an account.

## Parameters

### Path parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `cartId` | Required | `string` | The ID for the cart created by the account. |

### Headers

| Name | Required | Type | Description                                                                                                                                                |
| --- |----------| --- |------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `EP-Account-Management-Authentication-Token` | Optional       | `string` | An Account Management Authentication token to access a specific account's carts.                                                                           |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. If `EP-Account-Management-Authentication-Token` is unset, the grant type must be `client_credentials`. |

### Body

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `type`| Required | `string` | The type of related object. Ensure that it is `account`. |
| `id` | Required | `string` | The ID of the account.|

## Request Examples

### With account token

Requires an [`implicit` token](/guides/Getting-Started/authentication/Tokens/implicit-token) with a [`account` token](/guides/Getting-Started/authentication/Tokens/account-management-authentication-token).

:::note
Pass the `EP-Account-Management-Authentication-Token` header to limit carts to a specific account. For more information, see [Using a token](/docs/commerce-cloud/accounts/account-management-authentication/account-management-authentication-api/username-password-authentication).
:::

```bash
curl -X DELETE https://useast.api.elasticpath.com/v2/carts/:cartId/relationships/accounts \
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

### Without account token

Requires a [`client_credentials` token](/guides/Getting-Started/authentication/Tokens/client-credential-token).

```bash
curl -X DELETE https://useast.api.elasticpath.com/v2/carts/:cartId/relationships/accounts \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
      "data": [{
          "type": "account",
          "id": "b3f2b6de-8fd4-4cdf-a9d9-c5f7cecccdfe"
          }]
      }
```

## Response Example

`204 No Content`


```json

```
