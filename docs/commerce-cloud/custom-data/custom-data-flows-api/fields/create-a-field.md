---
title: Create a Field
nav_label: Create a Field
sidebar_position: 4
---

## `POST` Create a Field

```http
https://useast.api.elasticpath.com/v2/fields
```

:::caution
Custom names and values prefixed with `$` are not supported.
:::

## Parameters

### Headers

| Name            | Required | Type     | Description                                         |
| --------------- | -------- | -------- | --------------------------------------------------- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `type` | Required | `string` | Specifies the type of the resource object, use `field`. |
| `name` | Required | `string` | Specifies the name of the field. |
| `slug` | Required | `string` | Specifies a unique slug identifier for the field. |
| `field_type` | Required | `string` | Specifies the type of field, such as `string`, `integer`, `boolean`, `float`, `date`, `relationship`. |
| `description` | Required | `string` | Specifies the description for this field. |
| `required` | Required | `boolean` | Specifies whether this field is required. The options are `true` or `false`. Use `false` if the `field_type` is a relationship. |
| `default` | Optional | Use the same type provided for `field_type` | Specifies a default value for the field if no value is provided and the field is required. |
| `enabled` | Required | `boolean` | Specifies whether this field is enabled on the flow. The options are `true` or `false`. |
| `validation_rules` | Optional | `array[object]` | Defines the validation rules to use with this field. For a list of rule types, see the [validation rules](/docs/commerce-cloud/custom-data/custom-data-flows-api/fields#field-validation-rules) section. |
| `order` | Optional | `integer` | Denotes the order in which this field is returned relative to the rest of the flow fields. |
| `omit_null` | Optional | `boolean` | Specifies to omit this field from response if the value is `null`. |
| `relationships` | Required | `object` | Specifies a relationship object to link this field to a flow. |

:::note
You can link a field to only one flow.
:::

:::caution
You cannot update the `field_type` after creating a field.
:::

:::note
You cannot include the following  values in `data.slug`:

- `id`
- `type`
- `meta`
- `links`
- `relationships`
- `weight`
- `weights`
- `attribute`
- `attributes`
- `dimension`
- `dimensions`
:::

## Request Examples

### Curl

```bash
curl -X POST "https://useast.api.elasticpath.com/v2/fields" \
     -H "Authorization: XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
      "data": {
        "type": "field",
        "name": "Product Rating",
        "slug": "product-rating",
        "field_type": "integer",
        "validation_rules": [
            {
                "type": "between",
                "options": {
                    "from": 1,
                    "to": 5
               },
            },
        ],
        "description": "Average rating as given by our users",
        "required": false,
        "default": 0,
        "enabled": true,
        "order": 1,
        "omit_null": false,
        "relationships": {
            "flow": {
                "data": {
                    "type": "flow",
                    "id": "e4145c27-aba1-46af-81a3-58f5e1cf7f15"
                },
            },
        },
    },
}
```

### JavaScript SDK

```javascript
const data = {
    type: "field",
    name: "Product Rating",
    slug: "product-rating",
    field_type: "integer",
    validation_rules: [
        {
            type: "between",
            options: {
                from: 1,
                to: 5
            },
        },
    ],
    description: "Average rating as given by our users",
    required: false,
    default: 0,
    enabled: true,
    order: 1,
    omit_null: false,
    relationships: {
        flow: {
            data: {
                type: "flow",
                id: "e4145c27-aba1-46af-81a3-58f5e1cf7f15",
            },
        },
    },
};

// Where `EPCC` is an authenticated client
await EPCC.Fields.Create(data);
```

## Response Example

`201 Created`

```json
{
    "data": {
        "id": "102b2087-d56a-45e7-bf1c-e9517716abb3",
        "type": "field",
        "field_type": "integer",
        "slug": "product-rating",
        "name": "Product Rating",
        "description": "Average rating as given by our users",
        "required": false,
        "default": null,
        "enabled": true,
        "validation_rules": [
            {
                "type": "between",
                "options": {
                    "from": 1,
                    "to": 5
                }
            }
        ],
        "order": 1,
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
                "updated_at": "2018-05-10T18:19:11.559Z"
            }
        }
    }
}
```
