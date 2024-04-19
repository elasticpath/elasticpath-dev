---
title: Get All Account Memberships
nav_label: Get All Account Memberships
sidebar_position: 20
---

## `GET` Get a list of Account Memberships

```http
https://useast.api.elasticpath.com/v2/accounts/:accountId/account-memberships/
```

You can also use `include=account_member` to retrieve details about the account members associated with the account memberships.

With this option, you can get more information about the account members (i.e. name and email) in a single request.

## Parameters

### Path parameters

| Name        | Required | Type     | Description                              |
|:------------|:---------|:---------|:-----------------------------------------|
| `accountId` | Required | `string` | The ID of the account for which you want to list the memberships. |

### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Query parameters

| Name     | Required | Type     | Description                                 |
|:---------|:---------|:---------|:--------------------------------------------|
| `filter` | Optional | `string` | Filter attributes. For more information, see the [Filtering account memberships](/docs/commerce-cloud/accounts/using-account-membership-api/overview#filtering) section. |
| `sort`   | Optional | `string` | Supported attributes are `created_at`,`id`, or `updated_at`. When specified, the results are sorted in ascending order based on the value of the field. To sort in descending order, prefix the attribute with `-`, for example, `-updated_at`. The default sort order is `created_at` in descending order. For more information, see [Sorting](/docs/commerce-cloud/api-overview/sorting). |

:::note
You can use pagination with this resource. For more information, see [pagination](/docs/commerce-cloud/api-overview/pagination).
:::

## Request Examples

### Curl

```bash
curl -X GET https://useast.api.elasticpath.com/v2/accounts/:accountId/account-memberships/ \
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
const accountId = "00000000-0000-1000-8000-000f00000300";
Moltin.AccountMemberships.All(accountId).then((acc) => {
    // Do something
});
```

## Response Example

`200 OK`

```json
{
    "meta": {
        "page": {
            "limit": 100,
            "offset": 0,
            "current": 1,
            "total": 1
        },
        "results": {
            "total": 2
        }
    },
    "data": [
        {
            "id": "24e939f6-178f-497b-9d64-5bf2b5a70a2e",
            "type": "account_membership",
            "meta": {
                "timestamps": {
                    "created_at": "2021-03-24T15:14:05.883Z",
                    "updated_at": "2021-03-24T15:14:05.883Z"
                }
            },
            "relationships": {
                "account_member": {
                    "data": {
                        "id": "f3563135-741d-4818-ae85-0f038f2b8ba1",
                        "type": "account_member"
                    }
                }
            },
            "links": {
                "self": "https://useast.api.elasticpath.com/v2/accounts/5b495058-9ffc-4b9b-810a-c9d43ffc6500/account-memberships/24e939f6-178f-497b-9d64-5bf2b5a70a2e"
            }
        },
        {
            "id": "0b08fcd7-2846-470b-98e2-a741c11babae",
            "type": "account_membership",
            "meta": {
                "timestamps": {
                    "created_at": "2022-10-10T14:34:00.8810Z",
                    "updated_at": "2022-10-10T14:34:00.8810Z"
                }
            },
            "relationships": {
                "account_member": {
                    "data": {
                        "id": "babd5c07-da38-4209-9ce0-2aa601e7651c",
                        "type": "account_member"
                    }
                }
            },
            "links": {
                "self": "https://useast.api.elasticpath.com/v2/accounts/5b495058-9ffc-4b9b-810a-c9d43ffc6500/account-memberships/0b08fcd7-2846-470b-98e2-a741c11babae"
            }
        }
    ],
    "links": {
        "current": "https://useast.api.elasticpath.com/v2/accounts/5b495058-9ffc-4b9b-810a-c9d43ffc6500/account-memberships?include=account_member&page[offset]=0&page[limit]=100",
        "first": "https://useast.api.elasticpath.com/v2/accounts/5b495058-9ffc-4b9b-810a-c9d43ffc6500/account-memberships?include=account_member&page[offset]=0&page[limit]=100",
        "last": "https://useast.api.elasticpath.com/v2/accounts/5b495058-9ffc-4b9b-810a-c9d43ffc6500/account-memberships?page[limit]=100&include=account_member&page[offset]=0",
        "next": "null",
        "prev": "null"
    },
    "included": {
        "account_members": [
            {
                "id": "f3563135-741d-4818-ae85-0f038f2b8ba1",
                "type": "account_member",
                "name": "user_authentication_info_updated",
                "email": "user_authentication_info_updated@elasticpath.com"
            },
            {
                "id": "babd5c07-da38-4209-9ce0-2aa601e7651c",
                "type": "account_member",
                "name": "test_pds_account_member_name_updated",
                "email": "test_pds_account_member_name@ep.com"
            }
        ]
    }
}
```
