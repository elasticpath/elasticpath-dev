---
title: Get all Password Profiles
nav_label: Get all Password Profiles
sidebar_position: 20
---


## `GET` Get a list of Password Profiles

```http
https://useast.api.elasticpath.com/v2/authentication-realms/:realm-id/password-profiles/
```

:::note
You can use pagination with this resource. For more information, see [pagination](/guides/Getting-Started/pagination).
:::

## Parameters

### Path parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `realm-id` | Required | `string` | The ID for the authentication-realm containing the requested password profile. |

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Examples

### Curl

```bash
curl -X GET https://useast.api.elasticpath.com/v2/authentication-realms/:realm-id/password-profiles/ \
     -H "Authorization: Bearer XXXX"
```

### JavaScript SDK

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X'
})
const realmId = 'XXXX'
Moltin.PasswordProfile.All(realmId)
```

## Response Example

`200 OK`


```json
{
    "meta": {
        "page": {
            "limit": 100,
            "offset": 0,
            "current": 1,
            "total": 1
        },
        "results": {
            "total": 3
        }
    },
    "data": [
        {
            "links": {
                "self": "http://useast.api.elasticpath.com/v2/authentication-realms/43cf9609-de15-4118-bf0e-66707d29adca/password-profiles/2d518aad-6f0e-4273-a844-24cd4e885395"
            },
            "name": "password profile",
            "meta": {
                "created_at": "2021-07-28T10:55:23.727Z",
                "updated_at": "2021-07-28T10:55:23.727Z"
            },
            "type": "password_profile",
            "id": "2d518aad-6f0e-4273-a844-24cd4e885395",
            "username_format": "any",
            "enable_one_time_password_token" : true
        },
        {
            "links": {
                "self": "http://useast.api.elasticpath.com/v2/authentication-realms/43cf9609-de15-4118-bf0e-66707d29adca/password-profiles/9ce94218-ed65-4acf-86a7-1ae1a994d4b8"
            },
            "name": "password profile",
            "meta": {
                "created_at": "2021-07-28T10:55:22.779Z",
                "updated_at": "2021-07-28T10:55:22.779Z"
            },
            "type": "password_profile",
            "id": "9ce94218-ed65-4acf-86a7-1ae1a994d4b8",
            "username_format": "any",
            "enable_one_time_password_token" : true
        }
    ],
    "links": {
        "next": null,
        "current": "http://useast.api.elasticpath.com/v2/authentication-realms/43cf9609-de15-4118-bf0e-66707d29adca/password-profiles/?page%5Blimit%5D=100&page%5Boffset%5D=0",
        "last": "http://useast.api.elasticpath.com/v2/authentication-realms/43cf9609-de15-4118-bf0e-66707d29adca/password-profiles/?page%5Blimit%5D=100&page%5Boffset%5D=0",
        "prev": null,
        "first": "http://useast.api.elasticpath.com/v2/authentication-realms/43cf9609-de15-4118-bf0e-66707d29adca/password-profiles/?page%5Blimit%5D=100&page%5Boffset%5D=0"
    }
}
```
