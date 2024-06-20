---
title: Personal-Data Overview
nav_label: Personal-Data Overview
sidebar_position: 10
---

In Commerce, every change to a user’s personal data is logged.

Personal data sets are groups of data items that are related to each other. For example, customer, addresses, and authentication information. The contents of a personal data set is dynamic. Data items are attached to each other automatically as they are created or updated.

The API allows you to fetch these logs, including the list of related data items. In other words, the data items that belong to the same personal data set.

Log entries are kept in the system for a limited time. You can configure the retention period using the [Logs Time-to-live (TTL) settings](/docs/personal-data/logs-ttl-settings/logs-ttl-settings-overview) API. The default retention period is 365 days for production store types and 7 days for other store types.

## Personal Data Resource Types

Currently, personal data management is only enabled for the following entities.

| Entity type | Endpoint | Documentation |
| :-- | :-- | :-- |
| customer | `v2/customers/{id}` |[Customers](/docs/customer-management/customer-management-api/customer-management-api-overview) |
| account | `v2/accounts/{id}` |[Accounts](/docs/api/accounts/post-v-2-accounts) |
| account-member | `v2/account-members/{id}` |[Account Members](/docs/api/accounts/account-members) |
| account-membership | `v2/accounts/{accountId}/account-memberships/{id}`|[Account Memberships](/docs/api/accounts/account-membership) |
| address | `v2/customers/{customerId}/addresses/{id}`; `v2/accounts/{accountId}/addresses/{id}`|[Addresses](/docs/api/addresses/addresses-introduction) |
| user-authentication-info | `v2/authentication-realms/{realmId}/user-authentication-info/{id}` |[User Authentication Info](/docs/authentication/single-sign-on/user-authentication-info-api/overview) |
| user-authentication-oidc-profile-info | `v2/authentication-realms/{authenticationRealmId}/user-authentication-info/{userAuthenticationInfoId}/user-authentication-oidc-profile-info/{id}`|[User Authentication OIDC Profile Info](/docs/authentication/single-sign-on/user-authentication-openid-connect-profile-api/openid-connect-profile-overview) |
| user-authentication-password-profile-info | `v2/authentication-realms/{authenticationRealmId}/user-authentication-info/{userAuthenticationInfoId}/user-authentication-password-profile-info/{id}`|[User Authentication Password Profile Info](/docs/authentication/single-sign-on/user-authentication-password-profiles-api/password-profile-overview) |
| order | `v2/orders/{id}`|[Orders](/docs/api/carts/orders) |

