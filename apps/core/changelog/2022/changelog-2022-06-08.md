---
title: 'Changelog 2022-06-08'
date: '2022-06-08'
tags:
  - Addresses
  - Account Management
  - Product Experience Manager
  - Commerce Manager
---
**Major** Added `region` field to [addresses](/docs/api/addresses/addresses-introduction). You can now set required fields for addresses using settings [mandatory address fields](/docs/api/addresses/addresses-introduction)

**Major** You can now use `sort_order` to sort parent nodes in a hierarchy when creating and updating nodes. For more information, see [Create a hierarchy](/docs/api/pxm/products/create-hierarchy) and [Update a hierarchy](/docs/api/pxm/products/update-hierarchy).

**Major** Commerce Manager: You can now duplicate hierarchies if you have multiple hierarchies with a similar node structure. See [Product Hierarchy Configurations](/docs/api/pxm/products/hierarchies).

**Minor** Commerce Manager: You can now send and receive events in `CloudEvents` format. See [Integrations](/docs/commerce-manager/integrations/cm-integrations).

**Minor** Commerce Manager: You can now configure webhooks for addresses. See [Integrations](/docs/commerce-manager/integrations/cm-integrations).

**Minor** Commerce Manager: You can now see the date and time your products are created and updated in **Products**. See [Creating Products](/docs/commerce-manager/product-experience-manager/Products/create-products).
