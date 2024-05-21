---
title: Price Modifier API
nav_label: Price Modifier API Overview
sidebar_position: 1
---

:::caution
The Price Book API is for Administrator use only. Do not use these endpoints on your customer-facing frontends.
:::

You can use price modifiers to change the price property of child products. By default, child products inherit the same price as their base products. Using price modifiers, you can enable child products to inherit a different price.

:::caution 
Custom names and values prefixed with `$` are not supported.
:::

The following diagram shows the price modifiers object map.

![price modifiers object map](/assets/pb-modifier-object-map.png)

## The `price-modifier` object

| Attribute               | Type | Description                                                                                                                                                                    |
|:------------------------| :--- |:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`                    | `string`| The generated unique identifier of the product price modifier.                                          |
| `external_ref`          | `string` | The unique attribute associated with the price modifier. This can be an external reference from a separate company system, for example. The maximum length is 2048 characters. |
| `type`                  | `string` | Always: `price-modifier`                                                                                                                                                       |
| `created_at` | `string` | The date and time a price is created. |
| `updated_at` | `string` | The date and time a price is updated. |

## The `attributes` Object

{% table %}
* Attribute
* Type
* Description
---
* `modifier_type`
* `string`
*   
   There are three modifier types. 
   {% list type="checkmark" %}
  * `price_increment` - Increases the price of a product. 
  * `price_decrement` - Decreases the price of a product.
  * `price_equals` - Sets the price of a product to the amount you specify.
  {% /list %}
---
* `name`
* `string`
* A name for the modifier.  You must give the price modifier a unique name. Price modifier names are case-sensitive.
{% /table %}

## The `currencies` Object

Each currency can have one price per product modifier.

| Attribute                         | Type      | Description                                                                                                                                                                                |
|:----------------------------------|:----------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `currencies: <key>`               | `string`  | Where `<key>` is the three-letter ISO code for the currency associated with this price.                                                                                                    |
| `currencies: <key>: amount`       | `integer` | The price in the lowest denomination for the specified currency. This is a product's list price.                                                                                           |
| `currencies: <key>: includes_tax` | `boolean` | Whether this price includes tax. Default is `false`.                                                                                                                                       |
| `currencies: <key>: tiers`        | `object`  | The price tier that an item is eligible for based on the quantity purchased. **Note**: You cannot have conflicting tiers within the same currencies block. See [tiers](#the-tiers-object). |

## The `tiers` Object

Each tier can only have one currency within the same block.

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `tiers: <key>` | `object` | The name of the tier, such as `Pencils`. |
| `tiers: <key>: minimum_quantity` | `integer` | The minimum quantity defined for the specified price. |
| `tiers: <key>: amount` | `integer` | The price for each quantity. |

## The `links` Object

As an API consumer, links allow you to move between requests.

| Name    | Type | Description                       |
|:--------| :--- |:----------------------------------|
| `first` | `string` | Always the first page.            |
| `last`  | `string` | `null` if there is only one page. |
| `self`  | `string` | Links to a specific price book.   |

## The `meta` Object

| Name | Type | Description |
| :--- | :--- | :--- |
| `owner` | `string` | The product owner,  either `organization` or `store`. See [Organizations](/docs/organizations). |

## The `page` Object

Many Elastic Path Commerce Cloud endpoints support [pagination](/guides/Getting-Started/api-overview/pagination).

| Name      | Type | Description                                 |
|:----------| :--- |:--------------------------------------------|
| `current` | `string` | The current page.                           |
| `limit`   | `string` | The maximum number of price books per page. |
| `total`   | `string` | The total number of price books.            |

## The `results` Object

| Name      | Type | Description                      |
|:----------| :--- |:---------------------------------|
| `total`   | `string` | The total number of price books. |

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
