---
title: Create a Bundle
nav_label: Create a Bundle
sidebar_position: 30
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `POST` Create a Bundle

```http
https://useast.api.elasticpath.com/pcm/products
```

Creates a product bundle. A bundle is a purchasable product that is composed of a combination of one or more products that you want to sell together. You can create multiple components within a bundle. Each component can have one or more options. Each option is a product and a quantity.

## Dynamic Bundles

You can configure minimum and/or maximum values for each product option in a component that your shoppers can select. For example, you can enable a shopper to select 1 or more product options from a list of 10, giving your shoppers greater flexibility when selecting products in your store front. These are called dynamic bundles.

If you do not specify any minimum or maximum values for the product options in your components, your shoppers can select any number of product options.

:::note
Your shoppers cannot modify the quantities of a product. They must purchase the quantity of products that you have specified when you created your components and options.
:::

## Bundles of Bundles

Your bundle can consist of child bundles. This is useful if you have a base product that comprises of child products and the pricing of the base product changes, depending on the child products a customer chooses. This can be represented by creating a parent bundle that comprises of child bundles. To create a bundle of bundles, add a child bundle as an option to a component in a parent bundle. 

- You cannot have more than one level of child bundles. In other words, a child bundle cannot have a child bundle as a component.
- A parent bundle can contain both bundle and product components.
- Both parent and child bundles can be either [fixed](/docs/pxm/products/pxm-bundles/pxm-bundles) or [dynamic](/docs/pxm/products/pxm-bundles/dynamic-bundles) in a bundle of bundles.

## Bundle Configuration

You must configure:

- A component key: The component key is a unique identifier that is used to identify a component. In the following example, `games` is a component key. See [components object](/docs/pxm/products/pxm-bundles/pxm-bundles-api/pxm-bundles-api-overview#the-components-object).
- A component name: The component name is the name that is displayed in your storefront. In the following example, `GamesOptions` is a component name. See [options object](/docs/pxm/products/pxm-bundles/pxm-bundles-api/pxm-bundles-api-overview#the-options-object).

:::note

- Custom names and values prefixed with `$` are not supported.
- You cannot have more than 1500 options in a bundle. 

:::

Bundles have a `bundle_configuration` which describe the options selected. You can use [Get a product in a catalog release](/docs/pxm/catalogs/catalog-latest-release/get-a-product-in-a-release) to check a `bundle_configuration`. The `bundle_configuration` forms the body of a request when using the [configure a shopper bundle](/docs/pxm/catalogs/shopper-catalog/configure-shopper-bundle) endpoint. This endpoint allows your shoppers to select product options within a bundle. The response from the [configure a shopper bundle](/docs/pxm/catalogs/shopper-catalog/configure-shopper-bundle) endpoint updates the `bundle_configuration` with the product options a shopper selects. In your storefront, you can display this as a summary of the product options a shopper has selected.

For example, you may have the following components and product options.

```json
"components": {
                "games": {
                    "name": "GamesOptions",
                    "max": 1,
                    "min": 1,
                    "options": [
                        {
                            "id": "d7b79eb8-19d8-45ea-86ed-2324a604dd9c",
                            "quantity": 1,
                            "type": "product",
                            "sort_order": 1
                        },
                        {
                            "id": "baaebdd6-490e-4834-a4a5-307602f70ea0",
                            "quantity": 2,
                            "type": "product",
                            "sort_order": 12
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
                            "sort_order": 3
                        },
                        {
                            "id": "0192ccdd-6d33-4898-87d7-c4d87f2bf8ea",
                            "quantity": 1,
                            "type": "product",
                            "sort_order": 2
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

### The `sort_order` Attribute

You can add a `sort_order` to the body of your request and specify a `sort_order` value. A `sort_order` value must be a number. You can specify any numbers that you want. For example, 1, 2, 3, or 100, 90, 80, and so on. 

The sort order value is visible when you add the products to your catalogs. You can then use the `sort_order` value to program your storefront to display the bundle components and component options in the order that you want. 

:::caution
The `create a bundle` endpoint does not sort components and component options. You must program your storefront to sort the components and component options in the order that you want.
:::


## Parameters

### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Name                        | Required | Type     | Description                                                                                                                                                                                                                                                                                                                                            |
|:----------------------------|:---------|:---------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `type`                      | Required | `string` | Specifies the type of resource. You must use `product`.                                                                                                                                                                                                                                                                                                |
| `attributes.name`           | Required | `string` | Specifies the product name to display to customers.                                                                                                                                                                                                                                                                                                    |
| `attributes.commodity_type` | Required | `string` | Specifies the type of commodity, such as `physical` or `digital`.                                                                                                                                                                                                                                                                                      |
| `attributes.sku`            | Optional | `string` | Specifies the unique SKU of the product.                                                                                                                                                                                                                                                                                                               |
| `attributes.slug`           | Optional | `string` | Specifies a label for the product that is used in the URL paths. A slug can contain any combination of letters, numbers, periods, hyphens, and underscores. No spaces or other characters are allowed. By default, product name is used as the slug.                                                                                                   |
| `attributes.description`    | Optional | `string` | Specifies the product description to display to customers.                                                                                                                                                                                                                                                                                             |
| `attributes.mpn`            | Optional | `string` | Specifies MPN of the product.                                                                                                                                                                                                                                                                                                                          |
| `attributes.status`         | Optional | `string` | Specifies the status of the bundle, such as `draft` or `live`. The default status is `draft`.                                                                                                                                                                                                                                                          |
| `attributes.upc_ean`        | Optional | `string` | Specifies the UPC or EAN used to scan a product in a Point Of Sale (POS) system.                                                                                                                                                                                                                                                                       |
| `attributes.locales`        | Optional | `object` | Specifies the product details localized in the supported languages. For example, product names or descriptions. See [`locales` object](/docs/pxm/products/ep-pxm-products-api/pxm-products-api-overview#the-locales-object).                                                                                                                           |
| `attributes.components`     | Required | `object` | Specifies the categories of the products included in the bundle. See [`components` object](/docs/pxm/products/ep-pxm-products-api/pxm-products-api-overview#the-components-object).                                                                                                                                                                    |
| `attributes.options`        | Required | `object` | Specifies the product options that comprise a component. This can be the bundle ID of another bundle. See [Bundles of Bundles](/docs/pxm/products/pxm-bundles/bundles-of-bundles). You cannot have more than 1500 options in a bundle. See [`options` object](/docs/pxm/products/ep-pxm-products-api/pxm-products-api-overview#the-components-object). |
| `custom_inputs`             | Optional | `object` | The custom text that can be added to a product. See [Personalized Products](/docs/pxm/products/personalized-products-pxm).                                                                                                                                                                                                         |

In the following example, the name of the bundle is `Favourite games bundle` and this bundle consists of products from the components `Consoles` and `Games`. Each component consists of a product from that component with details, such as the product name, product id, and quantity.

## Request Examples

### SKU-based bundles

```bash
curl -X POST https://useast.api.elasticpath.com/pcm/products \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
  "data": {
    "type": "product",
    "attributes": {
      "name": "Favourite games bundle",
      "description": "All of your favourite DOOM games in one bundle",
      "sku": "doom-franchise",
      "mpn": "1234-5678-ABCD",
      "upc_ean": "123456",
      "commodity_type": "digital",
      "status": "live",
      "components": {
        "games": {
            "name": "Game 1",
            "max": 1,
            "min": 1,
            "sort_order": 5,
            "options": [
              {
                "id": "7c0aa6df-0bd3-4d1f-b6f9-fd9358868869",
                "type": "product",
                "quantity": 1
              }
           ]
        },
        "posters": {
           "name": "Game 2",
            "max": 1,
            "min": 1,
            "sort_order": 4,
            "options": [
              {
                 "id": "f0ec8088-13e1-4a53-8b5d-3f4d973e05c9",
                 "type": "product",
                 "quantity": 1
              }
            ]
         }
      }
    }
  }
}'
```

### SKU-less bundles

```bash
curl -X POST https://useast.api.elasticpath.com/pcm/products \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
  "data": {
    "type": "product",
    "attributes": {
      "name": "Shower bundle",
      "description": "A bundle of shower products",
      "commodity_type": "physical",
      "status": "live",
      "components": {
        "shampoo": {
            "name": "Shampoo",
            "max": 1,
            "min": 1,
             "sort_order": 1,
          "options": [
            {
              "id": "shampooProductID",
              "type": "product",
              "quantity": 1
            }
          ]
        },
        "conditioner": {
            "name": "Conditioner",
            "max": 1,
            "min": 1,
            "sort_order": 2,
          "options": [
            {
              "id": "conditionerProductID",
              "type": "product",
              "quantity": 1
            }
          ]
        }
      }
    }
  }
}'
```

### Response example

`201 Created`

```json
{
    "data": {
        "type": "product",
        "id": "cc0a5d66-59cb-4a50-930b-9d1d42fc51b9",
        "attributes": {
            "commodity_type": "digital",
            "components": {
                "games": {
                    "name": "Game 1",
                    "options": [
                        {
                            "id": "7c0aa6df-0bd3-4d1f-b6f9-fd9358868869",
                            "type": "product",
                            "quantity": 1
                        }
                    ],
                    "min": 1,
                    "max": 2,
                    "sort_order": 2,
                },
                "posters": {
                    "name": "Game 2",
                    "options": [
                        {
                            "id": "f0ec8088-13e1-4a53-8b5d-3f4d973e05c9",
                            "type": "product",
                            "quantity": 1
                        }
                    ],
                    "min": 1,
                    "max": 1,
                    "sort_order": 1,
                }
            },
            "description": "All of your favourite DOOM games in one bundle",
            "mpn": "1234-5678-ABCD",
            "name": "Favourite games bundle",
            "sku": "doom-franchise",
            "status": "live",
            "upc_ean": "123456"
        },
        "relationships": {
            "children": {
                "data": [],
                "links": {
                    "self": "/products/cc0a5d66-59cb-4a50-930b-9d1d42fc51b9/children"
                }
            },
            "component_products": {
                "data": [],
                "links": {
                    "self": "/products/cc0a5d66-59cb-4a50-930b-9d1d42fc51b9/relationships/component_products"
                }
            },
            "files": {
                "data": [],
                "links": {
                    "self": "/products/cc0a5d66-59cb-4a50-930b-9d1d42fc51b9/relationships/files"
                }
            },
            "main_image": {
                "data": null
            },
            "templates": {
                "data": [],
                "links": {
                    "self": "/products/cc0a5d66-59cb-4a50-930b-9d1d42fc51b9/relationships/templates"
                }
            },
            "variations": {
                "data": [],
                "links": {
                    "self": "/products/cc0a5d66-59cb-4a50-930b-9d1d42fc51b9/relationships/variations"
                }
            }
        },
        "meta": {
            "created_at": "2022-02-03T19:11:25.307Z",
            "owner": "store",
            "updated_at": "2022-02-03T19:11:25.307Z"
        }
    }
}
```

## Related Resources

- [Products API](/docs/pxm/products/ep-pxm-products-api/pxm-products-api-overview)
