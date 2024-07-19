---
title: Overview
nav_label: Overview
sidebar_position: 10
---

A catalog can have one or more hierarchies of products. The hierarchies contain all the products that you want to display in your organization or store. For products to be included in a catalog, the products must:
[
- have a `live` status.
- be associated with nodes in the selected hierarchies. You can filter your products using the **Has Node Assignment** attributes to check that the products will be included in your catalog. See [Filtering Products](/docs/commerce-manager/product-experience-manager/Products/filter-products).

A catalog must have at least one price book associated with it. 

You can create multiple price books for different scenarios, such as seasonal sales, business versus retail customer pricing, and reward programs. You can configure your catalog to have up to 5 price books. If you have multiple price books, you must specify a priority for your price books. Product prices are displayed in the catalog according to the priority of the price books. Priority is a number and the price book with the highest number has the highest priority. 

When you publish a catalog, the products in the hierarchies appear in a catalog release. A catalog release provides a snapshot of product information taken at the time of publication.

If you make any changes to the hierarchies, the products in a hierarchy, or price books, you must republish your catalogs. The changes do not appear in the storefront unless a catalog is re-published.

You can have many catalogs available in a store. You can use catalog rules to specify when to display your catalogs. See [Configure Shopper Catalog Rules](/docs/commerce-manager/product-experience-manager/catalogs/catalog-rules).

## Catalog Releases

When you publish a catalog, the products in the hierarchies appear in a catalog release. A catalog release provides a snapshot of product information taken at the time of publication.  Depending on how many times you have published the catalog, the latest release and the two releases prior to the latest release are available. This is useful if you want to go back to an earlier version of a catalog or see the changes that have been made between releases. You can:

- use catalog rules to specify when to display your catalog releases. See [Configure Shopper Catalog Rules](/docs/commerce-manager/product-experience-manager/catalogs/catalog-rules).
- edit catalog releases. See [Editing catalog releases](##editing-catalog-releases).
- go back to an earlier release of a catalog. See [Deleting Catalog Releases](#deleting-catalog-releases).

## Creating Catalogs

### Before you begin

Create the products, hierarchies and price books you want to use in the catalog.

1. Go to **Product Experience Manager > Catalogs**. 
1. Click **Add Catalog**.
1. In **Name**, enter a name for the catalog.
1. (Optional) In **Description**, enter a description for the catalog.
1. In **Hierarchy**, select the hierarchies you want to add to the catalog. You can add more than one hierarchy to a catalog.
1. In **Price Books**, select a price book.

    :::note
    You cannot create a catalog without a price book.
    :::

1. (Optional) Your catalog can have up to 5 price books. This is useful, for example, if you want price books for seasonal sales, reward programs or different pricing for business and retail customers. Click **Add another Price Book**. 
1. If you have multiple price books, you must specify a priority for your price books. Product prices are displayed in the catalog according to the priority of the price books. Enter the order of your price books in **Priority**, where the price book with the highest priority is listed first. You can specify any numbers that you want. For example, 1, 2, 3 or 100, 90, 80, and so on.
1. Select the additional price book you want your catalog to use. 
1. Repeat steps 6-8 for each price book you want to add.

![price book stacking](/assets/pb-stacking.png)

1. Click **Save**.

## Publishing Catalogs

You must not publish a catalog before creating the catalog with the required settings. See [Creating Catalogs](#creating-catalogs). After publish, a catalog release is created, which displays the products in the storefront.

1. Go to **Product Experience Manager > Catalogs**.
1. Select a catalog. 
1. Click **Publish**.

You can also click **...** next to the catalog you want to publish and click **Publish**.

## Editing Catalogs 

If you make changes to a catalog, you must republish the catalog for the changes to appear in the storefront. You can:

- Edit your catalog details.
- Add/remove hierarchies.
- Add/remove price books.

You can edit product and hierarchy details from the **Edit Catalog** tab. If you make changes to a product or hierarchy's details, you are updating the product and hierarchy details for all subsequent catalogs. However, you can go back to a previous release of a catalog. See [Deleting Catalog Releases](#deleting-catalog-releases).

1. Go to **Product Experience Manager > Catalogs**.
1. Select a catalog. The **Edit Catalog** tab is displayed.
1. Edit the **Basic Information**, depending on your requirements.
1. In **Hierarchy**, add or remove the hierarchies you want.
1. In **Price Books**, add or remove the price books you want.
1. Select **Products List** to see a list of products displayed in this catalog. You can [filter](/docs/commerce-manager/product-experience-manager/Products/filter-products) the products. For example, if you are editing a product description, you can filter using the **Description** attribute.
1. Select the product you want to edit. If you make changes to a product's details, you are updating the product for all subsequent catalogs. However, you can go back to a previous release of a catalog. See [Deleting Catalog Releases](#deleting-catalog-releases).
1. Once you have finished editing your catalog, either click **Save** to save your changes or **Publish** to save and publish your catalog.

### Editing catalog releases

A catalog release provides a snapshot of product information taken at the time of publication. Depending on how many times you have published the catalog, the latest release and the two releases prior to the latest release are available. This is useful if you want to go back to an earlier version of a catalog or see the changes that have been made between releases. In addition, you can edit your:

- Catalog release details.
- Existing products details or add a new product if it is associated with a hierarchy displayed in the catalog.
- Existing hierarchy's details. 

If you make changes to a catalog release, you must republish the catalog for the changes to appear in the store front. 

You can go back to an earlier release of a catalog by [deleting](#deleting-catalog-releases) the latest release. 

:::note

If you want to add/remove hierarchies and price books you must [edit a catalog](#editing-catalogs).

:::

1. Go to **Product Experience Manager > Catalogs**.
1. Select a catalog. The **Edit Catalog** tab is displayed.
1. Select **Releases**. 
1. For the catalog release you want to view, select **Release Details**. The **Release Details** tab is displayed.
1. Select **Products List** to see a list of products displayed in the catalog release. You can only edit existing products or add a new product if it is associated with the hierarchy displayed in the catalog. If you make changes to a product's details, you are updating the product for all subsequent catalogs. However, you can go back to a previous release of a catalog. See [Deleting Catalog Releases](#deleting-catalog-releases).
1. Select **Hierarchies List** to see a list of hierarchies displayed in the catalog. You can only edit the existing hierarchies, you cannot associate a new hierarchy. If you make changes to a hierarchy's details, you are updating the hierarchy for all subsequent catalogs. However, you can go back to a previous release of a catalog. See [Deleting Catalog Releases](#deleting-catalog-releases).

## Deleting Catalogs

When you delete a catalog, the catalog configuration and all its releases are deleted. The hierarchies, products, and price books remain in the database. If the catalog is associated with any catalog rules, you must first update the catalog rules to remove the catalog.

- To delete a catalog, in the **Product Experience Manager > Catalogs** page, click **...** next to the catalog you want to delete and click **Delete**.
- To delete more than one catalog, select the checkbox beside the catalogs that you want to delete and click **Actions > Delete**.

### Deleting catalog releases

1. To delete a catalog release, select the catalog whose catalog release you want to delete. 
1. Select **Releases**. The latest release and the two releases prior to the latest release are displayed.
1. Select **Delete** on the release you want to delete. If you delete the latest release of a catalog, the catalog automatically goes back to the previous release. You are prompted to confirm you want to delete the release.
1. Select **Delete** to close the dialog and delete the catalog release.

## Demos

<iframe width="560" height="315" src="https://www.youtube.com/embed/4FM4lvYtQSA" title="Configuring Catalogs & Catalog Rules in Commerce Manager" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
