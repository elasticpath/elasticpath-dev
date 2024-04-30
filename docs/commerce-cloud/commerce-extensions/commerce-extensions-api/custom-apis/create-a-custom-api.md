---
title: Create a Custom API
nav_label: Create a Custom API
sidebar_position: 4
---

## `POST` Create a Custom API

```http
https://useast.api.elasticpath.com/v2/settings/extensions/custom-apis
```

## Paramerers

### Headers

| Name            | Required | Type     | Description                                         |
|-----------------|----------|----------|-----------------------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |


### Body

| Name          | Required | Type     | Description                                                                                                                                                                         |
|---------------|----------|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `type`        | Required | `string` | Represents the type of the object being returned. Always use `custom_api`.                                                                                                          |
| `slug`        | Required | `string` | Represents a unique slug identifier for the Custom API. This is used to derive the location of your Custom API entries. It must contain between 1 and 63 characters and pluralized. |
| `name`        | Required | `string` | Specifies the name of the Custom API to be created. The name must contain between 1 and 255 characters.                                                                             |
| `description` | Required | `string` | Specifies a description of the Custom API. The description must contain between 1 and 255 characters.                                                                               |
| `api_type`    | Required | `string` | Specifies the `type` of any Custom API entries that are created. It must end with `_ext` and have no more than 63 characters. It cannot contain `-` character.                      |

## Request Example

```bash
curl -X POST https://useast.api.elasticpath.com/v2/settings/extensions/custom-apis \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
       "data": {
         "name": "Wishlist",
         "description": "Description for wishlist.",
         "slug": "wishlists",
         "api_type": "wishlist_ext",
         "type": "custom_api"
       }
     }
```

## Response Example

`201 Created`

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

`400 Bad Request`

The following is returned when the `api_type` in the request body does not end with `_ext`

```json
{
  "errors": [
    {
      "status": "400",
      "title": "Bad Request",
      "detail": "The field 'api_type' must consist of lowercase alphanumeric characters or underscores, end with '_ext', and be between 1 to 59 characters long before '_ext'."
    }
  ]
}
```

`409 Conflict`

```json
{
  "errors": [
    {
      "status": "409",
      "title": "Conflict",
      "detail": "custom_api with the given api_type already exists"
    }
  ]
}
```