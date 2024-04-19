---
title: Get the Latest Release of a Catalog
nav_label: Get Latest Release
sidebar_position: 20
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `GET` Get a Catalog Release by Release ID

```http
https://useast.api.elasticpath.com/pcm/catalogs/:catalogId/releases/releaseId/
```

Retrieves a published catalog. Currently, published catalogs are limited to the current release and two releases prior to the current release. You can see the differences between the last 2 consecutive catalog releases using the `delta` link returned in the response of a [publish a catalog](/docs/pxm/catalogs/catalog-release-admin/publish-a-catalog) endpoint.

You can use the `is_full_delta` attribute returned from the `get a release of a catalog` endpoint to determine if you need to refresh the data in your company system before injecting fresh data in a `delta` link. The `is_full_delta` attribute tells you if this is a full publish of the catalog. Using a search service as an example, if the `is_full_delta` attribute is `true`, you should remove all data about that catalog from the search service before injecting fresh data from the `delta` file. If the `is_full_delta` attribute is `false`, then data from the previous catalog overlays the existing data in the `delta` file. The `is_full_delta` attribute is always `true` the first time a catalog is published.

## Parameters

### Path parameters

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `catalogId` | Required | `string` | The unique identifier of the catalog. |
| `releaseId` | Required | `string` | The unique identifier of a published version of the catalog or `latestPublished` for the most recently fully published catalog. You should use `latestPublished` in your storefront to make sure you have the latest fully published version of a catalog. |

### Headers

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token to grant access to the API. Implicit Bearer token only returns products with live status; products with draft status won’t be included. |

## Request Example

```bash
curl -X GET https://useast.api.elasticpath.com/pcm/catalogs/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/latest \
     -H "Authorization: Bearer XXXX" \
     -H "content-type: application/json" \
```

## Response Example

`200 OK`

```json
{
    "data": {
        "id": "aea233e7-1300-48ce-9b45-7d0c0b60dde3",
        "type": "catalog-release",
        "attributes": {
            "hierarchies": [
                {
                    "id": "eb3bd9e6-857c-4886-bc3f-fcebd600ae22"
                }
            ],
            "description": "Ranges Catalog",
            "name": "Ranges Catalog",
            "published_at": "2021-04-13T02:11:57.393Z"
        },
        "meta": {
               "is_full_delta": true,
               "is_full_publish": true,
               "owner": "store",
               "percent_completed": 100,
               "total_nodes": 1,
               "total_products": 0,
               "created_at": "2022-03-25T18:05:13.447Z",
               "release_status": "PUBLISHED",
               "started_at": "2022-03-25T18:05:13.463Z"
           },
        "relationships": {
            "hierarchies": {
                "links": {
                    "related": "/pcm/catalogs/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/latest"
                }
            },
            "products": {
                "links": {
                    "related": "/pcm/catalogs/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/latest"
                }
            }
        }
    },
    "links": {
        "self": "/pcm/catalogs/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/latest"
    }
}
```
