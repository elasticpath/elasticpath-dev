---
title: Create a Customer
nav_label: Create a Customer
sidebar_position: 50
---

## `POST` Create a customer

```http
https://useast.api.elasticpath.com/v2/customers
```

Creates the customer.

## Parameters

### Headers

| Name            | Required | Type     | Description                                         |
| --------------- | -------- | -------- | --------------------------------------------------- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Name           | Required | Type     | Description                                                                                                                                                                |
|----------------| -------- | -------- |----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `type`         | Required | `string` | Represents the type of object being returned.                                                                                                                              |
| `name`         | Required | `string` | The full name of the customer.                                                                                                                                             |
| `email`        | Required | `string` | The customer email.                                                                                                                                                        |
| `password`     | Optional | `string` | The customer password.                                                                                                                                                     |
| `external_ref` | Optional | `string` | The unique attribute associated with the customer. For example, this could be an external reference from a separate company system. The maximum length is 2048 characters. Default is `null`. |

## Request Example

### Curl

```bash
curl -X POST https://useast.api.elasticpath.com/v2/customers \
    -H "Authorization: Bearer XXXX" \
    -H "Content-Type: application/json" \
    -d $ {
     "data": {
       "type": "customer",
       "name": "Ron Swanson",
       "email": "ron@swanson.com",
       "external_ref": "16bedceb-8b2d-4f82-a973-b0a8d8432708",
       "password": "mysecretpassword"
     }
   }
```

### Javascript SDK

```javascript
const MoltinGateway = require("@moltin/sdk").gateway;
const Moltin = MoltinGateway({
    client_id: "X",
});
const customer = {
    name: "Ron Swanson",
    email: "ron@swanson.com",
    password: "mysecretpassword",
};
Moltin.Customers.Create(customer).then((customer) => {
    // Do something
});
```

## Response Example

`201 Created`

```json
{
    "data": {
        "type": "customer",
        "id": "fc4679bf-f8a8-4029-bc67-945f74b756a0",
        "name": "Ron Swanson+6",
        "email": "ron+6@swanson.com",
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
