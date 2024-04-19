---
title: Configure CardConnect
nav_label: Configure CardConnect
sidebar_position: 8
---

## `PUT` Update CardConnect settings

```http
https://useast.api.elasticpath.com/v2/gateways/card_connect
```

Use this endpoint to configure CardConnect.

## Parameters

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Name | Required | Type      | Description                                                                                                                                                   |
| :--- |:---------|:----------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `merchant_id` | Required | `string`  | Specifies your CardConnect Merchant ID.                                                                                                                       |
| `username` | Required | `string`  | Represents your CardConnect username.                                                                                                                         |
| `password` | Required | `string`  | Indicates your CardConnect password.                                                                                                                          |
| `enabled` | Optional | `boolean` | Specifies whether the gateway is enabled or disabled. Set `true` to enable the gateway and `false` to disable the gateway. Default is `false`.                |
| `test` | Optional | `boolean` | Specifies whether the test account is enabled or disabled. Set `true` to enable the test account and `false` to disable the test account. Default is `false`. |

## Request Example

```bash
curl -X PUT https://useast.api.elasticpath.com/v2/gateways/card_connect \
     -H "Authorization: Bearer XXX" \
     -H "Content-Type: application/json" \
     -d $ {
       "data": {
         "merchant_id": "xxx",
         "username": "xxx"
         "password": "xxx",
         "test": false,
         "enabled": false
       }
     }
```

## Response Example

`200 OK`

```json
{
  "data": {
    "slug": "card_connect",
    "name": "CardConnect",
    "merchant_id": "xxx",
    "username": "xxx",
    "password": "xxx",
    "test": false,
    "enabled": false,
    "type": "gateway"
  }
}
```
