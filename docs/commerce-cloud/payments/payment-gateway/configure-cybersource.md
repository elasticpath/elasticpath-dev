---
title: Configure CyberSource
nav_label: Configure CyberSource
sidebar_position: 9
---

## `PUT` Update CyberSource settings

```http
https://useast.api.elasticpath.com/v2/gateways/cyber_source
```

Use this endpoint to configure CyberSource.

## Parameters

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Name | Required | Type      | Description                                                                                                                                                   |
| :--- |:---------|:----------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `enabled` | Optional | `boolean` | Specifies whether the gateway is enabled or disabled. Set `true` to enable the gateway and `false` to disable the gateway. Default is `false`.                |
| `test` | Optional | `boolean` | Specifies whether the test account is enabled or disabled. Set `true` to enable the test account and `false` to disable the test account. Default is `false`. |
| `login` | Required | `string`  | Represents your live or test CyberSource merchant ID.                                                                                                         |
| `password` | Required | `string`  | Indicates your live or test CyberSource SOAP key.                                                                                                             |

## Request Example

```bash
curl -X PUT https://useast.api.elasticpath.com/v2/gateways/cyber_source \
     -H "Authorization: Bearer XXX" \
     -H "Content-Type: application/json" \
     -d $ {
       "data": {
         "enabled": true,
         "login": "xxx",
         "password": "xxx",
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
        "login": "merchant-id",
        "password": "soap-key",
        "slug": "cyber_source",
        "test": true,
        "type": "gateway"
    }
}
```
