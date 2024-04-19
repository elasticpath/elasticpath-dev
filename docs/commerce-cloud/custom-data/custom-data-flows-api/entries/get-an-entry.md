---
title: Get an Entry
nav_label: Get an Entry
sidebar_position: 3
---

## `GET` Get an Entry

```http
https://useast.api.elasticpath.com/v2/flows/:slug/entries/:id
```

## Parameters

### Path parameters

| Name   | Required | Type     | Description                                   |
|:-------|:---------|:---------|:----------------------------------------------|
| `id`   | Required | `string` | The ID of the entry you are requesting.       |
| `slug` | Required | `string` | The slug for the flow you are requesting an entry for. |

### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Examples

### Curl

```bash
curl https://useast.api.elasticpath.com/v2/flows/:slug/entries/:id \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

### JavaScript SDK

```javascript
const flowSlug = "flow-slug";
const entryId = "25617d3e-14a6-434c-bfab-3fda87517aaf";

// Where `EPCC` is an authenticated client
await EPCC.Flows.GetEntry(flowSlug, entryId);
```

## Response Example

`200 OK`

```json
{
    "data": {
        "id": "4abb8316-d0a2-4c91-bf29-4d19ba932227",
        "type": "entry",
        "meta": {
            "owner": "organization",
            "timestamps": {
                "created_at": "2018-05-10T15:28:59.192Z",
                "updated_at": "2018-05-10T15:28:59.192Z"
            }
        },
        "links": {
            "self": "https://useast.api.elasticpath.com/v2/flows/products/entries/4abb8316-d0a2-4c91-bf29-4d19ba932227"
        }
    }
}
```
