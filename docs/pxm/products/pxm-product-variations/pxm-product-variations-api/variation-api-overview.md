---
title: Product Variation API Overview
nav_label: Product Variation API Overview
sidebar_position: 9
---

## Product Variation Object

The product variation object has the following attributes.

| Attribute    | Type | Description                                                                                          |
|:-------------| :--- |:-----------------------------------------------------------------------------------------------------|
| `id`         | `string` | The unique identifier for a variation.                                                               |
| `type`       | `string` | Represents the type of option being returned.  Always `product-variation`.                           |
| `attributes` | `string` | An array of attributes to describe a variation. See [The Attributes Object](#the-attributes-object). |
| `meta` | `object` | Data about the variation, for example, date created, owner, and so on. See [The Meta Object](#the-meta-object).

## Attributes Object

The `attributes` object has the following attributes.

| Attribute    | Description                                                                                                                                                                                                                           |
|--------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `name`       | A name for the variation, also used in the SLUG for child products. Variation names can only contain A to Z, a to z, 0 to 9, hyphen, underscore, and period. Spaces or other special characters like ^, [], *, and $ are not allowed. |

## The Meta Object

The `meta` object has the following attributes.

| Attribute    | Type     | Description                                                                                |
|--------------|----------|--------------------------------------------------------------------------------------------|
| `created_at` | `string` | The date and time an option is created.                                                    |
| `owner`      | `string` | The owner of the option, either `store` or `organization`.                                 |
| `updated_at` | `string` | The date and time an option is updated.                                                    |
| `options`    | `array`  | An array of options built from a variation. See [The Options Object](#the-options-object). | 

## The Options Object

The `options` object has the following attributes.

| Attribute | Type     | Description                                                                                                                                                                                                                                              |
| :--- |:---------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id` | `string` | The unique identifier for this option.                                                                                                                                                                                                                   |
|  `name` | `string` | A human recognizable identifier for the option, also used in the SLUG for child products. Option names can only contain A to Z, a to z, 0 to 9, hyphen, underscore, and period. Spaces or other special characters like ^, [], *, and $ are not allowed. |
|  `description` | `string` | A human readable description of the product-variation object.                                                                                                                                                                                            |
| `modifiers` | `array`  | An array of `modifiers` objects belonging to this variation option. See [The Modifiers Object](#the-modifiers-object).                                                                                                                                   |
| `created_at` | `string` | The date and time an option was created.                                                                                                                                                                                                                 |
| `updated_at` | `string`  | The date and time an option was updated.                                                                                                                                                                                                                 | 

## The Modifiers object

The modifiers object has the following attributes.

| Attribute | Type     | Description                                                                                                                              |
|-----------|----------|------------------------------------------------------------------------------------------------------------------------------------------|
| `id`      | `string` | A unique identifier for a modifier.                                                                                                      |
| `type`    | `string` | The modifier type. See [Modifier Types](/docs/pxm/products/pxm-product-variations/pxm-variation-modifiers-api/modifiers#modifier-types). |
| `value`   | `string` | The value of the modifier.                                                                                                               |
## Sample Object

```json
{
  data: {
    type: 'product-variation',
    id: '34ff1dd3-d66e-467d-8ffa-eeb81add1ea1',
    attributes: { name: 'Paint colour' },
    meta: {
      created_at: '2024-02-14T15:28:23.765Z',
      options: [
        {
          id: '3976df63-9a31-461a-8704-5bd720ae2e9b',
          name: 'Blue',
          description: 'This is a colour.',
          modifiers: [
            {
              id: '486aeab8-2d6e-42c9-96bb-ecc865ded09f',
              type: 'commodity_type',
              value: 'physical'
            }
          ],
          created_at: '2024-02-14T15:28:23.772Z',
          updated_at: '2024-02-14T15:28:23.772Z'
        }
      ],
      owner: 'store',
      updated_at: '2024-02-14T15:28:23.765Z'
    }
  }
}

```
