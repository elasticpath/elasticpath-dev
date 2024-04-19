---
title: Product Import CSV File
nav_label: Product Import CSV File
sidebar_position: 20
---

The Product Import API uses a [Comma Separated Values (CSV)](/docs/pxm/products/importing-products/product-importer-csv) file to import/update products, main image files, and custom extension data. 

- You can update existing products, including images, templates/flow fields, and entries. The entry in the `.csv` file must have a unique `id` and/or `external_ref` that matches the `id` and `external_ref` of the existing product you want to update. You may have both a unique `id` and `external_ref`, but you must have at least one.
- You can add new products. For new products that you want to add, the entry in the `.csv` file must have an `external_ref` that does not match any existing products.

Here is an [example of a CSV file](/assets/pim_product_import_example.csv).

:::caution

A CSV file cannot:

- have more than 50,000 rows, including the header. If a CSV file exceeds 50,000 rows, an error is displayed, and the products are not imported.
- be larger than 50 megabytes. If a `.csv` file is larger than 50 megabytes, a `503 client read error` is displayed.

    If you want to create/update more than 50,000 products or your `.csv` file is larger than 50 megabytes, you must have a separate `.csv` file and import each `.csv` file one at a time.
- import product bundles.

:::

The `.csv` file must be:

- Comma-separated.
- Header-based.  
    - Header attributes must be the same as the product attributes.
    - Header names can be in any order.
- Each row after the first line represents a single product. 

The following table describes the headers that are supported.

| Header                          | Required | Description                                                                                                                                                                                                                                                                     |
|:--------------------------------|:---------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| id                              | Optional | A unique product ID that is generated when you create the product. The `id` is used to look up products in the `.csv` file and matches them to the products in your storefront that you want to update.                                                                         |
| external_ref                    | Optional | A unique attribute associated with a product. This could be an external reference from a separate company system, for example. The maximum length is 2048 characters.                                                                                                           |
| name                            | Required | The name of a product.                                                                                                                                                                                                                                                          |
| description                     | Required | A description for a product. You can include quotes in your product description, if you want to emphasize a word, for example. To do this, put quotes around the product description. For example, "This product description describes my "product" and the product "version"." |
| tags                             | Optional | The product tags used to store or assign a key word against a product. A product can have up to 20 product tags. A product tag can be up to 255 characters. See [Product Tags](/docs/pxm/products/pxm-products#product-tags).                                                   |
| slug                            | Required | A label for the product that is used in the URL paths. A slug can contain any combination of letters, numbers, periods, hyphens, and underscores. NO spaces or other characters are allowed. By default, the product name is used as the slug.                                  |
| status                          | Required | The status of a product, either `Draft` or `Live`.                                                                                                                                                                                                                              |
| commodity_type                  | Required | The commodity type, either `physical` or `digital`.                                                                                                                                                                                                                             |
| upc_ean                         | Optional | The universal product code or european article number of the product.                                                                                                                                                                                                           |
| mpn                             | Optional | The manufacturer part number of a product.                                                                                                                                                                                                                                      |
| sku                             | Optional | The unique stock keeping unit of the product.                                                                                                                                                                                                                                   |
| main_image_id                   | Optional | Specifies a unique ID of a main image file for a product. You can include a `main_image_id` for your products for images that are already uploaded to Commerce. See [Using Main Image Files](#using-main-image-files).                                                          |
| `template:<flowID>:<fieldName>` | Optional | You can also specify custom extension data in the CSV by specifying the flow `ID` or `slug` and the field `name`. For example, `template:<flowSlug>:<fieldName>` format. See [Importing Custom Data (Flows)](#importing-custom-data-flows).                                     |

## Using Main Image Files

You can use the main images that you have previously uploaded Commerce and assign them to your products when importing products to Commerce. You can do this by adding a `main_image_id` header to your `.csv` file. The ID you provide in `main_image_id` is the ID of a file that has already been uploaded to Commerce using [create a file](/docs/pxm/products/product-assets/create-a-file).

:::note
In Commerce Manager, you cannot add main image files without first creating a product. You must use [create a file](/docs/pxm/products/product-assets/create-a-file) to upload media without creating products.
:::

## Importing Custom Data (Flows)

You can also create/update custom extension data in a `.csv` file by creating a header that includes either the flow `ID` or `slug` and the field `name` as shown below.

- `template:<flowSlug>:<fieldName>`
- `template:<flowID>:<fieldName>` 

where:

- `template` must be `template`.
- one of the following from the template that contains the field whose data you want to create/update
    - `flowID` is the ID of the flow  
    - `flowSlug` is the flow slug 
- `fieldName` is the name of the field whose data you want to create/update.

 In the following example, for a flow with ID `82c10a02-1851-4992-8ecb-d44f2782d09b` and a field with the name `condition`:
 
- the header is `template:82c10a02-1851-4992-8ecb-d44f2782d09b:condition`.
- the updated custom data is `as-new`.

| name | slug | sku | status | template:82c10a02-1851-4992-8ecb-d44f2782d09b:condition |
| :--- | :--- | :--- | :--- | :--- |
| BestEver Range | bestever-range-1a1a-30 | BE-Range-1a1a-30 | draft | as-new |
