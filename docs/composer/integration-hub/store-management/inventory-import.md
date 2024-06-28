---
title: Commerce Inventory Import
nav_label: Inventory Import
sidebar_position: 30
---

The Commerce Inventory Import is a utility in the **Integrations Hub** in Commerce Manager that enables you to quickly and easily create and update inventory data in your Commerce store. Using the Commerce Inventory Import utility, you can:

- Create inventory when an inventory object does not exist for a product.
- Update inventory values based on the strategy you select when an inventory object exists for a product.

You can perform the following actions:

- Decrement stock.
- Increment stock.
- Match available stock. The Inventory Import Utility reads the existing stock available value, calculates the adjustment then increments or decrements the stock value.

Products are identified by either:

- `SKU` - The unique stock keeping unit of the product.
- `external_ref` -  The unique attribute associated with the product.

An example of how inventory data is imported using an Inventory Import integration is described below.

1. Create a JSON file with the inventory data you want to import. You can have more than one JSON file, depending on your requirements. See [Inventory Import Integration File Format](#inventory-import-integration-file-format).
1. Configure an Inventory Import integration in the store where you want to import the inventory data. This creates the webhooks that consumes the message and JSON files when you send the API request to import the inventory data.
1. In Postman, run `POST {{webhook-url}}` request. As part of the request, you must supply the Gzip file URLs for the JSON files you want to process as part of the import. See [Using Inventory Import Integration Files](#using-inventory-import-integration-files).

    - The Iventory Import integration processes your Gzip files.
    - The inventory data are imported to the store.

## Inventory Import Integration File Format

The data that you provide to the Inventory Import integration must conform to [JSON Lines](https://jsonlines.org/) text format and conform to the following model.  

| Name | Type | Description |
| :--- | :--- | :--- |
| `lookupField` | `string` | Must be either `sku` or `external_ref` of a product. |
| `lookupValue` | `string` | The value used to lookup the product. |
| `quantity` | `integer` | The quantity to apply based on the action. |
| `action` | `string` | Must be one of the  following; `increment`, `decrement` or `matchAvailable` depending on the action you want to perform. |

## Using Inventory Import Integration Files

To invoke the inventory import, you must invoke the webhook created when you configure the Inventory Import integration and supply the Gzip file URLs as part of the payload. See [Importing your Inventory Data](#importing-your-inventory-data). We recommend that URLs are signed with an expiration date. See [Sharing objects using presigned URLs](https://docs.aws.amazon.com/AmazonS3/latest/userguide/ShareObjectPreSignedURL.html).

### Body

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `gzipFileUrls` | Required | `string` | The Gzip file URls for the JSON files you want to import in the format `https://{path}/products-inventory.jsonl.gz` where `path` is the path to your Gzip file. You can specify more than one. We recommend aligning the number of products per file with the `pageSize`, as processing each page requires rereading the file. |
| `fileIndex` | Optional | `integer` | The zero based index of the gzip file to start with. The default is zero. This is useful to restart processing in case of failure. |
| `PageSize` | Optional | `integer` | The number of products to process from a given file in a `paged` manner. The default is `500` and the upper limit depends on the number of custom attributes, files and variations. Tuning may be required to find the optimal page size. |
| `page` | Optional | `integer` | Execution start page index. |

### Request Example

```json
{
    "gzipFileUrls": [
        "https://{path}/{file-name}.jsonl.gz"
    ],
    "fileIndex": 0,
    "pageSize": 1000,
    "page": 0
}
```

## Prerequisites

You must have a JSON file configured that defines the price data you want to import. See [Inventory Import Integration File Format](#inventory-import-integration-file-format).

## Configuring the Inventory Import Integration

Once you have met the [Prerequistes](#prerequisites), you are ready to configure the inventory import integration in **Integrations Hub**.

1. In Commerce Manager, go to the store where you want to import inventory data.
1. Go to **COMPOSER** > **Integrations Hub**.
1. Under **Store Management & Configuration**, click **Commerce Inventory Import**. The **Commerce Inventory Import** integration guides you through the steps you need to follow to complete the integration.
1. Click **Configure**. The **Trigger details** are displayed. **URL** is the webhook that consumes your Gzip files. 
1. Click **Next**. The **Commerce Configuration** page is displayed.
1. Complete the information in the **Commerce Configuration** page. 

    1. Enter: 

        - **Client-ID**  - Your Commerce Client ID.
        - **Client-Secret** - Your Commerce Client Secret.

            You can find this information in **SYSTEM** > **Application Keys** in Commerce Manager when logged in as a user with Seller Admin privileges. See [Application Keys](/docs/authentication/application-keys/application-keys-overview).

        - **Keep Alive Flag** - Turn on the **Keep Alive Flag** toggle if you want to specify keep alive intervals for this integration.
        - **Keep Alive Interval** - Specify keep alive interval for this integration. Default value is 10000.
        - **Throttle Interval** - Specify throttle interval for this integration. Default value is 125. This supports staying within rate limits.
        - **Throttle Limit** - Specify throttle request limit interval for this integration. Default value is 3. This supports staying within rate limits.
        - **Token URL** - Your Commerce API Token URL. For example, `api.motlin.com/oauth/<access_token>` (EU) or `useast.api.elasticpath.com/oauth/<access_token>` (US).

    1. Click **Connect**. The **Integration Hub** uses your current store crededentials to automatically connect you to your store. 
    1. Once you have successfully connected to Commerce, you can configure the following:

        - **Elapsed Execution Time Cutoff** - The number of seconds to wait before the inventory import is stopped, if page processing has halted for any reason. This may need to be increased if the number of products being processed for the store is exceptionally large.
        - **Default Page Size** - The default page size processed when importing.
        - **Log Level** - From **Log Level** list, select the level of logging.
        - **Product Batch Size** - The maximum product batch size is 100. If you configure the **Product Batch Size** to a value greater than 100, the integration automatically adjusts the value to 100.
    
1. Click **Finish**. Your integration is enabled. You must enable an Inventory Import integration on each store where you want to import your inventory data.  

## Importing your Inventory Data

You can perform the inventory import using Postman. 

1. Go to a store.
1. Go to **COMPOSER** > **Integrations Hub**.
1. Under **Store Management & Configuration**, select **Commerce Inventory Import**. You must have configured an Inventory Import integration before you can import any resources into this store. See [Configuring the Inventory Import Integration](##configuring-the-inventory-import-integration).
1. From **Summary** > **Trigger Details**, click **Gzip File URL Handler** to display the webhook.
1. Select **Copy to Clipboard** to copy the URL.
1. Go to Postman.
1. Open `POST {{gzip-file-url-handler-webhook-url}}` where *{{gzip-file-url-handler-webhook-url}}* is the webhook you copied in step 5.
1. In **Body**, add the list of Gzip file URLs for the JSON files you want to import. See [Inventory Import Integration File Format](#inventory-import-integration-file-format).
11. Run `POST {{gzip-file-url-handler-webhook-url}}`.
12. When the import has finished, go to your store to see all the resources you just imported.

## Troubleshooting the Inventory Import Integration

You can debug any issues in **Executions**. Click an execution to see the execution details. The **Logs** shows the output and any errors or warnings.

Select **Retry** to initiate an execution again.

## Demo

<iframe width="560" height="315" src="https://www.youtube.com/embed/gVa6sOaoIi0" title="Integrations Hub - Inventory Import" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
