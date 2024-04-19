---
title: Get a Flow
nav_label: Get a Flow
sidebar_position: 2
---

## `GET` Get a Flow

```http
https://useast.api.elasticpath.com/v2/flows/:id
```

## Parameters

### Path parameters

| Name | Required | Type     | Description                             |
| ---- | -------- | -------- | --------------------------------------- |
| `id` | Required | `string` | The ID for the flow you are requesting. |

### Headers

| Name            | Required | Type     | Description                                         |
| --------------- | -------- | -------- | --------------------------------------------------- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Examples

### Curl

```bash
curl https://useast.api.elasticpath.com/v2/flows/:id \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

### JavaScript SDK

```javascript
const flowId = "25617d3e-14a6-434c-bfab-3fda87517aaf";

// Where `EPCC` is an authenticated client
await EPCC.Flows.Get(flowId);
```

## Response Example

`200 OK`

```json
{
    "data": {
        "id": "38ba1451-efa4-4361-9ca6-3fb646490f37",
        "type": "flow",
        "name": "extraFieldRenamed",
        "slug": "products",
        "description": "Extends the default product object",
        "enabled": true,
        "links": {
            "self": "https://useast.api.elasticpath.com/v2/flows/38ba1451-efa4-4361-9ca6-3fb646490f37"
        },
        "relationships": {},
        "meta": {
            "owner": "organization",
            "timestamps": {
                "created_at": "2018-05-10T01:41:36.009Z",
                "updated_at": "2018-05-10T15:27:26.241Z"
            }
        }
    }
}
```
