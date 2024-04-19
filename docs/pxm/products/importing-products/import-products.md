---
title: Product Import API
nav_label: Product Import API
sidebar_position: 30
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

You can use the Product Import API to:

- Add new products, including:

    - main image files. See [Importing Main Image Files](/docs/pxm/products/importing-products/overview#importing-main-image-files).
    - custom data. See [Importing custom data](/docs/pxm/products/importing-products/overview#importing-custom-data-flows).

- Make bulk updates to existing products. 

You cannot use product import to:

- Delete existing products.
- Import product bundles.

The Product Import API uses a [Comma Separated Values (CSV)](/docs/pxm/products/importing-products/product-importer-csv) file to import products, main image files and custom extension data. Each row in a `.csv` file represents a product you want to create/update.  

Each file can have 50,000 rows, including the header. If a CSV file exceeds 50,000 rows, an error is displayed, and the products are not imported. A `.csv` file must not be larger than 50 megabytes. If a `.csv` file is larger than 50 megabytes, a `503 client read error` is displayed. 

If you want to create/update more than 50,000 products or your `.csv` file is larger than 50 megabytes, you must have a separate `.csv` file and import each `.csv` file one at a time.

## `POST` Import Products 

```http
https://useast.api.elasticpath.com/pcm/products/import
```

## Path Parameters

### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Name   | Required | Type     | Description                                   |
|:-------|:---------|:---------|:----------------------------------------------|
| `file` | Required | `string` | The file you want to upload. Ensure that the file format is [Comma Separated Values (CSV)](/docs/pxm/products/importing-products/product-importer-csv). |

## Request Example

```bash
curl -X POST https://useast.api.elasticpath.com/pcm/products/import \
    -H "Content-Type: multipart/form-data" \
    -H "Authorization: Bearer XXXX" \
    -F file=@path/to/file \
```

## Response Example

`200 OK`

```json
{
    "data": {
        "type": "pim-job",
        "id": "4ca92f2c-d8e2-4e40-8fe1-505b1f1857d4",
        "attributes": {
            "created_at": "2024-01-05T13:46:41.695Z",
            "status": "success",
            "type": "product-import",
            "updated_at": "2024-01-05T13:46:42.07Z"
        }
    }
}
```

## Errors

Import fails when the file does not contain the required header names `name`, `sku` and `commodity_type`.

```json
{
    "errors": [
        {
            "status": "422",
            "title": "Failed Validation",
            "detail": "missing required csv header: name"
        }
    ]
}
```
