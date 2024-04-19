---
title: Update an Address
nav_label: Update an Address
sidebar_position: 50
---

## `PUT` Update by ID

```http
https://useast.api.elasticpath.com/v2/customers/:customerId/addresses/:addressId
```

OR

```http
https://useast.api.elasticpath.com/v2/accounts/:accountId/addresses/:addressId
```

## Parameters

### Path parameters

| Name         | Required                          | Type     | Description                                                |
| ------------ | --------------------------------- | -------- | ---------------------------------------------------------- |
| `customerId` | Required (for customer addresses) | `string` | The ID for the customer that you are updating address for. |
| `accountId`  | Required (for account addresses)  | `string` | The ID for the account that you are updating address for.  |
| `addressId`  | Required                          | `string` | The ID for the address you are updating.                   |

### Headers

| Name                                         | Required | Type     | Description                                                                                  |
| -------------------------------------------- | -------- | -------- | -------------------------------------------------------------------------------------------- |
| `X-Moltin-Customer-Token`                    | Optional | `string` | A customer token used to access customer addresses implicitly.                               |
| `EP-Account-Management-Authentication-Token` | Optional | `string` | An account management authentication token that identifies the authenticated account member. |
| `Authorization`                              | Required | `string` | The Bearer token required to get access to the API.                                          |

### Body

| Name           | Required | Type     | Description                                                                                                                                   |
| -------------- | -------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`           | Required | `string` | The ID for the address you are updating. Expected to match addressId in Path Parameters                                                       |
| `type`         | Required | `string` | Represents the type of object being returned.                                                                                                 |
| `first_name`   | Required | `string` | The first name of the recipient on this address.                                                                                              |
| `last_name`    | Required | `string` | The last name of the recipient on this address.                                                                                               |
| `name`         | Optional | `string` | The name under which this address is saved. You can display this name to the customer when you ask them to select from their saved addresses. |
| `phone_number` | Optional | `string` | A phone number for this address.                                                                                                              |
| `instructions` | Optional | `string` | Any delivery instructions for this address.                                                                                                   |
| `company_name` | Optional | `string` | The company name at this address.                                                                                                             |
| `line_1`       | Required | `string` | The first portion of the address, usually the street address.                                                                                 |
| `line_2`       | Optional | `string` | The second portion of the address, usually an apartment or unit number.                                                                       |
| `city`         | Optional | `string` | The city for this address.                                                                                                                    |
| `county`       | Required | `string` | The county for this address.                                                                                                                  |
| `region`       | Required | `string` | The state, province, or region for this address.                                                                                              |
| `postcode`     | Required | `string` | The ZIP Code, Postcode, or other postal reference string for this delivery address.                                                           |
| `country`      | Required | `string` | A two digit code for the country this address is in, expressed as per the ISO 3166-2 standard.                                                |

## Request Examples Update Customer Address

### Curl

```bash
curl -X PUT https://useast.api.elasticpath.com/v2/customers/:customerId/addresses \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
       "data": {
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
         "instructions": "Leave in the shed"
       }
     }
```

### JavaScript SDK

```javascript
const MoltinGateway = require("@moltin/sdk").gateway;
const Moltin = MoltinGateway({
    client_id: "X",
    client_secret: "X", // Required if customer token not present
});
const customer = "XXXX";
const addressId = "XXXX";
const address = {
    name: "Home sweet home",
};
const token = "XXXX";
Moltin.CustomerAddresses.Update({
    customer,
    address: addressId,
    body: address,
    token, // optional
}).then((address) => {
    // Do something
});
```

## Request Examples Update Account Address

### Curl

```bash
curl -X PUT https://useast.api.elasticpath.com/v2/accounts/:accountId/addresses \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
       "data": {
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
         "instructions": "Leave in the shed"
       }
     }'
```

### JavaScript SDK

```javascript
const MoltinGateway = require("@moltin/sdk").gateway;
const Moltin = MoltinGateway({
    client_id: "X",
    client_secret: "X", // Required if customer token not present
});
const account = "XXXX";
const addressId = "XXXX";
const address = {
    name: "Home sweet home",
};
const token = "XXXX";
Moltin.AccountAddresses.Update({
    account,
    address: addressId,
    body: address,
    token, // optional
}).then((address) => {
    // Do something
});
```

## Response Example

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
