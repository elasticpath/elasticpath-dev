---
title: Update Entry Relationships
nav_label: Update Entry Relationships
sidebar_position: 3
---

## `PUT` Update Entry Relationships

```http
https://useast.api.elasticpath.com/v2/flows/:flowSlug/entries/:entryId/relationships/:fieldSlug
```

Replace the relationships between an entry and a resource. Unlike a `POST` to this endpoint, a `PUT` overrides any existing relationships.

## Parameters

### Path parameters

| Name        | Required | Type     | Description                              |
|:------------|:---------|:---------|:-----------------------------------------|
| `fieldSlug` | Required | `string` | The slug of the field that the relationship belongs to. |
| `entryId`   | Required | `string` | The ID of the entry this field belongs to. |
| `flowSlug`  | Required | `string` | The slug of the entry this flow belongs to. |

### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Name        | Required | Type     | Description                                 |
|:------------|:---------|:---------|:--------------------------------------------|
| `data.id`   | Optional | `string` | The ID of the related resource.             |
| `data.type` | Optional | `string` | Represents the resource type of the object. |
| `data`      | Optional | `object` | Data to be stored.                          |

## Request Examples

### Curl

```bash
curl -X PUT https://useast.api.elasticpath.com/v2/flows/:flowSlug/entries/:entryId/relationships/:fieldSlug \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
      "data": [
    {
      "type": "brand",
      "id": "0d28e5b6-f615-4e1c-b038-275cfde97927"
    }
  ]
}
```

### JavaScript SDK

```javascript
const flowSlug = "flow-slug";
const entryId = "25617d3e-14a6-434c-bfab-3fda87517aaf";
const fieldSlug = "field-slug";
const data = {
    type: "brand",
    id: "0d28e5b6-f615-4e1c-b038-275cfde97927",
};

// Where `EPCC` is an authenticated client
await EPCC.Flows.UpdateEntryRelationship(flowSlug, entryId, fieldSlug, data);
```

## Response Example

`200 OK`

```json
{
    "data": [
        {
            "type": "brand",
            "id": "0d28e5b6-f615-4e1c-b038-275cfde97927"
        }
    ]
}
```
