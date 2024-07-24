---
title: Creating Bundles
sidebar_label: Creating Bundles
sidebar_position: 20
---

With Product Experience Manager, you can create and manage bundles. A bundle is a purchasable product comprising one or more products that you want to sell together. You can have:

- Dynamic bundles. Dynamic bundles allow your shoppers to choose their own options in a bundle.
- Bundles of bundles. Your bundle consists of child bundles.

import DynamicBundles from "/docs/partials/pxm/bundles/dynamic.mdx";

## Dynamic Bundles

<DynamicBundles></DynamicBundles>

import BundlesBundles from "/docs/partials/pxm/bundles/bundlesof.mdx";

### Creating Dynamic Bundles: An Overview

1. [Create your products](/docs/commerce-manager/product-experience-manager/Products/create-products).
1. Create a bundle.
1. Specify minimum and/or maximum values for the number of product options that can be selected within the bundle. For example, if you want the shopper to select exactly 4 out of 10 options, set both the minimum and maximum values to 4 for each of the 10 product options.
1. For each product option in the bundle, specify if it is a default option by adding `"default": true` to the product options that you want to be pre-selected for the shopper.
1. [Publish the bundle to your catalog](/docs/commerce-manager/product-experience-manager/catalogs/publishing-catalogs) so you can display the products to your shoppers in your storefront.
1. When a shopper interacts with the bundle on your storefront, they can select the products they want from the list of options. Use the [configure a shopper bundle](/docs/api/pxm/catalog/configure-by-context-product) endpoint to capture the shoppers selections. This updates the `bundle_configuration` with the product options chosen by a shopper.
1. Once a shopper has configured their bundle, use the [add a product to a cart](/docs/api/carts/cart-merge) endpoint to add the selected bundle to the shopper’s cart.
1. When the shopper proceeds to checkout, the selected product options from the bundle are included in the order.

## Bundles of Bundles

<BundlesBundles></BundlesBundles>

### Creating bundles of bundles: an overview

To create a bundle of bundles, simply add a bundle as a component to another bundle.

1. [Create your products](/docs/commerce-manager/product-experience-manager/Products/create-products).
1. Create all your child bundles.
1. Create a parent bundle and specify the product ID of your child bundle as an option of a component in your bundle. You cannot have more than 1500 options in a bundle.

## Before you Begin

- Ensure that you have created at least one price book.
- Ensure that all products that you want to add to the bundle are created with the required details.
- Ensure any child bundles that you want to add to a parent bundle are created with the required details.

:::note
 A bundle without a SKU must have a minimum quantity of components and options. Either:

 - a single option with a minimum quantity of 2.
 - 2 options, each with a minimum quantity of 1.

:::

:::caution
Commerce Manager does not sort components and component options. You must program your storefront to sort the components and component products in the order that you want.
:::

### Procedure

The steps below describe how to complete the basic information for a bundle and adding the components and product options that make up a bundle. 

1. Go to **Products** > **Bundles**. 
1. Select **Create new bundle**.
1. (Optional) Expand **Locale** drop-down list. The languages you have configured in [**Store Settings** > **Locale**]( /docs/commerce-manager/product-experience-manager/locales/) are displayed first. Custom product locales are displayed underneath. See [Configuring Locales](/docs/commerce-manager/product-experience-manager/Products/configure-locales).
1. In **Basic Information**, provide the following:

    - **Name**: Name for the bundle.
    - (Optional) **SKU Number**: The SKU of the bundle.
    - **Commodity Type**: Select whether the product is physical or digital.
    - (Optional) **Description**: A description for the bundle.
    - In [**Product Tags**](/docs/commerce-manager/product-experience-manager/Products/tagging-products), either:
        - enter a tag and press **Enter**. Repeat this step for each tag you want to use.
        - select **View as a comma separated list** and enter a comma separated list of tags.
    - **Slug**: A label for the bundle that is used in the URL paths. A slug can contain any combination of letters, numbers, periods, hyphens, and underscores. No spaces or other characters are allowed. By default, the bundle name is used as the slug.
    - (Optional) **External Reference**: A unique attribute associated with the product. This could be an external reference from a separate company system, for example. The maximum length is 2048 characters.
    - (Optional) **MPN**: Manufacture Part Number (MPN).
    - (Optional) **UPC/EAN**: Universal Product Code (UPC) or European Article Number (EAN) used to scan a product in a Point of Sale (POS) system.
    - Bundle products can have rich media assets, such as product images or a file containing additional product details. Only the main image for a bundle is shown. You can only replace or delete an existing main_image. If there are other files associated with bundle, they are not shown here. You can go to [Media Management](/docs/commerce-manager/product-experience-manager/Products/manage-product-media) for a product to manage these files. To add media for the bundle, do one of the following:
        - Drag and drop the file from your local directory.
        - Click **Choose File** and browse and add the file.
        - In the **add by URL** field, add the URL for the media.
    To delete media from Commerce, go to **Products** > **Media**. See **Files** in [Media](/docs/commerce-manager/product-experience-manager/product-assets/files).
1. In **Manage Bundle Components**, add the components and component products to include in your bundle. 
1. Select **Add Component**.
1. (Optional) You can specify a sort value. A sort value must be a number. You can specify any numbers that you want. For example, 1, 2, 3, or 100, 90, 80, and so on. The sort value is visible when you add the products to your catalogs. You can then use the sort value to program your storefront to display the bundle components in the order that you want.
1. In **Component Name**, enter a name for the component. The component name is the name that is displayed in your storefront.
1. In **Component Key**, enter a unique identifier to identify a component. The component key can be anything you like but it should be relatively short and must not contain any special characters.
1. (Optional) In **Minimum**, enter the minimum number of products a customer can buy. 
1. (Optional) In **Maximum**, enter the maximum number of products a customer can buy.

   :::note
   If you do not specify any minimum or maximum values for the product options in your components, your shoppers can select any combination of product options.
   :::

1. To add products to a component, select **Add Products**. The **Add products to a bundle component** pane is displayed. A list of all the available products in your store is displayed
1. You can add as many options you want. You can also filter the products by **SKU**, **Product Name**, and **Product status**, or scroll through the list.
1. Select + next to the products you want to add.
1. Close the **Add products to a bundle component** pane. The products you selected are added to the component.
1. In **Order**, you can specify a sort value for the product. A sort value must be a number. You can specify any numbers that you want. For example, 1, 2, 3, or 100, 90, 80, and so on. The sort value is visible when you add the products to your catalogs. You can then use the sort value to program your storefront to display the products in the component in the order that you want.
1. All the products are listed with the following details:

    - **Name**: The name of the product.
    - **SKU**: The SKU of the product.
    - **Status**: Whether the product is **Live** or **Draft**.

1. (Optional) By default, the quantity you configured while creating the product is displayed in **Quantity**. You can enter a new quantity, depending on your requirements. 
1. (Optional) In **Default**, select the products that you want to configure as default options. Each component can have as many defaults as the maximum number of products set for the bundle. A shopper can either select the bundle with the default products or choose products from all the components. Shoppers must either select products for all components or use the default options for all components; they cannot choose products for only one component and leave the others with default options.
1. Repeat steps 6 to 19 for each component you want to add to the bundle.
1. Select **Save Bundle**.
