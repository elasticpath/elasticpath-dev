---
title: 'Removing manage_stock field, obtaining details of component products'
date: '2024-08-14'
tags: ['Product Experience Manager, Carts & Orders']
hide_blog_post_date: false
---

**MINOR** In Product Experience Manager, we have removed the `manage_stock` field from the response for the `Get all Products in a shopper catalog` endpoint. This field is still displayed in legacy catalog responses. For more information, see [Get all Products in a Shopper Catalog](/docs/api/pxm/catalog/get-by-context-all-products).

**MINOR** You can now obtain details of component products of configured bundles when making an `Add Product to Cart` request. For more information, see [Including resources](/docs/api/carts/manage-carts#including-resources).