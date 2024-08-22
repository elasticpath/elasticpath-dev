---
title: 'November 28, 2023'
date: '2023-11-28'
tags:
  - Composer
  - Addresses
hide_blog_post_date: false
---

**MAJOR** Algolia – Full/Delta/Large Catalog Integration: Added three new flows to the integration and configured a webhook in Elastic Path Commerce Cloud to synchronize inventory when the corresponding option is enabled. This connects the **s****tock\_transaction.created** event to the **Single Entry Inventory UpdateObject to Algolia Direct** flow**.** Depending on the configuration, the flow retrieves either **available** or **total** inventory and sends the data to all Algolia indexes. There is an option to skip object creation if they do not already exist in that particular index. In version 58, a third flow is introduced to cache Algolia Mapping, refreshing on an **hourly** by default. This eliminates the need to fetch the mapping with every stock update.

**MINOR** When creating, updating, or retrieving an address, you can now see customer or account relationship details linked to that address. This is helpful for getting webhook payloads. For more information, see **[Addresses API](https://elasticpath.dev/docs/commerce-cloud/addresses/about-addresses-api)**[.](https://elasticpath.dev/docs/commerce-cloud/addresses/about-addresses-api)
