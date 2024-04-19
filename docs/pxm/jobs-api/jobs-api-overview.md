---
title: Jobs API Overview
nav_label: Jobs API Overview
sidebar_position: 2
---

:::caution
The Jobs API is for Administrator use only. Do not use these endpoints on your customer-facing frontends.
:::

The `jobs` endpoint displays the status of a number of endpoints that function as jobs, for example, product [import](/docs/pxm/products/importing-products/overview) and [export](/docs/pxm/products/exporting-products/export-products), and [duplicating hierarchies](/docs/pxm/hierarchies/hierarchies-api/duplicate-a-hierarchy).

## The `job` Object 

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `type` | Required | `string` | Always `pim-job`. |
| `id` | Required | `string` | A unique ID generated when a job is created. |
| `attributes` | Required | [`object`](#the-attributes-object) | The attributes that describe the job. |
| `meta` | Required | [`object`](#the-meta-object) | The attributes that make up the `meta` object. |

## The `attributes` object

{% table %}
* Name
* Type
* Description
---
* `completed_at`
* `string`
*  The date and time a job is completed.
---
* `created_at`
* `string`
*  The date and time a job is created.
---
* `started_at`
* `string`
*  The date and time a job is started.
---
* `status`
* `string`
* The status of the job.
  {% list type="checkmark" %}
  * `pending` - Commerce has received the request but is currently busy processing other requests.
  * `started` - Commerce has started processing the job.
  * `success` - The job has successfully completed.
  * `failed` - The job has failed. See [Get job errors](/docs/pxm/jobs-api/get-a-job-error).
  {% /list %}
---
* `type`
* `string`
* The job type.
  {% list type="checkmark" %}
  * `child-products`
  * `product-import`
  * `product-export`
  * `hierarchy-duplicate`
  * `price-import`
  {% /list %}
---
* `updated_at`
* `string`
* The date and time a job was updated.
{% /table %}

## The `meta` Object 

| Name             | Type | Description                                                                                 |
|------------------| --- |---------------------------------------------------------------------------------------------| 
| `request_id`     | `string` | *Applies to all job types*. A unique request ID is generated when a job is created.         |
| `copied_from`    | `string` | *Applies to `hierarchy-duplicate` job types*. The ID of the original hierarchy that you duplicated. |
| `hierarchy_id`   | `string` | *Applies to `hierarchy-duplicate` job types*. The duplicated hierarchy ID.                  |
| `file_locations` | `string` | If the job type is `product_export`, a link to the file is created when running a job          |
| `filter`         | `string` | The entities included in the job. For example, if the job type is `product-export`, the PXM products included in the export. |
