---
title: Delete an Address
nav_label: Delete an Address
sidebar_position: 60
---

## `DELETE` Delete by ID

```http
https://useast.api.elasticpath.com/v2/customers/:customer_id/addresses/:address_id
```

OR

```http
https://useast.api.elasticpath.com/v2/accounts/:account_id/addresses/:address_id
```

## Parameters

### Path parameters

| Name          | Required                          | Type     | Description                           |
| ------------- | --------------------------------- | -------- | ------------------------------------- |
| `address_id`  | Required                          | `string` | The ID for the Address to delete.     |
| `customer_id` | Required (for customer addresses) | `string` | A customer **ID** that has addresses. |
| `account_id`  | Required (for account addresses)  | `string` | An account ID that has addresses.     |

### Headers

| Name                                         | Required | Type     | Description                                                                                  |
| -------------------------------------------- | -------- | -------- | -------------------------------------------------------------------------------------------- |
| `X-Moltin-Customer-Token`                    | Optional | `string` | A customer token used to access customer addresses for implicit calls.                       |
| `EP-Account-Management-Authentication-Token` | Optional | `string` | An account management authentication token that identifies the authenticated account member. |
| `Authorization`                              | Required | `string` | The Bearer token required to get access to the API.                                          |

## Request Examples Delete Customer Address With Customer Token

### Curl

```bash
curl -X DELETE https://useast.api.elasticpath.com/v2/customers/:customer_id/addresses/:address_id \
     -H "X-Moltin-Customer-Token: XXXX" \
     -H "Authorization: Bearer XXXX" \
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
Moltin.CustomerAddresses.Delete({
    customer: customerId,
    address: addressId,
    token: customerToken,
}).then((response) => {
    // Do something
});
```

## Request Examples Delete Account Address With Account Token

### Curl

```bash
curl -X DELETE https://useast.api.elasticpath.com/v2/accounts/:account_id/addresses/:address_id \
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
Moltin.AccountAddresses.Delete({
    account: accountId,
    address: addressId,
    token: accountToken,
}).then((response) => {
    // Do something
});
```

## Request Examples Delete Customer Address Without Customer Token

### Curl

```bash
curl -X DELETE https://useast.api.elasticpath.com/v2/customers/:customer_id/addresses/:address_id \
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
Moltin.CustomerAddresses.Delete({
    customer: customerId,
    address: addressId,
}).then((response) => {
    // Do something
});
```

## Request Examples Delete Account Address Without Account Token

### Curl

```bash
curl -X DELETE https://useast.api.elasticpath.com/v2/accounts/:account_id/addresses/:address_id \
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
Moltin.AccountAddresses.Delete({
    customer: accountId,
    address: addressId,
}).then((response) => {
    // Do something
});
```

## Response Example

`204 No Content`
