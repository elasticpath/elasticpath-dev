---
title: 'Added cart update event for tax operations on the cart, Added order number as a new optional field, Added Sluggable Custom Fields for Commerce Extensions'
date: '2024-09-23'
tags: ['Integrations', 'Carts', 'Orders', 'Commerce Extensions']
hide_blog_post_date: false
---

**MINOR** A `cart.updated` event is now emitted whenever any tax-related operation occurs on the cart, such as adding, updating, deleting, or performing bulk actions on [tax items](/docs/api/carts/tax-items). For more information, see [Observable Events](/docs/api/integrations/integrations-introduction#observable-events).

**MINOR** We have now introduced a new optional field, `order_number`, which serves as an alternative to the existing `order_id`. For Authorize.net transactions, `order_number` will be sent instead of the `order_id`, and will appear as the invoice number. For more information, see [Update an Order](/docs/api/carts/update-an-order).

**MINOR** We have added the ability to configure string Custom Fields for `use_as_url_slug`, allowing you to use the value of that Custom Field to access your Custom API Entry in a way that is well-known to your business. For more information, see [Update Custom API Entries](/guides/How-To/commerce-extensions/create-a-multilocation-inventories-resource#update-custom-api-entries).

Additionally, we have also added a checkbox in Commerce Manager to enable a Custom Field for use as the URL of entry record. See [Creating Custom Fields](/docs/commerce-manager/commerce-extension/commerce-extension-in-cm#creating-custom-fields).
