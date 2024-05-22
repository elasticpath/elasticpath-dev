---
title: Products Overview
nav_label: Products Overview
sidebar_position: 20
---

:::caution
The Products API is for Administrator use only. Do not use these endpoints on your customer-facing frontends.
:::

Products are the items or services that you might want to sell in your store. In Product Experience Manager, a product has a name, description, ID, and SKU. Products can also have additional attributes and associated rich media assets, such as product images or a file containing additional product details. If your store supports multiple languages, you can localize product names and descriptions.

Product data is stored in a database. After you add products, you can update product information, add images and other assets, and associate products with one or more hierarchy nodes. You can export the updated product information back to other business systems so that your organization sees a consistent view of products.

While defining products, the products are in a draft state. Your organization can develop the criteria and business processes to help determine when a product is ready to go live and appear in a catalog.

To appear in a [catalog](/docs/pxm/catalogs), a product must meet the following criteria:

- The product is live.
- The product is associated with at least one hierarchy.
- The catalog references a hierarchy that includes the product.

## Product Templates

Templates are a collection of attributes. Attributes are grouped together to match a particular product type or to provide an input for other purposes, such as Search Engine Optimization (SEO) or product specification. For example, a *Book* template might contain the attributes, such as *ISBN*, *Author*, *Number of pages*, *Year Published*, or *Condition (New/Used)*.

## Product Attributes

Use attributes to define the characteristics of products in a store. For example, you can assign attributes such as, *care instructions* or *fabric*, to a shirt. When a shopper searches for a specific item, attributes help stores to return the products that match the search criteria. For example, when a shopper searches for a large blue shirt, all shirts that are large and blue are returned as the search result.

You can allow your shoppers to add custom text to a product when checking out their carts. This is useful, for example, if you have a product like a T-shirt that can be personalized. You can do this using the `custom_inputs` attribute when [creating your products](/docs/pxm/products/ep-pxm-products-api/create-a-product).

Once you have defined your custom inputs on a product, you must configure the custom inputs in your orders. See [adding your products to carts](/docs/carts-orders/carts/cart-items/add-product-to-cart).

For more information about adding attributes, see [Add custom data to products](/docs/pxm/products/extending-pxm-products/add-custom-data-to-pxm-products).

## Product Types

Commerce automatically assigns types to the products you create. In Commerce Manager, you can see at a glance the product types in a list of a products. In addition, you can filter on product types in both the API and Commerce Manager. 

Product types can also be used in catalogs. For example, in your catalog, you can filter on `parent` so that only your parent products are displayed in your storefront. 

Products have one of the following types:

* `standard` - Standard products are a standalone products.

   :::note
   In Commerce Manager, `standard` products are called **Product**.
   :::

* `parent` - A parent product is a product that has child products that have been built using the `Build Child Products` endpoint. See [Create child products using variations](/docs/pxm/products/pxm-product-variations/generate-pxm-variations).
* `child` -  When you configure product variations and variation options for parent products, the child products derived from the parent products are automatically created in Commerce.
* `bundle` - A bundle is a purchasable product, comprising two or more standalone products (in other words, `components`) to be sold together. See [Bundle Components and Options](/docs/pxm/products/pxm-bundles#bundle-components-and-options).

## Related Resources

- [Locales](/docs/pxm/products/locales/pxm-locales)
- [Catalogs](/docs/pxm/catalogs)
- [Price Books](/docs/pxm/pricebooks/price-books)
- [Products API](/docs/pxm/products/ep-pxm-products-api/pxm-products-api-overview)
- [Configurations](/docs/pxm/products/pxm-products-commerce-manager/configure-locales)

### Demos

<iframe width="560" height="315" src="https://www.youtube.com/embed/SdaSEgA5rTc" title="Understanding Products in Product Experience Manager" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
