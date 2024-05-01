---
title: Custom API Overview
nav_label: Custom API Overview
sidebar_position: 1
---

## The Custom API Object

| Attribute     | Type     | Description                                                                                                                                                                                            |
|:--------------|:---------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`          | `string` | The unique identifier for a Custom API.                                                                                                                                                                |  
| `type`        | `string` | Represents the type of the object being returned. Must be `custom_api`.                                                                                                                                |                                                                                                                              
| `name`        | `string` | Specifies the name of the Custom API to be created. The name must contain between 1 and 255 characters.                                                                                                |
| `description` | `string` | Specifies a description of the Custom API. The description must contain between 1 and 255 characters.                                                                                                  |
| `slug`        | `string` | Represents a unique slug identifier for the Custom API. This is used to derive the location of your Custom API entries. It must contain between 1 and 63 characters and pluralized.                    |
| `api_type`    | `string` | Specifies the `type` of any Custom API entries that are created and thus must be unique. It must end with `_ext` and have no more than 63 characters. It cannot contain `-` character or be modified.  |
| `meta`        | `object` | Additional information for this Custom API. For more information, see [The meta object](/docs/commerce-cloud/commerce-extensions/commece-extensions-api/custom-apis/overview#the-meta-object) section. |
| `links`       | `object` | The links for this resource. For more information, see [The links object](/docs/commerce-cloud/commerce-extensions/commece-extensions-api/custom-apis/overview#the-links-object) section.              |

## The `meta` Object

| Attribute                    | Type     | Description                                                            |
|:-----------------------------|:---------|:-----------------------------------------------------------------------|
| `meta.timestamps`            | `string` | Specifies the time and date that the Custom API is created or updated. |
| `meta.timestamps.created_at` | `string` | Specifies the date the Custom API is created.                          |
| `meta.timestamps.updated_at` | `string` | Specifies the date the Custom API is last updated.                     |

## The `links` Object

| Attribute    | Type     | Description                          |
|:-------------|:---------|:-------------------------------------|
| `links.self` | `string` | Specifies the URI of the Custom API. |
