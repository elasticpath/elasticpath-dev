---
title: User Authentication OpenID Connect Profile Info
nav_label: User Authentication OpenID Connect Profile Info
sidebar_position: 10
---

`user-authentication-oidc-profile-info` is the information object about the relationship between a [User Authentication Info](/docs/authentication/single-sign-on/user-authentication-info-api/overview) and an [OpenID Connect Profile](/docs/authentication/single-sign-on/openid-connect-profiles-api/openid-connect-profiles-api-overview).

## The User Authentication OpenID Connect Profile Info Object

| Attribute         | Type | Description |
|:------------------| :--- | :--- |
| `id`              | `string` | The unique identifier for the `user-authentication-oidc-profile-info` object. |
| `subject`         | `string` | The identifier within the issuer for the `user-authentication-info` object. For more information, see the [OpenID Connect specification](https://openid.net/specs/openid-connect-core-1_0.html#IDToken) section. |
| `issuer`          | `string` | The identifier for the issuer of the ID Token. For more information, see the [OpenID Connect specification](https://openid.net/specs/openid-connect-core-1_0.html#IDToken) section. |
| `meta`            | [`object`](#the-meta-object) | Additional information for this `user-authentication-oidc-profile-info` object. For more information, see **The meta object** section. |
| `type`            | `string` | The type of the object returned. |
| `oidc_profile_id` | `string` | The identifier for the OpenID Connect Profile that the `user-authentication-info` object is linked to. |

## Sample Object

```json
{
  "data": {
    "id": "dc764c11-2a4b-4ab3-be71-45b06d6fec7b",
    "subject": "testsubject2",
    "issuer": "https://sso.provider.com/auth/realms/Sample/",
    "meta": {
      "created_at": "2021-06-07T18:25:02.696Z",
      "updated_at": "2021-06-07T18:25:02.696Z"
    },
    "type": "user_authentication_oidc_profile_info",
    "oidc_profile_id": "7f213d23-0a87-41b7-ad24-c58957ac7b9b"
  },
  "links": {
    "self": "https://useast.api.elasticpath.com/v2/authentication-realms/b6cf44b5-5d52-46b8-ae6f-7f28847fb269/user-authentication-info/9738663b-2f64-47e0-b70f-eecd9fb28f53/user-authentication-oidc-profile-info/dc764c11-2a4b-4ab3-be71-45b06d6fec7b"
  }
}
```

## The `meta` Object

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `meta.created_at` | `string` | The creation date of this `user-authentication-oidc-profile-info` object. |
| `meta.updated_at` | `string` | The last updated date of this `user-authentication-oidc-profile-info` object. |
