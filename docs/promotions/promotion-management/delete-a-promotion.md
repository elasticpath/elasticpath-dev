---
title: Delete a Promotion
nav_label: Delete a Promotion
sidebar_position: 13
---

## `DELETE` Delete by ID

```http
https://useast.api.elasticpath.com/v2/promotions/:id
```

## Parameters

### Path parameters

| Name | Required | Type     | Description                                      |
| ---- | -------- | -------- | ------------------------------------------------ |
| `id` | Required | `string` | The ID of the promotion that you want to delete. |

### Headers

| Name            | Required | Type     | Description                                         |
| --------------- | -------- | -------- | --------------------------------------------------- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Example

```bash
curl -X DELETE https://useast.api.elasticpath.com/v2/promotions/:id \
     -H "Authorization: Bearer XXXX" \
     -H "content-type: application/json" \
```

## Response Example

`204 No Content`
