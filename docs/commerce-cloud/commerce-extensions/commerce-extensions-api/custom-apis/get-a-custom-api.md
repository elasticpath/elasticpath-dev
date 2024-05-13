---
title: Get a Custom API
nav_label: Get a Custom API
nav_position: 3
---

## `GET` Get by ID

```http
https://useast.api.elasticpath.com/v2/settings/extensions/custom-apis/:customApiId
```

## Paramerers

### Path parameters

| Name          | Required | Type     | Description                                             |
|---------------|----------|----------|---------------------------------------------------------|
| `customApiId` | Required | `string` | The unique identifier of the Custom API to be returned. |

### Headers

| Name            | Required | Type     | Description                                         |
|-----------------|----------|----------|-----------------------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Example

```bash
curl -X GET https://useast.api.elasticpath.com/v2/settings/extensions/custom-apis/:customApiId \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

## Response Example

`200 OK`

```json
{
  "data": {
    "id": "7e067539-6f6c-46e1-8c55-940031b36c6a",
    "links": {
      "self": "https://useast.api.elasticpath.com/v2/settings/extensions/custom-apis/7e067539-6f6c-46e1-8c55-940031b36c6a"
    },
    "meta": {
      "timestamps": {
        "created_at": "2024-02-12T14:48:15.725Z",
        "updated_at": "2024-02-12T14:48:15.725Z"
      }
    },
    "type": "custom_api",
    "name": "Wishlist",
    "description": "Description for wishlist.",
    "slug": "wishlists",
    "api_type": "wishlist_ext"
  }
}
```
