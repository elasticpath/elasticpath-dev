---
title: Configure Adyen
nav_label: Configure Adyen
sidebar_position: 5
---

## `PUT` Update Adyen settings

```http
https://useast.api.elasticpath.com/v2/gateways/adyen
```

Use this endpoint to configure Adyen.

## Parameters

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Name | Required | Type | Description                                                                                                                                                   |
| --- | --- | --- |---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `merchant_account` | Required | `string` | Represents your Adyen merchant account code. For example, `MyCompanyECOM`.                                                                                    |
| `username` | Required | `string` | Indicates your web service username. For example, `ws@Company.MyCompany`.                                                                                     |
| `password` | Required | `string` | Specifies your web service user Basic Auth password.                                                                                                          |
| `test` | Optional | `boolean` | Specifies whether the test account is enabled or disabled. Set `true` to enable the test account and `false` to disable the test account. Default is `false`. |
| `enabled` | Optional | `boolean` | Specifies whether the gateway is enabled or disabled. Set `true` to enable the gateway and `false` to disable the gateway. Default is `false`.                |

## Request Example

```bash
curl -X PUT https://useast.api.elasticpath.com/v2/gateways/adyen \
     -H "Content-Type: application/json" \
     -H "Authorization: Bearer XXX" \
     -d $ {
        "data": {
           "enabled": true,
           "merchant_account": "MyCompanyECOM",
           "username": "ws@Company.MyCompany",
           "password": "xxx",
           "test": false
        }
     }
```

## Response Example

`200 OK`

```json
{
  "data": {
    "merchant_account": "MyCompanyECOM",
    "username": "ws@Company.MyCompany",
    "password": "xxx",
    "test": false,
    "enabled": true,
    "name": "Adyen",
    "slug": "adyen",
    "type": "gateway"
  }
}
```
