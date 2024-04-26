---
title: Publishing Catalogs 
nav_label: Publishing Catalogs
sidebar_position: 30
---

When you publish a catalog, the products in the hierarchies appear in a catalog release. A catalog release provides a snapshot of product information taken at the time of publication.  Depending on how many times you have published the catalog, the latest release and the two releases prior to the latest release are available. This is useful if you want to go back to an earlier version of a catalog or see the changes that have been made between releases. You can:

- use catalog rules to specify when to display your catalog releases. See [Configure Shopper Catalog Rules](/docs/pxm/catalogs/catalogs-cm/catalog-rules).
- edit catalog releases. See [Editing catalog releases](/docs/pxm/catalogs/catalogs-cm/editing-catalogs#editing-catalog-releases).
- go back to an earlier release of a catalog. See [Deleting Catalog Releases](/docs/pxm/catalogs/catalogs-cm/deleting-catalogs#deleting-catalog-releases).

## Using Catalog Delta Files

When a catalog is published, the contents of the catalog are published to a delta file. This is useful if you want to share your catalog with a third-party search engine, for example. Once a catalog release has completed publishing, a link to the delta file is available in Commerce Manager.

When a catalog is published for the first time, all the content in the catalog is published. If a catalog has already been published once, then only the changes from the previous catalog are applied to the delta file. However, you can choose to generate a delta file with all the contents of a catalog release, depending on your requirements. 

:::caution
Generating a full delta is resource intensive and slows down the publishing process and so should only be performed in certain circumstances, for example, when initializing an integration with a service like Algolia.
:::

## Publishing Catalogs

To publish a catalog:

1. Go to **Product Experience Manager** > **Catalogs**.
1. You can either:

    - From **All Catalogs**, select **...** beside the catalog you want to publish.

      ![publish catalogs](/assets/full_publish.png)

    - Select a catalog to open it in the **Edit Catalog** tab. 
   
1. Select **Publish**. The **Publish Confirmation** pane displays. 
1. (Optional) If you want to generate a delta file with all the catalog release content, select **Generate full delta file for this publication (may extend publishing time)**.

   ![publish confirmation](/assets/publish-confirmation.png)

   :::caution
   Generating a full delta is resource intensive and slows down the publishing process and so should only be performed in certain circumstances, for example, when initializing an integration with a service like Algolia.
   :::

1. Select **Publish**.

## Viewing Catalog Publications Status

By selecting **Activity**, you can view the status of your catalog publications in Commerce Manager. This enables you to see at a glance the status of your catalog publications, and to quickly and easily detect any potential problems.

To view catalog publications in Commerce Manager:

1. Select **Activity** from anywhere in Commerce Manager.

   ![Activity button](/assets/activity_button.png)

2. From the **Activity Type** list, select **Catalog Publications**.

   When you expand an individual catalog, the following information is displayed.

   ![catalog publication activity](/assets/catalog_publication.png)

   - the number of catalog releases. Published catalogs are limited to the current release and two releases prior to the current release. This means that the **Number of releases** is three or less.
   - the date and time a catalog release was created.
   - the date and time the catalog release finished publishing.
   - the status of a catalog publish. 

        - **PENDING** - Commerce has received the request but is currently busy processing other requests.
        - **IN_PROGRESS** - Commerce has started creating the catalog release.
        - **PUBLISHED** - The catalog release is published.
        - **FAILED** - The catalog publish has failed.
     
  - A link to the delta file. See [Using Catalog Delta Files](#using-catalog-deltas).
