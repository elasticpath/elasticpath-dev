---
title: Update an Authentication Realm
nav_label: Update an Authentication Realm
sidebar_position: 40
---

## `PUT` Update an Authentication Realm

```http
https://useast.api.elasticpath.com/v2/authentication-realms/:id
```

## Parameters

### Path parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `id` | Required | `string` | The ID for the requested authentication realm. |

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API.  |

### Body

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `type` | Required | `string` | The type of the object returned. |
| `name` | Optional | `string` | The name of the authentication realm. |
| `redirect_uris` | Optional | `array` | An array of Storefront URIs that can start Single Sign On authentication. These URIs must follow the rules for [redirection endpoints in OAuth 2.0](https://tools.ietf.org/html/rfc6749#section-3.1.2). All URIs must start with `https://` except for `http://localhost`. |
| `duplicate_email_policy` | Optional | `string` | The values permitted for this parameter are, `allowed` or `api_only`. In Single Sign On (SSO) each user in the Identity Provider (IdP) has a unique identifier, but different IdPs might differ in whether distinct users can share the same email address.  For the `allowed` setting, when a user with a new unique identifier signs in through SSO for the first time, the system creates a new user. However, for the `api_only` setting, the system assigns the new unique identifier to the existing user in the system, in this case both the old and new unique identifier from the IdP points to the same user in Commerce. The `api_only` setting is recommended only when all configured identity providers treat e-mail address as a unique identifier for the user, otherwise a user might get access to another user’s account and data. Thus the `api_only` value can simplify administration of users.|

## Request Example

```bash
curl -X PUT https://useast.api.elasticpath.com/v2/authentication-realms/:id \
    -H "Authorization: Bearer XXXX" \
    -H "Content-Type: application/json" \
    -d $'{
     "data": {
       "duplicate_email_policy": "allowed",
       "type": "authentication-realm",
        "name": "Updated Test Authentication Realm",
        "redirect_uris": [
            "https://example.com"
        ]
     }
   }'
```

## Response Example

`200 OK`

```json
{
    "data": {
        "id": "40086652-2779-45f0-8ea6-ae630dfd13cb",
        "meta": {
            "created_at": "2020-11-04T21:28:50.796Z",
            "updated_at": "2020-11-04T21:58:50.270Z"
        },
        "name": "Updated Test Authentication Realm",
        "redirect_uris": [
            "https://example.com"
        ],
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
