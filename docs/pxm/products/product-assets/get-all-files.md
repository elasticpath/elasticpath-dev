---
title: Get all Files
nav_label: Get all Files
sidebar_position: 20
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `GET` Get all Files

```http
https://useast.api.elasticpath.com/v2/files
```

## Parameters

### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Query parameters

| Name     | Required | Type     | Description                                 |
|:---------|:---------|:---------|:--------------------------------------------|
| `filter` | Optional | `string` | Specifies the filter attributes. See [Filtering](#filtering). |
| `page[limit]`  | Optional | `integer` | The number of records per page. See [Pagination](/docs/commerce-cloud/api-overview/pagination).                                                                                        |
| `page[offset]` | Optional | `integer` | The number of records to offset the results by. See [Pagination](/docs/commerce-cloud/api-overview/pagination).                                                                        |

## Filtering

The following operators and attributes are available when filtering on this endpoint.

| Attribute             | Type      | Operators           | Example |
|:----------------------|:----------|:--------------------------|:-------------|
| `file_name`           | `string`  | `eq` / `like`             | `eq(file_name, my_image.jpg)` |
| `width`               | `integer` | `gt` / `ge` / `lt` / `le` | `gt(width,200)` |
| `height`              | `integer` | `gt` / `ge` / `lt` / `le` | `lt(height,500)` |
| `DEPRECATED` `public` | `boolean` | `eq`                      | `eq(public,true)` |
| `file_size`           | `integer` | `gt` / `ge` / `lt` / `le` | `le(file_size,20953)` |

Example string for filtering:

```javascript
const { MoltinClient } = require('@moltin/request')
const client = new MoltinClient({
  client_id: 'X',
  client_secret: 'X'
})
//Clean up the file name
const filterName = fileName.replace(/[^A-Z0-9]/gi, "_")
          .toLowerCase()
  client
  .get(`files/?filter=eq(file_name,${filterName}`);
  .then(product => {
    // Do something...
  })
  .catch(console.error)
```

For more information, see [Filtering files](/docs/pxm/products/product-assets/files-overview#filtering).

## Request Examples

### Curl

```bash
curl -X GET https://useast.api.elasticpath.com/v2/files \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

### JavaScript SDK

```javascript
await Moltin.Files.All();
```

## Response Example

`200 OK`

```json
{
    "data": [
        {
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
    ],
    "links": {
        "self": "https://useast.api.elasticpath.com/v2/files?page[offset]=0&page[limit]=100&filter=",
        "first": "https://useast.api.elasticpath.com/v2/files?page[offset]=0&page[limit]=100&filter=",
        "last": null
    },
    "meta": {
        "page": {
            "limit": 100,
            "offset": 0,
            "current": 1,
            "total": 1
        },
        "results": {
            "total": 1
        }
    }
}
```
