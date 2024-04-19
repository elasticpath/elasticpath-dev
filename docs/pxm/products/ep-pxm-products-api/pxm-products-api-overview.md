---
title: Products API Overview
nav_label: Products API Overview
sidebar_position: 10
---

:::caution
The Products API is for Administrator use only. Do not use these endpoints on your customer-facing frontends.
:::

With the Product Experience Manager services, you define your products separately from catalogs, prices, inventory, and other resource relationships.

## The `product` Object

| Name | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | A unique product ID that is generated when you create the product. |
| `type` | `string` | The type of resource object. You must use `product`. |
| `attributes` | [`object`](#the-product_attributes-object) | The attributes that describe the product. |

## The `attributes` Object

The product attributes that can be displayed in your storefront.

| Name | Type | Description                                                                                                                                                                                                                                                  |
| :--- | :--- |:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `external_ref` | `string` | The unique attribute associated with the product. This could be an external reference from a separate company system, for example. The maximum length is 2048 characters.                                                                                    |
| `name` | `string` | A name for the product.                                                                                                                                                                                                                                      |
| `commodity_type` | `string` | The commodity type, either `physical` or `digital`.                                                                                                                                                                                                          |
| `components` | `object` | The [components name and options](#the-components-object) that make up a bundle.                                                                                                                                                                             |
| `description` | `string` | A description for the product.                                                                                                                                                                                                                               |
| `mpn` | `string` | The manufacturer part number of the product.                                                                                                                                                                                                                 |
| `sku` | `string` | The unique stock keeping unit of the product.                                                                                                                                                                                                                |
| `slug` | `string` | A label for the product that is used in the URL paths. A slug can contain A to Z, a to z, 0 to 9, hyphen, underscore, and period. Spaces or other special characters like ^, [], *, and $ are not allowed. By default, the product name is used as the slug. |
| `status` | `string` | The status for the product, either `draft` or `live`.                                                                                                                                                                                                        |
| `upc_ean` | `string` | The universal product code or european article number of the product.                                                                                                                                                                                        |
| `build_rules` | `object` | The build rules allow you to build a combination of child products associated with a product. See [build_rules](#the-build_rules-object).                                                                                                                    |
| `custom_inputs` | `string` | The custom text that can be added to a product. See [custom_inputs object](#the-custom_inputs-object).                                                                                                                                                       |
| `curated_product` | `boolean` | If a product is curated, then `"curated_product": true` attribute is displayed. If a product is not curated, the `curated_product` attribute is not displayed. See [Curated Products](/docs/pxm/products/pxm-products#curated-products).                     |

## The `build_rules` Object

You can build a combination of child products associated with a product, based on build rules that you specify. This is useful, for example, if you have a variation option that you do not sell. This makes managing and building your child products quick and easy. 

| Name | Type | Description |
| :--- | :--- | :--- |
| `default` | `string` | Specifies the default behavior, either `include` or `exclude`. |
| `include` | `array` | An array of option IDs to include when child products are built. Each combination consists of a nested array of option IDs from one or more variations. Combinations of option IDs in the nested arrays must come from different variations. |
| `exclude` | `array` | An array of option IDs to exclude when child products are built. Each combination consists of a nested array of option IDs from one or more variations. Combinations of option IDs in the nested arrays must come from different variations. |

See [Build Child Products Using Variations](/docs/pxm/products/pxm-product-variations/build-pxm-variations).

## The `components` Object

:::note

- Custom names and values prefixed with `$` are not supported.
- You cannot have more than 1500 options in a bundle. 

:::

| Name | Type | Description |
| :--- | :---| :--- |
| `component: <key>` | `string` | The name of the component, such as `games`. The `bundle_configuration` uses the component key to reference a component. A component key should be relatively short and must not contain any special characters. See [create a bundle](/docs/pxm/products/pxm-bundles/pxm-bundles-api/create-a-bundle). |
| `component: <key>: min` | `integer` | The minimum number of product options a shopper can select from this component. |
| `component: <key>: max` | `integer` | The maximum number of product options a shopper can select from this component. |
|`component: <key>: name` | `string` | The component name. The component name is the name that is displayed in your storefront. See [create a bundle](/docs/pxm/products/pxm-bundles/pxm-bundles-api/create-a-bundle). |
| `component: <key>: options` | `array` | The product options that this component is comprised of. This can be the bundle ID of another bundle. See [Bundles of Bundles](/docs/pxm/products/pxm-bundles/bundles-of-bundles). |

### Response Example

In the following example, `games` and `toys` are the component keys.

```json
"components": {
                "games": {
                    "max": 1,
                    "min": 1,
                    "name": "GamesOptions",
                    "options": [
                        {
                            "id": "d7b79eb8-19d8-45ea-86ed-2324a604dd9c",
                            "quantity": 1,
                            "type": "product"
                        },
                        {
                            "id": "baaebdd6-490e-4834-a4a5-307602f70ea0",
                            "quantity": 2,
                            "type": "product"
                        }
                    ]
                },
                "toys": {
                    "max": 2,
                    "min": 2,
                    "name": "ToysOptions",
                    "options": [
                        {
                            "id": "1aea6f97-f0d9-452c-b3c1-7fb5629ead82",
                            "quantity": 1,
                            "type": "product"
                        },
                        {
                            "id": "0192ccdd-6d33-4898-87d7-c4d87f2bf8ea",
                            "quantity": 1,
                            "type": "product"
                        },
                        {
                            "id": "de691397-2320-48fb-af7b-8b17d27a34a4",
                            "quantity": 1,
                            "type": "product"
                        }
                    ]
                }
          }
```

## The `locales` Object

Product Experience Manager supports localization of products and hierarchies. If your store supports multiple languages, you can localize product names and descriptions. You can have as many locales as you want.

Name | Type | Description |
| :--- | :--- | :--- |
| `name` | `string` | A localized name for the product. |
| `description` | `string` | A localized description of up to 7500 characters for the product. |

## The `custom_inputs` Object

Name | Type | Description |
| :--- | :--- | :--- |
| `name` | `string` | A `name` for the custom text field. |
| `validation_rules` | `object` | The validation rules for the custom text. |
| `type` | `string` | Must be `string`. |
| `options` | `object` | The length of the custom input text field. |
| `max_length` | `integer` | The number of characters the custom text field can be. You can specify a maximum length up to 255 characters, as the limit is 255 characters. |
| `required` | `boolean` | `true` or `false` depending on whether the custom text is required. |

## The `meta` Object

{% table %}
* Name
* Type
* Description
---
* `created_at`
* `string`
* The date and time a product is created.
---
* `owner`
* `string`
* The product owner,  either `organization` or `store`. See [Organizations](/docs/commerce-cloud/organizations/overview).
---
* `updated_at`
* `string`
* The date and time a product is updated.
---
* `product_types`
* `string`
* One of the following product types:
  {% list type="checkmark" %}
  * `standard` - A standard product is a standalone product. 
  * `parent` - A parent product is a product that has child products that have been built using the `Build Child Products` endpoint. See [Create child products using variations](/docs/pxm/products/pxm-product-variations/generate-pxm-variations).
  * `child` -  When you configure product variations and variation options for parent products, the child products derived from the parent products are automatically created in Commerce.
  * `bundle` - A bundle is a purchasable product, comprising two or more standalone products (in other words, `components`) to be sold together. See [Bundle Components and Options](/docs/pxm/products/pxm-bundles/pxm-bundles#bundle-components-and-options).
  {% /list %}
---
* `tags`
* `array`
* Product tags are used to store or assign a key word against a product. The product tag can then be used to describe or label that product. Using product tags means that you can group your products together, for example, by brand, category, subcategory, colors, types, industries, and so on. You can have up to 20 tags per product. Each product tag can be up to 255 characters. Product tags must not contain any spaces or commas. See [Product tags](/docs/pxm/products/pxm-products#product-tags).
---
* `variation_matrix`
* `object`
* The child products defined for a product. If no variations are defined for a product, the `variation_matix` is empty. See [Create Child Products Using Variations and Modifiers](/docs/pxm/products/pxm-product-variations/generate-pxm-variations).
---
* `variations`
* `object`
* A product's variations and the options defined for each variation. If you have specified `build_rules`, only the child products included in the `build_rules` are specified. See [Variations Object](#the-variations-object).
{% /table %}

## The `variation_matrix` Object

The `variation_matrix` object lists the variation IDs and variation option IDs and their corresponding product IDs that are generated when the variation and variation options are built with a product. If no variations are available, the `variation_matrix` is empty. See [Create Child Products Using Variations and Modifiers](/docs/pxm/products/pxm-product-variations/generate-pxm-variations).

| Name | Type | Description |
| :--- | :--- | :--- |
| `variation` | `string` | A unique variation ID. |
| `variation.<key>.product` | `string` | A unique product ID generated when a variation is built. |
| `variation.<key>.option` | `string` | A unique variation option ID. |
| `variation.<key>.option.product` | `string` | A unique product ID generated when a variation option is built. |

## The `variations` Object

If you specified `build_rules` for a product, the `variations` object lists the variation option IDs that you specified to include when building your child products. If no `build_rules` are specified, all the variation and variation options available for a product are displayed. If a product does not have any variations, then the `variations` attribute is not displayed. See [Build Child Products Using Variations](/docs/pxm/products/pxm-product-variations/build-pxm-variations).

| Name | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | A unique ID that is generated when you create a variation. |
| `name` | `string` | The name of a variation. |
| `options` | `object` | The options available for this variation. See [Options Object](#the-options-object-2). |

## The `options` Object

| Name | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | A unique ID that is generated when you create an option. |
| `name` | `string` | The name of an option. |
| `description` | `string` | A description of an option. |

## Related Resources

- [Products](/docs/pxm/products/pxm-products)
- [Locales](/docs/pxm/products/locales/pxm-locales)
- [Product Variations](/docs/pxm/products/pxm-product-variations/pxm-variations)
- [Bundles - Product Experience Manager](/docs/pxm/products/pxm-bundles/pxm-bundles)
- [Bundles API](/docs/pxm/products/pxm-bundles/pxm-bundles-api/create-a-bundle)
