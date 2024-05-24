---
title: Making your first API Call
nav_label: Making your first API call
sidebar_position: 10
---

The Subscriptions API is set of APIs used to manage subscriptions. 

:::note
This guide uses the command line to make requests via cURL, but you can also use a supported SDK.
:::

All API requests must contain a generated access token for authentication purposes. To generate an access token, you need your Application keys. Application keys are the client ID and client secret.

Once you have your client ID, you can use it to generate an access token. Requests to Subscriptions require an `Authorization` header containing your access token. 

This guide uses the `implicit` grant type. This grant type can be thought of as read only and is most commonly used on the client side. See [Authentication](https://beta.elasticpath.dev/docs/authentication) for more information about tokens.

## Best Practices

The following steps describe how to authenticate in Subscriptions.

1. [Get your Application keys](#get-your-api-keys).
2. [Get an `access_token`](#get-an-access-token). 

## Get your Application keys

You must: 

1. Get your [Application Keys](https://beta.elasticpath.dev/docs/commerce-manager/application-keys/application-keys-cm). 
2. Make a copy of your `client_id`.

## Get an access token

You can use the `client_id` to make your request.

1. Make your API request where `XXXX` is replaced with your `client_id`.

    ```sh
    curl -X POST https://useast.api.elasticpath.com/oauth/access_token \
      -d "client_id=XXXX" \
      -d "grant_type=implicit"
    ```

    The response contains the token in the field `access_token`.

    ```javascript
    {
      "expires": 1537779121,
      "identifier": "implicit",
      "expires_in": 3600,
      "access_token": "0e82127a8d9c20abb3d6e48561cbfe81448956ab",
      "token_type": "Bearer"
    }
    ```

2. Make a copy of your `access_token`. This is your implicit `Bearer` token that is required for future requests.

:::note
You need to re-authenticate when the `access_token` expires.
:::
