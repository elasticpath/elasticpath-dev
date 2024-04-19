---
title: Delete an Entry
sidebar_label: Delete an Entry
sidebar_position: 50
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `DELETE` Delete an Entry

```http
https://useast.api.elasticpath.com/v2/flows/:slug/entries/:entryId
```

## Parameters

### Path parameters

| Name      | Required | Type     | Description                                |
|:----------|:---------|:---------|:-------------------------------------------|
| `slug`    | Required | `string` | Specifies the slug of the template that contains the entry in an attribute. |
| `entryId` | Required | `string` | Specifies the ID of the entry you want to delete. |

### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Examples

### Curl

```bash
curl -X DELETE https://useast.api.elasticpath.com/v2/flows/:flowSlug/entries/:entryId \
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
const flowSlug = "XXXX";
const entryId = "XXXX";
Moltin.Flows.DeleteEntry(flowSlug, entryId).then((entry) => {
    // Do something
});
```

## Response Example

`204 No Content`

```json

```
