---
title: 'Added cart.updated event for Tax Operations, Added order_number as a new optional field'
date: '2024-09-23'
tags: ['Integrations', 'Carts', 'Orders']
hide_blog_post_date: false
---

**MINOR** A `cart.updated` event is now emitted whenever any tax-related operation occurs on the cart, such as adding, updating, deleting, or performing bulk actions on [tax items](/docs/api/carts/tax-items). For more information, see [Observable Events](/docs/api/integrations/integrations-introduction#observable-events).

**MINOR** We have now introduced a new optional field, `order_number`, which serves as an alternative to the existing `order_id`. For Authorize.net transactions, `order_number` will be sent instead of the `order_id`, and will appear as the invoice number. For more information, see [Update an Order](/docs/api/carts/update-an-order).