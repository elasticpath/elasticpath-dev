---
title: Organization Catalogs
nav_label: Organization Catalogs
nav_position : 24
---

Organizations and stores can create their own catalogs. A catalog contains the products available for sale in your organization and/or stores.

When creating a catalog, you must choose the:

- Hierarchies and nodes to include in the catalog. The hierarchies you choose determine the products that are included. You can also specify the order you want your hierarchies to display in a published catalog. You can order your hierarchies on a catalog-by-catalog basis.
- Price Books: prices for the products. Catalogs can use both organization level and store level price books.

In other words, a catalog contains the products, categories, and price information that is displayed in your storefront. Hence, catalogs contain the information used to organize products for navigation menus and search facets in your shopper experience.

In a multi-store management solution:

- You can create organization catalogs. Your organization catalogs are available for your stores to use.
- Your stores can create their own catalogs.
- Your stores can create catalogs that have a combination of organization products and store products.

For example, AllGoods sell their goods in 15 different countries in 25 different languages with 10 different currencies.

- AllGoods can create their products and publish them in organization catalogs that are automatically available to their stores.
- AllGoods distributors can publish store catalogs that combine AllGoods products with the other products that they sell.
- AllGoods stores in different regions can use the AllGoods catalogs, but use different product pricing to reflect their regional differences.

## Creating Organization Catalogs

You can choose to publish more than one catalog at a time. Commerce publishes up to two catalogs concurrently. You can continue to publish catalogs in your organization but the remaining catalog publishing jobs are queued until the last release is complete and so on, until all your catalogs are published.

Any changes to organization-level catalogs are visible in your store when an organization catalog is republished.

1. Generate a [client_credentials](/docs/authentication/Tokens/client-credential-token) access token using your organization's [application keys](/docs/authentication/application-keys/application-keys-overview).
1. Decide which hierarchies and price books you want to include in your catalog.
1. [Create your catalog](/docs/api/pxm/catalog/create-catalog).
1. Publish your catalog. See [Publish a Catalog](/docs/api/pxm/catalog/publish-release). Your organization catalog is automatically available to all your stores.

   If you are publishing a catalog in a store that contains resources from an organization, you must enable the **Include Organization Resources in Catalog Publishes** checkbox.

    1. Go to **SYSTEM** > **Store Settings**.
    2. Click **General Settings**.
    3. From the Select **PXM** from the list.
    4. Select the **Include Organization Resources in Catalog Publishes** checkbox.

1. (Optional) [Create catalog rules](/docs/api/pxm/catalog/create-rule) to determine which organization catalogs are displayed in your store. 

Any changes to organization-level catalogs are visible in your store when an organization catalog is republished.

## Combining Organization & Store Products in Store Catalogs

If you want a combination of organization and store products, hierarchies and products, you can simply create a catalog in a store and select both organization and store hierarchies and price books. 

If you want a store hierarchy to have a combination of organization and store products, then you must duplicate the organization hierarchy and assign a combination of organization and store products to the duplicated hierarchy.

1. Generate a `client_credentials` access token using your store's application keys.
1. [Duplicate an organization-level hierarchy](/docs/api/pxm/products/duplicate-hierarchy). Once a hierarchy is duplicated, it belongs to a store. You can make changes to it, depending on your requirements.
   * (Default) Maintain the organization products associated with the duplicated hierarchy.
   * Choose not to maintain the products associated with the duplicated hierarchy and create new product associations with the products in your store.
       * [Assign new products to multiple nodes](/docs/api/pxm/products/create-node-product-relationship).
       * [Dissociate products from multiple nodes](/docs/api/pxm/products/delete-node-product-relationships).

    :::caution
    You must ensure that hierarchies in organizations and stores have unique SKUs. If a store hierarchy is created with a SKU that is already in use by an organization hierarchy, an error message is displayed. 
    :::
1. [Create your catalog](/docs/api/pxm/catalog/create-catalog).
1. [Publish your store catalog](/docs/api/pxm/catalog/publish-release). 

   If you are publishing a catalog in a store that contains resources from an organization, in Commerce Manager, you must enable the **Include Organization Resources in Catalog Publishes** checkbox.

    1. Go to **SYSTEM** > **Store Settings**.
    2. Click **General Settings**.
    3. Select **PXM** from the list.
    4. Select the **Include Organization Resources in Catalog Publishes** checkbox.

1. (Optional) [Create catalog rules](/docs/api/pxm/catalog/create-rule) to determine which organization catalogs are displayed in your store. 
