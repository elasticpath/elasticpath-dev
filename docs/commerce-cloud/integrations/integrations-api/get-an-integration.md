---
title: Get an Integration
nav_label: Get an Integration
sidebar_position: 60
---

## `GET` Get an Integration by ID

```http
https://useast.api.elasticpath.com/v2/integrations/:id
```

## Parameters

### Path parameters

| Name | Required | Type     | Description                 |
| ---- | -------- | -------- | --------------------------- |
| `id` | Required | `string` | The ID for the integration. |

### Headers

| Name            | Required | Type     | Description                                         |
| --------------- | -------- | -------- | --------------------------------------------------- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Example

### Curl

```bash
curl -X GET https://useast.api.elasticpath.com/v2/integrations/:id \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

### JavaScript SDK

```javascript
const integrationId = "25617d3e-14a6-434c-bfab-3fda87517aaf";

// Where `EPCC` is an authenticated client
await EPCC.Integrations.Get(integrationId);
```

## Response Example

`200 OK`

```json
{
    "data": {
        "id": "71679ff8-36c1-4f8f-8ed2-cea50555d78c",
        "type": "integration",
        "integration_type": "webhook",
        "name": "Order shipping notification",
        "description": "Send a shipping notification via email with discount code.",
        "enabled": true,
        "configuration": {
            "url": "https://yourwebsite.com/order-created-notification"
        },
        "observes": ["order.fulfilled"],
        "links": {
            "self": "https://useast.api.elasticpath.com/v2/integrations/5f2c7366-c97f-4047-b3f3-a603270db189"
        },
        "meta": {
            "timestamps": {
                "created_at": "2018-04-19T10:21:06.747Z",
                "updated_at": "2018-04-19T10:40:19.805Z"
            }
        }
    }
}
```
