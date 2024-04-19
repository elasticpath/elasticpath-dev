---
id: get-a-price-modifier-by-name
title: Get a Price Book Modifier By Name
sidebar_label: Get a Price Book Modifier By Name
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `GET` a Price Book Modifier By Name

```http
https://useast.api.elasticpath.com/pcm/pricebooks/:pricebookId/modifiers?filter=eq(name,modifiername)
```

Retrieves a price book modifier by name, using a filter expression.

:::caution
You can only have a maximum of 10 filters in a single request.
:::

## Parameters

### Path parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `pricebookId` | Required | `string` | The ID of the pricebook. |

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Filter expression

| Operation | Operator | Value | Description |
| --- | --- | --- | --- |
| Equality | `eq` | `(name, modifiername)` | The `modifiername` is the name of the modifier that you want to retrieve. For example, `?filter=eq(name, large_supplement)`  |

See [Filtering](/docs/commerce-cloud/api-overview/filtering) for more information about filtering in Commerce.

## Request Example

```bash
curl GET https://useast.api.elasticpath.com/pcm/pricebooks/fe3f3f4c-bf36-44fc-9af6-e460276b2a45/modifiers?filter=eq(name,large_supplement)
     -H "Authorization: Bearer XXXX"
     -H "Content-Type: application/json" \
```

## Response Example

`200 OK`

```json
{
    "data": [
        {
            "id": "dde5425f-1b7b-457e-ba3c-accb0c089f3b",
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
        }
    ],
    "links": {
        "first": "/pcm/pricebooks/fe3f3f4c-bf36-44fc-9af6-e460276b2a45/modifiers?filter=eq(name,large_supplement)&page[offset]=0&page[limit]=25&",
        "last": "/pcm/pricebooks/fe3f3f4c-bf36-44fc-9af6-e460276b2a45/modifiers?filter=eq(name,large_supplement)&page[offset]=0&page[limit]=25&",
        "self": "/pcm/pricebooks/fe3f3f4c-bf36-44fc-9af6-e460276b2a45/modifiers?filter=eq(name,large_supplement)&"
    },
    "meta": {
        "page": {
            "current": 1,
            "limit": 25,
            "total": 1
        },
        "results": {
            "total": 1
        }
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
