---
title: Price Book Import File
nav_label: Import File
sidebar_position: 2
---

You can create/update price book objects using [Price Book Import API](/docs/pxm/pricebooks/price-import/import-prices).

The API uses a [JSONL](https://jsonlines.org/) file. The JSONL file can be compressed to a GZIP file. Here is an [example of a JSONL file](/assets/example_file_all.jsonl).

A file can include up to 50,000 objects. If you have more than 50,000 objects, then you must create a separate file, and import each file, one at a time.

## The `pricebook` Object

The following table describes the attributes for a price book object.

{% table %}
* Attribute
* Required
* Type
* Description
---
* `type`
* Required
* `string`
* Always: `pricebook`
---
* `attributes`
* Required
* `object`
*  
  The attributes for a price book.
  {% list type="checkmark" %}
   * 
     (Optional) `external_ref` 
     {% list type="checkmark" %}
     * **Type**: `string`
     * **Description**: The unique attribute associated with the price book. This can be an external reference from a separate company system, for example. The maximum length is 2048 characters.
     {% /list %}
    *
      (Required) `name`
      {% list type="checkmark" %}
      * **Type**: `string`
      * **Description**: The name of the price book. Price books must have a unique name.
      {% /list %}
    *
      (Optional) `description`
      {% list type="checkmark" %}
      * **Type**: `string`
      * **Description**: A description for the price book. For example, the purpose for the price book, such as flash sale pricing or preferred customer pricing.
      {% /list %}
   {% /list %} 
{% /table %}

### Sample Object

```json
{
  "data": {
    "type": "pricebook",
    "attributes": {
      "external_ref": "Library-PB4-004",
      "name": "Library-PB4",
      "description": "mens-shoes-pricebook-description for pb4"
    }
  }
}
```

## The `product-price` object

The following table describes the attributes supported for a price object.

{% table %}
* Attribute
* Required
* Type
* Description
---
* `id`
* Optional
* `string`
* The generated unique identifier of a product price.
---
* `type`
* Required
* `string`
* Always: `product-price`
---
* `pricebook_external_ref`
* Optional
* `string`
* The unique attribute associated with the price book. This can be an external reference from a separate company system, for example. The maximum length is 2048 characters.
---
* `pricebook_id`
* Optional
* `string`
* The generated unique identifier of a price book.
---
* `attributes`
* Required
* `object`
*
  The attributes for a price.
  {% list type="checkmark" %}
  *
    (Optional) `external_ref`
    {% list type="checkmark" %}
      * **Type**: `string`
      * **Description**: The unique attribute associated with a price. This can be an external reference from a separate company system, for example. The maximum length is 2048 characters.
    {% /list %}
  *
    (Required) `sku`
    {% list type="checkmark" %}
     * **Type**: `string`
     * **Description**: The product SKU that the price belongs to.
    {% /list %}
  *
    (Required) `currencies`
    {% list type="checkmark" %}
      * **Type**: `object`
      * **Description**: A collection of one or more `currencies: <key>` objects where *key* is the three-letter ISO code for the currency associated with this price. This is a product's price.
    {% /list %}
      {% list type="checkmark" %}
      *
        (Required) *key*
        {% list type="checkmark" %}
        * **Type**: `string`
        * **Description**: where *key* is the three-letter ISO code for the currency associated with this price.
        {% /list %}
      *
        (Required) `Amount`
        {% list type="checkmark" %}
        * **Type**: `integer`
        * **Description**: The price in the lowest denomination for the specified currency. This is a product's list price.
        {% /list %}
      *
        (Optional) `includes_tax`
        {% list type="checkmark" %}
        * **Type**: `integer`
        * **Description**: Whether this price includes tax. Default is `false`.
        {% /list %}
      *
        (Optional) `tiers`
        {% list type="checkmark" %}
        * **Type**: `object`
        * **Description**: The price tier that an item is eligible for based on the quantity purchased. You cannot have conflicting tiers within the same currencies block.
        {% /list %}
        *
          (Required) *key*
          {% list type="checkmark" %}
            * **Type**: `string`
            * **Description**: where *key* is the name of the tier, for example, `Pencils`.
          {% /list %}
        *
          (Required) `minimum_quantity`
          {% list type="checkmark" %}
            * **Type**: `integer`
            * **Description**: The minimum quantity defined for the specified price.
          {% /list %}
        *
          (Optional) `amount`
          {% list type="checkmark" %}
            * **Type**: `integer`
            * **Description**: The price for each quantity.
          {% /list %}
      {% /list %} 
  {% /list %}
---
* `sales`
* Optional
* `string`
* The sales price that an item is eligible for based on the price book.
    {% list type="checkmark" %}
    * **Type**: `object`
    * **Description**: The sales price that an item is eligible for based on the price book.
    {% /list %}
    *
      (Required) *key*
      {% list type="checkmark" %}
      * **Type**: `string`
      * **Description**: where *key* is the name of the sale, such as `Summer Sale`.
      {% /list %}
    *
      (Optional) `bundle_ids`
      {% list type="checkmark" %}
        * **Type**: `string`
        * **Description**: A list of product IDs in a bundle that you want to specify a sale price for.
      {% /list %}
    *
      (Required) `schedule`
      {% list type="checkmark" %}
      * **Type**: `object`
      * **Description**: The schedule of the sale. Contains an optional `valid_from` and `valid_to` parameter for the start and end date of the sale.

        {% list type="checkmark" %}

        For sale prices in the same price book:

        {% list type="checkmark" %}
        - the schedules must not overlap.
        - if you have just one sale price, without a schedule, this is effectively a permanent price. If you want to add more sale prices to the price book, you must configure a schedule for the sale price.
        {% /list %}

        Sale prices in different price books can have overlapping schedules.
        {% /list %}
      {% /list %}
    *
      (Required) `currencies`
      {% list type="checkmark" %}
      * **Type**: `object`
      * **Description**: A collection of one or more `currencies: <key>` objects. This is a product's sale price. Both list and sale price (or was/is prices) are available in the catalog response, enabling you to display slash pricing on your storefront.
      {% /list %}
      *
        (Required) *key*
        {% list type="checkmark" %}
          * **Type**: `string`
          * **Description**: where *key* is the three-letter ISO code for the currency associated with this price.
        {% /list %}
      *
        (Required) `Amount`
        {% list type="checkmark" %}
          * **Type**: `integer`
          * **Description**: The price in the lowest denomination for the specified currency. This is a product's list price.
        {% /list %}
      *
        (Optional) `includes_tax`
        {% list type="checkmark" %}
        * **Type**: `integer`
        * **Description**: Whether this price includes tax. Default is `false`.
        {% /list %}
      *
        (Optional) `tiers`
        {% list type="checkmark" %}
        * **Type**: `object`
        * **Description**: The price tier that an item is eligible for based on the quantity purchased. You cannot have conflicting tiers within the same currencies block.
        {% /list %}
        *
          (Required) *key*
          % list type="checkmark" %}
           * **Type**: `string`
           * **Description**: where *key* is the name of the tier, for example, `Pencils`.
          {% /list %}
        *
          (Required) `minimum_quantity`
          {% list type="checkmark" %}
          * **Type**: `integer`
          * **Description**: The minimum quantity defined for the specified price.
          {% /list %}
        *
          (Optional) `amount`
          {% list type="checkmark" %}
           * **Type**: `integer`
           * **Description**: The price for each quantity.
          {% /list %}
    {% /list %}
  {% /list %}
{% /table %}

### Sample Object

```json
{
  "data": {
    "type": "product-price",
    "pricebook_external_ref": "Library-PB4-004",
    "attributes": {
      "external_ref": "AllAttributes1",
      "currencies": {
        "USD": {
          "amount": 100,
          "includes_tax": true,
          "tiers": {
            "min_5": {
              "amount": 200,
              "minimum_quantity": 5
            }
          }
        },
        "CAD": {
          "amount": 600,
          "includes_tax": true,
          "tiers": {
            "min_5": {
              "amount": 1005,
              "minimum_quantity": 5
            }
          }
        }
      },
      "sales": {
        "winter": {
          "bundle_ids": [
            "a3cacaa9-b5bb-4096-bb6b-af41394ca850"
          ],
          "currencies": {
            "USD": {
              "amount": 50,
              "includes_tax": false,
              "tiers": {
                "min_3_yes": {
                  "amount": 45,
                  "minimum_quantity": 3
                }
              }
            }
          },
          "schedule": {
            "valid_from": "2023-01-01T00:00:00.000Z",
            "valid_to": "2024-01-31T11:59:59.000Z"
          }
        }
      },
      "sku": "AllAttributesSku1"
    }
  }
}
```

<!-- ## The `price-modifier` object

The following table describes the attributes supported for a price object.

{% table %}
* Attribute
* Required
* Type
* Description
---
* `id`
* Optional
* `string`
* The generated unique identifier of the product price modifier.
---
* `modifier_type`
* Required
* `string`
* Always `price-modifier`.
---
* `name`
* Required
* `string`
* The name of the price modifier. Price modifiers must have a unique name.
---
* `pricebook_id`
* Optional
* `string`
* The generated unique identifier of a price book.
---
* `priceboook_external_ref`
* Optional
* `string`
* The unique attribute associated with the price book. This can be an external reference from a separate company system, for example. The maximum length is 2048 characters.
---
* `external_ref`
* Optional
* `string`
* The unique attribute associated with the price modifier. This can be an external reference from a separate company system, for example. The maximum length is 2048 characters.
---
* `currencies`
* Required
* `object`
*  A collection of one or more `currencies: <key>` objects where *key* is the three-letter ISO code for the currency associated with this price modifier.
   (Required) `currencies`
    *
      (Required) *key*
      {% list type="checkmark" %}
        * **Type**: `string`
        * **Description**: where *key* is the three-letter ISO code for the currency associated with this price.
      {% /list %}
    *
      (Required) `Amount`
      {% list type="checkmark" %}
        * **Type**: `integer`
        * **Description**: The price in the lowest denomination for the specified currency. This is a product's list price.
      {% /list %}
    *
      (Optional) `includes_tax`
      {% list type="checkmark" %}
        * **Type**: `integer`
        * **Description**: Whether this price includes tax. Default is `false`.
      {% /list %}
    *
      (Optional) `tiers`
      {% list type="checkmark" %}
        * **Type**: `object`
        * **Description**: The price tier that an item is eligible for based on the quantity purchased. You cannot have conflicting tiers within the same currencies block.
      {% /list %}
        *
          (Required) *key*
          {% list type="checkmark" %}
            * **Type**: `string`
            * **Description**: where *key* is the name of the tier, for example, `Pencils`.
          {% /list %}
        *
          (Required) `minimum_quantity`
          {% list type="checkmark" %}
            * **Type**: `integer`
            * **Description**: The minimum quantity defined for the specified price.
          {% /list %}
        *
          (Optional) `amount`
          {% list type="checkmark" %}
            * **Type**: `integer`
            * **Description**: The price for each quantity.
          {% /list %}
        {% /list %}
{% /table %}

### Sample Object

```json
{
  "data": {
    "id": "{{modifierID}}",
    "type": "price-modifier",
    "pricebook_id": "{{pricebookID}}",
    "pricebook_external_ref": "{{pricebook_external_ref}}",
    "attributes": {
      "external_ref": "{{modifier_external_ref}}",
      "currencies": {
        "USD": {
          "amount": 99,
          "includes_tax": false,
          "tiers": {
            "min_5": {
              "minimum_quantity": 5,
              "amount": 80
            }
          }
        }
      }
    }
  }
}
``` -->



