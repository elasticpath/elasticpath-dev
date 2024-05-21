---
title: Bulk Add Custom Discount to Cart
nav_label: Bulk Add Custom Discount to Cart
sidebar_position: 8
---

## `POST` Bulk Add a Custom Discount to Cart

The default value for custom discounts on both the cart and cart items is set to 5 if this parameter is not configured in the store. To verify the custom discount limit value, call [Get all settings](/docs/commerce-cloud/global-project-settings/get-all-settings) endpoint.

To increase the custom discount value, contact [Elastic Path Support](https://support.elasticpath.com/hc/en-us) team.

```http
https://useast.api.elasticpath.com/v2/carts/:cartID/custom-discounts
```

## Parameters

### Path parameters

 Name                      | Required | Type     | Description                                                              |
|:--------------------------|:---------|:---------|:-------------------------------------------------------------------------|
| `cartID` | Required | `string` | Specifies the system generated ID for the cart that the shopper created. |

### Headers

| Name                      | Required | Type     | Description                |
|:--------------------------|:---------|:---------|:---------------------------|
| `Authorization`           | Required | `string` | The Bearer token required to get access to the API. This endpoint requires the [client_credentials](/guides/Getting%20Started/authentication/Tokens/client-credential-token) token for security reasons. This is different from other add to cart endpoints. |

### Body

| Name          | Required | Type     | Description                            |
|:--------------|:---------|:---------|:---------------------------------------|
| `type` | Required | `string` | Specifies the type of the resource. Always `custom_discount`. |
| `external_id` | Required | `string` | Specifies an external id for the custom disocunt. |
| `discount_engine` | Required | `string` | Specifies from where the custom discount is applied. For example, Talon.one. |
| `amount`         | Required | `integer` | Specifies an amount to be applied for the custom discount. It must be less than zero. |
| `description`   | Required | `string` | Specifies a description for the custom discount. |
| `discount_code` | Required | `string` | Specifies the discount code used for the custom discount. |
| `relationships.item.data.id` | Required |	`string` | Specifies the unique identifier of the `cart_item` or `custom_item` in the cart. |
| `relationships.item.data.type` | Required | `string` | Specifies the type of item. For example `custom_item` or `cart_item`. |
| `options.add_all_or_nothing` | Optional |	`boolean` | When `false`, custom discounts are added to the cart. When `true`  if error occurs in cart or cart items, custom discounts are not added. Default is `false`. |

## Request Example - Curl

```bash
curl -X POST https://useast.api.elasticpath.com/v2/carts/:cartID/custom-discounts \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
        "data": {
            "type": "custom_discount",
            "external_id": "cart discount 1",
            "discount_engine": "Custom Discount Engine",
            "amount": -1000,
            "description": "custom discount description",
            "discount_code": "10 off cart"
        },
        {
            "type": "custom_discount",
            "external_id": "cart discount 2",
            "discount_engine": "Custom Discount Engine",
            "amount": -1000,
            "description": "custom discount description",
            "discount_code": "10 off cart"
        },
        {
            "type": "custom_discount",
            "external_id": "item discount 1",
            "discount_engine": "Custom Discount Engine",
            "amount": -500,
            "description": "custom discount description",
            "discount_code": "5 off item",
            "relationships": {
                "item": {
                    "data": {
                        "id": "d0ccbdfc-5faa-4bec-bd55-25e4ccfe6b81",
                        "type": "cart_item"
                    }
                }
            }
        }
    ],
    "options": {
      "add_all_or_nothing": false
  }
}
```

## Response Example

`201 Created`

```json
{
    "data": [
        {
            "type": "custom_discount",
            "id": "db4d20b3-2e61-4ad2-87b9-5b8d834823d7",
            "external_id": "cart discount 1",
            "discount_engine": "Custom Discount Engine",
            "amount": {
                "amount": -1000,
                "currency": "USD",
                "formatted": "-$10.00"
            },
            "description": "custom discount description",
            "discount_code": "10 off cart"
        },
        {
            "type": "custom_discount",
            "id": "cf891216-9a05-44d2-b619-793f271d5401",
            "external_id": "cart discount 2",
            "discount_engine": "Custom Discount Engine",
            "amount": {
                "amount": -1000,
                "currency": "USD",
                "formatted": "-$10.00"
            },
            "description": "custom discount description",
            "discount_code": "10 off cart"
        },
        {
            "type": "custom_discount",
            "id": "bd5720e1-a8ea-4e29-9245-2f27abac5cf2",
            "external_id": "item discount 1",
            "discount_engine": "Custom Discount Engine",
            "amount": {
                "amount": -500,
                "currency": "USD",
                "formatted": "-$5.00"
            },
            "description": "custom discount description",
            "discount_code": "5 off item",
            "relationships": {
                "item": {
                    "data": {
                        "type": "cart_item",
                        "id": "d0ccbdfc-5faa-4bec-bd55-25e4ccfe6b81"
                    }
                }
            }
        }
    ]
}
```

## Errors

When attempting to add more custom discounts to cart and cart items than what is configured in the store, the following error response is returned:

```json
{
    "errors": [
        {
            "status": 422,
            "title": "Limit Reached",
            "detail": "Custom discount limit reached for this cart"
        }
    ]
}
```

The following error is returned when a cart item is not found:

```json
{
    "data": [
        {
            "amount": {
                "amount": -1000,
                "currency": "USD",
                "formatted": "-$10.00"
            },
            "type": "custom_discount",
            "id": "f09030b0-cdcd-4c47-b889-adbf690c537a",
            "external_id": "cart discount 1",
            "discount_engine": "Custom Discount Engine",
            "description": "custom discount description",
            "discount_code": "10 off cart"
        },
        {
            "amount": {
                "amount": -1000,
                "currency": "USD",
                "formatted": "-$10.00"
            },
            "type": "custom_discount",
            "id": "a5effcc8-4320-4d50-9380-8aa18e6ff768",
            "external_id": "cart discount 2",
            "discount_engine": "Custom Discount Engine",
            "description": "custom discount description",
            "discount_code": "10 off cart"
        }
    ],
    "errors": [
        {
            "status": 404,
            "title": "Custom discount not added to cart item.",
            "detail": "Cart Item is not present in the cart.",
            "meta": {
                "id": "3b4de20a-ccd0-44e6-894f-628e7afb3db0"
            }
        }
    ]
}
```

The following error response is returned when there is a mismatch between `cart_item` and `custom_item` while adding bulk custom discount to cart and cart item:

```json
{
					"Status": 404,
					"Title":  "Custom discount not added to cart item.",
					"Detail": "Mismatch between bulk custom discount type (custom_item) and cart item type (cart_item).",
					Meta: {
						"id": "id-of-mismatched-item"
					}
				}
```


