---
title: Store Configuration Loader Component
nav_label: Store Configuration Loader
sidebar_position: 190
---

The Commerce Store Configuration Loader enables you to export and/or import resources from one Commerce store to another. This is useful if, for example, you want to copy a configuration from a store in a development environment to a store in a production environment. 

## Connections

Collect the following Commerce API keys. You can find this information in **SYSTEM** > **Application Keys** in Commerce Manager when logged in as a user with Seller Admin privileges.

| Commerce API Key | Description                            |
|:------------------------------------|:---------------------------------------|
| **API Base URL**                    | Your Commerce API Base URL. |
| **Client ID**                       | Your Commerce Client ID. |
| **Client Secret**                   | Your Commerce Client Secret. |

## Actions

The component has the following actions.

### Delete Store Configuration 

| Input | Type | Description |
|:--- |:--- | :--- | 
| **Connection**  | `connection`  | Commerce connection. | 
| **Log Level** | `string` | The level of logging. | 
| **Max Pages** | `string` | The page size to query when deleting large volumes of products. Maximum value is **100**. | 
| **Batch Size** |`string`  | the maximum number of batches to delete at one time. Leave blank to delete all batches. For example, if you set the **Delete Batch Limit** to 5, the first 5 batches of products are deleted. | 
| **Configuration Policy** | `code` | **Delete** exsiting resources. The `Delete Asynchronous Flow` provides a webhook trigger that invokes the Store Configuration Orchestrator's Delete Action. The asynchronous response is a single data element containing the remaining products. See [Commerce Store Configuration Orchestrator](/docs/composer/integration-hub/store-management/store-configuration). | 

### Export Store Configuration

| Input | Type | Description |
|:--- |:--- | :--- | 
| **Connection**  | `connection` | Commerce connection. | 
| **Log Level** | `string` | The level of logging. | 
| **Configuration Policy** | `code` | **Export** a store configuration to a JSON file.  The `Export Synchronous Flow` provides a webhook trigger that invokes the Store Configuration Orchestrator's Export Action and returns the exported store configuration in a JSON file. See [Commerce Store Configuration Orchestrator](/docs/composer/integration-hub/store-management/store-configuration). | 

### Import Store Configuration

| Input | Type | Description |
|:--- |:--- | :--- | 
| **Connection**  | `connection` | Commerce connection. | 
| **JSON Configuration Object**  | `string` | The JSON configuration object. | 
| **Environment**  | `string` | During an import, you can specify resources by environment. This allows you to have resources for your production and development environments in the same JSON file. When you perform a Store Configuration Orchestrator Import Action, you can specify the environment whose resources you want to import. A Store Configuration Orchestrator Import Action always imports resources from the `common` environment. If no environment is specified, only resources from the `common` environment are loaded. See [Configuring the Store Configuration Orchestrator Integration](/docs/composer/integration-hub/store-management/store-configuration#configuring-the-store-configuration-orchestrator-integration). | 
| **Log Level** | `string` | The level of logging. | 
| **Configuration Policy** | `code` | **Import** a store configuration from one store to another. The `Import Asynchronous Flow` provides a webhook trigger that accepts a JSON payload containing the store configuration. The Store Configuration Orchestrator Import Action executes and passes the JSON request to apply the imported configurations to a store. See [Commerce Store Configuration Orchestrator](/docs/composer/integration-hub/store-management/store-configuration). | 
