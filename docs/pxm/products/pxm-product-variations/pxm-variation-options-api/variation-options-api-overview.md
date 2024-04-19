---
title: Product Variation Options API Overview
nav_label: Product Variation Options API Overview
sidebar_position: 10
---

## The Attributes Object

A variation option represents an option for selection for a single product-variation. For example, if your variation is "color", you might have three possible options: `red`, `green`, and `blue`.

| Attribute | Type | Description                                                                                                                                                                                                                                              |
| :--- | :--- |:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id` | `string` | The unique identifier for this option.                                                                                                                                                                                                                   |
| `type` | `string` | Represents the type of option being returned.                                                                                                                                                                                                            |
|  `name` | `string` | A human recognizable identifier for the option, also used in the SLUG for child products. Option names can only contain A to Z, a to z, 0 to 9, hyphen, underscore, and period. Spaces or other special characters like ^, [], *, and $ are not allowed. |
|  `description` | `string` | A human readable description of the product-variation object.                                                                                                                                                                                            |
| `meta` | `object` | Data about the option, for example, date created, owner, and so on. See [The Meta Object](#the-meta-object).

:::note
Option names may contain lowercase and uppercase alphabets, and numeric characters. However, they must not contain the following, else you cannot build the child products:

- be duplicated
- contain special characters, except the following:
    - hyphen
    - underscore
    - period
- contain spaces

:::

## The Meta Object

The `meta` object has the following attributes.

| Attribute    | Type     | Description                                                                                                            |
|--------------|----------|------------------------------------------------------------------------------------------------------------------------|
| `created_at` | `string` | The date and time an option is created.                                                                                |
| `modifiers` | `array` | An array of `modifiers` objects belonging to this variation option. See [The Modifiers Object](#the-modifiers-object). |
| `owner`      | `string` | The owner of the option, either `store` or `organization`.                                                             |
| `updated_at` | `string` | The date and time an option is updated.                                                                                |

## The Modifiers object

The modifiers object has the following attributes.

| Attribute | Type     | Description                                                                                                                              |
|-----------|----------|------------------------------------------------------------------------------------------------------------------------------------------|
| `id`      | `string` | A unique identifier for a modifier.                                                                                                      |
| `type`    | `string` | The modifier type. See [Modifier Types](/docs/pxm/products/pxm-product-variations/pxm-variation-modifiers-api/modifiers#modifier-types). |

## Sample Object

```json
{
  data: {
    type: 'product-variation-option',
    id: '3976df63-9a31-461a-8704-5bd720ae2e9b',
    attributes: { description: 'This is a colour.', name: 'Blue' },
    meta: {
      created_at: '2024-02-14T15:28:23.772Z',
      modifiers: [
        {
          id: '486aeab8-2d6e-42c9-96bb-ecc865ded09f',
          type: 'commodity_type',
          value: 'physical'
        }
      ],
      owner: 'store',
      updated_at: '2024-02-14T15:28:23.772Z'
    }
  }
}

```
