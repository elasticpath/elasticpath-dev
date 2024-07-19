---
title: Jobs
nav_label: Jobs
sidebar_position: 50
---

Several tasks that you perform in Commerce Manager trigger a job. 

- product [import](/docs/commerce-manager/product-experience-manager/product-import/product-importer).
- product [export](/docs/commerce-manager/product-experience-manager/product-export/export-products-cm).
- price book [import](/docs/commerce-manager/product-experience-manager/pricebooks/pxm-pricebooks#importing-price-books-and-prices).
- [duplicating hierarchies](/docs/commerce-manager/product-experience-manager/hierarchies/duplicating).
- [building child products](/docs/commerce-manager/product-experience-manager/variations/assign-variations-build-child-products).

## Job Lifecycle

A job has the following lifecycle.

![job lifecycle](/assets/job-lifecycle.png)

By selecting **Activity**, you can view the status of your jobs in Commerce Manager. This enables you to see at a glance the status of your jobs, and to quickly and easily detect any potential problems.

![activity button](/assets/activity_button.png)

To view jobs in Commerce Manager:

1. Select **Activity** from anywhere in Commerce Manager.
2. From the **Activity Type** list, select **Jobs**.
  
    When you expand an individual job, the information that is displayed depends on the activity you performed. 

    ![product export job](/assets/product_export_job.png)

    Each job has the following information:

    - the unique Job ID generated when a job is created.
    - the date and time the job started.
    - the status of the job:

       - **PENDING** - Commerce has received the request but is currently busy processing other requests.
       - **STARTED** - Commerce has started processing the job.
       - **SUCCESS** - The job has successfully completed.
       - **FAILED** - The job has failed. See [Get job errors](/docs/api/pxm/products/get-job).

    In addition to the above information: 

    - For a **Price Book Import**, you can see the job duration.
    - For a **Product Export**, you can also download your export file.
