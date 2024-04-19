---
title: Configure Braintree
nav_label: Configure Braintree
sidebar_position: 7
---

## `PUT` Update Braintree settings

```http
https://useast.api.elasticpath.com/v2/gateways/braintree
```

Use this endpoint to configure Braintree.

## Parameters

### Headers

| Name            | Required | Type     | Description                                         |
|:----------------|:---------|:---------|:----------------------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Name | Required | Type      | Description                                                                                                                                    |
| :--- |:---------|:----------|:-----------------------------------------------------------------------------------------------------------------------------------------------|
| `enabled` | Optional | `boolean` | Specifies whether the gateway is enabled or disabled. Set `true` to enable the gateway and `false` to disable the gateway. Default is `false`. |
| `environment` | Optional | `string`  | Specifies `production` or `sandbox`  environment.                                                                                              |
| `merchant_id` | Required | `string`  | Specifies Your Braintree merchant ID.                                                                                                          |
| `private_key` | Required | `string`  | Represents Your Braintree private key.                                                                                                         |
| `public_key` | Required | `string`  | Indicates Your Braintree public key.                                                                                                           |

## Request Example

```bash
curl -X PUT https://useast.api.elasticpath.com/v2/gateways/braintree \
    -H "Authorization: Bearer XXXX" \
    -H "Content-Type: application/json" \
    -d $ {
      "data": {
        "enabled": true,
        "environment": "production",
        "merchant_id": "xxx",
        "private_key": "xxx",
        "public_key": "xxx",
      }
    }
```

## Response Example

`200 OK`

```json
{
  "data": {
    "enabled": true,
    "environment": "production",
    "merchant_id": "xxx",
    "name": "Braintree",
    "private_key": "xxx",
    "public_key": "xxx",
    "slug": "braintree",
    "type": "gateway"
  }
}
```
