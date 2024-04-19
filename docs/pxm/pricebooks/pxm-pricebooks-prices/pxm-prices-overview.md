---
title: Price API
nav_label: Price API Overview
sidebar_position: 1
---

:::caution
The Price Book API is for Administrator use only. Do not use these endpoints on your customer-facing frontends.
:::

Price books contain prices for the products in your catalog. Use the Price Books API to create price books and add product prices to the price book.

:::caution 
Custom names and values prefixed with `$` are not supported.
:::

The following diagram shows the price book object map.

![price object map](/assets/pb-price-object-map.png)

## The `product-price` object

| Attribute               | Type | Description                                                                                                                                                           |
|:------------------------| :--- |:----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`                    | `string`| The generated unique identifier of the product price.                                                                                                                 |
| `external_ref`          | `string` | The unique attribute associated with the price. This can be an external reference from a separate company system, for example. The maximum length is 2048 characters. |
| `type`                  | `string` | Always: `product-price`                                                                                                                                               |
| `created_at` | `string` | The date and time a price is created. |
| `updated_at` | `string` | The date and time a price is updated. |

## The `attributes` Object

A `product-price` consists of a product SKU and the prices you want to charge for the product. If your store supports multiple locales, a product price can have up to 10 currencies. 

| Attribute | Type     | Description                                 |
|:----------|:---------|:--------------------------------------------|
| `sku`     | `string` | The product SKU that the prices belongs to. |

## The `currencies` Object

Each currency can have one price per product SKU.

| Attribute                         | Type      | Description                                                                                                                                                                                |
|:----------------------------------|:----------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `currencies: <key>`               | `string`  | Where `<key>` is the three-letter ISO code for the currency associated with this price.                                                                                                    |
| `currencies: <key>: amount`       | `integer` | The price in the lowest denomination for the specified currency. This is a product's list price.                                                                                           |
| `currencies: <key>: includes_tax` | `boolean` | Whether this price includes tax. Default is `false`.                                                                                                                                       |
| `currencies: <key>: tiers`        | `object`  | The price tier that an item is eligible for based on the quantity purchased. **Note**: You cannot have conflicting tiers within the same currencies block. See [tiers](#the-tiers-object). |

## The `tiers` Object

Each tier can have only one currency within the same block.

| Attribute | Type | Description                                             |
| :--- | :--- |:--------------------------------------------------------|
| `tiers: <key>` | `object` | Where *key* is the name of the tier, such as `Pencils`. |
| `tiers: <key>: minimum_quantity` | `integer` | The minimum quantity defined for the specified price.   |
| `tiers: <key>: amount` | `integer` | The price for each quantity.                            |

## The `sales` Object

Each sale can only have one sale within the same block.

| Attribute                  | Type | Description                                                                                                                                                                                                                                                                                                          |
|:---------------------------| :--- |:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `sales: <key>`             | `object` | Where *key* is the name of the sale, such as `Summer Sale`.                                                                                                                                                                                                                                                          |
| `sales: <key>: bundle_ids` | `object` | An array of product IDs in a bundle have a sale price.  See [the bundle object](/docs/pxm/products/pxm-bundles/pxm-bundles-api/pxm-bundles-api-overview).                                        |
| `sales: <key>: schedule`   | `object` | The schedule of the sale. Contains an optional `valid_from` and `valid_to` parameter for the start and end date of the sale.                                                                                                                                                                                         |
| `sales: <key>: currencies` | `object` | A collection of one or more `currencies: <key>` objects. This is a product's sale price. Both list and sale price (or was/is prices) are available in the catalog response, enabling you to display slash pricing on your storefront, depending on your requirements. See [currency object](#the-currencies-object). |

## The `meta` Object

| Name | Type | Description |
| :--- | :--- | :--- |
| `owner` | `string` | The product owner,  either `organization` or `store`. See [Organizations](/docs/commerce-cloud/organizations/overview). |

## The `links` Object

Links are used to allow you as an API consumer to move between requests.

| Name    | Type | Description                        |
|:--------| :--- |:-----------------------------------|
| `self`  | `string` | Links to a specific product price. |

## Errors

The default error is a `409` error.

```json
{
  "errors": [
    {
      "detail": "The pricebook already exists",
      "status": "409",
      "title": "conflict"
    }
  ]
}
```
