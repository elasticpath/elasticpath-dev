---
title: 'December 18, 2023'
date: '2023-12-18'
tags:
  - Promotions Standard
  - Commerce Manager
hide_blog_post_date: false
---

**MAJOR** We have introduced a new field called **auto\_add\_free\_gift** into the **[Free Gift Promotion](https://elasticpath.dev/docs/commerce-cloud/promotions/promotion-management/create-free-gift-promotion)** type where free gifts are automatically added to the shopping cart for all the eligible products. For more information, see **[Promotions Overview](https://elasticpath.dev/docs/commerce-cloud/promotions/promotions-overview)** section. This feature is still a work in progress.

Additionally, in Commerce Manager, we have also introduced the **Automatically add free gift items to the cart** toggle to add free gifts automatically to the shopping cart. For more information, see **[Creating Free Gift Promotions](https://elasticpath.dev/docs/commerce-cloud/promotions/promotions-cm/item-level-promotions/free-gift-promotions)**.



June 21, 2023
-------------

**MAJOR** Builder, a new Elastic Path Commerce Cloud integration platform is now available. Builder enables you to quickly and easily build integrations to the other apps that you use. You can do this using the Elastic Path Commerce Cloud pre-built components. For more information, see **[Builder](https://elasticpath.dev/docs/composer/builder/overview)**.

**MINOR** Bug fix: Fixed a bug to stop prematurely removing detached products from nodes when bundles and base products are included in a release.

**MINOR** Bug fix: Fixed a bug to avoid prematurely removing child products as components when their base products are included in a release.

**MINOR** Improve performance when looking up nodes by **slug** filter.

June 19, 2023
-------------

**MINOR** Commerce Manager: When duplicating hierarchies, a new **Retain a products relationship** toggle allows you to keep the products associated with the nodes in the existing hierarchy, associated with the nodes in the duplicated hierarchy. For more information, see **[Duplicating Hierarchies](https://elasticpath.dev/docs/pxm/hierarchies/hierarchy#duplicating-hierarchies)**.

June 14, 2023
-------------

**MINOR** **Breadcrumb** metadata now includes the metadata for a parent product, in addition to the information specific to a child product. This is useful because it enables you to quickly and easily see which nodes a child product belongs to. For more information, see **[Understanding Breadcrumb Metadata for Child Products](https://elasticpath.dev/docs/pxm/catalogs/breadcrumbs#understanding-breadcrumb-metadata-for-child-products)**.

June 8, 2023
------------

**MINOR** Commerce Manager: A new **Has Node Assignment** product filter allows you to check which products are assigned to nodes. For more information, see **[Filtering Products](https://elasticpath.dev/docs/ep-pxm-products/pxm-products-commerce-manager/filter-products)**.

June 6, 2023
------------

**MAJOR** Commerce Manager: You can now curate your products in your nodes products lists. Product curation allows you to promote specific products within each node in a hierarchy, enabling you to create unique product collections in your storefront. For more information, see **[Curating Products](https://elasticpath.dev/docs/pxm/products/pxm-products-commerce-manager/curating-products)**.

**MINOR** Bug fix: Fixed a bug to stop building base products when the product is already part of a bundle.

June 5, 2023
------------

**MAJOR** You can now migrate all version 2 capabilities, for example, **Products, Extended Data, Brands,** and **Collections** to Product Experience Manager. For more information, see **[Elastic Path Commerce Cloud Legacy to PXM Catalogs Migration](https://elasticpath.dev/docs/integration-hub/store-management/catalogs-migration)**.

**MAJOR** Stores can use organization templates and fields. However, the store-level entries associated with an Organization template appears only at the store level. For more information, see **[PXM Product Templates Overview](https://elasticpath.dev/docs/pxm/products/extending-pxm-products/pxm-product-templates-api/pxm-product-templates-overview)** and **[Add Flow Entries to Add data for your Products](https://elasticpath.dev/docs/pxm/products/extending-pxm-products/add-custom-data-to-pcm-products#add-flow-entries-to-add-data-for-your-products)**.

May 31, 2023
------------

**MAJOR** You can now extend your PXM products in your organization using product templates. For more information, see **[Extending PXM products](https://elasticpath.dev/docs/ep-pxm-products/extending-pxm-products/extend-products-overview)**.

May 29, 2023
------------

**MINOR** Added a new endpoint to update the name of an application key. For more information, see **[Update an Application Key](https://elasticpath.dev/docs/commerce-cloud/authentication/application-keys/update-an-application-key)**.

May 26, 2023
------------

**MINOR** Improved performance when filtering customers by email domain. For more information, see **[Filtering](https://elasticpath.dev/docs/api-overview/filtering)**.

May 25, 2023
------------

**MINOR** When an organization creates a new currency or if there is a mismatch between the store currencies and organization currencies, you can now pass an empty request body on a store-level currency using the **[Update a Currency](https://elasticpath.dev/docs/pxm-pricebooks/currencies/currencies-api/update-a-currency#put-update-a-currency-by-id)** endpoint to invalidate the cache. This ensures that the store currencies are updated with the new organization currency.

May 24, 2023
------------

**MAJOR** As announced on May 10, 2023, only Org Admins will now have the permission to create stores in their Organizations. This change provides a more centralized and secure approach to store management. To create a new store, log into Commerce Manager, and go to **Organizations** to access all your stores from a single location. See **[Creating a New Store in Organizations](https://elasticpath.dev/docs/organizations/organizations-in-commerce-manager/home-page#creating-a-new-store-in-organizations)**. For more information, refer to our **[blog post](https://www.elasticpath.com/blog/introducing-organizations)** or watch a **[quick video](https://www.youtube.com/watch?v=u_8_XMVOlGQ)**. To access your organization, contact our support team by submitting a **[support ticket](https://signin.elasticpath.com/app/global_redirect/0oartsctk19qeAbkp357/login)**.

May 23, 2023
------------

**MINOR** You can now create invoices for Stripe customers from the **STORE** > **Invoicing** tab in Commerce Manager. For more information, see **[Create Invoices](https://elasticpath.dev/docs/payments/invoicing/create-invoices)**.

**MINOR** Commerce Manager: We now allow to add up to six decimal places for the discount percentage to be applied for **[Cart percent discount](https://elasticpath.dev/docs/promotions/promotions-cm/cart-level-promotions/cart-level-percentage-discount)** promotion and **[Item percent discount](https://elasticpath.dev/docs/promotions/promotions-cm/item-level-promotions/item-percentage-discount-promotions)** [](https://elasticpath.dev/docs/promotions/promotions-cm/item-level-promotions/item-percentage-discount-promotions)promotion.

May 19, 2023
------------

**MINOR** Bug fix: Fixed a bug causing some products updates to be delayed.

May 18, 2023
------------

**MINOR** Bug fix: Fixed a bug in the publishing pods.

**MINOR** Bug fix: Fixed **bread\_crumbs** for products attached to nodes with new parent nodes.

**MINOR** Bug fix: Fixed an issue where some price book entries were not deleted correctly.

May 16, 2023
------------

**MINOR** We have now set the validation for the percentage to be included to allow up to six decimal places for **[Cart percent discount](https://elasticpath.dev/docs/promotions/promotion-management/create-a-cart-percent-discount-promotion)** and **[Item percent discount](https://elasticpath.dev/docs/promotions/promotion-management/create-item-percent-discount-promotion)**. For more information, see **[Promotions](https://elasticpath.dev/docs/promotions/promotions-overview)**.
