---
title: Delete a Published Catalog
nav_label: Delete a Published Catalog Release
sidebar_position: 30
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `DELETE` Delete a Published Catalog Release

```http
https://useast.api.elasticpath.com/pcm/catalogs/:catalog_id/releases/:releaseId
```

Deletes the specified published catalog release.

## Parameters

### Path parameters

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `releaseId` | Required | `string` | The unique identifier of the published catalog release that you want to delete. You can use `latestPublished` instead of `releaseId` to delete the latest published catalog release. Published catalogs are limited to the current release and two releases prior to the current release. If you delete the latest published catalog release, the last published release is restored. |

### Headers

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Examples

```bash
curl -X DELETE https://useast.api.elasticpath.com/pcm/catalogs/6dbd8b80-1176-4f62-b3c0-b543bc5a5f6a/releases/1e6bc8ab-da6a-4498-a18c-c4f2f18b7b53 \
     -H "Authorization: Bearer XXXX" \
```

```bash
curl -X DELETE https://useast.api.elasticpath.com/pcm/catalogs/6dbd8b80-1176-4f62-b3c0-b543bc5a5f6a/releases/latest \
     -H "Authorization: Bearer XXXX" \
     -H "content-type: application/json" \
```

## Response Example

`204 No Content`
