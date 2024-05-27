---
title: Configure Stripe Payment Intents
nav_label: Configure Stripe Payment Intents
sidebar_position: 13
---

## `PUT` Update Stripe Payment Intent settings

```http
https://useast.api.elasticpath.com/v2/gateways/stripe_payment_intents
```

Use `/gateways/stripe_payment_intents` endpoint to configure Stripe Payment Intents.

## Parameters

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Attribute | Required | Type      | Description                                                                                                                        |
|:----------|:---------|:----------|:-----------------------------------------------------------------------------------------------------------------------------------| 
| `login`   | Required | `string`  | Specifies the Stripe secret key for your account that is in `live` or `test` mode.                                                 |
| `enabled` | Optional | `boolean` | Specifies whether the gateway is enabled. Set `true` to enable the gateway and `false` to disable the gateway. Default is `false`. |

## Request Example

```bash
curl -X PUT https://useast.api.elasticpath.com/v2/gateways/stripe_payment_intents \
     -H "Authorization: Bearer XXX" \
     -H "Content-Type: application/json" \
     -d $ {
       "data": {
         "enabled": true,
         "login": "xxx"
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
    "name": "Stripe Payment Intents",
    "slug": "stripe_payment_intents",
    "type": "gateway"
  }
}
```
