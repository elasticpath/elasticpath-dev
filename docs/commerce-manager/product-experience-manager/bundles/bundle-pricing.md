---
title: Bundle Pricing
sidebar_label: Bundle pricing
sidebar_position: 40
---

Bundles can have:

- Fixed pricing - enables you to assign a fixed price for all products in a bundle.
- Automatic/cumulative pricing - the price of a bundle is generated automatically based on the sum of the component products.

Depending on the type of pricing you want to implement for your bundles, you must already have configured the following.

- If you want to assign a fixed price for all the products in a bundle, you must have already configured a price book that you want to use with your bundle. Your bundle must have a SKU.
- If you want a bundle price generated dynamically based on the sum of the component products included in a bundle, ensure that each product in the bundle has a price.

## Configuring fixed bundle pricing

If you want to assign a fixed price for all the products in a bundle, you must have already configured a price book that you want to use with your bundle. Your bundle must have a SKU.

1. Go to **Products**.
1. In **All Products**, select the bundle to which you want to configure pricing.
1. Select **Pricing**.
1. Turn the **Price Bundle by SKU** toggle on. (Your must bundle must have a SKU).
1. In the **Pricing** tab:

    1. To associate the bundle with a price book, from **Select Price Book** list, select a price book.
    1. Turn on the toggle for the currencies you want to use.
    1. Enter a price for each of the currencies. You can add currencies to a store in [Settings > Currencies](/docs/commerce-manager/product-experience-manager/currencies/manage-currencies).
    1. In **Actions**, click **Save**.

1. If you want to add volume and sale pricing for the products in your bundle, expand **Advanced Pricing**.

    1. Click **Add Volume Level**.
    1. In **Price Book**, select the price book you want from the drop-down list.
    1. In **Min Purchase Quantity**, type the minimum quantity of products a customer must select to receive the volume price.
    1. Type a price for each of the available currencies. You can add currencies to a store under **System** in [Store Settings > Currencies](/docs/commerce-manager/product-experience-manager/currencies/manage-currencies).
    1. Click **Add Level**.

1. To add a sale price to an option, click **+ Add Sale Price** and do the following:

    1. To associate the option with a price book, from **Price Book** list, select a price book.
    1. In **Sale Name**, type a name for your sale. For more information, see [Price books](/docs/commerce-manager/product-experience-manager/pricebooks/pxm-pricebooks).
    1. From **Start Date / Time - End Date / Time**, click **Start date** to display the calendar. 
    1. Use the calendar to select a start date and time. 
    1. Click **OK**.
    1. Use the calendar to select an end date and time.
    1. Type a price for each of the available currencies. You can add currencies under **System** in [Store Settings > Currencies](/docs/commerce-manager/product-experience-manager/currencies/manage-currencies).
    1. Click **Add Sale**.

   :::tip
   When displaying your product in your storefront, you can choose to display both the list price and the sale price or the sale price only, depending on your requirements. 
   ![Custom](/assets/sale-price.png)
   :::

1. Click **Next** or **Save & Exit**.

## Configuring automatic/cumulative bundle pricing

If you want the price of a bundle generated dynamically based on the sum of the component products included in a bundle, ensure that each product in the bundle has a price. 

You can configure sale pricing for a bundle that uses automatic/cumulative pricing.

1. Go to **Products**.
1. In **All Products**, find the bundle to which you want to add a template.
1. Select **Actions** > **Edit** next to the bundle.
1. Select **Pricing**.
1. To add a sale price to an option, expand **Advanced Pricing**. If any of the products in a bundle already have a sale price, these details are displayed in **Sale Price of Options**.
1. To add a sale price, click **Find an option to add a sale price**. A list of available options is displayed.
1. From **Action**, next to the option you want to add a sale price for, select **+**.
1. Click **Add Sale Price**.

    1. To associate the option with a price book, from **Price Book** list, select a price book.
    1. In **Sale Name**, type a name for your sale. For more information, see [Price books](/docs/commerce-manager/product-experience-manager/pricebooks/pxm-pricebooks).
      1. From **Start Date / Time - End Date / Time**, click **Start date** to display the calendar. 
    1. Use the calendar to select a start date and time. 
    1. Click **OK**.
    1. Click **End date** to display the calendar. 
    1. Use the calendar to select an end date and time.
    1. Type a price for each of the available currencies. You can add currencies in [Settings > Currencies](/docs/commerce-manager/product-experience-manager/currencies/manage-currencies).
    1. Click **Add Sale**.
    1. Repeat these steps for each of the options you want to add a sale price for.
1. Click **Save & Exit**.