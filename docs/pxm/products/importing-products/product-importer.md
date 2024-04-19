---
title: Importing and Updating Products in Commerce Manager
nav_label: Importing and Updating Products in Commerce Manager
sidebar_position: 30
---

Product import uses a [Comma Separated Values (CSV)](/docs/pxm/products/importing-products/product-importer-csv) file to import products, main image files and custom extension data.

You can use product import to:

- update existing products, including images, templates/flow fields and entries. The entry in the `.csv` file must have a unique `id` and/or `external_ref` that matches the `id` and `external_ref` of the existing product you want to update. You may have both a unique `id` and `external_ref`, but you must have at least one.
- Add new products, including new images, templates/flow fields and entries. For new products that you want to add, the entry in the `.csv` file must have an `external_ref` that does not match any existing products.

You cannot use product import to:

- Delete existing products.
- Import product bundles.

Product Import uses a [Comma Separated Values (CSV)](/docs/pxm/products/importing-products/product-importer-csv) file to import/update products, main image files, and custom extension data. 

Each row in a `.csv` file represents a product you want to create/update. Each file can have 50,000 rows, including the header. If a CSV file exceeds 50,000 rows, an error is displayed, and the products are not imported. 

A `.csv` file must not be larger than 50 megabytes. If a `.csv` file is larger than 50 megabytes, a `503 client read error` is displayed.  

If you want to create/update more than 50,000 products or your `.csv` file is larger than 50 megabytes, you must have a separate `.csv` file and import each `.csv` file one at a time.

To import products:

1. Go to **Product Experience Manager > Products**.
1. Click **Product Imports** tab.
1. In **Import File**, click **Choose File**.
1. Browse to the location of your [Comma Separated Values (CSV)](/docs/pxm/products/importing-products/product-importer-csv) file.
1. Select your CSV file and click **Open**. A notification indicating whether the operation is successful is displayed. The imported product information is displayed in the **All Products** tab.

## Demo

{% youtube src="https://www.youtube.com/embed/lsWQ9M1-haE" label="Importing your products to Commerce" /%}
