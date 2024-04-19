---
title: Delete a Template
nav_label: Delete a Template
sidebar_position: 60
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `DELETE` Delete a Template

```http
https://useast.api.elasticpath.com/v2/flows/:id
```

## Parameters

### Path parameters

| Name | Required | Type     | Description                                     |
|:-----|:---------|:---------|:------------------------------------------------|
| `id` | Required | `string` | Specifies the ID for the template you want to delete. |

### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Examples

### Curl

```bash
curl -X DELETE https://useast.api.elasticpath.com/v2/flows/:id \
    -H "Authorization: Bearer XXXX" \
    -H "Content-Type: application/json" \
```

### JavaScript SDK

```javascript
const MoltinGateway = require("@moltin/sdk").gateway;
const Moltin = MoltinGateway({
    client_id: "X",
});
const flowId = "XXX";
Moltin.Flows.Delete(flowId).then((flow) => {
    // Do something
});
```

## Response Example

`204 No Content`

```json

```
