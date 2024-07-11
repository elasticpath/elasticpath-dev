---
title: Overview
nav_label: Overview
sidebar_position: 10
---

Single sign-on allows authentication with Commerce using an external authentication provider. Using an existing authentication provider allows for integration with company-specific or customizable authentication systems. In some cases, it can also simplify the log-in experience because they don’t need to remember another password.

Commerce supports two types of single sign-on users:

- End users, that is, customers of your store.
- Administrators, who can use single sign-on to log on to Commerce Manager.

When users need to authenticate, they are redirected to the single sign-on provider, which then communicates the result of the authentication process back to Commerce.

You can set up Commerce to allow single sign-on for end users, using the *OpenID Connect* standard.

:::note
When users authenticate using an external authentication provider, authentication details, such as username and password, are neither stored on nor sent through Commerce.
:::

## Authentication Realms

An authentication realm is a container that consists of the following:

- Users -  Represented by [User Authentication Info](/docs/authentication/single-sign-on/user-authentication-info-api/overview) objects
- Authentication profiles - Ways for the users to authenticate, such as one or more [OpenID Connect Profiles](/docs/authentication/single-sign-on/openid-connect-profiles-api/openid-connect-profiles-api-overview) or [Password Profiles](/docs/authentication/single-sign-on/password-profiles-api/overview.md)
- Mappings between users and authentication profiles - [User Authentication OpenID Connect Profile Info](/docs/authentication/single-sign-on/user-authentication-openid-connect-profile-api/openid-connect-profile-overview.md) or [User Authentication Password Profile Infos](/docs/authentication/single-sign-on/user-authentication-password-profiles-api/password-profile-overview.md)

Here's a domain diagram showing these relationships
![authentication realm](/assets/authentication-realm-domain.png)


Composable Commerce comes with three per-store pre-set realms:

- Buyer Organization. For customers: users who buy products from your store.
- Merchant Organization. For administrators: users who log in to Commerce Manager to modify the store’s settings or catalog.
- Account Management Realm. For account members: users who buy products from your store on behalf of accounts. Password profiles are only available for account management realm.

## Authentication Providers and Composable Commerce

Commerce supports many OpenID Connect compatible authentication providers. For more information, see [Requirements for Authentication Providers](/guides/How-To/Authentication/get-single-sign-on-account-management-token#requirements-for-authentication-providers).

## External Reference

- [What is OpenID?](https://openid.net/foundation/)
- [OpenID Connect standard](https://openid.net/connect/)

## Related Resources

- [Security](/docs/authentication/security)
