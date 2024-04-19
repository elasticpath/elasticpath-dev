---
title: Update an Option
nav_label: Update an Option
sidebar_position: 40
---

## `PUT` Update a Product Variation Option

```http
https://useast.api.elasticpath.com/pcm/variations/:variationId/options/:optionId
```

:::note
Use the same `OptionId` in the path and the body to avoid errors.
:::

### The `sort_order` Attribute

The `variations` object lists the variation IDs and variation option IDs and their corresponding product IDs that are generated when the variation and variation options are built with a product. The `variations` object can then be added to your catalogs.

By default, variations and variation options are sorted randomly. You can use the `sort_order`attribute to sort the order of your variation and variation options in `variations`.

The `create an option` endpoint does not sort variation options. However, once a parent product that has variations and/or options with a configured`sort_order` is published in a catalog, the [publish a catalog](/docs/pxm/catalogs/catalog-release-admin/publish-a-catalog) response displays the sorted variations and variation options. Variations and variation options are displayed in descending order according to their `sort_order` values.

Add the `sort_order` attribute to the body of your request and specify a `sort_order` value. A `sort_order` value must be a number. You can specify any numbers that you want.

- 1, 2, 3, or 100, 90, 80, and so on.
- Zero or negative numbers.

You can set `sort_order` to either `null` or omit it entirely from the request if you wish to remove an existing `sort_order` attribute.

:::caution
- The `create a variation` endpoint does not sort variation options. You must program your storefront to sort the variation options in the order that you want.
- You must rebuild your products for the sort order changes to take effect. See [Build Child Products](/docs/pxm/products/pxm-product-variations/child-products-api/build-child-products).
:::

## Parameters

### Path parameters

| Name          | Required | Type     | Description                                          |
| ------------- | -------- | -------- | ---------------------------------------------------- |
| `variationId` | Required | `string` | The ID of the variation that consists of the option. |
| `optionId`    | Required | `string` | The ID of the option that you want to update.        |

### Headers

| Name            | Required | Type     | Description                                         |
| --------------- | -------- | -------- | --------------------------------------------------- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Name          | Required | Type     | Description                                                           |
| ------------- | -------- | -------- | --------------------------------------------------------------------- |
| `optionId`    | Required | `string` | The ID of the option that you want to update.                         |
| `name`        | Required | `string` | The name of the option.                                               |
| `description` | Required | `string` | The description of the option.                                        |
| `type`        | Required | `string` | The type of resource object. You must use `product-variation-option`. |
| `sort_order` | Optional | `integer` | The sort order value. The variation with the highest value of `sort_order` is displayed firt. For example, a variation with a `sort_order` value of `3` appears before a variation with a sort_order value of `2`. | 

## Request Example

```bash
curl -X PUT https://useast.api.elasticpath.com/pcm/variations/684bceee-0ee3-4f43-ac32-50bb44c1eee5/options/39148bc3-3028-4196-9350-1b4ac927c9d6 \
     -H "Authorization: Bearer XXXX" \
     -H "Content-type: application/json" \
     -d $'{
        {
        "data": {
          "type": "product-variation-option",
          "id": "39148bc3-3028-4196-9350-1b4ac927c9d6",
          "attributes": {
            "name": "Blue",
            "description": "This is a color."
        }
    }
}'
```

## Response Example

`200 OK`

```json
{
    "data": {
        "type": "product-variation-option",
        "id": "2950cae3-1050-4c43-9fbd-2aa60dc5c249",
        "attributes": {
            "name": "Blue",
            "description": "This is a color."
        }
    }
}
```
