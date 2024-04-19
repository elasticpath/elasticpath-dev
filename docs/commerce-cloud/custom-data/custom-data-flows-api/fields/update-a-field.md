---
title: Update a Field
nav_label: Update a Field
sidebar_position: 5
---

## `PUT` Update a Field

```http
https://useast.api.elasticpath.com/v2/fields/:id
```

:::caution
Custom names and values prefixed with `$` are not supported.
:::

## Parameters

### Path parameters

| Name | Required | Type     | Description                                     |
|:-----|:---------|:---------|:------------------------------------------------|
| `id` | Required | `string` | The ID for the field you are requesting to be updated. |

### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Name          | Required | Type      | Description                           |
|:--------------|:---------|:----------|:--------------------------------------|
| `type`        | Required | `string`  | Represents the type of object being returned. |
| `name`        | Optional | `string`  | The name of the field.                |
| `slug`        | Optional | `string`  | A unique slug identifier for the field. |
| `description` | Optional | `string`  | Any description for this field.       |
| `required`    | Optional | `boolean` | `true` if required on input, `false` if not. Always false if the field_type is a relationship. |
| `default`     | Optional | `string`  | A default value if none is supplied and field is not required. |
| `enabled`     | Optional | `boolean` | If this field is enabled on the flow this should be `true`, otherwise `false`. |
| `order`       | Optional | `integer` | Denotes the order in which this field is returned relative to the rest of the flow fields. |
| `omit_null`   | Optional | `boolean` | Omit this field from responses if the value is `null`. |

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
curl -X POST "https://useast.api.elasticpath.com/v2/fields/:id" \
     -H "Authorization: XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
      "data": {
        "id": "{FIELD_ID}",
        "type": "field",
        "name": "Average Product Rating",
      }
    }
```

### JavaScript SDK

```javascript
const fieldId = "25617d3e-14a6-434c-bfab-3fda87517aaf";
const data = {
    id: fieldId,
    name: "Average Product Rating",
};

// Where `EPCC` is an authenticated client
await EPCC.Fields.Update(fieldId, data);
```

## Response Example

`200 OK`

```json
{
    "data": {
        "id": "102b2087-d56a-45e7-bf1c-e9517716abb3",
        "type": "field",
        "field_type": "integer",
        "slug": "start-of-life",
        "name": "start-of-life",
        "description": "day the iphone will work",
        "required": true,
        "default": "2018-01-01",
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
                "updated_at": "2018-05-10T18:36:01.208Z"
            }
        }
    }
}
```
