---
title: Get all Catalogs
nav_label: Get all Catalogs
sidebar_position: 20
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `GET` Get all Catalogs

```text
https://useast.api.elasticpath.com/pcm/catalogs
```

Retrieves a list of all the catalogs that you are authorized to view.

## Parameters

### Headers

| Name            | Required | Type     | Description                                                                                  |
| :-------------- | :------- | :------- | :------------------------------------------------------------------------------------------- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. You must use a client credentials token. |

## Request Example

```bash
curl -X GET https://useast.api.elasticpath.com/pcm/catalogs \
     -H "Authorization: Bearer XXXX" \
     -H "content-type: application/json" \
```

## Response Example

`200 OK`

```json
{
  "data": [
    {
      "attributes": {
        "owner": "store",
        "pricebook_ids": [
          {
            "id": "fe3f3f4c-bf36-44fc-9af6-e460276b2a45",
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
    {
      "attributes": {
        "owner": "store",
        "created_at": "2023-03-23T12:27:53.264Z",
        "description": "Playtend Games catalog",
        "hierarchy_ids": [
          "5af34030-80b3-4dae-951e-a09c06f29dba"
        ],
        "name": "Playtend Games 2",
        "pricebook_id": "fe3f3f4c-bf36-44fc-9af6-e460276b2a45",
        "updated_at": "2023-03-23T14:52:51.731Z"
      },
      "id": "f13393e4-7d03-479e-a264-8c2fbc87705c",
      "relationships": {
        "releases": {
          "links": {
            "related": "/pcm/catalogs/f13393e4-7d03-479e-a264-8c2fbc87705c/releases"
          },
          "meta": {
            "count": 1
          }
        },
        "rules": {
          "links": {
            "related": "/pcm/catalogs/rules?filter=eq(catalog_id,f13393e4-7d03-479e-a264-8c2fbc87705c)"
          }
        }
      },
      "type": "catalog"
    },
  ],
  "links": {
    "self": "/pcm/catalogs"
  }
}
```
