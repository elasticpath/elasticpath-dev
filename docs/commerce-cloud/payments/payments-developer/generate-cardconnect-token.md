---
title: Generate CardConnect payment token
nav_label: Generate CardConnect payment token
sidebar_position: 8
---

This walkthrough shows you how to generate CardConnect payment token to be used with Payment API.

## Prerequisites

- Enable CardConnect payment gateway in test mode via Payment API, using [CardPointe User Acceptance Tesing API Credentials](https://developer.cardconnect.com/guides/cardpointe-gateway#getting-started): Merchant ID, username and password.

- Download [CardPointe Gateway API Integration Postman collection](https://developer.cardconnect.com/guides/cardpointe-gateway#running-the-api-in-postman) and configure your Postman environment.

## Generating Tokens

1. Generate CardSecure Token.

    To tokenize the card information online, see [Hosted iFrame Tokenizer](https://developer.cardconnect.com/assets/developer/assets/iFrameTokenizerExample2.html).

    For more information about CardConnect’s Hosted iFrame Tokenizer, see [Hosted iFrame Tokenizer Solution](https://developer.cardconnect.com/hosted-iframe-tokenizer).

2. Issue [Create Profile request](https://developer.cardconnect.com/cardconnect-api#create-update-profile-request) supplying the token as `account` parameter.

3. Concatenate the `acctid` and `profileid` values from the response, using `|` symbol as a separator. For example,  `1|16178397535388255208`.

4. Now you can use the result as a `payment` parameter for Payment API.

    To find more information about credit card numbers for various test cases, see the [Testing Your Integration](https://developer.cardconnect.com/guides/cardpointe-gateway#testing-your-integration).
