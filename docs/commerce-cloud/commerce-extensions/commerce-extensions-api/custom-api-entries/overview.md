---
title: Overview
nav_label: Overview
nav_position: 1
---

A **Custom API Entry** is a specific instance of a resource, such as a single product.

## The Custom API Entry Object

| Attribute | Type     | Description                                                                                                                                                                                                          |
|:----------|:---------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`      | `string` | The unique identifier for a Custom API Entry.                                                                                                                                                                        |
| `type`    | `string` | The type of the object being returned. Must be the `api_type` of the [Custom API](/docs/commerce-cloud/commerce-extensions/commerce-extensions-api/custom-apis/overview).                                            |
| `meta`    | `object` | Additional information for this Custom API Entry. For more information, see [The meta object](/docs/commerce-cloud/commerce-extensions/commerce-extensions-api/custom-api-entries/overview#the-meta-object) section. |
| `links`   | `object` | The links for this resource. For more information, see [The links object](/docs/commerce-cloud/commerce-extensions/commerce-extensions-api/custom-api-entries/overview#the-links-object) section.                    |

## The `meta` Object

| Attribute                    | Type      | Description                                                                  |
|:-----------------------------|:----------|:-----------------------------------------------------------------------------|
| `meta.timestamps`            | `string`  | Specifies the time and date that the Custom API Entry is created or updated. |
| `meta.timestamps.created_at` | `string`  | Specifies the date the Custom API Entry is created.                          |
| `meta.timestamps.updated_at` | `string`  | Specifies the date the Custom API Entry is last updated.                     |
| `meta.data_size`             | `integer` | The sum of the size of each value stored for the Custom API Entry in bytes.  |

## The `links` Object

| Attribute    | Type     | Description                          |
|:-------------|:---------|:-------------------------------------|
| `links.self` | `string` | Specifies the URI of the Custom API. |
