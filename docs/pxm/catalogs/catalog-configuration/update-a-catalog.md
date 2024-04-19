---
title: Update a Catalog
nav_label: Update a Catalog
sidebar_position: 50
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `PUT` Update a Catalog

```http
https://useast.api.elasticpath.com/pcm/catalogs/:catalogId
```

Updates an existing catalog. This operation performs a sparse update. Only those catalog fields included in the request body are updated.

## Parameters

### Path parameters

 | Name | Required | Type | Description |
 | :--- | :--- | :--- | :--- |
 | `catalogId` | Required | `string` | The unique identifier of a catalog. |

### Headers

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. You must use a client credentials token. |

### Body

Required. A [`Catalog`](/docs/pxm/catalogs/catalog-configuration/catalog-configuration-overview#the-catalog-object) object with the attributes you want to update.

| Attribute | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `id` | Required | `string` | The same `catalogId` that you specify in the path. |
| `type` | Required | `string` | The type of object being returned. Always: `catalog` |
| `attributes.name` | Optional | `string` | The name of the catalog. |
| `attributes.description` | Required | `string` | A description of the catalog, such as the purpose for the catalog. |
| `attributes.hierarchy_ids` | Optional | `[string]` | The unique identifiers of the hierarchies to associate with this catalog. You can use this attribute to sort your hierarchies. Add your hierarchies in the order that you want them to be displayed in your catalog. |
| `attributes.pricebook_id` | Optional | `string` | The unique identifier of the price book to associate with this catalog. |

## Request Example

```bash
curl -X PUT https://useast.api.elasticpath.com/pcm/catalogs/a2a69ad2-85cd-4fb1-8e2b-d621bf915a15 \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
         "data": {
            "id": "fe3f3f4c-bf36-44fc-9af6-e460276b2a45",
            "type": "catalog",
            "attributes": {
            "description": "This is a new description."
            }
        }
    }
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
     "id": "fe3f3f4c-bf36-44fc-9af6-e460276b2a45",
     "priority": 100
    }
   ],
   "created_at": "2023-10-09T13:23:19.051Z",
   "description": "A new description",
   "hierarchy_ids": [
    "db9864c8-79ab-4e04-9ef9-a0064ad3bf25"
   ],
   "name": "Skincare",
   "updated_at": "2024-04-05T15:16:18.531Z"
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
