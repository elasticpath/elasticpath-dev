---
title: Hierarchies
nav_label: Overview
sidebar_position: 10
---

:::caution
The Hierarchy API is for Administrator use only. Do not use these endpoints on your customer-facing frontends.
:::

Use hierarchies to organize your products into categories and sub-categories. Define hierarchies that work for the products in your store.

A hierarchy is a tree structure that consists of a root node with 1 or more parent nodes. Each parent node can also have one or more children nodes, and so on, creating a parent-child relationship between nodes. 

A product can belong to multiple nodes in multiple hierarchies. 

![Hierarchy Nodes](/assets/heirarchynodes.png)

- Sibling nodes are nodes with the same parent. Sibling nodes must have unique names and unique slugs.
- Nodes that are in different locations in a hierarchy, or across multiple hierarchies, do not need unique names and slugs.

For example, a department store may have a hierarchy for major appliances.

![Hierarchy Example](/assets/hierarchexample.png)

- If you move the **Electric Ranges** node to the **Built-in** node, all the children of the **Electric Ranges** node also move to the **Built-in** node.
- The nodes **Electric Ranges** and **Gas Ranges** are siblings. They must have unique names and slugs.
- The **Double Oven** nodes can have the same name because they have different parents.

You can create the **Major Appliances** hierarchy by performing the following steps.

1. Using [Create a Hierarchy](/docs/pxm/hierarchies/hierarchies-api/create-a-hierarchy), create a hierarchy whose name is **Major Appliances**. Each hierarchy has a hierarchy ID. In other words, the hierarchy ID is the ID of the root node.
1. Using [Create a Node in a hierarchy](/docs/pxm/hierarchies/nodes-api/create-a-hierarchy-node), create the following child nodes. When you create a node in a hierarchy, by default, the node is a child of the root node. Specify `sort_order` to configure the order of the nodes.
   - **Ranges**
   - **Refrigerators**
   - **Dishwashers**
1. Using [Create a Node in a hierarchy](/docs/pxm/hierarchies/nodes-api/create-a-hierarchy-node), create the **Electric Ranges** node, specifying **Ranges** as the parent node.
1. Using [Create a Node in a hierarchy](/docs/pxm/hierarchies/nodes-api/create-a-hierarchy-node), create the following nodes, specifying **Electric Ranges** as the parent node.
   - **Electric Ranges 24ˮ**
   - **Electric Ranges 30ˮ**
   - **Double Oven**
1. Using [Create a Node in a hierarchy](/docs/pxm/hierarchies/nodes-api/create-a-hierarchy-node), create the **Gas Ranges** node, specifying **Ranges** as the parent node.
1. Using [Create a Node in a hierarchy](/docs/pxm/hierarchies/nodes-api/create-a-hierarchy-node), create the following nodes, specifying **Gas Ranges** as the parent node.
    - **Gas Ranges 24ˮ**
    - **Gas Ranges 30ˮ**
    - **Gas Ranges 32"**
    - **Double Oven**
1. Using [Create a Node in a hierarchy](/docs/pxm/hierarchies/nodes-api/create-a-hierarchy-node), create the following nodes, specifying **Dishwashers** as the parent node.
    - **Built-in**
    - **Standalone**

Once you have created your products, (for more information, see [Products API](/docs/pxm/products/ep-pxm-products-api/pxm-products-api-overview)), you can use the Hierarchies API to organize your products. 

- You can associate products with nodes. You cannot associate a product with the root node. For more information, see [Create Node Product Relationships](/docs/pxm/hierarchies/node-relationships-api/create-node-product-relationships).
- You can duplicate an existing hierarchy. This is useful because it enables you to quickly and easily create multiple hierarchies with the same node structure. Any nodes in the existing hierarchy are also created in the duplicated hierarchy. In addition, you can optionally specify whether you want products associated with the nodes in an existing hierarchy to be associated with the nodes in the duplicated hierarchy. See [Duplicate a Hierarchy](/docs/pxm/hierarchies/hierarchies-api/duplicate-a-hierarchy).
- You can move an existing node to a different location within the same hierarchy by changing its parent node. If the node has child nodes, they retain their relationship with the moved node. In other words, the node and all its children move to the new location in the hierarchy. For more information, see [Create a Node in a hierarchy](/docs/pxm/hierarchies/nodes-api/create-a-hierarchy-node).
- If your store supports multiple languages, you can localize new and existing hierarchies and nodes.

## Hierarchies and Catalogs
    
The hierarchies determine which products appear in the catalog. When you create a catalog, you specify one or more hierarchies. Only the products that are associated with the selected hierarchies are included in the catalog. Your Front-end developers use the hierarchies to create and populate navigation menus in your storefront. You can improve how your customers search your store using the [Catalog View API](/docs/pxm/catalogs/catalog-latest-release/overview).

You can also specify the order you want your hierarchies to display in a published catalog. You can order your hierarchies on a catalog-by-catalog basis.

![Hierarchy_sorting](/assets/hierarchy_sorting.png)

For more information, see [Update a Catalog](/docs/pxm/catalogs/catalog-configuration/update-a-catalog).

## Related Resources

- [Products](/docs/pxm/products/pxm-products)
- [Locales](/docs/pxm/products/locales/pxm-locales)
- [Catalogs](/docs/pxm/catalogs/catalogs)
- [Assign Multiple Nodes](/docs/pxm/products/ep-pxm-products-api/assign-nodes#post-attach-multiple-nodes)

### Demos

{% youtube src="https://www.youtube.com/embed/4-ccMytvaNE" label="Understanding Hierarchies in Product Experience Manager" /%}
