---
title: Configure PayPal Express Checkout
nav_label: Configure PayPal Express Checkout
sidebar_position: 10
---

## `PUT` Update PayPal Express Checkout settings

```http
https://useast.api.elasticpath.com/v2/gateways/paypal_express_checkout
```

Use the `/gateways/paypal_express_checkout` endpoint to configure PayPal Express Checkout.

:::note
To learn more about PayPal Express Checkout and check whether it will work for you, contact your sales or [customer success team](mailto:customersuccess@elasticpath.com).
:::

## Parameters

### Headers

| Name            | Required | Type     | Description                                         |
| --------------- | -------- | -------- | --------------------------------------------------- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Name       | Required | Type       | Description                                                                                                                                    |
| :---------- |:---------|:-----------|:-----------------------------------------------------------------------------------------------------------------------------------------------|
| `payer_id` | Required | `string`   | Specifies the merchant account ID. The ID is displayed in the PayPal account details of the merchant.                                          |
| `enabled`  | Optional | `boolean`  | Specifies whether the gateway is enabled or disabled. Set `true` to enable the gateway and `false` to disable the gateway. Default is `false`. |
| `test`     | Optional | `boolean`  | Specifies whether the test mode is enabled. Set `true` to enable test mode and `false` to disable the test mode. Default is `false`.           |

## Request Example

```bash
curl -X PUT https://useast.api.elasticpath.com/v2/gateways/paypal_express_checkout \
     -H "Authorization: Bearer XXX" \
     -H "Content-Type: application/json" \
     -d $ {
       "data": {
        "payer_id": "ABCxxxxxxxx",
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
    "name": "PayPal Express Checkout",
    "payer_id": "ABCxxxxxxxx",
    "slug": "paypal_express_checkout",
    "test": true,
    "type": "gateway"
  }
}
```
