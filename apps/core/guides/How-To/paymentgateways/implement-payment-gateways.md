---
title: Implement Payment Gateways
nav_label: Implement Payment Gateways
nav_position: 1
---

Payment gateways provide access to external payment provider services. Integrate a natively-supported third-party payment gateway with your store by using the `/gateways/[gateway]` endpoint.

:::caution
Configure your store to use [Manual Gateway](/docs/api/carts/authorize-setup) to process payments if the order total is zero or the payment is through non-supported payment providers.
:::

## Prerequisites

If you want to follow along, you need the following items:

- A Composable Commerce account and the Client ID and Client Secret of your store
- An [access token](/guides/Getting-Started/your-first-api-request)
- Configured products and gateway using Commerce Manager or API.
- Third-party gateway account (typically to generate the API Keys)

## Step-by-step walkthrough

1. Enable the third-party payment gateway through the API or Commerce Manager, and provide the API Key.
2. Use the enabled gateway as a dedicated gateway when making payment calls.

You can configure and enable multiple gateways. Itʼs the `orders/:orderId/payments` endpoint that decides which gateway is used for a transaction.

### Enable a gateway

To enable a third party gateway programmatically or through Commerce Manager, set the gateway as enabled and provide login detail. This enables the gateway on your project, and tell the API which API key to use.

```sh
curl -X PUT https://useast.api.elasticpath.com/v2/gateways/stripe \
     -H "Authorization: Bearer XXX" \
     -H "Content-Type: application/json" \
     -d ${
         "data": {
            "gateway": "stripe",
            "type": "gateway",
            "login": "sk_test_xxxx",
            "enabled": true
  }
}
```

#### Integrate with the checkout flow

Use the API to create a checkout flow. See the JavaScript SDK for more API interactions.

At minimum, you need the ability to:

1. Add items to a cart.
2. Check out a cart.

##### Add items to a cart

This section walks you briefly through steps required to add items to a cart. The scenario assumes that itʼs a one product added to a new cart. For more details, see the Carts API.

You can use any URL safe value you want for your cart IDs. If a cart doesn’t already exist with that ID, it’ll be created the first time you add an item. If this request is successful, you’ll get a 201 response with all of the cart items that exist in the updated cart.

```sh
curl -X POST https://useast.api.elasticpath.com/v2/carts/:cartID/items \
     -H "Authorization: Bearer XXX" \
     -H "Content-Type: application/json" \
     -d ${
         "data": {
            "type": "cart_item",
             "id": "5a13d787-9e81-4aea-91f6-d281a7aef8b7",
             "quantity": 1
  }
}
```

##### Check out a cart

Checking out a cart converts it into an unpaid order. You don’t have to specify the payment gateway you’d like to use at this point. At minimum, you need to provide billing details. Shipping is optional. For more details, see Checkout in API Reference.

```sh
curl -X POST https://useast.api.elasticpath.com/v2/carts/:cartID/checkout \
     -H "Authorization: Bearer XXX" \
     -H "Content-Type: application/json" \
     -d $'{
        "data": {
            "customer": {
                "name": "Billy",
                "email": "billy@billy.com"
            },
            "billing_address": {
                "first_name": "Jack",
                "last_name": "Macdowall",
                "company_name": "Macdowalls",
                "line_1": "1225 Invention Avenue",
                "line_2": "Birmingham",
                "postcode": "B21 9AF",
                "county": "West Midlands",
                "country": "US",
                "city": "billing city"
    }
  }
}'
```

### Use a gateway to make a payment

Payment transactions are processed similarly for all gateways.

The typical payment workflow has the following steps:

1. A payment transaction is created and an attempt to pay is made.
2. The transaction is forwarded to the third-party gateway specified by the customer.
3. The payment is processed by the third-party gateway.

Payment transactions are always processed outside of Composable Commerce for security reasons. Use a token as a secure method of providing payment details.
If the transaction is successful, a 200 OK response is returned. Use the response (success or failure) to update the transaction, which in turn automatically updates the order and payment statuses.

## Natively-supported payment gateways

If it makes sense for your store, use the third-party integrations that are natively supported with Composable Commerce:

- [Stripe](/guides/How-To/paymentgateways/implement-payment-gateways#stripe)
- [Braintree](/guides/How-To/paymentgateways/implement-payment-gateways#braintree)

Alternatively, you can create a manual gateway to integrate other payment providers or permit other payment options.

### Stripe

The client application calls the Stripe API and passes to the browser cart details needed for checkout. Stripe validates the purchase data and returns a token/source that the Payments API uses to complete the payment transaction.

Supported payment types:

- Token/source payment

#### Stripe integration

Making a payment through Stripe is a two-step process:

1. Collect customerʼs payment details outside of Composable Commerce and pass them to Stripe. Stripe returns a payment token.
2. Pass the token value in the payment field, and complete the payment transaction on the Composable Commerce side.

If successful, you get a 200 OK response. For more details, see the API Reference.

```sh
curl -X POST https://useast.api.elasticpath.com/v2/orders/:orderId/payments \
    -H "Authorization: Bearer XXXX" \
    -d $'{
        "data": {
            "gateway": "stripe",
            "method": "purchase",
            "payment": "tok_visa",
            "options": {
                "destination": "acct_XXX",
                "receipt_email": "john@example.com"
            }
        }
    }'
```

Use a token as a secure method of providing payment details.

#### Source vs. token

Rather than requesting a token back from Stripe, you can request a source, and pass it exactly like a token, through the payment field. Tokens are for single use only, and expire within minutes after their creation; whereas sources can be charged directly, or attached to customers for later reuse. For more details, see the Stripe documentation.

### Braintree

The client application calls the Braintree API and passes to the browser cart details needed for checkout. The transaction is then securely transmitted to and from the Braintree payments platform, and if successful brings back the 200 OK response. For more details, see the API Reference.

Supported payment types:

- Customer ID payment
- Token payment
- Nonce payment

#### Braintree Customer ID payment

This method allows you to bill a specific Braintree customer. Braintree is the default billing method in the customerʼs account.

```sh
curl -X POST https://useast.api.elasticpath.com/v2/orders/:order_id/payments \
    -H "Authorization: Bearer XXXX" \
    -d $'{
        "data": {
            "gateway": "braintree",
            "method": "purchase",
            "payment": BRAINTREE_CUSTOMER_ID
        }
    }'
```

#### Braintree token payment

Pay for an order with a specific Braintree Payment Method Token. This is similar to the Customer ID payment type, but you can define a number of payment methods to use as Tokens.

```sh
curl -X POST https://useast.api.elasticpath.com/v2/orders/:order_id/payments \
    -H "Authorization: Bearer XXXX" \
    -d $'{
        "data": {
            "gateway": "braintree",
            "method": "purchase",
            "payment": BRAINTREE_CUSTOMER_ID,
            "options": {
                "payment_method_token": BRAINTREE_PAYMENT_METHOD_TOKEN
            }
        }
    }'
```

#### Braintree nonce payment

Pay for an order with a previously created Braintree Payment Method Nonce. Use this method for a secure, one-time-use reference to transmit payment information when you want your server to communicate sensitive payment information to Braintree without ever touching the raw data.

```sh
curl -X POST https://useast.api.elasticpath.com/v2/orders/{ORDER_ID}/payments \
    -H "Authorization: Bearer XXXX" \
    -d $'{
        "data": {
            "gateway": "braintree",
            "method": "purchase",
            "payment": BRAINTREE_PAYMENT_NONCE,
            "options": {
                "payment_method_nonce": true
            }
        }
    }'
```

## Related Resources

- [Checkout workflow](/docs/api/carts/checkout)
- [Carts API](/docs/api/carts/cart-management)
- [Payment Gateways API](/docs/api/payments/payment-gateways-introduction)
