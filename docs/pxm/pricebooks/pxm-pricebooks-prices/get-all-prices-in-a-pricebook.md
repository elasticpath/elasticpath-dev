---
title: Get All Prices in a Price Book
nav_label: Get All Prices
sidebar_position: 10
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `GET` all Prices by Price Book ID

```http
https://useast.api.elasticpath.com/pcm/pricebooks/:id/prices
```

Retrieves all the product prices in the specified price book.

## Parameters

### Path parameters

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `id` | Required | `string` | The unique identifier of the price book. |

### Headers

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token to grant access to the API. |

### Query parameters

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `filter`| Optional | `string` | Specifies the filter attributes. See [Filtering](#filtering). |
| `page[limit]` | Optional | `integer` | The number of items to return per page. See [Pagination](/guides/Getting-Started/pagination). |
| `page[offset]` | Optional | `integer` | The number of items to offset the results by. Offset is zero-based. See [Pagination](/guides/Getting-Started/pagination). |

## Filtering

| Operator | Description | Supported Attributes | Examples                  |
| :--- | :--- |:---------------------|:--------------------------|
| `Eq` | Checks if the values of two operands are equal. If they are, the condition is true. | `sku`, `external_ref`  | `filter=eq(sku,some-sku)` |
| `In` | Checks if the values are included in the specified string. If they are, the condition is true. | `sku`                | `filter=in(sku,some-sku)` |

For more information, see [Filtering](/guides/Getting-Started/filtering).

## Request Example

```bash
curl -X GET https://useast.api.elasticpath.com/pcm/pricebooks/2cf0d38c-58aa-420d-8658-4385dccea609/prices \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

## Response Example

`200 OK`

```json
{
    "data": [
        {
            "id": "76c78677-a22a-4104-8fb7-11f1cfc3b146",
            "attributes": {
                "currencies": {
                    "USD": {
                        "amount": 100,
                        "includes_tax": false,
                        "tiers": {
                            "min_5": {
                                "minimum_quantity": 5,
                                "amount": 50
                            }
                        }
                    },
                    "CAD": {
                        "amount": 125,
                        "includes_tax": false,
                        "tiers": {
                            "min_10": {
                                "minimum_quantity": 10,
                                "amount": 50
                            }
                        }
                    },
                    "GBP": {
                        "amount": 75,
                        "includes_tax": true,
                        "tiers": {
                            "min_20": {
                                "minimum_quantity": 20,
                                "amount": 50
                            }
                        }
                    }
                },
                "sales": {
                    "summer": {
                        "schedule": {},
                        "currencies": {
                            "USD": {
                                "amount": 90,
                                "includes_tax": false,
                                "tiers": {
                                    "min_5": {
                                        "minimum_quantity": 5,
                                        "amount": 40
                                    }
                                }
                            },
                            "CAD": {
                                "amount": 117,
                                "includes_tax": false,
                                "tiers": {
                                    "min_10": {
                                        "minimum_quantity": 10,
                                        "amount": 80
                                    }
                                }
                            },
                            "GBP": {
                                "amount": 65,
                                "includes_tax": true,
                                "tiers": {
                                    "min_20": {
                                        "minimum_quantity": 20,
                                        "amount": 50
                                    }
                                }
                            }
                        }
                    }
                },
                "sku": "product-1"
            },
            "type": "product-price"
        }
    ],
    "links": {
        "first": "/pcm/pricebooks/2cf0d38c-58aa-420d-8658-4385dccea609/prices?page[offset]=0&page[limit]=25&",
        "last": "/pcm/pricebooks/2cf0d38c-58aa-420d-8658-4385dccea609/prices?page[offset]=0&page[limit]=25&",
        "self": "/pcm/pricebooks/2cf0d38c-58aa-420d-8658-4385dccea609/prices"
    },
    "meta": {
        "owner": "store",
        "page": {
            "current": 1,
            "limit": 25,
            "total": 1
        },
        "results": {
            "total": 1
        }
    }
}
```
