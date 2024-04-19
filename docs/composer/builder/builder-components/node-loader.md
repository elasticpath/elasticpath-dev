---
title: Node Loader Component
nav_label: Node Loader
sidebar_position: 120
---

You can use the Commerce Node Loader component to import Commerce node data to your Commerce store. The Commerce Node Loader component can import:

- Node data files of any size. 
- Localized node names and descriptions.

## Connections

Collect the following Commerce API keys. You can find this information in **SYSTEM** > **Application Keys** in Commerce Manager when logged in as a user with Seller Admin privileges.

| Commerce API Key | Description                            |
|:------------------------------------|:---------------------------------------|
| **API Base URL**                    | Your Commerce API Base URL. |
| **Client ID**                       | Your Commerce Client ID. |
| **Client Secret**                   | Your Commerce Client Secret. |

## Actions

The component has the following action.

### Load Nodes Product 

| Input | Type | Description |
|:--- |:--- | :--- | 
| **Connection**  | `connection` | Commerce connection. | 
| **Nodes** | `text` | The data that you provide to the Node Loader component must conform to [JSON Lines](https://jsonlines.org/) text format and conform to the model described [here](/docs/composer/integration-hub/store-management/node-import#node-import-integration-file-format). | 
| **Max Hierarchy Depth** |`string` | The depth of parent/child levels you want. The default is **3**. | 
| **Log Level** | `string` | The level of logging. |
