---
title: Create a Modifier
nav_label: Create a Modifier
sidebar_position: 40
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `POST` Create a Modifier

```http
https://useast.api.elasticpath.com/pcm/variations/:variationId/options/:optionId/modifiers
```

:::caution

- Ensure that an option ID is provided in the request to create modifier for the option.
- Modifier values can only contain A-Z, a-z, 0 to 9, -, and \_. No spaces or special characters are allowed.

:::

Use one of the following for modifier types and corresponding values:

- `commodity_type` : Provide `physical` or `digital`
- `status`: Provide `live` or `draft`.
- `description_append` : Provide a value to append with the description.
- `description_prepend`: Provide a value to prepend with the description.
- `description_equals` : Provide a value for the description.
- `name_append`: Provide a value to append with the name.
- `name_prepend`: Provide a value to prepend with the name.
- `name_equals` : Provide a value for the name.
- `sku_append`: Provide a value to append with the SKU.
- `sku_prepend`: Provide a value to prepend with the SKU.
- `sku_equals` : Provide a value for the SKU.
- `slug_append`: Provide a value to append with the slug.
- `slug_prepend`: Provide a value to prepend with the slug.
- `slug_equals` : Provide a value for the slug.

You need not provide values for `slug_builder` and `sku_builder`. These modifier use `seek` and `set`. The string provided for `set` replaces all the strings that match the value provided in `seek`. For example, if you set `"seek":"{color}"` and `"set":"red"`, all strings that match `"{color}"` are replaced with `red`. For more information, see the [Modifiers](/docs/pxm/products/pxm-product-variations/pxm-variation-modifiers-api/modifiers) section.

### Parameters

#### Path parameters

| Name       | Required | Type     | Description                               |
|:-----------|:---------|:---------|:------------------------------------------|
| `optionId` | Required | `string` | The ID of the option for which you want to provide a modifier. |

#### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

#### Body

| Name               | Required                           | Type     | Description |
|:-------------------|:-----------------------------------|:---------|:--------|
| `type`             | Required                           | `string` | The type of resource object. You must use `product-variation-modifier`. |
| `attributes.type`  | Required                           | `string` | The type of the modifier. |
| `attributes.value` | Required for non-builder modifiers | `string` | The value of the modifier type. |
| `seek`             | Required for builder modifiers     | `string` | The sub-string to find and replace enclosed in curly brackets for `slug_builder` and `sku_builder`. |
| `set`              | Required for builder modifiers     | `string` | The value to replace matches the `seek` string for `slug_builder` and `sku_builder`. |

### Request example

```bash
curl -X POST https://useast.api.elasticpath.com/pcm/variations/:variationId/options/:optionId/modifiers
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
        "data": {
          "type": "product-variation-modifier",
          "attributes": {
              "seek": "{color}",
              "set": "red",
              "type": "slug_builder"
            }
        }
    }'
```

This request creates a product variation modifier with the attributes that are defined in the body as in the following response:

### Response example

`201 Created`

```json
{
    "data": {
        "type": "product-variation-modifier",
        "id": "310e10f1-9bb9-4bdd-99ec-b9b0e4d54d5d",
        "attributes": {
            "seek": "{color}",
            "set": "red",
            "type": "slug_builder"
        }
    }
}
```
