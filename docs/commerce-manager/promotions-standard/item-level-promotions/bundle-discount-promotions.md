---
title: Creating Bundle Discount Promotions
nav_label: Bundle Discount Promotions
sidebar_position: 3
---

:::caution
- We recommend not to set maximum discount value for this promotions. Setting maximum discount value for this promotion conflicts with the promotion settings.
- Hierarchy-based promotions are not supported for fixed bundle discount promotion.
:::

1. Go to **STORE > Promotions Standard**.
1. Click **Add Promotion**.
1. In the **Name** field, enter a name for the promotion.
1. In the **Description** field, enter a description for the promotion.
1. In the **Date range**  field, select the start date and time and end date and time of the promotion.
1. To enable the promotion, click the **Enabled** toggle.
1. (Optional) To automatically apply the promotion, click the **Automatic** toggle.
  If this field is not selected, the promotion requires the buyer to enter a code in the cart to get the discount. For more information, see the [Adding codes](/docs/commerce-manager/promotions-standard/overview#creating-promotion-codes) section.
1. (Optional) In the **Minimum cart value** field, click **Specify values**.
   The **Set minimum cart value** window is displayed.
      1. In the **Amount** field, enter a minimum cart value before the promotion can be applied
      1. In the **Select currency** field, select a currency.
      You can add one or several value specifications in different currencies. For more information about currencies, see the [Managing Currencies in Commerce Manager](/docs/commerce-manager/product-experience-manager/currencies/manage-currencies) section.
      1. Click **Save**.
1. In the **Promotion type** field, select **Bundle**.
1. (Optional) In the **Quantity limit per use** field, specify the maximum number of application of a promotion per cart for a single use of a promotion.

    Each unique product in the cart will qualify for a promotion for X number of times depending upon what you specified in the **Quantity limit per use** field. For example, if the **Quantity limit per use** field is set to 1, and *SKU A* and *SKU B* are in the cart with a quantity of two each, only one instance of each *SKU A* and *SKU B* will qualify for a promotion.
1. In the **Define schema** section, do the following:
    1. Under **Currencies**, click **Add currency**.
    1. In the **Amount** field, add the amount for the bundle.
    1. In the **Select currency** field, select a currency code.
    1. Click **Save**.
    1. Under **Bundle requirements**, click **Add requirement**.
    1. In the  **Product SKUs / Product IDs** field, enter the product IDs or SKUs of the first item in the bundle.
    1. In the **Quantity** field, enter the quantities of products to be applied for the promotion.
    1. Click **Save**.
    1. Repeat step 5 to add more items to the bundle.
    1. Click **Save**.
1. Click **Save**.

## Example for Bundle

For a bundle promotion *(SKU1 or SKU2 ) + SKU3 for $20*, the promotion is applied if the bundle contains *SKU1 and SKU3* or *SKU2 and SKU3*. Do the following to define schema for this promotion.

1. Click **Add requirement** and enter *SKU1* and *SKU2* separated by a comma.
1. Click **Save**.
1. Click **Add requirement** again and enter *SKU3*.
1. Click **Save**.

## Related Resources

- [Promotion Management Overview](/docs/commerce-manager/promotions-standard/overview)
- [Customers](/docs/customer-management/customers)
- [Catalog](/docs/commerce-manager/product-experience-manager/catalogs/catalog-configuration)
