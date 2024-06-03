---
title: Get Account Authentication Settings
nav_label: Get Account Authentication Settings
sidebar_position: 2
---

## `GET` Get Account Authentication Settings

```http
https://useast.api.elasticpath.com/v2/settings/account-authentication
```

## Parameters

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Examples

### Curl

```bash
curl -X GET https://useast.api.elasticpath.com/v2/settings/account-authentication \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

### JavaScript SDK

```javascript
// Where `EPCC` is an authenticated client
await EPCC.AccountAuthenticationSettingsEndpoint.Get();
```

## Response Example

`200 OK`

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
