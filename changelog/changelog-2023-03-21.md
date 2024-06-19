---
title: 'Paypal Express, Payment cancelation'
date: '2023-03-21'
products: ['Payments']
---
{% badge type="minor" /%}  If `name` and `sku` for an item exceed the maximum length, that is `127`, we now truncate the exceeding strings while sending order-level items to the PayPal payment gateway. For more information, see [Implement PayPal Express Checkout](/docs/commerce-cloud/payments/payments-developer/implement-paypal-express-checkout).

{% badge type="minor" /%}  You can now cancel a transaction when an authorization is completed. For more information, see [Cancel a Transaction](/docs/commerce-cloud/payments/transactions/cancel-a-transaction).
