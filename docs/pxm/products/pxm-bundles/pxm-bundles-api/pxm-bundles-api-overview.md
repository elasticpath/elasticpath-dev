---
title: Bundles API Overview
nav_label: Bundles API Overview
sidebar_position: 10
---

:::caution
The Bundles API is for Administrator use only. Do not use these endpoints on your customer-facing frontends.
:::

With the Product Experience Manager services, you can create and manage bundles. A bundle is a purchasable product, comprising one or more products that you want to sell together. For example, a consumer electronics and video game company, *Playtend Games* can sell a *Playtend* video game console as a bundle that includes the console, controller, and game. The price of the bundle might be different from the total of the individual products. A bundle must contain at least two items, either the same items or different items. 

## The `bundle` Object

| Name | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | A unique ID that is generated when you create the bundle. |
| `type` | `string` | The type of resource object. You must use `product`. |
| `attributes` | [`object`](#the-attributes-object) | The attributes that describe the bundle. |

## The `attributes` Object

The bundle attributes that can be displayed in your storefront.

| Name | Type | Description |
| :--- | :--- | :--- |
| `commodity_type` | `string` | The commodity type, either `physical` or `digital`. |
| `components` | `object` | The [components name and options](#the-components-object) that make up a bundle. |
| `custom_inputs` | `string` | The custom text that can be added to a bundle. |
| `description` | `string` | A description for the bundle. |
| `mpn` | `string` | The manufacturer part number of the bundle. |
| `sku` | `string` | The unique stock keeping unit of the bundle. |
| `name` | `string` | A name for the bundle. |
| `status` | `string` | The status for the bundle, either `draft` or `live`. |
| `upc_ean` | `string` | The universal product code or european article number of the bundle. |

## The `locales` Object

Product Experience Manager supports localization of bundles and hierarchies. If your store supports multiple languages, you can localize bundle names and descriptions. You can have as many locales as you want.

Name | Type | Description |
| :--- | :--- | :--- |
| `name` | `string` | A localized name for the product. |
| `description` | `string` | A localized description for the product. |

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
| `component: <key>: sort_order` | `integer` | The sort order of the components. The `create a bundle` and `update a bundle` endpoints do not sort the components. You can use the `sort_order` attribute when programming your storefront to display the components in the order that you want. |
|`component: <key>: name` | `string` | The component name. The component name is the name that is displayed in your storefront. See [create a bundle](/docs/pxm/products/pxm-bundles/pxm-bundles-api/create-a-bundle). |
| `component: <key>: options` | `array` | The product options included in a component. This can be the ID of another bundle. See [Bundles of Bundles](/docs/pxm/products/pxm-bundles/bundles-of-bundles). |

### Response Example

In the following example, `games` and `toys` are the component keys.

```json
"components": {
                "games": {
                    "name": "GamesOptions",
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
                            "sort_order": 2
                        }
                    ]
                   "max": 1,
                   "min": 1,
                   "sort_order": 2
                },
                "toys": {
                    "name": "ToysOptions",
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
                            "sort_order": 1
                        },
                        {
                            "id": "de691397-2320-48fb-af7b-8b17d27a34a4",
                            "quantity": 1,
                            "type": "product",
                            "sort_order": 2
                        }
                    ]
                    "max": 2,
                    "min": 2,
                    "sort_order": 2
                }
          }
```

## The `options` Object

| Name | Type      | Description |
| :--- |:----------| :--- |
| `id` | `string`  | The unique Id of the product you want to add to a component. |
| `type` | `string`  | Must be `product`. |
| `quantity` | `integer` | The number of this product option that a shopper must purchase. |
| `sort_order` | `integer` | The sort order of the options. The `create a bundle` and `update a bundle` endpoints do not sort the options. You can use the `sort_order` attribute when programming your storefront to display the options in the order that you want. See [create a bundle](/docs/pxm/products/pxm-bundles/pxm-bundles-api/create-a-bundle). |

## The `custom_inputs` Object

Name | Type | Description |
| :--- | :--- | :--- |
| `name` | `string` | A `name` for the custom text field. |
| `validation_rules` | `object` | The validation rules for the custom text. |
| `type` | `string` | Must be `string`. |
| `options` | `object` | The length of the custom input text field. |
| `max_length` | `integer` | The number of characters the custom text field can be. You can specify a maximum length up to 255 characters, as the limit is 255 characters. |
| `required` | `boolean` | `true` or `false` depending on whether the custom text is required. |

## The `Relationships` Object

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `children` | `string` | A URL to a delta document that describes the changes between catalog releases. |
| `component_products` | `string` | A URL to all component products included in this catalog release. |
| `files` | `string` | A URL to all products included in this catalog release. |
| `main_image` | `string` | A URL to all products included in this catalog release. |
| `templates` | `string` | A URL to all products included in this catalog release. |
| `variations` | `string` | A URL to all products included in this catalog release. |

## The `meta` Object

| Name | Type | Description |
| :--- | :--- | :--- |
| `created_at` | `string` | The date and time a product is created. |
| `owner` | `string` | The product owner,  either `organization` or `store`. See [Organizations](/docs/commerce-cloud/organizations). |
| `updated_at` | `integer` | The date and time a product is updated. |
