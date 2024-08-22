---
title: Inventory Loader Component
nav_label: Inventory Loader
sidebar_position: 85
---

You can create and update inventory data in your Commerce store using the Inventory Loader component. 

- You can create inventory when an inventory object does not exist for a product.
- You can update inventory values based on the strategy you select when an inventory object exists for a product.

## Connections

Collect the following Commerce API keys. You can find this information in **SYSTEM** > **Application Keys** in Commerce Manager when logged in as a user with Seller Admin privileges.

| Commerce API Key | Description                            |
|:------------------------------------|:---------------------------------------|
| **API Base URL**                    | Your Commerce API Base URL. |
| **Client ID**                       | Your Commerce Client ID. |
| **Client Secret**                   | Your Commerce Client Secret. |

## Actions

The component has the following action.

### Load Products Inventory

| Input | Type | Description |
|:--- |:--- | :--- | 
| **Connection**  | `connection` | Commerce connection. | 
| **Inventories** | `text` | The data that you provide to the Inventory Import integration must conform to [JSON Lines](https://jsonlines.org/) text format and conform to the model described [here](/composer/integration-hub/store-management/inventory-import#inventory-import-integration-file-format). | 
| **Product Batch Size** | `string` | The maximum product batch size is 100. If you configure the Product Batch Size to a value greater than 100, the integration automatically adjusts the value to 100. The default is **100**. | 
| **Log Level** | warn | The level of logging. | 
