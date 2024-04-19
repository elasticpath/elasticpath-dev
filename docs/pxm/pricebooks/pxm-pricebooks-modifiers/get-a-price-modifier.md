---
title: Get a Price Book Modifier
nav_label: Get a Price Book Modifier
sidebar_position: 20
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `GET` a Price Book Modifier

```http
https://useast.api.elasticpath.com/pcm/pricebooks/:pricebookId/modifiers/:modifierId
```

Retrieves the specified price book modifier from the specified price book.

## Parameters

### Path parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `pricebookId` | Required | `string` | The ID of the pricebook. |
| `modifierId` | Required | `string` | The ID of the modifier that you want to retrieve. |

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Example

```bash
curl GET https://useast.api.elasticpath.com/pcm/pricebooks/fe3f3f4c-bf36-44fc-9af6-e460276b2a45/modifiers/54323af0-2b82-4d8a-97dc-eae178b82b0a \
     -H "Authorization: Bearer XXXX"
     -H "Content-Type: application/json" \
```

## Response Example

`200 OK`

```json
{
  "data": {
    "id": "435ec8c4-32a3-41bf-82e6-843f2bda1f7a",
    "attributes": {
      "currencies": {
        "USD": {
          "amount": 99,
          "includes_tax": false
        }
      },
      "modifier_type": "price_increment",
      "name": "large_supplement"
    },
     "meta": {
        "owner": "store"
    },
    "type": "price-modifier"
  },
  "links": {
    "self": "/pcm/pricebooks/2d65a2e6-70e7-489e-b8ab-52367703aa03/modifiers/435ec8c4-32a3-41bf-82e6-843f2bda1f7a"
  }
}
```

## Related Resources

- [Products](/docs/pxm/products/pxm-products)
- [Products API](/docs/pxm/products/ep-pxm-products-api/pxm-products-api-overview)
- [Create Variations](/docs/pxm/products/pxm-product-variations/pxm-product-variations-api/create-variation)
- [Create Modifiers](/docs/pxm/products/pxm-product-variations/pxm-variation-modifiers-api/create-a-modifier)
- [Build Child Products](/docs/pxm/products/pxm-product-variations/child-products-api/build-child-products)
- [Generate product variations](/docs/pxm/products/pxm-product-variations/generate-pxm-variations)
