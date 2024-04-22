---
title: Flows API Overview
nav_label: Flows API Overview
sidebar_position: 1
---

A Flow describes a collection of fields. It is named after the internal entity type that you want to associate it with. For example, a flow with a slug of `products` is applied to all product responses in your store.

:::caution
Custom names and values prefixed with `$` are not supported.
:::

:::caution
If you store any sensitive Personal Identifiable Information (PII) or non-public data on your site, ensure that you do not use this data in flows to avoid potential access to the data. For more information, see [Permissions](/docs/commerce-cloud/authentication/Tokens/permissions).
:::

## The flow object

 | Attribute | Type | Description |
 | :--- | :--- | :--- |
 | `id` | `string` | The unique identifier for this flow. |
 | `type` | `string` | Represents the type of object being returned. |
 | `name` | `string` | The name of the flow. |
 | `slug` | `string` | A unique slug identifier for the flow. |
 | `description` | `string` | Any description for this flow. |
 | `enabled` | `bool` | `true` if enabled, `false` if not. |

:::caution
The maximum size for a flow entry of type `string` can be 16 megabytes.
:::

## The meta object

{% table %}
* Attribute
* Type
* Description
---
*
  `owner`
*
  `string`
*
  The product owner,  either `organization` or `store`. See [Organizations](/docs/commerce-cloud/organizations).

---
*
   `timestamps`
*
   `string`
*
   * `created_at` The date and time a flow is created.
   *  `updated_at` The date and time a flow is updated.
   
{% /table %}
