---
title: 'May 25, 2023'
date: '2023-05-25'
tags:
  - Organizations
  - Settings
hide_blog_post_date: false
---

**MINOR** When an organization creates a new currency or if there is a mismatch between the store currencies and organization currencies, you can now pass an empty request body on a store-level currency using the **[Update a Currency](https://elasticpath.dev/docs/pxm-pricebooks/currencies/currencies-api/update-a-currency#put-update-a-currency-by-id)** endpoint to invalidate the cache. This ensures that the store currencies are updated with the new organization currency.
