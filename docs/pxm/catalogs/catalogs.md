---
title: Catalogs 
nav_label: Overview
sidebar_position: 10
---

:::caution
The Catalog API is for Administrator use only. Do not use these endpoints on your customer-facing frontends.
:::

A catalog contains the products available for sale either in your organization or a specific store. A catalog also contains information about how to organize those products for navigation menus and search facets in a shopper experience.

Before you create a catalog you must define the following resources:

- Hierarchies: hierarchies and nodes to categorize the products.
- Products: product information, associated assets, and links to hierarchy nodes.
- Price Books: prices for the products associated with the hierarchies.

A catalog is a combination of hierarchies and a price book.

## Lifecycle of Catalogs

Here are some pointers to understand catalogs' lifecycle:

- When a catalog is published, a catalog release is created.
- The defaut catalog is always the oldest published catalog that must have have at least one release.
- At any time, the most recent three catalog releases can be maintained. Hence, if there is a fourth catalog release, the first catalog release is automatically removed.
- Until the catalog is published again, the previously created three catalog releases stay permanently.
- If you want any other catalog to become the default option, you must create a catalog rule.
- If you want the oldest published catalog to become the default option, you must remove the catalog rule.

Here is a diagram that reiterates the catalogs' lifecycle:

![Catalogs' Lifecycle](/assets/catalog-lifecycle.png)

## Hierarchies

The hierarchies determine which products appear in the catalog, that is, only the products that are associated with the selected hierarchies are included in the catalog. You can also specify the order you want your hierarchies to display in a published catalog. You can order your hierarchies on a catalog-by-catalog basis.

![Hierarchy_sorting](/assets/hierarchy_sorting.png)

For more information, see [Update a Catalog](/docs/pxm/catalogs/catalog-configuration/update-a-catalog).

## Understanding How Products And Nodes Are Associated

You can use `breadcrumb` metadata to understand how products and nodes are associated. This is useful if you want to improve how your shoppers search your store. See [Product and Node Associations](/docs/pxm/catalogs/breadcrumbs).

## Product Types

Commerce automatically assigns types to the products you create. Product types can be used in catalogs. For example, in your catalog, you can filter on `parent` so that only your parent products are displayed in your storefront. See [Product Types](/docs/pxm/products/pxm-products#product-types).

## Pricebooks

A price book contains the prices for each of the products in the catalog. You can create multiple price books for different scenarios, such as seasonal sales, business versus retail customer pricing, and reward programs. When creating a catalog, you can specify up to five price books. You must set a priority for your price books. Product prices are displayed in the catalog according to the priority of the price books. See [Create a catalog](/docs/pxm/catalogs/catalog-configuration/create-a-catalog).

## Publishing catalogs

When you publish a catalog, the `live` products in the hierarchies appear in a catalog release. A catalog release provides a snapshot of product information taken at the time of publication. You can have one or more catalog releases available in your organization or in your store. If you publish a catalog for your organization, the catalog is available when the store is launched.

If you have more than one catalog published for your store, use catalog rules to specify when to display each catalog. For example, you can use [catalog rules](/docs/pxm/catalogs/catalog-rules) to schedule a catalog to appear during a particular date and time, such as a seasonal catalog. The catalog may have different pricing than the other catalogs. You can have multiple published catalogs.

When a catalog is ready to be used in a store, you publish it. You can create and publish catalogs for different contexts and channels. You can see the differences between the last two consecutive catalog releases. See [Publish a catalog](/docs/pxm/catalogs/catalog-release-admin/publish-a-catalog).

You retrieve catalogs for your shopper experience by using the [Catalog View API](/docs/pxm/catalogs/catalog-latest-release/overview).

## Related Resources

- [Products](/docs/pxm/products/pxm-products)
- [Hierarchies](/docs/pxm/hierarchies)
- [Price Books](/docs/pxm/pricebooks/price-books)

### Demos

{% youtube src="https://www.youtube.com/embed/Oz3DHrcmKrQ" label="Understanding Catalogs in Product Experience Manager" /%}

