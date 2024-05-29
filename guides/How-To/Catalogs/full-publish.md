---
title: Performing a Full Catalog Publish
nav_label: Performing a Full Catalog Publish
sidebar_position: 12
---

This guide walks you through the process of triggering a full publish of a catalog in Commerce Manager. You may need to trigger a full catalog publish:

- when initializing an integration with a service like Algolia.
- to ensure a new Elastic Path feature is applied to your existing catalogs. 

:::caution
Generating a full catalog publish is resource intensive and slows down the publishing process and should only be performed in the circumstances described above.
:::

You can force a full catalog publish by modifying either your:

- [creating a temporary hierarchy](#creating-a-temporary-hierarchy)
- [creating a temporary price book](#updating-a-price-book)

You can either create a temporary hierarchy or price book. You do not need to do both.

## Prerequisites

You must have an existing catalog with at least 1 previous release.

## Creating a Temporary Hierarchy

These steps describe how to trigger a full publish on a catalog using a temporary hierarchy, with no nodes or product assignments.

1. Go to **PRODUCT EXPERIENCE MANAGER** > **Configurations**.
2. Select **Hierarchies**.
3. Select **Add Hierarchy**.
4. In **Name**, enter something that denotes that this is a temporary hierarchy, for example, **Dummy**.
5. Select **Save**.
6. Go to **PRODUCT EXPERIENCE MANAGER** > **Catalogs**.
7. Select the catalog for which you want to execute a full catalog publish.
8. From the **Hierarchy** list, select your newly created hierarchy.
9. Select **Publish**.
10. Once the catalog has finished publishing, you can revert the changes you made, although removing the dummy hierarchy will trigger another full catalog publish. 

## Creating a Temporary Price Book

These steps describe how to trigger a full publish on a catalog by creating a temporary price book.

1. Go to **PRODUCT EXPERIENCE MANAGER** > **Price Books**.
2. Select **Price Books**.
3. Select **Add Price Book**>
4. In **Name**, enter something that denotes that this is a temporary price book, for example, **Dummy**.
5. Select **Save**.
6. Go to **PRODUCT EXPERIENCE MANAGER** > **Catalogs**.
7. Select the catalog for which you want to execute a full catalog publish.
8. Select **Add Price Book**.
9. From the list, select your newly created price book. Ensure the temporary price book has the lowest priority for better publishing performance.
10. Select **Publish**.
11. Once the catalog has finished publishing, you can revert the changes you made. However, removing the price book will trigger another full catalog publish. Alternatively, you can leave the catalog as it is until you need to trigger another full catalog publish.
