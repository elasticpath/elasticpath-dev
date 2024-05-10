---
title: Crafting Your Elastic Path Store with Products, Pricing, and Categories
nav_label: Crafting Your Elastic Path Store with Products, Pricing, and Categories 
sidebar_position: 1
---

This guides helps you shape your store 

You can import products from your other company systems, or third-party platforms, to Product Experience Manager.

no of ways to get data

product import
predefined integrations with third party platforms, pimberly, salsify and shopify
elasticpath integrations commerce product import

Once your products are imported, you can then bulk update your products with product images and any custom data you may have.

You can do use this using both the API and Commerce Manager.


## Getting Data In: An Overview

Below is an overview of the steps you can follow to get data in to Product Experience Manager.

1. Create your product image files in Product Experience Manager.
2. Create your product templates in Product Experience Manager.
3. Create a comma separated values file that contains the products to import.
4. Import your products using Product Import API.
5. Associate your product templates with a product.
6. Export your products to a .csv file.
7. Update your exported .csv file with your image Ids.
8. Update your exported .csv file with your custom data. 
9. Bulk update your products with image file and custom data by reimporting your updated comma separated values file.

Pricing 

## Prerequisites

To successfully finish this guide, you'll need:

1. An Elastic Path store.
2. All API requests must contain a generated access token for authentication purposes. To generate an access token, you need your Application keys. Application keys are the client ID and client secret. See [Application Keys](https://beta.elasticpath.dev/docs/commerce-manager/application-keys/application-keys-cm). Once you have your client ID, you can use it to generate an access token. Requests to Product Experience Manager require an Authorization header containing your access token.

    This guide uses the `implicit` grant type. This grant type can be thought of as read only and is most commonly used on the client side. See [Authentication](https://beta.elasticpath.dev/docs/commerce-cloud/authentication/Tokens/implicit-token) for more information about tokens.

## Using APIs

These steps describe using the APIs to get data in to Product Experience Manager.

### Step 1 - Create a Comma-Separated File

Product Import uses a Comma Separated Values (CSV) file to import/update products, main image files, and custom extension data. See [Characteristics of CSV Files Import Files](https://beta.elasticpath.dev/docs/api/pxm/products/product-import-bulk-update#characteristics-of-csv-import-files).

### Step 2 - Import your Products

Use the Product Import API to import your comma separated values file.



### Step 3 - Create your Image Files

The products and services that you sell can have a number of [rich media assets](https://beta.elasticpath.dev/docs/api/pxm/files/files-introduction) associated with them, including product images. 

You can either upload the image file or reference a file stored at a specific location. This must be th URL that points to an image file. 



### Step 3 - Create your product templates

With [extension templates](https://beta.elasticpath.dev/docs/api/pxm/products/extending-products-with-templates), you can attach a specific set of custom fields to your products in Product Experience Manager. 

Templates are a collection of attributes. Attributes are grouped together to match a particular product type or to provide an input for other purposes, such as Search Engine Optimization (SEO) or product specification. For example, a _Book_ template might contain the attributes, such as _ISBN_, _Author_, _Number of pages_, _Year Published_, or _Condition_ (New/Used).

Use attributes to define the characteristics of products in a store. For example, you can assign attributes such as, care instructions or fabric, to a shirt. When a shopper searches for a specific item, attributes help stores to return the products that match the search criteria. For example, when a shopper searches for a large blue shirt, all shirts that are large and blue are returned as the search result.



### Step 4 - Associate your product templates to a product

Once you have created your templates, you must associate each template with one product. This means that when you export the products, an entry is created for your custom data template. You can then use this entry to update all your products with custom data, depending on your requirements.





### Step 5 - Export your products

Once imported in Product Experience Manager, you can then bulk update your imported products with their image files and custom data. 

Use the Product Export API to export your comma separated values file.


