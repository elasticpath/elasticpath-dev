---
title: Overview
nav_label: Overview
sidebar_position: 1
---

:::caution
The Jobs API is for Administrator use only. Do not use these endpoints on your customer-facing frontends.
:::

Several PXM endpoints function as jobs.

- product [import](/docs/pxm/products/importing-products/overview).
- product [export](/docs/pxm/products/exporting-products/export-products).
- price book [import](/docs/pxm/pricebooks/price-import/overview).
- [duplicating hierarchies](/docs/pxm/hierarchies/hierarchies-api/duplicate-a-hierarchy).
- [building child products](/docs/pxm/products/pxm-product-variations/build-pxm-variations).

When any of these endpoints are run, a job is automatically created. 

## Characteristics of Jobs

Jobs have the following characteristics:

- Jobs are asynchronous.
- Jobs have a different status, depending on where a job is in its lifecycle. See [Job Lifecycle](#job-lifecyle).
- Jobs include the data used when an endpoint is run. 
- Jobs report messages and/or errors to help you understand:

    - what changes a job implemented in Commerce.
    - the reasons for any failed jobs. 

See [Jobs API Overview](/docs/pxm/jobs-api/jobs-api-overview).

## Processing Jobs 

Jobs are processed one at a time. You can continue to send requests using endpoints that function as jobs, but those jobs are queued. In other words, Commerce looks for any jobs that have a status of PENDING and starts the job with the earliest created date. This process is repeated until all jobs are processed.

## Job Lifecycle

A job has the following lifecycle.

![job lifecycle](/assets/job-lifecycle.png)
