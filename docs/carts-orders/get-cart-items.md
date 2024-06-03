---
title: Get Cart Items
nav_label: Get Cart Items
sidebar_position: 125.5
---

:::note
If a Cart does not exist with a provided reference, one is created and an empty cart items array is returned.
:::

## `GET` Get Cart Items by Cart ID

```http
https://useast.api.elasticpath.com/v2/carts/:id/items
```

Use this endpoint to retrieve cart items. If the cart is associated with shipping groups, calling this endpoint displays the associated shipping group IDs.

## Parameters

### Path parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `id` | Required | `string` | The unique identifier of the cart that you created. |

### Headers

| Name            | Required | Type     | Description                                         |
| --------------- | -------- | -------- | --------------------------------------------------- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Query parameters

| Name      | Required | Type     | Description |
| --------- | -------- | -------- | ----------- |
| `include` | Optional | `string` | `tax_items` |

## Request Examples

### Curl

```bash
curl -X GET https://useast.api.elasticpath.com/v2/carts/:id/items \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

### JavaScript SDK

```javascript
const reference = "XXXX";

// Where `EPCC` is an authenticated client
await Moltin.Cart(reference).Items();
```

## Response Examples

`200 OK`

```json
{
    "data": [],
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
            }
        },
        "timestamps": {
            "created_at": "0001-01-01T00:00:00Z",
            "updated_at": "0001-01-01T00:00:00Z",
            "expires_at": "0001-01-20T00:00:00Z"
        }
    }
}
```

The following response example is returned when you `GET` cart items that are associated with a shipping group:

`200 OK`

```json
{
    "data": [
        {
            "id": "31323b4a-a476-43bc-8ed1-0fbe2cd3bfca",
            "type": "custom_item",
            "name": "My Custom Item",
            "description": "My first custom item!",
            "sku": "my-custom-item",
            "slug": "",
            "image": {
                "mime_type": "",
                "file_name": "",
                "href": ""
            },
            "quantity": 3,
            "manage_stock": false,
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
                    "created_at": "2023-07-19T13:04:53Z",
                    "updated_at": "2023-07-19T13:04:53Z"
                }
            },
            "shipping_group_id": "d653c6e0-713e-4d2d-9228-d1584f7b5bcc"
        }
    ],
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
    }
}
```

## `GET` Include Promotions

```http
https://useast.api.elasticpath.com/v2/carts/:id/items?include=promotions
```

Use this endpoint to retrieve condensed promotion in cart items.

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

