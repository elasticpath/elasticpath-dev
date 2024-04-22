---
title: Products Hierarchy in Commerce Manager
nav_label: Products Hierarchy in Commerce Manager
sidebar_position: 50
---

A hierarchy is a tree structure that consists of a root node with one or more parent nodes. Each parent node can also have one or more children nodes, and so on, creating a parent-child relationship between nodes.

A product can belong to multiple nodes in multiple hierarchies. When you create a catalog, you specify one or more hierarchies. Any products associated with those hierarchies are included in the catalog. 

If your store supports multiple languages, you can localize new and existing hierarchies and nodes.

The following example of *Elpa basketball shoe for men* shows different hierarchies and nodes that the product might be in:

- Brands > **Elpa**
- Shoppers > **Men**
- Shoes > Sports > **Basketball**

The root of a hierarchy specifies the aspect of the product data that the hierarchy displays. For example, root can be categories, brands, types, or manufacturers of the products. You cannot assign products to a root node.

A node in a hierarchy contains products grouped in a specific theme, such as a products from a specific brand. 

## Hierarchies and Catalog Releases

A catalog configuration includes one or more hierarchies of products. Any products associated with those hierarchies are included in the catalog. When you publish a catalog, all products whose status are `live` appear in the catalog release. If you update a hierarchy to add, move, or delete nodes, you must republish the catalog for the changes to appear in the storefront. You can configure your hierarchies and nodes when configuring your products. 

- See the nodes that products belong to.

    ![product tabs](/assets/product-tabs-gifs.gif)

- Create nodes and assign products to nodes.

   ![assign products](/assets/assign_node.gif)

## Creating Hierarchies

A hierarchy is a tree structure that consists of a root node with one or more parent nodes. Each parent node can also have one or more children nodes, and so on, creating a parent-child relationship between nodes.

Create a hierarchy and then create the parent/child nodes.  

1. You can either:

    - Go to **Product Experience Manager > Products** and click **All Products**.
    - Go to **Product Experience Manager > Configurations** and, click the **Hierarchy** tab.

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

   - Go to **Product Experience Manager > Configurations** and, click the **Hierarchy** tab.
   - Go to **Product Experience Manager > Products** and click **All Products**.
   
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
       * 
         If you don’t provide a weight, child nodes are displayed in the order they were last updated, with the most recently updated child node displayed first.
       * 
         If you set a weight for only a few child nodes, the child nodes with a weight appear first and then other child nodes appear in the order they were last updated.
      {% /list %}
    ---
    * Locales
    * Optional
    * If you have activated any languages for your store:
      {% list type="checkmark" %}
      1. From the **Locale** list, select the language you want to use to localize your node details. You can activate and deactivate languages in Commerce Manager. You can activate a maximum of five languages. See [Using Locales in Commerce Manager]( /docs/pxm/products/locales).
      2. Add a localized node name and description.
      {% /list %}
    {% /table %}

1. Click **Create**.
1. Click and drag your nodes to a different hierarchy at any time to reorder your nodes, depending on your requirements.

## Duplicating Hierarchies

You can duplicate an existing hierarchy. This is useful because it enables you to quickly and easily create multiple hierarchies with the same node structure.

When you duplicate a hierarchy, you can specify a new name and/or a new description for the duplicated hierarchy. All other attributes, such as slug and locales, stay the same.

Any nodes in the existing hierarchy are also created in the duplicated hierarchy. In addition, you can specify whether you want products associated with the nodes in an existing hierarchy to be associated with the nodes in a duplicated hierarchy. 

1. You can either:

   - Go to **Product Experience Manager > Configurations** and click the **Hierarchy** tab.
   - Go to **Product Experience Manager > Products** and click **All Products**.

1. Click the hierarchy you want to duplicate.
1. Click **Duplicate** or **Duplicate Hierarchy**, depending on where you are in **Product Experience Manager**.
1. (Required) In **Name**, enter a new name for the duplicated hierarchy.
1. (Optional) In **Description**, you can keep the existing description or enter a new description.
1. (Optional) Turn on the **Retain a products relationship** toggle to keep the products associated with the nodes in the existing hierarchy associated with the nodes in the duplicated hierarchy.
1. Click **Confirm** to save your changes. 

## Assigning Products to Nodes

You can assign products to hierarchies and their child nodes. This determines how the products are displayed in the shopping catalog of your storefront. For example, a Nike basketball shoe for men can be assigned to the following hierarchies and nodes:

- Brands > **Nike**
- Shoppers > **Men**
- Footwear > Sports > **Basketball**

You can assign products to nodes in the following ways:

- On the **Product Experience Manager > Configurations** page, you can assign multiple products to a hierarchy and its child nodes.
- On the **Product Experience Manager > Products** page, you can assign products to multiple hierarchies and their child nodes.

### Assigning products to a node

1. To add products to a node in a hierarchy, click the hierarchy.
2. In the **All Nodes** window, click a node.
3. In **Add SKUs**, enter a SKU number to search for a product.
    The product corresponding to the SKU number is displayed.
4. To add the product to the node, click **+** next to the product. The product is added to the node and displayed in the list of products associated with the node.

### Assigning products to multiple nodes

1. On the **Products** page, select appropriate products or apply a filter to select appropriate products. See [Filtering](/docs/commerce-cloud/api-overview/filtering).
2. Click the arrow next to the checkbox on the header row and then click **Assign to Nodes**.

    ![Assigning Nodes](/assets/assigning-nodes.png)

    :::note
    The **Assign to Nodes** option is only available once you have selected the checkboxes next to the specific products or applied a filter.
    :::

    The **Assign your Products to Nodes** window appears.  

3. Click the arrow next to the hierarchy and the child nodes that you want to assign to your products.

    ![Assign Products to Nodes](/assets/assign-products-to-nodes.png)
4. Select the checkboxes next to the nodes that you want to assign to the products.  
5. Click **Next**.  
6. Click **Confirm**.  

:::note
On the **Products** page, the hierarchies and their children nodes are displayed in a tabular format. Click the eye icon next to a node to view details of the products assigned to the node.
:::

### Dissociating products from multiple nodes

You can dissociate products from multiple hierarchies and their nodes.

1. On the **Products** page, select appropriate products or apply a filter to select appropriate products. See [Filtering](/docs/commerce-cloud/api-overview/filtering).
2. Click the arrow next to the checkbox on the header row and then click **Unassign from Node**.

    ![Dissociating from multiple nodes](/assets/Dissociation-from-nodes.png)

    The **Confirm your Unassignment** window appears.  

3. Click **Confirm**.

## Deleting hierarchies

When you delete a hierarchy, the hierarchy and all its descendant nodes are deleted from the database. The products that were associated with the hierarchy remain in the database and can be used with other hierarchies.

1. You can either:

   - Go to **Product Experience Manager > Configurations** and click the **Hierarchy** tab.
   - Go to **Product Experience Manager > Products** and click **All Products**.
   
1. Select the checkboxes of the hierarchies that you want to delete.
1. In the **Action** list, click **Delete**.

You can also click **...** next to a hierarchy and click **Delete** to delete that hierarchy.

:::caution
The updates in hierarchies do not appear in the storefront until you republish the affected catalog releases.
:::

## Deleting Parent/Child Nodes

When you delete a parent/child node, the parent/child node and all its descendant nodes are deleted from the database. The products that were associated with the parent/child node remain in the database and can be used with other hierarchies and parent/child nodes. If you want to keep the child nodes, change the parent for each child of the node you want to delete before deleting the node.

1. You can either:

   - Go to **Product Experience Manager > Configurations** and click the **Hierarchy** tab.
   - Go to **Product Experience Manager > Products** and click **All Products**.

1. Select the hierarchy that the parent/child nodes you want to delete belongs to.
2. Navigate to the node that you want to delete.
1. Select the checkboxes of the parent/child nodes that you want to delete.
1. In the **Action** list, click **Delete**.

You can also click **...** next to a parent/child node and click **Delete** to delete that parent/child node.

:::caution
The updates do not appear in the storefront until you republish the affected catalog releases.
:::

## Related Resources

- [Create a hierarchy](/docs/pxm/hierarchies/hierarchies-api/create-a-hierarchy)
- [Assign Multiple Nodes](/docs/pxm/products/ep-pxm-products-api/assign-nodes)
- [Dissociate Products from Multiple Nodes](/docs/pxm/products/ep-pxm-products-api/dissociate-multiple-products)

### Demos

{% youtube src="https://www.youtube.com/embed/4-ccMytvaNE" label="Understanding Hierarchies in Product Experience Manager" /%}
{% youtube src="https://www.youtube.com/embed/4FM4lvYtQSA" label="Configuring Hierarchies in Product Experience Manager" /%}
