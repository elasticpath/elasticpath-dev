---
title: 'Algolia integration upgrade, jsonl batch streaming in Builder'
date: '2024-01-30'
tags: ['Composer','Composer']
hide_blog_post_date: false
---
**INTEGRATION HUB**: Released **Algolia - Full / Delta / Large Catalog** V62 (US) - V47 (EU): The component that splits catalog updates into batches has been updated to automatically split batches that result in a payload larger than 4,000,000 bytes into 2 batches. This helps to alleviate client occurrences of HTTP 413 errors that prevent successful indexing due to fluctuations in client product data size.

**BUILDER COMPONENT**: Released **jsonl-batch-steam** V6 (US & EU): The component that splits catalog updates into batches has been updated to automatically split batches that result in a payload larger than 4,000,000 bytes into 2 batches. This helps to alleviate client occurrences of HTTP 413 errors that prevent successful indexing due to fluctuations in client product data size.
