---
title: Checkout API
nav_label: Checkout API
sidebar_position: 140
---

After a [cart](/docs/api/carts/cart-management) is ready to checkout, you can easily convert your cart to an [order](/docs/api/carts/cart-management). The cart remains and can be modified and checked out again if required.

After successfully completing the checkout process, the response contains the order. If the cart is linked to a shipping group, the shipping group is also associated with the order after checkout.

:::note

- The cart currency is set when the first item is added to the cart.
- The product being added to the cart requires a price in the same currency as the other items in the cart. The API returns a `400` error if a price is not defined in the correct currency.
- To ensure that a free gift is automatically applied to an order, set the promotion to automatic. The checkout process will not be successful if free gift items are out of stock. See [Errors](#errors) section.

:::

:::caution

By default, carts are automatically deleted 7 days after the last update. You can change this setting by updating [cart settings](/docs/api/settings/put-v-2-settings-cart).

:::

:::caution
There are a number of actions that happen to your [inventory](/docs/api/pxm/inventory/inventories-introduction) when checking out and paying for an order. For more information please be sure to evaluate our [detailed article](/docs/api/pxm/inventory/inventories-introduction) explaining the processes.
:::

## `POST` With Customer ID

```http
https://useast.api.elasticpath.com/v2/carts/:reference/checkout
```

You can checkout a Cart with an existing customer ID.

### Parameters

#### Headers

| Name                      | Required | Type     | Description                                                                                  |
|:--------------------------|:---------|:---------|:---------------------------------------------------------------------------------------------|
| `X-Moltin-Customer-Token` | Optional | `string` | A customer token to access specific customer's carts.                                        |
| `EP-Account-Management-Authentication-Token` | Optional | `string` | An account management authentication token that identifies the authenticated account member. |

#### Body

| Name                            | Required | Type     | Description          |
|:--------------------------------|:---------|:---------|:---------------------|
| `customer.id`                   | Required | `string` | The ID of the customer. |
| `billing_address.first_name`    | Required | `string` | First name of the billing recipient. |
| `billing_address.last_name`     | Required | `string` | Last name of the billing recipient. |
| `billing_address.company_name`  | Optional | `string` | Company name of the billing recipient. |
| `billing_address.line_1`        | Required | `string` | First line of the billing address. |
| `billing_address.line_2`        | Optional | `string` | Second line of the billing address. |
| `billing_address.city`          | Optional | `string` | Specifies the city of the billing address. |
| `billing_address.county`        | Optional | `string` | Specifies the county of the billing address. |
| `billing_address.region`        | Required | `string` | Specifies state, province, or region of the billing address. |
| `billing_address.postcode`      | Required | `string` | Postcode of the billing address. |
| `billing_address.country`       | Required | `string` | Specifies the country of the billing address. |
| `shipping_address.first_name`   | Required | `string` | First name of the shipping recipient. |
| `shipping_address.last_name`    | Required | `string` | Last name of the shipping recipient. |
| `shipping_address.phone_number` | Optional | `string` | Phone number of the shipping recipient. |
| `shipping_address.company_name` | Optional | `string` | Company of the shipping recipient. |
| `shipping_address.line_1`       | Required | `string` | First line of the shipping address. |
| `shipping_address.line_2`       | Optional | `string` | Second line of the shipping address. |
| `shipping_address.city`         | Optional | `string` | City of the shipping address. |
| `shipping_address.county`       | Required | `string` | Specifies the county of the shipping address. |
| `shipping_address.region`       | Required | `string` | Specifies the state, province, or region of the shipping address. |
| `shipping_address.postcode`     | Required | `string` | Post code of the shipping address. |
| `shipping_address.country`      | Required | `string` | Specifies the country of the shipping address. |
| `shipping_address.instructions` | Optional | `string` | Shipping instructions. |

### Request Examples

#### Curl

```bash
curl -X POST https://useast.api.elasticpath.com/v2/carts/:reference/checkout \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
       "data": {
         "customer": {
           "id": "c8c1c511-beef-4812-9b7a-9f92c587217c"
         },
         "billing_address": {
           "first_name": "John",
           "last_name": "Doe",
           "company_name": "Moltin",
           "line_1": "1234 Disney Drive",
           "line_2": "Disney Resort",
           "city": "Anaheim",
           "county": "Orange",
           "region": "CA",
           "postcode": "92802",
           "country": "US"
         },
         "shipping_address": {
           "first_name": "John",
           "last_name": "Doe",
           "phone_number": "(555) 555-1234",
           "company_name": "Moltin",
           "line_1": "1234 Disney Drive",
           "line_2": "Disney Resort",
           "city": "Anaheim",
           "county": "Orange",
           "region": "CA",
           "postcode": "92802",
           "country": "US",
           "instructions": "Leave in porch"
         }
       }
    }
```

#### JavaScript SDK

```javascript
const MoltinGateway = require("@moltin/sdk").gateway;
const Moltin = MoltinGateway({
    client_id: "X",
});
const reference = "XXXX";
const customerId = "XXXX";
const billing = {
    first_name: "John",
    last_name: "Doe",
    line_1: "1234 Disney Drive",
    line_2: "Disney Resort",
    city: "Anaheim",
    county: "Orange",
    region: "CA",
    postcode: "92802",
    country: "US",
};
Moltin.Cart(reference)
    .Checkout(customerId, billing, shipping)
    .then((order) => {
        // Do something
    });
```

`shipping` is optional. `billing` is `shipping` if not provided.

## Response Example

`201 Created`

```json
{
    "data": {
        "type": "order",
        "id": "c79a24c1-d639-4ac7-9eb5-3565efd9c84b",
        "status": "incomplete",
        "payment": "unpaid",
        "shipping": "unfulfilled",
        "customer": {
            "name": "Ron Swanson",
            "email": "ronswanson@example.com"
        },
        "shipping_address": {
            "first_name": "Ron",
            "last_name": "Swanson",
            "phone_number": "",
            "company_name": "Moltin",
            "line_1": "1234 Disney Drive",
            "line_2": "Disney Resort",
            "city": "Anaheim",
            "county": "Orange",
            "region": "CA",
            "postcode": "92802",
            "country": "US",
            "instructions": ""
        },
        "billing_address": {
            "first_name": "Ron",
            "last_name": "Swanson",
            "company_name": "Moltin",
            "line_1": "1234 Disney Drive",
            "line_2": "Disney Resort",
            "city": "Anaheim",
            "county": "Orange",
            "region": "CA",
            "postcode": "92802",
            "country": "US"
        },
        "links": {},
        "meta": {
            "display_price": {
                "with_tax": {
                    "amount": 47500,
                    "currency": "USD",
                    "formatted": "$475.00"
                },
                "without_tax": {
                    "amount": 47500,
                    "currency": "USD",
                    "formatted": "$475.00"
                }
            },
            "timestamps": {
                "created_at": "2021-06-03T22:47:33Z",
                "updated_at": "2021-06-03T22:47:33Z"
            }
        },
        "relationships": {
            "items": {
                "data": [
                    {
                        "type": "item",
                        "id": "5ff8e482-da0b-4c43-b9ae-a13d384f10bd"
                    },
                    {
                        "type": "item",
                        "id": "f8aefa8a-b57a-421e-9b4c-ae8f17e12371"
                    }
                ]
            }
        }
    },
    "included": {
        "items": [
            {
                "type": "order_item",
                "id": "5ff8e482-da0b-4c43-b9ae-a13d384f10bd",
                "quantity": 1,
                "product_id": "047e3569-6889-4feb-9a22-1de5722a1a54",
                "name": "Deck Shoe",
                "sku": "deck-shoe-001",
                "unit_price": {
                    "amount": 47500,
                    "currency": "USD",
                    "includes_tax": true
                },
                "value": {
                    "amount": 47500,
                    "currency": "USD",
                    "includes_tax": true
                },
                "links": {},
                "meta": {
                    "display_price": {
                        "with_tax": {
                            "unit": {
                                "amount": 47500,
                                "currency": "USD",
                                "formatted": "$475.00"
                            },
                            "value": {
                                "amount": 47500,
                                "currency": "USD",
                                "formatted": "$475.00"
                            }
                        },
                        "without_tax": {
                            "unit": {
                                "amount": 47500,
                                "currency": "USD",
                                "formatted": "$475.00"
                            },
                            "value": {
                                "amount": 47500,
                                "currency": "USD",
                                "formatted": "$475.00"
                            }
                        },
                        "tax": {
                            "unit": {
                                "amount": 0,
                                "currency": "USD",
                                "formatted": "$0.00"
                            },
                            "value": {
                                "amount": 0,
                                "currency": "USD",
                                "formatted": "$0.00"
                            }
                        },
                        "discount": {
                            "unit": {
                                "amount": -500,
                                "currency": "USD",
                                "formatted": "-$5.00"
                            },
                            "value": {
                                "amount": -500,
                                "currency": "USD",
                                "formatted": "-$5.00"
                            }
                        }
                    },
                    "timestamps": {
                        "created_at": "2021-06-03T22:47:33Z",
                        "updated_at": "2021-06-03T22:47:33Z"
                    }
                },
                "relationships": {
                    "cart_item": {
                        "data": {
                            "type": "cart_item",
                            "id": "4265f5f8-b616-45d6-90cf-d4d797777d72"
                        }
                    }
                }
            },
            {
                "type": "order_item",
                "id": "f8aefa8a-b57a-421e-9b4c-ae8f17e12371",
                "quantity": 1,
                "product_id": "7767cb41-dc76-4214-97e7-0595c4b58e18",
                "name": "5off",
                "sku": "5off",
                "unit_price": {
                    "amount": -500,
                    "currency": "USD",
                    "includes_tax": false
                },
                "value": {
                    "amount": -500,
                    "currency": "USD",
                    "includes_tax": false
                },
                "links": {},
                "meta": {
                    "display_price": {
                        "with_tax": {
                            "unit": {
                                "amount": -500,
                                "currency": "USD",
                                "formatted": "-$5.00"
                            },
                            "value": {
                                "amount": -500,
                                "currency": "USD",
                                "formatted": "-$5.00"
                            }
                        },
                        "without_tax": {
                            "unit": {
                                "amount": -500,
                                "currency": "USD",
                                "formatted": "-$5.00"
                            },
                            "value": {
                                "amount": -500,
                                "currency": "USD",
                                "formatted": "-$5.00"
                            }
                        },
                        "tax": {
                            "unit": {
                                "amount": 0,
                                "currency": "USD",
                                "formatted": "$0.00"
                            },
                            "value": {
                                "amount": 0,
                                "currency": "USD",
                                "formatted": "$0.00"
                            }
                        },
                        "discount": {
                            "unit": {
                                "amount": 0,
                                "currency": "USD",
                                "formatted": "$0.00"
                            },
                            "value": {
                                "amount": 0,
                                "currency": "USD",
                                "formatted": "$0.00"
                            }
                        }
                    },
                    "timestamps": {
                        "created_at": "2021-06-03T22:47:33Z",
                        "updated_at": "2021-06-03T22:47:33Z"
                    }
                },
                "relationships": {
                    "cart_item": {
                        "data": {
                            "type": "cart_item",
                            "id": "7d7f6c5c-74a8-40c3-8808-d08a825ba986"
                        }
                    }
                }
            }
        ]
    }
}
```

## `POST` With Customer Object

```http
https://useast.api.elasticpath.com/v2/carts/:reference/checkout
```

You can checkout a Cart with an associated customer name and email.

### Parameters

#### Path parameters

| Name        | Required | Type     | Description                             |
|:------------|:---------|:---------|:----------------------------------------|
| `reference` | Required | `string` | The reference for the cart to checkout. |

#### Headers

| Name                | Required | Type     | Description                      |
|:--------------------|:---------|:---------|:---------------------------------|
| `X-MOLTIN-CURRENCY` | Optional | `string` | Specifies the currency to be used for the products in the cart. If you do not specify a currency, the site’s default currency is used. This header only affects the first item added to the cart. |
| `Authorization`     | Required | `string` | The Bearer token required to get access to the API. |

#### Body

| Name                            | Required | Type     | Description          |
|:--------------------------------|:---------|:---------|:---------------------|
| `customer.email`                | Required | `string` | Customer email address. |
| `customer.name`                 | Required | `string` | Full name of the customer. |
| `billing_address.first_name`    | Required | `string` | First name of the billing recipient. |
| `billing_address.last_name`     | Required | `string` | Last name of the billing recipient. |
| `billing_address.company_name`  | Optional | `string` | Company name of the billing recipient. |
| `billing_address.line_1`        | Required | `string` | First line of the billing address. |
| `billing_address.line_2`        | Optional | `string` | Second line of the billing address. |
| `billing_address.city`          | Optional | `string` | city of the billing address. |
| `billing_address.county`        | Optional | `string` | Specifies county of the billing address. |
| `billing_address.region`        | Required | `string` | Specifies state, province, or region of the billing address. |
| `billing_address.postcode`      | Required | `string` | Postcode of the billing address. |
| `billing_address.country`       | Required | `string` | Specifies Country of the billing address. |
| `shipping_address.first_name`   | Required | `string` | First name of the shipping recipient. |
| `shipping_address.last_name`    | Required | `string` | Last name of the shipping recipient. |
| `shipping_address.company_name` | Optional | `string` | Company name of the shipping recipient. |
| `shipping_address.phone_number` | Optional | `string` | Phone number of the shipping recipient. |
| `shipping_address.line_1`       | Required | `string` | First line of the shipping address. |
| `shipping_address.line_2`       | Optional | `string` | Second line of the shipping address. |
| `shipping_address.city`         | Optional | `string` | City of the shipping address. |
| `shipping_address.county`       | Required | `string` | Specifies the county of the shipping address. |
| `shipping_address.region`       | Required | `string` | Specifies the state, province, or region of the shipping address. |
| `shipping_address.postcode`     | Required | `string` | Postcode of the shipping address. |
| `shipping_address.country`      | Required | `string` | Specifies the country of the shipping address. |
| `shipping_address.instructions` | Optional | `string` | Shipping instructions. |

### Request Examples

#### Curl

```bash
curl -X POST https://useast.api.elasticpath.com/v2/carts/:reference/checkout \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
       "data": {
         "customer": {
           "email": "john@moltin.com",
           "name": "John Doe"
         },
         "billing_address": {
           "first_name": "John",
           "last_name": "Doe",
           "company_name": "Moltin",
           "line_1": "1234 Disney Drive",
           "line_2": "Disney Resort",
           "city": "Anaheim",
           "county": "Orange",
           "region": "CA",
           "postcode": "92802",
           "country": "US",
         },
         "shipping_address": {
           "first_name": "John",
           "last_name": "Doe",
           "company_name": "Moltin",
           "phone_number": "(555) 555-1234",
           "line_1": "1234 Disney Drive",
           "line_2": "Disney Resort",
           "city": "Anaheim",
           "county": "Orange",
           "region": "CA",
           "postcode": "92802",
           "country": "US",
           "instructions": "Leave in porch"
         }
       }
    }'
```

#### JavaScript SDK

When you use the JavaScript SDK, you must pass the `billing` address. The `shipping` details are optional, but if you only give a `billing` address, the `shipping` address will automatically be set to the same as the `billing` address.

```javascript
const MoltinGateway = require("@moltin/sdk").gateway;
const Moltin = MoltinGateway({
    client_id: "X",
});
const reference = "XXXX";
const customer = {
    email: "john@moltin.com",
    name: "John Doe",
};
const billing = {
    first_name: "John",
    last_name: "Doe",
    line_1: "1234 Disney Drive",
    line_2: "Disney Resort",
    city: "Anaheim",
    county: "Orange",
    region: "CA",
    postcode: "92802",
    country: "US",
};
const shipping = {
    first_name: "John",
    last_name: "Doe",
    line_1: "1234 Disney Drive",
    line_2: "Disney Resort",
    city: "Anaheim",
    county: "Orange",
    region: "CA",
    postcode: "92802",
    country: "US",
};
Moltin.Cart(reference)
    .Checkout(customer, billing, shipping)
    .then((order) => {
        // Do something
    });
```

## Next Steps

After a Cart has been converted to an Order using either of the previous methods, you most likely want to capture payment for order.

- [Paying for an order](/docs/api/carts/payments)


## Errors

The following error response is returned during checkout when an eligible item is added to the cart, and the free gift is out of stock. 

```json
{
    "errors": [
        {
            "status": 400,
            "title": "Insufficient stock",
            "detail": "There is not enough stock to add gift2 to your cart",
            "meta": {
                "id": "f2b68648-9621-45a3-aed6-1b526b0f5beb",
                "sku": "gift2"
            }
        }
    ]
}
```
