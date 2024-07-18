---
title: Permissions
nav_label: Permissions
sidebar_position: 5
---

Permissions are managed through tokens. There are two main token types available for use within your project.

- [Client credential token](/docs/authentication/Tokens/client-credential-token)
- [Implicit token](/docs/authentication/Tokens/implicit-token)

Account Management Authentication Tokens with an Implicit Bearer token are used to manage user interfaces with sensitive data that users may need to access or modify associated with an Account. Sensitive data might include orders, addresses, and account details.

- [Account management authentication token](/docs/authentication/Tokens/account-management-authentication-token)

Customer tokens can be used with an Implicit Bearer token to manage user interfaces that involve sensitive data a user may need to access or modify. Sensitive data might include orders, addresses, and customer details.

- [Customer tokens](/docs/authentication/Tokens/customer-token)

## Breakdown of Access (for shoppers)

The following tables show a breakdown of the API endpoint actions that are available to the implicit token.

### Implicit

| Endpoint                                     | Read access | Write access | Read access <br/>with Account Token | Write access <br/>with Account Token | Read access <br/>with Customer Token | Write access <br/> with customer token |
 |----------------------------------------------|-------------|--------------|--------------------------------|---------------------------------|---------------------------------|----------------------------------------|
| `/accounts`                                  | ⛔️          | ⛔️           | ✅️                             | ⛔️                              | ⛔️                              | ⛔️                                     |
| `/account-members`                           | ⛔️          | ⛔️           | ✅️                             | ⛔️                              | ⛔️                              | ⛔️                                     |
| `/account-membership`                        | ⛔️          | ⛔️           | ✅                              | ⛔️                              | ⛔️                              | ⛔️                                     |
| `/application-keys`                          | ⛔️          | ⛔️           | ⛔️                             | ⛔️                              | ⛔️                              | ⛔️                                     |
| `/authentication-realms`                     | ✅           | ⛔️           | ✅                              | ⛔️                              | ✅                               | ⛔️                                     |
| `/brands`                                    | ✅           | ⛔️           | ✅                              | ⛔️                              | ✅                               | ⛔️                                     |
| `/carts`                                     | ✅           | ✅            | ✅                              | ✅                               | ✅                               | ✅                                      |
| `/categories`                                | ✅           | ⛔️           | ✅                              | ⛔️                              | ✅                               | ⛔️                                     |
| `/checkout`                                  | ✅           | ✅            | ✅                              | ✅                               | ✅                               | ✅                                      |
| `/collections`                               | ✅           | ⛔️           | ✅                              | ⛔️                              | ✅                               | ⛔️                                     |
| `/currencies`                                | ✅           | ⛔️           | ✅                              | ⛔️                              | ✅                               | ⛔️                                     |
| `/customers`                                 | ⛔️          | ⛔️           | ⛔                              | ⛔                               | ✅                               | ✅                                      |
| `/files`                                     | ✅           | ⛔️           | ✅                              | ⛔️                              | ✅                               | ⛔️                                     |
| `/flows`                                     | ✅           | ⛔️           | ✅                              | ⛔️                              | ✅                               | ⛔️                                     |
| `/gateways`                                  | ⛔️          | ⛔️           | ⛔️                             | ⛔️                              | ⛔️                              | ⛔️                                     |
| `/integrations`                              | ⛔️          | ⛔️           | ⛔️                             | ⛔️                              | ⛔️                              | ⛔️                                     |
| `/inventories`                               | ✅           | ⛔️           | ✅                              | ⛔️                              | ✅                               | ⛔️                                     |
| `/jobs`                                      | ⛔️          | ⛔️           | ⛔️                             | ⛔️                              | ⛔️                              | ⛔️                                     |
| `/merchant-realm-mappings`                   | ⛔️          | ⛔️           | ⛔️                             | ⛔️                              | ⛔️                              | ⛔️                                     |
| `/orders`                                    | ⛔️          | ⛔️           | ✅                              | ⛔️                              | ✅                               | ⛔️                                     |
| `/orders/:id`                                | ⛔️          | ⛔️           | ✅                              | ⛔️                              | ✅                               | ⛔️                                     |
| `/v2/products`                               | ✅           | ⛔️           | ✅                              | ⛔️                              | ✅                               | ⛔️                                     |
| `/catalog/products`                          | ✅           | ⛔️           | ✅                              | ⛔️                              | ✅                               | ⛔️                                     |
| `/catalog/hierarchies`                       | ✅           | ⛔️           | ✅                              | ⛔️                              | ✅                               | ⛔️                                     |
| `/catalog/nodes`                             | ✅           | ⛔️           | ✅                              | ⛔️                              | ✅                               | ⛔️                                     |
| `/pcm/products`                              | ⛔️          | ⛔️           | ⛔️                             | ⛔️                              | ⛔️                              | ⛔️                                     |
| `/pcm/hierarchies`                           | ⛔️          | ⛔️           | ⛔️                             | ⛔️                              | ⛔️                              | ⛔️                                     |
| `/pcm/pricebooks`                            | ⛔️          | ⛔️           | ⛔️                             | ⛔️                              | ⛔️                              | ⛔️                                     |
| `/pcm/catalogs`                              | ⛔️          | ⛔️           | ⛔️                             | ⛔️                              | ⛔️                              | ⛔️                                     |
| `/promotions`                                | ⛔️          | ⛔️           | ⛔️                             | ⛔️                              | ⛔️                              | ⛔️                                     |
| `/settings`                                  | ⛔️          | ⛔️           | ⛔️                             | ⛔️                              | ⛔️                              | ⛔️                                     |
| `/settings/account-authentication-settings`  | ⛔️          | ⛔️           | ⛔️                             | ⛔️                              | ⛔️                              | ⛔️                                     |
| `/settings/customer-authentication-settings` | ⛔️          | ⛔️           | ⛔️                             | ⛔️                              | ⛔️                              | ⛔️                                     |
| `/settings/extensions`                       | ⛔️          | ⛔️           | ⛔️                             | ⛔️                              | ⛔️                              | ⛔️                                     |
| `/variations`                                | ⛔️          | ⛔️           | ⛔️                             | ⛔️                              | ⛔️                              | ⛔️                                     |

Note that you can only fetch data with live status.

## Breakdown of Access (for sellers)

The following tables show a breakdown of the API endpoint actions that are available to the client credentials token for each role.

### Seller admin

| Endpoint                                     | Read access | Write access |
|----------------------------------------------|-------------|--------------|
| `/accounts`                                  | ✅           | ✅            |
| `/account-members`                           | ✅           | ✅            |
| `/account-membership`                        | ✅           | ✅            |
| `/application-keys`                          | ✅           | ✅            |
| `/authentication-realms`                     | ✅           | ✅            |
| `/brands`                                    | ✅           | ✅            |
| `/carts`                                     | ✅           | ✅            |
| `/categories`                                | ✅           | ✅            |
| `/checkout`                                  | ✅           | ✅            |
| `/collections`                               | ✅           | ✅            |
| `/currencies`                                | ✅           | ✅            |
| `/customers`                                 | ✅           | ✅            |
| `/files`                                     | ✅           | ✅            |
| `/flows`                                     | ✅           | ✅            |
| `/gateways`                                  | ✅           | ✅            |
| `/integrations`                              | ✅           | ✅            |
| `/inventories`                               | ✅           | ✅            |
| `/jobs`                                      | ✅           | ✅            |
| `/personal-data/logs`                        | ✅           | ✅            |
| `/personal-data/personal-data-entries`       | ✅           | ✅            |
| `/merchant-realm-mappings`                   | ✅           | ✅            |
| `/orders`                                    | ✅           | ✅            |
| `/orders/:id`                                | ✅           | ✅            |
| `/v2/products`                               | ✅           | ✅            |
| `/catalog/products`                          | ✅           | ✅            |
| `/catalog/hierarchies`                       | ✅           | ✅            |
| `/catalog/nodes`                             | ✅           | ✅            |
| `/pcm/products`                              | ✅           | ✅            |
| `/pcm/hierarchies`                           | ✅           | ✅            |
| `/pcm/pricebooks`                            | ✅           | ✅            |
| `/pcm/catalogs`                              | ✅           | ✅            |
| `/promotions`                                | ✅           | ✅            |
| `/settings`                                  | ✅           | ✅            |
| `/settings/account-authentication-settings`  | ✅ ️          | ⛔            |
| `/settings/customer-authentication-settings` | ✅           | ⛔            |
| `/settings/extensions`                       | ✅           | ✅            |
| `/subscriptions`                             | ✅           | ✅            |
| `/user-roles`                                | ✅           | ✅            |
| `/variations`                                | ✅           | ✅            |

### Basic user

| Endpoint                               | Read access | Write access |
|----------------------------------------| --- | --- |
| `/accounts`                            | ✅️ | ✅️ |
| `/account-members`                     | ⛔️ | ⛔️ |
| `/account-membership`                  | ⛔️ | ⛔️ |
| `/application-keys`                    | ⛔️ | ⛔️ |
| `/authentication-realms`               | ⛔️ | ⛔️ |
| `/brands`                              | ⛔️ | ⛔️ |
| `/carts`                               | ⛔️ | ⛔️ |
| `/categories`                          | ⛔️ | ⛔️ |
| `/checkout`                            | ⛔️ | ⛔️ |
| `/collections`                         | ⛔️ | ⛔️ |
| `/currencies`                          | ✅️ | ⛔️ |
| `/customers`                           | ✅️ | ✅️ |
| `/files`                               | ⛔️ | ⛔️ |
| `/flows`                               | ✅️ | ⛔️ |
| `/gateways`                            | ⛔️ | ⛔️ |
| `/integrations`                        | ⛔️ | ⛔️ |
| `/inventories`                         | ✅ | ⛔️ |
| `/jobs`                                | ⛔️ | ⛔️ |
| `/personal-data/logs`                  | ⛔️ | ⛔️ |
| `/personal-data/personal-data-entries` | ⛔️ | ⛔️ |
| `/merchant-realm-mappings`             | ⛔️ | ⛔️ |
| `/orders`                              | ⛔️ | ⛔️ |
| `/orders/:id`                          | ⛔️ | ⛔️ |
| `/v2/products`                         | ⛔️ | ⛔️ |
| `/catalog/products`                    | ⛔️ | ⛔️ |
| `/catalog/hierarchies`                 | ⛔️ | ⛔️ |
| `/catalog/nodes`                       | ⛔️ | ⛔️ |
| `/pcm/products`                        | ⛔️ | ⛔️ |
| `/pcm/hierarchies`                     | ⛔️ | ⛔️ |
| `/pcm/pricebooks`                      | ⛔️ | ⛔️ |
| `/pcm/catalogs`                        | ⛔️ | ⛔️ |
| `/promotions`                          | ⛔️ | ⛔️ |
| `/settings`                            | ⛔️ | ⛔️ |
| `/settings/account-authentication-settings`  | ⛔️ | ⛔️ |
| `/settings/customer-authentication-settings` | ⛔️ | ⛔️ |
| `/settings/extensions`                 | ⛔️ | ⛔️ |
| `/subscriptions      `                 | ⛔️ | ⛔️ |
| `/user-roles`                          | ✅ | ⛔️ |
| `/variations`                          | ⛔️ | ⛔️ |

### Other Roles

| Endpoint                                     | MR | MW | SR | SW | IR  | IW  | PR | PW | eR | eW |
|----------------------------------------------|----|----|----|----|-----|-----|----|----|----|----|
| `/accounts`                                  | ⛔️ | ⛔️ | ✅️ | ✅️ | ⛔️  | ⛔️  | ⛔️ | ⛔️ | ✅  | ✅  |
| `/account-members`                           | ⛔️ | ⛔️ | ✅️ | ✅️ | ⛔️  | ⛔️  | ⛔️ | ⛔️ | ✅  | ✅  |
| `/account-membership`                        | ⛔️ | ⛔️ | ✅️ | ✅️ | ⛔️  | ⛔️  | ⛔️ | ⛔️ | ✅  | ✅  |
| `/application-keys`                          | ⛔️ | ⛔️ | ⛔️ | ⛔️ | ✅   | ✅   | ⛔️ | ⛔️ | ⛔️ | ⛔️ |
| `/authentication-realms`                     | ⛔  | ⛔  | ⛔️ | ⛔️ | ✅️  | ✅   | ⛔  | ⛔  | ⛔  | ⛔  |
| `/brands`                                    | ✅  | ✅  | ⛔️ | ⛔️ | ⛔️  | ⛔️  | ⛔  | ⛔  | ✅  | ✅  |
| `/carts`                                     | ⛔  | ⛔  | ⛔️ | ⛔️ | ⛔️  | ⛔️  | ⛔  | ⛔  | ⛔  | ⛔  |
| `/categories`                                | ✅  | ✅  | ⛔️ | ⛔️ | ⛔️  | ⛔️  | ⛔  | ⛔  | ✅  | ✅  |
| `/checkout`                                  | ⛔  | ⛔  | ⛔️ | ⛔️ | ⛔️  | ⛔️  | ⛔  | ⛔  | ⛔  | ⛔  |
| `/collections`                               | ✅  | ✅  | ⛔️ | ⛔️ | ⛔️  | ⛔️  | ⛔  | ⛔  | ✅  | ✅  |
| `/currencies`                                | ✅  | ⛔  | ✅️ | ⛔️ | ✅️  | ✅️  | ✅  | ⛔  | ✅  | ⛔  |
| `/customers`                                 | ⛔  | ⛔  | ✅️ | ✅️ | ⛔️  | ⛔️  | ⛔  | ⛔  | ✅  | ✅  |
| `/files`                                     | ✅  | ✅  | ⛔️ | ⛔️ | ⛔️  | ⛔️  | ⛔️ | ⛔  | ✅  | ✅  |
| `/flows`                                     | ✅  | ✅  | ✅️ | ⛔️ | ✅️  | ✅️  | ✅  | ⛔  | ✅  | ✅  |
| `/gateways`                                  | ⛔️ | ⛔️ | ⛔️ | ⛔️ | ✅️️ | ✅️️ | ⛔️ | ⛔️ | ⛔️ | ⛔️ |
| `/integrations`                              | ⛔  | ⛔  | ⛔️ | ⛔️ | ✅️  | ✅️  | ⛔  | ⛔  | ⛔  | ⛔  |
| `/inventories`                               | ✅  | ✅  | ⛔️ | ⛔️ | ⛔️  | ⛔️  | ⛔  | ⛔  | ✅  | ✅  |
| `/jobs`                                      | ⛔  | ⛔  | ⛔️ | ⛔️ | ⛔️  | ⛔️  | ⛔  | ⛔  | ⛔  | ⛔  |
| `/personal-data/logs`                        | ⛔️ | ⛔️ | ✅  | ✅️ | ✅   | ✅️  | ⛔️ | ⛔️ | ✅  | ✅  |
| `/personal-data/personal-data-entries`       | ⛔️ | ⛔️ | ✅  | ✅️ | ✅   | ✅️  | ⛔️ | ⛔️ | ✅  | ✅  |
| `/merchant-realm-mappings`                   | ⛔  | ⛔  | ⛔️ | ⛔️ | ✅   | ✅️  | ⛔  | ⛔  | ⛔  | ⛔  |
| `/orders`                                    | ⛔  | ⛔  | ✅  | ✅️ | ⛔️  | ⛔️  | ⛔  | ⛔  | ⛔  | ⛔  |
| `/orders/:id`                                | ⛔  | ⛔  | ✅  | ✅️ | ⛔️  | ⛔️  | ⛔  | ⛔  | ✅  | ✅  |
| `/v2/products`                               | ✅  | ✅  | ⛔️ | ⛔️ | ⛔️  | ⛔️  | ⛔  | ⛔  | ✅  | ✅  |
| `/catalog/products`                          | ✅  | ⛔️ | ⛔️ | ⛔️ | ⛔️  | ⛔️  | ⛔  | ⛔️ | ✅  | ⛔️ |
| `/catalog/hierarchies`                       | ✅  | ⛔️ | ⛔️ | ⛔️ | ⛔️  | ⛔️  | ⛔  | ⛔️ | ✅  | ⛔️ |
| `/catalog/nodes`                             | ✅  | ⛔️ | ⛔️ | ⛔️ | ⛔️  | ⛔️  | ⛔  | ⛔️ | ✅  | ⛔️ |
| `/pcm/products`                              | ✅  | ✅  | ⛔️ | ⛔️ | ⛔️  | ⛔️  | ✅  | ⛔  | ✅  | ✅  |
| `/pcm/hierarchies`                           | ✅  | ✅  | ⛔️ | ⛔️ | ⛔️  | ⛔️  | ✅  | ⛔  | ✅  | ✅  |
| `/pcm/pricebooks`                            | ✅  | ✅  | ⛔️ | ⛔️ | ⛔️  | ⛔️  | ⛔  | ⛔  | ✅  | ✅  |
| `/pcm/catalogs`                              | ✅  | ✅  | ⛔️ | ⛔️ | ⛔️  | ⛔️  | ✅  | ⛔  | ✅  | ✅  |
| `/promotions`                                | ✅  | ✅  | ⛔️ | ⛔️ | ⛔️  | ⛔️  | ✅  | ✅  | ✅  | ✅  |
| `/settings`                                  | ⛔  | ⛔  | ⛔️ | ⛔️ | ⛔️  | ⛔️  | ⛔  | ⛔  | ⛔  | ⛔  |
| `/settings/account-authentication-settings`  | ⛔️ | ⛔️ | ✅️ | ⛔️ | ✅️  | ⛔   | ⛔️ | ⛔️ | ✅  | ⛔️ |
| `/settings/customer-authentication-settings` | ⛔️ | ⛔️ | ✅️ | ⛔️ | ✅️  | ⛔   | ⛔️ | ⛔️ | ✅  | ⛔️ |
| `/settings/extensions`                       | ⛔️ | ⛔️ | ⛔️ | ⛔️ | ✅   | ✅️  | ⛔️ | ⛔️ | ⛔️ | ⛔️ |
| `/subscriptions`                             | ⛔️ | ⛔️ | ⛔️ | ⛔️ | ✅   | ✅️  | ⛔️ | ⛔️ | ⛔️ | ⛔️ |
| `/user-roles`                                | ✅  | ⛔  | ✅  | ⛔️ | ✅   | ✅️  | ✅  | ⛔  | ✅  | ⛔  |
| `/variations`                                | ✅  | ✅  | ⛔️ | ⛔️ | ⛔️  | ⛔️  | ⛔  | ⛔  | ✅  | ✅  |
