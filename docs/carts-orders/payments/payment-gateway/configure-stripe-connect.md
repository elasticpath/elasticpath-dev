---
title: Configure Stripe Connect
nav_label: Configure Stripe Connect
sidebar_position: 12
---

## `PUT` Update Stripe Connect settings

```http
https://useast.api.elasticpath.com/v2/gateways/stripe_connect
```

Use the `/gateways/stripe_connect` endpoint to configure Stripe Connect in Commerce.

:::note
You can contact Elastic Path sales or [customer success team](mailto:customersuccess@elasticpath.com) to get more information about Stripe Connect and to check whether it will work for you.
:::

## Parameters

### Headers

| Name            | Required | Type     | Description                                         |
|:----------------|:---------|:---------|:----------------------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Attribute | Required | Type | Description                                                                                          |
| :--- |:---------| :--- |:-----------------------------------------------------------------------------------------------------|
| `stripe_account` | Required | `string` | Specifies the Stripe Connect account ID.                                                             |
| `enabled` | Optional | `boolean` | Specifies whether the gateway is enabled or disabled. Set `true` to enable the gateway and `false` to disable the gateway. Default is `false`.     |
| `test` | Optional |`boolean` | Specifies whether the test mode is enabled. Set `true` to enable test mode and `false` to disable the test mode. Default is `false`. |

## Request Example

```bash
curl -X PUT https://useast.api.elasticpath.com/v2/gateways/stripe_connect \
     -H "Authorization: Bearer XXX" \
     -H "Content-Type: application/json" \
     -d $ {
       "data": {
         "enabled": true,
         "stripe_account": "acct_xxx"
         "test": true,
       }
     }
```

## Response Example

`200 OK`

```json
{
  "data": {
    "enabled": true,
    "test": true,
    "stripe_account": "acct_xxx",
    "name": "Stripe Connect",
    "slug": "stripe_connect",
    "type": "gateway"
  }
}
```
