---
title: Get All Unassigned Account Members
nav_label: Get All Unassigned Account Members
sidebar_position: 30
---

Use this resource to get a list of all account members that are not assigned to an account.

## `GET` Get a list of Unassigned Account Members

```http
https://useast.api.elasticpath.com/v2/accounts/:accountId/account-memberships/unassigned-account-members/
```

## Parameters

### Path parameters

| Name        | Required | Type     | Description                                                                             |
| ----------- | -------- | -------- | --------------------------------------------------------------------------------------- |
| `accountId` | Required | `string` | The ID of the account for which you want to get the list of unassigned account members. |

### Headers

| Name            | Required | Type     | Description                                         |
| --------------- | -------- | -------- | --------------------------------------------------- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Query parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `filter` | Optional | `string` | Filter attributes. For more information, see the [Filtering unassigned account members](/docs/commerce-cloud/accounts/using-account-membership-api/get-all-unassigned-account-members#filtering) section. |

:::note
You can use pagination with this resource. For more information, see [pagination](/docs/commerce-cloud/api-overview/pagination).
:::

## Request Examples

### Curl

```bash
curl -X GET https://useast.api.elasticpath.com/v2/accounts/:accountId/account-memberships/unassigned-account-members/ \
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
Moltin.AccountMembers.UnassignedAccountMembers(accountId).then((acc) => {
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
            "id": "908f7849-60da-4e4a-a3b1-51d4cbe3b953",
            "type": "account_member",
            "name": "Ron Swanson",
            "email": "ron@swanson.com",
            "links": {
                "self": "https://useast.api.elasticpath.com/v2/account-members/908f7849-60da-4e4a-a3b1-51d4cbe3b953"
            }
        },
        {
            "id": "0ff71321-f7ae-4400-abc2-d7919a78d429",
            "type": "account_member",
            "name": "John Smith",
            "email": "john@smith.com",
            "links": {
                "self": "https://useast.api.elasticpath.com/v2/account-members/0ff71321-f7ae-4400-abc2-d7919a78d429"
            }
        }
    ],
    "links": {
        "current": "https://useast.api.elasticpath.com/v2/account-members?page[offset]=0&page[limit]=100",
        "first": "https://useast.api.elasticpath.com/v2/account-members?page[offset]=0&page[limit]=100",
        "last": "https://useast.api.elasticpath.com/v2/account-members?page[offset]=0&page[limit]=100",
        "next": "null",
        "prev": "null"
    }
}
```

## Filtering

The following operators and attributes are available for [filtering](/docs/commerce-cloud/api-overview/filtering) unassigned account members.

| Operator | Description                                                                                          |
| :------- | :--------------------------------------------------------------------------------------------------- |
| `eq`     | Checks whether the values of two operands are equal. If the values are equal, the condition is true. |
| `like`   | Checks if the operand contains the specified string. You can use wildcard characters in operand.     |

| Attribute | Type     | Operator      | Example                            |
| :-------- | :------- | :------------ | :--------------------------------- |
| `email`   | `string` | `eq` / `like` | `eq(email,ronswanson@example.com)` |
| `name`    | `string` | `eq` / `like` | `like(name,*swan*)`                |

:::note
You can use [pagination](/docs/commerce-cloud/api-overview/pagination) with this resource.
:::
