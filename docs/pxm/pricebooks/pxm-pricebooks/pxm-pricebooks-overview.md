---
title: Price Books API
nav_label: Price Books API Overview
sidebar_position: 10
---

:::caution
The Price Book API is for Administrator use only. Do not use these endpoints on your customer-facing frontends.
:::

Price books contain prices for the products in your catalog. Use the Price Books API to create price books and add product prices to the price book.

:::caution 
Custom names and values prefixed with `$` are not supported.
:::

The following diagram shows the price book object map.

![price books object map](/assets/pb-object-map.png)


## The `Pricebook` Object

| Attribute                | Type | Description                                                                                                                                                                |
|:-------------------------| :--- |:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`                     | `string` | The unique identifier of the price book.                                                                                                                                   |
| `external_ref`           | `string` | The unique attribute associated with the price book. This can be an external reference from a separate company system, for example. The maximum length is 2048 characters. |
| `type`                   | `string` | Always: `pricebook`                                                                                                                                                        |

## The `attributes` object

| Attribute                | Type | Description                                                                                                                                                                |
|:-------------------------| :--- |:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `name`                   | `string` | The name of the price book. Price books must have a unique name.                                                                                                           |
| `description` | `string` | The purpose for the price book, such as flash sale pricing or preferred customer pricing.                                                                                  |
| `created_at`  | `string($date-time)` | Generated value. The date and time when the price book was created.                                                                                                        |
| `updated_at`  | `string($date-time)` | Generated value. The date and time when the price book was last updated.                                                                                                   |

## The `meta` object

| Name | Type | Description |
| :--- | :--- | :--- |
| `owner` | `string` | The product owner,  either `organization` or `store`. See [Organizations](/docs/organizations). |

## The `links` Object

As an API consumer, links are used to allow you to toggle between requests. 

| Name    | Type | Description                       |
|:--------| :--- |:----------------------------------|
| `first` | `string` | Always the first page.            |
| `last`  | `string` | `null` if there is only one page. |
| `self`  | `string` | Links to a specific price book.   |

## The `page` object

Many Commerce endpoints support [pagination](/guides/Getting-Started/api-overview/pagination).

| Name      | Type | Description                                 |
|:----------| :--- |:--------------------------------------------|
| `current` | `string` | The current page.                           |
| `limit`   | `string` | The maximum number of price books per page. |
| `total`   | `string` | The total number of price books.            |

## The `results` object 

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
