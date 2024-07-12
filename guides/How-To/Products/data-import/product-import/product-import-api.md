---
title: Product Import API
nav_label: Product Import API
sidebar_position: 1
---

You can use the Product Import API to import product data.

## Importing Product Data

You can import new products, add new image files and custom data to Product Experience Manager. Once your products are imported, you can then bulk update your products with product images and any custom data you may have.

### Media assets

You can import media assets associated with your products when importing product data into Product Experience Manager.

The products and services that you sell can have a number of [rich media assets](https://beta.elasticpath.dev/docs/api/pxm/files/files-introduction) associated with them, including product images. You can either upload the image file or reference a file stored at a specific location. This must be the URL that points to an image file. [Create your product image files](/docs/api/pxm/files/create-a-file) in Product Experience Manager. 

### Product templates

With [product templates](https://beta.elasticpath.dev/docs/api/pxm/products/extending-products-with-templates), you can attach a specific set of custom fields to your products in Product Experience Manager. Templates are a collection of attributes. Attributes are grouped together to match a particular product type or to provide an input for other purposes, such as Search Engine Optimization (SEO) or product specification. For example, a _Book_ template might contain the attributes, such as _ISBN_, _Author_, _Number of pages_, _Year Published_, or _Condition_ (New/Used). [Create your product templates](/docs/api/flows/create-a-flow) in Product Experience Manager.

### Product import CSV file

Product Import uses a Comma Separated Values (CSV) file to import/update products, main image files, and custom extension data. [Create a comma separated values file](/docs/api/pxm/products/product-import-bulk-update#characteristics-of-csv-import-files) that contains the products to import.

### Importing product using API

Here is a structured approach to importing product data via the Product Import API:

1. [Import your products](/docs/api/pxm/products/import-products) using Product Import API.
1. [Associate a product template](/docs/api/pxm/products/create-product-template-relationship) with all your products. Once you have done this, when you export your product data, although the same custom data is the same for all products, it is included in the .csv file. You can then amend the custom data in your .csv file with the correct custom data and then use the product import API to bulk update all your custom data.
1. [Export your products to a .csv file](/docs/api/pxm/products/export-products).
1. [Update your exported .csv file with your image IDs](/docs/api/pxm/products/product-import-bulk-update#using-imported-main-image-files).
1. [Update your exported .csv file with your custom data](/docs/api/pxm/products/product-import-bulk-update#importing-custom-data-flows). 
1. [Bulk update your products with image file and custom data](/docs/api/pxm/products/import-products) by reimporting your updated comma separated values file.









