---
title: Get a Hierarchy in the Latest Release
nav_label: Get a Hierarchy
sidebar_position: 40
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `GET` Get a Hierarchy from a Catalog Release

```text
https://useast.api.elasticpath.com/pcm/catalogs/:catalogId/releases/latest/hierarchies/:hierarchyId
```

Returns a hierarchy from a published catalog.

:::note
Currently, published catalogs are limited to the current release and two releases prior to the current release.
:::

:::caution
Use `releaseId` to delete a specific release than the latest catalog.
:::

## Parameters

### Path parameters

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `catalogId` | Required | `string` | The unique identifier of the catalog. |
| `releaseId` | Required | `string` | The unique identifier of a published version of the catalog or `latest` for the most recently published version. |
| `hierarchyId` | Required | `string` | The unique identifier of a hierarchy. |

### Headers

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token to grant access to the API. Implicit Bearer token only returns products with live status; products with draft status won’t be included. |

## Request Example

```bash
curl -X GET https://useast.api.elasticpath.com/pcm/catalogs/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/latest/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007 \
     -H "Authorization: Bearer XXXX" \
     -H "content-type: application/json" \
```

## Response Example

`200 OK`

```json
{
    "data": {
        "id": "0e119de2-5fb0-4bca-9b84-b3fc6c903007",
        "type": "hierarchy",
        "attributes": {
            "created_at": "2021-03-05T21:45:28.395Z",
            "description": "Free-standing appliances",
            "name": "Major Appliances",
            "slug": "Major-Appliances-MA0",
            "updated_at": "2021-03-05T22:15:44.684Z",
            "published_at": "2021-04-13T02:36:16.505Z"
        },
        "relationships": {
            "children": {
                "links": {
                    "related": "/pcm/catalogs/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/latest/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007/children"
                }
            },
            "nodes": {
                "links": {
                    "related": "/pcm/catalogs/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/latest/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007/nodes"
                }
            },
            "products": {
                "links": {
                    "related": "/pcm/catalogs/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/latest/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007/products"
                }
            }
        }
    },
    "links": {
        "self": "/pcm/catalogs/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/latest/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007"
    }
}
```
