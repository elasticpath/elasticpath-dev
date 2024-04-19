---
title: Get a Field
nav_label: Get a Field
sidebar_position: 3
---

## `GET` Get a Field

```http
https://useast.api.elasticpath.com/v2/fields/:id
```

## Parameters

### Path parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `id` | Required | `string` | The ID for the field you are requesting. |

### Headers

| Name            | Required | Type     | Description                                         |
| --------------- | -------- | -------- | --------------------------------------------------- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Examples

### Curl

```bash
curl https://useast.api.elasticpath.com/v2/fields/:id \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

### JavaScript SDK

```javascript
const fieldId = "25617d3e-14a6-434c-bfab-3fda87517aaf";

// Where `EPCC` is an authenticated client
await EPCC.Fields.Get(fieldID);
```

## Response Example

`200 OK`

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
