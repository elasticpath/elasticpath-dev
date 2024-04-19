---
title: Create an Attribute
nav_label: Create an Attribute
sidebar_position: 20
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `POST` Create an Attribute

The API does not support creating attributes in bulk. Attributes must be created individually. 

```http
https://useast.api.elasticpath.com/v2/fields
```

## Parameters

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
| `relationships` | Required | `object` | Specifies the relationship object to link this attribute to a template by providing the ID of the template. **Note**: You can link an attribute to only one template.|

## Request Example

```bash
curl -X POST "https://useast.api.elasticpath.com/v2/fields" \
     -H "Authorization: XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
  "data": {
    "type": "field",
    "name": "SkinType",
    "slug": "SkinType",
    "field_type": "string",
    "description": "Pim Product Custom Flow Field",
    "required": false,
    "default": 0,
    "enabled": true,
    "order": 1,
    "relationships": {
      "flow": {
        "data": {
          "type": "flow",
          "id": "{{flowID}}"
        }
```

## Response Example

`201 Created`

```json
{
    "data": {
        "id": "102b2087-d56a-45e7-bf1c-e9517716abb3",
        "type": "field",
        "name": "SkinType",
        "slug": "SkinType",
        "description": "PIM Product Custom Flow Field",
        "required": false,
        "default": 0,
        "enabled": true,
        "order": 1,
        "omit_null": false,
        "links": {
            "self": "https://epcc-integration.global.ssl.fastly.net/v2/flows/24c2a332-a76a-4988-81e3-8a24324998a6/fields/e0b2031d-eda0-4e7d-946a-aa3f845fd572"
        },
        "relationships": {
            "flow": {
                "data": {
                    "id": "24c2a332-a76a-4988-81e3-8a24324998a6",
                    "type": "flow"
                }
            }
        },
        "meta": {
            "owner": "store",
            "timestamps": {
                "created_at": "2023-06-23T10:04:41.756Z",
                "updated_at": "2023-06-23T10:04:41.756Z"
            }
        }
    }
}
```

:::caution
You cannot update the `field_type` after creating an attribute.
:::
