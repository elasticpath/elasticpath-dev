---
title: Configure Shopper Catalog Rules
nav_label: Configure Shopper Catalog Rules
sidebar_position: 60
---

If your store has more than one catalog and you want to manage when certain catalogs are displayed, add catalog rules to control when a catalog is displayed. 

:::caution
You cannot create catalog rules for organization catalogs.
:::

A catalog rule contains the catalog you want to set the rule for and how you want to display it in the storefront. For example, you can display different catalogs based on how a shopper accesses your store, such as through a mobile app or a web storefront. You can also display different catalogs to different shoppers and define custom criteria by creating tags. With tags, you can create region-specific tags so that the catalog displays only in the specified regions. You can also specify the time schedules when you want a catalog's content to display in the storefront; for example, a winter seasonal catalog appears for a specific time period and it might have different pricing from other catalogs. A catalog customized for a sale is published on a specific date and is offset after the end date specified in the schedule.

If you only have one catalog for all customers and channels, you need not set a catalog rule. If a catalog rule has no criteria defined, it is the default catalog rule.

## Creating catalog rules

1. In the **Product Experience Manager > Catalogs** page, click the **Rules** tab.
1. Click **Add Rule**.
1. In the **Name** field, enter a name for the rule without any spaces.
1. (Optional) In the **Description** field, enter a description for the rule.
1. In the **Catalog** field, select a catalog that you want to set the rule for.
1. (Optional) In the **Accounts** field, select the account names of accounts eligible to view the catalog. When a user has logged in with the account, they see the configured catalog. If you leave this field empty, all accounts can view the catalog.
1. (Optional) In the **Customer** field, select the email address of the customers eligible to view the catalog. If you leave this field empty, all customers can view the catalog.
1. (Optional) In the **Channels** field, enter the channels in which this catalog can be displayed.

    The channel that matches the channel specified in a catalog displays that catalog in the storefront. If you leave this field empty, all channels display the catalog. Ensure that you press enter after typing each channel name.

1. (Optional) To further restrict the eligibility criteria for this rule, in the **Tags** field, enter user-defined tag.
1. (Optional) To add a time schedule when you want the catalog to display, click [Add schedule to catalog rules](#add-schedule-to-catalog-rules).
1. Click **Save**.

### Add schedule to catalog rules

1. Click the plus icon next to **Add Schedule**.
2. Enter the start and the end date and time.
3. Click **OK**.
4. Click **Add Schedule**.

![Add Schedule to Catalog Rules](/assets/catalogrulesschedule.gif)

:::note
Commerce runs on Coordinated Universal Time (UTC) time and conforms to RFC 3339. 
:::

### Next step

Publish the catalog to apply the rule to the store. For more information, see [Publishing Catalogs](/docs/commerce-manager/product-experience-manager/catalogs/publishing-catalogs).

## Editing catalog rules

1. In the **Product Experience Manager > Catalogs** page, click the **Rules** tab.
1. To edit a rule, do one of the following and update the rule as required:

    - Double-click a rule.
    - Click the **...** icon in the catalog listing and click **Edit**.
    
1. Click **Save**.

### Next step

Publish the catalog to apply the changes to the store. For more information, see [Publishing Catalogs](/docs/commerce-manager/product-experience-manager/catalogs/publishing-catalogs).

## Deleting catalog rules

1. To delete a catalog rule, in the **Rules** page, do one of the following:

    - Click the **...** icon in the rule listing and click **Delete**.
    - Select the checkbox in the rule listing and click **Actions > Delete**.

1. To delete more than one catalogs, select the checkbox in the rule listing of the rules that you want to delete and click **Actions > Delete**.

### Next step

Publish the catalog to apply the changes to the store. For more information, see [Publishing Catalogs](/docs/commerce-manager/product-experience-manager/catalogs/publishing-catalogs).

## Related Resources

- [Understanding Catalogs in Product Experience Manager](https://share.vidyard.com/watch/NuaWW4decikrcmMAFoWPSd?)
- [Configuring Catalogs & Catalog Rules in Commerce Manager](https://share.vidyard.com/watch/LGwm63Use3BWuT6tkbkn4Z?)
