---
title: Delete an Attribute
nav_label: Delete an Attribute
sidebar_position: 40
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `DELETE` Delete an Attribute

```http
https://useast.api.elasticpath.com/v2/fields/:id
```

## Parameters

### Path parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `id` | Required | `string` | The unique identifier for the attribute that you want to delete. |

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Example

```bash
curl -X DELETE https://useast.api.elasticpath.com/v2/fields/:id \
    -H "Authorization: Bearer XXXX" \
    -H "Content-Type: application/json" \
```

## Response Example

`204 No Content`
