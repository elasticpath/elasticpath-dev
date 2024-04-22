---
title: Observable Events
sidebar_label: Observable Events
sidebar_position: 30
---

You can pass multiple observable keys to the `observes` field of the [integration object](/docs/commerce-cloud/integrations/integrations-api/overview#integration-object), or you can create individual events. You can use an array when you handle multiple webhooks at the same URL.

| **Entity/Resource**                                                                                                      | **Action** | **Observable Key** | **Availability Level - Store/Organization** |
|:-------------------------------------------------------------------------------------------------------------------------| :--- | :--- | :--- |
| [**Address**](/docs/commerce-cloud/addresses/about-addresses-api)                                                        | Created | `address.created` | Store |
|                                                                                                                          | Updated | `address.updated` | Store |
|                                                                                                                          | Deleted | `address.deleted` | Store |
| [**Account**](/docs/commerce-cloud/accounts/using-account-management-api/account-management-api-overview)                | Created | `account.created` | Store |
|                                                                                                                          | Updated  | `account.updated` | Store |
|                                                                                                                          | Deleted  | `account.deleted` | Store |
| [**Account Member**](/docs/commerce-cloud/accounts/using-account-members-api/overview)                                   | Created | `account-member.created` | Store |
|                                                                                                                          | Updated  | `account-member.updated` | Store |
|                                                                                                                          | Deleted  | `account-member.deleted` | Store |
| [**Account Membership**](/docs/commerce-cloud/accounts/using-account-membership-api/overview)                            | Created | `account-membership.created` | Store |
|                                                                                                                          | Updated  | `account-membership.updated` | Store |
|                                                                                                                          | Deleted  | `account-membership.deleted` | Store |
| [**Carts**](/docs/commerce-cloud/carts/carts.md)                                                                            | Updated | `cart.updated` | Store |
|                                                                                                                          | Deleted  | `cart.deleted` | Store |
| [**Currency**](/docs/pxm/currencies/currencies-api/currencies-api-overview)                                   | Created | `currency.created` | Store |
|                                                                                                                          | Updated | `currency.updated` | Store |
|                                                                                                                          | Deleted | `currency.deleted` | Store |
| [**Customer**](/docs/commerce-cloud/customer-management/customer-managment-api/customer-management-api-overview)         | Created | `customer.created` | Store |
|                                                                                                                          | Updated | `customer.updated` | Store |
|                                                                                                                          | Deleted | `customer.deleted` | Store |
| [**File**](/docs/pxm/products/product-assets/files-overview)                                                             | Created | `file.created` | Store |
|                                                                                                                          | Deleted | `file.deleted` | Store |
| [**Integration (events)**](/docs/commerce-cloud/integrations/integrations-api/overview)                                  | Created | `integration.created` | Store, Organization |
|                                                                                                                          | Updated | `integration.updated` | Store, Organization |
|                                                                                                                          | Deleted | `integration.deleted` | Store, Organization |
| [**One-Time Password Token Request**](/docs/commerce-cloud/authentication/single-sign-on/password-profiles-api/create-one-time-password-token-request) | Created | `one-time-password-token-request.created` | Store |
| [**Order Events**](/docs/commerce-cloud/orders/orders-api/orders-api-overview)                                           |
| `/checkout`                                                                                                              | Created | `order.created` | Store |
| `/orders/:id/payments`                                                                                                   | Updated | `order.updated`/`order.paid`. The event `order.paid` is triggered when the payment status is `paid`. The event `order.updated` is triggered when the order is captured, completed, refunded, anonymized, or updated. | Store |
| `/orders/:id`                                                                                                            | Fulfilled/Canceled | `order.fulfilled`/`order.cancelled` | Store |
| `/orders/:id/payments`                                                                                                   | Authorized | `order.authorized` | Store |
| `/orders/:id/transactions/:id/capture`                                                                                   | Paid/Captured | `order.paid`/ `order.updated`. The event `order.paid` is triggered when the order status is completed and captured, and the payment status is `paid`. The event `order.updated` is triggered when the order is captured, completed, refunded, anonymized, or updated. | Store |
| `/orders/:id/transactions/:id/refund`                                                                                    | Refunded | `order.refunded` | Store |
| [**Payment Gateway**](/docs/commerce-cloud/payments)                           | Updated | `payment-gateway.updated` | Store |
| [**Catalog**](/docs/pxm/catalogs/catalog-configuration/catalog-configuration-overview)                                   |
| [**Catalog releases**](/docs/pxm/catalogs/catalog-latest-release/overview)                                               | Created | `catalog-release.created` | Store, Organization |
|                                                                                                                          |  Updated | `catalog-release.updated` | Store, Organization |
|                                                                                                                          | Deleted | `catalog-release.deleted` | Store, Organization |
| [**Catalog rules**](/docs/pxm/catalogs/catalog-rules)                                                      | Created | `catalog-rule.created` | Store |
|                                                                                                                          | Updated | `catalog-rule.updated` | Store |
|                                                                                                                          | Deleted | `catalog-rule.deleted` | Store |
| [**Settings**](/docs/commerce-cloud/global-project-settings/settings-overview)                                           | Created | `settings.created` | Store |
|                                                                                                                          | Updated | `settings.updated` | Store |
| [**Stock Transaction**](/docs/pxm/inventories/get-a-product-stock-transaction)                                           | Created | `stock-transaction.created` | Store |
| [**Transaction**](/docs/commerce-cloud/payments/transactions/transactions-overview)                                      | Created | `transaction.created` | Store |
|                                                                                                                          | Updated | `transaction.updated` | Store |
| [**User Authentication Info**](/docs/commerce-cloud/authentication/single-sign-on/user-authentication-info-api/overview) | Created | `user-authentication-info.created` | Store |
|                                                                                                                          | Updated  | `user-authentication-info.updated` | Store |
|                                                                                                                          | Deleted  | `user-authentication-info.deleted` | Store |

:::note
Store-level events contain `store_id` and `org_id` whereas, organization-level events contain only `org_id`.
:::
    
    
