---
title: 'Bulk delete tax items, capture payment after authorization, inventory bug fix'
date: '2023-02-06'
products: ['Cart','Payments','Inventory']
---
{% badge type="major" /%}
Added new endpoints to Bulk add tax items to cart and delete tax items from cart. For more information, see [Bulk Add Tax Items to Cart](/docs/commerce-cloud/carts/tax-items/bulk-add-tax-items) and [Bulk Delete Tax Items from Cart](/docs/commerce-cloud/carts/tax-items/bulk-delete-tax-items).

{% badge type="minor" /%}
You can now manually capture a transaction after a previously authorized payment. For more information, see [Capture a transaction](/docs/commerce-cloud/payments/transactions/capture-a-transaction#post-capture-a-transaction-manual).

{% badge type="minor" /%}
Fixed a bug where a product's inventory could be deallocated multiple times if an error occurred when a payment method is added, a payment is confirmed, or an order is cancelled, and if one product's inventory deallocation is failed.

{% badge type="minor" /%}
Performance improvements on checkout related to consuming promotions.
