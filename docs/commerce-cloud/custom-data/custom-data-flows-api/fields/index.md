---
title: Fields API Overview
nav_label: Fields API Overview
sidebar_position: 1
---

A Field represents a single field of data (for example a `Product Rating`) to be applied to an entity. All Fields have a `field_type` (`string`, `integer`, `boolean`, `date` or `relationship`), a default value, and an optional set of validation rules.

:::caution
Custom names and values prefixed with `$` are not supported.
:::

:::note
There is a hard limit of 100 fields per flow.
:::

## The Field object

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | The unique identifier for this field. |
| `type` | `string` | Represents the type of object being returned. |
| `name` | `string` | The name of the field. |
| `slug` | `string` | A unique slug identifier for the field. |
| `field_type` | `string` | This field is immutable and **cannot** be updated. The type of field: `string`, `integer`, `boolean`, `float`, `date`, or `relationship`. |
| `validation_rules` | `array[object]` | See [`Field Validation Rules`](/docs/commerce-cloud/custom-data/custom-data-flows-api/fields#field-validation-rules). |
| `description` | `string` | Any description for this field. |
| `required` | `boolean` | `true` if required on input, `false` if not. Always `false` if the `field_type` is a relationship. |
| `default` | `mixed` | A default value if none is supplied and field is not required. |
| `enabled` | `boolean` | If this field is enabled on the flow this should be `true`, otherwise `false`. |
| `order` | `integer` | Denotes the order in which this field is returned relative to the rest of the flow fields. |
| `relationships` | `object` | A relationship object to link this field to a flow. |
| `omit_null` | `boolean` | Hide this field from responses if the value is `null`. |

## Field Validation Rules

When creating a Field, you can add validation to the values that are stored. The validation you use depends on the `field_type` of the Field. Each validation rule is expressed as a validation rule object.


### `string` / `enum`

```javascript
{
    "type": "enum",
    "options": [
        "fast",
        "slow"
    ]
}
```

Must be one of a predefined collection of strings.

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `type` | `string` | `enum` |
| `options` | `array[string]` | An array of valid string values. |


### `string` / `email`

```javascript
{
    "type": "email"
}
```

Must be a valid email address.

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `type` | `string` | `email` |


### `string` / `slug`

```javascript
{
    "type": "slug"
}
```

Can contain only letters, numbers, hyphens and underscores.

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `type` | `string` | `slug` |


### `integer` / `between`

```javascript
{
    "type": "between",
    "options": {
        "from": 1,
        "to": 5
    }
}
```

Must be between the two provided values.

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `type` | `string` | `enum` |
| `options` | `object` | an object containing `from` and `to` integers. |

### `integer` / `enum`

```javascript
{
    "type": "enum",
    "options": [
        1,
        2,
        3,
        4,
        5
    ]
}
```

Must be one of a predefined collection of integers.

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `type` | `string` | `enum` |
| `options` | `array[integer]` | An array of valid integer values. |


### `float` / `between`

```javascript
{
    "type": "between",
    "options": {
        "from": 0.0,
        "to": 5.0
    }
}
```

Must be between the two provided values.

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `type` | `string` | `enum` |
| `options` | `object` | An object containing `from` and `to` floats. |


### `float` / `enum`

```javascript
{
    "type": "enum",
    "options": [
        0.0,
        0.5,
        1.0
    ]
}
```

Must be one of a predefined collection of floats.

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `type` | `string` | `enum` |
| `options` | `array[float]` | An array of valid float values. |


### `date` / `enum`

```javascript
{
    "type": "enum",
    "options": [
        "2017-12-25",
        "2017-12-26"
    ]
}
```

Must be one of a predefined collection of dates.

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `type` | `string` | `enum` |
| `options` | `array[string]` | An array of valid date values as strings \(`YYYY-MM-DD HH:MM:SS` - time is optional\). |


### `relationship` / `one-to-many`

```javascript
{
    "type": "one-to-many",
    "to": "product"
}
```

Allows multiple relationships to be created.

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `type` | `string` | `one-to-many` |
| `to` | `string` | The entity type you are making relationships with in singular form (e.g., `product`). |


### `relationship` / `one-to-one`

```javascript
{
    "type": "one-to-one",
    "to": "customer"
}
```

Allows only a single relationships to be created on an entry.

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `type` | `string` | `one-to-one` |
| `to` | `string` | The entity type you are making relationships with in singular form (e.g., `customer`). |

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
   * `created_at` The date and time a field is created.
   *  `updated_at` The date and time a field is updated.
   
{% /table %}
