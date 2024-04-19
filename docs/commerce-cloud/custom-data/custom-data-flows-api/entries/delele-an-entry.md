---
title: Delete an Entry
nav_label: Delete an Entry
sidebar_position: 6
---

## `DELETE` Delete an Entry

```http
https://useast.api.elasticpath.com/v2/flows/:slug/entries/:id
```

## Parameters

### Path parameters

| Name   | Required | Type     | Description                                   |
|:-------|:---------|:---------|:----------------------------------------------|
| `id`   | Required | `string` | The ID of the entry you are requesting to delete. |
| `slug` | Required | `string` | The slug for the Flows you are requesting entries for. |

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
const flowSlug = "flow-slug";
const entryId = "25617d3e-14a6-434c-bfab-3fda87517aaf";

// Where `EPCC` is an authenticated client
await EPCC.Flows.DeleteEntry(flowSlug, entryId);
```

## Response Example

`204 No Content`
