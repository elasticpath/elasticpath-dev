---
title: Delete a Custom API Entry
nav_label: Delete a Custom API Entry
sidebar_position: 5
---

## `DELETE` Delete by ID

```http
https://useast.api.elasticpath.com/v2/extensions/:slug/:id
```

## Paramerers

### Path parameters

| Name   | Required | Type     | Description                                                  |
|--------|----------|----------|--------------------------------------------------------------|
| `slug` | Required | `string` | The unique identifier of the Custom API.                     |
| `id`   | Required | `string` | The unique identifier of the Custom API Entry to be deleted. |


### Headers

| Name            | Required | Type     | Description                                         |
|-----------------|----------|----------|-----------------------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Example

```bash
curl -X DELETE https://useast.api.elasticpath.com/v2/extensions/:slug/:id \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

## Response Example

`204 No Content`
