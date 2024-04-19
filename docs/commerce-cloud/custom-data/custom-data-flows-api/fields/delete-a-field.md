---
title: Delete a Field
nav_label: Delete a Field
sidebar_position: 6
---

## `DELETE` Delete a Field

```http
https://useast.api.elasticpath.com/v2/fields/:id
```

## Parameters

### Path parameters

| Name | Required | Type     | Description                                            |
| ---- | -------- | -------- | ------------------------------------------------------ |
| `id` | Required | `string` | The ID for the field you are requesting to be deleted. |

### Headers

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Examples

### Curl

```bash
curl -X DELETE https://useast.api.elasticpath.com/v2/fields/:id \
    -H "Authorization: Bearer XXXX" \
    -H "Content-Type: application/json" \
```

### JavaScript SDK

```javascript
const fieldId = "25617d3e-14a6-434c-bfab-3fda87517aaf";

// Where `EPCC` is an authenticated client
await EPCC.Fields.Delete(fieldId);
```

## Response Example

`204 No Content`
