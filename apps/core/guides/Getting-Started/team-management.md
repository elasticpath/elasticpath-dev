---
title: Team Management / Store Roles
nav_label: Team Management
sidebar_position: 40
---

Companies typically have multiple personas who have different responsibilities. These personas, which are called roles, need different functional and feature access to Commerce depending on their responsibilities.

Commerce supports the following roles and permissions:

- Basic: User does not have any permission assigned.
- Seller admin: User has permissions to modify every aspect of the store.
- Marketing/Sales: User has permissions to modify catalog and promotions, but cannot change the store settings or customers.
- Support: User has permissions to modify orders, accounts and customers only.
- IT Developer: User has permissions to modify store settings only.
- Promotions Manager: User has permission to modify promotions only.
- eCommerce Admin: User has permissions to modify catalog, promotions, orders, accounts, and customers, but cannot change the store settings.

The following table shows the access permissions associated with each store role:

| Area                   | Basic          | Seller Admin  | Marketing/Sales | Support       | IT/Developer  | Promotions Manager |  eCommerce Admin |
|:-----------------------|:---------------|:--------------|:----------------|:--------------|:--------------|:-------------------|:-----------------|
| Accounts               | ⛔️             | ✅            | ⛔️              | ✅            | ⛔️            | ⛔️               | ✅               |
| Application Keys       | ⛔️             | ✅            | ⛔️              | ⛔️            | ✅            | ⛔️               | ⛔️               |
| Billing                | ⛔️             | ✅            | ⛔️              | ⛔️            | ⛔️            | ⛔️               | ⛔️               |
| Composer               | ⛔️             | ✅            | ⛔️              | ⛔️            | ✅            | ⛔️               | ⛔️               |
| Commerce Extensions     | ⛔️             | ✅            | ⛔️              | ⛔️            | ✅            | ⛔️               | ⛔️               |
| Customers              | ⛔️             | ✅            | ⛔️              | ✅            | ⛔️            | ⛔️               | ✅               |
| Files                  | ⛔️             | ✅            | ✅              | ⛔️            | ⛔️            | ⛔️               | ✅               |
| Flows                  | ⛔️             | ✅            | ✅              | ⛔️            | ✅            | ⛔️               | ✅               |
| Orders                 | ⛔️             | ✅            | ⛔️              | ✅            | ⛔️            | ⛔️               | ✅               |
| Personal Data Sets     | ⛔️             | ✅            | ⛔️              | ✅            | ✅            | ⛔️               | ✅               |
| PXM                    | ⛔️             | ✅            | ✅              | ⛔️            | ⛔️            | ⛔️               | ✅               |
| Promotions             | ⛔️             | ✅            | ✅              | ⛔️            | ⛔️            | ✅               | ✅               |
| Store Settings         | ⛔️             | ✅            | ⛔️              | ⛔️            | ✅            | ⛔️               | ⛔️               |
| Subscriptions          | ⛔️             | ✅            | ⛔️              | ⛔️            | ⛔️            | ⛔️               | ⛔️               |

:::note
A role assigned to a user in a store is restricted to that store. The same user can have different roles in different stores.
:::

:::caution
For any Commerce store that is created before the release of roles service, all users in the store is set with the `Seller Admin` role.

For a production or enterprise Commerce store, please ensure that more than one user with a `Seller Admin` or `IT/Developer` role are invited and added to the store.
:::

## Related Resources

- [Permissions](/docs/authentication/Tokens/permissions#breakdown-of-access-for-sellers)
- [Organization Roles](/docs/organizations/organization_authentication)
