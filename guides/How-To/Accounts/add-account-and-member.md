---
title: Adding Accounts and Account Members
nav_label: Adding Accounts and Account Members
nav_position: 60
---

## Before you begin

Ensure that the user is signed into the store with appropriate seller permissions.

## Procedure

1. Get the authentication realm for accounts.

    For more information, see the [Get Account Authentication Settings](/docs/api/accounts/get-v-2-settings-account-authentication) section.

1. To specify the login process for users, add a profile to the account realm.

    You can choose to set up a [Password Profile](/docs/authentication/single-sign-on/password-profiles-api/overview) or an [OpenID Connect Profile](/docs/authentication/single-sign-on/openid-connect-profiles-api/openid-connect-profiles-api-overview). However, you might have to modify other settings, such as redirect link settings, to use an OpenID Connect Profile. For more information, see the [Create an OpenID Connect Profile](/docs/authentication/single-sign-on/openid-connect-profiles-api/create-an-oidc-profile) section.

1. Create one or more accounts.

    For more information, see the [Create an Account](/docs/api/accounts/post-v-2-accounts) section.

1. Register account members.

    Seller admin can register users to an the account realm by following the instructions in the [Creating a User Authentication Info](/docs/authentication/single-sign-on/user-authentication-info-api/create-a-user-authentication-info) section. After creating the user authentication info, seller admin can associate the user to a login profile by following the instructions in one of the following sections:

    - [Create a User Authentication OpenID Connect Profile Info](/docs/authentication/single-sign-on/user-authentication-openid-connect-profile-api/create-a-user-authentication-oidc-profile-info)
    - [Create a User Authentication Password Profile](/docs/authentication/single-sign-on/user-authentication-password-profiles-api/create-a-user-authentication-password-profile)

    :::note

    After the registration, you can view the user as an account member through the account member APIs. For more information, see the [Account Members](/docs/api/accounts/account-members) section.
    
    :::

1. Get the ID of the account member to add to the account using the [Get All Account Members](/docs/api/accounts/get-v-2-account-members) API endpoint.

1. Add the selected account member to the account membership.

    For more information, see the [Create an Account Membership](/docs/api/accounts/post-v-2-accounts-account-id-account-memberships) section.

After an account member is listed in an account membership, the user can shop on behalf of the account.

## Buy on behalf of an account

1. Authenticate the account member using the selected profile.

    Authenticate an account member by following the instructions in one of the following sections:

    - [Account member authentication API using OpenID Connect](/docs/api/accounts/post-v-2-account-members-tokens) section for OpenID Connect Profiles.
    - [Account member authentication API using username and password](/docs/api/accounts/post-v-2-account-members-tokens) section for password profiles.


1. From the list of accounts, select an account to use.

    You can use the `account-management-authentication-token` to check out on behalf of an account.

1. From the store, select products and add to the cart.
1. Checkout the cart and make the payment on behalf of the account.

    For more information, see the [Account Checkout](/docs/api/carts/checkout) section.

:::note

Sellers can use the buyer account ID and account member ID to search and filter the completed orders.

:::
