---
title: Connecting your Ionos Domain
nav_label: Connecting your Ionos Domain
sidebar_position: 80
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

1. After logging
   into [IONOS](https://my.ionos.com/?&utm_source=helpcenter&utm_medium=knowledge&utm_campaign=411&utm_term=&utm_content=deeplink&skipIntcpts=true)
   and going to the **Domains & SSL** section, click on the gear symbol under **Actions** and select **Manage Subdomains**.
2. Click the gear symbol under **Actions** and select **Manage Subdomains**.
3. Click the gear symbol under**Actions**and select DNS.
4. On this page, Click "Add Record, Select "CNAME" for the Record TypeEnter "www" in the hostname field
5. In the "point to" field enter the "Value"(found in Studio records), and click save (Repeat this process for all
   records).

:::note
Please reference this document
on [CNAME records](https://www.ionos.com/help/domains/configuring-cname-records-for-subdomains/configuring-a-cname-record-for-a-subdomain/)
and this document
on [A records](https://www.ionos.com/help/domains/configuring-your-ip-address/changing-a-domains-ipv4ipv6-address-aaaaa-record/)
from Ionos (1&1) and [contact the Ionos support team for extra help.](https://contact.ionos.com/)
:::

## Troubleshooting

If a \_\_\_ record with that host already exists, that means that this host is already present as a DNS record within
your Ionos account. Studio **cannot** advise on the deletion of records. (1) contact your technical manager for help in
deleting the issue-causing record(s) or (2) contact Ionos support for further help.


