---
title: Delete a Currency
nav_label: Delete a Currency
sidebar_position: 60
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

:::caution
You can’t delete a **default currency**.
:::

## `DELETE` Delete a Currency by ID

```http
https://useast.api.elasticpath.com/v2/currencies/:id
```

## Parameters

### Path parameters

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `id` | Required | `string` | The ID for the Currency to delete. |

### Headers

| Name            | Required | Type     | Description                                         |
| --------------- | -------- | -------- | --------------------------------------------------- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Examples

### Curl

```bash
curl -X DELETE https://useast.api.elasticpath.com/v2/currencies/:id \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

### JavaScript SDK

```javascript
const currencyId = "25617d3e-14a6-434c-bfab-3fda87517aaf";

// Where `EPCC` is an authenticated client
await EPCC.Currencies.Delete(currencyId);
```

## Response Example

`204 No Content`
