---
title: Get a Cart
nav_label: Get a Cart
sidebar_position: 2
---

:::note
The default cart name is `Cart`. However, you can update the cart name as required. Ensure that the string length of the name is greater than or equal to one. Follow the safe character guidelines for name and description naming. For more information about cart ID naming requirements, see the [Safe Characters](/guides/Getting-Started/safe-characters) section.
:::

## `GET` Get a Cart by ID

```http
https://useast.api.elasticpath.com/v2/carts/:id
```

Use this endpoint to retrieve a specific cart. If the cart is associated with shipping groups, calling this endpoint displays the associated shipping group IDs in the `relationships` section. See [Response Example](/docs/carts-orders/carts/cart-management/get-a-cart#response-example-to-get-a-cart-with-a-shipping-group).


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
An empty cart is returned for any carts that don’t currently exist. For more information about the cart items object, see [Get Cart Items](/docs/carts-orders/carts/cart-items/get-cart-items#get-get-cart-items-by-cart-reference).
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

`200 OK`

```json
{
    "data": {
        "id": "1",
        "type": "cart",
        "name": "Cart",
        "description": "",
        "discount_settings": {
            "custom_discounts_enabled": false
        },
        "links": {
            "self": "https://useast.api.elasticpath.com/v2/carts/1"
        },
        "meta": {
            "display_price": {
                "with_tax": {
                    "amount": 9788,
                    "currency": "USD",
                    "formatted": "$97.88"
                },
                "without_tax": {
                    "amount": 9788,
                    "currency": "USD",
                    "formatted": "$97.88"
                },
                "tax": {
                    "amount": 0,
                    "currency": "USD",
                    "formatted": "$0.00"
                },
                "discount": {
                    "amount": -212,
                    "currency": "USD",
                    "formatted": "-$2.12"
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
                "created_at": "2023-07-13T20:36:52Z",
                "updated_at": "2023-07-13T20:37:47Z",
                "expires_at": "2023-07-20T20:37:47Z"
            }
        },
        "relationships": {
            "items": {
                "data": [
                    {
                        "type": "cart_item",
                        "id": "ae79ff9a-bf16-4949-beb2-032c33c795cd"
                    },
                    {
                        "type": "promotion_item",
                        "id": "a1911ac4-95cf-49ae-8d25-3997cc14ceb6"
                    }
                ]
            },
            "customers": {},
            "promotions": {
                "data": [
                    {
                        "type": "promotion",
                        "id": "30253f07-c882-44dc-9f5a-5b8b6a464705"
                    }
                ]
            }
        }
    },
    "included": {
        "promotions": [
            {
                "type": "promotion",
                "id": "30253f07-c882-44dc-9f5a-5b8b6a464705",
                "name": "cart fixed $1",
                "description": "cart fixed $1",
                "automatic": false,
                "promotion_type": "fixed_discount",
                "start": "2023-06-19T19:22:46Z",
                "end": "2025-06-19T12:22:00Z"
            }
        ]
    }
}
```
