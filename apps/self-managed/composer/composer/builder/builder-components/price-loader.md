---
title: Price Loader Component
nav_label: Price Loader
sidebar_position: 150
---

You can use the Commerce Price Loader component to import Commerce price data from one Commerce store to another. You can import:

- Price data files of any size. 
- Tier and sale pricing associated with prices.

:::caution

The Price Import integration does not support bundles.

:::

## Connections

Collect the following Commerce API keys. You can find this information in **SYSTEM** > **Application Keys** in Commerce Manager when logged in as a user with Seller Admin privileges.

| Commerce API Key | Description                            |
|:------------------------------------|:---------------------------------------|
| **API Base URL**                    | Your Commerce API Base URL. |
| **Client ID**                       | Your Commerce Client ID. |
| **Client Secret**                   | Your Commerce Client Secret. |

## Actions

The component has the following actions.

### Load Prices

| Input | Type | Description |
|:--- |:--- | :--- | 
| **Connection**  | `connection` | Commerce connection. | 
| **Prices** | `text` | The data that you provide to the Price Loader component must conform to JSON Lines text format and conform to the model [here](/composer/integration-hub/store-management/price-import#price-import-integration-file-format). |
| **Log Level** | `string` | The level of logging. |

### Load Pricebooks

| Input | Type | Description |
|:--- |:--- | :--- | 
| **Connection**  | `connection` | Commerce connection. | 
| **Price Books** | `text` | The data that you provide to the Price Loader component must conform to JSON Lines text format and conform to the model [here](/composer/integration-hub/store-management/price-import#price-import-integration-file-format). | 
| **Log Level** | `string` | The level of logging. | 
