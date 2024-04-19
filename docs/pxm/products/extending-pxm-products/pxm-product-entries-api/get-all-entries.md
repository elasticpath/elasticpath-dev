---
title: Get all Entries
nav_label: Get all Entries
sidebar_position: 10
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

:::note
When call all entries, all entries from both flows and Product Experience Manager attributes are returned.
:::

## `GET` Get all Entries

```http
https://useast.api.elasticpath.com/v2/flows/:slug/entries
```

## Parameters

### Path parameters

| Name   | Required | Type     | Description                                   |
|:-------|:---------|:---------|:----------------------------------------------|
| `slug` | Required | `string` | Specifies the slug of a template to get the entries of an attribute in that template. |

### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Query parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `filter`| Optional | `string` | Specifies the filter attributes. See [Filtering](#filtering). |
| `page[limit]` | Optional | `integer` | The number of records per page. |
| `page[offset]` | Optional | `integer` | The number of records to offset the results by. |

## Filtering

You can filter your flow entries on the entry id. For example, you may want to return a specific list of flow entries.

| Operator | Description | Supported Attributes | Example Endpoints |
|:--- |:--- |:--- |:--- |
| `Eq` | Checks if the values of two operands are equal. If they are, the condition is true. | `owner`| `filter=eq(owner,store)` |
| `In` | Checks if the values are included in the specified string. If they are, the condition is true. | `id` | `filter=in(id,dd9b190b-1ba1-4185-bb73-d70ccd4e3835,99a77b76-1882-4c81-8f39-517347e9e5fb,a2b8ebb2-853e-4141-9ca4-a449576ce165)` |

## Request Examples

### Curl

```bash
curl https://useast.api.elasticpath.com/v2/flows/:slug/entries \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

### JavaScript SDK

```javascript
const MoltinGateway = require("@moltin/sdk").gateway;
const Moltin = MoltinGateway({
    client_id: "X",
});
const slug = "XXXX";
Moltin.Flows.GetEntries(slug).then((entries) => {
    // Do something
});
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
                "owner": "store",
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
            "brand-image": "some image for brand x",
            "meta": {
                 "owner": "store",
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
