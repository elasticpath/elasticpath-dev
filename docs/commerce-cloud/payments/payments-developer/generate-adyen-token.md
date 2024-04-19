---
title: Generate Adyen payment token
nav_label: Generate Adyen payment token
sidebar_position: 6
---

This walkthrough shows you how to generate Adyen payment tokens.

## Prerequisites

- A test account on the [Adyen](https://ca-test.adyen.com/).

- Enable [recurring details](https://docs.adyen.com/online-payments/tokenization/create-and-use-tokens#test-and-go-live) for your Adyen account.

### Generate tokens

1. Generate a new API key for your Adyen web service user.

    :::note
    Ensure that you use the API key as a `X-Api-Key` HTTP header for all outgoing requests to Adyen API.
    :::

2. Use one of the Adyen UI widgets to encrypt card information and store it as a payment method.

    The goal is to produce a request to Adyen API similar to the following example:

    :::caution
    Always use zero amount at this point. You do not want to charge money before order processing starts.
    :::

    ```text
    POST https://checkout-test.adyen.com/v52/payments
    ```

    ```json
    {
     "merchantAccount": "MyCompanyECOM",
     "shopperReference": "MyShopper12345",
     "reference": "MyShopper12345_Card_Registration",
     "storePaymentMethod": true,
     "shopperInteraction": "Ecommerce",
     "recurringProcessingModel": "CardOnFile",
     "amount": {
       "value": 0,
       "currency": "EUR"
     },
     "paymentMethod": {
       "type": "scheme",
       "encryptedCardNumber": "adyenjs_0_1_25ABCDEFG=",
       "encryptedExpiryMonth": "adyenjs_0_1_25$ABCDEFG=",
       "encryptedExpiryYear": "adyenjs_0_1_25$$ABCDEFG=",
       "encryptedSecurityCode": "adyenjs_0_1_25$$ABCDEFG="
     }
    }
    ```

    For more information and examples about how to integrate Adyen UI widgets on the frontend, see the [Web Components integration guide](https://docs.adyen.com/checkout/components-web).

3. Parse the response for `recurringDetailReference` value to be used as a payment token.

    For examples about how to integrate Adyen UI widgets on the frontend, see the [Web Components integration guide](https://docs.adyen.com/checkout/components-web).

    ```json
   {
     "additionalData": {
       "recurringProcessingModel": "CardOnFile",
       "recurring.shopperReference": "MyShopper12345",
       "recurring.recurringDetailReference": "8415934712150237"
     },
     "pspReference": "882593471214138J",
     "resultCode": "Authorised",
     "amount": {
       "currency": "EUR",
       "value": 0
     },
     "merchantReference": "MyShopper12345_Card_Registration"
   }
    ```

    :::note
    When you enable [recurring details](https://docs.adyen.com/online-payments/tokenization/create-and-use-tokens#test-and-go-live), by default, the `recurringDetailReference` API response is only included during the first call to the payments endpoint, when the details get stored.
    Additionally, Adyen Support can enable a setting on your account to always retrieve the `recurringDetailReference` in the API response, for each call.
    :::

4. Copy the token value and prefix it with two `(#)` hashes. For example, `##8315932173953405`.

    You can now use it as a `payment` value when paying through Composable Commerce Adyen gateway.
