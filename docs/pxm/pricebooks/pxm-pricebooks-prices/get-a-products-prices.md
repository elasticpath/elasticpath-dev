---
title: Get a Product`s Price from a Price Book
nav_label: Get a Productʼs price
sidebar_position: 20
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `GET` a Product's Price by Price Book ID

```http
https://useast.api.elasticpath.com/pcm/pricebooks/:id/prices/:priceId
```

Retrieves a specified product price (`priceId`) in the specified price book (`id`).

:::note
Set the sale price for a bundle in the price book. The `bundle_id` fields in the price book specifies the bundles to which the product sale price is applied.
:::

## Parameters

### Path parameters

| Name      | Required | Type     | Description                                 |
|:----------|:---------|:---------|:--------------------------------------------|
| `id`      | Required | `string` | The unique identifier of the price book.    |
| `priceId` | Required | `string` | The unique identifier of the product price. |

### Headers

| Name            | Required | Type     | Description                               |
|:----------------|:---------|:---------|:------------------------------------------|
| `Authorization` | Required | `string` | The Bearer token to grant the API access. |

## Request Example

```bash
curl -X GET https://useast.api.elasticpath.com/pcm/pricebooks/2cf0d38c-58aa-420d-8658-4385dccea609/prices/76c78677-a22a-4104-8fb7-11f1cfc3b146 \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

## Response Example

`200 OK`

```json
{
    "data": {
        "id": "76c78677-a22a-4104-8fb7-11f1cfc3b146",
        "attributes": {
            "currencies": {
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
                        "min_10": {
                            "minimum_quantity": 10,
                            "amount": 50
                        }
                    }
                },
                "USD": {
                    "amount": 100,
                    "includes_tax": false,
                    "tiers": {
                        "min_10": {
                            "minimum_quantity": 10,
                            "amount": 50
                        }
                    }
                }
            },
            "sales": {
                "summer": {
                    "bundle_ids": [
                        "a3cacaa9-b5bb-4096-bb6b-af41394ca850"
                    ],
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
        "meta": {
            "owner": "store"
        },
        "type": "product-price"
    },
    "links": {
        "self": "/pcm/pricebooks/2cf0d38c-58aa-420d-8658-4385dccea609/prices/76c78677-a22a-4104-8fb7-11f1cfc3b146"
    }
}
```
