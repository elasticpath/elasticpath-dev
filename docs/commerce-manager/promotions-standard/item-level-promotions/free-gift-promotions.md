---
title: Creating Free Gift Promotions
nav_label: Free Gift Promotions
sidebar_position: 6
---

:::caution
- We recommend not to set maximum discount value for this promotions. This setting doesn’t have any effect on the promotion.
- Hierarchy-based promotions are not supported for fixed bundle discount promotion and free gift promotion.
:::

1. Go to **STORE > Promotions Standard**.
1. Click **Add Promotion**.
1. In the **Name** field, enter a name for the promotion.
1. In the **Description** field, enter a description for the promotion.
1. In the **Date range**  field, select the start date and time and end date and time of the promotion.
1. To enable the promotion, turn on the **Enabled** toggle.
1. (Optional) To automatically apply the promotion, enable the **Automatic** toggle.
    
    If this field is not selected, the promotion requires the buyer to enter a code in the cart to get the discount. For more information, see the [Adding codes](/docs/commerce-manager/promotions-standard/overview#creating-promotion-codes) section.
1. (Optional) In the **Minimum cart value** field, click **Specify values**.
    
    The **Set minimum cart value** window is displayed.
   1. In the **Amount** field, enter a minimum cart value before the promotion can be applied.
   1. In the **Select currency** field, select a currency.
      You can add one or several value specifications in different currencies. For more information about currencies, see the [Managing Currencies in Commerce Manager](/docs/commerce-manager/product-experience-manager/currencies/manage-currencies) section.
    1. Click **Save**.
1. In the **Promotion type** field, select **Free gift**.
1. (Optional) In the **Quantity limit per use** field, specify the maximum number of application of a promotion per cart for a single use of a promotion.

    Each unique product in the cart will qualify for a promotion for X number of times depending upon what you specified in the **Quantity limit per use** field. For example, if the **Quantity limit per use** field is set to 1, and *SKU A* and *SKU B* are in the cart with a quantity of two each, only one instance of each *SKU A* and *SKU B* will qualify for a promotion.
1. In the **Define schema** section, do the following:
    1. Under **Bundle requirements**, click **Add requirement**.

        The **Add requirement** window is displayed.
    1. In the **Product SKUs / Product IDs** field, enter the product IDs or SKUs for which a free gift is included.
    1. In the **Quantity** field, enter the quantities of products to be applied for the promotion. 
    1. Click **Save**.
    1. (Optional) Enable the **Automatically add free gift items to the cart** toggle to add free gifts automatically to the shopping cart.

        :::caution
        The **Automatically add free gift items to the cart** toggle is enabled only when the **Automatic** toggle is turned on. If there is insufficient stock for all eligible free products, no free gifts are added to the cart.
        :::
        
    1. Under **Gifts**, Click **Add gift**.

        The **Add requirement** window is displayed.
    1. In the **Product SKUs / Product IDs** field, enter the product IDs or SKUs of the free gift items separated by comma.
    1. Click **Save**.
1. Click **Save**.

## Related Resources

- [Create a Free Gift Promotion](/docs/commerce-manager/promotions-standard/item-level-promotions/free-gift-promotions)
- [Promotion Management Overview](/docs/commerce-manager/promotions-standard/overview)
- [Customers](/docs/customer-management/customers)
- [Catalog](/docs/commerce-manager/product-experience-manager/catalogs/catalog-configuration)
