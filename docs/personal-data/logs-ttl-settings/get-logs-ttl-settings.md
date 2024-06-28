---
title: Get Logs Time-to-Live (TTL) Settings
nav_label: Get Logs TTL Settings
sidebar_position: 20
---

## `GET` Get Logs Time-to-Live (TTL) Settings

```http
https://useast.api.elasticpath.com/v2/settings/logs-ttl
```

## Parameters

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Example

```bash
curl -X GET https://useast.api.elasticpath.com/v2/settings/logs-ttl \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```


### Javascript SDK

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const client = MoltinGateway({
    client_id: 'X'
})
client.Settings.GetLogsTtl().then(ttlSettings => {
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
