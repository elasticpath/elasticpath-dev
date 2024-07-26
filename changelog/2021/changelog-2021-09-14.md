---
title: 'Changelog 2021-09-14'
date: '2021-09-14'
tags:
  - Account Management
---
**Minor** Fixed a bug where [account members](/docs/api/accounts/account-members) were erroneously created for other [authentication realms](/docs/authentication/single-sign-on/authentication-realm-api/authentication-realm-api-overview) in the store instead of only for the authentication realm linked from [account authentication settings realm](/docs/api/accounts/account-authentication-settings). We also removed the erroneously created records.

**Minor** [Account members](/docs/api/accounts/account-members) now update details when the corresponding [user authentication info](/docs/single-sign-on/user-authentication-info-api) changes.
