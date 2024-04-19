---
title: Delete a Promotion Code
nav_label: Delete a Promotion Code
sidebar_position: 3
---

## `DELETE` Delete a Promotion Code

```http
https://useast.api.elasticpath.com/v2/promotions/:id/codes/:code
```

Use this endpoint to delete a single promotion code.

## Parameters

### Path parameters

| Name   | Required | Type     | Description                                              |
| ------ | -------- | -------- | -------------------------------------------------------- |
| `id`   | Required | `string` | Specifies ID of the promotion associated with the codes. |
| `code` | Required | `string` | Specifies the code that you want to delete.              |

### Headers

| Name            | Required | Type     | Description                                         |
| --------------- | -------- | -------- | --------------------------------------------------- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Example

```bash
curl -X DELETE https://useast.api.elasticpath.com/v2/promotions/:id/codes/:code \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

## Response Example

`204 No Content`
