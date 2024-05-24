---
title: Authentication Realms
nav_label: Authentication Realms
sidebar_position: 10
---

You can use the Authentication Realms endpoint to configure authentication options. Authentication Realm sub-resources can be used to configure single sign-on.

## The Authentication Realm Object

| Attribute                | Type                                  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| :----------------------- | :------------------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                     | `string`                              | The unique identifier for the authentication realm.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `meta`                   | [`object`](#the-meta-object)          | Additional information for this realm. For more information, see **The meta object** section.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `name`                   | `string`                              | The name of the authentication realm.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `redirect_uris`          | `array[string]`                       | An array of Storefront URIs that can start Single Sign On authentication. These URIs must follow the rules for [redirection endpoints in OAuth 2.0](https://tools.ietf.org/html/rfc6749#section-3.1.2). All URIs must start with `https://` except for `http://localhost`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `relationships`          | [`object`](#the-relationships-object) | The related resources. For more information, see **The relationships object** section.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `duplicate_email_policy` | `string`                              | The values permitted for this parameter are, `allowed` or `api_only`. In Single Sign On (SSO) each user in the Identity Provider (IdP) has a unique identifier, but different IdPs might differ in whether distinct users can share the same email address. For the `allowed` setting, when a user with a new unique identifier signs in through SSO for the first time, the system creates a new user. However, for the `api_only` setting, the system assigns the new unique identifier to the existing user in the system, in this case both the old and new unique identifier from the IdP points to the same user in Commerce. The `api_only` setting is recommended only when all configured identity providers treat e-mail address as a unique identifier for the user, otherwise a user might get access to another user’s account and data. Thus the `api_only` value can simplify administration of users. |
| `type`                   | `string`                              | The type of the object returned.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

## Response Example

```json
{
    "data": {
        "id": "40086652-2779-45f0-8ea6-ae630dfd13cb",
        "meta": {
            "created_at": "2020-11-04T21:28:50.796Z",
            "updated_at": "2020-11-04T21:28:50.796Z"
        },
        "name": "Test Authentication Realm",
        "redirect_uris": ["https://example.com"],
        "relationships": {
            "origin": {
                "data": {
                    "id": "88888888-4444-4333-8333-111111111111",
                    "type": "customer-authentication-settings"
                }
            }
        },
        "duplicate_email_policy": "allowed",
        "type": "authentication-realm"
    },
    "links": {
        "self": "https://useast.api.elasticpath.com/v2/authentication-realms/40086652-2779-45f0-8ea6-ae630dfd13cb"
    }
}
```

## The `meta` Object

| Attribute         | Type     | Description                          |
| :---------------- | :------- | :----------------------------------- |
| `meta.created_at` | `string` | The creation date of this realm.     |
| `meta.updated_at` | `string` | The last updated date of this realm. |

## The `relationships` Object

| Attribute                        | Type     | Description                                                                                                                             |
| :------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| `relationships.origin`           | `object` | Relationships information regarding the entity that created this realm.                                                                 |
| `relationships.origin.data`      | `object` | Information regarding the origin entity.                                                                                                |
| `relationships.origin.data.id`   | `string` | The ID of the origin entity.                                                                                                            |
| `relationships.origin.data.type` | `string` | The type of the origin entity. Currently only `customer-authentication-settings` is supported, however other values are still accepted. |
