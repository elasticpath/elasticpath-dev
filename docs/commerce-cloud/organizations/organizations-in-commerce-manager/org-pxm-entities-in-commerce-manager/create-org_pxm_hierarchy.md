---
title: Organization Hierarchies
nav_label: Organization Hierarchies
nav_position : 3
---

Use hierarchies and nodes to group your products into categories and sub-categories.

For example, AllGoods can organize their products:

- by brand.
- create a collection for a particular distributor.
- an AllGoods distributor can create a collection that has a combination of AllGoods products and other products that they sell.

A hierarchy is a tree structure that consists of a root node with 1 or more parent nodes. Each parent node can also have one or more children nodes, and so on, creating a parent-child relationship between nodes.

A product can belong to multiple nodes in multiple hierarchies. If your store supports multiple languages, you can localize new and existing hierarchies and nodes.

When you create a catalog, you specify one or more hierarchies. Any products associated with those hierarchies are included in the catalog. When you publish a catalog, all products whose status are live appear in the catalog release. If you update a hierarchy to add, move, or delete nodes, you must republish the catalog for the changes to appear in the storefront. You can configure your hierarchies and nodes when configuring your products.

## Creating Hierarchies

A hierarchy is a tree structure that consists of a root node with one or more parent nodes. Each parent node can also have one or more children nodes, and so on, creating a parent-child relationship between nodes.

Create a hierarchy and then create the parent/child nodes.

1. Log into Commerce Manager as an Org Admin.
1. Select **Organizations**. 
1. On the **Your organizations** page, select the organization you would like to manage from the list.
1. You can either:

    - Go to **Product Experience Manager** > **Products** and click **All Products**.
    - Go to **Product Experience Manager** > **Configurations** and, click the **Hierarchy** tab.

1. Click **Add Hierarchy** or **Create new hierarchy**, depending on where you are in **Product Experience Manager**.
1. Enter the following information for a hierarchy:

   {% table %}
    * Name
    * Required
    * Description
    ---
    * Name
    * Required
    * The name of the hierarchy.
    ---
    * Description
    * Optional
    * A description of the hierarchy.
    ---
    * Slug
    * Optional
    * A slug for the hierarchy.
    {% /table %}

1. Click **Save**.

## Creating Parent/Child Nodes

A hierarchy is a tree structure that consists of a root node with one or more parent nodes. Each parent node can also have one or more children nodes, and so on, creating a parent-child relationship between nodes.

You must create a parent node first, then create your child nodes. 

1. You can either:

    - Go to **Product Experience Manager** > **Configurations** and, click the **Hierarchy** tab.
    - Go to **Product Experience Manager** > **Products** and click **All Products**.

1. To create:

    - parent nodes in a hierarchy, click the hierarchy.
    - child nodes in a parent node, click the parent node.

1. Click **Create new node** or **Create Child Node**, depending on where you are in **Product Experience Manager**.
1. Enter the following details for a node:

   {% table %}
    * Name
    * Required
    * Description
    ---
    * Name
    * Required
    * The name of the node. Names must be unique among sibling nodes in the hierarchy. Otherwise, a name can be non-unique within the hierarchy and across multiple hierarchies.
    ---
    * Description
    * Optional
    * A description of the node.
    ---
    * Slug
    * Optional
    * A slug for the node. Slugs must be unique among sibling nodes in the hierarchy. Otherwise, a slug can be non-unique within the hierarchy and across multiple hierarchies.
    ---
    * Weight
    * Optional
    * Enter a value to determine the order that nodes are displayed in your storefront. The node with the highest value is displayed first. The weight value must be greater than or equal to one. For example, 1, 2, 3, or 100, 90, 80, and so on.

      {% list type="checkmark" %}
       * If you don’t provide a weight, child nodes are displayed in the order they were last updated, with the most recently updated child node displayed first.
       * If you set a weight for only a few child nodes, the child nodes with a weight appear first and then other child nodes appear in the order they were last updated.
      {% /list %}
    ---
    * Locales
    * Optional
    * If you have activated any languages for your store:

      {% list type="checkmark" %}
       1. From the **Locale** list, select the language you want to use to localize your node details. You can activate and deactivate languages in Commerce Manager. You can activate a maximum of five languages. See [Using Locales in Commerce Manager](/docs/pxm/products/locales/locales).
       2. Add a localized node name and description.
      {% /list %}
   {% /table %}

1. Click **Create**.
1. Click and drag your nodes to a different hierarchy at any time to reorder your nodes, depending on your requirements.

The hierarchies and nodes that you create are automatically available to all the stores within your organization.

![organization PXM entity](/assets/org_label.png)

## Duplicating Organization Hierarchies in Stores

You can duplicate an existing hierarchy. This is useful because it enables you to quickly and easily create multiple hierarchies with the same node structure. Any nodes in the existing hierarchy are also created in the duplicated hierarchy. You can optionally specify whether you want products associated with the nodes in an existing hierarchy to be associated with the nodes in the duplicated hierarchy. In addition, you can duplicate an organization hierarchy at the store level. This is useful if you want a hierarchy to contain a mixture of organization products and store products.

During the duplication process, the product associations are maintained in the duplicated hierarchy. Once an organization hierarchy is duplicated, it belongs to the given store. A store Admin can then make changes to the duplicated hierarchy, as required.

1. Log into Commerce Manager as an Org Admin.
1. Select **Stores**.
1. On the **Stores** page, select the pencil icon beside the store you would like to manage from the list.
1. Once your store details are displayed, click **Save and go to store**. 
1. You can either:

    - Go to **Product Experience Manager** > **Products** and click **All Products**.
    - Go to **Product Experience Manager** > **Configurations** and, click the **Hierarchy** tab.

1. Click **...** beside the hierarchy you want to duplicate.
1. Click **Duplicate** or **Duplicate Hierarchy**, depending on where you are in **Product Experience Manager**.
1. (Required) In **Name**, enter a new name for the duplicated hierarchy.
1. (Optional) In **Description**, you can keep the existing description or enter a new description.
1. (Optional) Turn on the **Retain a products relationship** toggle to keep the products associated with the nodes in the existing hierarchy associated with the nodes in the duplicated hierarchy.
1. Click **Confirm** to save your changes.

      :::caution
      You must ensure that hierarchies in organizations and stores have unique SKUs. If a store product is created with a SKU that is already in use by an organization product, an error message is displayed. This helps maintain accurate inventory management and avoid potential conflicts between organization and store products.
      :::
      {% /list %}

3. Organize your store products in the duplicated [hierarchy](/docs/pxm/hierarchies/node-relationships-api/create-node-product-relationships).
4. Your duplicated hierarchy now belongs to the store.
