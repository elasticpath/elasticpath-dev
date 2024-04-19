---
title: Update an Attribute
nav_label: Update an Attribute
sidebar_position: 30
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `PUT` Update an Attribute

```http
https://useast.api.elasticpath.com/v2/fields/:id
```

## Parameters

### Path parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `id` | Required | `string` | The unique identifier for the attribute that you want to update.|

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `type` | Required | `string` | Specifies the type of the resource. You must use `field`.|
| `name` | Required | `string` | Specifies the name of the attribute. |
| `slug` | Required | `string` | Specifies a unique slug identifier for the attribute. |
| `field_type` | Required | `string` | Specifies the type of field. The options are `string`, `integer`, `boolean`, `float`, or `date`. You cannot update the `field_type` after creating an attribute.|
| `description` | Required | `string` | Provides a description for the attribute. |
| `required` | Required | `boolean` | Specifies whether an input is required for this attribute when you create an entry fo r the attribute. Set `true` if input is required. Set `false` if no input is required for the attribute entries.|
| `default` | Optional | `string` | Specifies an optional value to use if the attribute is required and no value is provided. |
| `enabled` | Required | `boolean` | Specifies whether the attribute is enabled. Set `true` to enable using the attribute in a template, other wise use `false`.|
| `validation_rules` | Optional | `array[object]` | Specifies the validation rules to use for attribute. |
| `order` | Optional | `integer` | Specifies the order in which the attribute is returned relative to the rest of the flow fields. |
| `omit_null` | Optional | `boolean` | Specifies whether the attribute is omitted from responses. Set `true` to omit the attribute from response. Set `true` to include the attribute in responses. |
| `relationships` | Required | `object` | Specifies the relationship object to link this attribute to a template by providing the ID of the template. Note that you can link an attribute to only one template.|

## Request Example

```bash
curl -X POST "https://useast.api.elasticpath.com/v2/fields/:id" \
     -H "Authorization: XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
  "data": {
    "type": "field",
    "id": "{{fieldID}}",
    "name": "SkinType",
    "slug": "SkinType",
    "field_type": "string",
    "description": "PIM Product attribute updated",
    "required": true,
    "default": 1
  }
}'
```

## Response Example

`200 OK`

```json
{
    "data": {
        "id": "102b2087-d56a-45e7-bf1c-e9517716abb3",
        "ype": "field",
        "name": "SkinType",
        "slug": "SkinType",
        "field_type": "string",
        "description": "PIM Product attribute updated",
        "required": true,
        "default": "1",
        "enabled": true,
        "order": "1",
        "omit_null": false,
        "links": {
            "self": "https://useast.api.elasticpath.com/v2/flows/6d320b42-237d-4474-8452-d49f884d4ae1/fields/102b2087-d56a-45e7-bf1c-e9517716abb3"
        },
        "relationships": {
            "flow": {
                "data": {
                    "id": "6d320b42-237d-4474-8452-d49f884d4ae1",
                    "type": "flow"
                }
            }
        },
        "meta": {
            "owner": "organization",
            "timestamps": {
                "created_at": "2018-05-10T18:19:11.559Z",
                "updated_at": "2018-05-10T18:36:01.208Z"
            }
        }
    }
}'
```
