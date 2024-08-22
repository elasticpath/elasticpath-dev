---
title: Update Logs Time-to-Live (TTL) Settings
nav_label: Update Logs TTL Settings
sidebar_position: 30
---

## `UPDATE` Update Logs Time-to-Live (TTL) Settings

```http
https://useast.api.elasticpath.com/v2/settings/logs-ttl
```

## Parameters

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `days` | Required | `integer` | The number of days to retain the logs. Allowed values are between 1 and 365. |
| `type` | Required | `string` | The type of resource. You must use `time_to_live`. |

## Request Example

```bash
curl -X PUT https://useast.api.elasticpath.com/v2/settings/logs-ttl \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
            "data": {
                "days": 10,
                "type": "time_to_live"
            }
        }
```

### Javascript SDK

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const newTtlDays = 45
const client = MoltinGateway({
    client_id: 'X'
})
client.Settings.UpdateLogsTtl(newTtlDays).then(ttlSettings => {
    // Do something
})
```

## Response Example

`200 OK`

```json
{
    "data": {
        "days": 10,
        "type": "time_to_live"
    }
}
```
