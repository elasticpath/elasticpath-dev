---
title: Dynamic Bundles
nav_label: Dynamic Bundles
sidebar_position: 30
---

Dynamic bundles allow your shoppers to choose their own options in a bundle. For example, you can enable a shopper to select 0 or more product options from a list of 10, giving your shoppers greater flexibility when selecting products in your store front. When minimum is 0, it means that component product lists are optional for your shoppers. For example, when purchasing a monitor, you might want to offer additional optional items that a shopper can select like monitor lamps, extendable arms, or screen wipes.

You can do this by configuring minimum and/or maximum values for the number of product options in a component that your shoppers can select. For example, you can offer a promotion where you sell 4 books for a single price and your customers can select 4 books from a list of 10. When you create the bundle, add all ten products to the bundle and specify that the minimum selection required is 4, and the maximum selection allowed is 4.

:::note
Your shoppers cannot change the quantities of a product. They must purchase the quantity of products that you have specified when you created your components and options.
:::

If you do not specify any minimum or maximum values for the product options in your components, your shoppers can select any combination of product options.

Bundles have a `bundle_configuration` which describe the options selected. Once your bundles are published in a catalog, a shopper can select the products they want. You can use [Get a product in a catalog release](/docs/pxm/catalogs/catalog-latest-release/get-a-product-in-a-release) to check a `bundle_configuration`. You can use the [configure a shopper bundle](/docs/pxm/catalogs/shopper-catalog/configure-shopper-bundle) endpoint to store a shopper's selections. The response from the [configure a shopper bundle](/docs/pxm/catalogs/shopper-catalog/configure-shopper-bundle) endpoint updates the `bundle_configuration` with the product options a shopper selects. In your storefront, you can display this as a summary of the product options a shopper has selected.

### Creating Dynamic Bundles: An Overview

The following steps are an overview of how to use dynamic bundles.

1. Create your products using [create a product](/docs/pxm/products/ep-pxm-products-api/create-a-product).
1. Create a bundle using [create a bundle](/docs/pxm/products/ep-pxm-products-api/create-a-product).
1. Specify minimum and/or maximum values for the components in the bundle, depending on how many options you want your shoppers to be able to select.
1. Dynamic bundles are displayed in your catalog using [publish a catalog](/docs/pxm/catalogs/catalog-release-admin/publish-a-catalog).
1. The product selections a shopper makes are stored in the [configure a shopper bundle](/docs/pxm/catalogs/shopper-catalog/configure-shopper-bundle).
1. The shoppers product selections from the [configure a shopper bundle](/docs/pxm/catalogs/shopper-catalog/configure-shopper-bundle) endpoint are added to a cart, for example, using the [add a product to a cart](/docs/commerce-cloud/carts/cart-items/add-product-to-cart).
1. When a cart is checked out, the options a shopper selected are added to the order. See [order items](/docs/commerce-cloud/orders/orders-api/order-items).
