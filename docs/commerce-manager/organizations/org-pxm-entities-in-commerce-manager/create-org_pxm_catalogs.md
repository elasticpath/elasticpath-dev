---
title: Organization Catalogs 
nav_label: Organization Catalogs
nav_position : 5
---

Organizations and stores can create their own catalogs. A catalog contains the products available for sale in your organization and/or stores.

When creating a catalog, you must choose the:

- Hierarchies and nodes to include in the catalog. The hierarchies you choose determine the products that are included. You can also specify the order you want your hierarchies to display in a published catalog. You can order your hierarchies on a catalog-by-catalog basis.
- Price Books: prices for the products.

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

Any changes to organization-level catalogs are visible in your store when an organization catalog is republished.

1. Log into Commerce Manager as an Org Admin.
1. Select **Organizations**.
1. On the **Your organizations** page, select the organization you would like to manage from the list.
1. Go to **Product Experience Manager** > **Configurations** > **Catalogs**.
1. Click **Add Catalog**.
1. Enter the catalog's details.
2. Click **Hierarchy** to display a list of available hierarchies. You can select both organization and store level hierarchies.
1. Click **Add Price Book**. You can add up to 5 price books.
1. Click **Price Book** to display a list of available price books. You can select both organization and store level price books.
1. If you have multiple price books, you must specify a priority for your price books. Product prices are displayed in the catalog according to the priority of the price books. Enter the order of your price books in **Priority**, where the price book with the highest priority is listed first. You can specify any numbers that you want. For example, 1, 2, 3 or 100, 90, 80, and so on.
1. Select **Save**.
1. If you are publishing a catalog in a store that contains resources from an organization, you must enable the **Include Organization Resources in Catalog Publishes** checkbox. 

    1. Go to **SYSTEM** > **Store Settings**.
    2. Click **General Settings**.
    3. Select **PXM** from the list. 
    4. Select the **Include Organization Resources in Catalog Publishes** checkbox.

Your organization catalogs are automatically available to all the stores within your organization. 

![organization PXM catalogs](/assets/organization_catalog.png)

## Combining Organization & Store PXM Entities in Store Catalogs

In addition, your stores can create their own catalogs that contain a combination of organization and store products and price books.

If you want a combination of organization and store products, hierarchies and products, you can simply create a catalog in a store and select both organization and store hierarchies and price books.

If you want a store hierarchy to have a combination of organization and store products, then you must [duplicate the organization hierarchy](/docs/commerce-manager/product-experience-manager/hierarchies/duplicating) and assign a combination of organization and store products to the duplicated hierarchy.

If you are publishing a catalog in a store that contains resources from an organization, you must enable the **Include Organization Resources in Catalog Publishes** checkbox. See [General Settings in Commerce Manager](/docs/commerce-manager/settings/general-settings#updating-pxm-settings-to-publish-store-catalogs-containing-organizational-resources).
