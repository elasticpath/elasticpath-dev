---
title: Overview
nav_label: Overview
sidebar_position: 1
---

You can define custom data fields for the resources that you use in your store or organization, such as adding more fields to the `customer` resource. You can also create new resources, such as a `wishlist` resource to support wishlists in your store. With Flows, you can apply Composable Commerce to almost any use case.

:::caution
In an organization, not all resources are available. See [Extend a resource](/docs/commerce-cloud/custom-data/custom-data-flows-api/custom-data-flows-api-overview#extend-a-resource) for a list of organization resources that can be extended.
:::

:::caution
If you store any sensitive Personal Identifiable Information (PII) or non-public data on your site, ensure that you do not use this data in flows to avoid potential access to the data. For more information, see [Permissions](/docs/commerce-cloud/authentication/Tokens/permissions).
:::

## Flows taxonomy

Fields and Entries are an integral part of Flows. A Flow describes a collection of Fields. A Field represents a single field of data. An Entry is a specific instance of a Flow, and is associated with a specific instance of an entity, such as a single product. Entries for core Flows (existing resources) are managed automatically for you.

In database terms, you can think of Flows as tables, Fields as columns, and Entries as database records.

## Scenarios

There are two scenarios for using Flows:

- Extend an existing resource, such as products, customers, and orders.
- Create a new resource, such as a blog, wishlist, or customer review.

### Extend an existing resource

The most common usage of the Flows API is to extend existing resources, such as `products`, `customers`, and `orders`. These types of resources are called core Flows and are handled differently than non-core Flows. For more information and a list of core Flows, see the [Custom Data (Flows) API](/docs/commerce-cloud/custom-data/custom-data-flows-api/custom-data-flows-api-overview) reference.

For example, you can extend the `products` resource to store custom data, such as a `manufactured_date` field for products. Or you might want to add a `color` field to store a string that contains a hexadecimal color to use when displaying the product on the user interface.

### Create a new resource

You can create new resources to support product reviews, want lists, blog articles, staff profile pages, and many more. These non-core Flows are referred to as custom Flows.

## Related resources

- [Products](/docs/pxm/products/pxm-products)
- [Customers](/docs/commerce-cloud/customer-management/customers)
- [Orders](/docs/commerce-cloud/orders/orders.md)
- [Integrations](/docs/commerce-cloud/integrations/integrations)
