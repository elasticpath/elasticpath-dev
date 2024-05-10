---
title: Overview
nav_label: Overview
nav_position: 1
---

A Custom Field represents a single field of data (for example a Product Rating). A Custom API is composed of one or more Custom Fields. 

Here is a comparison of different types and validation available in Custom APIs vs Non-Core Flows.

| Feature                          | Non-Core Flows | Commerce Extensions                        |
|----------------------------------|----------------|--------------------------------------------|
| Data Type: String                | ✅              | ✅                                          |
| Data Type: Integer               | ✅              | ✅                                          |
| Data Type: Boolean               | ✅              | ✅                                          |
| Data Type: Date                  | ✅              | ✅ Regex possible now, full support planned |
| Data Type: One To Many           | ✅              | Planned                                    |
| Validation: Regular Expression   | ⛔️             | Planned                                    |
| Validation: Slug/Email           | ✅              | ✅ Replaced by Regex validation             |
| Validation: Min/Max Value        | ✅              | ✅                                          |
| Validation: Enum (String)        | ✅              | ✅ Replaced by Regex validation             |
| Validation: Enum (Float/Integer) | ✅              | ⛔️                                         |

## The Custom Field Object

| Attribute     | Type     | Description                                                                                                                                                                                                                                                                                                             |
|:--------------|:---------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`          | `string` | The unique identifier for a Custom Field.                                                                                                                                                                                                                                                                               |  
| `type`        | `string` | Represents the type of the object being returned. Must be `custom_field`.                                                                                                                                                                                                                                               |                                                                                                          
| `name`        | `string` | Specifies the name of the field for the Custom API to be created. The name must contain 1 and 255 characters.                                                                                                                                                                                                           |
| `description` | `string` | Specifies the description of this field. The description must contain 1 and 255 characters.                                                                                                                                                                                                                             |
| `slug`        | `string` | Specifies a unique slug identifier for this field. It is used when setting values for Custom API entries. The slug must be between 1 and 63 characters. Some values are [reserved](/docs/commerce-cloud/commerce-extensions/commerce-extensions-api/custom-fields/overview#reserved-slugs) and cannot be used as slugs. |
| `field_type`  | `string` | Specifies the type of data you can store. Supported types are `string`, `integer`, `boolean`. This cannot be modified.                                                                                                                                                                                                  |
| `validation`  | `object` | Specifies the limits that can be enforced on data for this field. For more information, see the [validation](/docs/commerce-cloud/commerce-extensions/commerce-extensions-api/custom-fields/overview#validation) section.                                                                                               |
| `meta`        | `object` | Additional information for this Custom Field. For more information, see [The meta object](/docs/commerce-cloud/commerce-extensions/commerce-extensions-api/custom-fields/overview#the-meta-object) section.                                                                                                              |
| `links`       | `object` | The links for this resource. For more information, see [The links object](/docs/commerce-cloud/commerce-extensions/commerce-extensions-api/custom-fields/overview#the-links-object) section.                                                                                                                             |

## The `meta` Object

| Attribute                    | Type     | Description                                                              |
|:-----------------------------|:---------|:-------------------------------------------------------------------------|
| `meta.timestamps`            | `string` | Specifies the time and date that the Custom field is created or updated. |
| `meta.timestamps.created_at` | `string` | Specifies the date the Custom field is created.                          |
| `meta.timestamps.updated_at` | `string` | Specifies the date the Custom field is last updated.                     |

## The `links` Object

| Attribute    | Type     | Description                          |
|:-------------|:---------|:-------------------------------------|
| `links.self` | `string` | Specifies the URI of the Custom API. |

## Validation

`validation` can optionally be used to limit the values that can be stored in an object. Each of the attributes in the following are themselves optional ie. you can set a `integer.min_value` but can leave the upper limit unbounded `integer.max_value`.

### Integer Validation

* `min_value`: the minimum whole number that can be stored.
* `max_value`: the maximum whole number that can be stored.

sample integer validation object:

```
"validation": {
    "integer: {
        "min_value": 0,
        "max_value": 32
    }
}
```

It is important to note however that the `field_type: integer` only supports values between -2^53+1 and 2^53-1.

### String Validation

* `min_length`: the minimum number of characters that can be stored. This must be greater than 0.
* `max_length`: the maximum number of characters that can be stored.
* `regex`: [RE2](https://github.com/google/re2/wiki/Syntax) regular expression that used to restrict the specific characters that can be stored. This must be less than 1024 characters.

sample string validation object:
```
"validation": {
    "string: {
        "min_length": 0,
        "max_length": 64,
        "regex": "(\W|^)[\w.\-]{0,25}@(yahoo|hotmail|gmail)\.com(\W|$)"
    }
}
```

## Reserved Slugs

The following values cannot be used as a `data.slug` value in a Custom Field.
* `slug`
* `type`
* `id`
* `meta`
* `created_at`
* `updated_at`
* `links`
* `relationships`
* `attributes`
* `attribute`
* `dimension`
* `dimensions`
* `weight`
* `weights`
