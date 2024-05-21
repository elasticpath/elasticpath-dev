---
title: Bulk Add Tax Items to Cart
nav_label: Bulk Add Tax Items to Cart
sidebar_position: 4.5
---

:::caution
A cart item can only have a maximum of five tax items.
:::

## `POST` Bulk Add Tax Items to Cart

```http
https://useast.api.elasticpath.com/v2/carts/:cartID/taxes
```

## Parameters

### Path parameters

| Name            | Required | Type     | Description                                         |
| --------------- | -------- | -------- | --------------------------------------------------- |
| `cartID`        | Required | `string` | The unique identifier of the cart item.                  |


### Headers

| Name            | Required | Type     | Description                                         |
| --------------- | -------- | -------- | --------------------------------------------------- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Name           | Required | Type     | Description                                             |
| -------------- | -------- | -------- | ------------------------------------------------------- |
| `type`         | Required | `string` | This represents the type of object being returned.      |
| `name`         | Optional | `string` | The name of the tax item.                               |
| `jurisdiction` | Optional | `string` | The relevant tax jurisdiction.                          |
| `code`         | Optional | `string` | A unique tax code in this jurisdiction.                 |
| `rate`         | Required | `float`  | The tax rate represented as a decimal (12.5% -> 0.125). |
| `relationships.item.data.type` | Required | `string`| This specifies the type of item. For example `custom_item` or `cart_item`. |
| `relationships.item.data.id` | Required | `string` | This specifies the ID of the `cart_item` or `custom_item` in the cart. | 
| `options.add_all_or_nothing`| Optional | ` boolean ` | When `false`, valid tax items are added in the cart and the items with errors are reported in the response. When `true`, if an error occurs for any one of the items, no tax items are added in the cart. Default is `false`. |

## Request Example - Curl

```bash
curl -X POST https://useast.api.elasticpath.com/v2/carts/:cartID/taxes \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer XXXX" \
    -d $ {
        "data": [
        {
            "type": "tax_item",
            "name": "GST",
            "jurisdiction": "BC",
            "code": "GST",
            "rate": 0.05,
            "relationships": {
                "item": {
                    "data": {
                        "type": "cart_item",
                        "id": "647e0563-3998-46b2-838d-bdcaad3b8ef5"
                    }
                }
            }
        },
        {
           "type": "tax_item",
            "name": "PST",
            "jurisdiction": "BC",
            "code": "PST",
            "rate": 0.07,
            "relationships": {
                "item": {
                    "data": {
                        "type": "cart_item",
                        "id": "647e0563-3998-46b2-838d-bdcaad3b8ef5"
                    }
                }
            }
        }
    ],
    "options":{
      "add_all_or_nothing":false
   }
}
```

## Response Example

`201 Created`

```json
{
    "data": [
        {
            "type": "tax_item",
            "id": "81b6af81-327e-40db-a3d1-687177d1070b",
            "jurisdiction": "BC",
            "code": "GST",
            "name": "GST",
            "rate": 0.05,
            "relationships": {
                "item": {
                    "data": {
                        "type": "cart_item",
                        "id": "647e0563-3998-46b2-838d-bdcaad3b8ef5"
                    }
                }
            }
        },
        {
            "type": "tax_item",
            "id": "55396f76-a9b6-49fa-ba95-265cd5c148aa",
            "jurisdiction": "BC",
            "code": "PST",
            "name": "PST",
            "rate": 0.07,
            "relationships": {
                "item": {
                    "data": {
                        "type": "cart_item",
                        "id": "647e0563-3998-46b2-838d-bdcaad3b8ef5"
                    }
                }
            }
        }
    ]
}
```
## Errors

`422 Unprocessable Entity`

In this example, when `options.add_all_or_nothing` is set to `true` and if one of cart items is not found or or has reached its maximum tax item limit, the following error response is returned:

```json
{
            "status": 422,
            "title": "Add all or nothing.",
            "detail": "Add all or nothing set to (true). Could not bulk add tax items to cart."
        }

```

In this example, if you add more than five tax items to the same cart item, the following error response is returned:

```json
{
            "status": 422,
            "title": "Tax item not added to cart item.",
            "detail": "Cannot exceed tax item limit of (5) on cart item.",
            "meta": {
                "id": "f88e6370-cb35-40b2-a998-c759f31dec0a"
            }
        }
```

`404` 

In this example, if there is a mismatch between `cart_item`/`custom_item` and the `relationships.item.data.type` specified in the bulk add tax item, the following error response is returned:

```json
{
    "data": [],
    "errors": [
        {
            "status": 404,
            "title": "Tax item not added to cart item.",
            "detail": "Mismatch between bulk tax item type(cart_item) and cart item type(custom_item).",
            "meta": {
                "id": "56aab5d1-1dd4-45ed-88ed-4d0cc396b62d"
            }
        },
        {
            "status": 404,
            "title": "Tax item not added to cart item.",
            "detail": "Mismatch between bulk tax item type(cart_item) and cart item type(custom_item).",
            "meta": {
                "id": "56aab5d1-1dd4-45ed-88ed-4d0cc396b62d"
            }
        }
    ]
}
```
