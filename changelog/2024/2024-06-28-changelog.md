---
title: 'support for HTTP Conditional Requests'
date: '2024-06-28'
tags: ['Product Experience Manager']
hide_blog_post_date: false
---

**MINOR** When using Custom APIs, we have introduced support for [HTTP Conditional Requests](https://developer.mozilla.org/en-US/docs/Web/HTTP/Conditional_requests), using the `If-Match` header. Clients can use these requests to implement safe concurrent updates to the same resource by multiple writers. For example, this is useful in inventory tracking, as it prevents lost updates and other data consistency issues with the inventory amounts. For more information, see [Update Custom API Entries](https://elasticpath.dev/guides/How-To/commerce-extensions/create-a-multilocation-inventories-resource#update-custom-api-entries).
