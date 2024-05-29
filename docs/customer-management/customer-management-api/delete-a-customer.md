---
title: Delete a Customer
nav_label: Delete a Customer
sidebar_position: 70
---

## `DELETE` Delete by ID

```http
https://useast.api.elasticpath.com/v2/customers/:id
```

Deletes a customer by ID.

## Parameters

### Path parameters

| Name | Required | Type     | Description                        |
| ---- | -------- | -------- | ---------------------------------- |
| `id` | Required | `string` | The ID for the Customer to delete. |

### Headers

| Name                      | Required | Type     | Description                                                                                                                    |
| ------------------------- | -------- | -------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `X-Moltin-Customer-Token` | Optional | `string` | A customer token used to access customer implicitly.                                                                           |
| `Authorization`           | Required | `string` | The Bearer token required to get access to the API. If there is no customer token the grant type must be `client_credentials`. |

## Request Example Delete by ID

### Curl

```bash
curl -X DELETE https://useast.api.elasticpath.com/v2/customers/:id \
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
const id = "XXXX";
Moltin.Customers.Delete(id).then((response) => {
    // Do something
});
```

## Request Example Delete With Customer Token

```bash
curl -X DELETE https://useast.api.elasticpath.com/v2/customers/:id \
     -H "X-Moltin-Customer-Token: XXXX"
     -H "Authorization: Bearer XXXX"
```

## Request Example Delete Without Customer Token

```bash
curl -X DELETE https://useast.api.elasticpath.com/v2/customers/:id \
     -H "Authorization: Bearer XXXX"
```

## Response Example

`204 No Content`
