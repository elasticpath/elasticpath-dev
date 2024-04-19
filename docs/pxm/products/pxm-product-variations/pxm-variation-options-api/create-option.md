---
title: Create an Option
nav_label: Create an Option
sidebar_position: 40
---

## `POST` Create a Product Variation Option

```http
https://useast.api.elasticpath.com/pcm/variations/:variationID/options
```

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

| Name          | Required | Type     | Description                                                   |
| ------------- | -------- | -------- | ------------------------------------------------------------- |
| `variationID` | Required | `string` | The ID of the variation for which you want to create options. |

### Headers

| Name            | Required | Type     | Description                                         |
| --------------- | -------- | -------- | --------------------------------------------------- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Name          | Required | Type     | Description                                                               |
| ------------- | -------- | -------- | ------------------------------------------------------------------------- |
| `type`        | Required | `string` | The type of the resource object. You must use `product-variation-option`. |
| `name`        | Required | `string` | The name of the option displayed in the storefront. Option names can only contain A-Z, a-z, 0 to 9, hyphen, underscore, and period. Spaces or other special characters like ^, [], *, and $ are not allowed. |
| `description` | Required | `string` | The description for the option.                                           |
| `sort_order` | Optional | `integer` | The sort order value. The variation with the highest value of `sort_order` is displayed firt. For example, a variation with a `sort_order` value of `3` appears before a variation with a sort_order value of `2`. | 

## Request Example

```bash
curl -X POST https://useast.api.elasticpath.com/pcm/variations/684bceee-0ee3-4f43-ac32-50bb44c1eee5/options \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
        "data": {
           "type": "product-variation-option"
           "attributes": {
              "description": "Our most popular color",
              "name": "Black",
              "sort_order": 23"
            }
		     }
    }'
```

## Response Example

`201 Created`

```json
{
    "data": {
        "type": "product-variation-option",
        "id": "eb84ffe3-a723-4790-8019-d28e4695da14",
        "attributes": {
            "description": "Our most popular color",
            "name": "Black"
        },
        "meta": {
            "sort_order": "23",
            "owner": "store"
      }
    }
}
```
