---
title: Update Account Authentication Settings
nav_label: Update Account Authentication Settings
sidebar_position: 3
---

## `Update` Update Account Authentication Settings

```http
https://useast.api.elasticpath.com/v2/settings/account-authentication
```

## Parameters

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Name | Required | Type | Description |
| --- |-----------|--------------------------| --- |
| `type` | Required | `string`  | The type of the object to update. Always `account_authentication_settings`. |
| `enable_self_signup` | Optional | `boolean` | The account_member_self_management setting used for the `account_authentication_settings` object. The default value is `false`. |
| `auto_create_account_for_account_members` | Optional | `boolean` | The auto_create_account_for_account_members setting used for the `account_authentication_settings` object. The default value is `false`. |
| `account_member_self_management` | Optional | `string` | The account_member_self_management setting used for the `account_authentication_settings` object. The options are `disabled` or `update_only`. |

## Request Examples

### Curl

```bash
curl -X PUT https://useast.api.elasticpath.com/v2/settings/account-authentication \
-H "Authorization: Bearer XXXX" \
-H "Content-Type: application/json" \
-d $ {
 "data": {
    "type": "account_authentication_settings",
    "enable_self_signup": true,
    "auto_create_account_for_account_members": true,
    "account_member_self_management": "disabled"
 }
}
```

### JavaScript SDK

```javascript
// Where `EPCC` is an authenticated client
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
    client_id: 'X'
})
Moltin.AccountAuthenticationSettingsEndpoint.Update({
        body
    }
)
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
