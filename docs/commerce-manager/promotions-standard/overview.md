---
title: Promotions
nav_label: Promotions
sidebar_position: 1
---

You can manage promotions on the **STORE > Promotions Standard** page.

## Creating Promotions

:::caution
- You cannot change the promotion type or schema after creating a promotion.
- If you want to restrict the usage of a promotion, do not select the **Automatic** field in promotion setting and ensure that you create a code for the promotion.
- You can use product ID instead of product SKU to specify products.
:::

1. Go to **STORE > Promotions Standard**.
1. Click **Add promotion**.
1. Enter the the required information to create the following promotions:

    - [Cart-level fixed discount promotions](/docs/commerce-manager/promotions-standard/cart-level-promotions/cart-level-fixed-discount)
    - [Cart-level percentage discount promotions](/docs/commerce-manager/promotions-standard/cart-level-promotions/cart-level-percentage-discount)
    - [X for Y discount promotions](/docs/commerce-manager/promotions-standard/item-level-promotions/x-for-y-discount-promotions)
    - [X for amount discount promotions](/docs/commerce-manager/promotions-standard/item-level-promotions/x-for-amount-discount-promotions)
    - [Bundle discount promotions](/docs/commerce-manager/promotions-standard/item-level-promotions/bundle-discount-promotions)
    - [Item fixed discount promotions](/docs/commerce-manager/promotions-standard/item-level-promotions/item-fixed-discount-promotions)
    - [Item percentage discount Promotions](/docs/commerce-manager/promotions-standard/item-level-promotions/item-percentage-discount-promotions)
    - [Free gift promotions](/docs/commerce-manager/promotions-standard/item-level-promotions/free-gift-promotions)

:::caution
- We recommend not to use the **Maximum discount value** setting for the following promotions:

    - [Cart-level fixed discount promotions](/docs/commerce-manager/promotions-standard/cart-level-promotions/cart-level-fixed-discount)
    - [Item fixed discount promotions](/docs/commerce-manager/promotions-standard/item-level-promotions/item-fixed-discount-promotions)
    - [X for Y discount promotions](/docs/commerce-manager/promotions-standard/item-level-promotions/x-for-y-discount-promotions)
    - [X for amount discount promotions](/docs/commerce-manager/promotions-standard/item-level-promotions/x-for-amount-discount-promotions)
    - [Bundle discount promotions](/docs/commerce-manager/promotions-standard/item-level-promotions/bundle-discount-promotions)
    - [Free gift promotions](/docs/commerce-manager/promotions-standard/item-level-promotions/free-gift-promotions)

- The **Promotion Exclusions** setting specifies the products to be excluded from the cart-level promotions, such as `fixed_discount` and `percent_discount`. However, the stores that use [simple calculation method](/docs/api/settings/settings-introduction#calculation-method) do not support excluding products from promotions.
- Line-item discounts are only supported by the line calculation method. For more information about this method, see the [Calculation Method](/docs/api/settings/settings-introduction#calculation-method) section.
:::

## Creating Promotion Codes

After creating a promotion, you can add codes for the promotion. Customers must enter this code to avail the promotion. For the code to work, ensure that the **Automatic** field in the promotion settings is not selected.

1. Navigate to **STORE > Promotions Standard**.
1. Select the promotion for which you want to create a code.
1. Go to the **Promotion Codes** tab. 

    The **Promotion Codes** tab displays the following information:

    - **Code ID**
    - **Usage limit type**
    - **Remaining Uses**
    - **Max Uses**
    - **Creation Date** 
    - **Restrictions**
    - **Actions**

1. On the right-hand side, click **Add a new promotion code**.
1. Click one of the following tabs:

    - [**Add a single code**](#adding-single-code)
    - [**Bulk generate codes**](#generating-bulk-codes)

1. Enter the required settings.
1. Click **Save**.

### Adding a single code

To add a new promotion code, follow these steps:

1. Go to **STORE > Promotions Standard**.
1. Select the promotion for which you want to create a code.
1. Go to the **Promotion Codes** tab.
1. On the right-hand side, click **Add a new promotion code**.
1. In the **Add a single code** tab, enter the following details:
  
    - **Usage limit type** : Choose whether the usage limitation is at the item-level or cart-level. The options are **Per Cart** and **Per Line Item**.
    - (Optional) **Maximum uses** : Enter the maximum the number of times a code can be used for this promotion. If no value is set, customers can use unlimited number of times. We recommend you to set value greater than or equal to 1.
    - (Optional) **Restrict to user** : Enter the customer ID of users who are allowed to use this code.
    - **Code** : Define the code for the promotion. You can manually enter the code.

1. Click **Save**.

### Generating bulk codes

:::caution
- You can only generate a maximum of 1000 codes for a single promotion.
- When generating more than 1000 codes, the promotion's duration must be limited to a maximum of 365 days from its start date. If you need to increase the number of promotion codes for a single promotion, reach out to our [customer success team](mailto:customersuccess@elasticpath.com).
:::

With bulk generating codes, you can generate large number of unique promotion codes. To do so, follow these steps:

1. Go to **STORE > Promotions Standard**.
1. Select the promotion name for which you want to create codes.
1. Go to the **Promotion Codes** tab.
1. On the right-hand side, click **Add a new promotion code**.
1. In the **Bulk generate codes** tab, enter the following details:

    - **Number of codes to generate** : Specify the number of codes to be generated.
    - **Code Length** : Specify the desired code length, which ranges from 8 to 16 characters. The default code length is eight characters, and a dash is added after every four characters in the code. For example, *aa2b-3c4d*.
    - (Optional) **Promotion End Date** : This field appears when the promotion's expiration date extends beyond a year. The promotion expiry date must be 365 days. Therefore, you are required to set the end date and time for the promotion in such cases. Under **Quick End Date Select**, choose **From today's date** if you want to start the promotion today or **From promotion start date** if you want to start the promotion in the future.
    - (Optional) **Usage Limit Type** : Indicate whether the usage limitation is at the item-level or cart-level. The options are **Per Cart** and **Per Line Item**.
    - (Optional) **Maximum uses** : Enter the maximum number of usages of a code for a promotion. If no value is set, customers can use the code unlimited number of times. We recommend you to set value greater than or equal to 1.
    - (Optional) **Prepend Value** : Add a prefix value to the generated codes. When codes are generated, the specified prepend value is added as a prefix to each code. For example, if you set *summer* as prepend value and *aa2b-3c4d* is generated, the promotion code is *summer-aa2b-3c4d*.
    - (Optional) **Code Group Name** : Enter the name for the job invoked to generate the code. See [Create a Job](/docs/api/promotions/create-a-promotion-job).
    
1. Click **Save**.

    The codes generated for a promotion are displayed on the details page of the promotion.

    :::caution
    Refresh your Commerce Manager to view the generated codes on the **Promotions Codes** tab.
    :::

## Searching a Promotion Code

You can find a promotion code within all promotions or within a specific promotion.

1. Go to **STORE > Promotions Standard**.
1. If you want to search within a specific promotion, click the promotion name and go to the **Promotion Codes** tab.
1. In the **Search coupon code** field, enter the promotion code that you want to find.
    
    The promotion code within a specific promotion is displayed.
1. If you want to search within all promotions, go to **STORE > Promotions** and directly enter the promotion code in the **Search coupon code** field.

    The promotion name that contains the associated promotion code is displayed.

## Deleting a Code

1. Go to **STORE > Promotions Standard**.
1. Click the promotion name for which you want to add a code.
1. Go to the **Promotion Codes** tab.
1. Select the **CodeID** that you want to delete.
1. In the **Actions** column, click the ellipsis associated with the **CodeID** and select **Delete** to delete the code.

## Duplicating Promotions

You can duplicate an existing promotion and use the details as required in another promotion. However, the **Date range** field is not duplicated.

1. Go to **STORE > Promotions Standard**.
1. To duplicate a promotion, do one of the following:
    - In the **Actions** column, under the list of **All Promotions**, click the ellipsis associated with **Name** of the promotion and select **Duplicate**.
    - Open the promotion that you want to duplicate and click **Action > Duplicate** at the end of the page.

    The selected promotion is duplicated and opened in a new tab with the following details:

    - The name of the source promotion is duplicated with the suffix, *-copy*. For example, *50% off order - copy*.
    - The description of the source promotion is duplicated with the suffix, *-copy*. For example, *This promotion is to give 50% off on an order- copy*.
    - The default status of the duplicated promotion is always **Disabled**.
    - If the source promotion is applied automatically, the automatic status is duplicated and new promotions code is auto-generated.
    - Minimum cart value, maximum discount value, promotion type, schema, and custom field settings are duplicated.
1. Make the required changes and click **Save**.

## Editing Promotions

:::caution
- You cannot change the promotion type or schema after creating a promotion.
- Any changes made to the active and enabled promotion can impact an active promotion that has been already applied to a cart. For example, switching the promotion from automatic to manual, adjusting the discount amount, extending the promotion date, or modifying the schema.
:::

1. Go to **STORE > Promotions Standard**.
1. Click the promotion name that you want to edit.
1. Change the settings as required.
1. Click **Save**.

## Viewing Promotion History

The **History** tab provides version history of a promotion You can view the version details except changes in the promotion code and custom fields, of each version.

1. Go to **STORE > Promotions Standard**.
1. To view history of a promotion, click the promotion name.
1. Click the **History** tab.
    A list of versions with the following information about each version is displayed:

    - **Date / Time**: Date and time when the update in made in the promotion.
    - **Updated Fields**: The name of the fields that are updated in the corresponding version.
    - **Actions**: An option to view the details of the selected version. You can only view the details in the **Version Details** tab. You cannot edit the details.

The history table displays the latest edit first and earliest original last. For any changes in the promotion codes and custom fields of the promotion, the **Updated Fields** displays *Promotion codes and/or custom fields* value. However, when you click **Actions** to view the details, the **Version Details** tab does not reflect the changes.

## Managing Code Export

Using the **Manage Code Export** tab, you can export your promotion codes and download them in CSV format. To do so, follow these steps:

1. Go to **STORE > Promotions Standard**.
1. Select the promotion name for which you want to export the codes.
1. Go to the **Promotion Codes** tab.
1. On the right side, click **Manage Code Export**.
1. Click **Create export** to initiate the code export process.

    Once the export is completed, you can download the exported file in CSV format.

## Related Resources

- [Promotions Standard](/docs/api/promotions/promotions-standard-introduction)
- [Customers and Accounts](/docs/api/accounts/account-management-introduction)
- [Catalog](/docs/api/pxm/catalog)
- [Create a Job](/docs/api/exporter/create-job)

### Demos

- <iframe width="560" height="315" src="https://www.youtube.com/embed/MQTrLZp3cjI" title="Configuring a Promotion" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
- <iframe width="560" height="315" src="https://www.youtube.com/embed/fyQV8YWj4os" title="Configuring a Hierarchy-Based Promotion" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
- <iframe width="560" height="315" src="https://www.youtube.com/embed/x7TP4dsjNYs" title="Configuring an AND/OR Promotion Conditions" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>



