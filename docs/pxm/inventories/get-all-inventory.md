---
title: Get all Inventory
nav_label: Get all Inventory
sidebar_position: 30
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `GET` Get Stock for all Products

```http
https://useast.api.elasticpath.com/v2/inventories
```

:::note
You can use pagination with this resource. For more information, see [pagination](/guides/Getting-Started/api-overview/pagination).
:::

## Parameters

### Headers

| Name            | Required | Type     | Description                                         |
|:----------------|:---------|:---------|:----------------------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Query parameters

| Name           | Required | Type      | Description                                     |
|:---------------|:---------|:----------|:------------------------------------------------|
| `page[limit]`  | Optional | `integer` | The number of items to return per page.         |
| `page[offset]` | Optional | `integer` | The number of records to offset the results by. |

## Request Examples

### Curl

```bash
curl -X GET https://useast.api.elasticpath.com/v2/inventories \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

### JavaScript SDK

```javascript
const MoltinGateway = require("@moltin/sdk").gateway;
const Moltin = MoltinGateway({
    client_id: "X",
});
Moltin.Inventories.All().then((inventories) => {
    // Do something
});
```

## Response Example

`200 OK`

```json
{
    "data": [
        {
            "id": "95ff4acc-9d8e-4a8e-be3a-61b174b20c2b",
            "type": "stock",
            "total": 100,
            "available": 100,
            "allocated": 0
        },
        {
            "id": "db33dc42-6a08-4929-8e85-8e1ea619c832",
            "type": "stock",
            "total": 100,
            "available": 100,
            "allocated": 0
        },
        {
            "id": "721fcb79-37d9-4328-b69d-bab7b73d7770",
            "type": "stock",
            "total": 100,
            "available": 100,
            "allocated": 0
        }
    ],
    "links": {
        "current": "https://useast.api.elasticpath.com/v2/inventories?page[offset]=0&page[limit]=50",
        "first": "https://useast.api.elasticpath.com/v2/inventories?page[offset]=0&page[limit]=50",
        "last": "https://useast.api.elasticpath.com/v2/inventories?page[offset]=0&page[limit]=50"
    },
    "meta": {
        "results": {
            "total": 3,
            "all": 3
        },
        "page": {
            "limit": 100,
            "offset": 0,
            "current": 1,
            "total": 1
        }
    }
}
```
