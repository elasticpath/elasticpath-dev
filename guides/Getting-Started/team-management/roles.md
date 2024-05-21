---
title: Store Roles
nav_label: Store Roles
sidebar_position: 10
---

Companies typically have multiple personas who have different responsibilities. These personas, which are called roles, need different functional and feature access to Commerce depending on their responsibilities.

Commerce supports the following roles and permissions:

- Basic: User does not have any permission assigned.
- Seller admin: User has permissions to modify every aspect of the store.
- Marketing/Sales: User has permissions to modify catalog and flows, but cannot change the store settings or customers.
- Support: User has permission to modify customers and orders only.
- IT Developer: User can only modify store settings.
- Promotions Manager: User has permission to modify promotions only.

The following table shows the access permissions associated with each store role:

| Area                   | Basic          | Seller Admin  | Marketing/Sales | Support       | IT/Developer  | Promotions Manager |
|:-----------------------|:---------------|:--------------|:----------------|:--------------|:--------------|:-------------------|
| Accounts               | ⛔️             | ✅            | ⛔️              | ✅            | ⛔️            | ⛔️               |
| Application Keys       | ⛔️             | ✅            | ⛔️              | ⛔️            | ✅            | ⛔️               |
| Billing                | ⛔️             | ✅            | ⛔️              | ⛔️            | ⛔️            | ⛔️               |
| Composer               | ⛔️             | ✅            | ⛔️              | ⛔️            | ✅            | ⛔️               |
| Customers              | ⛔️             | ✅            | ⛔️              | ✅            | ⛔️            | ⛔️               |
| Files                  | ⛔️             | ✅            | ✅              | ⛔️            | ⛔️            | ⛔️               |
| Flows                  | ⛔️             | ✅            | ✅              | ⛔️            | ✅            | ⛔️               |
| Orders                 | ⛔️             | ✅            | ⛔️              | ✅            | ⛔️            | ⛔️               |
| Personal Data Sets     | ⛔️             | ✅            | ⛔️              | ✅             | ✅           | ⛔️               |
| PXM                    | ⛔️             | ✅            | ✅              | ⛔️            | ⛔️            | ⛔️               |
| Promotions             | ⛔️             | ✅            | ✅              | ⛔️            | ⛔️            | ✅               |
| Store Settings         | ⛔️             | ✅            | ⛔️              | ⛔️            | ✅            | ⛔️               |

:::note
A role assigned to a user in a store is restricted to that store. The same user can have different roles in different stores.
:::

:::caution
For any Commerce store that is created before the release of roles service, all users in the store is set with the `Seller Admin` role.

For a production or enterprise Commerce store, please ensure that more than one user with a `Seller Admin` or `IT/Developer` role are invited and added to the store.
:::

## Related Resources

- [Organization Roles](/docs/organizations/organization_authentication)
