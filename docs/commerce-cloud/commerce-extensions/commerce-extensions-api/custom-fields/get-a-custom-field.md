---
title: Get a Custom Field
nav_label: Get a Custom Field
sidebar_position: 3
---

## `GET` Get by ID

```http
https://useast.api.elasticpath.com/v2/settings/extensions/custom-apis/:customApiId/fields/:customFieldId
```

## Paramerers

### Path parameters

| Name            | Required | Type     | Description                                               |
|-----------------|----------|----------|-----------------------------------------------------------|
| `customApiId`   | Required | `string` | The unique identifier of the Custom API.                  |
| `customFieldId` | Required | `string` | The unique identifier of the Custom Field to be returned. |

### Headers

| Name            | Required | Type     | Description                                         |
|-----------------|----------|----------|-----------------------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Example

```bash
curl -X GET https://useast.api.elasticpath.com/v2/settings/extensions/custom-apis/:customApiId/fields/:customFieldId \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
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
        "regex": 32
      }
    }
  }
}
```
