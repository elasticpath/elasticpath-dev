---
id: api
title: Lambda API
sidebar_label: Lambda API
original_id: api
---

The PunchOut Lambda exposes a `/setup` endpoint. The PunchOut gateway uses this endpoint to initiate the PunchOut session and retrieve the storefront URL.

## Setting up the Lambda Endpoint

When a client does a `POST` to this endpoint, the following workflow is initiated:

1. Creates a shopping cart for the user if one does not already exist.
2. Clears the shopping cart, if one already exists.
3. Adds any items that are specified to the shopping cart.
4. Sets the passed cart transfer URL set as a cart modifier.
5. Returns the configured storefront URL.

### Request

The PunchOut gateway will `POST` to this endpoint. The body of the request is be formatted as a `JSON` object containing the following fields:

| Field                  | Required | Description                                                                                                                                            |
|------------------------|----------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| `cart-transfer-url`    | yes      | The URL that is stored in the `cart-transfer-url` cart descriptor for the front-end to know where to redirect the browser to initiate a cart transfer. |
| `items`                | no       | An array of items that are added to the cart if the user wants to edit their cart. If this field is not specified, the cart is initialized empty.      |
| `items.code`           | yes      | The sku code of the item to add to cart.                                                                                                               |
| `items.quantity`       | yes      | The quantity of items to add to cart.                                                                                                                  |
| `items.configuration`  | no       | A map of key/value pairs representing the cart item modifier values for the item.                                                                      |

Example:

`POST https://punchout.example.com/setup`

```json
{
  "cart-transfer-url":"https://connect.tradecentric.com/gateway/link/return/id/AH5e39b48e23f3d",
  "ids": [
     {
       "code": "physical_sku",
       "quantity": 1,
       "configuration": {
         "engraving": "Bob and Alice 2023",
         "special-notes": "This is for a wedding, please treat with care."
       }
     },
     {
       "code": "digital_sku",
       "quantity": 1
     }
  ]
}
```

### Response

The body of the response is a `JSON` object containing the following fields:

| Field | Description |
| ----- | ----------- |
| `browse-storefront-url` | The URL that the PunchOut gateway redirects the browser to for a level 1 PunchOut session. |
| `product-storefront-url` | The URL that the PunchOut gateway redirects the browser to for a level 2 PunchOut session. The PunchOut gateway can allow for either a `{product_code}` or `{sku_code}` placeholder in the URL. This placeholder can be replaced with the product code or sku code that the user is interested in. |

Example:

```json
{
    "browse-storefront-url": "https://store.example.com/",
    "product-storefront-url": "https://store.example.com/product/{product_code}"
}
```

## Cart Transfer Lambda Endpoint

The PunchOut Lambda exposes a `/cart` endpoint. This is intended for use by the PunchOut gateway to transfer the cart contents back to the eProcurement system.

### Request

The PunchOut gateway will `GET` from this endpoint. The following query parameters are supported:

| Query Parameter | Description |
| --------------- | ----------- |
| `zoom` | The `zoom` parameter to use when retrieving the default shopping cart from Cortex. |

For example:

`GET https://punchout.example.com/cart?zoom=descriptor,lineitems:element,lineitems:element:item:code`

### Response

The response is a standard Cortex cart response. For example:

```json
{
    "self": {
        "type": "carts.cart",
        "uri": "/carts/mobee/gyzdqn3bmm2willcmu4wcljug4yweljzgy3dsljzgy4tmytdg5stoyruhe=?zoom=descriptor,lineitems:element,lineitems:element:item:code",
        "href": "https://dev1-cortex-gw.ep-dev.aws.tradecentric-test.com/cortex/carts/mobee/gyzdqn3bmm2willcmu4wcljug4yweljzgy3dsljzgy4tmytdg5stoyruhe=?zoom=descriptor,lineitems:element,lineitems:element:item:code"
    },
    "messages": [],
    "links": [
        {
            "rel": "lineitems",
            "type": "carts.line-items",
            "href": "https://dev1-cortex-gw.ep-dev.aws.tradecentric-test.com/cortex/carts/mobee/gyzdqn3bmm2willcmu4wcljug4yweljzgy3dsljzgy4tmytdg5stoyruhe=/lineitems"
        },
        {
            "rel": "additemstocartform",
            "type": "carts.add-items-to-cart-form",
            "href": "https://dev1-cortex-gw.ep-dev.aws.tradecentric-test.com/cortex/carts/mobee/gyzdqn3bmm2willcmu4wcljug4yweljzgy3dsljzgy4tmytdg5stoyruhe=/form"
        },
        {
            "rel": "descriptor",
            "type": "carts.cart-descriptor",
            "href": "https://dev1-cortex-gw.ep-dev.aws.tradecentric-test.com/cortex/carts/mobee/gyzdqn3bmm2willcmu4wcljug4yweljzgy3dsljzgy4tmytdg5stoyruhe=/descriptor"
        },
        {
            "rel": "discount",
            "type": "discounts.discount-for-cart",
            "href": "https://dev1-cortex-gw.ep-dev.aws.tradecentric-test.com/cortex/discounts/carts/mobee/gyzdqn3bmm2willcmu4wcljug4yweljzgy3dsljzgy4tmytdg5stoyruhe="
        },
        {
            "rel": "order",
            "type": "orders.order",
            "href": "https://dev1-cortex-gw.ep-dev.aws.tradecentric-test.com/cortex/orders/mobee/mm2tgmbugu3ggljvgzrtqljumvswcllcmvtdgljuha2dsnzqhfrtsmrxha="
        },
        {
            "rel": "appliedpromotions",
            "type": "promotions.applied-promotions-for-cart",
            "href": "https://dev1-cortex-gw.ep-dev.aws.tradecentric-test.com/cortex/promotions/carts/mobee/gyzdqn3bmm2willcmu4wcljug4yweljzgy3dsljzgy4tmytdg5stoyruhe=/applied"
        },
        {
            "rel": "total",
            "type": "totals.cart-total",
            "href": "https://dev1-cortex-gw.ep-dev.aws.tradecentric-test.com/cortex/totals/carts/mobee/gyzdqn3bmm2willcmu4wcljug4yweljzgy3dsljzgy4tmytdg5stoyruhe="
        }
    ],
    "_descriptor": [
        {
            "messages": [],
            "links": [],
            "cart-transfer-url": "testCartTransferUrl",
            "name": "user"
        }
    ],
    "_lineitems": [
        {
            "_element": [
                {
                    "messages": [],
                    "links": [],
                    "_item": [
                        {
                            "_code": [
                                {
                                    "messages": [],
                                    "links": [],
                                    "code": "physical_sku"
                                }
                            ]
                        }
                    ],
                    "configuration": {},
                    "quantity": 1
                }
            ]
        }
    ],
    "total-quantity": 1
}
```

## Sales Order Lambda Endpoint

The PunchOut Lambda exposes a `/salesorder` endpoint. The PunchOut gateway uses this endpoint to create a sales order.

When a client does a `POST` to this endpoint, the following workflow is initiated:

1. Creates a shopping cart for the user if it does not already exist.
2. Clears the shopping cart if one already exists.
3. Adds specified items to the shopping cart.
4. Sets the specified billing address.
5. Sets the specified shipping address.
6. Sets the specified shipping method.
7. Sets the specified payment method.
8. Initiates checkout.

### Request

The PunchOut gateway will `POST` to this endpoint. The body of the request should be formatted as a `JSON` object containing the following fields:

| Field                 | Required | Description                                                                                                                                       |
|-----------------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| `billing-address`     | yes      | The billing address details.                                                                                                                      |
| `shipping-address`    | depends  | The shipping address details. This must be specified if and only when a physical item is being purchased.                                         |
| `shipping`            | depends  | The shipping method details. This must be specified if and only when a physical item is being purchased.                                          |
| `shipping.option`     | yes      | The shipping option that is used to purchase. The options available depend on how Elastic Path Commerce is configured.                            |
| `payment`             | yes      | The payment method details.                                                                                                                       |
| `payment.method`      | yes      | The name of the payment method that is used to purchase. The options available depend on how Elastic Path Commerce is configured.                 |
| `payment.attributes`  | yes      | A map of values required by the payment method when the payment instrument is created. These fields are dependent on the payment method selected. |
| `items`               | yes      | An array of items to be purchased.                                                                                                                |
| `items.code`          | yes      | The sku code of the item to purchase.                                                                                                             |
| `items.quantity`      | yes      | The quantity of items to purchase.                                                                                                                |
| `items.configuration` | no       | A map of key/value pairs representing the cart item modifier values for the item.                                                                 |

For example:

`POST https://punchout.example.com/salesorder`

```json
{
    "billing-address": {
        "address": {
            "country-name": "CA",
            "locality": "Vancouver",
            "postal-code": "V6A 1N4",
            "region": "BC",
            "street-address": "1234 Hogwarts Avenue",
            "extended-address": ""
        },
        "name" : {
            "family-name": "Doe",
            "given-name": "John"
        },
        "organization": "Staples",
        "phone-number": "1-555-123-0000"
    },
    "shipping-address": {
        "address": {
            "country-name": "CA",
            "locality": "BC",
            "postal-code": "V6A0H3",
            "region": "BC",
            "street-address": "123 Fake Street",
            "extended-address": ""
        },
        "name": {
            "family-name": "Doe",
            "given-name": "John"
        },
        "organization": "Staples",
        "phone-number": "1-555-555-1111"
    },
    "shipping": {
        "option": "CanadaPostExpress"
    },
    "payment": {
        "method": "Smart Path Config",
        "attributes": {
            "display-name": "Sample Payment Method"
        }
    },
    "ids": [
        {
            "code": "physical_sku",
            "quantity": 1,
            "configuration": {
                "engraving": "Bob and Alice 2023",
                "special-notes": "This is for a wedding, please treat with care."
            }
        },
        {
            "code": "digital_sku",
            "quantity": 1
        }
    ]
}
```

### Response

The body of the response is a `JSON` object containing the following fields:

| Field | Description |
| ----- | ----------- |
| `order-number` | The order number generated by Cortex when the order was placed. |

For example:

```json
{
    "order-number": "20047"
}
```
