---
title: Product Export API
nav_label: Product Export API
sidebar_position: 20
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

The Export API is available to make bulk updates to products in Product Experience Manager. You might also export products for your personal requirements. See [Product Import/Bulk Update](/docs/pxm/products/importing-products/overview).

The Export API builds a `.csv` file containing the product entries. A `.csv` file can contain up to 50,000 product entries. If you have more than 50,000 product entries, then another `.csv` file is created and so on, until all your products are exported.

The Job endpoint response specifies the location where the `.csv` file is stored. See [Product Export CSV File](/docs/pxm/products/exporting-products/product-export-csv).

## `POST` Export Products

```http
https://useast.api.elasticpath.com/pcm/products/export
```

## Path Parameters

### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Query parameters

| Name               | Required | Optional  | Description                                                                                                                                                                                                                                         |
|--------------------|----------|-----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `filter`           | Optional | `string`  | Specifies the filter attributes. See [Filtering](#filtering).                                                                                                                                                                                       |
| `useTemplateSlugs` | Optional | `Boolean' | Set to `true` if you want to use a template slug instead of a template ID when exporting products that have custom data. See [Exporting Custom Data (Flows)](/docs/pxm/products/exporting-products/product-export-csv#exporting-custom-data-flows). |

## Filtering

The following attributes and operators are supported.

| Operator | Attribute                                              | Description                                                                                                                                                    | Example |
| :--- |:-------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------| :--- |
| `eq` | `sku`, `slug`, `upc_ean`, `mpn`, `name`, `description` | Equals. Checks if the values of two operands are equal. If they are, the condition is true. When filtering on tags, you can only specify one product tag.      | `filter=like(name,some-name)` |
| `In` | `sku`, `tags`                                                | Checks if the values are included in the specified string. If they are, the condition is true. When filtering on tags, you can specify a list of product tags. | `filter=in(id,some-id)` |

For more information, see [Filtering](/guides/Getting-Started/filtering).

## Request Example

```bash
curl -X POST https://useast.api.elasticpath.com/pcm/products/export /
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer XXXX" \
```

## Response Example

`200 OK`

```json
{
    "data": [
        {
            "type": "pim-job",
            "id": "0c6a8aad-65fc-441b-82c4-a06942fc4fa2",
            "attributes": {
                "created_at": "2024-01-05T13:46:42.142Z",
                "status": "success",
                "type": "product-export",
                "updated_at": "2024-01-05T13:46:42.07Z"
            },
            "meta": {
                "file_locations": [
                    "https://d2u1gsnhb4knzj.cloudfront.net/3735bc27-93c7-4255-b6e1-5cb78153b843/0c6a8aad-65fc-441b-82c4-a06942fc4fa2/1ce6fa90-1fec-11ee-8e94-a2ed7588329a/20230711_130905_part_1.csv?Expires=1689084545&Signature=Hx99n7rhlfpXfAb6ATJIe-5JtIAbdIFFViUKac4RvQ~w4aLS5ezgeA7QGyRphR4GafQfhxrkjB8c-Er-GKKuw-p~9gBXr1Z7ZGNy4v8KemQcLn4p9m6Hzl2mTIW9Od9ElQ9dfQ5NhNv61hlKlqy8dhljP9BPWPMSNwkOXrjEwncdjG9Is~sKh3U27QdsOVsyUeVpfuXDmENYr1elUVwcNsracH6MhUcbkBFeBbQTADf9DO7SGHc~Xbl4V-iKCN5LQv01hEnSrAJaFRoHjTfy~YzQs~HW~bid4rjeGh3UctnSxaKU1mIlwdTu48uk9OGV9fcMfXPaTYeqdangQ8J5Ow__&Key-Pair-Id=K2JP6WV20E1FP6"
                ],
            }
        }
```
