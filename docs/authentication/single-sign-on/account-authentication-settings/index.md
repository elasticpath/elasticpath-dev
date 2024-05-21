---
title: Account Authentication Settings
nav_label: Account Authentication Settings
sidebar_position: 1
---

You can use the Account Authentication Settings endpoint to retrieve settings controlling account authentication.

## The Account Authentication Settings object

| Attribute | Type | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| :--- | :-- |:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id` | `string` | The unique identifier for these account authentication settings.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `meta` | `object` | Additional information for these account authentication settings. Also see [The meta object](#the-meta-object) below.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `relationships` | `object` | Related resources. Also see [The relationships object](#the-relationships-object) below.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `type` | `string` | The type represents the object being returned.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|`enable_self_signup`|`boolean`| Set to true to enable self signup                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|`auto_create_account_for_account_members`|`boolean`| This will automatically create an account for every account member with name and legal name matching with that of the account.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|`account_member_self_management`|`string`| Whether a user with [Account Management Authentication Token](/guides/Getting%20Started/authentication/Tokens/account-management-authentication-token) can update their own account member details. By default, this is `disabled`. Set to `update_only` if you want the user to update their own account member details. The user can update their own account member details by updating [User Authentication Info](/guides/Getting%20Started/authentication/single-sign-on/user-authentication-info-api/overview) and [User Authentication Password Profile Info](/guides/Getting%20Started/authentication/single-sign-on/user-authentication-password-profiles-api/password-profile-overview).                                                                              |

## Sample Object

```json
{
    "data": {
        "id": "2c45e4ec-26e0-4043-86e4-c15b9cf985a2",
        "type": "account_authentication_settings",
        "enable_self_signup": true,
        "auto_create_account_for_account_members": true,
        "account_member_self_management": "disabled",
        "relationships": {
            "authentication_realm": {
                "data": {
                    "id": "3418c54e-d768-42c1-a9db-d7afd2a18452",
                    "type": "authentication_realm",
                    "links": {
                        "self": "https://useast.api.elasticpath.com/v2/authentication-realms/3418c54e-d768-42c1-a9db-d7afd2a18452"
                    }
                }
            }
        },
        "meta": {
            "client_id": "accounts"
        }
    }
}
```

## The `meta` object

| Attribute        | Type     | Description                                                                   |
|:-----------------|:---------|:------------------------------------------------------------------------------|
| `meta.client_id` | `string` | The client id to be used in Single Sign On authentication flows for accounts. |

## The `relationships` object

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `relationships.authentication_realm` | `object` | Relationship information regarding the authentication realm entity used for authentication for this store. |
| `relationships.authentication_realm.data` | `object` | Information regarding the authentication realm entity. |
| `relationships.authentication_realm.data.id` | `string` | The id of the authentication realm entity. |
| `relationships.authentication_realm.data.type` | `string` | The type of the authentication realm entity. |
