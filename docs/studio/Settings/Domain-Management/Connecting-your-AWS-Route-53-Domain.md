---
title: Connecting AWS Route 53 Domain
nav_label: Connecting AWS Route 53 Domain
sidebar_position: 20
---

## Subscription note

If you're not on a paying plan you will not receive SSL or Root Domain Redirection. Due to this, you'll only see one DNS
record.

## This document has a prerequisite

You'll need to already have completed the steps in
our [custom domain configuration document](/docs/studio/Settings/Domain-Management/Setting-up-your-Custom-Domain).

With the 1-3 records you have within your Studio settings page, you'll follow these steps.

Here's a run-down of how we'll reference these records in a human-friendly way throughout this document:

| Record Name        | Record Type | Record Description                                                                                                     |
|--------------------|-------------|------------------------------------------------------------------------------------------------------------------------|
| WWW Record         | CNAME       | This record has a HOST of "www" and is named the www record since it hosts/establishes the hosting of your domain.     |
| Root Domain Record | A Record    | This record has a HOST of either nothing (blank) or "@" depending on your host. Within GoDaddy, you'll use "@."        |
| SSL Record         | CNAME       | This record has a HOST which begins with an underscore (\_) you'll need to verify the HOST and VALUE are both correct. |

1. Login and go to the [AWS Route 53 Dashboard](https://console.aws.amazon.com/route53/v2/hostedzones#) and select the
   hosted zone (domain) you'd like to connect to Studio.
2. Navigate to the Records tab within the hosted zone, and for each record click the "Create record" button and add the
   record name, type, and value per the records in your Studio account.
3. Under **Routing policy** select Simple routing, and click **Create records** to save the record.

If you need help, please
reference [this document](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/rrsets-working-with.html?icmpid=docs_console_unmapped)
from Amazon Web Services and [contact the AWS support team](https://console.aws.amazon.com/support/home?#/).

## Troubleshooting

If a \_\_\_ record with that host already exists, that means that this host is already present as a DNS record within
your AWS account. Studio **cannot** advise on the deletion of records. (1) contact your technical manager for help in
deleting the issue-causing record(s) or (2) contact AWS support for further help.


