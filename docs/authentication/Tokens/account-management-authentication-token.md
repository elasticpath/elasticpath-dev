---
title: Account Management Authentication Token
nav_label: Account Management
sidebar_position: 4
---

Account Management authentication tokens are available for anyone using the [Account Management APIs](/docs/commerce-cloud/accounts/using-account-management-api/account-management-api-overview).

For each element in the list returned by the account member authentication API, a `token` value is returned. In order for a shopper to authenticate as the account, this value should be set as the `EP-Account-Management-Authentication-Token` header when calling Commerce. This header grants access to additional resources associated with the account, such as [carts](/docs/commerce-cloud/carts/account-cart-associations/account-cart-associations-overview), [orders](/docs/commerce-cloud/orders/orders-api/get-all-orders#parameters), [catalogs with associated rules](/docs/pxm/catalogs/catalog-rules), and [addresses](/docs/commerce-cloud/addresses/get-all-addresses).

The set of permissions available to a shopper using an Account Management Authentication token is documented in [Permissions](/guides/Getting-Started/authentication/Tokens/permissions#implicit-account-management-authentication-token).

For more information on implementing account management authentication tokens, see [Account Management Authentication Tokens](/docs/commerce-cloud/accounts/account-management-authentication/account-member-authentication-api-overview).
