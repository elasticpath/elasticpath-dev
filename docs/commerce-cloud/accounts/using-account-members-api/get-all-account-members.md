---
title: Get All Account Members
nav_label: Get All Account Members
sidebar_position: 20
---

## Get All Account Members

```http
https://useast.api.elasticpath.com/v2/account-members
```

## Parameters

### Headers

| Name            | Required | Type     | Description                                         |
| --------------- | -------- | -------- | --------------------------------------------------- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Query parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `filter` | Optional | `string` | Filter attributes. For more information, see the [Filtering account members](#filtering) section. |
| `page[limit]`  | Optional | `integer` | The number of records per page.                                                                                         |
| `page[offset]` | Optional | `integer` | The number of records to offset the results by.                                                                         |
| `sort`   | Optional | `string` | Supported attributes are `created_at`,`email`,`id`,`name`, or `updated_at`. When specified, the results are sorted in ascending order based on the value of the field. To sort in descending order, prefix the attribute with `-`, for example, `-updated_at`. The default sort order is `created_at` in descending order. For more information, see [Sorting](/docs/commerce-cloud/api-overview/sorting). |

:::note
You can use pagination with this resource. For more information, see [pagination](/docs/commerce-cloud/api-overview/pagination).
:::

## Filtering

The following operators and attributes are available for [filtering](/docs/commerce-cloud/api-overview/filtering) account members.


| Attribute | Type | Operator | Example |
| :--- | :--- | :--- | :--- |
| `email` | `string` | `eq` / `like` | `eq(email,ronswanson@example.com)` |
| `name` | `string` | `eq` / `like` | `like(name,*swan*)` |

{% table %}
* Attribute
* Type
* Operators
* Example
---
* `name`
* `string`
*
    {% list type="checkmark" %}
    * `eq`
    * `like`
    {% /list %}
* `like(name,*swan*)`
---
* `email`
* `string`
*
    {% list type="checkmark" %}
    * `eq`
    * `like`
    {% /list %}
* `eq(email,ronswanson@example.com)`
---
* `id`
* `string`
*
    {% list type="checkmark" %}
    * `eq`
    * `ge`
    * `gt`
    * `le`
    * `lt`
    * `in`
    {% /list %}
* `in(id, "99248259-feea-40c6-b855-f719ee87a539", "363e4505-a2bb-4bc1-b667-2cc9a4de8668")`
---
* `created_at`
* `string`
*
    {% list type="checkmark" %}
    * `eq`
    * `ge`
    * `gt`
    * `le`
    * `lt`
    {% /list %}
* `gt(created_at,"2021-06-02T18:44:07.617Z")`
---
* `updated_at`
* `string`
*
    {% list type="checkmark" %}
    * `eq`
    * `ge`
    * `gt`
    * `le`
    * `lt`
    {% /list %}
* `ge(updated_at,"2021-06-07T18:24:48.149Z")`
{% /table %}

## Request Examples

### Curl

```bash
curl -X GET https://useast.api.elasticpath.com/v2/account-members \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

### JavaScript SDK

```javascript
const MoltinGateway = require("@moltin/sdk").gateway;
const Moltin = MoltinGateway({
    client_id: "X",
    client_secret: "X",
});
Moltin.AccountMembers.All().then((acc) => {
    // Do something
});
```

## Response Example

`200 OK`

```json
{
    "meta": {
        "page": {
            "limit": 100,
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
            "id": "908f7849-60da-4e4a-a3b1-51d4cbe3b953",
            "type": "account_member",
            "name": "Ron Swanson",
            "email": "ron@swanson.com",
            "links": {
                "self": "https://useast.api.elasticpath.com/v2/account-members/908f7849-60da-4e4a-a3b1-51d4cbe3b953"
            },
            "meta": {
                "timestamps": {
                   "created_at": "2021-02-23T09:40:33.882Z",
                   "updated_at": "2021-02-23T09:40:33.882Z"
                }
            }
        },
        {
            "id": "0ff71321-f7ae-4400-abc2-d7919a78d429",
            "type": "account_member",
            "name": "John Smith",
            "email": "john@smith.com",
            "links": {
                "self": "https://useast.api.elasticpath.com/v2/account-members/0ff71321-f7ae-4400-abc2-d7919a78d429"
            },
            "meta": {
              "timestamps": {
                "created_at": "2021-03-15T16:18:10.883Z",
                "updated_at": "2021-03-15T16:18:10.883Z"
              }
            }
        }
    ],
    "links": {
        "current": "https://useast.api.elasticpath.com/v2/account-members?page[offset]=0&page[limit]=100",
        "first": "https://useast.api.elasticpath.com/v2/account-members?page[offset]=0&page[limit]=100",
        "last": "https://useast.api.elasticpath.com/v2/account-members?page[offset]=0&page[limit]=100",
        "next": "null",
        "prev": "null"
    }
}
```
