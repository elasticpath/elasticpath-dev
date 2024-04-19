---
title: Delete Settings
nav_label: Delete Settings
sidebar_position: 41
---

Deletes a store setting. Organization settings cannot be deleted.

## `Delete` Delete Project Settings

```http
https://useast.api.elasticpath.com/v2/settings
```

## Parameters

### Headers

| Name            | Required | Type     | Description                                         |
| --------------- | -------- | -------- | --------------------------------------------------- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Example

### Curl

```bash
curl -X DELETE https://useast.api.elasticpath.com/v2/settings \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

### JavaScript SDK

```javascript
const MoltinGateway = require("@moltin/sdk").gateway;
const Moltin = MoltinGateway({
    client_id: "X",
    client_secret: "X",
});
Moltin.Settings.Delete().then((response) => {
    // Do something
});
```
## Response Example

`204 No Content`

