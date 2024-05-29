---
title: Organization Products
nav_label: Organization Products
nav_position : 1
---

To create your organization entities, you can:

- create your products directly in your organization.
- import your products from your other company systems.

:::caution
You cannot migrate data between stores and organizations. In other words, you cannot export data from an Commerce store or organization and import the data into another Commerce store or organization.
:::

:::note
You must ensure that products in organizations and stores have unique SKUs. If a store product is created with a SKU that is already in use by an organization product, an error message is displayed. This helps maintain accurate inventory management and avoid potential conflicts between organization and store products.
:::

AllGoods have selected Commerce to support their multi-store needs. AllGoods decide to import products from their other company systems into their organization.

Once the products are available in Commerce, going forward, AllGoods can create all new products directly in Commerce.

In Commerce Manager, an Org Admin can manage entities in both organization and stores.

## Creating Organization Products

1. Log into Commerce Manager as an Org Admin.
1. Select **Organizations**.
1. On the **Your organizations** page, select the organization you would like to manage from the list.
1. You can select **Create Product** from **Task #1**, or go to **Product Experience Manager** > **Products**.
1. Select **Create New**. 
1. Add the [product Details](/docs/commerce-manager/product-experience-manager/Products/add-product-details).
1. You can either select **Save & Exit** or **Next** to create your [product categories](#creating-product-categories).

## Importing Products to Your Organization

1. Log into Commerce Manager as an Org Admin.
1. Select **Organizations**.
1. On the **Your organizations** page, select the organization you would like to manage from the list.
1. Go to **Product Experience Manager** > **Products**.
1. Select **Product Imports**.
1. Either drag your `.csv` file to the **Product Imports** tab or browse to the location of your `.csv` file and select **Import**. Your products are uploaded to your organization.
1. Select **All Products** to view your imported products.
1. You can either select **Save & Exit** or **Next** to create your [product categories](#creating-product-categories).

Your organization products are automatically available to all the stores within your organization.

![organization PXM product](/assets/org_products.png)

## Creating Organization Product Categories

Create product categories in Commerce using hierarchies and nodes. A hierarchy is a tree structure that consists of a root node with one or more parent nodes. Each parent node can also have one or more children nodes, and so on, creating a parent-child relationship between nodes.

You must create a parent node first, then create your child nodes. Each node can have one parent and multiple children.

1. You can either:

    - Select **Create new Hierarchy** from the **Hierarchies** tab, if you are creating a product.
    - Go to **Product Experience Manager** > **Configurations** > **Hierarchies**.
   
1. Create your [hierarchies](/docs/commerce-manager/product-experience-manager/hierarchies/creating_hierarchies).
1. Create your [parent/child nodes](/docs/commerce-manager/product-experience-manager/hierarchies/creating_nodes).
1. [Assign](/docs/commerce-manager/product-experience-manager/hierarchies/assigning-products) your products to your parent/child nodes.
1. You can either select **Save & Exit** or **Next** to create your [product templates](/docs/commerce-manager/Organizations/org-pxm-entities-in-commerce-manager/create-org_pxm_templates).

Your organization hierarchies are automatically available to all the stores within your organization.

![organization PXM hierarchy](/assets/org_hierarchy.png)






