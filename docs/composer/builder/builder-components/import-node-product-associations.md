---
title: Import Node Product Associations Component
nav_label: Import Node Product Associations
sidebar_position: 80
---

You can use the Commerce Catalog Publish component to update Commerce node product association data in your Commerce store.

## Connections

Collect the following Commerce API keys. You can find this information in **SYSTEM** > **Application Keys** in Commerce Manager when logged in as a user with Seller Admin privileges.

| Commerce API Key | Description                            |
|:------------------------------------|:---------------------------------------|
| **API Base URL**                    | Your Commerce API Base URL. |
| **Client ID**                       | Your Commerce Client ID. |
| **Client Secret**                   | Your Commerce Client Secret. |

## Actions

The component has the following action.

### Load Node Product Association

| Input | Type | Description |
|:--- |:--- | :--- | 
| **Connection**  | `connection` | Commerce connection. | 
| **Node Product Associations** | `string` | The node product association data. See [Node Product Association Import Format](/docs/composer/integration-hub/store-management/node-product-association#node-product-association-import-integration-file-format). | 
| **Max Hierarchy Depth** | `string` | The depth of parent/child levels you want. The default is **3**. | 
| **Log Level** | `string` | The level of logging. | 
