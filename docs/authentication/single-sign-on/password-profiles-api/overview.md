---
title: Password Profiles
nav_label: Password Profiles
sidebar_position: 10
---

A `password_profile` resource represents a specific configuration that allows users to authenticate through username and password.

Password Profiles support One Time Password Tokens, that can be used to use passwordless login, or password reset.

An authentication realm can have multiple Password Profiles. You can use this flexibility in many ways, for instance if you want to migrate an existing pool of users from another system with their own usernames and passwords, they can use one profile, and the rest of the users another. 

Another use case is to allow admin impersonation, by allowing shoppers to authenticate using the username and passwords in one profile, and then have admins know a different username and password for a user in a different profile, shown as the "Impersonation Profile" this can be automated with a Backend-For-Frontend (BFE) or using One Time Password Tokens. In the example shown below, both John and Joan can login themselves. In addition, an admin can login as Joan using the "Impersonation Profile".

![password profiles](/assets/password-profiles.png)


## The Password Profile object

| Attribute | Type    | Description                |
| ----------|---------|----------------------------|
| `id`      | `string` |  The unique identifier for this password profile. |
| `meta`    | `object` | Additional information for this password profile. For more information, see [The meta object](#the-meta-object). |
| `username_format` | `string` | The `username_format` of the password profile. You can change the `username-format` setting. However, the changes apply only to the users created or updated after changing this setting. The new setting does not change the `username_format` for existing users. The options are: <ul><li>`any`</li><li>`email`</li></ul>|
| `name` | `string` | The name of the password profile. |
| `type` | `string` | The type of object returned. You must use `password_profile`. |
| `enable_one_time_password_token` | `boolean` | This enables one time password token requests and events for authentication. This feature is disabled by default. |

## Sample Object

```json
{
    "data": {
        "meta": {
            "created_at": "2021-06-03T20:21:04.579Z",
            "updated_at": "2021-06-03T20:21:04.579Z"
        },
        "type": "password_profile",
        "id": "cfec5b5b-abc8-4c49-8247-495b511607fc",
        "username_format": "email",
        "name": "password profile",
        "enable_one_time_password_token" : true
    },
    "links": {
        "self": "http://useast.api.elasticpath.com/v2/authentication-realms/c624ab3d-44f0-49cc-bff7-446ff39a24f0/password-profiles/cfec5b5b-abc8-4c49-8247-495b511607fc"
    }
}
```

## The `meta` Object

| **Attribute** | **Type** | **Description** |
| :--- | :--- | :--- |
| `meta.created_at` | `string` | The creation date of this password profile. |
| `meta.updated_at` | `string` | The last updated date of this password profile. |
