---
title: Update a Custom API
nav_label: Update a Custom API
sidebar_position: 5
---

## `PUT` Update by ID

```http
https://useast.api.elasticpath.com/v2/settings/extensions/custom-apis/:customApiId
```

## Paramerers

### Path parameters

| Name          | Required | Type     | Description                                            |
|---------------|----------|----------|--------------------------------------------------------|
| `customApiId` | Required | `string` | The unique identifier of the Custom API to be updated. |


### Headers

| Name            | Required | Type     | Description                                         |
|-----------------|----------|----------|-----------------------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |


### Body

| Name          | Required | Type     | Description                                                                                                                                                                         |
|---------------|----------|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `type`        | Required | `string` | Represents the type of the object being returned. Always `custom_api`.                                                                                                              |
| `slug`        | Optional | `string` | Represents a unique slug identifier for the Custom API. This is used to derive the location of your Custom API entries. It must contain between 1 and 63 characters and pluralized. |
| `name`        | Optional | `string` | Specifies the name of the Custom API to be updated. The name must contain between 1 and 255 characters.                                                                             |
| `description` | Optional | `string` | Specifies a description of the Custom API. The description must contain between 1 and 255 characters.                                                                               |

## Request Example

```bash
curl -X PUT https://useast.api.elasticpath.com/v2/settings/extensions/custom-apis/:customApiId \
    -H "Authorization: Bearer XXXX" \
    -H "Content-Type: application/json" \
    -d $ {
      "data": {
        "name": "Wishlist",
        "description": "Updated description for wishlist.",
        "slug": "wishlists",
        "type": "custom_api"
      }
    }
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
    "description": "Updated description for wishlist.",
    "slug": "wishlists",
    "api_type": "wishlist_ext"
  }
}
```

`400 Bad Request`

The following is returned when the `api_type` in the request body does not end with `_ext`

```json
{
  "errors": [
    {
      "status": "400",
      "title": "Bad Request",
      "detail": "The max length of field 'name' is '255'."
    }
  ]
}
```
