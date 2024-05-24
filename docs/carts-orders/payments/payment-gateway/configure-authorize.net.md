---
title: Configure Authorize.net
nav_label: Configure Authorize.net
sidebar_position: 6
---
 
## `PUT` Update Authorize.net Settings

```http
https://useast.api.elasticpath.com/v2/gateways/authorize_net
```

Use this endpoint to configure Authorize.net.

## Parameters

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Name | Required | Type                                     | Description                                                                                                                                                   |
| :--- |:---------|:-----------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `login` | Required | `string`                                 | Represents Authorize.net API Login ID.                                                                                                                        |
| `password` | Required | `string`                                 | Indicates Authorize.net Transaction Key.                                                                                                                      |
| `slug` | Optional | `string`                                 | Specifies a unique slug for this gateway.                                                                                                                     |
| `enabled` | Optional | `boolean`                                | Specifies whether the gateway is enabled or disabled. Set `true` to enable the gateway and `false` to disable the gateway. Default is `false`.                |
| `test` | Optional | `boolean`                                | Specifies whether the test account is enabled or disabled. Set `true` to enable the test account and `false` to disable the test account. Default is `false`. |

## Request Example

```bash
curl -X PUT https://useast.api.elasticpath.com/v2/gateways/authorize_net \
     -H "Authorization: Bearer XXX" \
     -H "Content-Type: application/json" \
     -d $ {
       "data": {
         "login": "xxx",
         "password": "xxx",
         "slug": "authorize_net",
         "enabled": true,
         "test": true
       }
     }
```

## Response Example

`200 OK`


```json
{
    "data": {
        "enabled": true,
        "login": "xxx",
        "name": "Authorize.net",
        "password": "xxx",
        "slug": "authorize_net",
        "test": true,
        "type": "gateway"
    }
}
```
