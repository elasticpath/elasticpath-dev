---
title: Create a Customer-Cart Association
nav_label: Create an Association
sidebar_position: 3
---

You can create associations between a customer and one or more carts. After cart associations exist for a customer, the customer can access those carts across any device.

## `POST` Create an association between a customer and a cart

```http
https://useast.api.elasticpath.com/v2/carts/:cartId/relationships/customers
```

Creates an association between a cart (`:cart_id`) and a customer.

## Parameters

### Path parameters

| Name     | Required | Type     | Description                                                                                                                                   |
| -------- | -------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `cartId` | Required | `string` | The ID for the cart created by the customer. Ensure that you follow the guidelines for [Safe Characters](/guides/Getting%20Started/api-overview/safe-characters). |

### Headers

| Name                      | Required | Type     | Description                                                                                                                    |
| ------------------------- | -------- | -------- |--------------------------------------------------------------------------------------------------------------------------------|
| `X-Moltin-Customer-Token` | Required | `string` | A customer token to access a specific customer's carts.                                                                        |
| `Authorization`           | Required | `string` | The Bearer token required to get access to the API. If there is no customer token, the grant type must be `client_credentials`. |

### Body

| Name          | Required | Type     | Description                                               |
| ------------- | -------- | -------- | --------------------------------------------------------- |
| `data[].type` | Required | `string` | The type of related object. Ensure that it is `customer`. |
| `data[].id`   | Required | `string` | The id of the customer.                                   |

## Request Examples

### With customer token

Requires an [`implicit` token](/guides/Getting%20Started/authentication/Tokens/implicit-token) with a [`customer` token](/docs/customer-management/customer-managment-api/customer-tokens).

#### Curl

```bash
curl -X POST https://useast.api.elasticpath.com/v2/carts/:cartId/relationships/customers \
     -H "X-Moltin-Customer-Token: XXXX" \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
      "data": [{
          "type": "customer",
          "id": "b3f2b6de-8fd4-4cdf-a9d9-c5f7cecccdfe"
          }]
      }
```

#### JavaScript SDK

```javascript
const customerId = "25617d3e-14a6-434c-bfab-3fda87517aaf";
const customerToken = "xxxx";

// Where `EPCC` is an authenticated client
await EPCC.Carts.AddCustomerAssociation(customerId, customerToken);
```

### Without customer token

Requires a [`client_credentials` token](/guides/Getting%20Started/authentication/Tokens/client-credential-token).

#### Curl

```bash
curl -X POST https://useast.api.elasticpath.com/v2/carts/:cartId/relationships/customers \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
      "data": [{
          "type": "customer",
          "id": "b3f2b6de-8fd4-4cdf-a9d9-c5f7cecccdfe"
          }]
      }
```

#### JavaScript SDK

```javascript
const customerId = "25617d3e-14a6-434c-bfab-3fda87517aaf";

// Where `EPCC` is an authenticated client
await EPCC.Carts.AddCustomerAssociation(customerId);
```

## Response Example

`200 OK`

```json
{
    "data": [
        {
            "type": "customer",
            "id": "b3f2b6de-8fd4-4cdf-a9d9-c5f7cecccdfe"
        }
    ]
}
```

`204 No Content` is sent back in case the customer has already been associated to the cart.
