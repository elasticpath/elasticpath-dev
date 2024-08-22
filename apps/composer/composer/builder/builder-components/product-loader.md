---
title: Product Loader Component
nav_label: Product Loader
sidebar_position: 160
---

You can use the Commerce Product Loader component to to import Commerce product data from one Commerce store to another. The Commerce Product Import utility can import:

- Product data files of any size. 
- Product variations. 
- Any media files available with products.
- Localized product names and descriptions.

:::caution

You cannot import bundles using the Product Import integration.

:::

## Connections

Collect the following Commerce API keys. You can find this information in **SYSTEM** > **Application Keys** in Commerce Manager when logged in as a user with Seller Admin privileges.

| Commerce API Key  | Description                  |
|:------------------|:-----------------------------|
| **API Base URL**  | Your Commerce API Base URL.  |
| **Client ID**     | Your Commerce Client ID.     |
| **Client Secret** | Your Commerce Client Secret. |

## Actions

The component has the following actions.

### Load Products

| Input           | Type         | Description                                                                                                                                                                                                                                |
|:----------------|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------| 
| **Connection**  | `connection` | Commerce connection.                                                                                                                                                                                                                       | 
| **Products**    | `text`       | The data that you provide to the Product Import Integration must conform to JSON Lines text format and conform to the model [here](/composer/integration-hub/store-management/product-import#product-import-integration-file-format). |
| **Update Data** | `boolean`    | Enabled if we are running in MERGE mode to merge the inbound products with the current products. Default: off                                                                                                                              |
| **Log Level**   | `string`     | The level of logging.                                                                                                                                                                                                                      |
| **Variations**  | `text`       | The data that you provide to the Product Import Integration must conform to JSON Lines text format and conform to the model [here](/composer/integration-hub/store-management/product-import#product-import-integration-file-format). |

### Gets Variations

| Input          | Type         | Description           |
|:---------------|:-------------|:----------------------| 
| **Connection** | `connection` | Commerce connection.  | 
| **Log Level**  | `string`     | The level of logging. | 

### Update Variation Options

| Input          | Type         | Description                                                                                                                                                                                                                                |
|:---------------|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------| 
| **Connection** | `connection` | Commerce connection.                                                                                                                                                                                                                       | 
| **Variations** | `text`       | The data that you provide to the Product Import Integration must conform to JSON Lines text format and conform to the model [here](/composer/integration-hub/store-management/product-import#product-import-integration-file-format). | 
| **Products**   | `text`       | The data that you provide to the Product Import Integration must conform to JSON Lines text format and conform to the model [here](/composer/integration-hub/store-management/product-import#product-import-integration-file-format). | 
| **Log Level**  | `string`     | The level of logging.                                                                                                                                                                                                                      | 
