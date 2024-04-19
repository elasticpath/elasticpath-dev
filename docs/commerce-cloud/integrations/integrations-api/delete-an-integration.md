---
title: Delete an Integration
nav_label: Delete an Integration
sidebar_position: 90
---

## `DELETE` Delete by ID

```http
https://useast.api.elasticpath.com/v2/integrations/:id
```

## Parameters

### Path parameters

| Name | Required | Type     | Description                           |
|:-----|:---------|:---------|:--------------------------------------|
| `id` | Required | `string` | The ID for the integration to delete. |

### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Example

### Curl

```bash
curl -X DELETE https://useast.api.elasticpath.com/v2/integrations/:id \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

### JavaScript SDK

```javascript
const integrationId = "25617d3e-14a6-434c-bfab-3fda87517aaf";

// Where `EPCC` is an authenticated client
await EPCC.Integrations.Delete(integrationId);
```

## Response Example

`200 OK`

```json
{
    "data": {
        "type": "integration",
        "id": "8cb9e689-ede7-4f6d-b61a-6aa970d572dd"
    }
}
```
