---
title: Get Cart Items
nav_label: Get Cart Items
sidebar_position: 9
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

`200 OK`

```json
{
    "data": [
        {
            "id": "ae79ff9a-bf16-4949-beb2-032c33c795cd",
            "type": "cart_item",
            "test_custom_field": null,
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
                        "amount": -112,
                        "currency": "USD",
                        "includes_tax": false
                    },
                    "code": "sku1",
                    "id": "a96d39d0-795e-4d7d-b555-b57816cf41c5"
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
                            "id": "a96d39d0-795e-4d7d-b555-b57816cf41c5"
                        }
                    ]
                }
            },
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
                    "created_at": "2023-07-13T20:36:52Z",
                    "updated_at": "2023-07-13T20:36:52Z"
                }
            },
            "catalog_id": "09b9359f-897f-407f-89a2-702e167fe781",
            "catalog_source": "pim"
        },
        {
            "id": "a1911ac4-95cf-49ae-8d25-3997cc14ceb6",
            "type": "promotion_item",
            "test_custom_field": null,
            "promotion_id": "30253f07-c882-44dc-9f5a-5b8b6a464705",
            "name": "cart fixed $1",
            "description": "Promotion",
            "sku": "cart1off",
            "slug": "",
            "image": {
                "mime_type": "",
                "file_name": "",
                "href": ""
            },
            "quantity": 1,
            "manage_stock": false,
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
                            "id": "30253f07-c882-44dc-9f5a-5b8b6a464705"
                        }
                    ]
                }
            },
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
                    "created_at": "2023-07-13T20:37:06Z",
                    "updated_at": "2023-07-13T20:38:06Z"
                }
            }
        }
    ],
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

