---
title: Get all Releases of a Published Catalog
sidebar_label: Get all Published Catalog Releases
sidebar_position: 10
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `GET` Get all Releases of a Published Catalog

```http
https://useast.api.elasticpath.com/pcm/catalogs/:catalogId/releases
```

Returns a list of all published releases of the specified catalog. Currently, published catalogs are limited to the current release and two releases prior to the current release. You can see the differences between the last 2 consecutive catalog releases using the `delta` link returned in the response of a [publish a catalog](/docs/pxm/catalogs/catalog-release-admin/publish-a-catalog) endpoint.

You can use the `is_full_delta`attribute returned from the `get a release of a catalog` endpoint to determine if you need to refresh the data in your company system before publishing a catalog release and injecting fresh data in a `delta` link. The `is_full_delta` attribute tells you if this is a full publish of a catalog release. Using a search service as an example, if the `is_full_delta` attribute is `true`, you should remove all data about that catalog from the search service before publishing a catalog release and injecting fresh data from the `delta` file. See [publish a catalog](/docs/pxm/catalogs/catalog-release-admin/publish-a-catalog).

If the `is_full_publish` attribute returned in the response is `false`, data from the previous catalog release overlaid the existing data in the `delta` file. The `is_full_publish` attribute is always `true` the first time a catalog is published.

## Parameters

### Path parameters

 | Name | Required | Type | Description |
 | :--- | :--- | :--- | :--- |
 | `catalogId` | Required | `string` | The unique identifier of the catalog. |

### Headers

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. An Implicit Bearer token only returns products with live status. Products with draft status are not included. |

## Request Example

```bash
curl -X GET https://useast.api.elasticpath.com/pcm/catalogs/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases \
     -H "Authorization: Bearer XXXX" \
     -H "content-type: application/json" \
```

## Response Example

`200 OK`

```json
{
    "data": [
        {
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
               "created_at": "2022-03-25T18:05:13.447Z",
               "release_status": "PUBLISHED",
               "started_at": "2022-03-25T18:05:13.463Z"
           },
            "relationships": {
                "hierarchies": {
                    "links": {
                        "related": "/pcm/catalogs/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/aea233e7-1300-48ce-9b45-7d0c0b60dde3/hierarchies"
                    }
                },
                "products": {
                    "links": {
                        "related": "/pcm/catalogs/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/aea233e7-1300-48ce-9b45-7d0c0b60dde3/products"
                    }
                }
            }
        }
    ],
    "links": {
        "self": "/pcm/catalogs/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases"
    }
}
```
