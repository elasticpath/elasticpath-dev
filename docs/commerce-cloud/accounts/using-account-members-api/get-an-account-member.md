---
title: Get an Account Member
nav_label: Get an Account Member
sidebar_position: 30
---

## `GET` Get an Account Member

```http
https://useast.api.elasticpath.com/v2/account-members/:id
```

## Parameters

### Path parameters

| Name | Required | Type     | Description                                                            |
| ---- | -------- | -------- | ---------------------------------------------------------------------- |
| `id` | Required | `string` | The unique identifier of the account member that you want to retrieve. |

### Headers

| Name            | Required | Type     | Description                                         |
| --------------- | -------- | -------- | --------------------------------------------------- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Examples

### Curl

```bash
curl -X GET https://useast.api.elasticpath.com/v2/account-members/:id \
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
Moltin.AccountMembers.Get(accountMemberId).then((acc) => {
    // Do something
});
```

## Response Example

`200 OK`

```json
{
    "data": {
        "id": "0ff71321-f7ae-4400-abc2-d7919a78d429",
        "type": "account_member",
        "name": "John Smith",
        "email": "john@smith.com",
         "meta": {
          "timestamps": {
            "created_at": "2021-03-15T16:18:10.883Z",
            "updated_at": "2021-03-15T16:18:10.883Z"
          }
        },
    },
    "links": {
        "self": "https://useast.api.elasticpath.com/v2/account-members/0ff71321-f7ae-4400-abc2-d7919a78d429"
    }
}
```
