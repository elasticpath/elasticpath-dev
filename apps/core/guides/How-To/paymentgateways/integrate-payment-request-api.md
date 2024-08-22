---
title: Integrate Payment Request API
nav_label: Integrate Payment Request API
nav_position: 5
---

Payment Request API is a browser API that standardizes the checkout flow across the web. It also expedites the payment process by capturing required payment information. For a demo on how Payment Request API works with Commerce, visit GitHub.

## Prerequisites

If you want to follow along, you need the following items:

- A Composable Commerce account
- Configured products and gateway
- An [access token](/guides/Getting-Started/your-first-api-request)

## Limitations

For gateway and browser support, consult the Payment Request API documentation.

## Integration steps summary

1. Configure products through the Commerce Manager or API.
2. Configure the payment gateway through Commerce Manager or API.
3. Integrate Payment Request API with your project.

## Process workflow

The client application created with the Composable Commerce API calls the Payment Request API and passes to the browser cart details needed for checkout. The end user can check out using their pre-configured card option (i.e. card and shipping details that are already stored in their browser). After validation, the data is passed back and processed by Composable Commerce API and your configured gateway.

## Integrate with Composable Commerce

Use the Composable Commerce API to create a checkout flow. See the JavaScript SDK for more API interactions. At minimum, you’ll need:

- Ability to add items to a cart.
- Ability to check out a cart.
- Ability to show the Payment Request API.
- Ability to pay for an order using data returned from Composable Commerce and Payment API.

## Configure the checkout flow

On the Composable Commerce side, make sure you have the basic checkout flow configured. As part of which, you’ll need to add the ability to add items to a cart.

```javascript
async function addToCart() {
  try {
    // Get all products in your store
    const products = await Moltin.Products.All();
    const product = products.data[0];

    // Add the first product to the cart
    await Moltin.Cart.AddProduct(product.id);

    // Get the cart items
    this.cartItems = Moltin.Cart.Items();
  } catch (e) {
    // Handle errors
  };
};
```

In the following example the quantity field defaults to 1, and as such is not provided.

## Implement payment detail

Integrate the new Payment Request API directly into the Composable Commerce checkout flow by building a new PaymentRequest object using the constructor.

```javascript
// Accept a basic debit or credit card
const paymentMethods = [{ supportedMethods: ['basic-card'] }];

// Request the customer for the name, email address
const options = { requestPayerEmail: true, requestPayerName: true };

// Build a summary of the order items from the moltin cart response
const displayItems = this.cartItems.data.map((item) => {
  const newItem = {};

  newItem.label = item.name;
  newItem.amount = {
    currency: item.meta.display_price.with_tax.value.currency,
    value: item.meta.display_price.with_tax.value.formatted.substring(1),
  };

  return newItem;
});

// Build our PaymentRequest object
const payment = new PaymentRequest(paymentMethods, {
  total: {
    label: 'Total',
    // Show the cart totals
    amount: {
        currency: this.cartItems.meta.display_price.with_tax.currency,
        value: this.cartItems.meta.display_price.with_tax.formatted.substring(1),
    },
  },
  displayItems,
}, options);
```

The first argument defines the accepted payment method, credit card.

Next, we pass in the items to display. These are cart items returned from the Composable Commerce API. It allows us to show a breakdown of the order cost in the Payment Request UI.

The optional third argument is an object specifying which, if any, additional information is required from the customer. We want to get their name and email address to create an order with Composable Commerce.

## Display the Payment Request UI

Call the `show()` method on the PaymentRequest object to display the UI so that the end user can provide their billing information required to finalize the transaction.

The payment and address information is then collected from the UI and used by Composable Commerce to create an order.

To create a successful order, Composable Commerce uses `Moltin.Cart.Checkout()` call and the previously specified and enabled gateway (this example uses Stripe).

```javascript
async completeOrder() {
  try {
    // Show the payment capture UI
    const paymentResponse = await payment.show();

    // Build the moltin address payload from the PaymentRequest response
    const address = {
first_name: paymentResponse.details.billingAddress.recipient.split(' ')[0],
last_name: paymentResponse.details.billingAddress.recipient.split(' ')[1],
line_1: paymentResponse.details.billingAddress.addressLine[0],
city: paymentResponse.details.billingAddress.city,
postcode: paymentResponse.details.billingAddress.postalCode,
county: paymentResponse.details.billingAddress.region,
country: paymentResponse.details.billingAddress.country,
    };

    // Checkout our cart and create an order
    const order = await Moltin.Cart.Checkout({
customer: {
  name: paymentResponse.payerName,
  email: paymentResponse.payerEmail,
},
shipping_address: address,
billing_address: address,
    });

    // Pay for the order with Stripe
    await Moltin.Orders.Payment(order.data.id, {
gateway: 'stripe',
method: 'purchase',
first_name: paymentResponse.details.cardholderName.split(' ')[0],
last_name: paymentResponse.details.cardholderName.split(' ')[1],
number: paymentResponse.details.cardNumber,
month: paymentResponse.details.expiryMonth,
year: paymentResponse.details.expiryYear,
verification_value: paymentResponse.details.cardSecurityCode,
    });
  } catch (e) {
    // Handle errors
  }
```

## Hide the Payment Request UI

To finish the flow and hide the UI, call the complete() method on the PaymentRequest object.

```javascript
// Complete the `PaymentRequest`
return paymentResponse.complete();
```

## Related Resources

- [moltin-paymentrequest-api](https://github.com/moltin/moltin-paymentrequest-api) **(Source code)**
