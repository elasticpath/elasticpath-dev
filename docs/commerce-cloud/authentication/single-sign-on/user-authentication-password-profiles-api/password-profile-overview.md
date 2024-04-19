---
title: User Authentication Password Profile Infos
nav_label: User Authentication Password Profile Infos
sidebar_position: 10
---

The `user-authentication-password-profile-info` object is the information object about the relationship between a `user-authentication-info` and a `password-profile` object.

## The User Authentication Password Profile Info Object

| **Attribute**         | **Type** | **Description** |
|:----------------------| :--- | :--- |
| `id`                  | `string` | The unique identifier for the `user-authentication-password-profile-info` object. |
| `username`            | `string` | The username used to authenticate. |
| `password`            | `string` | The password used to authenticate. You can only update the password. You cannot view the password. |
| `meta`                | [`object`](#the-meta-object) | Additional information for the `user-authentication-password-profile-info` object. For more information, see **The meta object** section. |
| `type`                | `string` | The type of the object returned. |
| `password_profile_id` | `string` | The identifier for the `password_profile` object that the `user-authentication-password-profile-info` object is linked to. |

## Sample Object

```json
{
    "data": {
        "id": "2b2dd626-9960-40c6-a9f9-d4af96eed3fb",
        "username": "john.doe",
        "meta": {
            "created_at": "2021-06-07T15:58:08.198Z",
            "updated_at": "2021-06-07T15:58:08.198Z"
        },
        "type": "user_authentication_password_profile_info",
        "password_profile_id": "a760a1f3-5680-420e-bcc4-a924de8b1a11"
    },
    "links": {
        "self": "https://useast.api.elasticpath.com/authentication-realms/12b33a5d-b536-47a8-987d-9cdba15f1647/user-authentication-info/a9dc5358-c3ee-44f9-a36c-3057213e750d/user-authentication-password-profile-info/2b2dd626-9960-40c6-a9f9-d4af96eed3fb"
    }
}
```

## The `meta` Object

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `meta.created_at` | `string` | The creation date of this `user-authentication-password-profile-info` object. |
| `meta.updated_at` | `string` | The last updated date of this `user-authentication-password-profile-info` object. |
