---
title: Get Order Items
nav_label: Get Order Items - Include Promotions
sidebar_position: 4
---

## `GET` Get Order Items

```http
https://useast.api.elasticpath.com/v2/orders/:id/items
```

Use this endpoint to retrieve order items. If the order is associated with shipping groups, calling this endpoint also displays the associated shipping group IDs.

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

## Request Examples

### Curl

```bash
curl -X GET https://useast.api.elasticpath.com/v2/orders/:id/items \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

### JavaScript SDK

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X',
  client_secret: 'X'
})
const orderId = 'XXXX'
Moltin.Orders.Items(orderId).then(items => {
  // Do something
})
// Or using includes
Moltin.Orders.With('items').All().then(orders => {
  // Do something
})
```

## Response Examples

`200 OK`

```json
{
    "data": [
        {
            "type": "order_item",
            "id": "7d96d30e-d833-4752-bef7-1f13a3304d49",
            "quantity": 1,
            "product_id": "083a5232-3923-4f01-a45a-767399652738",
            "name": "Product 083a5232-3923-4f01-a45a-767399652738",
            "sku": "IFD-1",
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
                    "code": "10_OFF",
                    "id": "b368b634-dc1a-4e01-a90c-81221be9e80c"
                }
            ],
            "links": {},
            "meta": {
                "display_price": {
                    "with_tax": {
                        "unit": {
                            "amount": 9000,
                            "currency": "USD",
                            "formatted": "$90.00"
                        },
                        "value": {
                            "amount": 9000,
                            "currency": "USD",
                            "formatted": "$90.00"
                        }
                    },
                    "without_tax": {
                        "unit": {
                            "amount": 9000,
                            "currency": "USD",
                            "formatted": "$90.00"
                        },
                        "value": {
                            "amount": 9000,
                            "currency": "USD",
                            "formatted": "$90.00"
                        }
                    },
                    "tax": {
                        "unit": {
                            "amount": 0,
                            "currency": "USD",
                            "formatted": "$0"
                        },
                        "value": {
                            "amount": 0,
                            "currency": "USD",
                            "formatted": "$0"
                        }
                    },
                    "discount": {
                        "unit": {
                            "amount": -1000,
                            "currency": "USD",
                            "formatted": "$10.00"
                        },
                        "value": {
                            "amount": -1000,
                            "currency": "USD",
                            "formatted": "$10.00"
                        }
                    },
                    "without_discount": {
                        "unit": {
                            "amount": 10000,
                            "currency": "USD",
                            "formatted": "$10,000"
                        },
                        "value": {
                            "amount": 10000,
                            "currency": "USD",
                            "formatted": "$10,000"
                        }
                    },
                    "discounts": {
                        "10_OFF": {
                            "amount": -1000,
                            "currency": "USD",
                            "formatted": "-$10.00"
                        }
                    }
                }
            },
            "timestamps": {
                "created_at": "2022-07-27T02:22:55Z",
                "updated_at": "2022-07-27T02:22:55Z"
            },
            "relationships": {
                "cart_item": {
                    "data": {
                        "type": "cart_item",
                        "id": "e7543520-d085-408b-9c70-bc3a85c762c9"
                    }
                }
            },
            "catalog_id": "default",
            "catalog_source": "legacy"
        }
    ]
}
```

The following response example is returned when you `GET` order items associated with a shipping group:

```json
{
    "data": [
        {
            "type": "order_item",
            "id": "4742512d-c531-45b6-bb48-545f05682f63",
            "quantity": 3,
            "product_id": "",
            "name": "My Custom Item",
            "sku": "my-custom-item",
            "unit_price": {
                "amount": 20000,
                "currency": "USD",
                "includes_tax": true
            },
            "value": {
                "amount": 60000,
                "currency": "USD",
                "includes_tax": true
            },
            "links": {},
            "meta": {
                "display_price": {
                    "with_tax": {
                        "unit": {
                            "amount": 20000,
                            "currency": "USD",
                            "formatted": "$200.00"
                        },
                        "value": {
                            "amount": 60000,
                            "currency": "USD",
                            "formatted": "$600.00"
                        }
                    },
                    "without_tax": {
                        "unit": {
                            "amount": 20000,
                            "currency": "USD",
                            "formatted": "$200.00"
                        },
                        "value": {
                            "amount": 60000,
                            "currency": "USD",
                            "formatted": "$600.00"
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
                            "amount": 20000,
                            "currency": "USD",
                            "formatted": "$200.00"
                        },
                        "value": {
                            "amount": 60000,
                            "currency": "USD",
                            "formatted": "$600.00"
                        }
                    }
                },
                "timestamps": {
                    "created_at": "2023-07-19T13:20:09Z",
                    "updated_at": "2023-07-19T13:20:09Z"
                }
            },
            "relationships": {
                "cart_item": {
                    "data": {
                        "type": "cart_item",
                        "id": "31323b4a-a476-43bc-8ed1-0fbe2cd3bfca"
                    }
                }
            },
            "shipping_group_id": "d653c6e0-713e-4d2d-9228-d1584f7b5bcc"
        }
    ]
}
```

## `GET` Include Promotions

```http
https://useast.api.elasticpath.com/v2/orders/:id/items?include=promotions 
```
Use this endpoint to retrieve condensed promotion in order items. When a promotion is deleted, the discount associated with it becomes inactive. If the promotion is deleted but still remains in the cart, it does not appear in the `included` section of the response body.

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

`200 OK`

```json
{
    "data": [
        {
            "id": "81468e17-dd9f-47d2-986e-febea23fa210",
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
                        "amount": -112,
                        "currency": "USD",
                        "includes_tax": false
                    },
                    "code": "sku1",
                    "id": "a96d39d0-795e-4d7d-b555-b57816cf41c5"
                }
            ],
            "links": {},
            "meta": {
                "display_price": {
                    "with_tax": {
                        "unit": {
                            "amount": 9788,
                            "currency": "USD",
                            "formatted": "$97.88"
                        },
                        "value": {
                            "amount": 9788,
                            "currency": "USD",
                            "formatted": "$97.88"
                        }
                    },
                    "without_tax": {
                        "unit": {
                            "amount": 9788,
                            "currency": "USD",
                            "formatted": "$97.88"
                        },
                        "value": {
                            "amount": 9788,
                            "currency": "USD",
                            "formatted": "$97.88"
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
                            "amount": -212,
                            "currency": "USD",
                            "formatted": "-$2.12"
                        },
                        "value": {
                            "amount": -212,
                            "currency": "USD",
                            "formatted": "-$2.12"
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
                        "sku1": {
                            "amount": -112,
                            "currency": "USD",
                            "formatted": "-$1.12"
                        }
                    }
                },
                "timestamps": {
                    "created_at": "2023-07-13T22:25:31Z",
                    "updated_at": "2023-07-13T22:25:31Z"
                }
            },
            "relationships": {
                "cart_item": {
                    "data": {
                        "type": "cart_item",
                        "id": "ae79ff9a-bf16-4949-beb2-032c33c795cd"
                    }
                },
                "promotions": {
                    "data": [
                        {
                            "type": "promotion",
                            "id": "a96d39d0-795e-4d7d-b555-b57816cf41c5"
                        }
                    ]
                }
            },
            "catalog_id": "09b9359f-897f-407f-89a2-702e167fe781",
            "catalog_source": "pim"
        },
        {
            "id": "03ffe022-8deb-4849-a773-fabe4a2d4ef1",
            "type": "order_item",
            "custom_field_test": null,
            "tracking_number": null,
            "quantity": 1,
            "product_id": "30253f07-c882-44dc-9f5a-5b8b6a464705",
            "name": "cart fixed $1",
            "sku": "cart1off",
            "unit_price": {
                "amount": -100,
                "currency": "USD",
                "includes_tax": false
            },
            "value": {
                "amount": -100,
                "currency": "USD",
                "includes_tax": false
            },
            "links": {},
            "meta": {
                "display_price": {
                    "with_tax": {
                        "unit": {
                            "amount": -100,
                            "currency": "USD",
                            "formatted": "-$1.00"
                        },
                        "value": {
                            "amount": -100,
                            "currency": "USD",
                            "formatted": "-$1.00"
                        }
                    },
                    "without_tax": {
                        "unit": {
                            "amount": -100,
                            "currency": "USD",
                            "formatted": "-$1.00"
                        },
                        "value": {
                            "amount": -100,
                            "currency": "USD",
                            "formatted": "-$1.00"
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
                            "currency": "USD",
                            "formatted": "$0.00"
                        },
                        "value": {
                            "amount": 0,
                            "currency": "USD",
                            "formatted": "$0.00"
                        }
                    }
                },
                "timestamps": {
                    "created_at": "2023-07-13T22:25:31Z",
                    "updated_at": "2023-07-13T22:25:31Z"
                }
            },
            "relationships": {
                "cart_item": {
                    "data": {
                        "type": "cart_item",
                        "id": "a1911ac4-95cf-49ae-8d25-3997cc14ceb6"
                    }
                },
                "promotions": {
                    "data": [
                        {
                            "type": "promotion",
                            "id": "30253f07-c882-44dc-9f5a-5b8b6a464705"
                        }
                    ]
                }
            }
        }
    ],
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
            },
            {
                "type": "promotion",
                "id": "a96d39d0-795e-4d7d-b555-b57816cf41c5",
                "name": "Item percent discount 6 decimals",
                "description": "1.123456% off for SKU1",
                "automatic": false,
                "promotion_type": "item_percent_discount",
                "start": "2000-01-01T00:00:00Z",
                "end": "2026-05-28T19:00:00Z"
            }
        ]
    }
}
```
