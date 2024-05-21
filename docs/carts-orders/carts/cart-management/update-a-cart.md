---
title: Update a Cart
nav_label: Update a Cart
sidebar_position: 4
---

## `PUT` Update a Cart

```http
https://useast.api.elasticpath.com/v2/carts/:cartID
```

Updates cart properties for the specified `cartID`.

Using this endpoint, you can:

- Specify custom discounts for the cart. To enable custom discounts, set the `discount_settings.custom_discounts_enabled` field to `true`. By default, this setting is determined by the [cart settings](/docs/commerce-cloud/carts/cart-management/cart-settings/update-cart-settings) configured for the store. 
- Set the `discount_settings_use_rule_promotions` field to `true` to update a specific cart to use rule promotions.

:::caution
- You cannot use both custom discounts and rule promotions at the same time.
- You must remove all existing discounts in the cart before updating it to use rule promotions.
:::

## Parameters

### Path parameters

| Name        | Required | Type     | Description                              |
|:------------|:---------|:---------|:-----------------------------------------|
| `cartID` | Required | `string` | The unique identifier of a cart created by you. |

### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Name   | Required | Type     | Description |
|:--------------|:---------|:---------|:--------- |
| `name`        | Optional | `string` | The cart name supplied by the shopper. A cart name must contain between 1 and 255 characters. You cannot use whitespace characters, but special characters are permitted. For more information, see [Safe Characters](/guides/Getting%20Started/api-overview/safe-characters). |
| `description` | Optional | `string` | The cart description. |
| `discount_settings.custom_discounts_enabled` | Optional | `boolean` | This parameter enables custom discounts for a cart. When set to `true`, Elastic Path promotions will not be applied to the new carts. Default is set from cart discount settings for the store. See [Cart Settings](/docs/commerce-cloud/carts/cart-management/cart-settings/update-cart-settings). |
| `discount_settings_use_rule_promotions` | Optional | `boolean` | When set to `true`, this parameter allows the cart to use rule promotions. | 
| `snapshot_date` | Optional | `string` | This optional parameter sets a reference date for the cart. If this parameter is set, it allows the cart to act as one that might occur on that specified date. For example, such future carts might acquire future-enabled discounts, allowing users to test and validate future interactions with carts. The `snapshot_date` must be in the format `2026-02-21T15:07:25Z`. By default, this parameter is left empty. |

## Request Example

### Curl

```bash
curl -X PUT https://useast.api.elasticpath.com/v2/carts/:cartID \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \'
     -d $ {
      "data": {
        "name": "my cart",
        "description": "my first cart"
        "discount_settings": {
            "custom_discounts_enabled": false,
            "use_rule_promotions": true
        },
        "snapshot_date": "2026-09-10T00:12:00Z",
  },
}
```

### JavaScript SDK

```javascript
const reference = "XXXX";
const customerToken = "XXXX";
const cartData = {
    name: "Bob’s cart",
    description: "For Holidays",
};

// Where `EPCC` is an authenticated client
await EPCC.Cart(reference).UpdateCart(cartData, customerToken);
```

## Response Example

`200 OK`

```json
{
    "data": {
        "id": "df820a6e-ca10-457e-a7ac-f68d13b318dd",
        "name": "my cart",
        "description": "my first cart",
        "snapshot_date": "2026-09-10T00:12:00Z",
        "type": "cart",
        "discount_settings": {
            "custom_discounts_enabled": false,
            "use_rule_promotions": true
        },
        "links": {
            "self": "https://useast.api.elasticpath.com/carts/v2/carts/df820a6e-ca10-457e-a7ac-f68d13b318dd"
        },
        "meta": {
            "display_price": {
                "with_tax": {
                    "amount": 12221,
                    "currency": "USD",
                    "formatted": "$122.21"
                },
                "without_tax": {
                    "amount": 12221,
                    "currency": "USD",
                    "formatted": "$122.21"
                },
                "tax": {
                    "amount": 0,
                    "currency": "USD",
                    "formatted": "$0.00"
                }
            },
            "timestamps": {
                "created_at": "2020-10-15T16:17:53Z",
                "updated_at": "2020-10-15T16:20:55Z"
            }
        },
        "relationships": {
            "items": {
                "data": [
                    {
                        "type": "cart_item",
                        "id": "615c4c0e-8184-4991-a5a9-eda5499fb558"
                    }
                ]
            },
            "customers": {
                "data": [
                    {
                        "type": "customer",
                        "id": "9efd11e1-7f66-4581-a9a9-ed63d8ba2474"
                    }
                ]
            }
        }
    }
}
```

## Request Example - To Remove Payment Intent from a Cart

To remove the Stripe payment intent from a cart, pass the empty value in the `payment_intent_id` field.

You must use an empty value for this field. You cannot use this endpoint to directly update the cart to use an existing Payment Intent.

```bash
curl -X PUT https://useast.api.elasticpath.com/v2/carts/:cartID \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
        "data": {
          "payment_intent_id":""
            }
        }
```

## Response Example 

`200 OK`

The `payment_intent_id` is removed from the cart.

```json
{
    "data": {
        "id": "1",
        "type": "cart",
        "name": "Cart",
        "description": "",
        "discount_settings": {
            "custom_discounts_enabled": false
        },
        "links": {
            "self": "https://useast.api.elasticpath.com/v2/carts/1"
        },
        "meta": {
            "display_price": {
                "with_tax": {
                    "amount": 10000,
                    "currency": "USD",
                    "formatted": "$100.00"
                },
                "without_tax": {
                    "amount": 10000,
                    "currency": "USD",
                    "formatted": "$100.00"
                },
                "tax": {
                    "amount": 0,
                    "currency": "USD",
                    "formatted": "$0.00"
                },
                "discount": {
                    "amount": 0,
                    "currency": "USD",
                    "formatted": "$0.00"
                },
                "without_discount": {
                    "amount": 10000,
                    "currency": "USD",
                    "formatted": "$100.00"
                },
                "shipping": {
                    "amount": 0,
                    "currency": "USD",
                    "formatted": "$0.00"
                }
            },
            "timestamps": {
                "created_at": "2024-01-10T19:23:39Z",
                "updated_at": "2024-01-10T19:24:27Z",
                "expires_at": "2024-01-17T19:24:27Z"
            }
        },
        "relationships": {
            "items": {
                "data": [
                    {
                        "type": "cart_item",
                        "id": "2531789b-9698-4e05-b56e-13a7bfadba7e"
                    }
                ]
            },
            "customers": {},
            "accounts": {}
        }
    }
}
```

## Request Example - To Update Cart with Custom Attributes

```bash
curl -X PUT https://useast.api.elasticpath.com/v2/carts/:cartID \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
      "data": {
        "name": "cart with custom attribute",
        "description": "cart description"
        "custom_attributes": {
            "affiliate_link": {
                "type": "string",
                "value": "https://site.com?tag=influencer04-20"
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
        "id": "1",
        "type": "cart",
        "name": "cart with custom attribute",
        "description": "cart description",
        "discount_settings": {
            "custom_discounts_enabled": false
        },
        "custom_attributes": {
            "affiliate_link": {
                "type": "string",
                "value": "https://site.com?tag=influencer04-20"
            }
        },
        "links": {
            "self": "https://useast.api.elasticpath.com/v2/carts/1"
        },
        "meta": {
            "display_price": {
                "with_tax": {
                    "amount": 0,
                    "currency": "",
                    "formatted": "0"
                },
                "without_tax": {
                    "amount": 0,
                    "currency": "",
                    "formatted": "0"
                },
                "tax": {
                    "amount": 0,
                    "currency": "",
                    "formatted": "0"
                },
                "discount": {
                    "amount": 0,
                    "currency": "",
                    "formatted": "0"
                },
                "without_discount": {
                    "amount": 0,
                    "currency": "",
                    "formatted": "0"
                },
                "shipping": {
                    "amount": 0,
                    "currency": "",
                    "formatted": "0"
                }
            },
            "timestamps": {
                "created_at": "2024-01-18T19:09:05Z",
                "updated_at": "2024-01-18T19:09:05Z",
                "expires_at": "2024-01-25T19:09:05Z"
            }
        },
        "relationships": {
            "items": {
                "data": null
            }
        }
    }
}
```

## Errors

The following error is recieved if you enable a cart to use both custom discounts and rule promotions:

```json
{
    "status": 422,
    "title": "Cannot use both discounts together",
    "detail": "Only one discount setting can be set to true at a time."
}
```

The following error is received if the cart already has an existing promotion and you update it to use rule promotions:

```json
{
    "status": 422,
    "title": "Cart contains existing discounts",
    "detail": "Remove all existing discounts in cart before updating cart to use rule promotions."
}
```
