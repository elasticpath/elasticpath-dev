---
title: Account Cart Associations
nav_label: Account Cart Associations
sidebar_position: 100
---

You can create associations between an account and one or more carts. Once cart associations are established for an account, those carts are accessible across any device. You can delete associations as required.

There are two ways to access the cart: with an [Account Management Authentication Tokens](/docs/api/accounts/post-v-2-account-members-tokens) and without one.

## With an Account Management Authentication token

These endpoints are for users who authenticated implicitly and require an Account Management Authentication token in the header to access the account cart associations APIs. For more information, see the [Authentication](/docs/authentication) documentation.

### Cart creation

Shoppers create carts and can use any of the carts that they created to checkout an order.

:::note
You can create a cart ID, name, and description for the cart. A name is mandatory for the cart, and ensure that the string length is greater than or equal to one. Use any symbol in the name and description. For cart ID, ensure that you follow the guidelines for safe characters. For more information about cart ID naming requirements, see [Safe Characters](/guides/Getting-Started/safe-characters).
:::

## Without an Account Management Authentication token

These endpoints are for users who use the client credentials token and do not require an account management authentication token in the header to access the account cart associations APIs. For more information, see the [Authentication](/docs/authentication) documentation.

This user acts as a system administrator and can call any account cart association operations for any account and cart.

## Error Codes

You might encounter the following response codes, depending on the scenario:

* `400` - `The type does not exist or is not listed as account` - Ensure that the type is `account` and is present.

* `403` - `Cannot associate more than one account`.

* `403` - `Account does not have the required permissions to fulfill this request`.

* `403` - `Invalid json payload` - Check JSON input. The request body must be an array `[]`. If the request body is an object, the error is generated.
