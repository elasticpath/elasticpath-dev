---
title: Get a Cart
nav_label: Get a Cart
sidebar_position: 125
---

:::note
The default cart name is `Cart`. However, you can update the cart name as required. Ensure that the string length of the name is greater than or equal to one. Follow the safe character guidelines for name and description naming. For more information about cart ID naming requirements, see the [Safe Characters](/guides/Getting-Started/safe-characters) section.
:::

## `GET` Get a Cart by ID

```http
https://useast.api.elasticpath.com/v2/carts/:id
```

Use this endpoint to retrieve a specific cart. If the cart is associated with shipping groups, calling this endpoint displays the associated shipping group IDs in the `relationships` section. See [Response Example](/docs/api/carts/get-a-cart).


## Parameters

### Path parameters

| Name        | Required | Type     | Description                              |
|:------------|:---------|:---------|:-----------------------------------------|
| `id` | Required | `string` | The unique identifier for this cart that you created. |

### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Query parameters

| Name      | Required | Type     | Description                                |
|:----------|:---------|:---------|:-------------------------------------------|
| `include` | Optional | `string` | Comma-delimited string of entities that can be included. The information included are `items`,`tax_items`, `custom_discounts`, or `promotions`. |

## Request Examples

### Curl

```bash
curl -X GET https://useast.api.elasticpath.com/v2/carts/:id \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

### JavaScript SDK

```javascript
const reference = "XXXX";

// Where `EPCC` is an authenticated client
await EPCC.Cart(reference).Get();
```

## Response Example - To `GET` a cart

`200 OK`

```json
{
    "data": {
        "id": "616bea5c-507b-4ed4-b4a3-e1f17b314f86",
        "name": "Cart",
        "description": "",
        "type": "cart",
        "discounts_settings": {
            "custom_discounts_enabled" : false
        },
        "links": {
            "self": "https://useast.api.elasticpath.com/carts/616bea5c-507b-4ed4-b4a3-e1f17b314f86"
        },
        "meta": {
            "display_price": {
                "with_tax": {
                    "amount": 0,
                    "currency": "",
                    "formatted": "0"
                },
                "without_tax": {
                    "amount": 0,
                    "currency": "",
                    "formatted": "0"
                },
                "tax": {
                    "amount": 0,
                    "currency": "",
                    "formatted": "0"
                },
                "discount": {
                    "amount": 0,
                    "currency": "",
                    "formatted": "0"
                },
                "without_discount": {
                    "amount": 0,
                    "currency": "",
                    "formatted": "0"
                }
            },
            "timestamps": {
                "created_at": "2023-01-12T16:38:40Z",
                "updated_at": "2023-01-12T16:38:40Z",
                "expires_at": "2023-01-12T16:38:40Z"
            }
        },
        "relationships": {
            "items": {
                "data": null
            }
        }
    }
}
```

You can easily get a new or existing cart by providing the unique cart reference in the request.

:::caution
An empty cart is returned for any carts that don’t currently exist. For more information about the cart items object, see [Get Cart Items](/docs/api/carts/get-cart-items).
:::

:::note
Outside of the JS-SDK, we don’t handle creating cart references. **You need to create your own.**
:::

## Response Example - To `GET` a cart with a shipping group

The following response example is returned when you `GET` a cart that is associated with a shipping group:

`200 OK`

```json
{
    "data": {
        "id": "d2ac2301-9f07-48aa-9a3b-1c205aab4638",
        "name": "cart1",
        "description": "cart description",
        "type": "cart",
        "discount_settings": {
            "custom_discounts_enabled": false
        },
        "links": {
            "self": "https://useast.api.elasticpath.com/v2/carts/d2ac2301-9f07-48aa-9a3b-1c205aab4638"
        },
        "meta": {
            "display_price": {
                "with_tax": {
                    "amount": 60700,
                    "currency": "USD",
                    "formatted": "$607.00"
                },
                "without_tax": {
                    "amount": 60700,
                    "currency": "USD",
                    "formatted": "$607.00"
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
                "without_discount": {
                    "amount": 60700,
                    "currency": "USD",
                    "formatted": "$607.00"
                },
                "shipping": {
                    "amount": 700,
                    "currency": "USD",
                    "formatted": "$7.00"
                }
            },
            "timestamps": {
                "created_at": "2023-07-19T13:04:02Z",
                "updated_at": "2023-07-19T13:09:03Z",
                "expires_at": "2023-07-26T13:09:03Z"
            }
        },
        "relationships": {
            "items": {
                "data": [
                    {
                        "type": "shipping_group",
                        "id": "d653c6e0-713e-4d2d-9228-d1584f7b5bcc"
                    },
                    {
                        "type": "custom_item",
                        "id": "31323b4a-a476-43bc-8ed1-0fbe2cd3bfca"
                    }
                ]
            },
            "customers": {
                "data": [
                    {
                        "type": "customer",
                        "id": "d0aacf53-bb11-430d-ae23-58c31783a3bf"
                    }
                ]
            }
        }
    }
}
```

## `GET` Include Promotions

```http
https://useast.api.elasticpath.com/v2/carts/:id?include=promotions
```

Use this endpoint to retrieve condensed promotion in cart.

When a promotion is deleted, the discount associated with it becomes inactive. If the promotion is deleted but still remains in the cart, it does not appear in the `included` section of the response body.

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
