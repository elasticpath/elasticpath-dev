---
title: Commerce Node Import
nav_label: Node Import
sidebar_position: 50
---

The Commerce Node Import is a utility in the **Integrations Hub** in Commerce Manager that enables you to import Commerce node data to your Commerce store. The Commerce Node Import utility can import:

- Node data files of any size. 
- Localized node names and descriptions.

An example of how node data is imported using a Node Import integration is described below.

1. Create a JSON file with the node data you want to import. You can have more than one JSON file, depending on your requirements. See [Node Import Integration File Format](#node-import-integration-file-format).
1. Configure a Node Import integration in the store where you want to import the node data. This creates the webhooks that consumes the message and JSON files when you send the API request to import the node data.
1. In Postman, run `POST {{webhook-url}}` request. As part of the request, you must supply the Gzip file URLs for the JSON files you want to process as part of the import. See [Using Node Import Integration Files](#using-node-import-integration-files).

    - The Node Import integration processes your Gzip files.
    - The nodes are imported to the store.

For more information, watch a video.

<iframe width="560" height="315" src="https://www.youtube.com/embed/PlTT_uLuhak" title="Using the Node Import integration" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Node Import Integration File Format

The data that you provide to the Node Import integration must conform to [JSON Lines](https://jsonlines.org/) text format and conform to the following model.  

| Name | Type | Description |
| :--- | :--- | :--- |
| `slug` | `string` | A label for the node that is used in the URL paths. A slug can contain any combination of letters, numbers, periods, hyphens, and underscores. NO spaces or other characters are allowed. |
| `hierarchySlug` | `string` | A label for the hierarchy that the node belongs to. It is used in the URL paths. A slug can contain any combination of letters, numbers, periods, hyphens, and underscores. NO spaces or other characters are allowed. |
| `parentSlug` | `string` | A label for a parent node that a node belongs to. If this is blank, the node is a parent node. A slug can contain any combination of letters, numbers, periods, hyphens, and underscores. NO spaces or other characters are allowed. |
| `name` | `string` | A name for the node.  |
| `description` | `string` | A description for the node. |

## The `name` Object

If your store supports multiple languages, you can localize node names and descriptions. You can have as many locales as you want.

Name | Type | Description |
| :--- | :--- | :--- |
| `locale` | `string` | The language code, for example, "fr-CA" or "en". |
| `value` | `string` | A localized name for the node. |

## The `description` Object

If your store supports multiple languages, you can localize node names and descriptions. You can have as many locales as you want.

Name | Type | Description |
| :--- | :--- | :--- |
| `locale` | `string` | The language code, for example, "fr-CA" or "en". |
| `value` | `string` | A localized description for the node. |

## Using Node Import Integration Files

To invoke the node import, you must invoke the webhook created when you configure the Node Import integration and supply the Gzip file URLs as part of the payload. See [Importing your Node Data](#importing-your-node-data). We recommend that URLs are signed with an expiration date. See [Sharing objects using presigned URLs](https://docs.aws.amazon.com/AmazonS3/latest/userguide/ShareObjectPreSignedURL.html).

### Body

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `gzipFileUrls` | Required | `string` | An array of Gzip file URls for the JSON files you want to import in the format `https://{path}/nodes.jsonl.gz` where `path` is the path to your Gzip file. We recommend aligning the number of products per file with the `pageSize`, as processing each page requires rereading the file. |
| `fileIndex` | Optional | `integer` | The zero based index of the gzip file to start with. The default is zero. This is useful to restart processing in case of failure. |
| `PageSize` | Optional | `integer` | The number of products to process from a given file in a `paged` manner. The default is `500` and the upper limit depends on the number of custom attributes, files and variations. Tuning may be required to find the optimal page size. |
| `page` | Optional | `integer` | The number of pages handled during import. |

### Request Example

```json
{
    "gzipFileUrls": [
        "https://{path}/nodes.jsonl.gz"
    ],
    "fileIndex": 0,
    "pageSize": 1000,
    "page": 0
}
```

## Prerequisites

1. The store where you are importing your node data must already have the hierarchies defined. The Node Import does not create hierarchies as part of the import.
1. You must have a gzipped JSON file configured that defines the node data you want to import. See [Node Import Integration File Formats](#product-import-integration-file-formats).

## Configuring the Node Import Integration

Once you have met the [Prerequistes](#prequisites), you are ready to configure the node import integration in **Integrations Hub**.

1. In Commerce Manager, go to the store where you want to import node data.
1. Go to **COMPOSER** > **Integrations Hub**.
1. Under **Store Management & Configuration**, click **Commerce Node Import**. The **Commerce Node Import** integration guides you through the steps you need to follow to complete the integration.
1. Click **Configure**. The **Trigger details** are displayed. **URL** is the webhook that consumes your Gzip files. 
1. Click **Next**. The **Commerce Configuration** page is displayed.
1. Complete the information in the **Commerce Configuration** page. 

    1. For **Log Level**, from **Value** list, select the level of logging. 
    1. Enter: 

        - **Client-ID**  - Your Commerce Client ID.
        - **Client-Secret** - Your Commerce Client Secret.

            You can find this information in **SYSTEM** > **Application Keys** in Commerce Manager when logged in as a user with Seller Admin privileges. See [Application Keys](/docs/commerce-manager/application-keys/application-keys-cm).

    1. Click **Connect**. The **Integration Hub** uses your current store crededentials to automatically connect you to your store. 
    1. Once you have successfully connected to Commerce, you can configure the following:

        | Option | Description                                                                                                                                                                                                               |
        |:--- |:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
        | **Token URL**  | Your Commerce API Token URL. For example, `https://api.motlin.com/oauth/<access_token>` (EU) or `https://useast.api.elasticpath.com/oauth/<access_token>` (US).                                        |
        | **Elapsed Execution Time Cutoff** | The number of seconds to wait before the node import is stopped, if page processing has halted for any reason. This may need to be increased if the number of nodes being processed for the store is exceptionally large. |
        | **Default Page Size** | The default page size processed when importing.                                                                                                                                                                           |

1. Click **Finish**. Your integration is enabled. You must enable a Node integration on each store where you want to import your node data set.  

## Importing your Node Data

You can perform the node import using Postman. 

1. Go to a store.
1. Go to **COMPOSER** > **Integrations Hub**.
1. Under **Store Management & Configuration**, select **Commerce Node Import**. You must have configured a Node Import integration before you can import any resources into this store. See [Configuring the Node Import Integration](##configuring-the-node-import-integration).
1. From **Summary** > **Trigger Details**, click **Paged Node Loader** to display the webhook.
1. Select **Copy to Clipboard** to copy the URL.
1. Go to Postman.
1. Open `POST {{webhook-url}}` where *webhook-url* is the webhook you copied in step 5.
1. In **Body**, add the list of Gzip file URLs for the JSON files you want to import. See [Node Import Integration File Format](#node-import-integration-file-format).
11. Run `POST {{webhook-url}}`.
12. When the import has finished, if you go to your store, you should see all the resources you just imported.

## Troubleshooting the Node Import Integration

You can debug any issues in **Executions**. Click an execution to see the execution details. The **Logs** shows the output and any errors or warnings.

Select **Retry** to initiate an execution again.

## Demo

<iframe width="560" height="315" src="https://www.youtube.com/embed/PlTT_uLuhak" title="Integrations Hub - Node Import" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
