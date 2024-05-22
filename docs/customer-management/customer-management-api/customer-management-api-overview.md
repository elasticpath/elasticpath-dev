---
title: Customer API Overview
nav_label: Customer API Overview
sidebar_position: 20
---

Use the Customer API to manage customer details, addresses, and other information.

The Customer API allows you to generate JSON Web Tokens inside your client-side applications to authenticate requests to get all customer orders.

- [Customer tokens](/docs/customer-management/customer-managment-api/customer-tokens)

You are able to use a [customer](/docs/customer-management/customer-managment-api/customer-tokens) token with an [implicit](/docs/authentication/Tokens/implicit-token#post-create-an-implicit-token) Bearer token.  This is recommended for client-side interactions. Alternatively, you can use a [client_credentials](/docs/authentication/Tokens/client-credential-token#post-create-a-client-credential-token) Bearer token. This is recommended for back-end interactions.

## The `Customer` Object

| Attribute      | Type      | Description                                               |
|:---------------|:----------|:----------------------------------------------------------|
| `id`           | `string`  | The unique identifier for this customer.                  |
| `type`         | `string`  | The `type` represents the object being returned.          |
| `name`         | `string`  | The `name` of the customer.                               |
| `email`        | `string`  | The `email` of the customer.                              |
| `password`     | `boolean` | `true` if the customer has a password, `false` otherwise. |
| `external_ref` | `string`  | The optional external ID reference. For example, this could be an external reference from a separate company system. The maximum length is 2048 characters. Default is `null`. |

## The `meta` Object

| Attribute         | Type     | Description                               |
|:------------------|:---------|:------------------------------------------|
| `meta.created_at` | `string` | The creation date of this `customer`.     |
| `meta.updated_at` | `string` | The last updated date of this `customer`. |

### Sample response

```json
{
    "data": {
        "type": "customer",
        "id": "f260b17a-390f-4b37-bf9d-f62c45a95865",
        "name": "Ron Swanson",
        "email": "ron@swanson.com",
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
