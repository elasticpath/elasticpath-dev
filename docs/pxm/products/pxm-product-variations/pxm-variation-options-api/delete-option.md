---
title: Delete an Option
nav_label: Delete an Option
sidebar_position: 60
---

## `DELETE` Delete an Option

```http
https://useast.api.elasticpath.com/pcm/variation/:variationId/options/:optionId
```

:::caution
You can only delete an option that is not in use. If you delete an option in use, a `422 Failed Validation` error message is returned. Deleting an option deletes all modifiers associated with that option.
:::

## Parameters

### Path parameters

| Name          | Required | Type     | Description                                          |
| ------------- | -------- | -------- | ---------------------------------------------------- |
| `variationId` | Required | `string` | The ID of the variation that consists of the option. |
| `optionId`    | Required | `string` | The ID of the option that you want to delete.        |

### Headers

| Name            | Required | Type     | Description                                         |
| --------------- | -------- | -------- | --------------------------------------------------- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Example

```bash
curl -X DELETE https://useast.api.elasticpath.com/pcm/variations/684bceee-0ee3-4f43-ac32-50bb44c1eee5/options/39148bc3-3028-4196-9350-1b4ac927c9d6 \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

## Response Example

`204 No Content`

```json

```
