---
title: Update an Account
nav_label: Update an Account
sidebar_position: 50
---

## `PUT` Update an Account

```http
https://useast.api.elasticpath.com/v2/accounts/:id
```

## Parameters

### Path parameters

| Name | Required | Type     | Description                      |
|------|----------|----------|----------------------------------|
| `id` | Required | `string` | The ID of the requested account. |

### Headers

| Name            | Required | Type     | Description                                         |
|-----------------|----------|----------|-----------------------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Name              | Required | Type     | Description                                                                                                                                                                                  |
|-------------------|----------|----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `type`            | Required | `string` | Specifies the type of object. You must use `account`.                                                                                                                                        |
| `name`            | Optional | `string` | Specifies the name of the account.                                                                                                                                                           |
| `legal_name`      | Optional | `string` | Specifies the legal name of the account.                                                                                                                                                     |
| `registration_id` | Optional | `string` | Specifies the registration id of the account.                                                                                                                                                |
| `external_ref`    | Optional | `string` | The unique attribute associated with the account. For example, this could be an external reference from a separate company system. The maximum length is 2048 characters. Default is `null`. |

## Request Examples

### Curl

```bash
curl -X PUT https://useast.api.elasticpath.com/v2/accounts/:id \
    -H "Authorization: Bearer XXXX" \
    -H "Content-Type: application/json" \
    -d $ {
     "data": {
       "type": "account",
         "name": "acc-name",
         "legal_name": "acc-legal-name",
         "registration_id": "00000000-0000-1000-8000-000f00000300"
      }
    }
```

### JavaScript SDK

```javascript
const MoltinGateway = require("@moltin/sdk").gateway;
const Moltin = MoltinGateway({
    client_id: "X",
    client_secret: "X",
});
const accountId = "00000000-0000-0000-0000-000000000000";
const account = {
    type: "account",
    name: "acc-name",
    legal_name: "acc-legal-name",
    registration_id: "00000000-0000-1000-8000-000f00000300",
    external_ref: "16bedceb-8b2d-4f82-a973-b0a8d8432708",
    parent_id: "96b1f750-55d3-4768-a3f8-adffba694a2c",
};
Moltin.Accounts.Update(accountId, account).then((acc) => {
    // Do something
});
```

## Response Example

`200 OK`

```json
{
  "data": {
    "id": "deb6b25f-8451-4211-9a22-95610333df23",
    "type": "account",
    "name": "acc-name",
    "legal_name": "acc-legal-name",
    "registration_id": "00000000-0000-1000-8000-000f00000300",
    "external_ref": "16bedceb-8b2d-4f82-a973-b0a8d8432708",
    "relationships": {
      "parent": {
        "data": {
          "id": "96b1f750-55d3-4768-a3f8-adffba694a2c",
          "type": "account"
        }
      },
      "ancestors": [
        {
          "data": {
            "id": "96b1f750-55d3-4768-a3f8-adffba694a2c",
            "type": "account"
          }
        }
      ]
    },
    "meta": {
      "timestamps": {
        "created_at": "2021-02-23T09:40:33.882Z",
        "updated_at": "2021-02-23T09:40:33.882Z"
      }
    }
  },
  "links": {
    "self": "https://useast.api.elasticpath.com/v2/accounts/deb6b25f-8451-4211-9a22-95610333df23"
  }
}
```
