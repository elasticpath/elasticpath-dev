---
title: Configure Manual Gateway
nav_label: Configure Manual Gateway
sidebar_position: 4
---

## `PUT` Update Manual Gateway Settings

```http
https://useast.api.elasticpath.com/v2/gateways/manual
```

This endpoint allows you update the manual gateway.

## Parameters

### Headers

| Name            | Required | Type     | Description                                         |
|:----------------|:---------|:---------|:----------------------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Name | Required   | Type      | Description                                                                                                                                    |
|:----------------|:---------|:---------|:----------------------------------------------------|
| `enabled` | Optional   | `boolean` | Specifies whether the gateway is enabled or disabled. Set `true` to enable the gateway and `false` to disable the gateway. Default is `false`. |

## Request Example

```bash
curl -X PUT https://useast.api.elasticpath.com/v2/gateways/manual \
     -H "Authorization: Bearer XXX" \
     -H "Content-Type: application/json" \
     -d $ {
       "data": {
         "enabled": true
       }
     }
```
## Response Example

`200 OK`

```json
{
    "data": {
        "enabled": true,
        "name": "Manual",
        "slug": "manual",
        "type": "gateway"
    }
}
```
