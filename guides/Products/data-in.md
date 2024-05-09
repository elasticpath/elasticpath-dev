---
title: Getting Data in to Product Experience Manager
nav_label: Getting Data to Product Experience Manager
sidebar_position: 1
---

You can import products from your other company systems, or third-party platforms, to Product Experience Manager.

Once your products are imported, you can then bulk update your products with product images and any custom data you may have. 

You can do use this using both the API and Commerce Manager.

## Getting Data In: An Overview

Below is an overview of the steps you can follow to get data into Product Experience Manager.

1. Create a comma separated values file that contains the products to import.
2. Import your products using Product Import API.
3. Create your product image files in Product Experience Manager.
4. Create your product templates in Product Experience Manager.
5. Associate your product templates with a product.
6. Export your products to a .csv file.
7. Update your .csv file with your image files.
7. Update your .csv file with your custom data. 
8. Bulk update your products with image file and custom data by reimporting your updated comma separated values file.

## Prerequisites

To successfully finish this guide, you'll need an Elastic Path store.

## Using APIs

These steps describe using the APIs to get data in to Product Experience Manager.

### Step 1 - Create a Comma-Separated File

Product Import uses a Comma Separated Values (CSV) file to import/update products, main image files, and custom extension data. See [Characteristics of CSV Files Import Files](https://beta.elasticpath.dev/docs/api/pxm/products/product-import-bulk-update#characteristics-of-csv-import-files).

### Step 2 - Import your Products

Use the Product Import API to import your comma separated values file.

#### Request example

```json
curl -L -X POST 'https://euwest.api.elasticpath.com/pcm/products/import' \
     -H 'Content-Type: multipart/form-data' \
     -H 'Accept: application/json' \
     -H 'Authorization: Bearer 919d10147f35e087b921d3ed151e3fe4219528f6' \
     -F 'file=@"/path/to/file"'
```

#### Response Example

```json
{
  "data": {
    "type": "pim-job",
    "id": "cf119c61-ddcc-4e1c-b7bf-b441fde4ea46",
    "attributes": {
      "completed_at": "2024-05-09T16:10:06.008Z",
      "created_at": "2024-05-09T16:10:05.825Z",
      "started_at": "2024-05-09T16:10:05.903Z",
      "status": "success",
      "type": "product-import",
      "updated_at": "2024-05-09T16:10:05.903Z"
    },
    "meta": {
      "x_request_id": "e77fb398-7f3f-4163-b64d-e30889d9f042"
    }
  }
}
```

### Step 3 - Create your Image Files

The products and services that you sell can have a number of [rich media assets](https://beta.elasticpath.dev/docs/api/pxm/files/files-introduction) associated with them, including product images. 

You can either upload the image file or reference a file stored at a specific location. This must be th URL that points to an image file. 

#### Request example

```json
curl -L -X POST 'https://https://euwest.api.elasticpath.com/v2/files' \
-H 'Content-Type: multipart/form-data' \
-H 'Accept: application/json' \
-H 'Authorization: Bearer cd62672c10d4e0dcabfc2456351086cca0bbd680' \
-F 'file=@"/path/to/file"'
```

#### Response example

```json
{
  "data": {
    "id": "00000000-0000-0000-0000-000000000000",
    "type": "file",
    "file_name": "file_name.jpg",
    "mime_type": "image/jpeg",
    "file_size": 36000,
    "public": true,
    "meta": {
      "timestamps": {
        "created_at": "2023-10-11T13:02:25.293Z"
      },
      "dimensions": {
        "width": 1800,
        "height": 1000
      }
    },
    "links": {
      "self": "https://https://euwest.api.elasticpath.com//v2/files/ddc28c74-a7df-46be-b262-8fa69a6e7d52"
    },
    "link": {
      "href": "https://files-eu.epusercontent.com/e8c53cb0-120d-4ea5-8941-ce74dec06038/f8cf26b3-6d38-4275-937a-624a83994702.png"
    }
  }
}
```

### Step 3 - Create your product templates

With [extension templates](https://beta.elasticpath.dev/docs/api/pxm/products/extending-products-with-templates), you can attach a specific set of custom fields to your products in Product Experience Manager. 

Templates are a collection of attributes. Attributes are grouped together to match a particular product type or to provide an input for other purposes, such as Search Engine Optimization (SEO) or product specification. For example, a _Book_ template might contain the attributes, such as _ISBN_, _Author_, _Number of pages_, _Year Published_, or _Condition_ (New/Used).

Use attributes to define the characteristics of products in a store. For example, you can assign attributes such as, care instructions or fabric, to a shirt. When a shopper searches for a specific item, attributes help stores to return the products that match the search criteria. For example, when a shopper searches for a large blue shirt, all shirts that are large and blue are returned as the search result.

#### Request example

```json
curl -L -X POST 'https://euwest.api.elasticpath.com/v2/flows' \
-H 'Content-Type: application/json' \
-H 'Accept: application/json' \
-H 'Authorization: Bearer cd62672c10d4e0dcabfc2456351086cca0bbd680' \
--data-raw '{
  "data": {
    "description": "What is 4K Streaming? It'\''s the highest resolution available, giving excellent picture quality and crisp, clear details. 4K Streaming elevates your viewing experience to the next level.",
    "enabled": true,
    "name": "4K Streaming",
    "slug": "4k-streaming",
    "type": "flow"
  }
}'
```

### Step 4 - Associate your product templates to a product

Once you have created your templates, you must associate each template with one product. This means that when you export the products, an entry is created for your custom data template. You can then use this entry to update all your products with custom data, depending on your requirements.

#### Request example

#### Response example



### Step 5 - Export your products

Once imported in Product Experience Manager, you can then bulk update your imported products with their image files and custom data. 

Use the Product Export API to export your comma separated values file.





