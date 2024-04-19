---
title: Price Book Import API
nav_label: Import API
sidebar_position: 3
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `POST` Import a Price

```http
https://https://useast.api.elasticpath.com/pcm/pricebooks/import
```

The price book Import API enables you to create and update price books and prices in bulk, at both organization and store level. This is useful, if you have a promotion and want to update 50,000 product prices at a time. Rather than having to go to each price book and manually edit 50,000 prices, you can use the Price Book Import API to bulk update all your product prices at the same time, including setting different prices for different currencies.

Using the Price Book Import API, you can create and/or update:

- price books.
- prices.
  - sales pricing for products and product bundles with SKUs.
  - volume (tier) pricing.

The following are not supported by the Price Book Import API:

- price modifiers
- SKUless bundles
- Bundle sale prices

The API uses a [JSONL](https://jsonlines.org/) file. The JSONL file can be compressed to a GZIP file. Here is an [example of a JSONL file](/assets/example_file_all.jsonl). See [Price Book Import JSONL File](/docs/pxm/pricebooks/price-import/pricebook-import-jsonl).

The API works on a "best endeavours" approach. In other words, the API does its best to create/update the price book objects based on the file that you provide. If there are any errors, then the import is aborted, and the job fails with an error. You can then use the job results to understand what objects the API created/updated until the import failed, and to troubleshoot any errors. See [Import Results](/docs/pxm/pricebooks/price-import/pricebook-import-results).

Price book imports are processed sequentially in the order that you send your import API requests.

## Parameters

### Headers

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Name | Required | Type     | Description                                                                                                                                                                                                                                                                                                                                      |
| :--- |:---------|:---------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `file` | Required | `file`   | The file you want to import. The file format must be `jsonl`.                                                                                                                                                                                                                                                                                    |
| `file_compression` | Optional | `string` | By default, the value of this field is `none`. If you have compressed the JSONL file that you want to import, change the value of this field to `gzip`. If you try to import a compressed JSONL file without changing the value of this field to `gzip`, a `422` error is displayed. Gzip is the only supported file compression type. |

## Request Example

### Curl

```bash
curl -X POST https://https://useast.api.elasticpath.com/pcm/pricebooks/import \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -F file=@path/to/file \
```

## Response Example

```json
{
    "data": {
        "type": "pim-job",
        "id": "9091e826-2cba-4957-955a-474753f1396d",
        "attributes": {
            "created_at": "2024-01-05T13:46:41.695Z",
            "status": "success",
            "type": "pricebook-import",
            "updated_at": "2024-01-05T13:46:42.07Z"
        }
    }
}
```
