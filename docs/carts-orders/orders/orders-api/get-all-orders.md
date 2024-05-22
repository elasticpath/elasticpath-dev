---
title: Get all Orders
nav_label: Get all Orders
sidebar_position: 2
---

## `GET` Get all Orders

```http
https://useast.api.elasticpath.com/v2/orders
```

The `Get all orders` request returns all orders with custom flow fields. The pagination offset is set to fetch a maximum of 10,000 orders. If the store has 10,000 orders and you fetch the orders without using filters, an error is returned. Use a filter to view orders when the order is beyond the 10,000 mark. For more information on filtering, see [Filtering](/docs/commerce-cloud/orders/orders-api/orders-api-overview#filtering).

## Parameters

### Headers

| Name                                         | Required | Type     | Description                                                                                                                                                                                                                                                 |
|:---------------------------------------------|:---------|:---------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `Authorization`                              | Required | `string` | The Bearer token required to get access to the API.                                                                                                                                                                                                         |
| `X-Moltin-Customer-Token`                    | Optional | `string` | A customer token to access a specific customer's orders.                                                                                                                                                                                                    |
| `EP-Account-Management-Authentication-Token` | Optional | `string` | An account management authentication token to access specific account orders. For more details on how to get this token, visit [Account Member Authentication](/docs/commerce-cloud/accounts/using-account-management-api/account-management-api-overview). |

### Query parameters

| Name      | Required | Type     | Description  |
|:----------|:---------|:---------|:-------------|
| `include` | Optional | `string` | The information included such as`items`, `account`, `account_member`, `tax_items`, or `custom_discounts`. |
| `filter`  | Optional | `string` | Filter attributes. For more information, see [Filtering orders](#filtering).   |
| `page[limit]`  | Optional | `integer` | The number of records per page. |
| `page[offset]` | Optional | `integer` | The number of records to offset the results by. |
| `sort`   | Optional | `string` | Supported attributes are `created_at`,`payment`,`shipping`, `status` or `with_tax`. When specified, the results are sorted in ascending order based on the value of the field. To sort in descending order, prefix the attribute with `-`, for example, `-updated_at`. The default sort order is `updated_at` in descending order. For more information, see [Sorting](/guides/Getting-Started/api-overview/sorting). |

### Filtering 

The following operators and attributes are available for [filtering](/guides/Getting-Started/api-overview/filtering) orders.

| Attribute | Type | Operator | Example |
| :--- | :--- | :--- | :--- |
| `status` | `string` | `eq` | `eq(status,complete)` |
| `payment` | `string` | `eq` | `eq(payment,paid)` |
| `shipping` | `string` | `eq` | `eq(shipping,unfulfilled)` |
| `name` (`customer.name`) | `string` | `eq` / `like` | `like(name,Brad*)` |
| `email` (`customer.email`) | `string` | `eq` / `like` | `like(email,*@elasticpath.com)` |
| `customer_id` | `string` | `eq` / `like` | `eq(customer_id, e5a0d684-a4af-4919-a348-f66b0b4955e0)` |
| `account_id` | `string` | `eq` / `like` | `eq(account_id,3d7200c9-a9bc-4085-9822-63e80fd94a09)` |
| `account_member_id` | `string` | `eq` / `like` | `eq(account_member_id,2a8a3a92-2ccd-4b2b-a7af-52d3896eaecb)` |
| `contact.name` | `string` | `eq` / `like` | `eq(name,John Doe)` |
| `contact.email` | `string` | `eq` / `like` | `eq(email,John Doe)` |
| `shipping_postcode` | `string` | `eq` / `like` | `like(shipping_postcode,117*)` |
| `billing_postcode` | `string` | `eq` / `like` | `like(billing_postcode,117*)` |
| `with_tax` | `integer` | `gt`/`ge`/`lt`/`le` | `ge(with_tax,10000)` |
| `without_tax` | `integer` | `gt`/`ge`/`lt`/`le` | `ge(without_tax,10000)` |
| `currency` | `string` | `eq` | `eq(currency,USD)` |
| `product_id` | `string` | `eq` | `eq(product_id,6837058c-ae42-46db-b3c6-7f01e0c34b40)` |
| `product_sku` | `string` | `eq` | `eq(product_sku,deck-shoe-001)` |
| `created_at` | `date` | `eq` / `gt` / `ge`/ `le` / `lt` | `gt(created_at,YYYY-MM-DD)` |
| `updated_at` | `date` | `eq` / `gt` / `ge`/ `le`/ `lt` | `lt(updated_at,YYYY-MM-DD)` |
| `external_ref` | `string` | `eq` / `like` | `like(external_ref, 16be*)` |

## Request Examples

:::note

- Pass the `X-Moltin-Customer-Token` header to limit orders to a specific customer. See [Customer Tokens](/docs/customer-management/customer-managment-api/customer-tokens).
- Pass the `EP-Account-Management-Authentication-Token` header to limit orders to a specific account. See [Account Management Token](/docs/authentication/Tokens/account-management-authentication-token).
- You can use pagination with this resource. For more information, see [pagination](/guides/Getting-Started/api-overview/pagination).

:::

### Curl

```bash
 curl -X GET https://useast.api.elasticpath.com/v2/orders \
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
Moltin.Orders.All().then((orders) => {
    // Do something
});
```

## Response Example

`200 OK`

```json
{
    "data": [
        {
            "type": "order",
            "id": "369ad4a4-ee67-48b0-x347-t50a6e61d83d",
            "status": "incomplete",
            "payment": "unpaid",
            "shipping": "unfulfilled",
            "customer": {
                "name": "Mr John Doe",
                "email": "johndoe@example.com"
            },
            "shipping_address": {
                "first_name": "John",
                "last_name": "Doe",
                "phone_number": "",
                "company_name": "",
                "line_1": "1234 Disney Drive",
                "line_2": "Disney Resort",
                "city": "Anaheim",
                "county": "Orange",
                "region": "CA",
                "postcode": "92802",
                "country": "US",
                "instructions": ""
            },
            "billing_address": {
                "first_name": "John",
                "last_name": "Doe",
                "company_name": "",
                "line_1": "1234 Disney Drive",
                "line_2": "Disney Resort",
                "city": "Anaheim",
                "county": "Orange",
                "region": "CA",
                "postcode": "92802",
                "country": "US"
            },
            "links": {},
            "meta": {
                "display_price": {
                    "with_tax": {
                        "amount": 217500,
                        "currency": "USD",
                        "formatted": "$2175.00"
                    },
                    "without_tax": {
                        "amount": 217500,
                        "currency": "USD",
                        "formatted": "$2175.00"
                    },
                    "tax": {
                        "amount": 0,
                        "currency": "",
                        "formatted": ""
                    }
                },
                "timestamps": {
                    "created_at": "2018-04-16T10:11:59.715Z",
                    "updated_at": "2018-04-16T10:11:59.715Z"
                }
            },
            "relationships": {
                "items": {
                    "data": [
                        {
                            "type": "item",
                            "id": "de9fddf5-011b-4485-abf8-ebb8f53c39ff"
                        }
                    ]
                }
            }
        }
    ],
    "links": {
        "current": "https://useast.api.elasticpath.com/v2/orders?page[offset]=0&page[limit]=50&filter=",
        "first": "https://useast.api.elasticpath.com/v2/orders?page[offset]=0&page[limit]=50&filter=",
        "last": "https://useast.api.elasticpath.com/v2/orders?page[offset]=600&page[limit]=50&filter=",
        "prev": "https://useast.api.elasticpath.com/v2/orders?page[offset]=0&page[limit]=50&filter=",
        "next": "https://useast.api.elasticpath.com/v2/orders?page[offset]=50&page[limit]=50&filter="
    },
    "meta": {
        "page": {
            "limit": 100,
            "offset": 0,
            "current": 1,
            "total": 1
        },
        "results": {
            "total": 100
        }
    }
}
```
