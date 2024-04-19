---
title: Hierarchies API Overview
nav_label: Hierarchies API Overview
sidebar_position: 10
---

:::caution
The Hierarchy API is for Administrator use only. Do not use these endpoints on your customer-facing frontends.
:::

## The Hierarchy Object

| Name | Type | Description |
| :--- | :--- | :--- |
| `type` | `string` | Always: `hierarchy` |
| `id` | `string` | The generated unique identifier for the hierarchy. |
| `attributes.name` | `string` | The name of the hierarchy, such as `Major Appliances`. |
| `attributes.description` | `string` | A description of the hierarchy. |
| `attributes.slug` | `string` | A unique slug for the hierarchy. |
| `attributes.locales`     | `object` | The product details localized in the supported languages. For example, product names or descriptions. |

## The Node Object

| Name | Type | Description |
| :--- | :--- | :--- |
| `type` | `string` | Always: `node` |
| `id` | `string` | The generated unique identifier for the node. |
| `attributes.name` | `string` | The name of the node, such as `Ranges` or `Refrigerators`. Names must be unique among sibling nodes in the hierarchy. Otherwise, a name can be non-unique within the hierarchy and across multiple hierarchies. |
| `attributes.description` | `string` | A description of the node. |
| `attributes.slug` | `string` | A slug for the node. Slugs must be unique among sibling nodes in the hierarchy. Otherwise, a slug can be non-unique within the hierarchy and across multiple hierarchies. |
| `attributes.curated_products` | `string` | The curated products for a node. See [Curating Products in a Node](/docs/pxm/hierarchies/hierarchies-api/update-a-hierarchy#curating-products-in-a-node). |
| `attributes.locales`          | `object` | The product details localized in the supported languages. For example, product names or descriptions. |
| `meta`                        | `object` | The `sort_order` for each node. See [Sorting Node Order](/docs/pxm/hierarchies/nodes-api/update-a-hierarchy-node#sort-order). |

## The `locales` Object

Product Experience Manager supports localization of products and hierarchies. If your store supports multiple languages, you can localize hierarchy names and descriptions. You can have as many locales as you want.

Name | Type | Description |
| :--- | :--- | :--- |
| `name` | `string` | A localized name for the product. |
| `description` | `string` | A localized description for the product. |

## The `meta` Object

| Name | Type | Description |
| :--- | :--- | :--- |
| `created_at` | `string` | The date and time a hierarchy is created. |
| `owner` | `string` | The hierarchy owner,  either `organization` or `store`. See [Organizations](/docs/commerce-cloud/organizations/overview). |
| `sort_order` | `integer` | The sort order value. The node with the highest value of `sort_order` is displayed first. For example, a node with a `sort_order` value of 3 appears before a node with a `sort_order` value of 2. See [Sort Order](/docs/pxm/hierarchies/nodes-api/create-a-hierarchy-node#sort-order). |
| `updated_at` | `integer` | The date and time a hierarchy is updated. |

## Related Resources

- [Products API](/docs/pxm/products/ep-pxm-products-api/pxm-products-api-overview)

