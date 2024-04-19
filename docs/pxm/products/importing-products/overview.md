---
title: Overview
nav_label: Overview
sidebar_position: 10
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

You can use the Product Import API to:

- Add new products.
- Add new:

    - main image files. See [Using Main Image Files](#using-main-image-files).
    - custom data. See [Importing custom data](#importing-custom-data-flows).

- Make bulk updates to existing products, main image files, and custom data.

You cannot use product import to:

- Delete existing products.
- Import product bundles.

When you send a product import request, a job is created. Jobs are processed one at a time. You can continue to send product import requests, but those jobs are queued. In other words, Commerce looks for any jobs that have a status of PENDING and starts the job with the earliest created date. This process is repeated until all jobs are processed. See [Jobs](/docs/pxm/jobs-api/overview).

We recommend that you include the maximum allowed number of products in each `csv`file (for example, up to 50,000 rows or a file size of 50 megabytes, see [Characteristics of CSV Import File](/docs/pxm/products/importing-products/overview#characteristics-of-csv-import-files)) to minimize the number of files you submit. This helps prevent extended waiting times for processing jobs. 

## Characteristics of CSV Import Files

Product Import uses a [Comma Separated Values (CSV)](/docs/pxm/products/importing-products/product-importer-csv) file to import/update products, main image files, and custom extension data. 

- Each row in a `.csv` file represents a product you want to create/update. 
- Each file:
    - must not be larger than 50 megabytes. If a `.csv` file is larger than 50 megabytes, a `503 client read error` is displayed.
    - must not have more than 50,000 rows, including the header. If a CSV file exceeds 50,000 rows, an error is displayed, and the products are not imported.

    In other words, if you have a file with 50,000 rows that is larger than 50 megabytes, an error is displayed, and the products are not imported.
- If you want to create/update more than 50,000 products or your `.csv` file is larger than 50 megabytes, you must have a separate `.csv` file and import each `.csv` file one at a time.

## Using Main Image Files

You can use the main images that you have previously uploaded to Commerce and assign them to your products when importing products to Commerce. See [Comma Separated Values (CSV)](/docs/pxm/products/importing-products/product-importer-csv#using-main-image-files).

:::note
In Commerce Manager, you cannot add main image files without first creating a product. You must use [create a file](/docs/pxm/products/product-assets/create-a-file) to upload media without creating products.
:::

## Importing Custom Data (Flows)

You can also specify custom extension data in the CSV by specifying the flow `ID` or `slug` and the field `slug`. For example, `template:<flowSlug>:<fieldName>`. See [Comma Separated Values (CSV)](/docs/pxm/products/importing-products/product-importer-csv#importing-custom-data-flows).
