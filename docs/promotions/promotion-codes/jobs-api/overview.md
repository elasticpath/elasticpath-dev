---
title: Overview
nav_label: Overview
sidebar_position: 0.2
---

Use Jobs API to initiate a job within a promotion. Jobs operate asynchronously and have a different status based on their progress. The following are the job statuses:

- `pending`: Commerce has received the request but is currently busy processing other requests. 
- `processing`: Commerce has initiated processing the job.
- `completed`: The job is successfully completed.
- `failed`: The job has failed.
- `cancelling`: The job is currently in the process of being canceled. You need to wait for the cancellation process to complete. This occurs prior to the `cancelled` status. For example, if you cancel a big `code_generate` job, it may take some time for the cancellation to complete since part of the cancellation process involves deleting the generated codes.
- `cancelled` : The job request is canceled.

![Promotion Job Statuses Workflow](/assets/job_status_workflow.png)

## Characteristics of Jobs

- You can only initiate one job at a time within a promotion. If you want to run another job for the same promotion, you must wait until the previous job is `completed` or `failed`. However, you can create new jobs for different promotions even if there are `pending` jobs in other promotions.
- If you intend to manage promotions with more than 10,000 codes per promotion, we recommend [exporting codes](/docs/promotions/promotion-codes/jobs-api/export-codes) for viewing purposes instead of attempting to view them within Commerce Manager. This recommendation is made due to our enforced maximum page offset limit of 10,000. Altering the page_offset_limit value poses potential performance risks to the platform.
- A `code_generate` job is initiated even if the maximum allowable number of codes for the promotion has been reached. However, when processed, this job will fail. To view the status of this failed job, you can only do so by passing [GET Jobs](/docs/promotions/promotion-codes/jobs-api/get-jobs) request.
- A limited number of jobs can be processed at a time. Jobs are queued and processed sequentially, one after the other. You can expect a certain delay before job processing.
