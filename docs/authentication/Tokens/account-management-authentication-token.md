---
title: Account Management Authentication Token
nav_label: Account Management
sidebar_position: 4
---

Account Management authentication tokens are available for anyone using the [Account Management APIs](/docs/api/accounts/post-v-2-accounts).

For each element in the list returned by the account member authentication API, a `token` value is returned. In order for a shopper to authenticate as the account, this value should be set as the `EP-Account-Management-Authentication-Token` header when calling Commerce. This header grants access to additional resources associated with the account, such as [carts](/docs/carts-orders/carts/account-cart-associations/account-cart-associations-overview), [orders](/docs/carts-orders/orders/orders-api/get-all-orders#parameters), [catalogs with associated rules](/docs/api/pxm/catalog/rules), and [addresses](/docs/api/addresses/get-v-2-account-addresses).

The set of permissions available to a shopper using an Account Management Authentication token is documented in [Permissions](/docs/authentication/Tokens/permissions#implicit-account-management-authentication-token).

For more information on implementing account management authentication tokens, see [Account Management Authentication Tokens](/docs/api/accounts/post-v-2-account-members-tokens).
