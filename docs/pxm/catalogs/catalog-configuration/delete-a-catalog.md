---
title: Delete a Catalog
nav_label: Delete a Catalog
sidebar_position: 60
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `DELETE` a Catalog by ID

```text
https://useast.api.elasticpath.com/pcm/catalogs/:catalogId
```

Deletes the specified catalog.

:::note
If the catalog is associated with any catalog rules, you must first update the catalog rules to remove the catalog.
:::

## Parameters

### Path parameters

| Name        | Required | Type     | Description                           |
| :---------- | :------- | :------- | :------------------------------------ |
| `catalogId` | Required | `string` | The unique identifier of the catalog. |

### Headers

| Name            | Required | Type     | Description                                                                                  |
| :-------------- | :------- | :------- | :------------------------------------------------------------------------------------------- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. You must use a client credentials token. |

## Request Example

```bash
curl -X DELETE https://useast.api.elasticpath.com/pcm/catalogs/a2a69ad2-85cd-4fb1-8e2b-d621bf915a15 \
     -H "Authorization: Bearer XXXX" \
     -H "content-type: application/json" \
```

## Response Example

`204 No Content`
