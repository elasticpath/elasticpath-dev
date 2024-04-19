---
title: Get an Address
nav_label: Get an Address
sidebar_position: 30
---

## `GET` Get By ID

```http
https://useast.api.elasticpath.com/v2/customers/:customerId/addresses/:addressId
```

OR

```http
https://useast.api.elasticpath.com/v2/accounts/:accountId/addresses/:addressId
```

## Parameters

### Path parameters

| Name         | Required                          | Type     | Description                                |
| ------------ | --------------------------------- | -------- | ------------------------------------------ |
| `addressId`  | Required                          | `string` | The ID for the Address you are requesting. |
| `customerId` | Required (for customer addresses) | `string` | A customer ID that has addresses.          |
| `accountId`  | Required (for account addresses)  | `string` | An account ID that has addresses.          |

### Headers

| Name                                         | Required | Type     | Description                                                                                  |
| -------------------------------------------- | -------- | -------- | -------------------------------------------------------------------------------------------- |
| `X-Moltin-Customer-Token`                    | Optional | `string` | A customer token used to access customer addresses implicitly.                               |
| `EP-Account-Management-Authentication-Token` | Optional | `string` | An account management authentication token that identifies the authenticated account member. |
| `Authorization`                              | Required | `string` | The Bearer token required to get access to the API.                                          |

## Request Examples Get Customer Address With Customer Token

### Curl

```bash
curl -X GET https://useast.api.elasticpath.com/v2/customers/:customer_id/addresses/:address_id \
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
const addressId = "XXXX";
const customerToken = "XXXX";
Moltin.CustomerAddresses.Get({
    customer: customerId,
    address: addressId,
    token: customerToken,
}).then((address) => {
    // Do something
});
```

## Request Examples Get Customer Address Without Customer Token

### Curl

```bash
curl -X GET https://useast.api.elasticpath.com/v2/customers/:customer_id/addresses/:address_id \
     -H "Authorization: Bearer XXXX"
```

### JavaScript SDK

```javascript
const MoltinGateway = require("@moltin/sdk").gateway;
const Moltin = MoltinGateway({
    client_id: "X",
    client_secret: "X",
});
const customerId = "XXXX";
const addressId = "XXXX";
Moltin.CustomerAddresses.Get({
    customer: customerId,
    address: addressId,
}).then((address) => {
    // Do something
});
```

## Request Examples Get Account Address With Account Token

### Curl

```bash
curl -X GET https://useast.api.elasticpath.com/v2/accounts/:account_id/addresses/:address_id \
     -H "Ep-Account-Management-Authentication-Token: XXXX"
     -H "Authorization: Bearer XXXX"
```

### JavaScript SDK

```javascript
const MoltinGateway = require("@moltin/sdk").gateway;
const Moltin = MoltinGateway({
    client_id: "X",
});
const accountId = "XXXX";
const addressId = "XXXX";
const accountToken = "XXXX";
Moltin.AccountAddresses.Get({
    customer: accountId,
    address: addressId,
    token: accountToken,
}).then((address) => {
    // Do something
});
```

## Request Examples Get Account Address Without Account Token

### Curl

```bash
curl -X GET https://useast.api.elasticpath.com/v2/accounts/:account_id/addresses/:address_id \
     -H "Authorization: Bearer XXXX"
```

### JavaScript SDK

```javascript
const MoltinGateway = require("@moltin/sdk").gateway;
const Moltin = MoltinGateway({
    client_id: "X",
    client_secret: "X",
});
const accountId = "XXXX";
const addressId = "XXXX";
Moltin.AccountAddresses.Get({
    account: accountId,
    address: addressId,
}).then((address) => {
    // Do something
});
```

### Response example

`200 OK`

```json
{
    "id": "5f8da740-6680-463e-b31c-190b2db4bf9d",
    "type": "address",
    "name": "Home",
    "first_name": "Ron",
    "last_name": "Swanson",
    "company_name": "",
    "phone_number": "(555) 555-1234",
    "line_1": "1 Sunny Street",
    "line_2": "Sunny Place",
    "city": "Sunny Town",
    "postcode": "SU33 1YY",
    "county": "Sunnyville",
    "region": "Peterborough",
    "country": "GB",
    "instructions": "Leave in the shed",
    "links": {
        "self": "https://useast.api.elasticpath.com/v2/customers/11afcf9b-971b-4fdb-8e10-f2ecf970718e/addresses/5f8da740-6680-463e-b31c-190b2db4bf9d"
    },
    "meta": {
        "timestamps": {
            "created_at": "2018-05-04T15:20:09.734Z",
            "updated_at": "2018-05-04T15:20:09.734Z"
        }
    },
    "relationships": {
      "customer": {
        "id": "11afcf9b-971b-4fdb-8e10-f2ecf970718e",
        "type": "customer"
      }
    }
}
```
