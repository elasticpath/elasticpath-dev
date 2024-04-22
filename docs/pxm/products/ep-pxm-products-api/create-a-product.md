---
title: Create a Product
nav_label: Create a Product
sidebar_position: 40
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `POST` Create a Product

```http
https://useast.api.elasticpath.com/pcm/products
```

Creates a product with the attributes that are defined in the body.

:::caution
Custom names and values prefixed with `$` are not supported.
:::

## Parameters

### Headers

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token to grant access to the API. |

### Body

{% table %}
* Name
* Required
* Type
* Description
---
* `type`
* Required
* `string`
* Always: `product`.
---
* `attributes.external_ref`
* Optional
* `string`
* The unique attribute associated with the product. This could be an external reference from a separate company system, for example. The maximum length is 2048 characters.
---
* `attributes.name`
* Required
* `string`
* The product name to display to customers.
---
* `attributes.commodity_type`
* Required
* `string`
* Valid values: `physical` or `digital`.
---
* `attributes.sku`
* Required
* `string`
* The unique stock keeping unit of the product.
---
* `attributes.slug`
* Optional
* `string`
* The unique slug of the product. A slug can contain A to Z, a to z, 0 to 9, hyphen, underscore, and period. Spaces or other special characters like ^, [], *, and $ are not allowed.
---
* `attributes.description`
* Optional
* `string`
* The product description to display to customers.
---
* `attributes.mpn`
* Optional
* `string`
* The manufacturer part number of the product.
---
* `attributes.status`
* Optional
* `string`
* Valid values: `draft` or `live`. Default is `draft`. 
---
* `attributes.upc_ean`
* Optional
* `string`
* The universal product code or european article number of the product.
---
* `attributes.tags`
* Optional
* `array`
* You can use product tags to store or assign a key word against a product. The product tag can then be used to describe or label that product. Using product tags means that you can group your products together, for example, by brand, category, subcategory, colors, types, industries, and so on. A product can have up to 20 tags. A product tag can be up to 255 characters. Product tags must not contain any spaces or commas. See [Product tags](/docs/pxm/products/pxm-products#product-tags).
---
* `build_rules`
* Optional
* `object`
*  
   The build rules allow you to build a combination of child products associated with a product. See [Build Child Products Using Variations](/docs/pxm/products/pxm-product-variations/build-pxm-variations).
   {% list type="checkmark" %}
  * 
    (Required) **Name**: `default`
    {% list type="checkmark" %}
     * **Type**: `string` 
     * **Description**: Specifies the default behavior, either `include` or `exclude`.
     {% /list %}
  * 
    (Optional) **Name**: `include` 
     {% list type="checkmark" %}
    * **Type**: `array` 
    * **Description**: An array of option IDs to include when child products are built. Each combination consists of a nested array of option IDs from one or more variations. Combinations of option IDs in the nested arrays must come from different variations.
     {% /list %}
  * 
    (Optional) **Name**: `exclude` 
    {% list type="checkmark" %}
    * **Type**: `array` 
    * **Description**: An array of option IDs to exclude when child products are built. Each combination consists of a nested array of option IDs from one or more variations. Combinations of option IDs in the nested arrays must come from different variations.
    {% /list %}

  {% /list %}
---
* `attributes.locales`
* Optional
* `object`
*  
  The product details localized in the supported languages. For example, product names or descriptions. For more information, see [Products API](/docs/pxm/products/ep-pxm-products-api/pxm-products-api-overview#the-locales-object).
    {% list type="checkmark" %}
  * 
    (Required) **Name**: `name` 
      {% list type="checkmark" %}
    * **Type**:`string` 
    * **Description**: A localized name for the product.
    {% /list %}
  * 
    (Optional) **Name**: `description` 
     {% list type="checkmark" %}
    * **Type**:`string` 
    * **Description**: A localized description of up to 7500 characters for the product. 
    {% /list %}

  {% /list %}
---
* `custom_inputs`
* Optional
* `object`
* 
  The custom text that can be added to a product. See [Personalized Products](/docs/pxm/products/personalized-products-pxm).
   {% list type="checkmark" %}
  * 
    (Optional) **Name**: `name` 
    {% list type="checkmark" %}
    * **Type**:`string` 
    * **Description**: A `name` for the custom text field.
    {% /list %}
  * 
    (Optional) **Name**: `validation_rules` 
    {% list type="checkmark" %}
    * **Type**:`object` 
    * **Description**: The validation rules for the custom text.
    {% /list %}
  * 
    (Required) **Name**: `type` 
    {% list type="checkmark" %}
    * **Type**:`string` 
    * **Description**: Must be `string`.
    {% /list %}
  * 
    (Optional) **Name**: `options` 
    {% list type="checkmark" %}
    * **Type**: `object` 
    * **Description**: The length of the custom input text field.
     {% /list %}
  * 
    (Optional) **Name**: `max_length` 
    {% list type="checkmark" %}
    * **Type**:`integer` 
    * **Description**: The number of characters the custom text field can be. You can specify a maximum length up to 255 characters, as the limit is 255 characters.
    {% /list %}
  * 
    (Optional) **Name**: `required` 
    {% list type="checkmark" %}
    * **Type**:`boolean` 
    * **Description**: `true` or `false` depending on whether the custom text is required.
    {% /list %}

  {% /list %}
{% /table %}

## Examples

### Request example - create a product

```bash
curl -X POST https://useast.api.elasticpath.com/pcm/products \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
    "data": {
        "type": "product",
        "attributes": {
            "external_ref": "d0ddf10c-402c-4e0f-b421-94e7f682c603",
            "name": "T-Shirt",
            "sku": "97805",
            "slug": "97805",
            "description": "T-shirt.",
            "status": "live",
            "commodity_type": "physical",
            "mpn": "1234-5678-TTTT",
            "upc_ean": "12345656",
            "tags": [
                 "adidas",
                 "active",
                 "cute"
            ],
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
            },
            "locales": {
                "fr-FR": {
                    "name": "T_Shirt",
                    "description": "T-Shirt."
                }
            }
       }
    }
}
```

### Response example - create a base product

`201 Created`

```json
{
    "data": {
        "type": "product",
        "id": "9c85b276-09b4-488e-a59c-c561bae14c9e",
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
            "external_ref": "d0ddf10c-402c-4e0f-b421-94e7f682c603",
            "locales": {
                "fr-FR": {
                    "name": "T-Shirt",
                    "description": "T-Shirt."
                }
            },
            "mpn": "1234-5678-TTTT",
            "name": "T-Shirt",
            "sku": "97805",
            "slug": "97805",
            "status": "live",
            "upc_ean": "12345656"
        },
        "relationships": {
            "children": {
                "data": [],
                "links": {
                    "self": "/products/9c85b276-09b4-488e-a59c-c561bae14c9e/children"
                }
            },
            "component_products": {
                "data": [],
                "links": {
                    "self": "/products/9c85b276-09b4-488e-a59c-c561bae14c9e/relationships/component_products"
                }
            },
            "files": {
                "data": [],
                "links": {
                    "self": "/products/9c85b276-09b4-488e-a59c-c561bae14c9e/relationships/files"
                }
            },
            "main_image": {
                "data": null
            },
            "templates": {
                "data": [],
                "links": {
                    "self": "/products/9c85b276-09b4-488e-a59c-c561bae14c9e/relationships/templates"
                }
            },
            "variations": {
                "data": [],
                "links": {
                    "self": "/products/9c85b276-09b4-488e-a59c-c561bae14c9e/relationships/variations"
                }
            }
        },
        "meta": {
            "created_at": "2022-08-18T14:25:57.391Z",
            "owner": "store",
            "product_types": [
            "standard"
            ],
            "tags": [
                "Adidas",
                "active",
                "cute"
            ],
            "updated_at": "2022-08-18T14:25:57.391Z"
        }
    }
}
```

### Request example - create a base product, associate variations, configure build rules

This example:

- Creates a base product called **Shirt**.
- Associates the following variations with the base product **Shirt**.
    - **Shirt Size**.
    - **Shirt Color**.
    - **Shirt Material**.
- Configures build rules that specify that all shirt child products are built apart from small, red shirts.

:::note
This example assumes that the variations and options have already been created.
:::

For more information, see:

- [Create Child Products Using Variations and Modifiers](/docs/pxm/products/pxm-product-variations/generate-pxm-variations).
- [Build Child Products Using Variations](/docs/pxm/products/pxm-product-variations/build-pxm-variations).

```json
curl -X POST https://useast.api.elasticpath.com/pcm/products \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
    "data": {
        "type": "product",
        "attributes": {
            "name": "Shirt",
            "sku": "978055216732567",
            "slug": "978055216732567",
            "description": "T-shirt.",
            "status": "live",
            "commodity_type": "physical",
            "mpn": "1234-5678-SSSS",
            "upc_ean": "135623456",
            "build_rules": {
                "default": "include",
                "exclude": [
                    [
                        "cbde9096-e0e1-43d8-a1aa-cb66cf1d299f",
                        "0b261f7d-753d-4af6-b9f4-62b436cca37d"
                    ]
                ]
            },
            "locales": {
                "fr-FR": {
                    "name": "Shirt",
                    "description": "T-shirt."
                }
            }
        },
        "relationships": {
            "variations": {
                "data": [
                    {
                        "type": "product-variation",
                        "id": "6c4b5caa-3819-4366-a14e-c5b85009544b"
                    },
                    {
                        "type": "product-variation",
                        "id": "f192e114-9f8a-4284-99d0-4d9ccd8a0275"
                    },
                    {
                        "type": "product-variation",
                        "id": "b1ae545e-3375-455f-b5ea-09669b60996f"
                    }

                ]
            }
        }
    }
}'
```

### Response example - create a base product, associate variations, configure build rules

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
                        "0b261f7d-753d-4af6-b9f4-62b436cca37d"
                    ]
                ]
            },
            "commodity_type": "physical",
            "description": "T-shirt.",
            "locales": {
                "fr-FR": {
                    "name": "shirt",
                    "description": "T-shirt."
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
            "updated_at": "2022-08-18T12:14:52.782Z",
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

You can allow your shoppers to add custom text to a product when checking out their carts. This is useful, for example, if you have a product like a T-shirt that can be personalized. You can do this using the `custom_inputs` attribute when creating your products.

Once you have defined your custom inputs on a product, you must configure the custom inputs in your orders. See [adding your products to carts](/docs/commerce-cloud/carts/cart-items/add-product-to-cart).

For example, a birthday card may have custom inputs for name and message defined for a product.

```json
{
  "custom_inputs": {
    "name": {
      "name": "Name",
      "validation_rules": {
        "type": "string"
      },
      "message": {
        "name": "Message",
        "validation_rules": {
          "type": "string"
        }
      }
    }
  }
```

When the product is added to the cart, those custom inputs are supplied.

```json
{
  "custom_inputs": {
      "name": "Fred",
      "message": "Happy Birthday"
    }
}
```

See [adding your products to carts](/docs/commerce-cloud/carts/cart-items/add-product-to-cart).

## Related Resources

- [Products](/docs/pxm/products/pxm-products-commerce-manager/create-products)
- [Locales](/docs/pxm/products/locales/pxm-locales)
- [Bundles - Product Experience Manager](/docs/pxm/products/pxm-bundles)
- [Products API](/docs/pxm/products/ep-pxm-products-api/pxm-products-api-overview)
- [Bundles API](/docs/pxm/products/pxm-bundles/pxm-bundles-api/create-a-bundle)
