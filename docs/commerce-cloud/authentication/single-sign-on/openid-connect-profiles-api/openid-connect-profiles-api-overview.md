---
title: OpenID Connect Profiles
nav_label: OpenID Connect Profiles
sidebar_position: 10
---

An OpenID Connect Profile resource represents a specific configuration of an OpenID Connect Provider.

## The OpenID Connect Profile Object

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `client_id` | `string` | The client id to be used with the external authentication provider |
| `discovery_url` | `string` | The url of the OpenID Connect discovery document. |
| `id` | `string` | The unique identifier for this OpenID Connect profile. |
| `meta` | [`object`](#the-meta-object) | Additional information for this realm. Also see: **The meta object** below. |
| `name` | `string` | The `name` of the OpenID Connect profile. |
| `type` | `string` | The type represents the object being returned. |
| `links` | [`object`](#the-links-object) | Related links. Also see: **The links object** below. |

## Sample Object

```json
{
    "data": {
        "client_id": "openid-client",
        "discovery_url": "https://auth.ssoprovider.com/.well-known/openid-configuration",
        "id": "ed83913b-d6dc-4472-9328-bb486443de9c",
        "meta": {
            "issuer": "https://auth.ssoprovider.com",
            "created_at": "2020-11-04T21:59:58.611Z",
            "updated_at": "2020-11-04T21:59:58.611Z"
        },
        "name": "SSO Provider",
        "type": "oidc-profile"
    },
    "links": {
        "authorization-endpoint": "https://useast.api.elasticpath.com/oidc-idp/login/stores/88888888-4444-4333-8333-111111111111/authentication-realms/40086652-2779-45f0-8ea6-ae630dfd13cb?elasticpath_commerce_cloud_profile_id=ed83913b-d6dc-4472-9328-bb486443de9c",
        "callback-endpoint": "https://useast.api.elasticpath.com/oidc-idp/callback/stores/88888888-4444-4333-8333-111111111111/authentication-realms/40086652-2779-45f0-8ea6-ae630dfd13cb/oidc-profiles/ed83913b-d6dc-4472-9328-bb486443de9c",
        "client-discovery-url": "https://useast.api.elasticpath.com/oidc-idp/stores/88888888-4444-4333-8333-111111111111/authentication-realms/40086652-2779-45f0-8ea6-ae630dfd13cb/.well-known/openid-configuration",
        "self": "https://useast.api.elasticpath.com/v2/authentication-realms/40086652-2779-45f0-8ea6-ae630dfd13cb/oidc-profiles/ed83913b-d6dc-4472-9328-bb486443de9c"
    }
}
```

## The `meta` Object

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `meta.issuer` | `string` | The issuer from the discovery document of this OpenID Connect profile. |
| `meta.created_at` | `string` | The creation date of this OpenID Connect profile. |
| `meta.updated_at` | `string` | The last updated date of this OpenID Connect profile. |

## The `links` Object

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `links.authorization-endpoint` | `string` | The link that front-end applications should use to authenticate the OpenID Connect profile. The front-end application is responsible for appending all of the [required parameters](https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest) to the request. The endpoint also forwards some optional parameters, `display`, `prompt` and `ui_locales` to the configured Identity Provider. These parameters allow you to control the behavior of the authentication process on the Identity Provider. |
| `links.callback-endpoint` | `string` | The link that should be supplied as the callback URL to the upstream authentication provider. |
| `links.client-discovery-url` | `string` | The link to the [OpenID Connect Discovery](https://openid.net/specs/openid-connect-discovery-1_0.html) document for this provider. |
