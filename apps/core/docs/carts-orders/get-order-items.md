---
title: Get Order Items
nav_label: Get Order Items - Include Promotions
sidebar_position: 190
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
