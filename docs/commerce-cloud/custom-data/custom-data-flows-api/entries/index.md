---
title: Entries API Overview
nav_label: Entries API Overview
sidebar_position: 1
---

Entries hold the pieces of data collected within the Fields.

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | The unique identifier for this entry. |
| `type` | `string` | Represents the type of object being returned. |
| `fieldSlug` | `mixed` | There can be a `:fieldSlug` attribute for each field attached to the flow. The type depends on the field type. |

If your flow has more than one field related to it, you see multiple field slugs.

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
  The product owner,  either `organization` or `store`. See [Organizations](/docs/commerce-cloud/organizations/overview).

---
*
   `timestamps`
*
   `string`
*
   * `created_at` The date and time an entry is created.
   * `updated_at` The date and time an entry is updated.
   
{% /table %}
