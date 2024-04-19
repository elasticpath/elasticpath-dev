---
title: Get a Customer
nav_label: Get a Customer
sidebar_position: 40
---

## `GET` Get by ID

```http
https://useast.api.elasticpath.com/v2/customers/:id
```

## Parameters

### Path parameters

| Name | Required | Type     | Description                        |
| ---- | -------- | -------- | ---------------------------------- |
| `id` | Required | `string` | The ID for the requested Customer. |

### Headers

| Name                      | Required | Type     | Description                                                                                                                    |
| ------------------------- | -------- | -------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `X-Moltin-Customer-Token` | Optional | `string` | A customer token used to access a customer implicitly.                                                                         |
| `Authorization`           | Required | `string` | The Bearer token required to get access to the API. If there is no customer token the grant type must be `client_credentials`. |

## Request Example Without Customer Token

### Curl

```bash
curl -X GET https://useast.api.elasticpath.com/v2/customers/:id \
     -H "Authorization: Bearer XXXX" \
     - -H "Content-Type: application/json" \
```

### JavaScript SDK

```javascript
const MoltinGateway = require("@moltin/sdk").gateway;
const Moltin = MoltinGateway({
    client_id: "X",
    client_secret: "X",
});
const id = "XXXX";
Moltin.Customers.Get(id).then((customer) => {
    // Do something
});
```

## Request Example With Customer Token

### Curl

```bash
curl -X GET https://useast.api.elasticpath.com/v2/customers/:id \
     -H "X-Moltin-Customer-Token: XXXX"
     -H "Authorization: Bearer XXXX"
```

### JavaScript SDK

```javascript
const MoltinGateway = require("@moltin/sdk").gateway;
const Moltin = MoltinGateway({
    client_id: "X",
});
const customerId = "XXXX";
const customerToken = "XXXX";
Moltin.Customers.Get({
    id: customerId,
    token: customerToken,
}).then((customer) => {
    // Do something
});
```

## Response Example

`200 OK`

```json
{
    "data": {
        "type": "customer",
        "id": "a23cc59d-a6c2-4c14-89c7-80fd7e4fc6c0",
        "name": "Ron Swanson",
        "email": "ronwanson@example.com",
        "external_ref": "16bedceb-8b2d-4f82-a973-b0a8d8432708",
        "password": true,
        "meta": {
            "timestamps": {
                "created_at": "2017-01-11T18:44:45Z",
                "updated_at": "2017-05-31T04:12:12Z"
            }
        }
    }
}
```
