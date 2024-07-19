---
title: Get an Order
nav_label: Get an Order
sidebar_position: 180
---

## `GET` Get by ID

```http
https://useast.api.elasticpath.com/v2/orders/:id
```
Use this endpoint to retrieve a specific order. If the order is associated with shipping groups, calling this endpoint also displays the associated shipping group IDs in the `relationships` section.

## Parameters

### Path parameters

| Name | Required | Type     | Description          |
|:-----|:---------|:---------|:---------------------|
| `id` | Required | `string` | The ID of the order. |

### Headers

| Name                      | Required | Type     | Description                |
|:--------------------------|:---------|:---------|:---------------------------|
| `Authorization`           | Required | `string` | The Bearer token required to get access to the API. |
| `x-moltin-customer-token` | Optional | `string` | A customer token to access a specific customer order. |

### Query parameters

| Name                      | Required | Type     | Description                |
|:--------------------------|:---------|:---------|:---------------------------|
| `include`                 | Optional | `string` | The information included, such as `items`, `account`, `account_member`. `tax_items`, `custom_discounts`, or `promotions` for an order. |

## Request Examples

### Curl

```bash
curl -X GET https://useast.api.elasticpath.com/v2/orders/:id \
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
const id = "XXXX";
Moltin.Orders.Get(id).then((orders) => {
    // Do something
});
// Get order with items
Moltin.Orders.With("items")
    .Get(id)
    .then((orders) => {
        // Do something
    });
```

## Response Examples

The following response contains accounts and account members in the `included` section:

`200 OK`

```json
{
    "data": {
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
                    "amount": 237500,
                    "currency": "USD",
                    "formatted": "$2175.00"
                },
                "without_tax": {
                    "amount": 237500,
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
            },
            "account": {
                "data": {
                    "type": "account",
                    "id": "b6e47478-7e7f-4127-b7e9-4a255564ae68"
                }
            },
            "account_member": {
                "data": {
                    "type": "account-member",
                    "id": "c8c1c511-beef-4812-9b7a-9f92c587217c"
                }
            }
        },
        "included": {
            "accounts": [
                {
                    "id": "b6e47478-7e7f-4127-b7e9-4a255564ae68",
                    "type": "account",
                    "name": "acc-name",
                    "legal_name": "acc-legal-name",
                    "registration_id": "00000000-0000-1000-8000-000f00000300"
                }
            ],
            "account_members": [
                {
                    "id": "c8c1c511-beef-4812-9b7a-9f92c587217c",
                    "type": "account_member",
                    "name": "John Smith",
                    "email": "john@smith.com"
                }
            ]
        }
    }
}
```

The following response example is returned when you `GET` an order that is associated with a shipping group:

`200 OK`

```json
{
    "data": {
        "type": "order",
        "id": "9ac74c41-7d64-45b6-b8e6-7e41e557b176",
        "status": "incomplete",
        "payment": "unpaid",
        "shipping": "unfulfilled",
        "anonymized": false,
        "customer": {
            "name": "Andy Dwyer",
            "email": "andy@example.com"
        },
        "shipping_address": {
            "first_name": "Andy",
            "last_name": "Dwyer",
            "phone_number": "",
            "company_name": "Ron Swanson Enterprises",
            "line_1": "1 Sunny Street",
            "line_2": "",
            "city": "",
            "postcode": "92802",
            "county": "Orange",
            "country": "US",
            "region": "CA",
            "instructions": ""
        },
        "billing_address": {
            "first_name": "Andy",
            "last_name": "Dwyer",
            "company_name": "Ron Swanson Enterprises",
            "line_1": "1 Sunny Street",
            "line_2": "",
            "city": "",
            "postcode": "92802",
            "county": "Orange",
            "country": "US",
            "region": "CA"
        },
        "links": {},
        "meta": {
            "display_price": {
                "with_tax": {
                    "amount": 80700,
                    "currency": "USD",
                    "formatted": "$807.00"
                },
                "without_tax": {
                    "amount": 80700,
                    "currency": "USD",
                    "formatted": "$807.00"
                },
                "tax": {
                    "amount": 0,
                    "currency": "USD",
                    "formatted": "$0.00"
                },
                "discount": {
                    "amount": 0,
                    "currency": "USD",
                    "formatted": "$0.00"
                },
                "balance_owing": {
                    "amount": 80700,
                    "currency": "USD",
                    "formatted": "$807.00"
                },
                "paid": {
                    "amount": 0,
                    "currency": "USD",
                    "formatted": "$0.00"
                },
                "authorized": {
                    "amount": 0,
                    "currency": "USD",
                    "formatted": "$0.00"
                },
                "without_discount": {
                    "amount": 80700,
                    "currency": "USD",
                    "formatted": "$807.00"
                },
                "shipping": {
                    "amount": 700,
                    "currency": "USD",
                    "formatted": "$7.00"
                }
            },
            "timestamps": {
                "created_at": "2023-07-11T21:25:18Z",
                "updated_at": "2023-07-11T21:25:18Z"
            }
        },
        "relationships": {
            "items": {
                "data": [
                    {
                        "type": "item",
                        "id": "4a9c771e-41f1-44c0-9014-5d9f893f3ba7"
                    },
                    {
                        "type": "shipping_group",
                        "id": "82fde17d-21e4-41f1-bda1-ddd017679b2a"
                    }
                ]
            }
        }
    }
}
```

## `GET` Include Custom Discounts

```http
https://useast.api.elasticpath.com/v2/orders/:id?include=custom_discounts
```
## Parameters

### Path parameters

| Name | Required | Type     | Description          |
|:-----|:---------|:---------|:---------------------|
| `id` | Required | `string` | The ID of the order. |

### Query parameters 

| Name | Required | Type     | Description          |
|:-----|:---------|:---------|:---------------------|
| `include` | Required | `string` | The custom discounts for the order. |

## Request Example - Curl

```bash
curl -X GET https://useast.api.elasticpath.com/v2/orders/:id?include=custom_discounts \
     -H "Authorization: Bearer XXXX"
```

## Response Example

`200 OK`

```JSon
{
    "data": {
        "id": "a51a680e-9570-4f8d-9bbc-bd3c9fcd9ea3",
        "type": "order",
        "status": "incomplete",
        "payment": "unpaid",
        "shipping": "unfulfilled",
        "anonymized": false,
        "customer": {
            "name": "John Doe",
            "email": "andy@example.com"
        },
        "shipping_address": {
            "first_name": "Andy",
            "last_name": "Dwyer",
            "phone_number": "123-456-1111",
            "company_name": "Elasticpath",
            "line_1": "1 Sunny Street",
            "line_2": "",
            "city": "Sunny Town",
            "postcode": "v1v 1v1",
            "county": "BC",
            "country": "CA",
            "instructions": ""
        },
        "billing_address": {
            "first_name": "Andy",
            "last_name": "Dwyer",
            "company_name": "Elasticpath",
            "line_1": "1 Sunny Street",
            "line_2": "",
            "city": "Sunny Town",
            "postcode": "v1v 1v1",
            "county": "BC",
            "country": "CA"
        },
        "links": {},
        "meta": {
            "display_price": {
                "with_tax": {
                    "amount": 8500,
                    "currency": "USD",
                    "formatted": "$85.00"
                },
                "without_tax": {
                    "amount": 8500,
                    "currency": "USD",
                    "formatted": "$85.00"
                },
                "tax": {
                    "amount": 0,
                    "currency": "USD",
                    "formatted": "$0.00"
                },
                "discount": {
                    "amount": -1500,
                    "currency": "USD",
                    "formatted": "-$15.00"
                },
                "balance_owing": {
                    "amount": 8500,
                    "currency": "USD",
                    "formatted": "$85.00"
                },
                "paid": {
                    "amount": 0,
                    "currency": "USD",
                    "formatted": "$0.00"
                },
                "authorized": {
                    "amount": 0,
                    "currency": "USD",
                    "formatted": "$0.00"
                },
                "without_discount": {
                    "amount": 10000,
                    "currency": "USD",
                    "formatted": "$100.00"
                }
            },
            "timestamps": {
                "created_at": "2023-04-19T23:08:57Z",
                "updated_at": "2023-04-19T23:08:57Z"
            }
        },
        "relationships": {
            "items": {
                "data": [
                    {
                        "type": "item",
                        "id": "8addeb0a-3117-4583-bb92-efd7a7aa91b5"
                    }
                ]
            },
            "custom_discounts": {
                "data": [
                    {
                        "type": "custom_discount",
                        "id": "4b3ec5f2-941f-4125-89d7-5885b3e9782b"
                    }
                ]
            }
        }
    },
    "included": {
        "custom_discounts": [
            {
                "amount": {
                    "amount": -500,
                    "currency": "USD"
                },
                "type": "custom_discount",
                "id": "3e36ad8e-cf3e-463d-8332-ef569ffc819c",
                "external_id": "item custom discount",
                "discount_engine": "Custom Discount Engine",
                "description": "custom discount description",
                "discount_code": "item custom-code"
            },
            {
                "amount": {
                    "amount": -1000,
                    "currency": "USD"
                },
                "type": "custom_discount",
                "id": "4b3ec5f2-941f-4125-89d7-5885b3e9782b",
                "external_id": "cart custom discount",
                "discount_engine": "Custom Discount Engine",
                "description": "custom discount description",
                "discount_code": "cart custom-code"
            }
        ]
    }
}
```

## `GET` Include Promotions

```http
https://useast.api.elasticpath.com/v2/orders/:id?include=promotions
```

Use this endpoint to retrieve order-level condensed promotions. When a promotion is deleted, the discount associated with it becomes inactive. If the promotion is deleted but still remains in the cart, it does not appear in the `included` section of the response body.

## Parameters

### Path parameters

| Name | Required | Type     | Description          |
|:-----|:---------|:---------|:---------------------|
| `id` | Required | `string` | The ID of the order. |

### Query parameters 

| Name | Required | Type     | Description          |
|:-----|:---------|:---------|:---------------------|
| `include` | Required | `string` | The promotions included for the order. |

## Request Example -Curl

```bash
curl -X GET https://useast.api.elasticpath.com/v2/orders/:id?include=promotions \
     -H "Authorization: Bearer XXXX"
```

## Response Example

`200 OK`

```json
{
    "data": {
        "id": "522dd525-38cb-4d25-9903-9d417b568096",
        "type": "order",
        "web_order_id": null,
        "status": "incomplete",
        "payment": "unpaid",
        "shipping": "unfulfilled",
        "anonymized": false,
        "customer": {
            "name": "kevin",
            "email": "andy@example.com"
        },
        "shipping_address": {
            "first_name": "Andy",
            "last_name": "Dwyer",
            "phone_number": "123-456-1111",
            "company_name": "Elasticpath",
            "line_1": "1 Sunny Street",
            "line_2": "",
            "city": "Sunny Town",
            "postcode": "v1v 1v1",
            "county": "BC",
            "country": "CA",
            "instructions": ""
        },
        "billing_address": {
            "first_name": "Andy",
            "last_name": "Dwyer",
            "company_name": "Elasticpath",
            "line_1": "1 Sunny Street",
            "line_2": "",
            "city": "Sunny Town",
            "postcode": "v1v 1v1",
            "county": "BC",
            "country": "CA"
        },
        "links": {},
        "meta": {
            "display_price": {
                "with_tax": {
                    "amount": 6000,
                    "currency": "USD",
                    "formatted": "$60.00"
                },
                "without_tax": {
                    "amount": 6000,
                    "currency": "USD",
                    "formatted": "$60.00"
                },
                "tax": {
                    "amount": 0,
                    "currency": "USD",
                    "formatted": "$0.00"
                },
                "discount": {
                    "amount": -4000,
                    "currency": "USD",
                    "formatted": "-$40.00"
                },
                "balance_owing": {
                    "amount": 6000,
                    "currency": "USD",
                    "formatted": "$60.00"
                },
                "paid": {
                    "amount": 0,
                    "currency": "USD",
                    "formatted": "$0.00"
                },
                "authorized": {
                    "amount": 0,
                    "currency": "USD",
                    "formatted": "$0.00"
                },
                "without_discount": {
                    "amount": 10000,
                    "currency": "USD",
                    "formatted": "$100.00"
                },
                "shipping": {
                    "amount": 0,
                    "currency": "USD",
                    "formatted": "$0.00"
                }
            },
            "timestamps": {
                "created_at": "2024-05-31T16:43:31Z",
                "updated_at": "2024-05-31T16:43:31Z"
            }
        },
        "relationships": {
            "items": {
                "data": [
                    {
                        "type": "item",
                        "id": "874aa011-c160-4819-8a87-7b54be25481b"
                    },
                    {
                        "type": "item",
                        "id": "baf6e9f6-f248-477c-b508-3788957908cf"
                    },
                    {
                        "type": "item",
                        "id": "58e6c654-fe32-4bdf-ae88-958c988fb1b3"
                    }
                ]
            },
            "promotions": {
                "data": [
                    {
                        "type": "promotion",
                        "id": "05b35539-7946-4145-a8ff-bfd3cefc7691"
                    },
                    {
                        "type": "promotion",
                        "id": "e4d929d5-f471-4317-9a86-a84a6c572b44"
                    }
                ]
            }
        }
    },
    "included": {
        "promotions": [
            {
                "type": "promotion",
                "id": "05b35539-7946-4145-a8ff-bfd3cefc7691",
                "name": "v1cart10",
                "description": "v1cart10",
                "automatic": false,
                "promotion_type": "fixed_discount",
                "start": "2024-04-01T17:25:00Z",
                "end": "2024-06-01T17:25:03Z"
            },
            {
                "type": "promotion",
                "id": "e4d929d5-f471-4317-9a86-a84a6c572b44",
                "name": "cart20",
                "description": "cart20",
                "automatic": false,
                "promotion_source": "rule-promotion",
                "start": "2024-04-01T18:24:06Z",
                "end": "2024-06-01T18:24:09Z"
            }
        ]
    }
}
```
