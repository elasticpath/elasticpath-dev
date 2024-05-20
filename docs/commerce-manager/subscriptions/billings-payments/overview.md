---
title: Overview
nav_label: Overview
sidebar_position: 10
---

Elastic Path Subscriptions enables you to manage the billing and recurring payments associated with your customers subscriptions.

## Invoices

Invoices represent the amount a customer owes for a subscription. Elastic Path Subscriptions generates an invoice for every period in a subscription billing cycle. Invoices provide:

- an itemized list of goods and services provided by a subscription.
- the cost of a subscription.
- if applicable, any taxes.

Subscriptions automatically generates an invoice for each billing cycle and initiates payment using billing and payment runs.

### Invoice Lifecycle

The invoice lifecycle is described below.

1. When a subscription is created, an invoice for the first billing period is created. When a subscription is created as part of an order, the payment for the order covers the first billing period.
1. Subscription invoices are created by billing runs. The billing run identifies subscriptions that require a new invoice for their next billing period and creates them. At this point, invoices are marked as `outstanding`.
1. Invoices where `tax_required` is `true` will not have payment taken until a tax run has added the required tax to the invoice.
1. The payment run identifies invoices that are still outstanding and attempts to take payment for them. If the payment succeeds then the invoice is no longer outstanding. If the payment fails for any reason, then the invoice remains outstanding and is picked up by the next payment run to retry the payment.

## Billing & Payment

Billing, tax and payment runs function as jobs. There are three types of job:

- a billing run. Subscriptions generates an invoice when a billing run occurs. Billing runs generate invoices for the remaining billing cycles for each subscription. The invoice dates come from your plans. Billing runs are independent of payment runs.
- a tax run. Invoices where `tax_required` is `true` will not have payment taken until a tax run has added the required tax to the invoice.
- a payment run. The payment run identifies invoices that are `outstanding` and attempts to take payment for them. If the payment succeeds then the invoice is no longer `outstanding`. If the payment fails for any reason, then the invoice remains `outstanding` and is picked up by the next payment run to retry the payment.

Jobs can be triggered manually or scheduled. By scheduling billing and payment runs, you automate the process, reducing manual intervention and ensuring the jobs are run in a timely manner. See [Manage Schedules](/docs/subscriptions/billing-payments/manage-schedules).

### Characteristics of Billing & Payments Jobs

Billing and payment jobs have the following characteristics.

- Jobs are asynchronous.
- Billing and payment jobs work concurrently.
- Jobs have a different status, depending on where a job is in its lifecycle.
- Jobs report any errors to help you understand the reason for any failed jobs.
- Only one billing run and payment run is allowed per store at a time. Although billing and payments are constantly generated, the jobs are queued. Subscriptions looks for any jobs that have a status of PENDING and starts the job with the earliest created date. This process is repeated until all jobs are processed.

### Billing & Payments Jobs Lifecycle

A job can have the following status types:

- PENDING - Subscriptions has received the request but is currently busy processing other requests.
- STARTED - Subscriptions has started processing the job.
- SUCCESS - The job has successfully completed.
- FAILED - The job has failed.

