---
title: Addresses API Overview
nav_label: Addresses API Overview
sidebar_position: 10
---

The Addresses API allows you to organize customer and account addresses. Addresses are a sub-resource of a [`customer`](/docs/commerce-cloud/customer-management/customer-managment-api/customer-management-api-overview) and [`account`](/docs/commerce-cloud/accounts/using-account-management-api/account-management-api-overview) resources. A `customer` or `account` can have multiple addresses, such as `home`, `work`, and `neighbour`.

You can use a customer address with an [implicit](/docs/commerce-cloud/authentication/Tokens/implicit-token#post-create-an-implicit-token) Bearer token, which is recommended for client-side interactions. You can also use [client_credentials](/docs/commerce-cloud/authentication/Tokens/client-credential-token#post-create-a-client-credential-token) Bearer token, which is recommended for back-end interactions.

You can use an account address with either [client_credentials](/docs/commerce-cloud/authentication/Tokens/client-credential-token#post-create-a-client-credential-token) Bearer token or a combination of [implicit](/docs/commerce-cloud/authentication/Tokens/implicit-token#post-create-an-implicit-token) Bearer token and [Account Management authentication](/docs/commerce-cloud/authentication/Tokens/account-management-authentication-token) token.

## The `Address` Object

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | The unique identifier for this address.                                     |
| `type` | `string` | The type represents the object being returned.                              |
| `first_name` | `string` | The first name of the recipient on this address.                            |
| `last_name` | `string` | The last name of the recipient on this address.                             |
| `name` | `string` | The name for the address saved, such as `home`, `work` or `wife’s office`.  |
| `phone_number` | `string` | A phone number for this address.                                            |
| `instructions` | `string` | Any delivery instructions associated with this addresses.                   |
| `company_name` | `string` | The company name at this address.                                           |
| `line_1` | `string` | Usually the street name.                                                    |
| `line_2` | `string` | Usually the unit or apartment number.                                       |
| `city` | `string` | The city for this address.                                                  |
| `county` | `string` | The county for this address.                                                |
| `region` | `string` | The state, province, or region for this address.                            |
| `postcode` | `string` | The ZIP, postcode or other postal reference for this address.               |
| `country` | `string` | A two digit code for this country address. This is a `ISO 3166-2` standard. |

### Sample response

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
        "self":
        "https://useast.api.elasticpath.com/v2/customers/11afcf9b-971b-4fdb-8e10-f2ecf970718e/addresses/5f8da740-6680-463e-b31c-190b2db4bf9d"
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
