---
title: Update a Price Book Modifier
nav_label: Update a Price Book Modifier
sidebar_position: 40
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `PUT` Update a Price Book by ID

```http
https://useast.api.elasticpath.com/pcm/pricebooks/:pricebookId/modifiers/:modifierId
```

Updates the specified price book modifier.

## Parameters

### Path parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `pricebookId` | Required | `string` | The ID of the pricebook. |
| `modifierId` | Required | `string` | The ID of the modifier you want to update. |

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Attribute | Required | Type | Description |
| --- | --- | --- | --- |
| `type` |Required| `string` | The type of resource object. You must use `price_modifier`. |
| `attributes.name` | Required| `string`| The name of the price modifier that you want to update.|
| `attributes.currencies`  | Required| [`object`](/docs/pxm/pricebooks/pxm-pricebooks/pxm-pricebooks-overview#the-currencies-object) | The value of the price modifier. |


## Request Example

```bash
curl -X PUT https://useast.api.elasticpath.com//pcm/pricebooks/fe3f3f4c-bf36-44fc-9af6-e460276b2a45/modifiers/dde5425f-1b7b-457e-ba3c-accb0c089f3b
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
{
  "data": {
    "type": "price-modifier",
    "id": "dde5425f-1b7b-457e-ba3c-accb0c089f3b",
    "attributes": {
      "currencies": {
        "USD": {
          "amount": 100,
          "includes_tax": false,
          "tiers": {
            "min_5": {
              "minimum_quantity": 5,
              "amount": 80
            }
          }
        }
      }
    }
  }
}
```

## Response Example

`200 OK`

```json
{
  "data": {
    "id": "dde5425f-1b7b-457e-ba3c-accb0c089f3b",
    "attributes": {
      "currencies": {
        "USD": {
          "amount": 100,
          "includes_tax": false,
          "tiers": {
            "min_5": {
              "amount": 80,
              "minimum_quantity": 5
            }
          }
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
    "self": "/pcm/pricebooks/fe3f3f4c-bf36-44fc-9af6-e460276b2a45/modifiers/dde5425f-1b7b-457e-ba3c-accb0c089f3b"
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
