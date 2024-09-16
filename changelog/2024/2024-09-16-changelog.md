---
title: 'Custom Field enhancements in Commerce Extensions'
date: '2024-09-116'
tags: ['Commerce Extensions']
hide_blog_post_date: false
---

**MINOR** Prior we had introduced the ability to model data with uniqueness constraints for string fields in Commerce Extensions, this can be further enhanced to be case-insensitive, that is, to take different cases into account for conflicts. For more information, see [Custom Fields](/docs/api/commerce-extensions/custom-fields#string-validation).

**MINOR** We have have introduced the ability to access Custom API Entries via a sluggable field by configuring a Custom Field for `use_as_url_slug`. This simplifies the process of updating records by allowing Custom API Entries to be referenced using a well-known attribute rather than auto-generated identifiers. For more information, see [Update Custom API Entries](https://elasticpath.dev/guides/How-To/commerce-extensions/create-a-multilocation-inventories-resource#update-custom-api-entries).