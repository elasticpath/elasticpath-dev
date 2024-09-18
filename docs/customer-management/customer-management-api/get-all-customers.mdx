---
title: Get all Customers
nav_label: Get all Customers
sidebar_position: 30
---

## `GET` Get a list of all customers

```http
https://useast.api.elasticpath.com/v2/customers
```

## Parameters

### Headers

| Name            | Required | Type     | Description                                                                                  |
| --------------- | -------- | -------- | -------------------------------------------------------------------------------------------- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. Grant type must be `client_credentials`. |

### Query parameters

| Name     | Required | Type     | Description                                                                              |
| -------- | -------- | -------- | ---------------------------------------------------------------------------------------- |
| `filter` | Optional | `string` | Filter the results. For more information, see [Filtering customers](#filtering). |
| `page[limit]`  | Optional | `integer` | The number of records per page.                 |
| `page[offset]` | Optional | `integer` | The number of records to offset the results by. |
| `sort`   | Optional | `string` | Specifies the attribute to sort by. Supported attributes are `created_at`,`email`,`id`,`name`,`updated_at`. By default, sort order is ascending. To sort in descending order, prefix the attribute with `-`, for example, `-updated_at`. The default value is `created_at` in descending order. For more information, see [Sorting](/guides/Getting-Started/sorting). |

:::note
You can use pagination with this resource. For more information, see [pagination](/guides/Getting-Started/pagination).
:::

## Filtering

The following table describes the supported operator and attributes when [filtering](/guides/Getting-Started/filtering) customers.

| Attribute | Type | Operators | Example |
| --- | --- | --- | --- |
| `email` | `string` | <ul><li>`eq`</li><li>`like`</li></ul> | `eq(email,ronswanson@example.com)` |
| `name` | `string` | <ul><li>`eq`</li><li>`like`</li></ul> | `like(name,*swan*)` |
|  id` | `string` | <ul><li>`eq`</li><li>`ge`</li><li>`gt`</li><li>`le`</li><li>`lt`</li></ul> | `eq(id,787af9a4-83e1-4216-bc60-df076daef0c5)` | 
|  `created_at` | `string` |  <ul><li>`eq`</li><li>`ge`</li><li>`gt`</li><li>`le`</li><li>`lt`</li></ul> | `gt(created_at,"2021-06-02T18:44:07.617Z")` |
| `updated_at` | `string` |  <ul><li>`eq`</li><li>`ge`</li><li>`gt`</li><li>`le`</li><li>`lt`</li></ul> | `ge(updated_at,"2021-06-07T18:24:48.149Z")` |
| `external_ref` | `string` |  `eq` | `eq(external_ref,"16bedceb-8b2d-4f82-a973-b0a8d8432708")` |

## Request Examples

### Curl

```bash
curl -X GET https://useast.api.elasticpath.com/v2/customers \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

### JavaScript SDK

```javascript
const MoltinGateway = require("@moltin/sdk").gateway;
const Moltin = MoltinGateway({
    client_id: "X",
});
Moltin.Customers.All().then((customer) => {
    // Do something
});
//Filter example
Moltin.Customers.Filter({ eq: { email: "jim@bob.com" } })
    .All()
    .then((customers) => {
        // Do something
    });
```

## Response Example

`200 OK`

```json
{
    "data": [
        {
            "type": "customer",
            "id": "2479c9b3-615d-4ebc-a99d-87ffc67d1955",
            "name": "Ron Swanson",
            "email": "ron@swanson.com",
            "password": true,
            "meta": {
                "timestamps": {
                    "created_at": "2017-01-11T18:44:45Z",
                    "updated_at": "2017-05-31T04:12:12Z"
                }
            }
        },
        {
            "type": "customer",
            "id": "7746d533-fd64-446f-ae8c-f8e07f3ed9fd",
            "name": "Ron Swanson_",
            "email": "ron_@swanson.com",
            "external_ref": "16bedceb-8b2d-4f82-a973-b0a8d8432708",
            "password": true,
            "meta": {
                "timestamps": {
                    "created_at": "2017-02-20T17:31:45Z",
                    "updated_at": "2017-04-14T18:55:59Z"
                }
            }
        }
    ],
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
    }
}
```
