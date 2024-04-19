---
title: Get all Entries
nav_label: Get all Entries
sidebar_position: 2
---

## `GET` Get all Entries

```http
https://useast.api.elasticpath.com/v2/flows/:slug/entries
```

## Parameters

### Path parameters

| Name   | Required | Type     | Description                                   |
|:-------|:---------|:---------|:----------------------------------------------|
| `slug` | Required | `string` | The slug for the flow you are requesting entries for. |

### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Query parameters

| Name     | Required | Type     | Description                                                                                                   |
|:---------|:---------|:---------|:--------------------------------------------------------------------------------------------------------------|
| `page[limit]`  | Optional | `integer` | The number of records per page.                                                                                         |
| `page[offset]` | Optional | `integer` | The number of records to offset the results by.     

:::note
You can use pagination with this resource. For more information, see [pagination](/docs/commerce-cloud/api-overview/pagination).
:::                                                                    |

## Request Examples

### Curl

```bash
curl https://useast.api.elasticpath.com/v2/flows/:slug/entries \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

### JavaScript SDK

```javascript
const flowSlug = "flow-slug";

// Where `EPCC` is an authenticated client
await EPCC.Flows.GetEntries(flowSlug);
```

## Response Example

`200 OK`

```json
{
    "data": [
        {
            "id": "ce1f0b19-23c3-487b-aa2a-552b77abdf0c",
            "type": "entry",
            "brand-image": "https://files-eu.epusercontent.com/e8c53cb0-120d-4ea5-8941-ce74dec06038/61118f21-14a2-466c-a84b-c30b1f900cf9.png",
            "meta": {
                "owner": "organization",
                "timestamps": {
                    "created_at": "2018-06-05T20:58:25.596Z",
                    "updated_at": "2018-06-05T20:58:25.596Z"
                }
            },
            "links": {
                "self": "https://useast.api.elasticpath.com/v2/flows/brands/entries/ce1f0b19-23c3-487b-aa2a-552b77abdf0c"
            }
        },
        {
            "id": "a5fcf6bc-233f-44d7-a3b0-0961eed3df9d",
            "type": "entry",
            "brand-image": "someimage for brand x",
            "meta": {
                "owner": "organization",
                "timestamps": {
                    "created_at": "2018-06-06T14:48:59.006Z",
                    "updated_at": "2018-06-06T14:48:59.006Z"
                }
            },
            "links": {
                "self": "https://useast.api.elasticpath.com/v2/flows/brands/entries/a5fcf6bc-233f-44d7-a3b0-0961eed3df9d"
            }
        }
    ],
    "links": {
        "current": "https://useast.api.elasticpath.com/v2/flows/products/entries?page[limit]=2&page[offset]=0",
        "first": "https://useast.api.elasticpath.com/v2/flows/products/entries?page[limit]=2&page[offset]=0",
        "last": "https://useast.api.elasticpath.com/v2/flows/products/entries?page[limit]=2&page[offset]=36",
        "previous": null,
        "next": "https://useast.api.elasticpath.com/v2/flows/products/entries?page[limit]=2&page[offset]=2"
    },
    "meta": {
        "page": {
            "limit": 2,
            "offset": 0,
            "current": 1,
            "total": 19
        },
        "results": {
            "total": 37
        }
    }
}
```
