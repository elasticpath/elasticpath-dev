---
title: Delete all Published Catalog Releases
nav_label: Delete all Published Catalog Releases
sidebar_position: 40
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `DELETE` Delete all Published Catalog Releases

```text
https://useast.api.elasticpath.com/pcm/catalogs/:catalog_id/releases
```

Deletes a published catalog and all its releases.

:::note
Currently, published catalogs are limited to the current release and two releases prior to the current release.
:::

## Parameters

### Headers

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token to grant access to the API. Note that this must be a client credentials token. |

## Request Example

```bash
curl -X DELETE https://useast.api.elasticpath.com/pcm/catalogs/6dbd8b80-1176-4f62-b3c0-b543bc5a5f6a/releases \
     -H "Authorization: Bearer XXXX" \
     -H "content-type: application/json" \
```

## Response Example

`204 No Content`
