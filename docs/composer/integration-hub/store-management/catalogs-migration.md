---
title: Commerce Legacy to Product Experience Manager Catalogs Migration 
nav_label: Legacy to Product Experience Manager Catalogs Migration 
sidebar_position: 90
---

The Commerce Legacy to Product Experience Manager Catalog Migration is a utility in the **Integrations Hub** of Commerce Manager. This enables you to migrate all Version 2 capabilities, for example, `Products`, `Extended Data`, `Brands`, and `Collections`to Product Experience Manager.

## What Legacy Features are Supported in Product Experience Manager?

| Legacy Features | Product Experience Manager |
| ---------------------------- |----------------------------|
| Categories and subcategories | ✅                          |
| Brands and Collections | ✅                          |
| Product custom fields | ✅                          |
| Variation, option, and option modifiers | ✅                          |

## How are Legacy Features Represented in Product Experience Manager?

{% table %}
* Legacy Features
* Product Experience Manager
---
*
   Categories and subcategories
*
  * Hierarchies and nodes. 
  * For more information, see [Hierarchies](/docs/pxm/hierarchies/hierarchy).
---
*
   Brands and collections
*
  * Products from a specific brand are grouped together and represented as a node in a hierarchy.
  * Once the products and hierarchies are created in Product Experience Manager, the relationships between the nodes and products are migrated from Legacy catalogs.
---
*
  Product custom fields
*
  * Product templates.
  * If there are more than 100 custom fields, multiple product templates are created.
  * The templates are titled as `Products 1`, `Products 2`, and so on.
  * The templates are assigned to the products.
  * For more information, see [Templates](/docs/pxm/products/extending-pxm-products/pxm-product-templates-api/pxm-product-templates-overview).
---
*
  Variation, options, and option modifiers
*
  * Variations.
  * All option modifiers are currently supported with the exception of `sku_builder` and `slug_builder` modifiers. Please contact your customer service representative, if you want to add any of the modifiers to the supported list.
  * Price modifiers are supported and migrated to the price book, replicating the same impact on product catalogs.
  * Price modifier reference is added to the variations.
  * Variation option modifier provides the ability to differentiate between catalogs.
  * For more information, see [Product Variations](/docs/pxm/products/pxm-product-variations/pxm-variations).
---

{% /table %}

## Prerequisites

You must complete the following before migrating legacy catalogs to Product Experience Manager product catalogs.

### Composable Commerce connection details

You must log in as a user with seller admin privileges.

1. In Commerce Manager, under **SYSTEM**, click **Application Keys**. 
2. Click **Create New**.
3. Click **Create**.

    The **New Application Key** page appears.

4. In the **Name** field, enter a name. For example, **Legacy Migration Tool**.
5. Click **Dismiss**.

    The **Keys** page appears.

6. Copy the following values:

    - API Base URL
    - Client ID
    - Client Secret

7. Enter a value for the **Secret Phrase**. This is required when you want to manually trigger the migration. For example, {"secret": "This is my answer to the secret phrase."}.

## Configuring Legacy to Product Experience Manager Migration Tool

Once you have completed the [Prerequistes](#prequisites), you are ready to configure the Legacy to Product Expereince Manager Migration tool:

1. In Commerce Manager, under **COMPOSER**, click **Integrations Hub**.
2. Under **Store Management & Configuration**, click **Legacy to Product Experience Manager Catalog Migration**.
3. Click **Configure**.

    A window appears where you must configure the tool. In the **Name** field, the name that you have previously entered for this migration tool appears.

4. Click **Next**.
5. In the **Initial Configuration**, enter the following values that you have previously copied:

    - Client ID: This is the Commerce Client ID.
    - Client Secret: This is the Commerce Client Secret
    - Base URL: Remove the URL that is not applicable to your location.
    - Secret Phrase: This is the secret phrase that you have saved while configuring the Commerce Connection details.

6. Click **Finish**.

    You have successfully completed the steps required to start migrating the legacy catalogs to Product Experience Manager catalogs.

## Migrating Legacy Catalogs to Product Expereince Manager Catalogs

The migration process is completed in three phases:

1. **Taxonomy migration**: During this phase, the products classification is migrated to Product Experience Manager.
2. **Product and product price migration**: During this phase, products along with their prices are migrated to Product Experience Manager.
3. **Categories and subcategories migration**: During this phase, products are assigned to hierarchies and nodes in Product Experience Manager. 

### Step 1: Taxonomy migration

1. In Commerce Manager, under **COMPOSER**, click **Integrations Hub**.
2. Click **Legacy to Product Experience Manager Catalog Migration**.
3. Click the **Test** tab.
4. In the **Flow Selector** list, select **Copy Categories to Product Experience Manager**.
5. In the **Payload body**, add a JSON object consisting of 1 key value pair {"secret": "your secret phrase."}.
6. Copy the JSON object as you require this later.
7. Click **Save & Run Test**.

    ![Legacy Catalogs to Product Experience Manager Catalogs Migration](/assets/legacy-catalogs-pxm-catalogs-migration.png)

    In the **Logs** tab, you can check the progress of this migration. When the **Message** column for this migration is updated to **Ending Instance Legacy to PxM Catalog Migration - Copy Categories to Product Experience Manager**, the taxonomy migration process is complete.

### Step 2: Products and prices migration

1. In Commerce Manager, under **COMPOSER**, click **Integrations Hub**.
2. Click **Legacy to Product Experience Manager Catalog Migration**.
3. Click the **Test** tab.
4. In the **Flow Selector** list, select **Copy Products and Prices to Product Experience Manager**.
5. In the **Payload body**, paste the JSON object that you previously copied while migrating the taxonomy.
6. Click **Save & Run Test**.

    In the **Logs** tab, you can check the progress of this migration. When the **Message** column for this migration is updated to **Ending Instance Legacy to PXM Catalog Migration - Copy Products and Prices to Product Experience Manager**, this migration is complete.

### Step 3: Assignment of products to nodes migration

1. In Commerce Manager, under **COMPOSER**, click **Integrations Hub**.
2. Click **Legacy to Product Experience Manager Catalog Migration**.
3. Click the **Test** tab.
4. In the **Flow Selector** list, select **Assign Products to Nodes**.
5. In the **Payload body**, paste the JSON object that you previously copied while migrating the taxonomy.
6. Click **Save & Run Test**.

   The products are assigned to hierarchies and nodes. Hierarchies and nodes in Product Experience Manager function similarly to brands and collections in Version 2.

## Creating and Publishing Product Experience Manager Product Catalog with Legacy Products

After the migration is complete, you can create a Product Experience Manager product catalog with price book and hierarchies.
Perform the following steps:

1. In Commerce Manager, under **PRODUCT EXPERIENCE MANAGER**, click **Catalogs**.

    The **Catalogs** page appears.

2. Click **Add Catalog**.

    The **Catalog: Add Catalog** page appears.

3. In the **Name** field, enter a name for the catalog.
4. (Optional) In the **Description** field, enter a description for the catalog.
5. In the **Hierarchy** field, select the hierarchies you want to add to the catalog. You can add more than one hierarchy to a catalog.
6. In **Price Books**, select a price book.
7. Click **Save**.
8. Under **PRODUCT EXPERIENCE MANAGER**, click **Catalogs**.

    The catalog that you have just created is listed on this page.

9. Double-click the catalog and then click **Publish**.

   Or,  
   
   Click [Three dots](/assets/three-dots.png) next to the catalog and then click **Publish**.

## Demos

{% youtube src="https://www.youtube.com/embed/y3rEhfSElsw" label="Integrations Hub - Legacy to Product Experience Manager Migration" /%}








