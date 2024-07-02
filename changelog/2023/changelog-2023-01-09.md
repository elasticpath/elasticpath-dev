---
title: 'Build rules for variation builder, discounts on order details'
date: '2023-01-09'
tag: ['Product Experience Manager','Commerce Manager']
---
**Minor**
If you specified `build_rules` for a product, when using `Get all products` or `Get a product` endpoints, the `variations` attribute now lists the variation option IDs that you specified to include when building your child products. If no `build_rules` are specified, all the variation and variation options available for a product are displayed. If a product does not have any variations, then the `variations` attribute is not displayed. See [Build Child Products Using Variations](/docs/pxm/products/pxm-product-variations/build-pxm-variations).

**Minor**
Commerce Manager: We have made some improvements on how discounts are displayed on the **Order details** page. Additionally, a new **Discounts** field is now available on the **Order details** page to see the total discounts applied to the order. For more information, see **Order details** page in [Elastic Path Commerce Cloud Commerce Manager](https://euwest.cm.elasticpath.com/).
