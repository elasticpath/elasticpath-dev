---
id: testing
title: Testing the Plug-in
sidebar_label: Testing
original_id: testing
---

After you configure and activate the PayPal Express Checkout plug-in, associate it to one or more stores. You can test if the plug-in works by making a purchase.

1. Sign in to Cortex as a public shopper or as a registered shopper.

1. Add any item to the cart.

1. Go to the order and fill in the required information.

1. Go to `paymentmethodinfo`.

1. Go to the newly created PayPal payment method element.

1. Go to `requestinstructionform`.

    1. Fill in the `href` fields with a URL, such as `http://test.com`.

    1. Submit the form.

        The response returns a URL with a token, such as `https://www.sandbox.paypal.com/checkoutnow?token=EC-4MC27740T5330625M`.

    1. Copy the URL and open the link in a browser.

    1. Sign in to PayPal with the username and password.

    1. Click **Agree & Continue**.

1. Copy the token from the paramenter from the link from Step 6 ii.

1. Create a new `paymentinstrument` using the copied token.

1. Purchase an item.

    :::note
    If you have previously used the order number in the PayPal sandbox, the purchase might not succeed. Repeat the **Submit order** action until you succeed.
    :::

1. Sign in to Commerce Manager after the purchase is successful.

1. Look up the order.

1. Verify the transaction in the PayPal sandbox.

    1. Sign in to `https://www.sandbox.paypal.com`.

    1. Enter your username and password.

    1. Click **Activity** to view the transactions.

    1. Click the transaction to view the details.
