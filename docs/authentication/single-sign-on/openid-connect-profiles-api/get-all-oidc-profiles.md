---
title: Get all OpenID Connect Profiles
nav_label: Get all OpenID Connect Profiles
sidebar_position: 20
---

## `GET` Get a list of OpenID Connect Profiles

```http
https://useast.api.elasticpath.com/v2/authentication-realms/:realmId/oidc-profiles/
```

:::note
You can use pagination with this resource. For more information, see [pagination](/guides/Getting-Started/pagination).
:::

## Parameters

### Path parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `realmId` | Required | `string` | The **ID** for the authentication-realm containing the OpenID Connect profiles. |

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Examples

### Curl

```bash
curl -X GET https://useast.api.elasticpath.com/v2/authentication-realms/:realmId/oidc-profiles/ \
     -H "Authorization: Bearer XXXX"
```

### JavaScript SDK

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X'
})
const realmId = 'XXXX'
Moltin.OidcProfile.All(realmId, null)
```

## Response Example

`200 OK`

```json
{
    "data": [
        {
            "client_id": "openid-client",
            "discovery_url": "https://auth.ssoprovider.com/.well-known/openid-configuration",
            "id": "ed83913b-d6dc-4472-9328-bb486443de9c",
            "links": {
                "authorization-endpoint": "https://useast.api.elasticpath.com/oidc-idp/login/stores/88888888-4444-4333-8333-111111111111/authentication-realms/40086652-2779-45f0-8ea6-ae630dfd13cb?elasticpath_commerce_cloud_profile_id=ed83913b-d6dc-4472-9328-bb486443de9c",
                "callback-endpoint": "https://useast.api.elasticpath.com/oidc-idp/callback/stores/88888888-4444-4333-8333-111111111111/authentication-realms/40086652-2779-45f0-8ea6-ae630dfd13cb/oidc-profiles/ed83913b-d6dc-4472-9328-bb486443de9c",
                "client-discovery-url": "https://useast.api.elasticpath.com/oidc-idp/stores/88888888-4444-4333-8333-111111111111/authentication-realms/40086652-2779-45f0-8ea6-ae630dfd13cb/.well-known/openid-configuration",
                "self": "https://useast.api.elasticpath.com/v2/authentication-realms/40086652-2779-45f0-8ea6-ae630dfd13cb/oidc-profiles/ed83913b-d6dc-4472-9328-bb486443de9c"
            },
            "meta": {
                "issuer": "https://auth.ssoprovider.com",
                "created_at": "2020-11-04T21:59:58.611Z",
                "updated_at": "2020-11-04T21:59:58.611Z"
            },
            "name": "SSO Provider",
            "type": "oidc-profile"
        },
        {
            "client_id": "openid-client",
            "discovery_url": "https://auth.ssoprovider2.com/.well-known/openid-configuration",
            "id": "4294950f-78e6-43a5-ac55-3630e267c3fb",
            "links": {
                "authorization-endpoint": "https://useast.api.elasticpath.com/oidc-idp/login/stores/88888888-4444-4333-8333-111111111111/authentication-realms/40086652-2779-45f0-8ea6-ae630dfd13cb?elasticpath_commerce_cloud_profile_id=4294950f-78e6-43a5-ac55-3630e267c3fb",
                "callback-endpoint": "https://useast.api.elasticpath.com/oidc-idp/callback/stores/88888888-4444-4333-8333-111111111111/authentication-realms/40086652-2779-45f0-8ea6-ae630dfd13cb/oidc-profiles/4294950f-78e6-43a5-ac55-3630e267c3fb",
                "client-discovery-url": "https://useast.api.elasticpath.com/oidc-idp/stores/88888888-4444-4333-8333-111111111111/authentication-realms/40086652-2779-45f0-8ea6-ae630dfd13cb/.well-known/openid-configuration",
                "self": "https://useast.api.elasticpath.com/v2/authentication-realms/40086652-2779-45f0-8ea6-ae630dfd13cb/oidc-profiles/4294950f-78e6-43a5-ac55-3630e267c3fb"
            },
            "meta": {
                "issuer": "https://auth.ssoprovider2.com",
                "created_at": "2020-11-04T22:12:12.155Z",
                "updated_at": "2020-11-04T22:12:12.155Z"
            },
            "name": "SSO Provider 2",
            "type": "oidc-profile"
        }
    ],
    "links": {
        "current": "https://useast.api.elasticpath.com/v2/authentication-realms/40086652-2779-45f0-8ea6-ae630dfd13cb/oidc-profiles/?page%5Blimit%5D=10&page%5Boffset%5D=0",
        "first": "https://useast.api.elasticpath.com/v2/authentication-realms/40086652-2779-45f0-8ea6-ae630dfd13cb/oidc-profiles/?page%5Blimit%5D=10&page%5Boffset%5D=0",
        "last": "https://useast.api.elasticpath.com/v2/authentication-realms/40086652-2779-45f0-8ea6-ae630dfd13cb/oidc-profiles/?page%5Blimit%5D=10&page%5Boffset%5D=0",
        "next": null,
        "prev": null
    },
    "meta": {
        "page": {
            "current": 1,
            "limit": 10,
            "offset": 0,
            "total": 1
        },
        "results": {
            "total": 2
        }
    }
}
```
