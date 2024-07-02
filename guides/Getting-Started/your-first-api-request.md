---
title: Your first API request
nav_label: Your first API request
sidebar_position: 170
---

Learn how to make your first API request. The lessons use the command line to make requests via cURL, but you could as easily use a [supported SDK](/docs/developer-tools).

We start with authentication and then walk you through a basic checkout process:

1. [Authenticate](#lesson-1-authenticate)
2. [Add items to a cart](#lesson-2-add-to-cart)
3. [Checkout the cart](#lesson-3-checkout)
4. [Pay for the order](#lesson-4-pay-for-the-order)

## Lesson 1: Authenticate

Requests to Composable Commerce require an `Authorization` header containing your `Bearer` token. There are two token types; `implicit` and `client_credentials`. See [Authentication](/docs/authentication) for more details.

This guide uses the implicit grant type. This grant type can be thought of as read only and most commonly used client side.

### Get your API keys

To get your application keys, see [Application Keys](/docs/commerce-manager/application-keys/application-keys-cm). Make a a copy of your `client_id`.

### Get an access token

Using the `client_id`, we can now make our very first API request. Inside your Terminal or command-line equivalent, make the following request:

```sh
curl -X POST https://useast.api.elasticpath.com/oauth/access_token \
     -d "client_id=XXXX" \
     -d "grant_type=implicit"
```

A successful request responds with something similar to:

```javascript
{
  "expires": 1537779121,
  "identifier": "implicit",
  "expires_in": 3600,
  "access_token": "0e82127a8d9c20abb3d6e48561cbfe81448956ab",
  "token_type": "Bearer"
}
```

Make a copy of your `access_token`. This is your implicit `Bearer` token that is required for future requests.

:::note
You need to re-authenticate when the `access_token` expires.
:::

### Make a request with your access token

To request a new cart, use the unique reference `abc` for the cart. We will need this when requesting the items, adding items and checking out.

:::caution
 Replace `XXXX` in the following example with your `access_token` from the previous example.
:::

Inside your command-line, run the following cURL request:

```sh
curl https://useast.api.elasticpath.com/v2/carts/abc \
     -H "Authorization: Bearer XXXX"
```

You will receive a response similar to:

```javascript
{
  "data":{
    "id":"a054e10e-5fb7-4a76-a496-c59638d45939",
    "type":"cart",
    "links":{
      "self":"https://useast.api.elasticpath.com/carts/a054e10e-5fb7-4a76-a496-c59638d45939"
    },
    "meta":{
      "display_price":{
        "with_tax":{
          "amount":0,
          "currency":"",
          "formatted":"0"
        },
        "without_tax":{
          "amount":0,
          "currency":"",
          "formatted":"0"
        }
      },
      "timestamps":{
        "created_at":"0001-01-01T00:00:00Z",
        "updated_at":"0001-01-01T00:00:00Z"
      }
    }
  }
}
```

Now that we have successfully authenticated and retrieved a cart, in the next lesson, we will add a custom item to the cart.

## Lesson 2: Add to Cart

Since we currently donʼt have any products within our inventory, we will go ahead and add a custom item to the cart.

:::note
Custom cart items can be a great solution, as by definition a custom cart item doesn’t need to have a corresponding item in your catalog. For example, if you do not have a catalog in Composable Commerce, you can use a custom cart item to refer to those products.

Custom items are also perfect when dealing with **shipping** charges.‌
:::

Letʼs go ahead and add a `custom_item` to the cart. We are using the same cart reference `abc`.

:::caution
Replace `XXXX` in the following example with your `access_token` from the previous example.
:::

```sh
curl -X POST https://useast.api.elasticpath.com/v2/carts/abc/items \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
      "data": {
        "type": "custom_item",
        "name": "T-Shirt",
        "sku": "tshirt-001",
        "description": "A branded T-shirt",
        "quantity": 1,
        "price": {
          "amount": 10000
        }
      }
    }'
```

We can very easily add another `custom_item` to the Cart.

```sh
curl -X POST https://useast.api.elasticpath.com/v2/carts/abc/items \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
      "data": {
        "type": "custom_item",
        "name": "Jeans",
        "sku": "jeans-orange-001",
        "description": "branded jeans",
        "quantity": 1,
        "price": {
          "amount": 12500
        }
      }
    }'
```

Both of these requests respond with the current cart items, including useful data such as `display_price` for each item, which provides helpful formatted currencies for items in the cart.‌

Now we have items in the cart, in the next lesson, we convert the cart to an unpaid Order using the `/checkout` endpoint.

## Lesson 3: Checkout

A cart with the reference `abc` that includes our T-Shirt as a `custom_item` is created. You can now convert the cart to an order using the [Checkout API](/docs/api/carts/checkout).‌

### Checkout a Cart

You can checkout a cart using an existing Customer ID or an object including the customer name and email. In the following example, we will provide a name and an email, as we have no customers yet.

:::note
You need to re-authenticate when the `access_token` expires.‌
:::

Along with the customer’s information, we must also provide the billing and shipping information. Using cURL, we can send the following request:

:::caution
Replace `XXXX` in the following example with your `access_token` from the previous example.
:::

```sh
‌curl -X POST https://useast.api.elasticpath.com/v2/carts/abc/checkout \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
        "data": {
            "customer": {
                "email": "john.doe@elasticpath.com",
                "name": "John Doe"
            },
            "billing_address": {
                "first_name": "John",
                "last_name": "Doe",
                "company_name": "Commerce",
                "line_1": "British India House",
                "postcode": "NE1 6UF",
                "county": "Tyne & Wear",
                "country": "UK"
            },
            "shipping_address": {
                "first_name": "John",
                "last_name": "Doe",
                "line_1": "British India House",
                "postcode": "NE1 6UF",
                "county": "Tyne & Wear",
                "country": "UK"
            }
        }
     }'
```

When the request is complete, you will receive a `201 CREATED` response similar to the following example:

```sh
‌{
    "data": {
        "type": "order",
        "id": "a4a83c8b-c71d-4eec-8f0a-30c562bd5f3e",
        "status": "incomplete",
        "payment": "unpaid",
        "shipping": "unfulfilled",
        "customer": {
            "name": "John Doe",
            "email": "john.doe@elasticpath.com"
        },
        "shipping_address": {
            "first_name": "John",
            "last_name": "Doe",
            "phone_number": "",
            "company_name": "",
            "line_1": "British India House",
            "line_2": "",
            "city": "",
            "postcode": "NE1 6UF",
            "county": "Tyne & Wear",
            "country": "UK",
            "instructions": ""
        },
        "billing_address": {
            "first_name": "John",
            "last_name": "Doe",
            "company_name": "Composable Commerce",
            "line_1": "British India House",
            "line_2": "",
            "city": "",
            "postcode": "NE1 6UF",
            "county": "Tyne & Wear",
            "country": "UK"
        },
        "links": {},
        "meta": {
            "display_price": {
                "with_tax": {
                    "amount": 1998,
                    "currency": "USD",
                    "formatted": "$19.98"
                },
                "without_tax": {
                    "amount": 1998,
                    "currency": "USD",
                    "formatted": "$19.98"
                }
            },
            "timestamps": {
                "created_at": "2018-10-12T15:02:37Z",
                "updated_at": "2018-10-12T15:02:37Z"
            }
        },
        "relationships": {
            "items": {
                "data": [
                    {
                        "type": "item",
                        "id": "e2f7aa51-a96a-4d84-b0cb-f8ec35e94f2f"
                    }
                ]
            }
        }
    }
}
```

Congratulations. This is your first Order.‌

### Inspecting the Order

In the preceding Order object, we received a few values that make paying for an Order easy.

 | Property | Description |
 | :--- | :--- |
 | `id` | This is the ID for the newly created order. Youʼll need this to get the order again in the future or when paying for an order. |
 | `status` | This is either **`complete`** or **`incomplete`**. Useless when grouping orders in your own UI to your customers when theyʼre logged in. |
 | `payment` | An order is immediately unpaid, but after you move onto paying for an order, this can be: **`authorized`**, **`paid`** or **`refunded`**. |
 | `shipping` | This is either **`fulfilled`** or **`unfulfilled`**. |
 | `meta` | This object contains useful metadata for your order including a formatted [order total](/guides/How-To/Carts/calculate-totals) for your cart, along with when the cart was created. |
 | `relationships` | This object contains the IDs for related objects, including the [Order Items](/docs/api/carts/get-order-items) and the [Customer](/docs/customer-management/customer-management-api/customer-management-api-overview), if you provided one during Checkout. |

### Clean up the cart

After a cart is converted to an Order, the cart exists for another 7 days, unless you touch it again. You can send a request to `DELETE` the Cart, if you no longer require the items inside.

:::caution
Replace `XXXX` in the following example with your `access_token.`
:::

```sh
curl -X DELETE https://useast.api.elasticpath.com/v2/carts/abc \
     -H "Authorization: Bearer XXXX"
```

## Lesson 4: Pay for the order

Now that we have an unpaid order, we can move onto using the Payments API.

:::note
Before we can use the Payments API, we must first configure a payment gateway.‌
:::

### Payment Gateways

Right now Composable Commerce provides native payment functionality for the following providers

* [Stripe](/docs/api/carts/authorize-setup)
* [Braintree](/docs/api/carts/authorize-setup)

If your gateway isnʼt listed, you can implement a [Manual Gateway](https://elasticpath.dev/guides/How-To/paymentgateways/implement-manual-gateways).

### Configure your gateway

In this example we are using Stripe. If you want to follow along, login or sign up to Stripe and head to [Developers &gt; API keys](https://dashboard.stripe.com/account/apikeys) and make a copy of your **secret key**.

Next, add the Stripe secret key in the commerce Cloud, but we will need a `client_credentials` token to do that.

You will need your `client_id` and `client_secret` from [Commerce Manager](https://dashboard.elasticpath.com/) to do this.

```bash
curl -X POST https://useast.api.elasticpath.com/oauth/access_token \
     -d "client_id=XXXX" \
     -d "client_secret=XXXX" \
     -d "grant_type=client_credentials"‌
```

After completed you receive your `access_token`.

```bash
‌{
  "expires": 1537779121,
  "identifier": "implicit",
  "expires_in": 3600,
  "access_token": "9z12127b8d9e20abb3d6e48561cbfe81448956pl",
  "token_type": "Bearer"
}
```

We can now configure the [Stripe gateway](/docs/api/payments/update-stripe-gateway) by using the API. _You can also configure payment gateways via Commerce Manager._

:::caution
You need to replace `XXXX` with your `access_token` and Stripe secret key in the following example.
:::

```sh
‌curl -X PUT https://useast.api.elasticpath.com/v2/gateways/stripe \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
       "data": {
         "enabled": true,
         "login": "XXXX"
       }
     }'
```

### Make a payment

We now have everything we need to pay for our order.

Payments are handled via token and sources. These are secure tokens that permit `authorize`/`capture` on your card. Stripe provide many tools to generate tokens, including [Stripe.js](https://stripe.com/docs/js) and [Checkout](https://stripe.com/docs/payments/checkout).‌

Stripe also provides a variety of tokens you can use during test/development environments and in the following example, we use the `tok_visa` to simulate a successful Visa payment.

:::caution
Replace `XXXX` with your `access_token` and replace `:orderId` with your unpaid order ID we created in the [previous step](#lesson-3-checkout).
:::

```sh
‌curl -X POST https://useast.api.elasticpath.com/v2/orders/:orderId/payments \
     -H "Content-Type: application/json" \
     -H "Authorization: Bearer XXXX" \
     -d $'{
        "data": {
          "gateway": "stripe",
          "method": "purchase",
          "payment": "tok_visa"
        }
      }'
```

Now you have successfully paid for your unpaid order.
