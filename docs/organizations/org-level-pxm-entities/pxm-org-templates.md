---
title: Organization Templates
nav_label: Organization Templates
nav_position : 21
---

You can create templates for your products at both the organization and store level. Templates are a collection of attributes. Use attributes to define the characteristics of products in an organization or store or to provide an input for other purposes, such as Search Engine Optimization (SEO) or product specification. For example, a Book template might contain attributes, such as ISBN, Author, Number of pages, Year Published, or Condition (New/Used).

When a shopper searches for a specific item, attributes help stores to return the products that match the search criteria. For example, when a shopper searches for a large blue shirt, all shirts that are large and blue are returned as the search result.

Entries hold the pieces of data collected within the attributes. Here is an example of the Book template.

![template taxonomy](/assets/template_taxonomy.png)

Although, you can create product templates for both organizations and stores, stores can use organization templates for store-level products. This is useful, if you have an attribute that applies to all products in all stores. You can define the template once at organization-level and relate the template to all products across all your stores.

:::caution
- A Store Admin and Org Admin cannot create entries for the same product ID. In other words, a Store Admin cannot create an entry for a product if an Org Admin has already created an entry for the product.
- If a Store Admin creates or updates entries on an organization's template's attributes that have relationships with an organization's products, the entries do not appear on the organization's products.
:::

For example, AllGoods have a unique identifier for all their organization and store products. AllGoods can define a template for this attribute that can be applied to all their organization and store products.

To create templates in organizations:

1. Generate a [client_credentials](/docs/authentication/Tokens/client-credential-token) access token using your organization's [application keys](/docs/authentication/application-keys/application-keys-overview).
1. [Create your template](/docs/api/flows/create-a-flow).
1. [Create your attributes](/docs/api/flows/create-a-field).
1. [Create your entries](/docs/api/flows/create-an-entry).
1. [Relate](/docs/api/pxm/products/create-product-template-relationship) the template to all your organization and store level products.

