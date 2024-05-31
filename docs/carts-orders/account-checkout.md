---
title: Account Checkout API
nav_label: Account Checkout API
sidebar_position: 110
---

When a [Cart](/docs/api/carts/carts-checkout-orders-introduction) is ready for checkout, you can convert the cart to an [order](/docs/api/carts/orders). The cart remains and can be modified and checked out again if required.

After a successful checkout, a response that contains the order is returned.

:::caution
By default, carts are automatically deleted 7 days after the last update. You can change this setting by updating [cart settings](/docs/api/settings/put-v-2-settings-cart).
:::

:::caution
Your inventory is modified during checkout and payment of an order. For more information about the changes in the inventory, see the [Inventory](/docs/api/pxm/inventory/inventories-introduction) section.
:::

## `POST` Create Checkout With Account

The user authenticates with the `Client Credentials Token`.

```http
https://useast.api.elasticpath.com/v2/carts/:reference/checkout
```

### Parameters

#### Path parameters

| Name        | Required | Type     | Description                                           |
| ----------- | -------- | -------- | ----------------------------------------------------- |
| `reference` | Required | `string` | The reference to the cart that you want to check out. |

#### Headers

| Name            | Required | Type     | Description                                                                                                                    |
| --------------- | -------- | -------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. Set the grant type to `client_credentials` to use this checkout mechanism. |

#### Body

| Name                | Required | Type     | Description                              |
| ------------------- | -------- | -------- | ---------------------------------------- |
| `account.id`        | Required | `string` | The account ID.                          |
| `account.member_id` | Optional | `string` | The account member ID.                   |
| `contact.name`      | Required | `string` | The name of the account member.          |
| `contact.email`     | Required | `string` | The email address of the account member. |

### Request example

```bash
curl -X POST https://useast.api.elasticpath.com/v2/carts/:reference/checkout \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
    -d $ {
       "data": {
         "account": {
            "id": "8cee1b9e-3e39-4d5f-bd4a-86cdb985c6ee",
            "member_id": "338f84bf-e6c9-4704-9f33-2708addd462b"
        },
         "contact": {
           "email": "john@email.com",
           "name": "John Doe"
         },
         "billing_address": {
           "first_name": "John",
           "last_name": "Doe",
           "company_name": "ElasticPath",
           "line_1": "1234 Disney Drive",
           "line_2": "Disney Resort",
           "city": "Anaheim",
           "county": "Orange",
           "region": "CA",
           "postcode": "92802",
           "country": "US"
         },
         "shipping_address": {
           "first_name": "John",
           "last_name": "Doe",
           "company_name": "ElasticPath",
           "phone_number": "(555) 555-1234",
           "line_1": "1234 Disney Drive",
           "line_2": "Disney Resort",
           "city": "Anaheim",
           "county": "Orange",
           "region": "CA",
           "postcode": "92802",
           "country": "US",
           "instructions": "Leave in porch"
         }
       }
    }
```

### Response example

`201 Created`

```json
{
    "data": {
        "id": "74b48ecb-8599-4c63-85a8-09cb9bb7ee39",
        "type": "order",
        "status": "incomplete",
        "payment": "unpaid",
        "shipping": "unfulfilled",
        "contact": {
            "name": "John Doe",
            "email": "johndoe@email.com"
        },
        "shipping_address": {
           ...
        },
        "billing_address": {
           ...
        },
        "links": {},
        "meta": {
            ...
        },
        "relationships": {
            "items": {
                "data": [
                    {
                        "type": "item",
                        "id": "d9f30f2f-9973-45d7-a6c9-360be52a26b0"
                    }
                ]
            },
            "account": {
                "data": {
                    "type": "account",
                    "id": "b6e47478-7e7f-4127-b7e9-4a255564ae68"
                }
            },
            "account_member": {
                "data": {
                    "type": "account_member",
                    "id": "338f84bf-e6c9-4704-9f33-2708addd463a"
                }
            }
        }
    },
    "included": {
        "items": [
          ...]
    }
}
```

## `POST` Create Checkout with Account Management Authentication Token

The shopper authenticates with the `Implicit Token` and the `EP-Account-Management-Authentication-Token`.

```http
https://useast.api.elasticpath.com/v2/carts/:reference/checkout
```

### Parameters

#### Path parameters

| Name        | Required | Type     | Description                                           |
| ----------- | -------- | -------- | ----------------------------------------------------- |
| `reference` | Required | `string` | The reference to the cart that you want to check out. |

#### Headers

| Name                                         | Required | Type     | Description                                                                                                                                               |
| -------------------------------------------- | -------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `EP-Account-Management-Authentication-Token` | Required | `string` | An account management authentication token that identifies the authenticated account member.                                                              |
| `Authorization`                              | Required | `string` | The Bearer token required to get access to the API. Set the grant type to `client_credentials` if account management authentication token is unavailable. |

#### Body

| Name            | Required | Type     | Description                       |
| --------------- | -------- | -------- | --------------------------------- |
| `contact.name`  | Required | `string` | The name of the contact.          |
| `contact.email` | Required | `string` | The email address of the contact. |

### Request example

```bash
curl -X POST https://useast.api.elasticpath.com/v2/carts/:reference/checkout \
     -H "Authorization: Bearer XXXX" \
     -H "EP-Account-Management-Authentication-Token: XXXX"
    -d $'{
    "data": {
      "contact": {
        "name": "John Doe",
        "email": "johndoe@email.com"
      },
      "billing_address": {
        ...
      },
      "shipping_address": {
        ...
      }
    }
  }'
```

### Response example

`201 Created`

```json
{
    "data": {
        "id": "74b48ecb-8599-4c63-85a8-09cb9bb7ee39",
        "type": "order",
        "status": "incomplete",
        "payment": "unpaid",
        "shipping": "unfulfilled",
        "contact": {
            "name": "John Doe",
            "email": "johndoe@email.com"
        },
        "shipping_address": {
           ...
        },
        "billing_address": {
           ...
        },
        "links": {},
        "meta": {
            ...
        },
        "relationships": {
            "items": {
                "data": [
                    {
                        "type": "item",
                        "id": "d9f30f2f-9973-45d7-a6c9-360be52a26b0"
                    }
                ]
            },
            "account": {
                "data": {
                    "type": "account",
                    "id": "b6e47478-7e7f-4127-b7e9-4a255564ae68"
                }
            },
            "account_member": {
                "data": {
                    "type": "account_member",
                    "id": "338f84bf-e6c9-4704-9f33-2708addd463a"
                }
            }
        }
    },
    "included": {
        "items": [
          ...]
    }
}
```
