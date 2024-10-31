---
title: '"Deep linking" in Commerce Manager'
date: '2024-10-31'
tags: ['Commerce Manager', 'Core']
hide_blog_post_date: false
---

**MAJOR** We have introduced the ability to "deep link" in Commerce Manager

We have improved the way we handle organization and store switching. We now have the organization and/or store id stored the url, so you can easily share the url with others and they will be taken to the same organization and store you were in when you copied the url.

This does mean any bookmarks you have for say https://euwest.cm.elasticpath.com/products  will no longer work as expected because it doesn't have the store/organization id in the url. You should instead be redirected to the store selection page and once you select the store you will be taken to the correct page.