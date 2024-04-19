---
title: Overview
nav_label: Overview
sidebar_position: 10
---

:::caution
The Products Export API is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

The Export API allows you to make bulk updates to products in PXM. You might also export products for your personal requirements. 

Using the Export API builds a `.csv` file containing the product entries. A `.csv` file can contain up to 50,000 product entries. If you have more than 50,000 product entries, then another `.csv` file is created and so on, until all your products are exported. 

After the files are exported, you get a link to the location where the `.csv` files are stored. You can then make any changes to the product fields (modify product information, add main image files, and custom extension data) in your exported `.csv` files. See [Product Export CSV File](/docs/pxm/products/exporting-products/product-export-csv).

Once you are happy with your changes, you can import the updated `.csv` files using product import. See [Product Import/Bulk Update](/docs/pxm/products/importing-products/import-products).

## Characteristics of Exporting Products

- Product exports are an asynchronous operation. When you send a request to the Export API, it triggers an asynchronous job to build the `.csv` file containing the product entries.
- Jobs are processed one at a time. You can continue to send product export requests, but those jobs are queued. In other words, Commerce looks for any jobs that have a status of PENDING and starts the job with the earliest created date. This process is repeated until all jobs are processed. See [Jobs](/docs/pxm/jobs-api/overview).
- The Export API response includes a job resource. In the response, you can verify the job status; if the status is successful, the response includes a link to the location where the `.csv` file is stored. See [Product Export API](/docs/pxm/products/exporting-products/export-products).
- You cannot export product bundles.

:::caution
A single CSV file contains 10,000 rows, excluding the header. If you are exporting 50,000 products, the job endpoint response contains links to five `.csv` files; each `.csv` file including 10,000 products.
:::

## Exporting Custom Extension Data (Flows)

You might have specified custom extension data in a `.csv` file when you imported the products. These modifications are all exported. So, when you send a request to the Export API, the `.csv` file, included in the Job endpoint response, reflects any changes that you have made. For more information, see [Exporting Custom Data (Flows)](/docs/pxm/products/exporting-products/product-export-csv#exporting-custom-data-flows).

## Related Resources

- [Get a Job](/docs/pxm/jobs-api/jobs-api-overview)
- [Get all Jobs](/docs/pxm/jobs-api/get-all-jobs)
- [Get a Job error](/docs/pxm/jobs-api/get-a-job-error)
