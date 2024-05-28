---
title: Customer token
nav_label: Customer
sidebar_position: 3
---

A customer token provides access to the records of the customer. Use single sign-on or the email address and password of the customer to retrieve the [customer tokens](/docs/customer-management/customer-management-api/customer-tokens).  Use the `X-Moltin-Customer-Token` header and the implicit token to access the orders and the following APIs:

- [Get a Customer](/docs/customer-management/customer-management-api/get-a-customer)
- [Update a Customer](/docs/customer-management/customer-management-api/update-a-customer)
- [Get Customer Addresses](/docs/api/addresses/get-v-2-customer-addresses)
- [Get an Address](/docs/api/addresses/get-v-2-customer-address/get-an-address)
- [Create an Address](/docs/api/addresses/post-v-2-customer-address/create-an-address)
- [Update an Address](/docs/api/addresses/put-v-2-customer-address/update-an-address)
- [Get all Orders](/docs/api/carts/get-customer-orders)
- [Get an Order](/docs/carts-orders/orders/orders-api/get-an-order)
- [Get Customer Carts](/docs/carts-orders/carts/customer-cart-associations/get-customer-carts)
- [Create an Association between a Customer and a Cart](/docs/carts-orders/carts/customer-cart-associations/create-an-association)
- [Delete an Association Between a Customer and a Cart](/docs/carts-orders/carts/customer-cart-associations/delete-an-association)
- [Add Promotion to Cart](/docs/carts-orders/carts/cart-items/add-promotion-to-cart)

For more information on implementing customer tokens, see [Customer Tokens](/docs/customer-management/customer-management-api/customer-tokens).
