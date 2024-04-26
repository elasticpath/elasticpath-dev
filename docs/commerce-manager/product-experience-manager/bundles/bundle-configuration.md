---
title: Bundles
sidebar_label: Bundles
sidebar_position: 10
---

With Product Experience Manager, you can create and manage bundles. A bundle is a purchasable product comprising two or more products that you want to sell together. For example, a consumer electronics and video game company, *Playtend Games* can sell a *Playtend* video game console as a bundle that includes the console, controller, and game. The price of the bundle might be different from the total of the individual products. A bundle must contain at least two products, either the same items or different items. You must not assign a product to a bundle, if the product is in draft status as this invalidates the bundle.

You can have:

- Dynamic bundles: Dynamic bundles allow your shoppers to choose their own options in a bundle. See [Dynamic Bundles](/docs/pxm/products/pxm-bundles/dynamic-bundles).
- Bundles of bundles: Your bundle consists of child bundles. See [Bundles of Bundles](/docs/pxm/products/pxm-bundles/bundles-of-bundles).

## Bundle Components and Options

You can create multiple components within a bundle. Each component must have at least one or more options. Each option is a product and a quantity. 

:::caution
You cannot have more than 1500 options in a bundle. 
:::

For example, *Playtend Games* can create a bundle where the total bundle price is calculated based on the options that the buyers choose. Shoppers can select a base console option, two games options, and a controller option as in the following example:

1. Select one of the following options in the gaming console component:

    - Gaming Console 512 MB Storage. Regular price is $500, selling for $475.
    - Gaming Console 1 GB Storage. Regular price is $750, selling for $725.

1. From each of the following components, select one of the following options:

    - Component 1:

        - Playtend Roboselect Game, selling for $50
        - Playtend Burndown Game, selling for $45
        - Playtend Invaders Game, selling for $50

    - Component 2:

        - Playtend Doomsday Game, selling for $35
        - Playtend Happyday Game, selling for $35
        - Playtend Birthday Game, selling for $40

1. Select one of the following options in the controllers component:

    - Red Controller, selling for $40
    - Blue Controller, selling for $40
    - Green Controller, selling for $40
    - Invaders Controller, selling for $75

If the shopper chooses the following options for their bundle, the total is $885:

- Gaming Console 1 GB Storage ($725)
- Playtend Burndown Game ($45)
- Playtend Birthday Game ($40)
- Invaders Controller ($75)

You can specify a sort value for your components and options. The sort value is visible when you add the products to your catalogs. You can then use the sort value to program your storefront to display the bundle components and component options in the order that you want.

:::caution
Commerce Manager does not sort components and component options. You must program your storefront to sort the components and component options in the order that you want.
:::

## Bundle Pricing

Bundles can have:

- Fixed pricing - enables you to assign a fixed price for all products in a bundle. 
- Automatic/cumulative pricing - the price of a bundle is generated automatically based on the sum of the component products.

For more information, see [Bundle Pricing](/docs/pxm/products/pxm-bundles/bundle-pricing) 

## Adding Products From Bundles of Bundles to Carts

When using bundles of bundles, only products from child bundles should be added to a cart. This is because if you add a parent bundle to a cart and call the cart, the cart returns information about the parent bundle and the name of the child bundle, but no child bundle components are returned.

When designing your storefront, you must only allow child bundles to be added to carts. 

## Before you Begin

- Ensure that you have created at least one price book.
- Ensure that all products that you want to add in the bundle are created with the required details.
- Ensure any child bundles that you want to add to a parent bundle are created with the required details.

:::note
 A bundle without a SKU must have a minimum quantity of components and options. Either:

 - a single option with a minimum quantity of 2.
 - 2 options each with a minimum quantity of 1.

:::

### Procedure

1. In the **Product Details** tab, enter the following details:

    - (Optional) Expand **Locale** drop-down list. The languages you have configured in [**Store Settings** > **Locale**]( /docs/pxm/products/locales) are displayed first. Custom product locales are displayed underneath. See [Configuring Locales](/docs/pxm/products/pxm-products-commerce-manager/configure-locales#how-you-can-configure-locales-in-commerce-manager).
    - **Name**: Name for the bundle.
    - (Optional) **Description**: A description for the bundle.
    - (Optional) **SKU Number**: The SKU of the product.
    - **Slug**: A label for the product that is used in the URL paths. A slug can contain any combination of letters, numbers, periods, hyphens, and underscores. No spaces or other characters are allowed. By default, the product name is used as the slug.
    -  **Commodity Type**: Select whether the product is physical or digital.
    - (Optional) **MPN**: Manufacture Part Number (MPN).
    - (Optional) **UPC/EAN**: Universal Product Code (UPC) or European Article Number (EAN) used to scan a product in a Point of Sale (POS) system.
    - (Optional) **External Reference**: A unique attribute associated with the product. This could be an external reference from a separate company system, for example. The maximum length is 2048 characters.

1. To create a bundle, turn the **Product Bundle** toggle on. 
1. Turn the **Product Status** toggle on. 
1. In **Components & Options**, click **Add Component**.
1. In **Component Name**, enter a name for the component. The component name is the name that is displayed in your storefront.
1. In **Component Key**, enter a unique identifier to identify a component. The component key can be anything you like but it should be relatively short and must not contain any special characters.
1. (Optional) In **Minimum**, enter the minimum number of products a customer can buy.
1. (Optional) In **Maximum**, enter the maximum number of products a customer can buy.
1. Repeat these steps for each component you want to create. All components are listed in the **Components & Options** table.
1. (Optional) In **Sort Value**, you can specify a sort value. A sort value must be a number. You can specify any numbers that you want. For example, 1, 2, 3, or 100, 90, 80, and so on. The sort value is visible when you add the products to your catalogs. You can then use the sort value to program your storefront to display the bundle components and component options in the order that you want.

    :::caution
   Commerce Manager does not sort components and component options. You must program your storefront to sort the components and component options in the order you want.
    :::
  
1. To add options to a component, from **Actions** next to the component you want to add options to, select **...**. 
1. Select **Manage options**. **Options for (component name)** is displayed, where *component_name* is the name of the component that you want to add options to.
1. Click **Add option**. All products available to add as options are listed with the following details:

    - **Image** : Displays image associated with the option, if any.
    - **Name**: Displays the name of the option.
    - **SKU**: Displays the SKU of the option.
    - **Status**: Displays whether the option is **Live** or **Draft**.

1. To add an option to the component, click **+** next to the option you want to add. You can add as many options you want. You can also filter the options products by **SKU**, **Product Name**, and **Product status**, or search for a specific product by SKU.
1. (Optional) By default, the quanity you configured while creating the option is displayed in **Quantity**. You can enter a new quantity, depending on your requirements. 
1. (Optional) In **Sort Value**, enter a sort value for the option. A sort value must be a number. You can specify any numbers that you want. For example, 1, 2, 3, or 100, 90, 80, and so on. The sort value is visible when you add the products to your catalogs. You can then use the sort value to program your storefront to display the bundle component options in the order that you want.

    :::caution
    Commerce Manager does not sort components and component options. You must program your storefront to sort the components and component options in the order that you want.
    :::

1. To add options to other components, repeat steps 10 - 13.
1. Click **Next** or **Save & Exit**.

### Adding templates to a bundle

Ensure that at least one template is available in the store.

1. In the **Product Templates** tab, click **Add Templates**.

    The templates available for the bundle are listed.

1. To add a template to the bundle, click **+** in the template listing.

    All templates added to the bundle are displayed in the **Templates list** table. This page also provides details of the templates, such as the name and values of the attributes in the templates.

1. Click **Next** or **Save & Exit**.

### Configuring bundle pricing

Depending on the type of pricing you want to implement, you must already have configured the following.

- If you want to assign a fixed price for all the products in a bundle, you must have already configured a price book that you want to use with your bundle. Your bundle must have a SKU.
- If you want a bundle price generated dynamically based on the sum of the component products included in a bundle, ensure that each product in the bundle has a price.

#### Configuring fixed bundle pricing

If you want to assign a fixed price for all the products in a bundle, you must have already configured a price book that you want to use with your bundle. Your bundle must have a SKU.

1. Go to **Products**.
1. Select the bundle whose price you want to configure.
1. Click **Pricing**.
1. Turn the **Price Bundle by SKU** toggle on. (Your must bundle must have a SKU).
1. In the **Pricing** tab:

    1. To associate the bundle with a price book, from **Select Price Book** list, select a price book.
    1. Turn on the toggle for the currencies you want to use.
    1. Enter a price for each of the currencies. You can add currencies to a store in [Settings > Currencies](/docs/pxm/currencies/manage-currencies#managing-currencies).
    1. In **Actions**, click **Save**.

1. If you want to add volume and sale pricing for the products in your bundle, expand **Advanced Pricing**.

    1. Click **Add Volume Level**.
    1. In **Price Book**, select the price book you want from the drop-down list.
    1. In **Min Purchase Quantity**, type the minimum quantity of products a customer must select to receive the volume price.
    1. Type a price for each of the available currencies. You can add currencies to a store under **System** in [Store Settings > Currencies](/docs/pxm/currencies).
    1. Click **Add Level**.

1. To add a sale price to an option, click **+ Add Sale Price** and do the following:

    1. To associate the option with a price book, from **Price Book** list, select a price book.
    1. In **Sale Name**, type a name for your sale. For more information, see [Price books](/docs/pxm/pricebooks/pxm-pricebooks).
    1. From **Start Date / Time - End Date / Time**, click **Start date** to display the calendar. 
    1. Use the calendar to select a start date and time. 
    1. Click **OK**.
    1. Use the calendar to select an end date and time.
    1. Type a price for each of the available currencies. You can add currencies under **System** in [Store Settings > Currencies](/docs/pxm/currencies).
    1. Click **Add Sale**.

    :::tip
    When displaying your product in your storefront, you can choose to display both the list price and the sale price or the sale price only, depending on your requirements. 
    ![Custom](/assets/sale-price.png)
    :::

1. Click **Next** or **Save & Exit**.

#### Configuring automatic/cumulative bundle pricing

If you want the price of a bundle generated dynamically based on the sum of the component products included in a bundle, ensure that each product in the bundle has a price. 

You can configure sale pricing for a bundle that uses automatic/cumulative pricing.

1. Go to **Products**.
1. Select the bundle whose price you want to configure.
1. Click **Pricing**.
1. To add a sale price to an option, expand **Advanced Pricing**. If any of the products in a bundle already have a sale price, these details are displayed in **Sale Price of Options**.
1. To add a sale price, click **Find an option to add a sale price**. A list of available options is displayed.
1. From **Action**, next to the option you want to add a sale price for, select **+**.
1. Click **Add Sale Price**.

    1. To associate the option with a price book, from **Price Book** list, select a price book.
    1. In **Sale Name**, type a name for your sale. For more information, see [Price books](/docs/pxm/pricebooks/pxm-pricebooks).
      1. From **Start Date / Time - End Date / Time**, click **Start date** to display the calendar. 
    1. Use the calendar to select a start date and time. 
    1. Click **OK**.
    1. Click **End date** to display the calendar. 
    1. Use the calendar to select an end date and time.
    1. Type a price for each of the available currencies. You can add currencies in [Settings > Currencies](/docs/pxm/currencies/manage-currencies).
    1. Click **Add Sale**.
    1. Repeat these steps for each of the options you want to add a sale price for.
1. Click **Next** or **Save & Exit**.

### Managing product inventory

You can track the number of bundles by SKU, if you set the number of bundles available in store. Bundle inventory can be tracked based on the availability of individual items in the bundle. In this case, the maximum number of bundles you can sell is equal to the number of the option that is least available.

You cannot track the inventory of a bundle without SKU. However, you can track the inventory based on the availability of individual items.

1. In the **Inventory** tab, click **Manage inventory**. The following details are displayed:

    - **Product Name**
    - **SKU**
    - **In stock**
    - **Allocated**: The amount of reserved product in stock.
    - **Available**: The amount of product available in the stock minus allocated product, where **Available** = **Total** - **Allocated**.
1. In the **Manage inventory > Actions** field, select one of the following options, and in the **Qty** field, enter the appropriate quantity:

    - **Allocate**: Reserves a number of inventory items so that you cannot sell the allocated items.
    - **Deallocate**: Reduces the number of allocated items so that you can sell the items again.
    - **Increment**: Adds stock to the total inventory.
    - **Decrement**: Reduces the specified quantity from the total inventory.

    After you update the stock, the activity is added to the log and the **Inventory log** tab displays the details of each activity.
1. Click **Next**.

### Managing product media

1. To add a media for the bundle, in the **Media Management** tab, do one of the following:

    - Drag and drop the file from your local directory.
    - Click **Choose File** and browse and add the file.
    - In the **add by URL** field, add the URL for the media.

1. Click **Done**.

    You can add multiple media for a product. All media that you upload are listed in the **Media upload** table.
1. To assign an image as the main image for the product, select the **Use as main image** field next to the image name.
1. Click **Save**.

## Editing Bundles

After editing a bundle, ensure that you republish all catalogs that contain the bundle to reflect the changes.

1. In the **Product Experience Manager > Products** page, do one of the following:

    - Double click a product.
    - Click the **...** icon and click **Edit**.

1. Update the details as required.
    For the changes to appear in the store, republish the catalogs that contain hierarchies with this product.

## Deleting Bundles

Deleting a bundle removes bundle information and the associated media files from the database. However, the product options in the bundle are not deleted from the database. You must republish the catalog to update the catalog release with the changes. If you want to keep your hierarchies and price books up to date, remove the deleted bundles from those resources.

Even after deleting a bundle, an order history that has the bundle still keeps the product information of the deleted bundle, such as, the product SKU, product ID, and price. However, clicking the product does not take a shopper to product details.

- In the **Product Experience Manager > Products** page, click the **...** icon and click **Delete**.

:::tip
You can remove bundle products from a catalog, but still keep them in the database for audit purposes.

1. Set the product status to **Draft**.
1. Remove the product from hierarchies and republish the affected catalog so that it does not appear in the storefront.

:::

## Related Resources

- [Product Templates](/docs/pxm/products/extending-pxm-products/pxm-product-templates-api/pxm-product-templates-overview)
- [Product Attributes](/docs/pxm/products/pxm-products#product-attributes)
- [Product Hierarchies](/docs/pxm/hierarchies/hierarchies-api/hierarchies-api-overview)
- [Price books](/docs/pxm/pricebooks/pxm-pricebooks/pxm-pricebooks-overview)
- [Catalog](/docs/pxm/catalogs)
- [Catalog Releases](/docs/pxm/catalogs/catalog-latest-release/overview)
- [Products](/docs/pxm/products/ep-pxm-products-api/pxm-products-api-overview)

### Demos

<iframe width="560" height="315" src="https://www.youtube.com/embed/Sds4sdDiECI" title="Bundles Configuration" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
