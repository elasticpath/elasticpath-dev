---
title: Get a Custom API Entry
nav_label: Get a Custom API Entry
sidebar_position: 3
---

## `GET` Get by ID

```http
https://useast.api.elasticpath.com/v2/extensions/:customApiSlug/:customEntryId
```

## Paramerers

### Path parameters

| Name            | Required | Type     | Description                                                    |
|-----------------|----------|----------|----------------------------------------------------------------|
| `customApiSlug` | Required | `string` | The unique identifier of the Custom API.                       |
| `customEntryId` | Required | `string` | The unique identifier for the Custom API Entry to be returned. |

### Headers

| Name            | Required | Type     | Description                                         |
|-----------------|----------|----------|-----------------------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Example

```bash
curl -X GET https://useast.api.elasticpath.com/v2/extensions/:slug/:id \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

## Response Example

`200 OK`

```json
{
  "data": {
    "id": "859aeba1-03c2-4822-bd4c-89afce93d7eb",
    "links": {
      "self": "https://useast.api.elasticpath.com/v2/extensions/wishlists/859aeba1-03c2-4822-bd4c-89afce93d7eb"
    },
    "meta": {
      "timestamps": {
        "created_at": "2024-02-12T16:58:11.189Z",
        "updated_at": "2024-02-12T16:58:11.189Z"
      },
      "data_size": 1
    },
    "type": "wishlist_ext",
    "name": "My Wishlist"
  }
}
```
