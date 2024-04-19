---
title: Get Bundle Component Products Relationships
sidebar_label: Get Bundle Component Products Relationships
sidebar_position: 20
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `GET` Bundle Component Products Relationships

```http
https://useast.api.elasticpath.com/pcm/products/:productId/relationships/component_products
```

Returns a list of component products in a product bundle. If a bundle has no component products (in other words, is not a product bundle), an empty array is returned.

## Parameters

### Path parameters

| Name        | Required | Type     | Description                                  |
|:------------|:---------|:---------|:---------------------------------------------|
| `productId` | Required | `string` | The unique identifier of the bundle. |

### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token to grant access to the API. |

## Request Example

```bash
curl GET 'https://useast.api.elasticpath.com/pcm/products/00efcc23-9bab-4bc7-9272-6b95111814e8/relationships/component_products' \
--header 'Authorization: Bearer XXXX'
```

## Response Example

`201 OK`

```json
{
    "data": [
        {
            "type": "product",
            "id": "1aea6f97-f0d9-452c-b3c1-7fb5629ead82"
        },
        {
            "type": "product",
            "id": "0192ccdd-6d33-4898-87d7-c4d87f2bf8ea"
        },
        {
            "type": "product",
            "id": "de691397-2320-48fb-af7b-8b17d27a34a4"
        },
        {
            "type": "product",
            "id": "d7b79eb8-19d8-45ea-86ed-2324a604dd9c"
        },
        {
            "type": "product",
            "id": "baaebdd6-490e-4834-a4a5-307602f70ea0"
        }
    ]
}
```

## Related Resources

- [Bundles - Product Experience Manager](/docs/pxm/products/pxm-bundles/pxm-bundles)
- [Products API](/docs/pxm/products/ep-pxm-products-api/pxm-products-api-overview)
- [Bundles API](/docs/pxm/products/pxm-bundles/pxm-bundles-api/create-a-bundle)
