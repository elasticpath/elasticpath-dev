---
title: Product and Node Associations in Breadcrumb Metadata
nav_label: Product and Node Associations in Breadcrumb Metadata
sidebar_position: 11
---

A catalog is a list of products available for sale in your store. A catalog also contains information about how to organize those products for navigation menus and search facets in a shopper experience.

The hierarchies determine which products appear in the catalog, that is, only the products that are associated with the selected hierarchies are included in the catalog.

## Understanding Breadcrumb Metadata

`breadcrumb` metadata helps you understand the association of products with nodes; it explains how products are associated with parent nodes and the relationship among the array of nodes. This is useful if you want to improve how your shoppers search within your store.

The breadcrumb information that you get in an endpoint response depends on whether the endpoint is retrieving product or node details. 

### Product – breadcrumb metadata

{% table %}
* Breadcrumb Metadata
* Description
---
* 
    `bread_crumbs`
*
    The tree of parent nodes associated with a product. The `bread_crumbs` metadata lists up to 10 levels of parent nodes that the product is associated with, depending on the number of levels of parent nodes you have.
---
*
    `bread_crumb_nodes`
*
    The relationship among the array of nodes associated with the product.
---

{% /table %}

### Understanding `bread_crumbs` metadata for products

An example of `bread_crumbs` metadata is shown below.

```json
{
    “data”: {
            “type”: “product”,
            “attributes”: {
            /*** other product attributes ommitted ***/
           "bread_crumbs": {
            "04e748f1-83db-4013-85c8-9edfb0e1b5fa": [
               "e5a64eae-56c2-48cd-b8b1-f5d3be734d52",
               "94b882fa-85de-470e-acb3-5b11358e02de"
           ],
            "a96a898b-444c-40b6-9c27-5fc74d08e685": [
               "e5a64eae-56c2-48cd-b8b1-f5d3be734d52"
          ]
       }
     }
   }
}
```

The following diagram illustrates how the parent nodes are listed in the `bread_crumbs` example above.

![Breadcrumbs](/assets/breadcrumbs.PNG)

1. The product is in **Node 2**. The ID for **Node 2** is shown first in the first set of breadcrumbs.
1. **Node 2** is part of **Hierarchy 1**. The ID for **Hierarchy 1** is shown second.
1. **Node 1** is the parent node of **Node 2**. The ID for **Node 1** is shown last.
1. The product is also in **Node 3**. The ID for **Node 3** is shown first in the second set of breadcrumbs.
1. **Node 3** is in the root of **Hierarchy 1**. The ID for **Hierarchy 1** is shown last.

In the `bread_crumb_nodes` metadata, you can see a list of parent nodes a product is associated with. 

If you subsequently add a product to a new node, then the `bread_crumb_nodes` metadata appends the new node to the top of the list. Using the example above, if we add the product to **Node 1**:

1. The `bread_crumb_nodes` metadata is generated to show the new node appended to the top of the list.
1. The `bread_crumbs` metadata is updated with the new node.

```json
{
    “data”: {
            “type”: “product”,
            “attributes”: {
            /*** other product attributes ommitted ***/
            "bread_crumb_nodes": [
                "94b882fa-85de-470e-acb3-5b11358e02de",
                "04e748f1-83db-4013-85c8-9edfb0e1b5fa",
                "a96a898b-444c-40b6-9c27-5fc74d08e685"
             ],
             "bread_crumbs": {
                "04e748f1-83db-4013-85c8-9edfb0e1b5fa": [
                   "e5a64eae-56c2-48cd-b8b1-f5d3be734d52",
                   "94b882fa-85de-470e-acb3-5b11358e02de"
               ],
               "94b882fa-85de-470e-acb3-5b11358e02de": [
                   "e5a64eae-56c2-48cd-b8b1-f5d3be734d52"
               ],
               "a96a898b-444c-40b6-9c27-5fc74d08e685": [
                   "e5a64eae-56c2-48cd-b8b1-f5d3be734d52"
            ]
         }
      }
   }
}
```

### Node – breadcrumb metadata

{% table %}      
* Breadcrumb Metadata     
* Description
---
* 
    `bread_crumb`
*
    The relationship among the array of nodes – demonstrating the linking of the children nodes with the parent nodes. The `bread_crumb` metadata lists up to 10 levels of parent nodes that the node is associated with, depending on the number of levels of nodes you have.
---

{% /table %}

### Understanding `bread_crumb` metadata for nodes

An example of `bread_crumb` metadata is shown below.

```json
{
    “data”: {
            “type”: “node”,
            “attributes”: {
            /*** other product attributes ommitted ***/
            {
            "bread_crumb": [
                "04e748f1-83db-4013-85c8-9edfb0e1b5fa",
                "94b882fa-85de-470e-acb3-5b11358e02de",
                "a96a898b-444c-40b6-9c27-5fc74d08e685"
            ]
         }
      }
   }
}
```

The following diagram illustrates how the nodes are listed in the `bread_crumb` example above.

![Breadcrumb](/assets/breadcrumb.PNG)

The `bread_crumb` metadata is an array of nodes that the node is associated with. Up to 10 levels of nodes are displayed, depending on the number of levels of nodes you have.

## Understanding Breadcrumb Metadata for Child Products

When a catalog is published, the breadcrumb information for a child product includes the metadata mentioned for the parent product, in addition to the information specific to the child product. For example, **Product A** is the parent product, associated with **Node 1** and **Node 2**. The metadata for child **Product B** includes **Node 1** and **Node 2**, in addition to its own metadata information.

## Related Resources

- [Products](/docs/pxm/products/pxm-products)
- [Hierarchies](/docs/pxm/hierarchies/hierarchies)
- [Price Books](/docs/pxm/pricebooks/price-books)
