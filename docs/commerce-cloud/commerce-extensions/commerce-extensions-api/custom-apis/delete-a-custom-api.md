---
title: Delete a Custom API
nav_label: Delete a Custom API
sidebar_position: 6
---

## `DELETE` Delete by ID

```http
https://useast.api.elasticpath.com/v2/settings/extensions/custom-apis/:customApiId
```

## Paramerers

### Path parameters

| Name          | Required | Type     | Description                                            |
|---------------|----------|----------|--------------------------------------------------------|
| `customApiId` | Required | `string` | The unique identifier of the Custom API to be deleted. |

### Headers

| Name            | Required | Type     | Description                                         |
|-----------------|----------|----------|-----------------------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Example

```bash
curl -X DELETE https://useast.api.elasticpath.com/v2/settings/extensions/custom-apis/:customApiId \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

## Response Example

`204 No Content`
