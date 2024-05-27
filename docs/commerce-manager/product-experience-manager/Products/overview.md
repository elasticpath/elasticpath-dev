---
title: Overview
nav_label: Overview
sidebar_position: 10
---

Products contain details, such as, the name, description, and SKU. Products are listed in a catalog using hierarchies. These catalogs then display the products in the storefront, such as a website. In Commerce Manager, you can also associate attributes with products using templates. However, product information does not contain pricing details. Pricing details for the products are managed in price books. See [Pricebooks](/docs/commerce-manager/product-experience-manager/pricebooks/pxm-pricebooks).

## Products and Catalog Releases

For a product to appear in the store, the product must be in a `live` state. By default, a product is created in the `draft` state. This is to ensure that the product details are reviewed and approved before publishing it. When you publish a catalog, only the live products appear in the catalog release. If you change a product's state to live, you must republish the catalog for the product to be displayed in the catalog.  

In addition, a product must belong to at least one hierarchy. When you publish a catalog, the live products in the hierarchies appear in a catalog release. A catalog can have one or more hierarchies of products. The hierarchies contain all the products that you want to display in your store. Only the products that are associated with nodes in the selected hierarchies are included in the catalog. You can create your hierarchies and nodes when configuring your products. 

- See the nodes that products belong to.
    
![product tabs](/assets/product-tabs-gifs.gif)

- Create nodes and assign products to nodes.

![assign products](/assets/assign_node.gif)

## Product Types

Commerce Manager automatically assigns types to the products you create. This is useful, because you can see at a glance the product types in a list of a products. In addition, you can [filter on product types](/docs/commerce-manager/product-experience-manager/Products/filter-products).

Products have one of the following types:

* `product` - A product is a standalone product.
* `parent` - A parent product is a product that has child products that have been built in Commerce Manager. See [Assigning Variations and Building Child Product](/docs/commerce-manager/product-experience-manager/variations/assign-variations-build-child-products).
* `child` - A child product is a product that is a variation of a parent product.
* `bundle` - A bundle is a purchasable product, comprising two or more standalone products (in other words, `components`) to be sold together. See [Bundle Components and Options](/docs/commerce-manager/product-experience-manager/bundles/bundle-configuration).

![product types](/assets/product_types.png)

## Related Resources

- [Product Templates](/docs/commerce-manager/product-experience-manager/Products/add-product-templates)
- [Product Attributes](/docs/commerce-manager/product-experience-manager/extending-products/templates)
- [Product Hierarchies](/docs/commerce-manager/product-experience-manager/hierarchies/overview)
- [Variations](/docs/commerce-manager/product-experience-manager/variations/assign-variations-build-child-products)
- [Price books](/docs/commerce-manager/product-experience-manager/pricebooks/pxm-pricebooks)
- [Catalog](/docs/commerce-manager/product-experience-manager/catalogs/catalog-configuration)

### Demos

<iframe width="560" height="315" src="https://www.youtube.com/embed/SdaSEgA5rTc" title="Understanding Products in Product Experience Manager" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<iframe width="560" height="315" src="https://www.youtube.com/embed/_VoXvL9qKPo" title="Product and Hierarchy Management" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
