---
title: Update a Custom Field
nav_label: Update a Custom Field
nav_position: 4
---

## `PUT` Update by ID

```http
https://useast.api.elasticpath.com/v2/settings/extensions/custom-apis/:customApiId/fields/:customFieldId
```

## Paramerers

### Path parameters

| Name            | Required | Type     | Description                                |
|-----------------|----------|----------|--------------------------------------------|
| `customApiId`   | Required | `string` | The unique identifier of the Custom API.   |
| `customFieldId` | Required | `string` | The ID for the Custom Field to be updated. |


### Headers

| Name            | Required | Type     | Description                                         |
|-----------------|----------|----------|-----------------------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |


### Body

| Name          | Required | Type     | Description                                                                                                                                                                                                                                                                                                                  |
|---------------|----------|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `type`        | Required | `string` | Represents the type of the object being returned. Always `custom_field`.                                                                                                                                                                                                                                                     |
| `slug`        | Optional | `string` | Specifies a unique slug identifier for this field. This is used when setting values for you Custom API entries and must contain between 1 and 63 characters. Some values are [reserved](/docs/commerce-cloud/commerce-extensions/commerce-extensions-api/custom-fields/overview#reserved-slugs) and cannot be used as slugs. |
| `name`        | Optional | `string` | Specifies the name of the field for the Custom API to be created. The name must contain between 1 and 255 characters.                                                                                                                                                                                                        |
| `description` | Optional | `string` | Specifies the description of this field. The description must contain between 1 and 255 characters.                                                                                                                                                                                                                          |
| `validation`* | Optional | `object` | Specifies the limits that can be enforced on data for this field. For more, see [validation](/docs/commerce-cloud/commerce-extensions/commerce-extensions-api/custom-fields/overview#validation) section.                                                                                                        |

*Even if no validation is set for a field, there are limitations that must be satisfied. For instance, integers must be between -2^53+1 and 2^53-1, the total size of a Custom API Entry must not exceed 64KB.

## Request Example

```bash
curl -X PUT https://useast.api.elasticpath.com/v2/settings/extensions/custom-apis/:customApiId/fields/:customFieldId \
    -H "Authorization: Bearer XXXX" \
    -H "Content-Type: application/json" \
    -d $ {
      "data": {
        "name": "Name",
        "description": "This field stores the name of the wishlist.",
        "slug": "name",
        "type": "custom_field",
        "validation": {
          "string": {
            "min_length": 3,
            "max_length": 128,
            "regex": null
          }
        }
      }
    }  
```

## Response Example

`200 OK`

```json
{
  "data": {
    "id": "859aeba1-03c2-4822-bd4c-89afce93d7eb",
    "links": {
      "self": "https://useast.api.elasticpath.com/v2/settings/extensions/custom-apis/7e067539-6f6c-46e1-8c55-940031b36c6a/fields/859aeba1-03c2-4822-bd4c-89afce93d7eb"
    },
    "meta": {
      "timestamps": {
        "created_at": "2024-02-12T16:58:11.189Z",
        "updated_at": "2024-02-12T17:19:03.713Z"
      }
    },
    "type": "custom_field",
    "name": "Name",
    "description": "This field stores the name of the wishlist.",
    "slug": "name",
    "validation": {
      "string": {
        "min_length": 3,
        "max_length": 128,
        "regex": null
      }
    }
  }
}
```

`400 Bad Request`

The following is returned when the slug in request body to Update a Custom Field contains a [Reserved Slug](/docs/commerce-cloud/commerce-extensions/commerce-extensions-api/custom-fields/overview#reserved-slugs)

```json
{
  "errors": [
    {
      "status": "400",
      "title": "Bad Request",
      "detail": "The field 'slug' is invalid because it matches a reserved word."
    }
  ]
}
```

There cannot be more than 100 Custom Fields for a Custom API, the following is returned if a request attempts to exceed this.

```json
{
  "errors": [
    {
      "status": "400",
      "title": "Bad Request",
      "detail": "maximum number of custom fields reached"
    }
  ]
}
```
