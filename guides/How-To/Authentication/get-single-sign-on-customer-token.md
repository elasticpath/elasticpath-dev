---
title: Single sign-on with OpenID Connect
nav_label: Single sign-on with OpenID Connect
sidebar_position: 10
---

The single sign-on APIs allow you to authenticate customers with a single sign-on flow that uses the OpenID Connect protocol.

## Prerequisites

If you want to follow along, you need the following:

- A Commerce account and the Client ID and Client Secret of your store, available from your [Commerce Manager](https://beta.elasticpath.dev/docs/commerce-manager/).
- A front-end application or a custom application accessible to you in a web browser which accesses the Commerce API with the [implicit token](https://beta.elasticpath.dev/docs/authentication/Tokens/implicit-token).
- A basic understanding of object-oriented programming or JavaScript.
- An [access token](https://beta.elasticpath.dev/guides/Getting-Started/your-first-api-request#get-an-access-token).
- A [Redirect URL](https://beta.elasticpath.dev/docs/commerce-manager/authentication#buyer-organization-adding-redirect-urls) that corresponds to the URL which your storefront is accessing Composable Commerce. This URL is used in the single sign-on flow.
- An [authentication provider](https://beta.elasticpath.dev/docs/commerce-manager/authentication/) set up for your store that satisfies the requirements in the following section.

## Requirements for Authentication Providers

An authentication provider for Commerce must have the following characteristics:

- Compatible with OpenID Connect.
- Supports authentication using the `client_secret_basic` authentication method.
- Allows authentication using the Authorization Code Flow.
- Supports the `email` scope and returns an email for each user in the resulting claims.
- Publishes an OpenID Connect Discovery document.
- Does not encrypt the ID token nor the UserInfo Endpoint response.
- Has a generated ID token that contains only the `client_id` configured in Commerce.
- Does not require the use of the nonce parameter or the `acr_values` parameter as part of the Authentication Request.
- Does not rely on the `auth_time` claim being validated in ID token Validation.

## Step-by-step Walkthrough

The following list outlines the steps of the single sign-on authentication flow to get a customer token:

1. [Get the customer authentication settings](#get-the-customer-authentication-settings)
1. [Get the list of configured single sign-on providers](#get-the-list-of-configured-single-sign-on-providers)
1. [Generate Proof Key for Code Exchange (PKCE) Parameters](#generate-proof-key-for-code-exchange-parameters)
1. [Add parameters to the authorization endpoint URL](#add-parameters-to-the-authorization-endpoint-url)
1. [Log in to the OpenID Connect provider](#log-in-to-the-open-id-connect-provider)
1. [Use the authorization code to retrieve a customer token](#use-the-authorization-code-to-retrieve-a-customer-token)

### Get the customer authentication settings

Use the Customer Authentication Settings endpoint to get the `client_id` and the `realm_id`.  Make a note of these values. You will need them later on.

```sh
curl -X GET https://useast.api.elasticpath.com/v2/customer-authentication-settings \
     -H "Authorization: Bearer XXXX" \
```

### Get the list of configured single sign-on providers

To continue with the single sign-on flow, get the list of configured providers. From the list of configured providers presented to the customer, they choose which provider to authenticate with.

The following request uses the `realm_id` value from the previous step.

```sh
curl -X GET https://useast.api.elasticpath.com/v2/authentication-realms/:realm-id/oidc-profiles/ \
     -H "Authorization: Bearer XXXX"
```

Make note of the `authorization-endpoint` link.

### Generate proof key for code exchange parameters

The OpenID Connect single-sign on flow used by Composable Commerce requires the use of Proof Key for Code Exchange (PKCE), an additional OAuth protection mechanism specified in [RFC 7636](https://tools.ietf.org/html/rfc7636).

To use PKCE, the client needs to generate three additional parameters:

- `code_verifier` - A hard-to-predict random value that is generated securely, as specified in [RFC 7636 - Section 4.1](https://tools.ietf.org/html/rfc7636#section-4.1)
- `code_challenge_method` - The mechanism in which the `code_verifier` is transformed. Commerce requires this to be `S256`.
- `code_challenge` - A transformed version of the `code_verifier` as specified in [RFC 7636 - Section 4.2](https://tools.ietf.org/html/rfc7636#section-4.2)

:::note
The [Commerce Reference Experience](https://github.com/elasticpath/epcc-react-pwa-reference-storefront) includes an MIT licensed library that can be used to generate these parameters [PkceUtilities.ts](https://github.com/elasticpath/epcc-react-pwa-reference-storefront/blob/5307e07dfa35a6debbd195db0cb79b7687d41c8c/src/LoginDialog/PkceUtilities.ts). In addition, there is an [example of usage](https://github.com/elasticpath/epcc-react-pwa-reference-storefront/blob/master/src/LoginDialog/OidcUtilities.ts#L26). For manual generation, you can use the [Online PKCE Generator Tool](https://tonyxu-io.github.io/pkce-generator/).
:::

### Add parameters to the authorization endpoint URL

The `authorization-endpoint` link retrieved from [Get the list of configured single sign-on providers](#get-the-list-of-configured-single-sign-on-providers) requires some additional parameters. Add the [required parameters](https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest) to begin the [OpenID Connect Authorization Code Flow](https://openid.net/specs/openid-connect-core-1_0.html#CodeFlowAuth).

- `&scope=openid email`
- `&response_type=code`
- `&client_id=`
- `&redirect_uri=`
- `&state=`
- `&code_challenge_method=S256`
- `&code_challenge=`

The `client_id` should be the value retrieved from [Customer Authentication Settings](#get-the-customer-authentication-settings). The `redirect_uri` is set up as part of the [Prerequisites](#prerequisites). The `state` parameter should be a hard to guess random value unique to each request.

For more information on parameters `scope`, `response_type`, `client_id`, `redirect_uri`, and `state`, see the [OpenID Connect Specification](https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest). The `code_challenge` and `code_challenge_method` parameters should be set to the values in [the previous section](#generate-proof-key-for-code-exchange-pkce-parameters).

### Additional parameters to the authorization endpoint URL

The [OpenID Connect Specification](https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest) specifies some optional parameters that can be set to control the behaviour of the Identity Provider.

- `display` - Specifies how the authentication request is shown to the user.
- `prompt` - Controls whether the user is required to reauthenticate.
- `ui_locales` - Control the language that the login screen uses.

Commerce forwards these values to the configured Identity Provider, and you should consult your Identity Providers documentation to determine the allowed values.

### Log in to the OpenID Connect provider

The Composable Commerce application should now redirect the user to the modified `authorization-endpoint` link, which begins the single sign-on flow for the user.

### Use the authorization code to retrieve a customer token

After the previous step, the user follows a series of redirects to authenticate. Eventually they are redirected back to this Composable Commerce application, with some additional parameters as described in [Successful Authentication Response](https://openid.net/specs/openid-connect-core-1_0.html#AuthResponse).

After validating that the `state` parameter matches the value sent in the [Add parameters to the Authorization Endpoint URL](#add-parameters-to-the-authorization-endpoint-url) section, the Composable Commerce application can use the `code` parameter in the URL, and the `code_verifier` from the [Generate Proof Key for Code Exchange (PKCE) Parameters](#generate-proof-key-for-code-exchange-pkce-parameters) section to get a [customer token](https://beta.elasticpath.dev/docs/commerce-cloud/customer-management/customer-management-api/customer-tokens).

Request a customer token using the `oidc` `authentication_mechanism`. Use `code` as the `oauth_authorization_code`, `code_verifier` as `oauth_code_verifier`, and provide the redirect URI of the store which handled the response.

```sh
curl -X POST https://useast.api.elasticpath.com/v2/customers/tokens \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
        "data":{
          "type": "token",
          "authentication_mechanism": "oidc",
          "oauth_authorization_code":  "c2490f06-6d8e-4927-99aa-4bf02b419e96",
          "oauth_redirect_uri": "https://example-store.com",
          "oauth_code_verifier": "0E934PurR8ExVg6Pj7T4kQewxKzWSfSFG5d15FGfww8"
        }
     }'
```

For more information, see [Authentication Response Validation](https://openid.net/specs/openid-connect-core-1_0.html#AuthResponseValidation) in the OpenID specification.

The response is the same as a [customer token](https://beta.elasticpath.dev/docs/commerce-cloud/customer-management/customer-management-api/customer-tokens#the-customer-token-object) requested using `email` and `password`, and can be used in the same [requests](https://beta.elasticpath.dev/docs/commerce-cloud/customer-management/customer-management-api/customer-tokens#using-a-token)

## Related Resources

- [Customer Tokens API](https://beta.elasticpath.dev/docs/commerce-cloud/customer-management/customer-management-api/customer-tokens)
