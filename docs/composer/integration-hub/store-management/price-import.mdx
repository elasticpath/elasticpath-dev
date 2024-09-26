---
title: Commerce Price Import
nav_label: Price Import
sidebar_position: 60
---

The Commerce Price Import is a utility in the **Integrations Hub** in Commerce Manager that enables you to import Commerce price data from one Commerce store to another. The Commerce Price Import utility can import:

- Price data files of any size. 
- Tier and sale pricing associated with prices.

:::caution

The Price Import integration does not support bundles.

:::

An example of how price data is imported using a Price Import integration is described below.

1. Create a JSON file with the price data you want to import. You can have more than one JSON file, depending on your requirements. See [Price Import Integration File Format](#price-import-integration-file-format).
1. Configure a Price Import integration in the store where you want to import the price data. This creates the webhooks that consumes the message and JSON files when you send the API request to import the price data.
1. In Postman, run `POST {{webhook-url}}` request. As part of the request, you must supply the Gzip file URLs for the JSON files you want to process as part of the import. See [Using Price Import Integration Files](#using-price-import-integration-files).

    - The Price Import integration processes your Gzip files.
    - The prices are imported to the store.

## Price Import Integration File Format

The data that you provide to the Price Import integration must conform to [JSON Lines](https://jsonlines.org/) text format and conform to the following model.  The [price JSON schema file](/assets/ih-price-importer-schema.json) can be used to validate the format of your price objects.

| Name | Type | Description |
| :--- | :--- | :--- |
| `sku` | `string` | The unique stock keeping unit of the product. |
| `priceBookName` | `string` | The name of the pricebook. |

## The `Prices` object

 Each product SKU can have prices in multiple currencies.

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `currency` | `string`|  The three-letter ISO code for the currency associated with this price. |
| `amount` | `integer` | The price in the lowest denomination for the specified currency.  |
| `tax_inclusive` | `boolean` | Whether this price includes tax. Default is `false`. |

## The `tiers` object

Each tier can only have one currency within the same block.

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `tiers: <key>` | `object` | The name of the tier, such as `Pencils`. |
| `tiers: <key>: minimum_quantity` | `integer` | The minimum quantity defined for the specified price. |
| `tiers: <key>: amount` | `integer` | The price for each quantity. |

## The `sales` object

Each sale can only have one sale within the same block.

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `sales: <key>` | `object` | The name of the sale, such as `Summer Sale`. |
| `sales: <key>: schedule` | `object` | The schedule of the sale. Contains an optional `valid_from` and `valid_to` parameter for the start and end date of the sale. |

## Example Price Object

```json
{
  "sku": "productSku",
  "priceBookName": "priceBookName",
  "prices": [
    {
      "currency": "USD",
      "amount": 10000,
      "tax_inclusive": false,
      "tiers": [
        {
          "name": "tierName",
          "minimum_quantity": 5,
          "amount": 90000
        }
      ]
    }
  ],
  "sales": [
    {
      "name": "saleName",
      "schedule": {
        "valid_from": "2022-05-03T20:47:54.068Z",
        "valid_to": "2022-05-28T20:47:57.068Z"
      },
      "salePrices": [
        {
          "currency": "USD",
          "amount": 80000,
          "tax_inclusive": false,
          "tiers": [
            {
              "name": "tierName",
              "minimum_quantity": 5,
              "amount": 80000
            }
          ]
        }
      ]
    }
  ]
}
```

## Using Price Import Integration Files

To invoke the price import, you must invoke the webhook created when you configure the Price Import integration and supply the Gzip file URLs as part of the payload. See [Importing your Price Data](#importing-your-price-data). We recommend that URLs are signed with an expiration date. See [Sharing objects using presigned URLs](https://docs.aws.amazon.com/AmazonS3/latest/userguide/ShareObjectPreSignedURL.html).

### Body

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `gzipFileUrls` | Required | `string` | The Gzip file URls for the JSON files you want to import in the format `https://{path}/products-price.jsonl.gz` where `path` is the path to your Gzip file. You can specify more than one. We recommend aligning the number of products per file with the `pageSize`, as processing each page requires rereading the file. |
| `fileIndex` | Optional | `integer` | The zero based index of the gzip file to start with. The default is zero. This is useful to restart processing in case of failure. |
| `PageSize` | Optional | `integer` | The number of products to process from a given file in a `paged` manner. The default is `500` and the upper limit depends on the number of custom attributes, files and variations. Tuning may be required to find the optimal page size. |
| `page` | Optional | `integer` | The number of pages handled during import. |

### Request Example

```json
{
    "gzipFileUrls": [
        "https://{path}/product-price.jsonl.gz"
    ],
    "fileIndex": 0,
    "pageSize": 1000,
    "page": 0
}
```

## Prerequisites

1. The store where you are importing your price data must already have the pricebooks defined. The Price Import does not create pricebooks as part of the import.
1. You must have a JSON file configured that defines the price data you want to import. See [Price Import Integration File Formats](#price-import-integration-file-formats).

## Configuring the Price Import Integration

Once you have met the [Prerequistes](#prequisites), you are ready to configure the price import integration in **Integrations Hub**.

1. In Commerce Manager, go to the store where you want to import price data.
1. Go to **COMPOSER** > **Integrations Hub**.
1. Under **Store Management & Configuration**, click **Commerce Price Import**. The **Commerce Price Import** integration guides you through the steps you need to follow to complete the integration.
1. Click **Configure**. The **Trigger details** are displayed. **URL** is the webhook that consumes your Gzip files. 
1. Click **Next**. The **Commerce Configuration** page is displayed.
1. Complete the information in the **Commerce Configuration** page. 

    1. **Commerce Connection** details.

        - **Client-ID**  - Your Commerce Client ID.
        - **Client-Secret** - Your Commerce Client Secret.

            You can find this information in **SYSTEM** > **Application Keys** in Commerce Manager when logged in as a user with Seller Admin privileges. See [Application Keys](/docs/commerce-manager/application-keys/application-keys-cm).

        -  **Token URL** - Your Commerce API Token URL. For example, `https://api.motlin.com/oauth/<access_token>` (EU) or `https://useast.api.elasticpath.com/oauth/<access_token>` (US).
        - **Keep Alive Flag** - Turn on the **Keep Alive Flag** toggle if you want to specify keep alive intervals for this integration.
        - **Keep Alive Interval** - Specify keep alive interval for this integration. Default value is 10000.
        - **Throttle Interval** - Specify throttle interval for this integration. Default value is 125. This supports staying within rate limits.
        - **Throttle Limit** - Specify throttle request limit interval for this integration. Default value is 3. This supports staying within rate limits.

    1. Click **Connect**. The **Integration Hub** uses your cuurent store crededentials to automatically connect you to your store. 
    1. **Elapsed Execution Time Cutoff** is the number of seconds to wait before the node import is stopped, if page processing has halted for any reason. This may need to be increased if the number of nodes being processed for the store is exceptionally large.
    1. **Default Page Size** is the default page size processed when importing.
    1. **Log Level** - From **Log Level** list, select the level of logging.
    
1. Click **Finish**. Your integration is enabled. You must enable a Price Import integration on each store where you want to import your price data.  

## Importing your Price Data

You can perform the price import using Postman. 

1. Go to a store.
1. Go to **COMPOSER** > **Integrations Hub**.
1. Under **Store Management & Configuration**, select **Commerce Price Import**. You must have configured a Price Import integration before you can import any resources into this store. See [Configuring the Price Import Integration](##configuring-the-price-import-integration).
1. From **Summary** > **Trigger Details**, click **Gzip File URL Handler** to display the webhook.
1. Select **Copy to Clipboard** to copy the URL.
1. Go to Postman.
1. Open `POST {{gzip-file-url-handler-webhook-url}}` where *{{gzip-file-url-handler-webhook-url}}* is the webhook you copied in step 5.
1. In **Body**, add the list of Gzip file URLs for the JSON files you want to import. See [Price Import Integration File Format](#price-import-integration-file-format).
11. Run `POST {{gzip-file-url-handler-webhook-url}}`.
12. When the import has finished, if you go to your store, you should see all the resources you just imported.

## Troubleshooting the Price Import Integration

You can debug any issues in **Executions**. Click an execution to see the execution details. The **Logs** shows the output and any errors or warnings.

Select **Retry** to initiate an execution again.

## Demos

<iframe width="560" height="315" src="https://www.youtube.com/embed/_2e1Va_WAZI" title="Integrations Hub - Configuring Price Importer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
