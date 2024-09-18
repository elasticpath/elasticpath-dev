---
title: Commerce Node Product Association Import
nav_label: Node Product Association Import
sidebar_position: 40
---

The Commerce Node Product Association Import is a utility in the **Integrations Hub** in Commerce Manager that enables you to quickly and easily update Commerce node product association data in your Commerce store. The Commerce Node Product Association Import utility can import node product association data files of any size. 

An example of how node product association data is updated is described below.

1. Create a JSON file with the node product association data you want to import. You can have more than one JSON file, depending on your requirements. See [Node Product Association Import Integration File Format](#node-product-association-import-integration-file-format).
1. Configure a Node Product Association Import integration in the store where you want to import the node product association data. This creates the webhooks that consumes the message and JSON files when you send the API request to import the node product association data.
1. In Postman, run `POST {{webhook-url}}` request. As part of the request, you must supply the Gzip file URLs for the JSON files you want to process as part of the import. See [Using Node Product Association Import Integration Files](#using-node-product-association-import-integration-files).

    - The Node Product Association Import integration processes your Gzip files.
    - The node product association data are imported to the store.

## Node Product Association Import Integration File Format

The data that you provide to the Node Product Association Import integration must conform to [JSON Lines](https://jsonlines.org/) text format and conform to the following model.  

| Name | Type | Description |
| :--- | :--- | :--- |
| `slug` | `string` | A label for the node that is used in the URL paths. A slug can contain any combination of letters, numbers, periods, hyphens, and underscores. NO spaces or other characters are allowed. |
| `hierarchySlug` | `string` | A label for the hierarchy that the node belongs to. It is used in the URL paths. A slug can contain any combination of letters, numbers, periods, hyphens, and underscores. NO spaces or other characters are allowed. |
| `products` | `string` | An array of product SKUs. |

An example of a Node Product Association Import integration file is shown below:

```json
{
  "slug": "example-slug",
  "hierarchySlug": "example-hierarchy",
  "products": [
    "test-product-sku-1",
    "test-product-sku-2"
  ]
}
```

## Using Node Product Association Import Integration Files

To invoke the node product association import, you must invoke the webhook created when you configure the Node Product Association Import integration and supply the Gzip file URLs as part of the payload. See [Importing your Node Product Association Data](#importing-your-node-data). We recommend that URLs are signed with an expiration date. See [Sharing objects using presigned URLs](https://docs.aws.amazon.com/AmazonS3/latest/userguide/ShareObjectPreSignedURL.html).

### Body

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `gzipFileUrls` | Required | `string` | An array of Gzip file URls for the JSON files you want to import in the format `https://{path}/associations.jsonl.gz` where `path` is the path to your Gzip file. We recommend aligning the number of products per file with the `pageSize`, as processing each page requires rereading the file. |
| `fileIndex` | Optional | `integer` | The zero based index of the gzip file to start with. The default is zero. This is useful to restart processing in case of failure. |
| `PageSize` | Optional | `integer` | The number of products to process from a given file in a `paged` manner. The default is `100`. Tuning may be required to find the optimal page size. |
| `page` | Optional | `integer` | The number of pages handled during import. |

### Request Example

```json
{
    "gzipFileUrls": [
        "https://{path}/associations.jsonl.gz"
    ],
    "fileIndex": 0,
    "pageSize": 1000,
    "page": 5
}
```

## Prerequisites

1. You must have a gzipped JSON file configured that defines the node product asssociation data you want to import. See [Node Product Association Import Integration File Formats](#node-product-association-import-integration-file-format).
1. The store where you are updating your node product association data must have the nodes and products referenced in the node product association import integration file already defined. The Node Product Association Import does not create the products and nodes as part of the import.

## Configuring the Node Product Association Import Integration

Once you have met the [Prerequistes](#prequisites), you are ready to configure the node product association import integration in **Integrations Hub**.

1. In Commerce Manager, go to the store where you want to import node data.
1. Go to **COMPOSER** > **Integrations Hub**.
1. Under **Store Management & Configuration**, click **Commerce Node Product Association Import**. The **Commerce Node Product Association Import** integration guides you through the steps you need to follow to complete the integration.
1. Click **Configure**. The **Trigger details** are displayed. **URL** is the webhook that consumes your Gzip files. 
1. Click **Next**. The **Commerce Configuration** page is displayed.
1. Complete the information in the **Commerce Configuration** page. 

    1. For **Log Level**, from **Value** list, select the level of logging. 
    1. Click **+ Add Value** to add another level of logging.
    1. Enter: 

        - **Client-ID**  - Your Commerce Client ID.
        - **Client-Secret** - Your Commerce Client Secret.

            You can find this information in **SYSTEM** > **Application Keys** in Commerce Manager when logged in as a user with Seller Admin privileges. See [Application Keys](/docs/commerce-manager/application-keys/application-keys-cm).

        The table below describes the options you can configure. 

       | Option | Description |
       |:--- | :--- |
       | **Keep Alive Flag** |  Turn on the **Keep Alive Flag** toggle if you want to specify keep alive intervals for this integration. |
       | **Keep Alive Interval** | Specify keep alive interval for this integration. Default value is 10000. |
       | **Throttle Interval** | Specify throttle interval for this integration. Default value is 125. This supports staying within rate limits. |
       | **Throttle Limit**  | Specify throttle request limit interval for this integration. Default value is 3. This supports staying within rate limits. |
       | **Token URL**  | Your Commerce API Token URL. For example, `useast.api.elasticpath.com/oauth/access_token` (EU) or `useast.api.elasticpath.com/oauth/access_token` (US). |

1. Click **Connect**. 
1. Once you have successfully connected to Commerce, you can configure the following:

    | Option | Description |
    |:--- | :--- |
    | **Elapsed Execution Time Cutoff** | The number of seconds to wait before the node product association import is stopped, if page processing has halted for any reason. This may need to be increased if the number of associations being processed for the store is exceptionally large. |
    | **Default Page Size** | The default page size processed when importing. |
    | **Maximum Hierarchy Depth** | From **Maximum Hierarchy Depth** list, select the depth of parent/child levels you want. The default is 3. |

1. Click **Finish**. Your integration is enabled. You must enable a Node Product Association Import integration on each store where you want to import your node Product Association data set.  

## Importing your Node Product Association Data

You can perform the node product association data import using Postman. 

1. Go to a store.
1. Go to **COMPOSER** > **Integrations Hub**.
1. Under **Store Management & Configuration**, select **Commerce Node Product Association Import**. You must have configured a Node Product Association Import integration before you can import any resources into this store. See [Configuring the Node Product Asssociation Import Integration](#configuring-the-node-product-association-import-integration).
1. From **Summary** > **Trigger Details**, click **Paged Node Product Association Loader** to display the webhook.
1. Select **Copy to Clipboard** to copy the URL.
1. Go to Postman.
1. Open `POST {{webhook-url}}` where *webhook-url* is the webhook you copied in step 5.
1. In **Body**, add the list of Gzip file URLs for the JSON files you want to import. See [Node Product Association Import Integration File Format](#node-product-association-import-integration-file-format).
11. Run `POST {{webhook-url}}`.
12. When the import has finished, go to your store to see the resources you just imported.

## Troubleshooting the Node Product Association Import Integration

You can debug any issues in **Executions**. Click an execution to see the execution details. The **Logs** shows the output and any errors or warnings.

Select **Retry** to initiate an execution again.

## Demo

<iframe width="560" height="315" src="https://www.youtube.com/embed/uDMdkOg5Lxw" title="Integrations Hub - Node Product Association" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
