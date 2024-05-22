---
id: configure-shopper-bundle
title: Configure a Shopper Bundle
sidebar_label: Configure a Shopper Bundle
sidebar_position: 140
---

## `POST` Configure a Shopper Bundle

```http
https://useast.api.elasticpath.com/catalog/products/:productId/configure
```

Once you have configured your product bundles, you can display them in your storefront in your published catalog. Depending on how you have configured the minimum and maximum values for the product options in your components (see [Create a Bundle](/docs/pxm/products/pxm-bundles/pxm-bundles-api/create-a-bundle)), you can allow your shoppers to choose which products they want to select. For example, you can enable a shopper to select 1 or more product options from a list of 10, giving your shoppers greater flexibility when selecting products in your store front.

- Products must be in a `live` status.
- If you have not specified any minimum or maximum values for the product options in your components, your shoppers can select any combination of product options.

If you have configured minimum and maximum values using [Create a Bundle](/docs/pxm/products/pxm-bundles/pxm-bundles-api/create-a-bundle), this becomes part of the`bundle_configuration`. You can check how your bundle is configured using [Get a product in a catalog release](/docs/pxm/catalogs/catalog-latest-release/get-a-product-in-a-release) in `bundle_configuration` under `meta`. The `bundle_configuration` forms the body of the request.

For example, you may have the following components and product options.

```json
"components": {
                "games": {
                    "name": "GamesOptions",
                    "max": 1,
                    "min": 1,
                    "sort_order": 2,
                    "options": [
                        {
                            "id": "d7b79eb8-19d8-45ea-86ed-2324a604dd9c",
                            "quantity": 1,
                            "type": "product",
                            "sort_order": 2
                        },
                        {
                            "id": "baaebdd6-490e-4834-a4a5-307602f70ea0",
                            "quantity": 2,
                            "type": "product",
                            "sort_order": 1
                        }
                    ]
                },
                "toys": {
                    "name": "ToysOptions",
                    "max": 2,
                    "min": 2,
                    "sort_order": 1,
                    "options": [
                        {
                            "id": "1aea6f97-f0d9-452c-b3c1-7fb5629ead82",
                            "quantity": 1,
                            "type": "product",
                            "sort_order": 2
                        },
                        {
                            "id": "0192ccdd-6d33-4898-87d7-c4d87f2bf8ea",
                            "quantity": 1,
                            "type": "product"
                        },
                        {
                            "id": "de691397-2320-48fb-af7b-8b17d27a34a4",
                            "quantity": 1,
                            "type": "product",
                            "sort_order": 1
                        }
                    ]
                }
          }
```

In this example, a shopper can select product options from the `games` and `toys` components.

- In the `games` component, either product option 1 or 2.
- In the `toys` component, 2 product options from a list of 3.

This is shown in the `bundle_configuration`.

```json
"bundle_configuration": {
                "selected_options": {
                    "games": {
                        "d7b79eb8-19d8-45ea-86ed-2324a604dd9c": 1
                    },
                    "toys": {
                        "0192ccdd-6d33-4898-87d7-c4d87f2bf8ea": 1,
                        "1aea6f97-f0d9-452c-b3c1-7fb5629ead82": 1
                    }
                }
         }
```

The response updates the `bundle_configuration` with the product options the shopper selects. The `meta` data is updated with the meta data of the selected product options. In your storefront, you could display this as a summary of the product options a shopper has selected.

## Parameters

### Headers

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. With an implicit Bearer token, you can fetch the products with live status only; products in the draft state are not included. |
| `accept-language` | Optional | `string` | The natural language and locale that your storefront prefers. See [accept-language](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language). |

### Body

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `productId` | Required | `string` | A unique identifier for a product option in a component in the product bundle. |
| `component` | Required | `string` | A component in your product bundle. |
| `quantity` | Required | `integer` | The quantity must match the quantity configured for a product option in a component in a product bundle. |

## Request Example

```bash
curl -X POST https://useast.api.elasticpath.com/catalog/products/:productID/configure
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
    "data":{
         "selected_options": {
                    "games": {
                        "baaebdd6-490e-4834-a4a5-307602f70ea0": 2

                    },
                    "toys": {
                        "de691397-2320-48fb-af7b-8b17d27a34a4": 1,
                        "1aea6f97-f0d9-452c-b3c1-7fb5629ead82": 1
                    }
                }
    }
}
```

## Response Example

`200 OK`

```json
{
    "data": {
        "id": "00efcc23-9bab-4bc7-9272-6b95111814e8",
        "type": "product",
        "attributes": {
            "base_product": false,
            "commodity_type": "physical",
            "components": {
                "games": {
                    "name": "GamesOptions",
                    "max": 1,
                    "min": 1,
                    "sort_order": 1,
                    "options": [
                        {
                            "id": "d7b79eb8-19d8-45ea-86ed-2324a604dd9c",
                            "quantity": 1,
                            "type": "product",
                            "sort_order": 2
                        },
                        {
                            "id": "baaebdd6-490e-4834-a4a5-307602f70ea0",
                            "quantity": 2,
                            "type": "product",
                            "sort_order": 1
                        }
                    ]
                },
                "toys": {
                    "name": "ToysOptions",
                    "max": 2,
                    "min": 2,
                    "sort_order": 2,
                    "options": [
                        {
                            "id": "1aea6f97-f0d9-452c-b3c1-7fb5629ead82",
                            "quantity": 1,
                            "type": "product",
                            "sort_order": 2
                        },
                        {
                            "id": "0192ccdd-6d33-4898-87d7-c4d87f2bf8ea",
                            "quantity": 1,
                            "type": "product",
                        },
                        {
                            "id": "de691397-2320-48fb-af7b-8b17d27a34a4",
                            "quantity": 1,
                            "type": "product",
                            "sort_order": 1
                        }
                    ]
                }
            },
            "created_at": "2022-02-10T11:23:23.690Z",
            "description": "Pim Bundle Option with Multiple Products 279777684760",
            "manage_stock": false,
            "manufacturer_part_num": "Product-mpn-279777684760",
            "name": "pimBundle1_279777684760",
            "price": {
                "USD": {
                    "amount": 50000,
                    "includes_tax": true
                }
            },
            "sku": "pimBundle1-279777684760",
            "status": "live",
            "upc_ean": "279777684760",
            "updated_at": "2022-02-10T11:23:29.066Z",
            "published_at": "2022-02-14T10:54:17.286Z"
        },
        "meta": {
            "catalog_id": "e647ddae-474e-47df-9615-bfa01eb39a76",
            "catalog_source": "pim",
            "pricebook_id": "4a5f38b7-5984-4c52-9802-f947c5bd8891",
            "bundle_configuration": {
                "selected_options": {
                    "games": {
                        "baaebdd6-490e-4834-a4a5-307602f70ea0": 2
                    },
                    "toys": {
                        "1aea6f97-f0d9-452c-b3c1-7fb5629ead82": 1,
                        "de691397-2320-48fb-af7b-8b17d27a34a4": 1
                    }
                }
            },
            "display_price": {
                "with_tax": {
                    "amount": 50000,
                    "currency": "USD",
                    "formatted": "$500.00"
                }
            }
        },
        "relationships": {
            "component_products": {
                "links": {
                    "self": "/catalog/products/00efcc23-9bab-4bc7-9272-6b95111814e8/relationships/component_products"
                }
            }
        }
    },
    "links": {
        "self": "/catalog/products/00efcc23-9bab-4bc7-9272-6b95111814e8/configure"
    }
}
```

## Errors

The following table describes the response codes that indicate the API request has failed.

| Code | Message | Description |
| :--- | :--- | :--- |
| `422` | No option *productiD* for component *componentname*. | The product ID you have specified is not in the product bundle or is incorrect. |
| `422` | No option *quantity* for option *productid*. | The quantity you have specified is incorrect. |
| `422` | No such component *componentname*. | The component product you have specified is not in the product bundle. |
| `422` | Missing selection for component *componentname*. | The selection options are missing from the API request. |

## Related Resources

- [Bundles](/docs/pxm/products/pxm-bundles)
- [Bundles API](/docs/pxm/products/pxm-bundles/pxm-bundles-api/create-a-bundle)
- [Multiple Carts API](/docs/carts-orders/carts/cart-management/create-multi-cart)
- [Product Experience Manager](/docs/pxm/products/pxm-products)
