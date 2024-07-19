---
title: User Authentication Info
nav_label: User Authentication Info
sidebar_position: 10
---

A `user-authentication-info` represents a user. This object contains information, such as the name and email address, and has sub-resources for each mechanism that the user can use to log in.
For example, if an [OpenID Connect Profile](/docs/authentication/single-sign-on/openid-connect-profiles-api/openid-connect-profiles-api-overview) profile is configured in the [Authentication Realm](/docs/authentication/single-sign-on/authentication-realm-api/authentication-realm-api-overview) and the user is configured to authenticate through that profile, then the `user-authentication-info` object is associated with a [User Authentication OpenID Connect Profile Info](/docs/authentication/single-sign-on/user-authentication-openid-connect-profile-api/openid-connect-profile-overview) subresource.


## The User Authentication Info Object

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | The unique identifier for the `user_authentication_info` object. |
| `name` | `string` | The name used for the `user_authentication_info` object. |
| `email` | `string` | The email address used for the `user_authentication_info` object. |
| `meta` | [`object`](#the-meta-object) | Additional information for this `user_authentication_info` object. For more information, see [The meta object](#the-meta-object) section. |
| `type` | `string` | The type of the object returned. Always `user_authentication_info`. |

## Sample Object

```json
{
  "data": {
    "id": "787af9a4-83e1-4216-bc60-df076daef0c5",
    "name": "John Doe",
    "email": "john.doe@banks.com",
    "meta": {
      "created_at": "2021-06-02T18:44:07.617Z",
      "updated_at": "2021-06-02T18:44:07.617Z",
      "creation_status": "COMPLETE"
    },
    "type": "user_authentication_info"
  },
  "links": {
    "self": "https://useast.api.elasticpath.com/v2/authentication-realms/b6cf44b5-5d52-46b8-ae6f-7f28847fb269/user-authentication-info/787af9a4-83e1-4216-bc60-df076daef0c5"
  }
}
```

## The `meta` Object

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `meta.created_at` | `string` | The creation date of this `user-authentication-info` object. |
| `meta.updated_at` | `string` | The last updated date of this `user-authentication-info` object. This value also changes if subresources such as the `user-authentication-oidc-profile-info`, or `user-authentication-password-profile-info` change. |
| `meta.creation_status` | `string` | The status of the creation of this `user-authentication-info` object. The options are `IN_PROGRESS` or `COMPLETED`. |

## Filtering

The following operators and attributes are available for [filtering](/guides/Getting-Started/filtering) user authentication infos:

| Operator | Description |
| :--- | :--- |
| `eq`     | Checks whether the values of two operands are equal. If the values are equal, the condition is true. |
| `like`   | Checks if the operand contains the specified string. You can use wildcard characters in operand. |

| Attribute | Type | Operator | Example |
| :--- | :--- | :--- | :--- |
| `name`    | `string` | `eq` / `like` | `like(name,Brad*)` |
| `email`   | `string` | `eq` / `like` | `like(email,*@elasticpath.com)` |
