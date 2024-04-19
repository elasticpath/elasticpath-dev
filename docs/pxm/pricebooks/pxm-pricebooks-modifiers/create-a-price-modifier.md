---
title: Create a Price Book Modifier
nav_label: Create a Price Book Modifier
sidebar_position: 30
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `POST` a Price Book Modifier

```http
https://useast.api.elasticpath.com/pcm/pricebooks/:pricebookId/modifiers/
```

You can use price modifiers to change the price property of child products. By default, child products inherit the same price as their base products. Using price modifiers, you can enable child products to inherit a different price. This enables you to configure the price of child products, for example, to be lower than its base product, without having to individually update the price of your child products. There are three types of price modifier.

Modifier | Data Type | Effect |
| :--- | :--- | :--- |
| `price_increment` | `string` | Increases the price of a product. |
| `price_decrement` | `string` | Decreases the price of a product. |
| `price_equals` | `string` | Sets the price of a product to the amount you specify. |

The following is an overview of the steps you need to follow to use price modifiers.

1. Create a price modifier. You must give the price modifier a unique name. Price modifier names are case sensitive.
1. Create a product modifier that uses the same name as the price modifier. For more information, see [Create Modifiers](/docs/pxm/products/pxm-product-variations/pxm-variation-modifiers-api/create-a-modifier).
1. Build your child products with the new product modifier. For more information, see [Build Child Products](/docs/pxm/products/pxm-product-variations/build-pxm-variations).

Once your child products are built, you can publish them in your catalog.

## Parameters

### Path parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `pricebookId` | Required | `string` | The ID of the pricebook. |

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Attribute | Required | Type | Description |
| --- | --- | --- | --- |
| `type` |Required| `string` | The type of resource object. You must use `modifier`. |
| `attributes.name` | Required| `string`| A name for the modifier.|
| `attributes.modifier_type` | Required |`string` | The type of modifier, such as, `price_increment`, `price_decrement`, or, `price_equals`. |
| `attributes.currencies`  | Required| [`object`](/docs/pxm/pricebooks/pxm-pricebooks/pxm-pricebooks-overview#the-currencies-object) | The value of the price modifier. |

## Request Example Using Price Equals

```bash
curl -X POST https://useast.api.elasticpath.com/pcm/pricebooks/2d65a2e6-70e7-489e-b8ab-52367703aa03/modifiers
     -H "Authorization: Bearer XXXX"
     -H "Content-Type: application/json" \
     { "data": {
         "type": "price-modifier",
         "attributes": {
           "name": "modifier-3",
           "modifier_type": "price_equals",
           "currencies": {
             "USD": {
                "amount": 55,
                "includes_tax": false,
                "tiers": {
                   "min_5": {
                     "minimum_quantity": 5,
                     "amount": 50
            },
          },
        },
      },
    },
  },
}
```

### Response Example 

`200 OK`

```json
{
    "data": {
        "id": "6e0d9b21-0a0a-440a-a5af-2e0b0d2d6e7c",
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
            "modifier_type": "price_equals",
            "name": "modifier-3"
        },
        "meta": {
            "owner": "store"
        },
        "type": "price-modifier"
    },
    "links": {
        "self": "/pcm/pricebooks/fe3f3f4c-bf36-44fc-9af6-e460276b2a45/modifiers/6e0d9b21-0a0a-440a-a5af-2e0b0d2d6e7c"
    }
}
```

## Request Example Using Price Increment

```bash
curl -X POST https://useast.api.elasticpath.com/pcm/pricebooks/fe3f3f4c-bf36-44fc-9af6-e460276b2a45/modifiers
     -H "Authorization: Bearer XXXX"
     -H "Content-Type: application/json" \
     {
         "data": {
           "type": "price-modifier",
           "attributes": {
               "name": "large_supplement",
                "modifier_type": "price_increment",
             "currencies": {
               "USD": {
                 "amount": 99,
                 "includes_tax": false
        }
      },
    },
  },
}
```

### Response Example

`200 OK`

```json
{
    "data": {
        "id": "553f71f9-410b-4c09-b41a-963e541cd48d",
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
        "self": "/pcm/pricebooks/fe3f3f4c-bf36-44fc-9af6-e460276b2a45/modifiers/553f71f9-410b-4c09-b41a-963e541cd48d"
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
