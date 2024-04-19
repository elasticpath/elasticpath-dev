---
title: Get a Catalog
nav_label: Get a Catalog
sidebar_position: 30
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `GET` Get by ID

```text
https://useast.api.elasticpath.com/pcm/catalogs/:catalogId
```

Retrieves the specified catalog.

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
curl -X GET https://useast.api.elasticpath.com/pcm/catalogs/9d5de981-ceac-4523-90de-a960adaab38e \
     -H "Authorization: Bearer XXXX" \
     -H "content-type: application/json" \
```

## Response Example

`200 OK`

```json
{
  "data": {
    "attributes": {
      "owner": "store",
      "pricebook_ids": [
        {
          "id": "9d5de981-ceac-4523-90de-a960adaab38e",
          "priority": 100
        }
      ],
      "created_at": "2023-10-09T13:23:19.051Z",
      "hierarchy_ids": [
        "db9864c8-79ab-4e04-9ef9-a0064ad3bf25"
      ],
      "name": "Skincare",
      "updated_at": "2023-10-09T13:23:19.051Z"
    },
    "id": "9d5de981-ceac-4523-90de-a960adaab38e",
    "relationships": {
      "releases": {
        "links": {
          "related": "/pcm/catalogs/9d5de981-ceac-4523-90de-a960adaab38e/releases"
        },
        "meta": {
          "count": 3
        }
      },
      "rules": {
        "links": {
          "related": "/pcm/catalogs/rules?filter=eq(catalog_id,9d5de981-ceac-4523-90de-a960adaab38e)"
        }
      }
    },
    "type": "catalog"
  },
  "links": {
    "self": "/pcm/catalogs/9d5de981-ceac-4523-90de-a960adaab38e"
  }
}
```
