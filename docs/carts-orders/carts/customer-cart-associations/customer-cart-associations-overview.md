---
title: Customer Cart Associations Overview
nav_label: Customer Cart Associations Overview
sidebar_position: 1
---

You can create associations between a customer and one or more carts. After cart associations exist for a customer, those carts are accessible across any device. You can delete associations as required.

There are two ways to access the cart: with a `customer` token and without one.

## With a `customer` token

These endpoints are for users who authenticated implicitly and require a customer token in the header to access the customer cart associations APIs. For more information, see the [Authentication](/docs/authentication) documentation.

### Cart creation

Shoppers create carts and can use any of the carts that they created to check out an order.

:::note
You can create a cart id, name, and description for the cart. The cart requires a name. Ensure that the string length is greater than or equal to one. Use any symbol in the name and description. For cart id, ensure that you follow the guidelines for safe characters. For more information about cart id naming requirements, see [Safe Characters](/guides/Getting-Started/safe-characters).
:::

## Without a `customer` token

These endpoints are for users who use the Client Credentials Token and do not require a Customer token in the header to access the customer cart associations APIs. For more information, see the [Authentication](/docs/authentication) documentation.

This user acts as a system administrator and can call any customer cart association operations for any customers and carts.

## Error Codes

You might encounter the following response codes, depending on the scenario:

* `400` - `The type does not exist or is not listed as customer`. Ensure that the type is `customer` and is present.

* `403` - `Cannot associate more than one customer`.

* `403` - `Customer does not have the required permissions to fulfill this request`.

* `403` - `Invalid json payload`. Check JSON input. The request body must be an array `[]`. If the request body is an object, the error is generated.
