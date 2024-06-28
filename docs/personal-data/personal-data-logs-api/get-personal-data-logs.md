---
title: Get Personal-Data Logs API
sidebar_label: Get Personal-Data Logs  API
sidebar_position: 20
---

Gets a list of logs for a specific resource id and resource type.

## Get Personal Data Logs

```http
https://useast.api.elasticpath.com/v2/personal-data/logs
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
curl -X GET https://useast.api.elasticpath.com/v2/personal-data/logs?filter=eq(resource_type,account_member):eq(resource_id,00000000-0000-1000-8000-000f00000300) \
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
    .Logs()
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
            "total": 4
        }
    },
    "data": [
        {
            "id": "faf8c40f-a680-40ae-b7bc-78533bbdd8c3",
            "store_id": "00000000-0000-1000-8000-000000000000",
            "type": "personal_data_log_entry",
            "initiator": {
                "access-token-email": "accounts@molt.in",
                "access-token-id": "1222341536243515939",
                "access-token-name": "moltin test team",
                "access-token-store-id": "15ea9633-278c-4807-80f7-2009fed63c7e",
                "access-token-type": "client-credentials-token"
            },
            "time": "2022-04-29T10:51:14.374Z",
            "event_type": "user-authentication-info.event.created",
            "delta": {
                "email": "some@email.com",
                "id": "00000000-0000-1000-8000-111111111112",
                "name": "some_name",
                "realm_id": "00000000-0000-1000-8000-111111111111",
                "store_id": "00000000-0000-1000-8000-000000000000",
                "type": "user-authentication-info"
            },
            "resource_id": "00000000-0000-1000-8000-111111111112",
            "resource_type": "user-authentication-info",
            "relationships": {
                "resource_path": {
                    "url": "http://www.elaticpath.com"
                }
            },
            "meta": {},
            "links": {
                "self": "https://useast.api.elasticpath.com/v2/personal-data/logs/faf8c40f-a680-40ae-b7bc-78533bbdd8c3"
            }
        }
    ],
    "links": {
        "current": "https://useast.api.elasticpath.com/v2/personal-data/logs?page[offset]=0&page[limit]=20",
        "first": "https://useast.api.elasticpath.com/v2/personal-data/logs?page[offset]=0&page[limit]=20",
        "last": "https://useast.api.elasticpath.com/v2/personal-data/logs?page[offset]=0&page[limit]=20",
        "next": "null",
        "prev": "null"
    }
}
```
