---
title: Get an Account Membership
nav_label: Get an Account Membership
sidebar_position: 40
---

## `GET` Get an Account Membership

```http
https://useast.api.elasticpath.com/v2/accounts/:id/account-memberships/:id2
```

## Parameters

### Path parameters

| Name  | Required | Type     | Description                                                   |
| ----- | -------- | -------- | ------------------------------------------------------------- |
| `id`  | Required | `string` | The ID of the account that the membership is associated with. |
| `id2` | Required | `string` | The ID of the account membership that you want to delete.     |

### Headers

| Name            | Required | Type     | Description                                         |
| --------------- | -------- | -------- | --------------------------------------------------- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Examples

### Curl

```bash
curl -X DELETE https://useast.api.elasticpath.com/v2/accounts/:id/account-memberships/:id2 \
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
const accountMembershipId = "00000000-0000-1000-8000-000f00000301";
Moltin.AccountMemberships.Get(accountId, accountMembershipId).then((acc) => {
    // Do something
});
```

## Response Example

`200 OK`

```json
{
    "data": {
        "id": "9e227208-b592-49c0-8c8f-043b66c634b0",
        "type": "account_membership",
        "meta": {
            "timestamps": {
                "created_at": "2021-03-10T07:35:38.883Z",
                "updated_at": "2021-03-10T07:35:38.883Z"
            }
        },
        "relationships": {
            "account_member": {
                "data": {
                    "id": "486fa6f1-d85a-44a0-abdf-ff0076fffd6c",
                    "type": "account_member"
                }
            }
        }
    },
    "links": {
        "self": "https://useast.api.elasticpath.com/v2/accounts/b1e8f9ea-7c04-4e16-911c-6898d35731ed/account-memberships/9e227208-b592-49c0-8c8f-043b66c634b0"
    }
}
```
