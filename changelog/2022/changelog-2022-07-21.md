---
title: 'Changelog 2022-07-21'
date: '2022-07-21'
tags:
  - Promotions Standard
  - Commerce Manager
  - Personal Data Service 
---
**Major** You can now add exclude options under the `schema` object to exclude nodes and product SKUs for the following promotion types:
  - [Create a Cart Fixed Discount Promotion](/docs/api/promotions/promotions-standard-introduction)
  - [Create a Cart Percent Discount Promotion](/docs/api/promotions/promotions-standard-introduction)
  - [Create Fixed Discount Promotion for items](/docs/api/promotions/promotions-standard-introduction)
  - [Create Item Percent Discount Promotions](/docs/api/promotions/promotions-standard-introduction)

**Major** You can now define `target_nodes` under the `schema` object to include nodes for the promotion for [Create Fixed Discount Promotion for items](/docs/api/promotions/promotions-standard-introduction) and [Create Item Percent Discount Promotions](/docs/api/promotions/promotions-standard-introduction).

**Major** Added endpoints that allow to read and write Time-to-live (TTL) settings for logs. For more information, see [Logs Time-to-live (TTL) Settings](/guides/How-To/Personal-Data/set-logs-ttl).
