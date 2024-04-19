---
title: Update a Customer
nav_label: Update a Customer
sidebar_position: 60
---

## `PUT` Update by ID

```http
https://useast.api.elasticpath.com/v2/customers/:customerId
```

## Parameters

### Path parameters

| Name         | Required | Type     | Description                        |
| ------------ | -------- | -------- | ---------------------------------- |
| `customerId` | Required | `string` | The ID for the customer requested. |

### Headers

| Name                      | Required | Type     | Description                                                                                                                    |
| ------------------------- | -------- | -------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `X-Moltin-Customer-Token` | Optional | `string` | A customer token used to access customer implicitly.                                                                           |
| `Authorization`           | Required | `string` | The Bearer token required to get access to the API. If there is no customer token the grant type must be `client_credentials.` |

### Body

| Name           | Required | Type     | Description                                                                                                                                                                |
|----------------| -------- | -------- |----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `type`         | Required | `string` | The type of object being returned.                                                                                                                                         |
| `name`         | Optional | `string` | The full name of the customer.                                                                                                                                             |
| `email`        | Optional | `string` | The customer email.                                                                                                                                                        |
| `password`     | Optional | `string` | The customer password.                                                                                                                                                     |
| `external_ref` | Optional | `string` | The unique attribute associated with the customer. For example, this could be an external reference from a separate company system. The maximum length is 2048 characters. Default is `null`. |

## Request Examples

### Curl

```bash
curl -X PUT https://useast.api.elasticpath.com/v2/customers/:customerId \
    -H "Authorization: Bearer XXXX" \
    -H "Content-Type: application/json" \
    -d $ {
     "data": {
       "type": "customer",
       "email": "ron@swanson.com"
     }
}
```

### JavaScript SDK

```javascript
const MoltinGateway = require("@moltin/sdk").gateway;
const Moltin = MoltinGateway({
    client_id: "X",
});
var customerId = "XXXX";
var customer = {
    email: "ron@swanson.com",
};
Moltin.Customers.Update(customerId, customer).then((response) => {
    // Do something
});
```

## Request Example With Customer Token

```bash
curl -X PUT https://useast.api.elasticpath.com/v2/customers/:id \
     -H "X-Moltin-Customer-Token: XXXX"
     -H "Authorization: Bearer XXXX"
     -d $'{
     "data": {
       "type": "customer",
       "email": "ron@swanson.com"
     }
}'
```

## Request Example Without Customer Token

```bash
curl -X PUT https://useast.api.elasticpath.com/v2/customers/:id \
     -H "Authorization: Bearer XXXX"
     -d $'{
     "data": {
       "type": "customer",
       "email": "ron@swanson.com"
     }
}'
```

## Response Example

`200 OK`

```json
{
    "data": {
        "type": "customer",
        "id": "b57022cf-c80e-4b85-9fd1-5af3156d8adf",
        "name": "George example",
        "email": "ron@swanson.com",
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
