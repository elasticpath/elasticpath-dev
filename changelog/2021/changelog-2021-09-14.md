---
title: 'Changelog 2021-09-14'
date: '2021-09-14'
tags:
  - Account Management
---
**Minor** Fixed a bug where [account members](/docs/commerce-cloud/accounts/using-account-members-api/overview) were erroneously created for other [authentication realms](/docs/single-sign-on/authentication-realm-api/authentication-realm-api-overview) in the store instead of only for the authentication realm linked from [account authentication settings realm](/docs/commerce-cloud/authentication/account-authentication-settings). We also removed the erroneously created records.

**Minor** [Account members](/docs/commerce-cloud/accounts/using-account-members-api/overview) now update details when the corresponding [user authentication info](/docs/single-sign-on/user-authentication-info-api) changes.
