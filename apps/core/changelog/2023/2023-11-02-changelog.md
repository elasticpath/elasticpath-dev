---
title: 'November 2, 2023'
date: '2023-11-02'
tags:
  - Product Experience Manager
  - Payments
hide_blog_post_date: false
---

**MAJOR** Some Product Experience Manager endpoints operate as jobs (for example, Product Import API). Now, jobs are processed one at a time. You can continue to send requests using endpoints that function as jobs, but those jobs are queued. In other words, Commerce looks for any jobs that have a status of **PENDING** and starts the job with the earliest created date. This process is repeated until all jobs are processed. For more information, see **[Jobs](https://elasticpath.dev/docs/pxm/jobs-api/overview)**.

**MINOR** We have introduced a new optional field called **automatic\_payment\_methods** to **[Elastic Path Payments Powered by Stripe](https://elasticpath.dev/docs/commerce-cloud/payments/paying-for-an-order/elastic-path-payments-stripe#authorization-or-purchase-post-pay-using-stripe-payment-element)** gateway as per Stripe's recommendation. When this field is enabled, it displays all the payment methods that are enabled from the Stripe dashboard.
