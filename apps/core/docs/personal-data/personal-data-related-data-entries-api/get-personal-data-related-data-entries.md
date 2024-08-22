---
title: Get Personal-Data Related Data Entries
nav_label: Get Personal-Data Related Data Entries
sidebar_position: 20
---

Gets a list of related data entries filtered by specific resource id and resource type.

## Get Personal Data Related Data Entries

```http
https://useast.api.elasticpath.com/v2/personal-data/related-data-entries
```

:::note

- This request is only accessible to `client_credentials` token users with `Seller Admin`, `Support` and `IT` roles.
- Non `client_credentials` token users cannot access this endpoint. See [Permissions](/docs/authentication/Tokens/permissions).
- This request requires a filter for `resource_type` and `resource_id`.

:::

## Path Parameters

### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Query parameters

| Name     | Required | Type     | Description                                 |
|:---------|:---------|:---------|:--------------------------------------------|
| `filter` | Required | `string` | Filter attributes. For more information, see the [Filtering](/docs/personal-data/personal-data-logs-api/personal-data-logs-api-overview#filtering) section. |

:::note
You can use pagination with this resource. For more information, see [pagination](/guides/Getting-Started/pagination).
:::

## Request Examples

### Curl

```bash
curl -X GET https://useast.api.elasticpath.com/v2/personal-data/related-data-entries?filter=eq(resource_type,account_member):eq(resource_id,00000000-0000-1000-8000-000f00000300) \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

### JavaScript SDK

```javascript
const MoltinGateway = require("@moltin/sdk").gateway;
const Moltin = MoltinGateway({
    client_id: "X",
    client_secret: "X",
});
Moltin.DataEntries.Filter({
    eq: {
        resource_id: "00000000-0000-1000-8000-000f00000300",
        resource_type: "account_member",
    },
})
    .RelatedDataEntries()
    .then((acc) => {
        // Do something
    });
```

## Response Example

`200 OK`

```json
{
    "meta": {
        "page": {
            "limit": 20,
            "offset": 0,
            "current": 1,
            "total": 1
        },
        "results": {
            "total": 1
        }
    },
    "data": [
        {
            "resource_id": "00000000-0000-1000-8000-111111111112",
            "type": "related_data_entry",
            "resource_type": "user-authentication-info"
        }
    ],
    "links": {
        "current": "https://useast.api.elasticpath.com/v2/personal-data/related-data-entries?page[offset]=0&page[limit]=20",
        "first": "https://useast.api.elasticpath.com/v2/personal-data/related-data-entries?page[limit]=20&page[offset]=0",
        "last": "https://useast.api.elasticpath.com/v2/personal-data/related-data-entries?page[offset]=0&page[limit]=20",
        "next": "null",
        "prev": "null"
    }
}
```
