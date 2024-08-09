---
title: Includes
nav_label: Includes
sidebar_position: 125
---

You can use `include=promotions` to retrieve condensed promotion from the following endpoints:

- [Get a Cart](/docs/api/carts/get-a-cart)
- [Get Cart Items](/docs/api/carts/get-cart-items)
- [Get an Order](/docs/api/carts/get-an-order)
- [Get Order Items](/docs/api/carts/get-order-items)

See [Condensed promotions](/docs/api/promotions/promotions-standard-introduction#condensed-promotion).

When a promotion is deleted, the discount associated with it becomes inactive. If the promotion is deleted but still remains in the cart, it does not appear in the `included` section of the response body.

## `GET` Retrieve Promotions from a Cart

```http
https://useast.api.elasticpath.com/v2/carts/:id?include=promotions
```

## Parameters

### Path parameters

| Name        | Required | Type     | Description                              |
|:------------|:---------|:---------|:-----------------------------------------|
| `id` | Required | `string` | The unique identifier of the cart that you created. |

### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Query parameters

| Name      | Required | Type     | Description                                |
|:----------|:---------|:---------|:-------------------------------------------|
| `include` | Optional | `string` | The promotions for a cart. |

## Request Example - Curl

```bash
curl -X GET https://useast.api.elasticpath.com/v2/carts/:id?include=promotions \
     -H "Authorization: Bearer XXXX"
```

## Response Example

The following response example shows condensed promotions for cart discounts within the included object. 

When you create a cart discount rule promotion, an item discount rule promotion and a standard cart discount promotion, and apply these discounts to a cart with eligible items, then upon calling `GET {{baseUrl}}/carts/{{cartID}}?include=promotions` endpoint, the cart relationship object has the promotion item. Aditionally, the `included` object contains condensed promotions for the cart discounts.

`200 OK`

```json
{
    "data": {
        "id": "1",
        "type": "cart",
        "name": "my cart name",
        "description": "cart description",
        "discount_settings": {
            "custom_discounts_enabled": false,
            "use_rule_promotions": true
        },
        "links": {
            "self": "https://useast.api.elasticpath.com/v2/carts/1"
        },
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
                "created_at": "2024-05-24T17:38:10Z",
                "updated_at": "2024-05-31T16:26:07Z",
                "expires_at": "2024-06-07T16:26:07Z"
            }
        },
        "relationships": {
            "items": {
                "data": [
                    {
                        "type": "promotion_item",
                        "id": "0bf2c5d6-0930-48c3-86da-f0ae6fcb0ad7"
                    },
                    {
                        "type": "cart_item",
                        "id": "1a317de0-5375-4175-8a0d-7ecea776fb89"
                    },
                    {
                        "type": "promotion_item",
                        "id": "1fec2974-3578-4b7d-bd7e-2ed626cbec2c"
                    }
                ]
            },
            "customers": {},
            "accounts": {},
            "promotions": {
                "data": [
                    {
                        "type": "promotion",
                        "id": "e4d929d5-f471-4317-9a86-a84a6c572b44"
                    },
                    {
                        "type": "promotion",
                        "id": "05b35539-7946-4145-a8ff-bfd3cefc7691"
                    }
                ]
            }
        }
    },
    "included": {
        "promotions": [
            {
                "type": "promotion",
                "id": "e4d929d5-f471-4317-9a86-a84a6c572b44",
                "name": "cart20",
                "description": "cart20",
                "automatic": false,
                "promotion_source": "rule-promotion",
                "start": "2024-04-01T18:24:06Z",
                "end": "2024-06-01T18:24:09Z"
            },
            {
                "type": "promotion",
                "id": "05b35539-7946-4145-a8ff-bfd3cefc7691",
                "name": "v1cart10",
                "description": "v1cart10",
                "automatic": false,
                "promotion_type": "fixed_discount",
                "start": "2024-04-01T17:25:00Z",
                "end": "2024-06-01T17:25:03Z"
            }
        ]
    }
}
```

## GET Retrieve Promotions from Cart Items

```http
https://useast.api.elasticpath.com/v2/carts/:id/items?include=promotions`
```

## Parameters

### Path parameters

| Name        | Required | Type     | Description                              |
|:------------|:---------|:---------|:-----------------------------------------|
| `id` | Required | `string` | The unique identifier of the cart that you created. |

### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Query parameters

| Name      | Required | Type     | Description                                |
|:----------|:---------|:---------|:-------------------------------------------|
| `include` | Optional | `string` | The promotions for cart items. |

## Request Example - Curl

```bash
curl -X GET https://useast.api.elasticpath.com/v2/carts/:id/items?include=promotions \
     -H "Authorization: Bearer XXXX"
```

## Response Example

The following response example shows condensed promotion for both cart discount and item discounts.

`200 OK`

```json
{
    "data": [
        {
            "id": "1a317de0-5375-4175-8a0d-7ecea776fb89",
            "type": "cart_item",
            "product_id": "5a4662d2-9a2b-4f6e-a215-2970db914b0c",
            "name": "sku1",
            "description": "sku1",
            "sku": "sku1",
            "slug": "sku1",
            "image": {
                "mime_type": "",
                "file_name": "",
                "href": ""
            },
            "quantity": 1,
            "manage_stock": false,
            "unit_price": {
                "amount": 10000,
                "currency": "USD",
                "includes_tax": false
            },
            "value": {
                "amount": 10000,
                "currency": "USD",
                "includes_tax": false
            },
            "discounts": [
                {
                    "amount": {
                        "amount": -1000,
                        "currency": "USD",
                        "includes_tax": false
                    },
                    "code": "sale2024",
                    "id": "de19a043-a6da-4bde-b896-d17e16b77e25",
                    "promotion_source": "rule-promotion"
                },
                {
                    "amount": {
                        "amount": -2000,
                        "currency": "USD",
                        "includes_tax": false
                    },
                    "code": "sale2024",
                    "id": "e4d929d5-f471-4317-9a86-a84a6c572b44",
                    "promotion_source": "rule-promotion",
                    "is_cart_discount": true
                }
            ],
            "links": {
                "product": "https://useast.api.elasticpath.com/v2/products/5a4662d2-9a2b-4f6e-a215-2970db914b0c"
            },
            "relationships": {
                "taxes": {
                    "data": null
                },
                "custom_discounts": {
                    "data": null
                },
                "promotions": {
                    "data": [
                        {
                            "type": "promotion",
                            "id": "de19a043-a6da-4bde-b896-d17e16b77e25"
                        },
                        {
                            "type": "promotion",
                            "id": "e4d929d5-f471-4317-9a86-a84a6c572b44"
                        }
                    ]
                }
            },
            "meta": {
                "display_price": {
                    "with_tax": {
                        "unit": {
                            "amount": 6000,
                            "currency": "USD",
                            "formatted": "$60.00"
                        },
                        "value": {
                            "amount": 6000,
                            "currency": "USD",
                            "formatted": "$60.00"
                        }
                    },
                    "without_tax": {
                        "unit": {
                            "amount": 6000,
                            "currency": "USD",
                            "formatted": "$60.00"
                        },
                        "value": {
                            "amount": 6000,
                            "currency": "USD",
                            "formatted": "$60.00"
                        }
                    },
                    "tax": {
                        "unit": {
                            "amount": 0,
                            "currency": "USD",
                            "formatted": "$0.00"
                        },
                        "value": {
                            "amount": 0,
                            "currency": "USD",
                            "formatted": "$0.00"
                        }
                    },
                    "discount": {
                        "unit": {
                            "amount": -4000,
                            "currency": "USD",
                            "formatted": "-$40.00"
                        },
                        "value": {
                            "amount": -4000,
                            "currency": "USD",
                            "formatted": "-$40.00"
                        }
                    },
                    "without_discount": {
                        "unit": {
                            "amount": 10000,
                            "currency": "USD",
                            "formatted": "$100.00"
                        },
                        "value": {
                            "amount": 10000,
                            "currency": "USD",
                            "formatted": "$100.00"
                        }
                    },
                    "discounts": {
                        "sale2024": {
                            "amount": -3000,
                            "currency": "USD",
                            "formatted": "-$30.00",
                            "constituents": {
                                "de19a043-a6da-4bde-b896-d17e16b77e25": {
                                    "amount": -1000,
                                    "currency": "USD",
                                    "formatted": "-$10.00"
                                },
                                "e4d929d5-f471-4317-9a86-a84a6c572b44": {
                                    "amount": -2000,
                                    "currency": "USD",
                                    "formatted": "-$20.00"
                                }
                            }
                        }
                    }
                },
                "timestamps": {
                    "created_at": "2024-05-31T16:26:04Z",
                    "updated_at": "2024-05-31T16:26:04Z"
                }
            },
            "catalog_id": "09b9359f-897f-407f-89a2-702e167fe781",
            "catalog_source": "pim"
        },
        {
            "id": "0bf2c5d6-0930-48c3-86da-f0ae6fcb0ad7",
            "type": "promotion_item",
            "promotion_id": "e4d929d5-f471-4317-9a86-a84a6c572b44",
            "name": "cart20",
            "description": "Promotion",
            "sku": "sale2024",
            "slug": "",
            "image": {
                "mime_type": "",
                "file_name": "",
                "href": ""
            },
            "quantity": 1,
            "manage_stock": false,
            "unit_price": {
                "amount": -2000,
                "currency": "USD",
                "includes_tax": false
            },
            "value": {
                "amount": -2000,
                "currency": "USD",
                "includes_tax": false
            },
            "links": {},
            "relationships": {
                "taxes": {
                    "data": null
                },
                "custom_discounts": {
                    "data": null
                },
                "promotions": {
                    "data": [
                        {
                            "type": "promotion",
                            "id": "e4d929d5-f471-4317-9a86-a84a6c572b44"
                        }
                    ]
                }
            },
            "meta": {
                "display_price": {
                    "with_tax": {
                        "unit": {
                            "amount": -2000,
                            "currency": "USD",
                            "formatted": "-$20.00"
                        },
                        "value": {
                            "amount": -2000,
                            "currency": "USD",
                            "formatted": "-$20.00"
                        }
                    },
                    "without_tax": {
                        "unit": {
                            "amount": -2000,
                            "currency": "USD",
                            "formatted": "-$20.00"
                        },
                        "value": {
                            "amount": -2000,
                            "currency": "USD",
                            "formatted": "-$20.00"
                        }
                    },
                    "tax": {
                        "unit": {
                            "amount": 0,
                            "currency": "USD",
                            "formatted": "$0.00"
                        },
                        "value": {
                            "amount": 0,
                            "currency": "USD",
                            "formatted": "$0.00"
                        }
                    },
                    "discount": {
                        "unit": {
                            "amount": 0,
                            "currency": "USD",
                            "formatted": "$0.00"
                        },
                        "value": {
                            "amount": 0,
                            "currency": "USD",
                            "formatted": "$0.00"
                        }
                    },
                    "without_discount": {
                        "unit": {
                            "amount": 0,
                            "currency": "",
                            "formatted": "0"
                        },
                        "value": {
                            "amount": 0,
                            "currency": "",
                            "formatted": "0"
                        }
                    }
                },
                "timestamps": {
                    "created_at": "2024-05-31T16:26:07Z",
                    "updated_at": "2024-05-31T16:26:07Z"
                }
            },
            "promotion_source": "rule-promotion"
        },
        {
            "id": "1fec2974-3578-4b7d-bd7e-2ed626cbec2c",
            "type": "promotion_item",
            "promotion_id": "05b35539-7946-4145-a8ff-bfd3cefc7691",
            "name": "v1cart10",
            "description": "Promotion",
            "sku": "sale2024",
            "slug": "",
            "image": {
                "mime_type": "",
                "file_name": "",
                "href": ""
            },
            "quantity": 1,
            "manage_stock": false,
            "unit_price": {
                "amount": -1000,
                "currency": "USD",
                "includes_tax": false
            },
            "value": {
                "amount": -1000,
                "currency": "USD",
                "includes_tax": false
            },
            "links": {},
            "relationships": {
                "taxes": {
                    "data": null
                },
                "custom_discounts": {
                    "data": null
                },
                "promotions": {
                    "data": [
                        {
                            "type": "promotion",
                            "id": "05b35539-7946-4145-a8ff-bfd3cefc7691"
                        }
                    ]
                }
            },
            "meta": {
                "display_price": {
                    "with_tax": {
                        "unit": {
                            "amount": -1000,
                            "currency": "USD",
                            "formatted": "-$10.00"
                        },
                        "value": {
                            "amount": -1000,
                            "currency": "USD",
                            "formatted": "-$10.00"
                        }
                    },
                    "without_tax": {
                        "unit": {
                            "amount": -1000,
                            "currency": "USD",
                            "formatted": "-$10.00"
                        },
                        "value": {
                            "amount": -1000,
                            "currency": "USD",
                            "formatted": "-$10.00"
                        }
                    },
                    "tax": {
                        "unit": {
                            "amount": 0,
                            "currency": "USD",
                            "formatted": "$0.00"
                        },
                        "value": {
                            "amount": 0,
                            "currency": "USD",
                            "formatted": "$0.00"
                        }
                    },
                    "discount": {
                        "unit": {
                            "amount": 0,
                            "currency": "USD",
                            "formatted": "$0.00"
                        },
                        "value": {
                            "amount": 0,
                            "currency": "USD",
                            "formatted": "$0.00"
                        }
                    },
                    "without_discount": {
                        "unit": {
                            "amount": 0,
                            "currency": "",
                            "formatted": "0"
                        },
                        "value": {
                            "amount": 0,
                            "currency": "",
                            "formatted": "0"
                        }
                    }
                },
                "timestamps": {
                    "created_at": "2024-05-31T16:26:07Z",
                    "updated_at": "2024-05-31T16:26:07Z"
                }
            }
        }
    ],
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
            "created_at": "2024-05-24T17:38:10Z",
            "updated_at": "2024-05-31T16:26:07Z",
            "expires_at": "2024-06-07T16:26:07Z"
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
            },
            {
                "type": "promotion",
                "id": "de19a043-a6da-4bde-b896-d17e16b77e25",
                "name": "item10",
                "description": "item10",
                "automatic": false,
                "promotion_source": "rule-promotion",
                "start": "2024-05-02T04:28:24Z",
                "end": "2024-06-02T04:28:28Z"
            }
        ]
    }
}
```

## `GET` Retrieve Promotions from an order

```http
https://useast.api.elasticpath.com/v2/orders/:id?include=promotions`
```

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

## `GET` Retrieve Promotions from order items

```http
https://useast.api.elasticpath.com/v2/orders/:id/items
```

## Parameters

### Path parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `id` | Required | `string` | The ID of the order. |

### Headers

| Name | Required | Type | Description                                             |
| --- | --- | --- |---------------------------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API.     |
| `X-Moltin-Customer-Token` | Optional | `string` | A customer token to access a specific customer's order. |

### Query parameters

| Name      | Required | Type     | Description                                |
|:----------|:---------|:---------|:-------------------------------------------|
| `include` | Optional | `string` | The promotions for order items. |

## Request Example - Curl

```bash
curl -X GET https://useast.api.elasticpath.com/v2/orders/:id/items?include=promotions  \
     -H "Authorization: Bearer XXXX"
```

## Response Example

The following response example shows `included` object containing both order-level and item-level promotions.

`200 OK`

```json
{
    "data": [
        {
            "id": "874aa011-c160-4819-8a87-7b54be25481b",
            "type": "order_item",
            "custom_field_test": null,
            "tracking_number": null,
            "quantity": 1,
            "product_id": "05b35539-7946-4145-a8ff-bfd3cefc7691",
            "name": "v1cart10",
            "sku": "sale2024",
            "unit_price": {
                "amount": -1000,
                "currency": "USD",
                "includes_tax": false
            },
            "value": {
                "amount": -1000,
                "currency": "USD",
                "includes_tax": false
            },
            "links": {},
            "meta": {
                "display_price": {
                    "with_tax": {
                        "unit": {
                            "amount": -1000,
                            "currency": "USD",
                            "formatted": "-$10.00"
                        },
                        "value": {
                            "amount": -1000,
                            "currency": "USD",
                            "formatted": "-$10.00"
                        }
                    },
                    "without_tax": {
                        "unit": {
                            "amount": -1000,
                            "currency": "USD",
                            "formatted": "-$10.00"
                        },
                        "value": {
                            "amount": -1000,
                            "currency": "USD",
                            "formatted": "-$10.00"
                        }
                    },
                    "tax": {
                        "unit": {
                            "amount": 0,
                            "currency": "USD",
                            "formatted": "$0.00"
                        },
                        "value": {
                            "amount": 0,
                            "currency": "USD",
                            "formatted": "$0.00"
                        }
                    },
                    "discount": {
                        "unit": {
                            "amount": 0,
                            "currency": "USD",
                            "formatted": "$0.00"
                        },
                        "value": {
                            "amount": 0,
                            "currency": "USD",
                            "formatted": "$0.00"
                        }
                    },
                    "without_discount": {
                        "unit": {
                            "amount": -1000,
                            "currency": "USD",
                            "formatted": "-$10.00"
                        },
                        "value": {
                            "amount": -1000,
                            "currency": "USD",
                            "formatted": "-$10.00"
                        }
                    }
                },
                "timestamps": {
                    "created_at": "2024-05-31T16:43:31Z",
                    "updated_at": "2024-05-31T16:43:31Z"
                }
            },
            "relationships": {
                "cart_item": {
                    "data": {
                        "type": "cart_item",
                        "id": "6d55f4b1-2869-4b31-a214-0cbe11ac6722"
                    }
                },
                "promotions": {
                    "data": [
                        {
                            "type": "promotion",
                            "id": "05b35539-7946-4145-a8ff-bfd3cefc7691"
                        }
                    ]
                }
            }
        },
        {
            "id": "baf6e9f6-f248-477c-b508-3788957908cf",
            "type": "promotion_item",
            "custom_field_test": null,
            "tracking_number": null,
            "quantity": 1,
            "product_id": "e4d929d5-f471-4317-9a86-a84a6c572b44",
            "name": "cart20",
            "sku": "sale2024",
            "unit_price": {
                "amount": -2000,
                "currency": "USD",
                "includes_tax": false
            },
            "value": {
                "amount": -2000,
                "currency": "USD",
                "includes_tax": false
            },
            "links": {},
            "meta": {
                "display_price": {
                    "with_tax": {
                        "unit": {
                            "amount": -2000,
                            "currency": "USD",
                            "formatted": "-$20.00"
                        },
                        "value": {
                            "amount": -2000,
                            "currency": "USD",
                            "formatted": "-$20.00"
                        }
                    },
                    "without_tax": {
                        "unit": {
                            "amount": -2000,
                            "currency": "USD",
                            "formatted": "-$20.00"
                        },
                        "value": {
                            "amount": -2000,
                            "currency": "USD",
                            "formatted": "-$20.00"
                        }
                    },
                    "tax": {
                        "unit": {
                            "amount": 0,
                            "currency": "USD",
                            "formatted": "$0.00"
                        },
                        "value": {
                            "amount": 0,
                            "currency": "USD",
                            "formatted": "$0.00"
                        }
                    },
                    "discount": {
                        "unit": {
                            "amount": 0,
                            "currency": "USD",
                            "formatted": "$0.00"
                        },
                        "value": {
                            "amount": 0,
                            "currency": "USD",
                            "formatted": "$0.00"
                        }
                    },
                    "without_discount": {
                        "unit": {
                            "amount": -2000,
                            "currency": "USD",
                            "formatted": "-$20.00"
                        },
                        "value": {
                            "amount": -2000,
                            "currency": "USD",
                            "formatted": "-$20.00"
                        }
                    }
                },
                "timestamps": {
                    "created_at": "2024-05-31T16:43:31Z",
                    "updated_at": "2024-05-31T16:43:31Z"
                }
            },
            "relationships": {
                "cart_item": {
                    "data": {
                        "type": "cart_item",
                        "id": "614d4801-5077-468d-9514-db81306d1560"
                    }
                },
                "promotions": {
                    "data": [
                        {
                            "type": "promotion",
                            "id": "e4d929d5-f471-4317-9a86-a84a6c572b44"
                        }
                    ]
                }
            },
            "promotion_source": "rule-promotion"
        },
        {
            "id": "58e6c654-fe32-4bdf-ae88-958c988fb1b3",
            "type": "order_item",
            "custom_field_test": null,
            "tracking_number": null,
            "quantity": 1,
            "product_id": "5a4662d2-9a2b-4f6e-a215-2970db914b0c",
            "name": "sku1",
            "sku": "sku1",
            "unit_price": {
                "amount": 10000,
                "currency": "USD",
                "includes_tax": false
            },
            "value": {
                "amount": 10000,
                "currency": "USD",
                "includes_tax": false
            },
            "discounts": [
                {
                    "amount": {
                        "amount": -2000,
                        "currency": "USD",
                        "includes_tax": false
                    },
                    "code": "sale2024",
                    "id": "e4d929d5-f471-4317-9a86-a84a6c572b44",
                    "promotion_source": "rule-promotion",
                    "is_cart_discount": true
                },
                {
                    "amount": {
                        "amount": -1000,
                        "currency": "USD",
                        "includes_tax": false
                    },
                    "code": "sale2024",
                    "id": "de19a043-a6da-4bde-b896-d17e16b77e25",
                    "promotion_source": "rule-promotion"
                }
            ],
            "links": {},
            "meta": {
                "display_price": {
                    "with_tax": {
                        "unit": {
                            "amount": 6000,
                            "currency": "USD",
                            "formatted": "$60.00"
                        },
                        "value": {
                            "amount": 6000,
                            "currency": "USD",
                            "formatted": "$60.00"
                        }
                    },
                    "without_tax": {
                        "unit": {
                            "amount": 6000,
                            "currency": "USD",
                            "formatted": "$60.00"
                        },
                        "value": {
                            "amount": 6000,
                            "currency": "USD",
                            "formatted": "$60.00"
                        }
                    },
                    "tax": {
                        "unit": {
                            "amount": 0,
                            "currency": "USD",
                            "formatted": "$0.00"
                        },
                        "value": {
                            "amount": 0,
                            "currency": "USD",
                            "formatted": "$0.00"
                        }
                    },
                    "discount": {
                        "unit": {
                            "amount": -4000,
                            "currency": "USD",
                            "formatted": "-$40.00"
                        },
                        "value": {
                            "amount": -4000,
                            "currency": "USD",
                            "formatted": "-$40.00"
                        }
                    },
                    "without_discount": {
                        "unit": {
                            "amount": 10000,
                            "currency": "USD",
                            "formatted": "$100.00"
                        },
                        "value": {
                            "amount": 10000,
                            "currency": "USD",
                            "formatted": "$100.00"
                        }
                    },
                    "discounts": {
                        "sale2024": {
                            "amount": -3000,
                            "currency": "USD",
                            "formatted": "-$30.00",
                            "constituents": {
                                "de19a043-a6da-4bde-b896-d17e16b77e25": {
                                    "amount": -1000,
                                    "currency": "USD",
                                    "formatted": "-$10.00"
                                },
                                "e4d929d5-f471-4317-9a86-a84a6c572b44": {
                                    "amount": -2000,
                                    "currency": "USD",
                                    "formatted": "-$20.00"
                                }
                            }
                        }
                    }
                },
                "timestamps": {
                    "created_at": "2024-05-31T16:43:31Z",
                    "updated_at": "2024-05-31T16:43:31Z"
                }
            },
            "relationships": {
                "cart_item": {
                    "data": {
                        "type": "cart_item",
                        "id": "2745400a-39f5-4b7b-ae77-c84b2ca1a723"
                    }
                },
                "promotions": {
                    "data": [
                        {
                            "type": "promotion",
                            "id": "e4d929d5-f471-4317-9a86-a84a6c572b44"
                        },
                        {
                            "type": "promotion",
                            "id": "de19a043-a6da-4bde-b896-d17e16b77e25"
                        }
                    ]
                }
            },
            "catalog_id": "09b9359f-897f-407f-89a2-702e167fe781",
            "catalog_source": "pim"
        }
    ],
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
            },
            {
                "type": "promotion",
                "id": "de19a043-a6da-4bde-b896-d17e16b77e25",
                "name": "item10",
                "description": "item10",
                "automatic": false,
                "promotion_source": "rule-promotion",
                "start": "2024-05-02T04:28:24Z",
                "end": "2024-06-02T04:28:28Z"
            }
        ]
    }
}
```

