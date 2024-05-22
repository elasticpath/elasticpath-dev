---
title: Get Carts Associated with an Account
nav_label: Get Carts Associated with an Account
sidebar_position: 2
---

You can retrieve the carts that are associated with an account.

When a shopper retrieves their latest carts, the carts are sorted in descending order based on the `updated_date`. For more information, see [Pagination](/guides/Getting-Started/api-overview/pagination).

## `GET` Get Carts for an Account with an Account Management Authentication Token

```http
https://useast.api.elasticpath.com/v2/carts
```

Retrieves carts for the account. The account is specified by the [Account Management Authentication Token](/docs/commerce-cloud/accounts/account-management-authentication/account-member-authentication-api-overview) in the header.

:::caution
Requires an [`implicit` token](/docs/authentication/Tokens/implicit-token) with an [Account Management Authentication Token](/docs/commerce-cloud/accounts/account-management-authentication/account-member-authentication-api-overview).
:::

### Parameters

#### Headers

| Name                      | Required | Type     | Description                                                                  |
|:--------------------------|:---------|:---------|:-----------------------------------------------------------------------------|
| `EP-Account-Management-Authentication-Token` | Required | `string` | An Account Management Authentication token to access specific account carts. |
| `Authorization`           | Required | `string` | The Bearer token required to get access to the API.                          |

### Request example

#### Curl

```bash
curl -X GET https://useast.api.elasticpath.com/v2/carts \
     -H "EP-Account-Management-Authentication-Token: XXXX" \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

#### JavaScript SDK

```javascript
const accountToken = "xxxx";

// Where `EPCC` is an authenticated client
await EPCC.Carts.GetCartsList(accountToken);
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
                "accounts": {
                    "data": [
                        {
                            "type": "account",
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
