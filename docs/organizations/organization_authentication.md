---
title: Organization Roles
nav_label: Organizations Roles
nav_position : 11
---

Organizations introduces the Org Admin role, providing enhanced management capabilities. As an Org Admin, you have the authority to:

- Manage all stores within your organization. 
- Grant Seller Admin permissions to specific stores.
- Add users to stores within your organization using an appropriate role.
- Add users to your Organizations as an Org Admin.
- Create and view only organization-level integrations.
- Access and review organization-level integration logs for detailed analysis. For more information on integration logs, see [Get Integration Logs](/docs/api/integrations/list-integration-logs).

Additionally, when selecting a store within an organization, Org Admins are automatically granted Seller Admin permissions for that store. This gives Org Admins comprehensive control and flexibility over an organization's stores and integrations.

Application keys are directly used to manage access to Organizations. For more information, see [Application Keys](/docs/authentication/application-keys/application-keys-overview).

The following table shows the API endpoint actions that are available for an Org Admin:

| Endpoints                                     | Read access | Write access |
|:----------------------------------------------|:------------|:-------------|
| `/application-keys`                           | ✅           | ✅            |
| `/currencies`                                 | ✅           | ✅            |
| `/files`                                      | ✅           | ✅            |
| `/hierarchies`                                | ✅           | ✅            |
| `/inventories`                                | ✅           | ✅            |
| `/pcm/products`                               | ✅           | ✅            |
| `/pcm/hierarchies`                            | ✅           | ✅            |
| `/pcm/pricebooks`                             | ✅           | ✅            |
| `/pcm/catalogs`                               | ✅           | ✅            |
| `/user-roles`                                 | ✅           | ✅            |
| `/variations`                                 | ✅           | ✅            |
| `/flows`                                      | ✅           | ✅            |

The following table shows the access permissions for an Org Admin Role in Commerce Manager.

| Area                  | Org Admin | 
|:----------------------|:----------|
| Stores                | ✅         |
| PXM                   | ✅         |
| Application Keys      | ✅         |
| Composer              | ✅         |
| Flows                 | ✅         |
| Organization Settings | ✅         |

## Related Resources

- [Application Keys](/docs/authentication/application-keys/application-keys-overview)
- [Create an Application Key](/docs/authentication/application-keys/create-an-application-key)
- [Store Roles](/guides/Getting-Started/team-management)
