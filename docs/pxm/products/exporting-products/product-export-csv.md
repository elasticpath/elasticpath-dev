---
title: Product Export CSV File
nav_label: Product Export CSV File
sidebar_position: 11
---

The Product Export API generates a Comma Separated Values (CSV) file that you can use to import/update products, main image files, and custom extension data. 

A .csv file can contain up to 50,000 product entries. If you have more than 50,000 product entries, then another .csv file is created and so on, until all your products are exported.

Here is an [example of a CSV file](/assets/pim_product_import_example.csv).

The `.csv` file is:

- Comma-separated.
- Header-based.  
    - Header attributes must be the same as the product attributes.
    - Header names can be in any order.
- Each row after the first line represents a single product. 

The following table describes the headers that are generated.

| Header                           | Required | Description                                                                                                                                                                                                                                                                     |
|:---------------------------------|:---------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| id                               | Optional | A unique product ID that is generated when you create the product. The `id` is used to look up products in the `.csv` file and matches them to the products in your storefront that you want to update.                                                                         |
| external_ref                     | Optional | A unique attribute associated with a product. This could be an external reference from a separate company system, for example. The maximum length is 2048 characters.                                                                                                           |
| name                             | Required | The name of a product.                                                                                                                                                                                                                                                          |
| description                      | Required | A description for a product. You can include quotes in your product description, if you want to emphasize a word, for example. To do this, put quotes around the product description. For example, "This product description describes my "product" and the product "version"." |
| slug                             | Required | A label for the product that is used in the URL paths. A slug can contain any combination of letters, numbers, periods, hyphens, and underscores. NO spaces or other characters are allowed. By default, the product name is used as the slug.                                  |
| status                           | Required | The status of a product, either `Draft` or `Live`.                                                                                                                                                                                                                              |
| commodity_type                   | Required | The commodity type, either `physical` or `digital`.                                                                                                                                                                                                                             |
| upc_ean                          | Optional | The universal product code or european article number of the product.                                                                                                                                                                                                           |
| mpn                              | Optional | The manufacturer part number of a product.                                                                                                                                                                                                                                      |
| sku                              | Optional | The unique stock keeping unit of the product.                                                                                                                                                                                                                                   |
| tags                             | Optional | The product tags used to store or assign a key word against a product. A product can have up to 20 product tags. A product tag can be up to 255 characters. See [Product Tags](/docs/pxm/products/pxm-products#product-tags).                                                   |
| main_image_id                    | Optional | Specifies a unique ID of a main image file for a product. See [Exporting Main Image Files](#exporting-main-image-files).                                                                                                                                                        |
| _created_at                      | Optional| The date and time a product was created. **Note**: This field does not populate any data; it is provided solely for informational purposes.                                                                                                                                     |
| _updated_at                      | Optional | The date and time a product was updated. **Note**: This field does not populate any data; it is provided solely for informational purposes.                                                                                                                                     | 
| `template:<templateID>:created_at` | Optional | The date and time a template was created. **Note**: This field does not populate any data; it is provided solely for informational purposes.                                                                                                                                    |
| `template:<templateID>:updated_at` | Optional | The date and time a template was updated. **Note**: This field does not populate any data; it is provided solely for informational purposes.                                                                                                                                    |
| `template:<flowID>:<fieldName>`  | Optional | Custom extension data includes the flow `ID` or `slug` and the field `name`. See [Exporting Custom Data (Flows)](#exporting-custom-data-flows).                                                                                                                                 |

## Exporting Main Image Files

The main images that you have previously uploaded Commerce are exported. A `main_image_id` header is added to your `.csv` file. The ID in `main_image_id` is the ID of a file that has already been uploaded to Commerce using [create a file](/docs/pxm/products/product-assets/create-a-file).

## Exporting Custom Data (Flows)

Custom extension data is exported in a `.csv` file by creating a header that includes the flow `ID` or `slug` and the field `name` as shown below:

- `template:<flowSlug>:<fieldName>`
- `template:<flowID>:<fieldName>` 

where:

- `template` must be `template`.
- one of the following for the template that contains the field whose data you want to export:
    - `flowID` is the ID of the flow.
    - `flowSlug` is the flow slug.  
- `fieldName` is the name of the field whose data you want to export.

 In the following example, for a flow with ID `82c10a02-1851-4992-8ecb-d44f2782d09b` and a field with the name `condition`:
 
- the header is `template:82c10a02-1851-4992-8ecb-d44f2782d09b:condition`.
- the updated custom data is `as-new`.

| name | slug | sku | status | template:82c10a02-1851-4992-8ecb-d44f2782d09b:condition |
| :--- | :--- | :--- | :--- | :--- |
| BestEver Range | bestever-range-1a1a-30 | BE-Range-1a1a-30 | draft | as-new |
