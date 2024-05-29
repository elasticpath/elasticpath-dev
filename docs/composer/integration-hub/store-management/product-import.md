---
title: Commerce Product Import
nav_label: Product Import
sidebar_position: 70
---

The Commerce Product Import is a utility in the **Integrations Hub** in Commerce Manager that enables you to import Commerce product data from one Commerce store to another. The Commerce Product Import utility can import:

- Product data files of any size. 
- Product variations. 
- Any media files available with products.
- Localized product names and descriptions.

:::caution

You cannot import bundles using the Product Import integration.

:::

For more information, watch a video.

<iframe width="560" height="315" src="https://www.youtube.com/embed/q4lYomkDxD8" title="Using the Product Import integration" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

An example of how product data is imported using a Product Import integration is described below.

1. Create a JSON file with the product data you want to import. You can have more than one JSON file, depending on your requirements. See [Product Import Integration File Format](#product-import-integration-file-format).
1. Configure a Product Import integration in the store where you want to import the product data. This creates the webhooks that consumes the message and JSON files when you send the API request to import the product data.
1. In Postman, run `POST {{gzip-file-url-handler-webhook-url}}` request. As part of the request, you must supply the Gzip file URLs for the JSON files you want to process as part of the import. See [Using Product Import Integration Files](#using-product-import-integration-files).

    - The Product Import integration processes your Gzip files.
    - The products are imported to the store.

## Product Import Integration File Format

The data that you provide to the Product Import Integration must conform to [JSON Lines](https://jsonlines.org/) text format and conform to the following product model.  The [Product Import JSON Schema](/assets/ih-product-import-schema.json) can be used to validate that your individual product objects are in the correct format.

| Name            | Type     | Description                                                                                                                                                                                                                                    |
|:----------------|:---------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `name`          | `array`  | An array of names represented as [locale](#the-locales-object) objects.                                                                                                                                                                        |
| `description`   | `array`  | An array of descriptions represented as [locale](#the-locales-object) objects.                                                                                                                                                                 |
| `sku`           | `string` | The unique stock keeping unit of the product.                                                                                                                                                                                                  |
| `slug`          | `string` | A label for the product that is used in the URL paths. A slug can contain any combination of letters, numbers, periods, hyphens, and underscores. NO spaces or other characters are allowed. By default, the product name is used as the slug. |
| `productType`   | `string` | Always: `product`.                                                                                                                                                                                                                             |
| `status`        | `string` | The status for the product, either `draft` or `live`.                                                                                                                                                                                          |
| `commodityType` | `string` | The commodity type, either `physical` or `digital`.                                                                                                                                                                                            |
| `media`         | `object` | The media available with this product, for example, images. See [media object](#the-media-object).                                                                                                                                             |
| `mpn`           | `string` | The manufacturer part number of the product.                                                                                                                                                                                                   |
| `attributes`    | `object` | The attributes defined for a product. See [attributes object](#the-attributes-object).                                                                                                                                                         |
| `variation`     | `object` | The variations defined for a product. See [variation object](#the-variation-object).                                                                                                                                                           |

### The `locales` Object

Locales must be specified for product names and descriptions. You can have as many localized names and descriptions as needed.

| Name     | Type     | Description                                                                                                                                         |
|:---------|:---------|:----------------------------------------------------------------------------------------------------------------------------------------------------|
| `locale` | `string` | A 2-character [ISO 639-1 locale code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) that specifies the language of the associated `value`. |
| `value`  | `string` | The localized value.                                                                                                                                |

### The `media` object

| Name   | Type     | Description                                                       |
|:-------|:---------|:------------------------------------------------------------------|
| `type` | `string` | The type of resource object. For example, `main_image` or `file`. |
| `url`  | `string` | The URL of the resource.                                          |

### The `attributes` object

| Name                 | Type     | Description                                                                                          |
|:---------------------|:---------|:-----------------------------------------------------------------------------------------------------|
| `templateSlug`       | `string` | Specifies a unique slug identifier for the attribute.                                                |
| `templateAttributes` | `object` | The attributes you want to import. See [templateAttributes object](#the-template-attributes-object). |

### The `templateAttributes` object

| Name        | Type     | Description                                                                                   |
|:------------|:---------|:----------------------------------------------------------------------------------------------|
| `fieldSlug` | `string` | The slug that contains the attribute you wish to create an entry for.                         |
| `type`      | `string` | Specifies the type of field. Values can be `date`, `string`, `boolean`, `float` or `integer`. |
| `value`     | `string` | The value of the field.                                                                       |

### The `variation` object

| Name          | Type     | Description                                                                                                                                                                                                                                      |
|:--------------|:---------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `variantSlug` | `string` | A label for the variation that is used in the URL paths. A slug can contain any combination of letters, numbers, periods, hyphens, and underscores. NO spaces or other characters are allowed. By default, the product name is used as the slug. |
| `optionName`  | `object` | The options available for this variation.                                                                                                                                                                                                        |

### Example Product Objects

#### Example 1 - Product with a Single Template

```json
{
  name: [
    {
      locale: "en",
      value: "en-name",
    },
  ],
  description: [
    {
      locale: "en",
      value: "en-description",
    },
  ],
  slug: "slug",
  sku: "sku",
  productType: "product",
  status: "draft",
  commodityType: "digital",
  mpn: "mpn",
  attributes: [
    {
      templateSlug: "products(ps)",
      templateAttributes: [
        {
          fieldSlug: "dateAttribute",
          type: "date",
          value: "2021-05-28T15:59:48.790Z",
        },
        {
          fieldSlug: "integerAttribute",
          type: "integer",
          value: 1,
        },
        {
          fieldSlug: "stringAttribute",
          type: "string",
          value: "dolore pariatur enim cillum",
        },
      ],
    },
  ],
}
```

#### Example 2 - Product with One Variant

```json
{
  name: [
    {
      locale: "en",
      value: "en-name",
    },
  ],
  slug: "slug",
  sku: "sku",
  productType: "product",
  status: "draft",
  commodityType: "digital",
  skuProducts: [
    {
      slug: "skuSlug",
      sku: "skuSku",
      productType: "sku",
      name: [
        {
          locale: "skuLocale",
          value: "skuName",
        },
      ],
      status: "live",
      commodityType: "digital",
      variation: [
        {
          variantSlug: "variantSlug1",
          optionName: "optionName",
        },
      ],
    },
  ],
}
```

## Using Product Import Integration Files

To invoke the product import, you must invoke the webhook created when you configure the Product Import integration and supply the Gzip file URLs as part of the payload. See [Importing your Product Data](#importing-your-product-data). We recommend that URLs are signed with an expiration date. See [Sharing objects using presigned URLs](https://docs.aws.amazon.com/AmazonS3/latest/userguide/ShareObjectPreSignedURL.html).

### Body

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `gzipFileUrls` | Required | `string` | The Gzip file URls for the JSON files you want to import in the format `https://{path}/products.jsonl.gz` where `path` is the path to your Gzip file. You can specify more than one. We recommend aligning the number of products per file with the `pageSize`, as processing each page requires rereading the file. |
| `fileIndex` | Optional | `integer` | The zero based index of the gzip file to start with. The default is zero. This is useful to restart processing in case of failure. |
| `page` | Optional | `integer` | The number of pages handled during import. |
| `PageSize` | Optional | `integer` | The number of products to process from a given file in a `paged` manner. The default is `500` and the upper limit depends on the number of custom attributes, files and variations. Tuning may be required to find the optimal page size. |

### Request Example

```json
{
    "gzipFileUrls": [
        "https://{path}/products.jsonl.gz"
    ],
    "fileIndex": 0,
    "page": 0,
    "pageSize": 1000
}
```

## Prerequisites

1. The store that you are importing your product data set into must meet the following prerequisites:

    - The templates and attributes defined in the product data that you are importing must exist in the store that you are importing the product data into. 
    - The variations defined in the product data that you are importing must exist in the store that you are importing the product data into. If the variations defined in the product data import have options, you do not need to create those options in your store. The Product Import automatically creates the options for you as part of the product import.

1. You must have a JSON file configured that defines the product data you want to import. See [Product Import Integration File Formats](#product-import-integration-file-formats).

## Configuring the Product Import Integration

Once you have met the [Prerequistes](#prequisites), you are ready to configure the product import integration in **Integrations Hub**.

1. In Commerce Manager, go to the store where you want to import product data.
1. Go to **COMPOSER** > **Integrations Hub**.
1. Under **Store Management & Configuration**, click **Commerce Product Import**. The **Commerce Product Import** integration guides you through the steps you need to follow to complete the integration.
1. Click **Configure**. The **Trigger details** are displayed. **Note**: These fields are blank the first time you configure the integration.

   - **Gzip File URL Handler** - The webhook that consumes your Gzip files. 
   - **Page Product Loader** - The webhook that processes each page of products until all pages are processed.

1. Click **Next**. The **Commerce Connection** page is displayed.
1. Complete the information in the **Commerce Connection** page. You can find this information in **SYSTEM** > **Application Keys** in Commerce Manager when logged in as a user with Seller Admin privileges. See [Application Keys](/docs/commerce-manager/application-keys/application-keys-cm).

    - **Client-ID**  - Your Commerce Client ID.
    - **Client-Secret** - Your Commerce Client Secret.

    The table below describes the options you can configure. 

    | Option                  | Description                                                                                                                                                     |
    |:------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | **Keep Alive Flag**     | Turn on the **Keep Alive Flag** toggle if you want to specify keep alive intervals for this integration.                                                        |
    | **Keep Alive Interval** | Specify keep alive interval for this integration. Default value is 10000.                                                                                       |
    | **Throttle Interval**   | Specify throttle interval for this integration. Default value is 125. This supports staying within rate limits.                                                 |
    | **Throttle Limit**      | Specify throttle request limit interval for this integration. Default value is 3. This supports staying within rate limits.                                     |
    | **Token URL**           | Your Commerce API Token URL. For example, `https://api.motlin.com/oauth/<access_token>` (EU) or `https://useast.api.elasticpath.com/oauth/<access_token>` (US). |

1. Click **Connect**. 
1. Once you have successfully connected to Commerce, you can configure the following:

    | Option                            | Description                                                                                                                                                                                                                     |
    |:----------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | **Elapsed Execution Time Cutoff** | The number of seconds to wait before the product import is stopped, if page processing has halted for any reason. This may need to be increased if the number of products being processed for the store is exceptionally large. |
    | **Default Page Size**             | The default page size processed when importing.                                                                                                                                                                                 |
    | **Merge Mode**                    | When set, the comparison is made between the existing product and the inbound definition, with only items that have been changed. Default: false                                                                                |
    | **Log Level**                     | From **Log Level** list, select the level of logging.                                                                                                                                                                           |

1. Click **Finish**. Your integration is enabled. You must enable a Product Import integration on each store where you want to import your product data set.  

### Merge Mode

Default processing assumes that the inbound product record provides a full representation of the product, allowing a more efficient product loading process. 
However, in scenarios, where there are multiple sources of product information, it might become necessary to use the **Merge Mode**. 
When this option is selected, the product loader will load the existing product, overlaying it with the inbound product before performing any updates. 

The default value is  _false_ (not enabled).

## Importing your Product Data

You can perform the product import using Postman. 

1. Go to a store.
1. Go to **COMPOSER** > **Integrations Hub**.
1. Under **Store Management & Configuration**, select **Commerce Product Import**. You must have configured a Product Import integration before you can import any resources into this store. See [Configuring the Product Import Integration](##configuring-the-product-import-integration).
1. From **Summary** > **Trigger Details**, click **Gzip File URL Handler** to display the webhook.
1. Select **Copy to Clipboard** to copy the URL.
1. Go to Postman.
1. Open `POST {{gzip-file-url-handler-webhook-url}}` where *gzip-file-url-handler-webhook-url* is the webhook you copied in step 5.
1. In **Body**, add the list of Gzip file URLs for the JSON files you want to import. See [Product Import Integration File Format](#product-import-integration-file-format).
11. Run `POST {{gzip-file-url-handler-webhook-url}}`.
12. When the import has finished, if you go to your store, you should see all the resources you just imported.

## Troubleshooting the Product Import Integration

You can debug any issues in **Executions**. Click an execution to see the execution details. The **Logs** shows the output and any errors or warnings.

Select **Retry** to initiate an execution again.
