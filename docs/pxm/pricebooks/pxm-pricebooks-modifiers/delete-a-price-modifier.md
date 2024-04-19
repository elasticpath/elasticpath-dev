---
title: Delete a Price Book Modifier
nav_label: Delete a Price Book Modifier
sidebar_position: 50
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `Delete` a Price Book Modifier

```http
https://useast.api.elasticpath.com/pcm/pricebooks/:pricebookId/modifiers/:modifierId
```

Deletes the specified price book modifier.

## Parameters

### Path parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `pricebookId` | Required | `string` | The ID of the price book. |
| `modifierId` | Required | `string` | The ID of the modifier that you want to delete. |

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Example

```bash
curl -X DELETE https://useast.api.elasticpath.com//pcm/pricebooks/fe3f3f4c-bf36-44fc-9af6-e460276b2a45/modifiers/54323af0-2b82-4d8a-97dc-eae178b82b0a
     -H "Authorization: Bearer XXXX"
     -H "Content-Type: application/json" \
```

## Response Example

`204 No Content`

## Related Resources

- [Products](/docs/pxm/products/pxm-products)
- [Products API](/docs/pxm/products/ep-pxm-products-api/pxm-products-api-overview)
- [Create Variations](/docs/pxm/products/pxm-product-variations/pxm-product-variations-api/create-variation)
- [Create Modifiers](/docs/pxm/products/pxm-product-variations/pxm-variation-modifiers-api/create-a-modifier)
- [Build Child Products](/docs/pxm/products/pxm-product-variations/child-products-api/build-child-products)
- [Generate product variations](/docs/pxm/products/pxm-product-variations/generate-pxm-variations)
