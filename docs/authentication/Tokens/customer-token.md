---
title: Customer token
nav_label: Customer
sidebar_position: 4
---

A customer token provides access to the records of the customer. Use single sign-on or the email address and password of the customer to retrieve the [customer tokens](/docs/customer-management/customer-management-api/customer-tokens).  Use the `X-Moltin-Customer-Token` header and the implicit token to access the orders and the following APIs:

- [Get a Customer](/docs/customer-management/customer-management-api/get-a-customer)
- [Update a Customer](/docs/customer-management/customer-management-api/update-a-customer)
- [Get Customer Addresses](/docs/api/customer-addresses/get-v-2-customer-addresses)
- [Get an Address](/docs/api/customer-addresses/get-v-2-customer-addresses)
- [Create an Address](/docs/api/addresses/get-v-2-account-address)
- [Update an Address](/docs/api/addresses/put-v-2-account-address)
- [Get all Orders](/docs/api/carts/get-customer-orders)
- [Get an Order](/docs/api/carts/get-an-order)
- [Get Customer Carts](/docs/api/carts/get-customer-carts)
- [Create an Association between a Customer and a Cart](/docs/api/carts/create-customer-cart-association)
- [Delete an Association Between a Customer and a Cart](/docs/api/carts/delete-customer-cart-association)
- [Add Promotion to Cart](/docs/api/carts/cart-merge#add-promotion-to-cart)

For more information on implementing customer tokens, see [Customer Tokens](/docs/customer-management/customer-management-api/customer-tokens).
