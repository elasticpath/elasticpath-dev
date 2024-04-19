---
title: Configure Elastic Path Payments Powered by Stripe
nav_label: Configure Elastic Path Payments Powered by Stripe
sidebar_position: 14
---

## `PUT` Update Elastic Path Payments Powered by Stripe settings

```http
https://useast.api.elasticpath.com/v2/gateways/elastic_path_payments_stripe
```

Use the `/gateways/elastic_path_payments_stripe` endpoint to configure Elastic Path Payments Powered by Stripe in Commerce.

:::note
You can contact Elastic Path sales or [customer success team](mailto:customersuccess@elasticpath.com) to get more information about Elastic Path Payments Powered by Stripe and to check whether it will work for you.
:::

## Parameters

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Attribute | Required | Type | Description                                                                                                                          |
| :--- |:---------| :--- |:-------------------------------------------------------------------------------------------------------------------------------------|
| `stripe_account` | Required | `string` | Specifies the Stripe account ID.                                                                                                     |
| `enabled` | Optional | `boolean` | Specifies whether the gateway is enabled. Set `true` to enable the gateway and `false` to disable the gateway. Default is `false`.   |
| `test` | Optional |`boolean` | Specifies whether the test mode is enabled. Set `true` to enable test mode and `false` to disable the test mode. Default is `false`. |

## Request Example

```bash
curl -X PUT https://useast.api.elasticpath.com/v2/gateways/elastic_path_payments_stripe \
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
    "name": "Elastic Path Payments powered by Stripe",
    "slug": "elastic_path_payments_stripe",
    "type": "gateway"
  }
}
```
