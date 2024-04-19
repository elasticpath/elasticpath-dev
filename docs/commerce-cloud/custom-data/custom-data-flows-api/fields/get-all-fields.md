---
title: Get all Fields
nav_label: Get all Fields
sidebar_position: 2
---

## `GET` Get all Fields

```http
https://useast.api.elasticpath.com/v2/fields
```

### Parameters

#### Headers

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Request examples

#### Curl

```bash
curl https://useast.api.elasticpath.com/v2/fields \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

#### JavaScript SDK

```javascript
// Where `EPCC` is an authenticated client
await EPCC.Fields.All();
```

### Response example

`200 OK`

```json
{
    "data": [
        {
            "id": "e88d03d3-d46e-40d0-8302-25e6b5b1bd33",
            "type": "field",
            "field_type": "boolean",
            "slug": "on_sale",
            "name": "On Sale?",
            "description": "Is this on sale?",
            "required": false,
            "default": null,
            "enabled": true,
            "order": null,
            "omit_null": false,
            "validation_rules": [],
            "links": {
                "self": "https://useast.api.elasticpath.com/v2/flows/9d69c6cf-aaee-4dc6-8908-d2bd053446a2/fields/e88d03d3-d46e-40d0-8302-25e6b5b1bd33"
            },
            "relationships": {
                "flow": {
                    "data": {
                        "id": "9d69c6cf-aaee-4dc6-8908-d2bd053446a2",
                        "type": "flow"
                    }
                }
            },
            "meta": {
                "owner": "organization",
                "timestamps": {
                    "created_at": "2018-08-23T10:28:43.609Z",
                    "updated_at": "2018-08-23T10:28:43.609Z"
                }
            }
        }
    ]
}
```

## `GET` Get all Fields by Flow

```http
https://useast.api.elasticpath.com/v2/flows/:slug/fields
```

### Parameters

#### Path parameters

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `slug` | Required | `string` | The **slug** of the Flow you want to return fields for. |

#### Headers

| Name            | Required | Type     | Description                                         |
| --------------- | -------- | -------- | --------------------------------------------------- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Request examples

#### Curl

```bash
curl https://useast.api.elasticpath.com/v2/flows/:slug/fields \
     -H "Authorization: Bearer XXXX"
```

#### JavaScript SDK

```javascript
const fieldSlug = "field-slug";

// Where `EPCC` is an authenticated client
await EPCC.Flows.GetFields(fieldSlug);
```

### Response example

`200 OK`

```json
{
    "data": [
        {
            "id": "23d26fd2-d2e2-4c72-b4b4-3ef7a31bc47f",
            "type": "field",
            "field_type": "string",
            "slug": "background_color",
            "name": "background colors",
            "description": "background color for the product",
            "required": false,
            "default": "#ffffff",
            "enabled": true,
            "validation_rules": [],
            "order": null,
            "omit_null": false,
            "links": {
                "self": "https://useast.api.elasticpath.com/v2/flows/248c7776-bd9f-4075-8980-461b02ed3757/fields/23d26fd2-d2e2-4c72-b4b4-3ef7a31bc47f"
            },
            "relationships": {
                "flow": {
                    "data": {
                        "id": "248c7776-bd9f-4075-8980-461b02ed3757",
                        "type": "flow"
                    }
                }
            },
            "meta": {
                "owner": "organization",
                "timestamps": {
                    "created_at": "2017-06-26T12:55:33.560Z",
                    "updated_at": "2017-12-19T12:31:24.570Z"
                }
            }
        },
        {
            "id": "5f4be5bd-0c83-417a-b744-7d8c49636ab1",
            "type": "field",
            "field_type": "string",
            "slug": "background_image",
            "name": "Background Image",
            "description": "The background image for the category",
            "required": false,
            "default": null,
            "enabled": true,
            "validation_rules": [],
            "order": null,
            "omit_null": false,
            "links": {
                "self": "https://useast.api.elasticpath.com/v2/flows/248c7776-bd9f-4075-8980-461b02ed3757/fields/5f4be5bd-0c83-417a-b744-7d8c49636ab1"
            },
            "relationships": {
                "flow": {
                    "data": {
                        "id": "248c7776-bd9f-4075-8980-461b02ed3757",
                        "type": "flow"
                    }
                }
            },
            "meta": {
                "owner": "organization",
                "timestamps": {
                    "created_at": "2018-03-29T10:33:24.056Z",
                    "updated_at": "2018-03-29T10:33:24.056Z"
                }
            }
        }
    ]
}
```
