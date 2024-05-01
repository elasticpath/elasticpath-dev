---
title: Create a Custom Field
nav_label: Create a Custom Field
sidebar_position: 3
---

## `POST` Create a Custom Field

```http
https://useast.api.elasticpath.com/v2/settings/extensions/custom-apis/:customApiId/fields
```

## Parameters

### Path parameters

| Name          | Required | Type     | Description                              |
|---------------|----------|----------|------------------------------------------|
| `customApiId` | Required | `string` | The unique identifier of the Custom API. |


### Headers

| Name            | Required | Type     | Description                                         |
|-----------------|----------|----------|-----------------------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Name          | Required | Type     | Description                                                                                                                                                                                                                                                                                                             |
|---------------|----------|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `type`        | Required | `string` | Represents the type of the object being returned. Always use `custom_field`.                                                                                                                                                                                                                                            |
| `slug`        | Required | `string` | Specifies a unique slug identifier for this field. It is used when setting values for Custom API Entries. The slug must be between 1 and 63 characters. Some values are [reserved](/docs/commerce-cloud/commerce-extensions/commerce-extensions-api/custom-fields/overview#reserved-slugs) and cannot be used as slugs. |
| `name`        | Required | `string` | Specifies the name of the field for the Custom API to be created. The name must contain between 1 and 255 characters.                                                                                                                                                                                                   |
| `description` | Required | `string` | Specifies the description of this field. The description must contain between 1 and 255 characters.                                                                                                                                                                                                                     |
| `field_type`  | Required | `string` | Specifies the type of data you can store. Supported types are `string`, `integer`, `boolean`.                                                                                                                                                                                                                           |
| `validation`* | Optional | `object` | Specifies the limits that can be enforced on data for this field. For more information, see the [validation](/docs/commerce-cloud/commerce-extensions/commerce-extensions-api/custom-fields/overview#validation) section.                                                                                               |

*Even if no validation is set for a field, there are limitations that must be satisfied. For instance, integers must be between -2^53+1 and 2^53-1, the total size of a Custom API Entry must not exceed 64KB.    

## Request Example

```bash
curl -X POST https://useast.api.elasticpath.com/v2/settings/extensions/custom-apis/:customApiId/fields \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
       "data": {
         "name": "Name",
         "description": "Name of wishlist.",
         "slug": "name",
         "type": "custom_field",
         "validation": {
           "string": {
             "min_length": 0,
             "max_length": 16
           }
         }
       }
     }
```

## Response Example

`201 Created`

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
        "updated_at": "2024-02-12T16:58:11.189Z"
      }
    },
    "type": "custom_field",
    "name": "Name",
    "description": "Name of wishlist.",
    "slug": "name",
    "field_type": "string",
    "validation": {
      "string": {
        "min_length": 0,
        "max_length": 16,
        "regex": null
      }
    }
  }
}
```

`400 Bad Request`

The following is returned when the slug in request body to Create a Custom Field contains a [Reserved Slug](/docs/commerce-cloud/commerce-extensions/commerce-extensions-api/custom-fields/overview#reserved-slugs)

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

`409 Conflict`

```json
{
  "errors": [
    {
      "status": "409",
      "title": "Conflict",
      "detail": "custom_field with the given slug already exists"
    }
  ]
}
```
