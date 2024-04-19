---
title: Delete an Account
nav_label: Delete an Account
sidebar_position: 60
---

## `DELETE` Delete by ID

```http
https://useast.api.elasticpath.com/v2/accounts/:id
```

## Parameters

### Path parameters

| Name | Required | Type     | Description                                    |
| ---- | -------- | -------- | ---------------------------------------------- |
| `id` | Required | `string` | The ID of the account that you want to delete. |

### Headers

| Name            | Required | Type     | Description                                         |
| --------------- | -------- | -------- | --------------------------------------------------- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Examples

### Curl

```bash
curl -X DELETE https://useast.api.elasticpath.com/v2/accounts/:id \
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
const accountId = "00000000-0000-0000-0000-000000000000";
Moltin.Accounts.Delete(accountId).then((acc) => {
    // Do something
});
```

## Response Example

`204 No Content`
