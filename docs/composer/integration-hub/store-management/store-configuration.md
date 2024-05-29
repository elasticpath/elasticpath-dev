---
title: Commerce Store Configuration Orchestrator
nav_label: Store Configuration Orchestrator
sidebar_position: 80
---

The Commerce Store Configuration Orchestrator is a utility in the Integrations Hub in Commerce Manager that enables you to export and/or import resources from one Commerce store to another. This is useful if, for example, you want to copy a configuration from a store in a development environment to a store in a production environment.

Once you have configured the store configuration orchestrator integration, you can use the integration to:

- **Import** a store configuration from one store to another. The `Import Asynchronous Flow` provides a webhook trigger that accepts a JSON payload containing the store configuration. The Store Configuration Orchestrator Import Action executes and passes the JSON request to apply the imported configurations to a store.
- **Export** a store configuration to a JSON file.  The `Export Synchronous Flow` provides a webhook trigger that invokes the Store Configuration Orchestrator's Export Action and returns the exported store configuration in a JSON file.
- **Delete** exsiting resources. The `Delete Asynchronous Flow` provides a webhook trigger that invokes the Store Configuration Orchestrator's Delete Action. The asynchronous response is a single data element containing the remaining products.

The following Commerce objects are included when importing/exporting store configurations.

- [Currencies](/docs/api/pxm/currencies/currencies)
- [Templates](/docs/api/flows/flows-service-introduction#templates-in-product-experience-manager)
- [Variations](/docs/api/pxm/products/variations)
- [Variation Options](/docs/api/pxm/products/create-variation-option)
- [Flows](/docs/api/flows/flows-service-introduction)
- [Integrations](/docs/api/integrations/integrations-introduction)
- [Price Books](/docs/api/pxm/pricebooks/price-books-introduction)
- [Hierarchies](/docs/api/pxm/products/hierarchies)
- [Nodes](/docs/api/pxm/products/create-node). Only parent-level nodes are imported or exported. You cannot import or export nested nodes.
- [Catalogs](/docs/api/pxm/catalog/create-catalog)
- [Catalog Rules](/docs/api/pxm/catalog/rules)
- [Payment Gateway](/docs/api/payments/gateways). The following fields are masked when exporting payment gateways: **password**, **username**, **login**, **merchant_account**, **signature**, **stripe_account**, **merchant_id**, **private_key**, **public_key**, **payer_id**. These fields must be replaced by real values before importing the configuration.

A Store Configuration Orchestrator Delete Action deletes [products](/docs/api/pxm/products/products) from a store.

For more information, watch a video.

<iframe width="560" height="315" src="https://www.youtube.com/embed/faInZG1n8y4" title="Using the Store Configuration Orchestrator" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Understanding Environments in Store Configuration Orchestrator

Store Configuration Orchestrator allows you to categorize resources by environments. Here is an example of a [Store Configuration Orchestrator store configuration](/assets/store-configuration-orchestrator-example.json).

During an export, all configuration resources are stored in the `common` environment.

During an import, you can specify resources by environment. This allows you to have resources for your production and development environments in the same JSON file. When you perform a Store Configuration Orchestrator Import Action, you can specify the environment whose resources you want to import. A Store Configuration Orchestrator Import Action always imports resources from the `common` environment. If no environment is specified, only resources from the `common` environment are loaded. See [Configuring the Store Configuration Orchestrator Integration](#configuring-the-store-configuration-orchestrator-integration).

## Best Practices

The steps below are an example of the steps you could follow to copy a configuration from a store in a development environment to a store in a production environment.

1. Go to a development store and configure your integration.
1. Once you are ready to promote your development store to a different environment, execute a Store Configuration Orchestrator Export Action. You could then check this into your source control system, for example.
1. Your CI/CD pipeline can execute a Store Configuration Orchestrator Import Action to import this configuration into a different instance of the integration and import the  configuration from the development store to a different store.

## Configuring the Store Configuration Orchestrator Integration

Once you have [installed Store Configuration Orchestrator](#installing-store-configuration-orchestrator), you are ready to configure the Store Configuration Orchestrator integration in **Integrations Hub**.

1. In Commerce Manager, go to the store from which you want to export, import or delete resources.
1. Go to **COMPOSER** > **Integrations Hub**.
1. Under **Store Management & Configuration**, click **Store Configuration Orchestrator**. The **Store Configuration Orchestrator** integration guides you through the steps you need to follow to complete the integration.
1. Click **Configure**. The **Trigger details** are displayed. The **Store Configuration Orchestrator** integration automatically creates the webhooks required for the import, export and delete actions. The first time you configure the integration, no webhooks are displayed. The next time you configure your Store Configuration Orchestrator, the previously created webhooks are displayed. You do not need to change any of the information here.

    :::caution
    Do not configure any API keys for the webhooks. The webhooks are authorized using the `configuration.secret_key` value in the request body.  Configuring an API key directly on the webhook results in a non-functional integration.
    :::

1. Click **Next**. The **Commerce Connection** page is displayed.
1. Complete the information in the **Commerce Connection** page. You can find this information in **SYSTEM** > **Application Keys** in Commerce Manager when logged in as a user with Seller Admin privileges. See [Application Keys](/docs/commerce-manager/application-keys/application-keys-cm).

    - **Client-ID**  - Your Commerce Client ID.
    - **Client-Secret** - Your Commerce Client Secret.
    - **Token URL** - Your Commerce API Token URL. For example, `https://euwest.cm.elasticpath.com/oauth/<access_token>` (EU) or `https://useast.api.elasticpath.com/oauth/<access_token>` (US).

1. Click **Connect** to make sure that the authentication is completed successfully.
1. Click **Next**. The **Store Orchestrator Configuration** page is displayed. The table below describes the options you can configure, depending on the Store Configuration Orchestrator action you are performing.

    | Option | Action | Description |
    |:--- |:--- | :--- |
    | **Delete Batch Size** | Delete Action only. | Specify the page size to query when deleting large volumes of products. Maximum value is 100. |
    | **Delete Batch Limit**  | Delete Action only. | Specify the maximum number of batches to delete at one time. Leave blank to delete all batches. For example, if you set the **Delete Batch Limit** to 5, the first 5 batches of products are deleted. |
    | **Environment**  | Import Action only.  | Specify the environment whose resources you want to import. See [Understanding Environments in Store Configuration Orchestrator](#understanding-environments-in-store-configuration-orchestrator). |
    | **Log Level**  | All actions. | From **Log Level** list, select the level of logging. |

1. Click **Finish**. Your integration is enabled. You must enable a Store Configuration Orchestrator integration on each store from which you want to export, import or delete resources.

## Testing Store Configuration Orchestrator

You can quickly and easily test your configuration by manually invoking a configuration using the following Postman collections. 

- [Store Configuration Orchestrator Postman Collection](/assets/store-configuration-orchestrator.postman_collection.json).
- [Store Configuration Orchestrator Postman Environment](/assets/store-configuration-orchestrator.postman_environment.json).

### Exporting Resources Using Store Configuration Orchestrator Integration

You must have imported the postman collections before performing a Store Configuration Orchestrator Export Action. 

1. Go to a store.
1. Go to **COMPOSER** > **Integrations Hub**.
1. Under **Store Management & Configuration**, select **Store Configuration Orchestrator**. You must have configured a Store Configuration Orchestrator integration before you can export any resources from this store. See [Configuring the Store Configuration Orchestrator Integration](#configuring-the-store-configuration-orchestrator-integration).
1. From **Summary**, select **Export Synchronous** to display the webhook.
1. Select **Copy to Clipboard** to copy the URL.
1. Go to Postman.
1. In the Store Configuration Orchestrator Environment, in the `export-sync-webhook-url` variable, under **CURRENT VALUE**, paste the Export Synchronous URL you copied above.
1. Go to the Store Configuration Orchestrator Collection.
1. Run `GET {{export-sync-webhook-url}}`.
1. When the export has finished, copy the JSON payload. You can use this JSON payload to execute a Store Configuration Orchestrator Import Action. See [Importing Resources Using Store Configuration Orchestrator Integration](#importing-resources-using-store-configuration-orchestrator-integration).

### Importing Resources Using Store Configuration Orchestrator Integration

To import resources using Store Configuration Orchestrator Integration:

1. Go to a store.
1. Go to **COMPOSER** > **Integrations Hub**.
1. Under **Store Management & Configuration**, select **Store Configuration Orchestrator**. You must have configured a Store Configuration Orchestrator integration before you can import any resources into this store. See [Configuring the Store Configuration Orchestrator Integration](#configuring-the-store-configuration-orchestrator-integration).
1. From **Summary**, select **Import Asynchronous** to display the webhook.
1. From **Selected flow** list, select **Import Asynchronous**.
1. Select **Copy to Clipboard** to copy the URL.
1. Go to Postman.
1. In the Store Configuration Orchestrator Environment, open `POST {{import-async-webhook-url}}` request.
1. In the `import-async-webhook-url` variable, under **CURRENT VALUE**, paste the Import Asynchronous URL you copied above.
1. In **Body**, paste the JSON payload that you generated when exporting. See [Exporting Resources Using Store Configuration Orchestrator Integration](#exporting-resources-using-store-configuration-orchestrator-integration).
1. Run `POST {{import-async-webhook-url}}`.
1. When the import has finished, if you go to your store, you should see all the resources you just imported.

### Deleting Resources Using Store Configuration Orchestrator Integration

To delete products using Store Configuration Orchestrator Integration:

1. Go to a store.
1. Go to **COMPOSER** > **Integrations Hub**.
1. Under **Store Management & Configuration**, select **Store Configuration Orchestrator**. You must have configured a Store Configuration Orchestrator integration before you can delete any products from this store. See [Configuring the Store Configuration Orchestrator Integration](#configuring-the-store-configuration-orchestrator-integration).
1. From **Selected flow** list, select **Delete Asynchronous**.
1. Select **Copy to Clipboard** to copy the URL.
1. Go to Postman.
In the Store Configuration Orchestrator Environment, in the `delete-async-webhook-url` variable, under **CURRENT VALUE**, paste the Delete Asynchronous URL you copied above.
1. Open `DELETE {{delete-async-webhook-url}}` request.
1. Run `DELETE {{delete-async-webhook-url}}`.
1. Depending on how you have configured **Delete Batch Limit**, the Store Configuration Orchestrator deletes the batches of products you specified. For example, if you set the **Delete Batch Limit** to 5, the first 5 batches of products are deleted.

## Using Store Configuration Orchestrator Integration

To use Store Configuration Orchestrator Integration:

1. Go to a store.
1. From **COMPOSER** > **Integrations Hub**, go to your Store Configuration Orchestrator integration.
1. From **Summary**, you can view, pause or delete your Store Configuration Orchestrator integration.
1. To reconfigure Store Configuration Orchestrator, go to **Summary** > **Reconfigure**.
1. If there is an update to the Commerce Store Configuration Orchestrator integration, a message is displayed in **Summary**. Click **Update** to update your integration. You are walked through the steps to configure your integration.

## Troubleshooting the Store Configuration Orchestrator Integration

You can debug any issues in **Executions**. Click an execution to see the execution details. The **Logs** shows the output and any errors or warnings.

Select **Retry** to initiate an execution again.
