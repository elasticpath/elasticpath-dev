---
title: Get all User Authentication Info
nav_label: Get all User Authentication Info
sidebar_position: 20
---


## `GET` Get a list of User Authentication Info

```http
https://useast.api.elasticpath.com/v2/authentication-realms/:realm-id/user-authentication-info
```

:::note
You can use pagination with this resource. For more information, see [pagination](/guides/Getting-Started/pagination) section.
:::

## Parameters

### Path parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `realm-id` | Required | `string` | The ID for the authentication-realm containing the `user-authentication-info` object. |

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API.

### Query parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `filter` | Optional | `string` | Specifies the filter attributes. For more information, see the [Filtering accounts](//docs/api/accounts/get-v-2-accounts) section. |
| `page[limit]`  | Optional | `integer` | The number of records per page.                                                                                         |
| `page[offset]` | Optional | `integer` | The number of records to offset the results by.                                                                         |
| `sort`   | Optional | `string` | Specifies the attribute to sort by. It can be `created_at`,`id`, or `updated_at`. By default, sorting is ascending. To sort in descending order, prefix the value with a `-` (for example, `-updated_at`). The default value is `-created_at`. See [Sorting](/guides/Getting-Started/sorting). |

## Request Examples

### Curl

```bash
curl -X GET https://useast.api.elasticpath.com/v2/authentication-realms/:realm-id/user-authentication-info/ \
     -H "Authorization: Bearer XXXX"
```

### JavaScript SDK

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X'
})
const realmId = 'XXXX'
Moltin.UserAuthenticationInfo.All(realmId, null)
```

## Response Example

`200 OK`


```json
{
  "meta": {
    "page": {
      "limit": 10,
      "offset": 0,
      "current": 1,
      "total": 1
    },
    "results": {
      "total": 2
    }
  },
  "data": [
    {
      "links": {
        "self": "https://useast.api.elasticpath.com/v2/authentication-realms/b6cf44b5-5d52-46b8-ae6f-7f28847fb269/user-authentication-info/9738663b-2f64-47e0-b70f-eecd9fb28f53"
      },
      "id": "9738663b-2f64-47e0-b70f-eecd9fb28f53",
      "name": "John Doe",
      "email": "john.doe@banks.com",
      "meta": {
        "created_at": "2021-06-07T18:24:48.149Z",
        "updated_at": "2021-06-07T18:24:48.149Z",
        "creation_status": "COMPLETE"
      },
      "type": "user_authentication_info"
    },
    {
      "links": {
        "self": "https://useast.api.elasticpath.com/v2/authentication-realms/b6cf44b5-5d52-46b8-ae6f-7f28847fb269/user-authentication-info/787af9a4-83e1-4216-bc60-df076daef0c5"
      },
      "id": "787af9a4-83e1-4216-bc60-df076daef0c5",
      "name": "Jane Doe",
      "email": "jane.doe@banks.com",
      "meta": {
        "created_at": "2021-06-02T18:44:07.617Z",
        "updated_at": "2021-06-02T18:44:07.617Z",
        "creation_status": "COMPLETE"
      },
      "type": "user_authentication_info"
    }
  ],
  "links": {
    "next": null,
    "current": "https://useast.api.elasticpath.com/v2/authentication-realms/b6cf44b5-5d52-46b8-ae6f-7f28847fb269/user-authentication-info?page%5Blimit%5D=10&page%5Boffset%5D=0",
    "last": "https://useast.api.elasticpath.com/v2/authentication-realms/b6cf44b5-5d52-46b8-ae6f-7f28847fb269/user-authentication-info?page%5Blimit%5D=10&page%5Boffset%5D=0",
    "prev": null,
    "first": "https://useast.api.elasticpath.com/v2/authentication-realms/b6cf44b5-5d52-46b8-ae6f-7f28847fb269/user-authentication-info?page%5Blimit%5D=10&page%5Boffset%5D=0"
  }
}
```
