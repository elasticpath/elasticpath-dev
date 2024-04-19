---
title: Update a Variation
nav_label: Update a Variation
sidebar_position: 40
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `PUT` Update a Variation

```http
https://useast.api.elasticpath.com/pcm/variations/:variationID
```

### The `sort_order` Attribute

The `variations` object lists the variation IDs and variation option IDs and their corresponding product IDs that are generated when the variation and variation options are built with a product. The `variations` object can then be added to your catalogs.

By default, variations and variation options are sorted randomly. You can use the `sort_order`attribute to sort the order of your variation and variation options in `variations`.

The `update a variation` endpoint does not sort variations. However, once a parent product that has variations and/or options with a configured`sort_order` is published in a catalog, the [publish a catalog](/docs/pxm/catalogs/catalog-release-admin/publish-a-catalog) response displays the sorted variations and variation options. Variations and variation options are displayed in descending order according to their `sort_order` values.

Add the `sort_order` attribute to the body of your request and specify a `sort_order` value. A `sort_order` value must be a number. You can specify any numbers that you want. You can specify any numbers that you want.

- 1, 2, 3, or 100, 90, 80, and so on.
- Zero or negative numbers.

You can set `sort_order` to either `null` or omit it entirely from the request if you wish to remove an existing `sort_order` attribute.

:::caution
You must rebuild your products for the sort order changes to take effect. See [Build Child Products](/docs/pxm/products/pxm-product-variations/child-products-api/build-child-products).
:::

## Parameters

### Headers

| Name            | Required | Type     | Description                                         |
| :-------------- | :------- | :------- | :-------------------------------------------------- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Path parameters

| Name          | Required | Type     | Description                        |
| :------------ | :------- | :------- | :--------------------------------- |
| `variationId` | Required | `string` | The ID of the variation to update. |

### Body

| Name         | Required | Type     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|:-------------| :------- | :------- |:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `type`       | Required | `string` | The type of resource object. You must use `product-variation`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `id`         | Required | `string` | The unique identifier of the product variation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `name`       | Required | `string` | The variation name.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `sort_order` | Optional | `integer` | By default, variations and variation options are sorted randomly. You can use the `sort_order` attribute to sort the order of your variation and variation options in the `variation_matrix`. The sort order value is visible when you add the variations and variation options to your catalogs. You can then use the `sort_order` value to program your storefront to display the variation options in the order that you want.  The variation with the highest value of `sort_order` is displayed first. For example, a variation with a `sort_order` value of `3` appears before a variation with a `sort_order` value of `2`. You can specify any numbers that you want. You can use 1, 2, 3, or 100, 90, 80, and so on, zero or negative numbers. You can set `sort_order` to either `null` or omit it entirely from the request if you wish to remove an existing `sort_order` attribute. | 

## Request Example

```bash
curl -X POST https://useast.api.elasticpath.com/pcm/variations/:variationID \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
        "data": {
            "type": "product-variation",
            "id": "8b9f9d4d-6d17-4113-b028-d54de3555bdf",
            "attributes": {
                "name": "T-Shirt size"
            }
        }
    }'
```

## Response Example

```json
{
    "data": {
        "type": "product-variation",
        "id": "8b9f9d4d-6d17-4113-b028-d54de3555bdf",
        "attributes": {
            "name": "T-Shirt size"
        },
        "meta": {
            "owner": "store"
        }
    }
}
```
