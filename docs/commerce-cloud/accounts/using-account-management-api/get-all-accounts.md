---
title: Get All Accounts
nav_label: Get All Accounts
sidebar_position: 20
---

## `GET` Get a list of Accounts

```http
https://useast.api.elasticpath.com/v2/accounts/
```

## Parameters

### Headers

| Name            | Required | Type     | Description                                         |
|-----------------|----------|----------|-----------------------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Query parameters

| Name           | Required | Type      | Description                                                                                                                                                                                                                                                                                                                                                                                        |
|----------------|----------|-----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `filter`       | Optional | `string`  | Specifies the filter attributes. For more information, see the [Filtering accounts](#filtering) section.                                                                                                                                                                                                                                                                                           |
| `page[limit]`  | Optional | `integer` | The number of records per page.                                                                                                                                                                                                                                                                                                                                                                    |
| `page[offset]` | Optional | `integer` | The number of records to offset the results by.                                                                                                                                                                                                                                                                                                                                                    |
| `sort`         | Optional | `string`  | Supported attributes are `created_at`,`id`,`name`, or `updated_at`. When specified, the results are sorted in ascending order based on the value of the field. To sort in descending order, prefix the attribute with `-`, for example, `-updated_at`. The default sort order is `created_at` in descending order. For more information, see [Sorting](/docs/commerce-cloud/api-overview/sorting). |

:::note
You can use pagination with this resource. For more information,
see [pagination](/docs/commerce-cloud/api-overview/pagination).
:::

## Filtering

The following operators and attributes are available for [filtering](/docs/commerce-cloud/api-overview/filtering) accounts:

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

* `legal_name`
* `string`
* 
  {% list type="checkmark" %}
   * `eq`
   * `like`
   {% /list %}

* `like(legal_name,*swan*)`
---

* `registration_id`
* `string`
* 
  {% list type="checkmark" %}
  * `eq`
  * `like`
  {% /list %}

* `like(registration_id,00000000-0000-1000-8000-*)`

---

* `external_ref`
* `string`
* 
  {% list type="checkmark" %}

  * `eq`
  * `like`
  {% /list %}

* `like(external_ref,16be*)`

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
curl -X GET https://useast.api.elasticpath.com/v2/accounts/ \
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
Moltin.Accounts.All().then((acc) => {
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
      "id": "813123ac-5ec4-495e-9b64-d1cf2acf95ca",
      "type": "account",
      "name": "acc-name",
      "legal_name": "acc-legal-name",
      "company_address": "company address",
      "registration_id": "00000000-0000-1000-8000-000f00000300",
      "external_ref": "16bedceb-8b2d-4f82-a973-b0a8d8432708",
      "meta": {
        "timestamps": {
          "created_at": "2021-03-15T16:16:24.883Z",
          "updated_at": "2021-03-15T16:16:24.883Z"
        }
      },
      "links": {
        "self": "https://useast.api.elasticpath.com/v2/accounts/813123ac-5ec4-495e-9b64-d1cf2acf95ca"
      }
    },
    {
      "id": "7e927fea-6df2-40b3-b1ee-0844aac2a698",
      "type": "account",
      "name": "sub-acc-name",
      "legal_name": "sub-acc-legal-name",
      "company_address": "company address",
      "registration_id": "00000000-0000-1000-8000-000f00000500",
      "external_ref": "16bedceb-8b2d-4f82-a973-b0a8d8432708",
      "relationships": {
        "parent": {
          "data": {
            "id": "813123ac-5ec4-495e-9b64-d1cf2acf95ca",
            "type": "account"
          }
        },
        "ancestors": [
          {
            "data": {
              "id": "813123ac-5ec4-495e-9b64-d1cf2acf95ca",
              "type": "account"
            }
          }
        ]
      },
      "meta": {
        "timestamps": {
          "created_at": "2021-03-15T16:18:10.883Z",
          "updated_at": "2021-03-15T16:18:10.883Z"
        }
      },
      "links": {
        "self": "https://useast.api.elasticpath.com/v2/accounts/7e927fea-6df2-40b3-b1ee-0844aac2a698"
      }
    }
  ],
  "links": {
    "current": "https://useast.api.elasticpath.com/v2/accounts?page[offset]=0&page[limit]=100",
    "first": "https://useast.api.elasticpath.com/v2/accounts?page[offset]=0&page[limit]=100",
    "last": "https://useast.api.elasticpath.com/v2/accounts?page[offset]=0&page[limit]=100",
    "next": "null",
    "prev": "null"
  }
}
```
