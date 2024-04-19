---
title: Account Members API Overview
nav_label: Account Members API Overview
sidebar_position: 10
---

An `Account Member` resource is a user that you can add to accounts using [account memberships](/docs/commerce-cloud/accounts/using-account-membership-api/overview).

Account members API is read only, and you cannot add users using this API. You must use the [`user_authentication_info`](/docs/commerce-cloud/authentication/single-sign-on/user-authentication-info-api/overview) object to create users in the [authentication realm](/docs/commerce-cloud/authentication/single-sign-on/authentication-realm-api/authentication-realm-api-overview) of [account authentication settings](/docs/commerce-cloud/authentication/single-sign-on/account-authentication-settings). For more information on adding account members, see the [adding accounts and account members](/docs/commerce-cloud/accounts/add-account-and-member) section.

## The Account Members Object

| Attribute | Type | Description |
| --- |--- | --- |
| `id` | `string` | The unique identifier for the selected account member. |
| `type` | `string` | The type of the object that is returned. |
| `name` | `string` | The name of the account member. |
| `email` | `string` | The email address of the account member. |

### Sample response

```json
{
  "data": {
    "id": "0ff71321-f7ae-4400-abc2-d7919a78d429",
    "type": "account_member",
    "name": "John Smith",
    "email": "john@smith.com"
  },
  "links": {
    "self": "https://useast.api.elasticpath.com/v2/account-members/0ff71321-f7ae-4400-abc2-d7919a78d429"
  }
}
```
