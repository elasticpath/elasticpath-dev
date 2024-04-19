---
title: Overview
nav_label: Overview
sidebar_position: 1
---

:::caution
The Price Book API is for Administrator use only. Do not use these endpoints on your customer-facing frontends.
:::

You can create and update product price books and prices in bulk, at both organization and store level, using the Price Book Import API. This is useful, for example, if you have a promotion and want to update 50,000 product prices. Rather than having to go to each price book and manually edit 50,000 prices, you can use the Price Book Import API to bulk update all your product prices at the same time, including setting different prices for different currencies.

You can create/update:

- price books.
- prices.
  - sales pricing for products and product bundles with SKUs.
  - volume pricing (tiers).

The following are not supported by the Price Book Import API:

- price modifiers
- SKUless bundles
- Bundle sale prices

The API uses a [JSONL](https://jsonlines.org/) file. The JSONL file can be compressed to a GZIP file. Here is an [example of a JSONL file](/assets/example_file_all.jsonl).

A file can include up to 50,000 objects. If you have more than 50,000 objects, then you must create a separate file, and import each file, one at a time.

## Characteristics of Price Book Import

The Price Book Import API reads the entire file and then creates/updates the price book objects. This means the price book objects can be in any order in the file.

Price book imports are asynchronous. When you send a request to the price book import API, it triggers an asynchronous job to create/update the price books and product prices. You can see the status of a job using [Get a job](/docs/pxm/jobs-api/get-a-job).

Jobs are processed one at a time. You can continue to send price book import requests, but those jobs are queued. In other words, Commerce looks for any jobs that have a status of PENDING and starts the job with the earliest created date. This process is repeated until all jobs are processed. See [Jobs](/docs/pxm/jobs-api/overview).

The API works on a "best endeavours" approach. In other words, the API does its best to create/update the price book objects based on the file that you provide. You can then use the results of the job to understand what objects the API created/updated and to troubleshoot any errors. See [Price Book Import API Results](#price-book-import-api-results).

Price book imports are processed sequentially in the order that you send your import API requests.

## Price Book Import Unique Identifiers

The API uses unique identifiers to identify the objects to be created/updated.

You must provide either an `id` or an `external_ref`. You may have both, but you must have at least one.

- If you supply an `id` then the ID must exist for the object to be updated. If the ID does not exist, this causes an error.
- If you supply an `external_ref` then the API checks if the external reference exists and updates the object. If the external reference does not exist, the API creates a new object with the external reference you have specified.
  
### Price book unique identifiers

The following table describes the unique identifiers you must provide, depending on whether you are creating or updating a price book.

{% table %}
* Action
* Unique Identifiers
---
* Creating
*
  {% list type="checkmark" %}
  * Unique price book name.
  * `external_ref` for the price book.
  {% /list %}
---
* Updating
* `id` and/or `external_ref` for the price book.
{% /table %}

### Price unique identifiers

The following table describes the unique identifiers you must provide, depending on whether you are creating or updating a price.

{% table %}
* Action
* Unique Identifiers
---
* Creating
*
  {% list type="checkmark" %}
  - SKU
  - `id` and/or `external_ref` for the price book where you want to create the new price.
  - `external_ref` for the price. The `external_ref` for a price must be unique within a price book. However, you can have duplicate price external references across multiple price books.
  {% /list %}
---
* Updating
*
  {% list type="checkmark" %}
  - SKU
  - `id` and/or `external_ref` for the price. The `external_ref` for a price must be unique within a price book. However, you can have duplicate price external references across multiple price books.
  {% /list %}
{% /table %}

<!-- ### Price modifier unique identifiers

The following table describes the unique identifiers you must provide, depending on whether you are creating or updating a price modifier.

{% table %}
* Action
* Unique Identifiers
---
* Creating
*
  {% list type="checkmark" %}
  - `id` and/or `external_ref` for the price book where you want to create the new price.
  - `external_ref` for the price modifier.
  {% /list %}
---
* Updating
* `id` and/or `external_ref` for the price modifier.
  {% /table %} -->
