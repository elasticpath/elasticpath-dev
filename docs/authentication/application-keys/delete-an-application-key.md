---
title: Delete an Application Key
nav_label: Delete an Application Key
sidebar_position: 40
---

## `DELETE` Delete an Application Key

```http
https://useast.api.elasticpath.com/v2/application-keys/:id
```

## Parameters

### Path parametersh

| Name | Required | Type     | Description                                                 |
|:-----|:---------|:---------|:------------------------------------------------------------|
| `id` | Required | `string` | The unique identifier of the application key to be deleted. |


### Headers

| Name            | Required | Type     | Description                                         |
|:----------------|:---------|:---------|:----------------------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Example - Curl

```bash
curl -X DELETE https://useast.api.elasticpath.com/v2/application-keys/:id \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

## Response Example

`204 No Content`
