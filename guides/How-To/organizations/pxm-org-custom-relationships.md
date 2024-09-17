---
title: Organization Custom Relationships
nav_label: Organization Custom Relationships
sidebar_position : 10
---

You can create custom relationships between products in Product Experience Manager, allowing you to link or associate your products in certain ways based on criteria of your choosing. These relationships help improve user experience, boost sales, and enhance product discoverability. You can create custom relationships in both the [Product Experience Manager API](/docs/api/pxm/products/product-experience-manager-introduction) and [Commerce Manager](/ui). For more information, see [Custom Relationships](/docs/partials/pxm/custom-relationships/croverview).

An organization can create up to 5 custom relationships. Organization products can be associated to organization products in organization custom relationships. Similarly, a store in an organization can create up to 5 custom relationships, and store products can be associated with store products in store custom relationships. Custom relationship in organizations and stores can have the same slug. However, when a store admin gets a custom relationship by specify a slug, only the store custom relationship is returned.

In addition, each store within an organization can access and use the organization's custom relationships and products. Furthermore, stores can also associate their custom relationships with organization-level products, even if those products are already associated to products in 5 custom relationships defined at organization level.

When different stores within an organization have their own products linked to the same organization-level product or custom relationship, each store will only see its own products and their specific associations with the organization-level product or relationship.

For more information, see [Organization and Store Entities](/guides/key-concepts/organizations/org-level-entities).

To create custom relationships in organizations:

1. Generate a [client_credentials](/docs/authentication/Tokens/client-credential-token) access token using your organization's [application keys](/docs/api/application-keys/application-keys-introduction).
1. [Create your custom relationship](/docs/api/custom-relationships/create-custom-relationship).
1. [Add a product to a custom relationship](/docs/api/custom-relationship/post-attach-custom-relationship).
1. [Associate your products](/docs/api/flows/create-an-entry) with the product you added to the custom relationship
1. [Publish](/docs/api/pxm/products/create-product-template-relationship) your catalog. Once you have created your custom relationships and attached and associated your products, these relationships are automatically available when you publish your catalogs. You can then program your storefront to dynamically display the custom relationships.

