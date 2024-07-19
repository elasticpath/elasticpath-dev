---
title: Creating a Promotion in Promotions Builder
nav_label: Creating a Promotion in Promotions Builder
sidebar_position: 1
---

## Creating a Promotion in Promotions Builder

1. Go to **STORE > Promotions Builder**.
1. Click **Add Promotion**.
1. In the **Name** field, enter a name for the promotion.
1. In the **Description** field, enter a description for the promotion.
1. In the **Start Date** field, select the start date of the promotion.
1. In the **End Date** field, select the end date of the promotion.
1. Enable the **Activated** toggle to activate the promotion. It is disabled by default.
1. (Optional) Select the **Coupon-driven** checkbox if you prefer to create a single code or generate bulk codes manually. If not selected, a promotion code is automatically generated for you.
1. In the **Promotions Engine** section, create a rule by adding at least one condition and one action. See [Setting up a Promotions Builder](#setting-up-a-promotions-builder) and [Creating Actions](#creating-actions).
1. Select **Create Promotion**.

## Setting up a Promotions Builder

In the **Promotions Engine** section, do the following:

1. In the **Currency** field, select a currency that is applicable for the promotion.
1. In the **Catalog** field, select catalogs that are eligible for the promotion.
1. Under **Conditions**, select either **all** or **any** to have the following conditions met.
    - **Cart**: Configure this condition by setting either a minimum cart subtotal or quantity of cart items. See [Creating a Cart Condition](#creating-a-cart-condition). 
    - **Cart Items**: Configure this setting by specifying the desired product quantity or value. See [Creating a Cart Items Condition](#creating-a-cart-items-condition).
    - **Custom Attributes**: Configure this setting by choosing your own attributes. See [Adding Cart Custom Attributes](#adding-cart-custom-attributes).

### Creating a Cart Condition

1. Select **Cart** in the **Conditions** section.
1. Select either **Subtotal** or **Items quantity** to specify a condition for the cart.
1. Choose any one of the following operators:
    - **is equal to**
    - **is greater than**
    - **is equal or greater than**
    - **is less than**
    - **is equal or less than**

1. If you selected **Subtotal**, enter the desired amount. This value is used to determine the subtotal of the cart, based on the operator selected in the previous step. For example, if you selected the **is greater than** operator, the  **Subtotal** must exceed the specified amount.
1. If you selected **Items quantity**, enter the quantity of items.

    You can add multiple conditions according to your business requirements.

### Creating a Cart Items Condition

1. Select **Cart Items** in the **Conditions** section.
1. Choose **is** to include cart items in the promotion.
1. Select one of the following to specify the type of cart items you want to apply to the condition:
    - **Product**: Select the **+** icon. Then, in the **Select Product** window either select a product from the list or include a custom SKU in the **Add Custom SKU** field. For instructions on searching for products in the **Select Product** window, see [Searching for Products](#searching-for-products). 
    - **Category**: Select the **+** icon and select the hierarchy checkbox. Then, click the hierarchy if you want to add nodes to your promotion conditions.
    - **Attribute**: Select the template from the list, select the attribute, and then set the value for the selected attribute.
1. Select **save** to apply the condition.

### Adding Cart Custom Attributes

Ensure that you have created a cart custom attribute in order for the discount to function properly. To create one, refer to [Create a Cart with Custom Attributes](/docs/api/carts/create-a-custom-cart).

Let's say you want to add a special attribute for your customers, like their membership level.

1. Choose **Custom Attributes** in the **conditions** section.
1. Enter the name of your attribute key. For example, you can enter *membership level*.
1. Choose one of the following types depending on your attribute key.
    - **String**
    - **Float**
    - **Integer**
    - **Boolean**
1. Enter the specific value depending on your attribute. For example, *gold* or *silver*.
1. Select **save** to apply the changes.

## Creating Actions

An Action describes the specific action to be executed when a shopper meets the eligibility criteria and fulfills all the conditions. It specifies the type of discount and its application to eligible items.

You can create the following actions:

- **Cart Discount**. See [Creating a Cart Discount Promotion](#creating-a-cart-discount-promotion).
- **Item Discount**. See [Creating an Item Discount Promotion](#creating-an-item-discount-promotion).
- **BXGY**. See [Creating a BXGY Promotion](#creating-a-bxgy-promotion).

### Creating a Cart Discount Promotion

To create a cart discount promotion, do the following:

1. Select **Cart Discount** in the **Actions** section.
1. Select **percentage** or **amount**.
1. If you selected **percentage**, enter percentage to be included as the cart total discount.
1. If you selected **amount**, specify amount for the cart total discount.
1. Select  **+ more options**. This option is available only when you choose **percentage**.
1. In the **value** field, enter the maximum allowed discount. 
1. Select **save**.

### Creating an Item Discount Promotion

To create an item discount promotion, do the following:

1. Select **Item Discount** in the **Actions** section.
1. Select one of the following:
    * **percentage**
    * **amount**
    * **fixed price**
1. In the the **value** field, enter the value based on your selection in the previous step.
1. If you selected **fixed price**, enter the number of quantities in the **quantity** field. This is shown only if you select the **fixed price** option.
1. Select **all**, **cheapest**, or **most expensive** items in cart. The default value is **all**.
1. If you selected the **cheapest** or **most expensive** options, select quantities for the items to be included in the cart.
1. Select **+ more options**.
1. In the **value** field, enter the value to assign a maximum allowed discount for the promotion. This field is shown only if you choose **percentage** as your discount type.
1. Enter the maximum quantities in the **Quantity** field to assign the maximum line quantities of items within the same SKU.
1. Select **save**.

### Creating a BXGY Promotion

To create a BXGY promotion, do the following:

1. Select the required conditions. See [Setting up a Rule Promotion](#setting-up-a-rule-promotion).
1. Select **BXGY** in the **Actions** section.
1. Select either **percentage** or **amount** discount.
1. If you selected **percentage**, enter the percentage value.
1. If you selected **amount**, specify the amount for the promotion.
1. Select **all**, **cheapest**, or **most expensive** items in the cart to qualify for the promotion. 
1. Specify the type of items to include in the promotion from the following options:
    - **Product**: Select the **+** icon. Then, in the **Select Product** window either select a product from the list or include a custom SKU in the **Add Custom SKU** field. For instructions on searching for products in the **Select Product** window, see [Searching for Products](#searching-for-products).
    - **Category**: Select the **+** icon and select the hierarchy checkbox. Then, click the hierarchy if you want to add nodes to your promotion.
    - **Attribute**: To add the attribute, do the following:
        1. Select the template from the list.
        1. Select the attribute from the list. 
        1. Select the value from the list corresponding to the chosen attributes.
1. Click **+ more options**.
1. Enter the value to assign a maximum allowed discount for the promotion. This field is shown only if you choose **percentage** as your discount type.
1. Enter the maximum quantities in the **Quantity** field to assign the maximum quantities of items within the same SKU.
1. Select **save** to apply the changes.

## Searching for Products

To find specific products to include in your promotion, follow these steps in the **Search Product** Window:

1. In the first column, select the drop-down arrow and choose any one of the following options to search for the product based on:
    - **SKU**
    - **Name**
    - **Slug**
    - **UPC/EAN**
    - **MPN**
    - **Description**
1. In the next column, select the drop-down arrow and choose any one of the following options:
    - **is**
    - **is like**
    - **ends with**
    - **starts with**

1. In the **Find product** field, enter the desired value based on your selection in the previous steps. 
1. Select **Search**.

## Related Resources

- [Rule Promotions API](/docs/rule-promotions/overview)
