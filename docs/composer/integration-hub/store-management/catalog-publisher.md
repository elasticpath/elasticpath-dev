---
title: Commerce Catalog Publisher 
nav_label: Catalog Publisher 
sidebar_position: 20
---

The Commerce Catalog Publisher is a utility in the **Integrations Hub** in Commerce Manager that enables you to publish many Commerce store catalogs in one publish operation. 

An example of how the store catalogs are published using the Catalog Publisher integration is described below.

1. When triggered, the integration retrieves the store catalogs.
1. For each store catalog, the integration triggers a catalog publish operation. 
1. The integration waits for the catalog publish to complete.  
1. When the catalog publish is complete, the integration waits a specific period of time to allow for any corresponding events linked to a store catalog to complete. For example, if you are using Algolia, you may want to wait for the Algolia re-index operation to complete. 
1. The integration publishes the next catalog, if any remain.  Otherwise, the process completes.

## Using Catalog Publisher

To publish your store catalogs, you must invoke the webhook that is created when you configure the Catalog Publisher integration. You can either publish all store catalogs or supply an array of the catalog IDs that you want to publish. 

### Request Example

```json
{
  "catalogIds": ["59935562-8c44-11ed-a1eb-0242ac120002","59935846-8c44-11ed-a1eb-0242ac120002"]
}
```

## Configuring the Catalog Publisher Integration

You configure the Catalog Publisher integration in **Integrations Hub**.

1. In Commerce Manager, go to the store from which you want to publish your store catalogs.
1. Go to **COMPOSER** > **Integrations Hub**.
1. Under **Store Management & Configuration**, click **Commerce Catalog Publisher**. The **Commerce Catalog Publisher** integration guides you through the steps you need to follow to complete the integration.
1. Click **Configure**. The **Trigger details** are displayed.
1. Click **Next**. The **Commerce Connection** page is displayed.
1. Complete the information in the **Commerce Connection** page. You can find this information in **SYSTEM** > **Application Keys** in Commerce Manager when logged in as a user with Seller Admin privileges. See [Application Keys](/docs/authentication/application-keys/application-keys-overview). The table below describes the options you can configure. 

    | Option | Description |
    |:--- | :--- |
    | **pubish_check_delay** | The delay, in milliseconds, between status checks. Default value is 300000. |
    | **algolia_publish_delay** | The delay, in milliseconds, to wait for any corresponding events linked to your catalog to complete. For example, if you are using Algolia, you may want to wait for the Algolia re-index operation to complete. Default value is 300000. |
    | **check_status_retry** | The maximum number of times the integration checks the status and retries. Default value is 15. |
    | **publish_schedule**  | The cron schedule for a full catalog publish. Default value is `0 7 * * SUN`. |
    | **publish_concurrently**  | Turn on the **publish_concurrently** toggle to publish your catalogs concurrently. The integration supports concurrently publishing up to 20 catalogs. If more than 20 catalogs are included, the integration returns an error. If the **publish_concurrently** toggle is off, then catalogs are published sequentially one after another. There is no limit on the number of catalogs that can be published sequentially. |
    | **Client-ID** | Your Commerce Client ID. |
    | **Client-Secret** | Your Commerce Client Secret. | 
    | **Token URL** |Your Commerce API Token URL. For example, `api.motlin.com/oauth/<access_token>` (EU) or `useast.api.elasticpath.com/oauth/<access_token>` (US).|

    :::note
    When integrating with third-party providers, we recommend you use the closest region in the third-party service to reduce latency as much as possible. See [Regions and URLs table](/guides/Getting-Started/elastic-path-domains#regions-and-ur-ls).
    :::

1. Click **Connect**.
1. Click **Next**. The **Commerce Catalogs** page is displayed. You must select catalogs to be included in the publication. 
1. Select the catalogs you want to publish. You can select:
    - **All catalogs**: All the catalogs available in your store are automatically selected.
    - **Selected catalogs**: Select the specific catalogs you want to publish and assign them a priority value (any integer between 1 and 100). Catalogs with a higher priority are published first. If a priority value is not set, the integration assigns a default priority of 100. Prioritization does not apply when catalogs are published concurrently. 
1. Click **Finish**. Your integration is enabled. You must enable a Catalog Publisher integration on each store where you want to import your product data set.  

## Using Catalog Publisher Integration

Using the Catalog Publisher, you can:

- Publish all or some of your store catalogs
- Check the publish status of your store catalogs
- Schedule your store catalog publishing

You can publish using Postman. 

1. Go to a store.
1. Go to **COMPOSER** > **Integrations Hub**.
1. Under **Store Management & Configuration**, select **Catalog Publisher**. You must have configured a Catalog Publisher integration before you can publish any catalogs for this store. See [Configuring the Catalog Publisher Integration](##configuring-the-catalog-publisher-integration).
1. From **Summary** > **Trigger Details**. 

    - Expand **Publish Catalog Flow** if you want to publish specific catalogs.
    - Expand **Check Publish Status Flow** if you want to check the publish status of all or some of your catalogs.
    - Expand **Schedule Flow** if you want to schedule publishing your catalogs.
    - Expand **Publish Complete Flow** if you want to publish all your catalogs.

1. Select **Copy to Clipboard** to copy the URLs.
1. Go to Postman.
1. Open `POST {{webhook-url}}` where *webhook-url* is the webhook you copied in step 5.
1. You can supply the folllowing parameters in **Body**, depending on the flow you are using. 

    - **Publish Catalog Flow** - An array of catalog IDs.
   
       ```
       {
        "catalogIds": ["4f37dd4e-75c6-4f43-8888-0ea8d4963480","0776c723-971a-444b-b0e0-4967e9b9164c"]
       }
       ```

    - **Check Publish Status Flow** - An array of catalog IDs, the catalog release ID and the `statusCheckRetryCount` to specify the maximum number of times the integration checks the status and retries.
      ```
       {
        "catalogIds": ["4f37dd4e-75c6-4f43-8888-0ea8d4963480","0776c723-971a-444b-b0e0-4967e9b9164c"],
        "releaseId": "cb7f8365-3194-44df-aa1a-13ec0f279c58",
        "statusCheckRetryCount":5
       }
       ```

    - **Schedule Flow** - Leave empty to publish all catalogs.
    - **Publish Complete Flow** - An array of catalog IDs.
      ```
       {
        "catalogIds": ["4f37dd4e-75c6-4f43-8888-0ea8d4963480","0776c723-971a-444b-b0e0-4967e9b9164c"]
       }
       ```

1. Run `POST {{webhook-url}}`.
1. When the publish has finished, if you go to your store, you should see your published store catalogs.

## Troubleshooting the Catalog Publisher Integration

You can debug any issues in **Executions**. Click an execution to see the execution details. The **Logs** shows the output and any errors or warnings.

Select **Retry** to initiate an execution again.
