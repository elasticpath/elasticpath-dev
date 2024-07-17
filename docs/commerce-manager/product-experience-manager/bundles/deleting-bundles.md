---
title: Deleting Bundles
sidebar_label: Deleting bundles
sidebar_position: 80
---

Deleting a bundle removes bundle information and the associated media files from the database. However, the product options in the bundle are not deleted from the database. You must republish the catalog to update the catalog release with the changes. If you want to keep your hierarchies and price books up to date, remove the deleted bundles from those resources.

Even after deleting a bundle, an order history that has the bundle still keeps the product information of the deleted bundle, such as, the product SKU, product ID, and price. However, clicking the product does not take a shopper to product details.

1. Go to **Products** > **Bundles**.
1. Select **...** > **Delete** next to the bundle you want to delete.
1. Select **Delete**.

:::tip
You can remove bundle products from a catalog, but still keep them in the database for audit purposes.

1. Set the product status to **Draft**.
1. Remove the product from hierarchies and republish the affected catalog so that it does not appear in the storefront.
:::

