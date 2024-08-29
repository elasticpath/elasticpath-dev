---
title: Checkout with Account Management Authentication Token
nav_label: Checkout with Account Management Authentication Token
sidebar_position: 110
---

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
