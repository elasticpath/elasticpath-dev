---
title: Get all Price Modifiers
nav_label: Get all Price Modifiers
sidebar_position: 10
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `GET` Get a List of All Price Modifiers

```http
https://useast.api.elasticpath.com/pcm/pricebooks/:pricebookId/modifiers
```

Retrieves a list of price modifiers for the specified price book.

## Parameters

### Path parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `pricebookId` | Required | `string` | The ID of the price book whose price modifiers you want to retrieve. |

### Headers

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Query parameters

| Name           | Required | Type      | Description                                     |
|:---------------|:---------|:----------|:------------------------------------------------|
| `filter`| Optional | `string` | Specifies the filter attributes. See [Filtering](#filtering). |
| `page[limit]`  | Optional | `integer` | The number of records per page. See [Pagination](/guides/Getting-Started/pagination).                |
| `page[offset]` | Optional | `integer` | The number of records to offset the results by. See [Pagination](/guides/Getting-Started/pagination). |

## Filtering

The following operators and attributes are available when filtering on this endpoint.

| Operator | Description | Supported Attributes | Example |
|:--- |:--- |:--- |:--- |
| `Eq` | Checks if the values of two operands are equal. If they are, the condition is true. | `name`| `filter=eq(name,largesupplement)` |
| `eq` | `external_ref`  | Equals. Checks if the values of two operands are equal. If they are, the condition is true. | `filter=eq(external_ref,some-external-ref)` |

For more information, see [Filtering](/guides/Getting-Started/filtering).

## Request Example

```bash
curl GET 'https://useast.api.elasticpath.com/pcm/pricebooks/fe3f3f4c-bf36-44fc-9af6-e460276b2a45/modifiers' \
 -H "Authorization: Bearer XXXX" \
 -H "Content-Type: application/json" \
```

## Response Example

`200 OK`

```json
{
  "data": [
    {
      "id": "54323af0-2b82-4d8a-97dc-eae178b82b0a",
      "attributes": {
        "currencies": {
          "USD": {
            "amount": 120000,
            "includes_tax": true,
            "tiers": {
              "min_5": {
                "amount": 100000,
                "minimum_quantity": 5
              }
            }
          }
        },
        "modifier_type": "price_equals",
        "name": "PriceEQM"
       },
        "meta": {
            "owner": "store"
            },
      "type": "price-modifier"
    },
    {
      "id": "d7dc74fe-3620-4d91-a863-cd1b7fe2b4e4",
      "attributes": {
        "currencies": {
          "USD": {
            "amount": 55,
            "includes_tax": false,
            "tiers": {
              "min_5": {
                "amount": 50,
                "minimum_quantity": 5
              }
            }
          }
        },
        "modifier_type": "price_increment",
        "name": "modifier-2"
       },
      "meta": {
          "owner": "store"
            },
      "type": "price-modifier"
    },
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
    "first": "/pcm/pricebooks/fe3f3f4c-bf36-44fc-9af6-e460276b2a45/modifiers?page[offset]=0&page[limit]=25&",
    "last": "/pcm/pricebooks/fe3f3f4c-bf36-44fc-9af6-e460276b2a45/modifiers?page[offset]=0&page[limit]=25&",
    "self": "/pcm/pricebooks/fe3f3f4c-bf36-44fc-9af6-e460276b2a45/modifiers"
  },
  "meta": {
    "owner": "store",
    "page": {
      "current": 1,
      "limit": 25,
      "total": 3
    },
    "results": {
      "total": 3
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
