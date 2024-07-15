---
title: 'October 11, 2023'
date: '2023-10-11'
tags:
  - Promotions Standard
hide_blog_post_date: false
---
**MINOR** When extending the end date of an expired promotion with over 1000 codes, you will now receive an error response. In such cases, we recommend duplicating the promotion, allowing you to set the new end dates and create promotion codes as needed. For more information, see **[Update a Promotion](https://elasticpath.dev/docs/commerce-cloud/promotions/promotion-management/update-promotions#errors)****[.](https://elasticpath.dev/docs/commerce-cloud/promotions/promotion-management/update-promotions#put-update-a-promotion)**

**MINOR** Fixed a bug in the Fixed Bundle Discount promotion where, when a product's price was $0, the discount was still applied, resulting in a large unexpected value instead of $0.
