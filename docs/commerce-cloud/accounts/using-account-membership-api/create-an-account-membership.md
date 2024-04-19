---
title: Create an Account Membership
nav_label: Create an Account Membership
sidebar_position: 50
---

## `POST` Create an Account Membership

:::caution
You can only create up to 1000 account memberships in an account.
:::

```http
https://useast.api.elasticpath.com/v2/accounts/:accountId/account-memberships/
```

## Parameters

### Path parameters

| Name        | Required | Type     | Description                                                               |
| ----------- | -------- | -------- | ------------------------------------------------------------------------- |
| `accountId` | Required | `string` | The unique identifier of the account that the account is associated with. |

### Headers

| Name            | Required | Type     | Description                                         |
| --------------- | -------- | -------- | --------------------------------------------------- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Name                | Required | Type     | Description                                                                    |
| ------------------- | -------- | -------- | ------------------------------------------------------------------------------ |
| `type`              | Required | `string` | Specifies the type of the object. Set this value to `account_membership`.      |
| `account_member_id` | Required | `string` | Specifies the ID of the account member that the membership is associated with. |

## Request Examples

### Curl

```bash
curl -X POST https://useast.api.elasticpath.com/v2/accounts/:accountId/account-memberships// \
    -H "Authorization: Bearer XXXX" \
    -H "Content-Type: application/json" \
    -d $ {
        "data": {
            "type": "account_membership",
            "account_member_id": "486fa6f1-d85a-44a0-abdf-ff0076fffd6c"
          }
    }
```

### JavaScript SDK

```javascript
const MoltinGateway = require("@moltin/sdk").gateway;
const Moltin = MoltinGateway({
    client_id: "X",
    client_secret: "X",
});
const accountId = "00000000-0000-1000-8000-000f00000300";
const accountMemberId = "00000000-0000-1000-8000-000f00000301";
const accountMembership = {
    type: "account_membership",
    account_member_id: accountMemberId,
};
Moltin.AccountMemberships.Create(accountId, accountMembership).then((acc) => {
    // Do something
});
```

## Response Example

`201 Created`

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
