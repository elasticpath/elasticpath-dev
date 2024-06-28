---
title: Data Import Techniques for Product Experience Manager
nav_label: Data Import Techniques
sidebar_position: 1
---

Effective data importation into Elastic Path's Product Experience Manager (PXM) is crucial for establishing your stores and migrating data from other internal systems or third-party platforms. This article delves into the technical aspects of importing various types of data into your Elastic Path store, encompassing products, price books, and integrations with third-party platforms.


There are a number of ways to get data in to your Elastic Path store, depending on the type of data.

- product import, using either [Product Import APIs](/docs/api/pxm/products/product-import-bulk-update) or [Commerce Manager](/docs/commerce-manager/product-experience-manager/product-import/product-importer).
- price book and product prices import, using either [Price Book Import API](/docs/api/pxm/pricebooks/import-a-price-book-and-prices) or [Commerce Manager](/docs/commerce-manager/product-experience-manager/pricebooks/pxm-pricebooks#importing-price-books-and-prices.
- pre-defined integrations with third-party platforms, Pimberly, Salsify, Yotpo, and Shopify using Integrations Hub in Composer. See [Product Information](/docs/composer/integration-hub/product-information/salsify).

## General Steps for Data Import

Here are some points to consider before importing your data.

- Ensure your data is clean and formatted correctly, for example, correcting errors and removing duplicates.

- Choose your import method;

    - Product Experience Manager APIs
    - Commerce Manager
    - Integrations Hub in Composer. See [Product Information](/docs/composer/integration-hub/product-information/salsify).

## Importing Product Data using Product Import API: An Overview

Once your products are imported, you can then bulk update your products with product images and any custom data you may have.

Below is an overview of the steps you can follow to get product data in to Product Experience Manager.

1. Make sure you have an Elastic Path store.
1. All API requests must contain a generated access token for authentication purposes. To generate an access token, you need your Application keys. Application keys are the client ID and client secret. See [Application Keys](/docs/commerce-manager/application-keys/application-keys-cm). Once you have your client ID, you can use it to generate an access token. Requests to Product Experience Manager require an Authorization header containing your access token.
1. The products and services that you sell can have a number of [rich media assets](https://beta.elasticpath.dev/docs/api/pxm/files/files-introduction) associated with them, including product images. You can either upload the image file or reference a file stored at a specific location. This must be th URL that points to an image file. [Create your product image files](/docs/api/pxm/files/create-a-file) in Product Experience Manager. 
1. With [product templates](https://beta.elasticpath.dev/docs/api/pxm/products/extending-products-with-templates), you can attach a specific set of custom fields to your products in Product Experience Manager. Templates are a collection of attributes. Attributes are grouped together to match a particular product type or to provide an input for other purposes, such as Search Engine Optimization (SEO) or product specification. For example, a _Book_ template might contain the attributes, such as _ISBN_, _Author_, _Number of pages_, _Year Published_, or _Condition_ (New/Used). [Create your product templates](/docs/api/flows/create-a-flow) in Product Experience Manager.
1. Product Import uses a Comma Separated Values (CSV) file to import/update products, main image files, and custom extension data. [Create a comma separated values file](/docs/api/pxm/products/product-import-bulk-update#characteristics-of-csv-import-files) that contains the products to import.
1. [Import your products](/docs/api/pxm/products/import-products) using Product Import API.
1. [Associate a product template](/docs/api/pxm/products/create-product-template-relationship) with all your products. Once you have done this, when you export your product data, although the same custom data is the same for all products, it is included in the .csv file. You can then amend the custom data in your .csv file with the correct custom data and then use the product import API to bulk update all your custom data.
1. [Export your products to a .csv file](/docs/api/pxm/products/export-products).
1. [Update your exported .csv file with your image IDs](/docs/api/pxm/products/product-import-bulk-update#using-imported-main-image-files).
1. [Update your exported .csv file with your custom data](/docs/api/pxm/products/product-import-bulk-update#importing-custom-data-flows). 
1. [Bulk update your products with image file and custom data](/docs/api/pxm/products/import-products) by reimporting your updated comma separated values file.

## Importing Product Data using Commerce Manager: An Overview

Below is an overview of the steps you can follow to get product data in to Product Experience Manager.

1. Make sure you have an [Elastic Path store](/docs/commerce-manager/organizations/home-page#creating-a-new-store-within-an-organization).
1. Make sure you have your [Application Keys](/docs/commerce-manager/application-keys/application-keys-cm). 
1. You must use the Files API to [Create your product image files](/docs/api/pxm/files/create-a-file) in Product Experience Manager.
1. With [product templates](https://beta.elasticpath.dev/docs/api/pxm/products/extending-products-with-templates), you can attach a specific set of custom fields to your products in Product Experience Manager. Templates are a collection of attributes. Attributes are grouped together to match a particular product type or to provide an input for other purposes, such as Search Engine Optimization (SEO) or product specification. For example, a _Book_ template might contain the attributes, such as _ISBN_, _Author_, _Number of pages_, _Year Published_, or _Condition_ (New/Used). [Create your product templates](/docs/commerce-manager/product-experience-manager/extending-products/templates#creating-templates) in Product Experience Manager.
1. Product Import uses a Comma Separated Values (CSV) file to import/update products, main image files, and custom extension data. [Create a comma separated values file](/docs/api/pxm/products/product-import-bulk-update#characteristics-of-csv-import-files) that contains the products to import.
1. [Import your products](/docs/commerce-manager/product-experience-manager/product-import/product-importer).
1. [Associate a product template](/docs/commerce-manager/product-experience-manager/Products/add-product-templates) with all your products. Once you have done this, when you export your product data, although the same custom data is the same for all products, it is included in the .csv file. You can then amend the custom data in your .csv file with the correct custom data and then use the product import API to bulk update all your custom data.
1. [Export your products to a .csv file](/docs/commerce-manager/product-experience-manager/product-export/export-products-cm).
1. [Update your exported .csv file with your image IDs](/docs/api/pxm/products/product-import-bulk-update#using-imported-main-image-files).
1. [Update your exported .csv file with your custom data](/docs/api/pxm/products/product-import-bulk-update#importing-custom-data-flows).
1. [Bulk update your products with image file and custom data](/docs/commerce-manager/product-experience-manager/product-import/product-importer) by reimporting your updated comma

## Importing Price Book Data using Product Import API: An Overview

Below is an overview of the steps you can follow to get price book and product price data in to Product Experience Manager.

1. Make sure you have an Elastic Path store.
1. All API requests must contain a generated access token for authentication purposes. To generate an access token, you need your Application keys. Application keys are the client ID and client secret. See [Application Keys](/docs/commerce-manager/application-keys/application-keys-cm). Once you have your client ID, you can use it to generate an access token. Requests to Product Experience Manager require an Authorization header containing your access token.
1. Price book and price import uses a Comma Separated Values (CSV) file to import/update price books and prices. [Create a comma separated values file](/docs/api/pxm/pricebooks/import-a-price-book-and-prices#characteristics-of-price-book-import) that contains the price books and prices to import.
1. [Import your price books and prices](/docs/api/pxm/pricebooks/import-pricebook).

## Importing Price Book Data using Commerce Manager: An Overview

Below is an overview of the steps you can follow to get price book and product price data in to Product Experience Manager.

1. Make sure you have an [Elastic Path store](/docs/commerce-manager/organizations/home-page#creating-a-new-store-within-an-organization).
1. Make sure you have your [Application Keys](/docs/commerce-manager/application-keys/application-keys-cm). 
1. Price book and price import uses a Comma Separated Values (CSV) file to import/update price books and prices. [Create a comma separated values file](/docs/api/pxm/pricebooks/import-a-price-book-and-prices#characteristics-of-price-book-import) that contains the price books and prices to import.
1. [Import your price books and prices](/docs/commerce-manager/product-experience-manager/pricebooks/pxm-pricebooks#importing-price-books-and-prices).




 
















