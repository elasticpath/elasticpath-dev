---
title: Creating Item Percentage Discount Promotions
nav_label: Item Percentage Discount Promotions
sidebar_position: 5
---

:::caution
We recommend to use **Advanced (Conditions v2)** settings.
:::

1. Go to **STORE > Promotions Standard**.
1. Click **Add Promotion**.
1. In the **Name** field, enter a name for the promotion.
1. In the **Description** field, enter a description for the promotion.
1. In the **Start date**  field, select the start time for the promotion.
1. In the **End date** field, the end time of the promotion.
1. To enable the promotion, select the **Enabled** field.
1. (Optional) To automatically apply the promotion, select the **Automatic** field.
    
    If this field is not selected, the promotion requires the buyer to enter a code in the cart to get the discount. For more information, see the [Adding codes](/docs/commerce-manager/promotions-standard/overview#creating-promotion-codes) section.
1. (Optional) In the **Minimum cart value** field, click **Specify values**.
   The **Set minimum cart value** window is displayed.
   1. In the **Amount** field, enter a minimum cart value before the promotion can be applied.
   1. In the **Select currency** field, select a currency.
      You can add one or several value specifications in different currencies. For more information about currencies, see the [Managing Currencies in Commerce Manager](/docs/commerce-manager/product-experience-manager/currencies/manage-currencies) section.
    1. Click **Save**.
1. (Optional) In the **Maximum discount value** field, enter the maximum possible discount amount and currency.
1. In the **Promotion type** field, select **Item percent discount**.
1. (Optional) In the **Quantity limit per use** field, specify the maximum number of application of a promotion per cart for a single use of a promotion.

    Each unique product in the cart will qualify for a promotion for X number of times depending upon what you specified in the **Quantity limit per use** field. For example, if the **Quantity limit per use** field is set to 1, and *SKU A* and *SKU B* are in the cart with a quantity of two each, only one instance of each *SKU A* and *SKU B* will qualify for a promotion.
1. In the **Define schema** section, do the following:
    1. Click **Add percentage**. 
        
        The **Add currency** window is displayed.
    1. In the **Percentage** field, enter percentage to be included for the promotion.

        You can add up to six decimal places for the percentage to be applied for the promotion.
    1. Click **Save**.
    1. In the **Catalogs** field, select the catalogs to be applied for this promotion from the list.
        
        If you do not select any catalogs from the list, all catalogs will be applied for the promotion.
    1. (Optional) In the **Targets** section, to enable the promotion for all products, click the **Apply to all products** toggle.
    1. In the **Promotion Conditions** subsection:
        
        1. To include products in a promotion, do the following:
            1. Go to **Products**.
            1. Click **Add Promotion Condition**.
            1. In the **Condition Type** field, choose **SKUs or Product IDs** to be included in a promotion.
            1. Click **Add Condition**.
        1. To include attributes and hierarchies or nodes in a promotion, do the following:
            1. Go to **Simplified (Conditions v1)**.
            1. Click **Add Promotion Condition**.
            1. In the **Condition Type** field, choose **Attributes** or **Hierarchy or Nodes** to be included in a promotion.
            1. If you chose **Attributes**, choose the **Template Slug** and **Attribute slug** from the list, enter **Attribute Value**, and then click **Add Condition**.
            1. If you chose **Hierarchies or Nodes**, enter the IDs of the hierarchies or nodes that you want to include in a promotion in the **Hierarchy / Nodes UUIDs** field, and then click **Add Condition**.
        1. To include attributes and hierarchies or nodes in a promotion based on multiple conditions at the same time, do the following:
            1. Go to **Advanced (Conditions v2)**.
            1. Click **Add Promotion Condition**.
            1. In the **Condition Type** field, choose **Attributes** or **Hierarchy or Nodes** to be included in a promotion.
            1. If you chose **Attributes**, choose the **Template Slug** and **Attribute slug** from the list, enter **Attribute Value**, and then click **Add Condition**.
            1. If you chose **Hierarchies or Nodes**, enter the IDs of the hierarchies or nodes that you want to include in a promotion in the **Hierarchy/Nodes UUIDs** field, and then click **Add Condition**.
            1. Click **+AND** to add another condition on attributes, and hierarchies or nodes to be included in a promotion.
            1. Click **+OR** to add multiple *OR* conditions on attributes, and hierarchies or nodes to be included in a promotion. 
                :::note
                Under **Advanced (Conditions v2)** settings:
                - You can add up to five **+AND** conditions inside the per **+OR** condition.
                - You can include up to 10 **+OR** conditions.
                :::
    1. In the **Promotion Exclusions** subsection:
            :::caution
             **Promotion Exclusions** subsection is enabled only when you update the **Simplified (Conditions v1)** or **Advanced (Conditions v2)** settings in the **Promotion Conditions** subsection.
            :::
        1. To exclude products from a promotion, do the following:
            1. Go to **Products**.
            1. Click **Add Promotion Condition**.
            1. In the **Condition Type** field, choose **SKUs or Product IDs** to be excluded from a promotion.
            1. Click **Add Condition**.
        1. To exclude attributes and hierarchies or nodes from a promotion, do the following:
            1. Go to **Simplified (Conditions v1)**.
            1. Click **Add Promotion Condition**.
            1. In the **Condition Type** field, choose **Attributes** or **Hierarchy or Nodes** to be excluded from a promotion.
            1. If you chose **Attributes**, choose the **Template Slug** and **Attribute slug** from the list, enter **Attribute Value**, and then click **Add Condition**.
            1. If you chose **Hierarchies or Nodes**, enter the IDs of the hierarchies or nodes that you want to exclude from a promotion in the **Hierarchy/Nodes UUIDs** field, and then click **Add Condition**.
        1. To exclude attributes and hierarchies or nodes from a promotion based on multiple conditions at the same time, do the following:
            1. Go to **Advanced (Conditions v2)**.
            1. Click **Add Promotion Condition**.
            1. In the **Condition Type** field, choose **Attributes** or **Hierarchy or Nodes** to be excluded from a promotion.
            1. If you chose **Attributes**, choose the **Template Slug** and **Attribute slug** from the list, enter **Attribute Value**, and then click **Add Condition**.
            1. If you chose **Hierarchies or Nodes**, enter the IDs of the hierarchies or nodes that you want to exclude from a promotion in the **Hierarchy/Nodes UUIDs** field, and then click **Add Condition**.
            1. Click **+AND** to add another condition on attributes, and hierarchies or nodes to be excluded from a promotion.
            1. Click **+OR** to add multiple *OR* conditions on attributes, and hierarchies or nodes to be excluded from a promotion. 
                :::note
                Under **Advanced (Conditions v2)** settings:
                - You can add up to five **+AND** conditions inside the per **+OR** condition.
                - You can include up to 10 **+OR** conditions.
                :::
1. Click **Save**.

## Related Resources

- [Promotion Management Overview](/docs/commerce-manager/promotions-standard/overview)
- [Customers](/docs/customer-management/customers)
- [Catalog](/docs/commerce-manager/product-experience-manager/catalogs/catalog-configuration)
