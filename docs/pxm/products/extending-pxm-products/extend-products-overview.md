---
title: Overview
nav_label: Overview
sidebar_position: 10
---

:::caution
The Templates API is for Administrator use only. Do not use these endpoints on your customer-facing frontends.
:::

With extension templates, you can attach a specific set of custom fields to your products in Product Experience Manager. You can create templates for your products at both the organization and store level.

## Product Templates

Templates are a collection of attributes. Attributes are grouped together to match a particular product type or to provide an input for other purposes, such as Search Engine Optimization (SEO) or product specification. For example, a *Book* template might contain the attributes, such as *ISBN*, *Author*, *Number of pages*, *Year Published*, or *Condition (New/Used)*.

You can create product templates for both organization and store. However, stores can use organization templates for store level products.

## Product Attributes

Use attributes to define the characteristics of products in a store. For example, you can assign attributes such as, *care instructions* or *fabric*, to a shirt. When a shopper searches for a specific item, attributes help stores to return the products that match the search criteria. For example, when a shopper searches for a large blue shirt, all shirts that are large and blue are returned as the search result.

You can allow your shoppers to add custom text to a product when checking out their carts. This is useful, for example, if you have a product like a T-shirt that can be personalized. You can do this using the `custom_inputs` attribute when [creating your products](/docs/pxm/products/ep-pxm-products-api/create-a-product).

Once you have defined your custom inputs on a product, you must configure the custom inputs in your orders. See [adding your products to carts](/docs/commerce-cloud/carts/cart-items/add-product-to-cart).

For more information about adding attributes, see [Add custom data to products](/docs/pxm/products/extending-pxm-products/add-custom-data-to-pxm-products).

## Demos

- {% youtube src="https://www.youtube.com/embed/D0a50Lrwg7g" label="Understanding Attributes" /%}
