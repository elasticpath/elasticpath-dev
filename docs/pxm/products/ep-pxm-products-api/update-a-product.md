---
title: Update a Product
nav_label: Update a Product
sidebar_position: 50
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `PUT` Update a Product

```http
https://useast.api.elasticpath.com/pcm/products/:productId
```

Updates the specified product.

:::caution
- Custom names and values prefixed with `$` are not supported.
- A `409: Conflict` response is returned when a record you are updating has been changed by another user at the same time. 
:::


## Parameters

### Path parameters

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `productId` | Required | `string` | The unique identifier of the product. |

### Headers

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token to grant access to the API. |

### Body

Required. Specify whichever `attributes` you want to change. The values of the other `attributes` remain the same. If the `attributes` section is empty, the product is not updated.

| Name                        | Required | Type     | Description                                                                                                                                                                                                                                                                                                                                                                                                      |
|:----------------------------|:---------|:---------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `type`                      | Required | `string` | Always: `product`                                                                                                                                                                                                                                                                                                                                                                                                |
| `id`                        | Required | `string` | The unique identifier of the product. Must match the product ID specified in the request path.                                                                                                                                                                                                                                                                                                                   |
| `attributes.external_ref`   | Optional | `string` | The unique attribute associated with the product. This could be an external reference from a separate company system, for example. The default and maximum length is 2048 characters.                                                                                                                                                                                                                            |
| `attributes.name`           | Optional | `string` | The updated product name to display to customers. Cannot be null.                                                                                                                                                                                                                                                                                                                                                |
| `attributes.sku`            | Optional | `string` | The updated Stock Keeping Unit of the product. Must be unique.                                                                                                                                                                                                                                                                                                                                                   |
| `attributes.slug`           | Optional | `string` | The updated slug. Must be unique.                                                                                                                                                                                                                                                                                                                                                                                |
| `attributes.commodity_type` | Optional | `string` | Valid values: `physical` or `digital`                                                                                                                                                                                                                                                                                                                                                                            |
| `attributes.description`    | Optional | `string` | The updated description to display to customers.                                                                                                                                                                                                                                                                                                                                                                 |
| `attributes.mpn`            | Optional | `string` | The updated Manufacturer Part Number.                                                                                                                                                                                                                                                                                                                                                                            |
| `attributes.status`         | Optional | `string` | Valid values: `draft` or `live`                                                                                                                                                                                                                                                                                                                                                                                  |
| `attributes.upc_ean`        | Optional | `string` | The updated Universal Product Code or European Article Number.                                                                                                                                                                                                                                                                                                                                                   |
| `attributes.tags`           | Optional | `array`  | Add new or update existing product tags. You can use product tags to store or assign a key word against a product. The product tag can then be used to describe or label that product. Using product tags means that you can group your products together, for example, by brand, category, subcategory, colors, types, industries, and so on. A product can have up to 20 tags. A product tag can be up to 255 characters. Product tags must not contain any spaces or commas. See [Product tags](/docs/pxm/products/pxm-products#product-tags). |
| `attributes.locales` | Optional | `object` | The product details localized in the supported languages. For example, product names or descriptions. For more information, see [Products API](/docs/pxm/products/ep-pxm-products-api/pxm-products-api-overview#the-locales-object). |
| `custom_inputs`             | Optional | `object` | The custom text that can be added to a product. See [Personalizd Products](/docs/pxm/products/personalized-products-pxm).                                                                                                                                                                                                                                                                    |


## Examples

### Request example - update a base product

```bash
curl -X PUT https://useast.api.elasticpath.com/pcm/products/60afe403-a191-455e-b771-c510c928a308 \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
        "data": {
            "type": "product",
            "id": "60afe403-a191-455e-b771-c510c928a308",
            "attributes": {
                "name": "UPDATED BestEver Range, Model 1a1a"
            }
        }
    }
```

### Response example - update a base product

`200 OK`

```json
{
    "data": {
        "type": "product",
        "id": "60afe403-a191-455e-b771-c510c928a308",
        "attributes": {
            "commodity_type": "physical",
            "description": "The 30 inch version of this popular electric range.",
            "mpn": "BE-R-1111-aaaa-1a1a-30",
            "name": "UPDATED BestEver Range 30 inch, Model 1a1a-30",
            "sku": "BE-Range-1a1a-30",
            "slug": "bestever-range-1a1a-30",
            "status": "draft",
            "upc_ean": "111130303030",
            "locales": {
                "fr-FR": {
                    "name": "MISE À JOUR de la gamme BestEver 30 pouces, modèle 1a1a-30",
                    "description": "La version 30 pouces de cette cuisinière électrique populaire"
                }
            }
        },
        "relationships": {
            "files": {
                "data": [],
                "links": {
                    "self": "/products/60afe403-a191-455e-b771-c510c928a308/relationships/files"
                }
            },
            "templates": {
                "data": [],
                "links": {
                    "self": "/products/60afe403-a191-455e-b771-c510c928a308/relationships/templates"
                }
            }
        },
        "meta": {
            "created_at": "2023-09-28T10:43:41.72Z",
            "owner": "organization",
            "product_types": [
                "standard"
            ],
            "tags": [
                "Seimans",
                "self-cleaning",
                "lifestyle"
            ],
            "updated_at": "2023-09-28T10:43:41.72Z"
      }
    }
}
```

### Request example - update a base product and build rules

This example:

- Updates a base product called **Shirt**.
- Configures build rules that specify that all shirt child products are built apart from small, red, cotton shirts.

:::note
This example assumes that the variations and options have already been created and associated with the base product.
:::

For more information, see:

- [Create Child Products Using Variations and Modifiers](/docs/pxm/products/pxm-product-variations/generate-pxm-variations).
- [Build Child Products Using Variations](/docs/pxm/products/pxm-product-variations/build-pxm-variations).

```bash
curl -X PUT https://useast.api.elasticpath.com/pcm/products/60afe403-a191-455e-b771-c510c928a308 \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
         "data": {
         "type": "product",
         "id": "9214719b-17fe-4ea7-896c-d61e60fc0d05",
         "attributes": {
            "build_rules": {
                 "default": "include",
                 "exclude": [
                     [
                         "cbde9096-e0e1-43d8-a1aa-cb66cf1d299f",
                         "0b261f7d-753d-4af6-b9f4-62b436cca37d",
                         "994c2029-519c-43d9-9c54-14f3af4e3efd"
                     ]
                 ]
             }
         }
     }
 }'
```

### Response example - update a base product and build rules

```json
{
    "data": {
        "type": "product",
        "id": "9214719b-17fe-4ea7-896c-d61e60fc0d05",
        "attributes": {
            "build_rules": {
                "default": "include",
                "exclude": [
                    [
                        "cbde9096-e0e1-43d8-a1aa-cb66cf1d299f",
                        "0b261f7d-753d-4af6-b9f4-62b436cca37d",
                        "994c2029-519c-43d9-9c54-14f3af4e3efd"
                    ]
                ]
            },
            "commodity_type": "physical",
            "description": "T-shirt.",
            "locales": {
                "fr-FR": {
                    "name": "Shirt",
                    "description": "T-Shirt."
                }
            },
            "mpn": "1234-5678-SSSS",
            "name": "Shirt",
            "sku": "978055216732567",
            "slug": "978055216732567",
            "status": "live",
            "upc_ean": "135623456"
        },
        "relationships": {
            "children": {
                "data": [],
                "links": {
                    "self": "/products/9214719b-17fe-4ea7-896c-d61e60fc0d05/children"
                }
            },
            "component_products": {
                "data": [],
                "links": {
                    "self": "/products/9214719b-17fe-4ea7-896c-d61e60fc0d05/relationships/component_products"
                }
            },
            "files": {
                "data": [],
                "links": {
                    "self": "/products/9214719b-17fe-4ea7-896c-d61e60fc0d05/relationships/files"
                }
            },
            "main_image": {
                "data": null
            },
            "templates": {
                "data": [],
                "links": {
                    "self": "/products/9214719b-17fe-4ea7-896c-d61e60fc0d05/relationships/templates"
                }
            },
            "variations": {
                "data": [],
                "links": {
                    "self": "/products/9214719b-17fe-4ea7-896c-d61e60fc0d05/relationships/variations"
                }
            }
        },
        "meta": {
            "created_at": "2022-08-18T12:14:52.782Z",
            "owner": "store",
            "product_types": [
                "standard"
            ],
            "updated_at": "2022-08-18T12:40:13.484Z",
            "variation_matrix": {},
            "variations": [
                {
                    "id": "6c4b5caa-3819-4366-a14e-c5b85009544b",
                    "name": "Shirt Size",
                    "options": [
                        {
                            "id": "cbde9096-e0e1-43d8-a1aa-cb66cf1d299f",
                            "name": "Small",
                            "description": "Size Small"
                        },
                        {
                            "id": "da9d88d0-8ea6-434c-a0dd-059caf595687",
                            "name": "Medium",
                            "description": "Size Medium"
                        },
                        {
                            "id": "07493fea-74b0-40a2-972a-cd7e1d6561bd",
                            "name": "Large",
                            "description": "Size Large"
                        }
                    ]
                },
                {
                    "id": "b1ae545e-3375-455f-b5ea-09669b60996f",
                    "name": "Shirt Material",
                    "options": [
                        {
                            "id": "994c2029-519c-43d9-9c54-14f3af4e3efd",
                            "name": "Cotton",
                            "description": "Material Cotton"
                        },
                        {
                            "id": "7951f3d9-f628-49f8-8a43-7749d28153d6",
                            "name": "Denim",
                            "description": "Material Denim"
                        },
                        {
                            "id": "58115bff-589a-4287-98d8-373112102617",
                            "name": "Wool",
                            "description": "Material Wool"
                        }
                    ]
                },
                {
                    "id": "f192e114-9f8a-4284-99d0-4d9ccd8a0275",
                    "name": "Shirt Color",
                    "options": [
                        {
                            "id": "0b261f7d-753d-4af6-b9f4-62b436cca37d",
                            "name": "Red",
                            "description": "Color Red"
                        },
                        {
                            "id": "55d6d785-cc52-453a-bff6-2cf9add8a580",
                            "name": "Green",
                            "description": "Color Green"
                        },
                        {
                            "id": "a43d8b6f-b411-49aa-adaa-36a1a025051e",
                            "name": "Blue",
                            "description": "Color Blue"
                        }
                    ]
                }
            ]
        }
    }
}
```

## Using `custom_inputs` Attribute

You can allow your shoppers to add custom text to a product when checking out their carts. This is useful, for example, if you have a product like a T-shirt that can be personalized. You can do this using the `custom_inputs` attribute when [creating your products](/docs/pxm/products/ep-pxm-products-api/create-a-product).

Once you have defined your custom inputs on a product, you must configure the custom inputs in your orders. See [adding your products to carts](/docs/carts-orders/carts/cart-items/add-product-to-cart).

For example, a birthday card may have custom inputs for name and message defined for a product.

```json
url -X PUT https://useast.api.elasticpath.com/pcm/products/60afe403-a191-455e-b771-c510c928a308 \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
  "data": {
    "type": "product",
    "id": "9214719b-17fe-4ea7-896c-d61e60fc0d05",
    "attributes": {
         "custom_inputs": {
        "front": {
          "name": "T-Shirt Front",
          "validation_rules": [
            {
              "type": "string",
              "options": {
                "max_length": 50
              }
            }
          ],
          "required": false
        },
        "back": {
          "name": "T-Shirt Back",
          "validation_rules": [
            {
              "type": "string",
              "options": {
                "max_length": 50
              }
            }
          ],
          "required": false
        }
      }
    }
  }
}'
```

### Response example - update custom inputs

```json
{
    "data": {
        "type": "product",
        "id": "9214719b-17fe-4ea7-896c-d61e60fc0d05",
        "attributes": {
            "commodity_type": "physical",
            "custom_inputs": {
                "back": {
                    "name": "T-Shirt Back",
                    "validation_rules": [
                        {
                            "type": "string",
                            "options": {
                                "max_length": 50
                            }
                        }
                    ],
                    "required": false
                },
                "front": {
                    "name": "T-Shirt Front",
                    "validation_rules": [
                        {
                            "type": "string",
                            "options": {
                                "max_length": 50
                            }
                        }
                    ],
                    "required": false
                }
            },
            "description": "T-shirt.",
            "locales": {
                "fr-FR": {
                    "name": "T-Shirt",
                    "description": "T-Shirt."
                }
            },
            "mpn": "1234-5678-SSSS",
            "name": "Shirt",
            "sku": "978055216732567",
            "slug": "978055216732567",
            "status": "live"
        },
        "relationships": {
            "children": {
                "data": [],
                "links": {
                    "self": "/products/9214719b-17fe-4ea7-896c-d61e60fc0d05/children"
                }
            },
            "component_products": {
                "data": [],
                "links": {
                    "self": "/products/9214719b-17fe-4ea7-896c-d61e60fc0d05/relationships/component_products"
                }
            },
            "files": {
                "data": [],
                "links": {
                    "self": "/products/9214719b-17fe-4ea7-896c-d61e60fc0d05/relationships/files"
                }
            },
            "main_image": {
                "data": null
            },
            "templates": {
                "data": [],
                "links": {
                    "self": "/products/9214719b-17fe-4ea7-896c-d61e60fc0d05/relationships/templates"
                }
            },
            "variations": {
                "data": [],
                "links": {
                    "self": "/products/9214719b-17fe-4ea7-896c-d61e60fc0d05/relationships/variations"
                }
            }
        },
        "meta": {
            "created_at": "2022-08-18T12:14:52.782Z",
            "updated_at": "2022-08-19T12:28:26.343Z",
            "variation_matrix": {},
            "variations": [
                {
                    "id": "6c4b5caa-3819-4366-a14e-c5b85009544b",
                    "name": "Shirt Size",
                    "options": [
                        {
                            "id": "cbde9096-e0e1-43d8-a1aa-cb66cf1d299f",
                            "name": "Small",
                            "description": "Size Small"
                        },
                        {
                            "id": "da9d88d0-8ea6-434c-a0dd-059caf595687",
                            "name": "Medium",
                            "description": "Size Meduim"
                        },
                        {
                            "id": "07493fea-74b0-40a2-972a-cd7e1d6561bd",
                            "name": "Large",
                            "description": "Size Large"
                        }
                    ]
                },
                {
                    "id": "b1ae545e-3375-455f-b5ea-09669b60996f",
                    "name": "Shirt Material",
                    "options": [
                        {
                            "id": "994c2029-519c-43d9-9c54-14f3af4e3efd",
                            "name": "Cotton",
                            "description": "Material Cotton"
                        },
                        {
                            "id": "7951f3d9-f628-49f8-8a43-7749d28153d6",
                            "name": "Denim",
                            "description": "Material Denim"
                        },
                        {
                            "id": "58115bff-589a-4287-98d8-373112102617",
                            "name": "Wool",
                            "description": "Material Wool"
                        }
                    ]
                },
                {
                    "id": "f192e114-9f8a-4284-99d0-4d9ccd8a0275",
                    "name": "Shirt Color",
                    "options": [
                        {
                            "id": "0b261f7d-753d-4af6-b9f4-62b436cca37d",
                            "name": "Red",
                            "description": "Color Red"
                        },
                        {
                            "id": "55d6d785-cc52-453a-bff6-2cf9add8a580",
                            "name": "Green",
                            "description": "Color Green"
                        },
                        {
                            "id": "a43d8b6f-b411-49aa-adaa-36a1a025051e",
                            "name": "Blue",
                            "description": "Color Blue"
                        }
                    ]
                }
            ]
        }
    }
}
```

## Related Resources

- [Products](/docs/commerce-manager/product-experience-manager/Products/create-products)
- [Locales](/docs/pxm/products/locales/pxm-locales)
- [Bundles](/docs/pxm/products/pxm-bundles)
- [Products API](/docs/pxm/products/ep-pxm-products-api/pxm-products-api-overview)
- [Bundles API](/docs/pxm/products/pxm-bundles/pxm-bundles-api/create-a-bundle)
