---
title: Get all Carts
nav_label: Get all Carts
sidebar_position: 1.5
---

## `GET` Get all Carts

```http
https://useast.api.elasticpath.com/v2/carts
```

The endpoint returns all carts in the store belonging to any customer or account. To learn how to access carts associated with a specific customer, see [Get a Customerʼs Carts](/docs/commerce-cloud/carts/customer-cart-associations/get-customer-carts), or account see [Get an Accountʼs Carts](/docs/commerce-cloud/carts/account-cart-associations/get-account-carts)

## Parameters

### Headers

| Name            | Required | Type     | Description                                                                                                                                                                                                                         |
|:----------------|:---------|:---------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. [`client_credentials` token](/docs/authentication/Tokens/client-credential-token) is required in order to access all carts belonging to any customer or account. |

### Query parameters

| Name      | Required | Type     | Description  |
|:----------|:---------|:---------|:-------------|
| `include` | Optional | `string` | The information included such as `items`, `custom_discounts`, or `promotions`. |

## Request Examples

### Curl

```bash
curl -X GET https://useast.api.elasticpath.com/v2/carts \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

### JavaScript SDK

```javascript
// Where `EPCC` is an authenticated client
await EPCC.Carts.All();
```

## Response Example

`200 OK`

```json
{
    "data": [
        {
            "id": "1",
            "type": "cart",
            "notes": "some notes for this cart",
            "name": "Cart",
            "description": "",
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
                            "type": "cart_item",
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
