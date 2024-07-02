---
title: Bundle Inventory
sidebar_label: Bundle inventory
sidebar_position: 60
---

Bundle inventory allows you and your business to keep track of inventory, including a transaction-historic log.

You can track the number of bundles by SKU, if you set the number of bundles available in store. Bundle inventory can be tracked based on the availability of individual items in the bundle. In this case, the maximum number of bundles you can sell is equal to the number of the option that is least available.

You cannot track the inventory of a bundle without a SKU. However, you can track the inventory based on the availability of individual items.

Whether your bundle has a SKU or is SKU-less depends on your bundle's pricing. See [Bundle pricing](/docs/commerce-manager/product-experience-manager/bundles/bundle-pricing).

1. Go to **Products**.
1. In **All Products**, select the bundle for which you want to configure inventory.
1. Select **Actions** > **Edit** next to the bundle.
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
