---
title: Custom Data (Flows) API Overview
nav_label: Custom Data (Flows) API Overview
sidebar_position: 1
---

Use `flows` resource to extend an existing resource or to create a new resource.

:::caution
Custom names and values prefixed with `$` are not supported.
:::

For more information, see the [Custom data (Flows)](/docs/commerce-cloud/custom-data/custom-data-flows) section.

## Core and Non-core Flows

The following table describes the differences between core and non-core flows:

| Core Flows                                                    | Non-core Flows |
|:--------------------------------------------------------------|:-------------|
| Extend an existing resource.                                  | Create a new resource. |
| Entries managed automatically by Commerce. | Create and manage entries manually. |
| Requests are sent to the `fields` endpoint.                   | Requests are sent to the `entries` endpoint. |

:::note
You cannot delete core flows after creating them on API or Commerce Manager.
:::

## Extend a resource

Extending a resource applies only to core flows. When creating a new flow, make sure the `slug` matches that of a core resource listed in the following table.

| Flow slug                                   | Description                    | Availability Level |
|:--------------------------------------------|:-------------------------------| :---|
| `accounts`                                  | Extend the [`account`](/docs/commerce-cloud/accounts/using-account-management-api/account-management-api-overview#the-account-object) object. | Store |
| `account-members`                           | Extend the [`account-members`](/docs/commerce-cloud/accounts/using-account-members-api/overview#the-account-members-object) object. | Store |
| `account-memberships`                       | Extend the [`account-membership`](/docs/commerce-cloud/accounts/using-account-membership-api/overview#the-account-membership-object) object. | Store |
| `addresses`                                 | Extend the [`address`](/docs/commerce-cloud/addresses/about-addresses-api#the-address-object) object. | Store |
| `authentication-realms`                     | Extend the [`authentication-realms`](/docs/commerce-cloud/authentication/single-sign-on/authentication-realm-api/authentication-realm-api-overview#the-authentication-realm-object) object. | Store |
| `carts`                                     | Extend the [`carts`](/docs/commerce-cloud/carts/extend-cart-and-order-resources) object. | Organization/Store |
| `cart_items`                                | Extend the [`cart_item`](/docs/commerce-cloud/carts/cart-items/cart-items-overview#the-cart-item-object) object. | Organization/Store |
| `customers`                                 | Extend the [`customer`](/docs/commerce-cloud/customer-management/customer-managment-api/customer-management-api-overview#the-customer-object) object. | Store |
| `oidc-profiles`                             | Extend the [`oidc-profiles`](/docs/commerce-cloud/authentication/single-sign-on/user-authentication-openid-connect-profile-api/openid-connect-profile-overview) object. | Store |
| `order_items`                               | Extend the [`order_item`](/docs/commerce-cloud/orders/orders-api/order-items#the-order-item-object) object. | Organization/Store |
| `orders`                                    | Extend the [`order`](/docs/commerce-cloud/orders/orders-api/orders-api-overview#the-order-object) object. | Organization/Store |
| `password-profiles`                         | Extend the [`password-profiles`](/docs/commerce-cloud/authentication/single-sign-on/user-authentication-password-profiles-api/password-profile-overview) object. | Store |
| `products`                                  | Extend the [`product`](/docs/pxm/products/ep-pxm-products-api/pxm-products-api-overview#the-product-object) object. | Store |
| `promotions`                                | Extend the [`promotion`](/docs/commerce-cloud/promotions/promotion-management/promotion-management-overview). | Store |
| `user-authentication-info`                  | Extend the [`user-authentication-info`](/docs/commerce-cloud/authentication/single-sign-on/user-authentication-password-profiles-api/password-profile-overview) object. | Store |
| `user-authentication-oidc-profile-info`     | Extend the [`user-authentication-oidc-profile-info`](/docs/commerce-cloud/authentication/single-sign-on/user-authentication-openid-connect-profile-api/openid-connect-profile-overview) object. | Store |
| `user-authentication-password-profile-info` | Extend the [`user-authentication-password-profile-info`](/docs/commerce-cloud/authentication/single-sign-on/user-authentication-password-profiles-api/create-a-user-authentication-password-profile) object. | Store |
| `catalogs`                                  | Extend the [`catalog`](/docs/pxm/catalogs/catalog-configuration/catalog-configuration-overview) object. It will not extend the [`catalog-release`](/docs/pxm/catalogs/catalog-release-admin/get-all-releases-of-a-catalog) object. | Store |

## Add a new resource

Adding a new resource is applicable only to non-core (custom) flows.

## Resource structure

A [flow](/docs/commerce-cloud/custom-data/custom-data-flows-api/Flows) describes a collection of fields. It is named after the internal entity type you want to associate it with. For example, a flow with a slug of `products` applies to all product responses in your store.

A [field](/docs/commerce-cloud/custom-data/custom-data-flows-api/fields) represents a single field of data, such as `Product Rating`, that is applied to an entity. All fields have a type , such as `string`, `integer`, `boolean`, `date` or `relationship`, a default value, and an optional set of validation rules.

An [entry](/docs/commerce-cloud/custom-data/custom-data-flows-api/entries) is a specific instance of a flow, and is associated with a specific instance of an entity. For example, a single product. Use entries for custom flows (non-core) only.
