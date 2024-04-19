---
title: Configure Stripe
nav_label: Configure Stripe
sidebar_position: 11
---

## `PUT` Update Stripe Settings

```http
https://useast.api.elasticpath.com/v2/gateways/stripe
```
Use the `/gateways/stripe` endpoint to configure Stripe.

## Parameters

### Headers

| Name            | Required | Type     | Description                                         |
|:----------------|:---------|:---------|:----------------------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Name | Required | Type | Description                                                                                                                                    |
| :--- | :--- |:-------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------|
| `login` | Required | `string` | Represents Stripe `test` or `live` secret key.                                                                                                 |
| `enabled` | Optional | `boolean` | Specifies whether the gateway is enabled or disabled. Set `true` to enable the gateway and `false` to disable the gateway. Default is `false`. |


## Request Example

```bash
curl -X PUT https://useast.api.elasticpath.com/v2/gateways/stripe \
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
    "name": "Stripe",
    "slug": "stripe",
    "type": "gateway"
  }
}
```
