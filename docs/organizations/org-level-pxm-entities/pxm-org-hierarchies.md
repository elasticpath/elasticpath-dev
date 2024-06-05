---
title: Organization Hierarchies
nav_label: Organization Hierarchies 
nav_position : 22
---

Use hierarchies and nodes to group your products into categories and sub-categories. 

For example, AllGoods can organize their products:

- by brand.
- create a collection for a particular distributor.
- an AllGoods distributor can create a collection that has a combination of AllGoods products and other products that they sell.

A hierarchy is a tree structure that consists of a root node with 1 or more parent nodes. Each parent node can also have one or more children nodes, and so on, creating a parent-child relationship between nodes.

A product can belong to multiple nodes in multiple hierarchies.

## Creating Hierarchies

Organization hierarchies are automatically available in all stores that belong to the organization.

1. Generate a [client_credentials](/docs/authentication/Tokens/client-credential-token) access token using your organization's [application keys](/docs/commerce-manager/application-keys/application-keys-cm).
1. Create your product categories using [hierarchies](/docs/commerce-manager/product-experience-manager/hierarchies/creating_hierarchies).
1. Create your product sub-categories using [nodes](/docs/commerce-manager/product-experience-manager/hierarchies/creating_nodes).
1. Organize your products into product [categories](/docs/pxm/hierarchies/node-relationships-api/create-node-product-relationships).

## Duplicating Organization Hierarchies in Stores

You can duplicate an existing hierarchy. This is useful because it enables you to quickly and easily create multiple hierarchies with the same node structure. Any nodes in the existing hierarchy are also created in the duplicated hierarchy. You can optionally specify whether you want products associated with the nodes in an existing hierarchy to be associated with the nodes in the duplicated hierarchy. In addition, you can duplicate an organization hierarchy at the store level. This is useful if you want a hierarchy to contain a mixture of organization products and store products.

During the duplication process, the product associations are maintained in the duplicated hierarchy. Once an organization hierarchy is duplicated, it belongs to the given store. A store Admin can then make changes to the duplicated hierarchy, as required. 

1. Generate a [client_credentials](/docs/authentication/Tokens/client-credential-token) access token to your store. 
2. [Duplicate an organization hierarchy](/docs/pxm/hierarchies/hierarchies-api/duplicate-a-hierarchy).

    * (Default) Maintain the organization products associated with the duplicated hierarchy.
    * Choose not to maintain the products associated with the duplicated hierarchy and create new product associations with the products in your store.
        * [Assign new products to multiple nodes](/docs/pxm/products/ep-pxm-products-api/assign-nodes).
        * [Dissociate products from multiple nodes](/docs/pxm/products/ep-pxm-products-api/dissociate-multiple-products).
      
        :::caution
        You must ensure that hierarchies in organizations and stores have unique SKUs. If a store hierarchy is created with a SKU that is already in use by an organization hierarchy, an error message is displayed. 
        :::

3. Organize your store products the duplicated [hierarchy](/docs/pxm/hierarchies/node-relationships-api/create-node-product-relationships).
4. Your duplicated hierarchy now belongs to the store.
