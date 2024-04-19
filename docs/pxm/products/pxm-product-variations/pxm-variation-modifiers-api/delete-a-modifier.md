---
title: Delete a Modifier
nav_label: Delete a Modifier
sidebar_position: 50
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `DELETE` Delete a Modifier

```http
https://useast.api.elasticpath.com/pcm//variations/:variationId/options/:optionId/modifiers/:modifierId
```

:::note
Deleting a modifier in use returns a `422 Failed Validation` error message.
:::

### Parameters

#### Path parameters

| Name         | Required | Type     | Description                           |
|:-------------|:---------|:---------|:--------------------------------------|
| `optionId`   | Required | `string` | The ID of the option.                 |
| `modifierId` | Required | `string` | The ID of the modifier in the option. |

#### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Request example

```bash
curl -X DELETE https://useast.api.elasticpath.com/pcm/variations/684bceee-0ee3-4f43-ac32-50bb44c1eee5/options/39148bc3-3028-4196-9350-1b4ac927c9d6/modifiers/0e681196-f238-46b3-934d-1782a3e2a5e8  \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

### Response example

`204 No Content`
