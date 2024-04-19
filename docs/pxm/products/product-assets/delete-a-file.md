---
title: Delete a File
nav_label: Delete a File
sidebar_position: 50
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `DELETE` Delete a File by ID

```http
https://useast.api.elasticpath.com/v2/files/:id
```

## Parameters

### Path parameters

| Name | Required | Type     | Description                         |
| ---- | -------- | -------- | ----------------------------------- |
| `id` | Required | `string` | The unique identifier for the file. |

### Headers

| Name            | Required | Type     | Description                                         |
| --------------- | -------- | -------- | --------------------------------------------------- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Example

### Curl

```bash
curl -X DELETE https://useast.api.elasticpath.com/v2/files/:id \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

### JavaScript SDK

```javascript
const fileId = "25617d3e-14a6-434c-bfab-3fda87517aaf";

// Where `EPCC` is an authenticated client
await EPCC.Files.Delete(fileId);
```

## Response Example

`204 No Content`
