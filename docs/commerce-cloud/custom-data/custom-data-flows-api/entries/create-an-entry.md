---
title: Create an Entry
nav_label: Create an Entry
sidebar_position: 4
---

## `POST` Create an Entry

```http
https://useast.api.elasticpath.com/v2/flows/:slug/entries
```

## Parameters

### Path parameters

| Name   | Required | Type     | Description                                   |
|:-------|:---------|:---------|:----------------------------------------------|
| `slug` | Required | `string` | The slug for the flow for which you want to create an entry. |

### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Name          | Required | Type     | Description                            |
|:--------------|:---------|:---------|:---------------------------------------|
| `type`        | Required | `string` | The type of the resource object, use `entry`. |
| **fieldSlug** | Required | `string` | Where **fieldSlug** is the slug for each field on this flow along with the corresponding value for this entry. |

## Request Examples

### Curl

```bash
curl -X POST https://useast.api.elasticpath.com/v2/flows/:flowSlug/entries \
     -H "Authorization: XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
       "data": {
         "type": "entry",
         "SkinType": "Oily",
         "ml": "200"
       }
     }
```

### JavaScript SDK

```javascript
const flowSlug = "flow-slug";
const data = {
    "{FIELD_SLUG}": "A value",
};

// Where `EPCC` is an authenticated client
await EPCC.Flows.CreateEntry(flowSlug, data);
```

## Response Example

`201 Created`

```json
{
    "data": {
        "id": "10fe2aca-09fb-42fe-a1d4-081134320641",
        "type": "entry",
        "meta": {
            "owner": "organization",
            "timestamps": {
                "created_at": "2021-10-26T17:10:56.329Z",
                "updated_at": "2021-10-26T17:10:56.329Z"
            }
        },
        "links": {
            "self": "https://epcc-integration.global.ssl.fastly.net/v2/flows/products/entries/10fe2aca-09fb-42fe-a1d4-081134320641"
        }
    }
}
```
