---
title: Customer Tokens
nav_label: Customer Tokens
sidebar_position: 10
---

Commerce provides a basic `/tokens` endpoint using which you can authenticate using a [password](/docs/customer-management/customer-managment-api/customer-tokens#using-a-username-and-password) or [Single Sign-On through OpenID Connect](/docs/customer-management/customer-managment-api/customer-tokens#using-open-id-connect). With this endpoint, you can allow customers to manage their [addresses](/docs/commerce-cloud/addresses/about-addresses-api) or [get orders](/docs/commerce-cloud/orders/orders-api/get-all-orders) by `customer`.

## The `customer token` Object

| Attribute     | Type        | Description                                    |
|:--------------|:------------|:-----------------------------------------------|
| `id`          | `string`    | The unique identifier for this token.          |
| `type`        | `string`    | The type represents the object being returned. |
| `customer_id` | `string`    | The ID of the customer from which the token is generated. |
| `token`       | `string`    | The JSON Web Token to be used for other endpoints. |
| `expires`     | `timestamp` | The epoch time that this token expires at. It is 24 hours from the moment the token is generated. |

### Sample response

```json
{
    "data": {
        "type": "token",
        "id": "36f05940-0d38-411a-8909-3aea58bc1f09",
        "customer_id": "79cc0486-bbdf-491b-a0a2-722383b6288b",
        "token": "eyJhbGciOiAiSFMyNTYiLCAidHlwIjogIkpXVCJ9.eyJzdWIiOiI3OWNjMDQ4Ni1iYmRmLTQ5MWItYTBhMi03MjIzODNiNjI4OGIiLCJuYW1lIjoiUm9uIFN3YW5zb24iLCJleHAiOjE1MTA2ODQyMDAsImlhdCI6MTUxMDU5NzgwMCwianRpIjoiMzZmMDU5NDAtMGQzOC00MTFhLTg5MDktM2FlYTU4YmMxZjA5In0=.ea948e346d0683803aa4a2c09441bcbf7c79bd9234bed2ce8456ab3af257ea9f",
        "expires": 1510684200
    }
}
```

## `POST` Generate a token

### Using a username and password

```http
https://useast.api.elasticpath.com/v2/customers/tokens
```

#### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

#### Body

| Name                       | Required | Type     | Description               |
|:---------------------------|:---------|:---------|:--------------------------|
| `password`                 | Required | `string` | The customer password.    |
| `email`                    | Required | `string` | The customer email.       |
| `type`                     | Required | `string` | This must be `token`.     |
| `authentication_mechanism` | Optional | `string` | For password login this value should be `password`. |

### Username and Password Request Example

#### Curl

```bash
curl -X POST https://useast.api.elasticpath.com/v2/customers/tokens \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
        "data":{
          "type": "token",
          "email": "ron@swanson.com",
          "password": "mysecretpassword",
          "authentication_mechanism": "password"
        }
     }
```

#### JavaScript SDK

```javascript
const MoltinGateway = require("@moltin/sdk").gateway;
const Moltin = MoltinGateway({
    client_id: "X",
});
const email = "ron@swanson.com";
const password = "mysecretpassword";
Moltin.Customers.TokenViaPassword(email, password).then((data) => {
    // Do something
});
```

### Response example

`200 OK`

```json
{
    "data": {
        "type": "token",
        "id": "36f05940-0d38-411a-8909-3aea58bc1f09",
        "customer_id": "79cc0486-bbdf-491b-a0a2-722383b6288b",
        "token": "eyJhbGciOiAiSFMyNTYiLCAidHlwIjogIkpXVCJ9.eyJzdWIiOiI3OWNjMDQ4Ni1iYmRmLTQ5MWItYTBhMi03MjIzODNiNjI4OGIiLCJuYW1lIjoiUm9uIFN3YW5zb24iLCJleHAiOjE1MTA2ODQyMDAsImlhdCI6MTUxMDU5NzgwMCwianRpIjoiMzZmMDU5NDAtMGQzOC00MTFhLTg5MDktM2FlYTU4YmMxZjA5In0=.ea948e346d0683803aa4a2c09441bcbf7c79bd9234bed2ce8456ab3af257ea9f",
        "expires": 1510684200
    }
}
```

## Using OpenID Connect

For more information on requesting a customer token with OpenID Connect, refer to the Developer How-To: [Single sign-on with OpenID Connect](/guides/Getting%20Started/authentication/single-sign-on/get-single-sign-on-customer-token).

### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Name                       | Required | Type     | Description               |
|:---------------------------|:---------|:---------|:--------------------------|
| `type`                     | Required | `string` | This must be `token`.     |
| `authentication_mechanism` | Required | `string` | For OpenID Connect login this value should be `oidc`. |
| `oauth_authorization_code` | Required | `string` | The code returned from the OpenID Connect Provider authentication. |
| `oauth_redirect_uri`       | Required | `string` | The url of the front-end that handles the callback of the token. |
| `oauth_code_verifier`      | Required | `string` | The Proof Key for Code Exchange (PKCE) Code Verifier, corresponding to the Code Challenge that was supplied to the Authorization endpoint. See [Generating a Code Verifier and Challenge](/guides/Getting%20Started/authentication/single-sign-on/get-single-sign-on-customer-token#generate-proof-key-for-code-exchange-pkce-parameters). |

## Open ID Connect Request Example

### Curl

```bash
curl -X POST https://useast.api.elasticpath.com/v2/customers/tokens \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
        "data":{
          "type": "token",
          "authentication_mechanism": "oidc",
          "oauth_authorization_code":  "c2490f06-6d8e-4927-99aa-4bf02b419e96",
          "oauth_redirect_uri": "https://example-store.com/oauth2/callback",
          "oauth_code_verifier": "0E934PurR8ExVg6Pj7T4kQewxKzWSfSFG5d15FGfww8"
        }
     }'
```

### JavaScript SDK

```javascript
const MoltinGateway = require("@moltin/sdk").gateway;
const Moltin = MoltinGateway({
    client_id: "X",
});
const code = "XXXX";
const redirectUri = "XXXX";
const codeVerifier = "XXXX";

Moltin.Customers.TokenViaOIDC(code, redirectUri, codeVerifier).then((data) => {
    // Do something
});
```

### Response example

`200 OK`

```json
{
    "data": {
        "type": "token",
        "id": "5266d6da-a5e2-4f79-9e8c-6d050ffe7fee",
        "customer_id": "be076eb9-689e-4cfe-8299-8489f99a14e6",
        "token": "eyJhbGciOiAiSFMyNTYiLCAidHlwIjogIkpXVCJ9.eyJzdWIiOiJiZTA3NmViOS02ODllLTRjZmUtODI5OS04NDg5Zjk5YTE0ZTYiLCJuYW1lIjoiUm9uIFN3YW5zb24rNSIsImV4cCI6MTYwNTM4NDMxOSwiaWF0IjoxNjA1Mjk3OTE5LCJqdGkiOiI1MjY2ZDZkYS1hNWUyLTRmNzktOWU4Yy02ZDA1MGZmZTdmZWUifQ==.2af503b27022df40c769ac49d85802d0319d7ed14547c843c254d73f8107d8cd",
        "expires": 1605384319
    }
}
```

## Using a token

You can use a `X-Moltin-Customer-Token` header with the following endpoints. They’re available implicitly for you to read, create, and update various resources.

- [Get a Customer](/docs/customer-management/customer-managment-api/get-a-customer)
- [Update a Customer](/docs/customer-management/customer-managment-api/update-a-customer)
- [Get Customer Addresses](/docs/commerce-cloud/addresses/get-all-addresses)
- [Get an Address](/docs/commerce-cloud/addresses/get-an-address)
- [Create an Address](/docs/commerce-cloud/addresses/create-an-address)
- [Update an Address](/docs/commerce-cloud/addresses/update-an-address)
- [Get all Orders](/docs/carts-orders/orders/orders-api/get-all-orders)
- [Get an Order](/docs/carts-orders/orders/orders-api/get-an-order)
- [Get Customer Carts](/docs/carts-orders/carts/customer-cart-associations/get-customer-carts)
- [Create an Association between a Customer and a Cart](/docs/carts-orders/carts/customer-cart-associations/create-an-association)
- [Delete an Association Between a Customer and a Cart](/docs/carts-orders/carts/customer-cart-associations/delete-an-association)
