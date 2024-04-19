---
title: Get a File
nav_label: Get a File
sidebar_position: 30
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `GET` Get a File by ID

```http
https://useast.api.elasticpath.com/v2/files/:id
```

## Parameters

### Path parameters

| Name | Required | Type     | Description                         |
| ---- | -------- | -------- | ----------------------------------- |
| `id` | Required | `string` | The unique identifier for the file. |

### Headers

| Name            | Required | Type     | Description                                         |
| --------------- | -------- | -------- | --------------------------------------------------- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Examples

### Curl

```bash
curl -X GET https://useast.api.elasticpath.com/v2/files/:id \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

### JavaScript SDK

```javascript
const fileId = "25617d3e-14a6-434c-bfab-3fda87517aaf";

// Where `EPCC` is an authenticated client
await EPCC.Files.Get(fileId);
```

## Response Example

`200 OK`

```json
{
    "data": {
        "type": "file",
        "id": "f8cf26b3-6d38-4275-937a-624a83994702",
        "link": {
            "href": "https://files-eu.epusercontent.com/e8c53cb0-120d-4ea5-8941-ce74dec06038/f8cf26b3-6d38-4275-937a-624a83994702.png"
        },
        "file_name": "f6669358-85db-4367-9cde-1deb77acb5f4.png",
        "mime_type": "image/png",
        "file_size": 110041,
        "meta": {
            "dimensions": {
                "width": 1000,
                "height": 1000
            },
            "timestamps": {
                "created_at": "2018-03-13T13:45:21.673Z"
            }
        },
        "links": {
            "self": "https://useast.api.elasticpath.com/v2/files/f8cf26b3-6d38-4275-937a-624a83994702"
        }
    }
}
```
