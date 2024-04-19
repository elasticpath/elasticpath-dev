---
title: Get a Template
nav_label: Get a Template
sidebar_position: 20
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `GET` Get a Template

```http
https://useast.api.elasticpath.com/v2/flows/:id
```

## Parameters

### Path parameters

| Name | Required | Type     | Description                                     |
|:-----|:---------|:---------|:------------------------------------------------|
| `id` | Required | `string` | Specifies the ID for the template that you want to retrieve. |

### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
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
const MoltinGateway = require("@moltin/sdk").gateway;
const Moltin = MoltinGateway({
    client_id: "X",
});
const flowId = "XXXX";
Moltin.Flows.Get(flowId).then((flows) => {
    // Do something
});
```

## Response Example

`200 OK`

```json
{
    "data": {
        "id": "6d320b42-237d-4474-8452-d49f884d4ae1",
        "type": "flow",
        "name": "products(Skincare)",
        "slug": "products(Skincare)",
        "description": "newFlowDescription_6717339029",
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
