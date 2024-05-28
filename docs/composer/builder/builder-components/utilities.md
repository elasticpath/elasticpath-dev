---
title: Utilities Component
nav_label: Utilities
sidebar_position: 210
---

You can use the Commerce supplementary component to load product, inventory and catalog data into an Commerce store.

## Connections

Collect the following Commerce API keys. You can find this information in **SYSTEM** > **Application Keys** in Commerce Manager when logged in as a user with Seller Admin privileges.

| Commerce API Key | Description                            |
|:------------------------------------|:---------------------------------------|
| **API Base URL**                    | Your Commerce API Base URL. |
| **Client ID**                       | Your Commerce Client ID. |
| **Client Secret**                   | Your Commerce Client Secret. |

## Actions

The component has the following actions.

### Load Product

| Input | Default | Notes | Example |
|:--- |:--- | :--- | :--- |
| **Connection**  | `connection` | Commerce connection. | 
| **Product Request** | `code` | The products to load. |

### Load Inventory

| Input | Type | Description |
|:--- |:--- | :--- | 
| **Connection**  | `connection` | Commerce connection. | 
| **Product ID** | `string` | The unique identifier of the product whose inventory you want to update. | 
| **Inventory** | `string` | The [inventory](/docs/api/pxm/inventory/create-product-stock). | 

### Load Webhook Integration

| Input | Type | Description |
|:--- |:--- | :--- | 
| **Connection**  | `connection` | Commerce connection. | 
| **Name** | `string` | The name of the integration. | 
| **Description** | `string` | The integration description. | 
| **Enabled** | `boolean` | `true` if the integration is enabled. | 
| **Webhook URL** | `string` | The webhook URL to display in the Integrations Hub when the integration is enabled. | 
| **Secret** | `string`  | The Commerce secret. | 
| **Events** | `string` | The events. | 
| **Limit** | `string` | The maximum event limit. | 

### Get Product by SKU with main image

| Input | Type | Description |
|:--- |:--- | :--- | 
| **Connection**  | `connection` | Commerce connection. | 
| **SKU** | `string` |  | 

### Get Product by ID with Catalog ID

| Input | Type | Description |
|:--- |:--- | :--- | 
| **Connection**  | `connection` | Commerce connection. |
| **Product ID** | `string` | A unique identifier of a product. | 
| **Catalog ID** | `string` | A unique identifier of a catalog. | 
| **Release ID** | `string` | A unique identifier of a release. | 

### Get Catalog Releases

| Input | Type | Description |
|:--- |:--- | :--- | 
| **Connection**  | `connection` | Commerce connection. | 
| **Catalog ID** | `string` | A unique identifier of a catalog. | 
| **Release ID** | `string` | A unique identifier of a release. | 
