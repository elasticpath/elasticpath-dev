---
title: Get All Account Memberships on Account Member
nav_label: Get All Account Memberships on Account Member
sidebar_position: 20
---

## `GET` Get a list of Account Memberships on Account Member

```http
https://useast.api.elasticpath.com/v2/account-members/:accountMemberId/account-memberships/
```

## Parameters

### Path parameters

| Name              | Required | Type     | Description                                                              |
|:------------------|:---------|:---------|:-------------------------------------------------------------------------|
| `accountMemberId` | Required | `string` | The ID of the account member for which you want to list the memberships. |

### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Query parameters

| Name     | Required | Type     | Description                                 |
|:---------|:---------|:---------|:--------------------------------------------|
| `filter` | Optional | `string` | Filter attributes. For more information, see the [Filtering account memberships](/docs/commerce-cloud/accounts/using-account-membership-api/overview#filtering) section. |

:::note
You can also use `include=account` to retrieve details about the accounts associated with the account memberships.
You can use pagination with this resource. For more information, see [pagination](/docs/commerce-cloud/api-overview/pagination).
:::

## Request Examples

### Curl

```bash
curl -X GET https://useast.api.elasticpath.com/v2/account-members/:accountMemberId/account-memberships/ \
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
const accountMemberId = "00000000-0000-1000-8000-000f00000300";
Moltin.AccountMemberships.AllOnAccountMember(accountMemberId).then((acc) => {
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
      "total": 1
    }
  },
  "data": [
    {
      "id": "b295b270-b573-467e-93d9-7ae1fd596d49",
      "type": "account_membership",
      "account_member_id": "c18537d9-43e7-480a-8556-2eff17a67e31",
      "meta": {
        "timestamps": {
          "created_at": "2023-04-25T17:57:59.908Z",
          "updated_at": "2023-04-25T17:57:59.908Z"
        }
      },
      "relationships": {
        "account": {
          "data": {
            "id": "28b1ab08-9c5c-4c6b-873f-fa1de4589214",
            "type": "account"
          }
        }
      },
      "links": {
        "self": "link"
      }
    }
  ],
  "links": {
    "current": "link",
    "first": "link",
    "last": "link",
    "next": "null",
    "prev": "null"
  },
  "included": {
    "accounts": [
      {
        "id": "28b1ab08-9c5c-4c6b-873f-fa1de4589214",
        "type": "account",
        "name": "Personal Account",
        "legal_name": "Personal Account",
        "registration_id": null,
        "meta": {
          "timestamps": {
            "created_at": "2023-04-25T17:57:59.892Z",
            "updated_at": "2023-04-25T17:57:59.892Z"
          }
        }
      }
    ]
  }
}
```
