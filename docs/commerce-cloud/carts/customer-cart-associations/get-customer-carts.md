---
title: Get a Customerʼs Carts
nav_label: Get a Customerʼs Carts
sidebar_position: 2
---

You can retrieve the carts that are associated with a customer.

When a shopper retrieves their latest carts, the carts are sorted in descending order by the `updated_date`. For more information, see [Pagination](/docs/commerce-cloud/api-overview/pagination).

## `GET` Get a customerʼs carts with a `customer` token

```http
https://useast.api.elasticpath.com/v2/carts
```

Retrieve carts for the customer. The customer is specified by a `customer` token in the header.

:::caution
Requires an [`implicit` token](/docs/commerce-cloud/authentication/Tokens/implicit-token) with a [`customer` token](/docs/commerce-cloud/customer-management/customer-managment-api/customer-tokens).
:::

### Parameters

#### Headers

| Name                      | Required | Type     | Description                                                    |
|:--------------------------|:---------|:---------|:---------------------------------------------------------------|
| `X-Moltin-Customer-Token` | Required | `string` | A customer token to access a specific customer's carts. |
| `Authorization`           | Required | `string` | The Bearer token required to get access to the API.            |

### Request example

#### Curl

```bash
curl -X GET https://useast.api.elasticpath.com/v2/carts \
     -H "X-Moltin-Customer-Token: XXXX" \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

#### JavaScript SDK

```javascript
const customerToken = "xxxx";

// Where `EPCC` is an authenticated client
await EPCC.Carts.GetCartsList(customerToken);
```

### Response example

`200 OK`

```json
{
    "data": [
        {
            "id": "1",
            "type": "cart",
            "notes": "some notes for this cart",
            "name": "Cart",
            "description:": "",
            "links": {
                "self": "https://useast.api.elasticpath.com/v2/carts/1"
            },
            "meta": {
                "display_price": {
                    "with_tax": {
                        "amount": 10000,
                        "currency": "USD",
                        "formatted": "$100.00"
                    },
                    "without_tax": {
                        "amount": 10000,
                        "currency": "USD",
                        "formatted": "$100.00"
                    },
                    "tax": {
                        "amount": 0,
                        "currency": "USD",
                        "formatted": "$0.00"
                    }
                },
                "timestamps": {
                    "created_at": "2020-12-03T23:27:12Z",
                    "updated_at": "2020-12-03T23:47:10Z"
                }
            },
            "relationships": {
                "items": {
                    "data": [
                        {
                            "type": "custom_item",
                            "id": "1cf8b15b-4f12-43c5-837c-dbbc09aefa55"
                        }
                    ]
                },
                "customers": {
                    "data": [
                        {
                            "type": "customer",
                            "id": "662461ad-ddcb-4dbd-8ed7-ade9aa63b5f9"
                        }
                    ]
                }
            }
        }
    ],
    "links": {
        "current": "https://useast.api.elasticpath.com/v2/carts?page[offset]=0&page[limit]=1&filter=",
        "first": "https://useast.api.elasticpath.com/v2/carts?page[offset]=0&page[limit]=1&filter=",
        "last": "https://useast.api.elasticpath.com/v2/carts?page[offset]=2&page[limit]=1&filter=",
        "prev": "https://useast.api.elasticpath.com/v2/carts?page[offset]=0&page[limit]=1&filter=",
        "next": "https://useast.api.elasticpath.com/v2/carts?page[offset]=1&page[limit]=1&filter="
    },
    "meta": {
        "page": {
            "limit": 1,
            "offset": 0,
            "current": 1,
            "total": 3
        },
        "results": {
            "total": 3
        }
    }
}
```
