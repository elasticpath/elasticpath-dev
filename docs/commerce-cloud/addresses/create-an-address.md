---
title: Create an Address
nav_label: Create an Address
sidebar_position: 40
---

## `POST` Create an Address

```http
https://useast.api.elasticpath.com/v2/customers/:customerId/addresses
```

OR

```http
https://useast.api.elasticpath.com/v2/accounts/:accountId/addresses
```

## Parameters

### Path parameters

| Name         | Required                          | Type     | Description                                                |
| ------------ | --------------------------------- | -------- | ---------------------------------------------------------- |
| `customerId` | Required (for customer addresses) | `string` | The **ID** for the customer you are adding an address for. |
| `accountId`  | Required (for account addresses)  | `string` | The **ID** for the account you are adding an address for.  |

### Headers

| Name                                         | Required | Type     | Description                                                                                  |
| -------------------------------------------- | -------- | -------- | -------------------------------------------------------------------------------------------- |
| `X-Moltin-Customer-Token`                    | Optional | `string` | A customer token used to access customer addresses implicitly.                               |
| `EP-Account-Management-Authentication-Token` | Optional | `string` | An account management authentication token that identifies the authenticated account member. |
| `Authorization`                              | Required | `string` | The Bearer token to grant access to the API.                                                 |

### Body

| Name           | Required | Type     | Description                                                                                                                                   |
| -------------- | -------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`         | Default  | `string` | Represents the type of object being returned.                                                                                                 |
| `first_name`   | Default  | `string` | The first name of the recipient on this address.                                                                                              |
| `last_name`    | Default  | `string` | The last name of the recipient on this address.                                                                                               |
| `name`         | Optional | `string` | The name under which this address is saved. You can display this name to the customer when you ask them to select from their saved addresses. |
| `phone_number` | Optional | `string` | A phone number for this address.                                                                                                              |
| `instructions` | Optional | `string` | Any delivery instructions for this address.                                                                                                   |
| `company_name` | Optional | `string` | The company name at this address.                                                                                                             |
| `line_1`       | Default  | `string` | The first portion of the address, usually the street address.                                                                                 |
| `line_2`       | Optional | `string` | The second portion of the address, usually an apartment or unit number.                                                                       |
| `city`         | Default  | `string` | The city for this address.                                                                                                                    |
| `county`       | Default  | `string` | The county for this address.                                                                                                                  |
| `region`       | Optional | `string` | The state, province, territory, etc. for this address.                                                                                        |
| `postcode`     | Default  | `string` | The ZIP Code, Postcode, or other postal reference string for this delivery address.                                                           |
| `country`      | Default  | `string` | A two digit code for the country this address is in, expressed as per the ISO 3166-2 standard.                                                |

## Request Examples Create Customer Address With Customer Token

### Curl

```bash
curl -X POST https://useast.api.elasticpath.com/v2/customers/:customerId/addresses \
     -H "Authorization: Bearer XXXX" \
     -H "X-Moltin-Customer-Token: XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
       "data": {
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
         "instructions": "Leave in the shed"
       }
     }
```

### JavaScript SDK

```javascript
const MoltinGateway = require("@moltin/sdk").gateway;
const Moltin = MoltinGateway({
    client_id: "X",
});
const customer = "XXXX";
const address = {
    name: "Home",
    first_name: "Ron",
    last_name: "Swanson",
    company_name: "",
    phone_number: "(555) 555-1234",
    line_1: "1 Sunny Street",
    line_2: "Sunny Place",
    city: "Sunny Town",
    postcode: "SU33 1YY",
    county: "Sunnyville",
    region: "Peterborough",
    country: "GB",
    instructions: "Leave in the shed",
};
// Create a customer address
const customerToken = "XXXX";
Moltin.CustomerAddresses.Create({
    customer: customer,
    body: address,
    token: customerToken,
}).then((address) => {
    // Do something
});
```

## Request Examples Create Customer Address Without Customer Token

### Curl

```bash
curl -X POST https://useast.api.elasticpath.com/v2/customers/:customerId/addresses \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
       "data": {
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
         "instructions": "Leave in the shed"
       }
     }'
```

### JavaScript SDK

```javascript
const MoltinGateway = require("@moltin/sdk").gateway;
const Moltin = MoltinGateway({
    client_id: "X",
    client_secret: "X",
});
const customer = "XXXX";
const address = {
    name: "Home",
    first_name: "Ron",
    last_name: "Swanson",
    company_name: "",
    phone_number: "(555) 555-1234",
    line_1: "1 Sunny Street",
    line_2: "Sunny Place",
    city: "Sunny Town",
    postcode: "SU33 1YY",
    county: "Sunnyville",
    region: "Peterborough",
    country: "GB",
    instructions: "Leave in the shed",
};
// Create a customer address
const customerToken = "XXXX";
Moltin.CustomerAddresses.Create({
    customer: customer,
    body: address,
}).then((address) => {
    // Do something
});
```

## Request Examples Create Account Address With Account Token

### Curl

```bash
curl -X POST https://useast.api.elasticpath.com/v2/accounts/:accountId/addresses \
     -H "Authorization: Bearer XXXX" \
     -H "Ep-Account-Management-Authentication-Token: XXXX"
     -H "Content-Type: application/json" \
     -d $'{
       "data": {
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
         "instructions": "Leave in the shed"
       }
     }'
```

### JavaScript SDK

```javascript
const MoltinGateway = require("@moltin/sdk").gateway;
const Moltin = MoltinGateway({
    client_id: "X",
});
const account = "XXXX";
const address = {
    name: "Home",
    first_name: "Ron",
    last_name: "Swanson",
    company_name: "",
    phone_number: "(555) 555-1234",
    line_1: "1 Sunny Street",
    line_2: "Sunny Place",
    city: "Sunny Town",
    postcode: "SU33 1YY",
    county: "Sunnyville",
    region: "Peterborough",
    country: "GB",
    instructions: "Leave in the shed",
};

// Create an account address
const accountToken = "XXXX";
Moltin.AccountAddresses.Create({
    account: account,
    body: address,
    token: accountToken,
}).then((address) => {
    // Do something
});
```

## Request Examples Create Account Address Without Account Token

### Curl

```bash
curl -X POST https://useast.api.elasticpath.com/v2/accounts/:accountId/addresses \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
       "data": {
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
         "instructions": "Leave in the shed"
       }
     }'
```

### JavaScript SDK

```javascript
const MoltinGateway = require("@moltin/sdk").gateway;
const Moltin = MoltinGateway({
    client_id: "X",
    client_secret: "X",
});
const account = "XXXX";
const address = {
    name: "Home",
    first_name: "Ron",
    last_name: "Swanson",
    company_name: "",
    phone_number: "(555) 555-1234",
    line_1: "1 Sunny Street",
    line_2: "Sunny Place",
    city: "Sunny Town",
    postcode: "SU33 1YY",
    county: "Sunnyville",
    region: "Peterborough",
    country: "GB",
    instructions: "Leave in the shed",
};

// Create an account address
Moltin.AccountAddresses.Create({
    account: account,
    body: address,
}).then((address) => {
    // Do something
});
```

## Response Example

`201 Created`

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
