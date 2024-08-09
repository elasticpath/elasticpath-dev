---
title: 'Changelog 2022-09-07'
date: '2022-09-07'
tags:
  - Product Experience Manager
  - Promotions Standard
---
**Minor** New `bread_crumb_node` metadata in a catalog enables you to see the nodes that product and nodes are associated with. For more information, see [Catalogs](/docs/api/pxm/catalog).

**Minor** Fixed a bug where promotions were not applied when the currency of the item or cart does not match the currency of the promotion. When you apply the promotion, you will now get a promotion message indicating the currency mismatch. In this case, the promotion with the mismatched currency will be skipped, and any other applicable promotions will be applied. For more information, see [Add Promotion to Cart](/docs/api/promotions/promotions-standard-introduction).
