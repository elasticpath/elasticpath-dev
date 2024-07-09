---
title: Single sign-on with OpenID Connect with Account Management Authentication Token
nav_label: Single sign-on with OpenID Connect with Account Management Authentication Token
sidebar_position: 10
---

The single sign-on APIs allow you to authenticate accounts with a single sign-on flow that uses the OpenID Connect protocol.

## Prerequisites

If you want to follow along, you need the following:

- A Commerce account and the Client ID and Client Secret of your store, available from your [Commerce Manager](https://elasticpath.dev/docs/commerce-manager/).
- A front-end application or a custom application accessible to you in a web browser which accesses the Commerce API with the [implicit token](https://elasticpath.dev/docs/authentication/Tokens/implicit-token).
- A basic understanding of object-oriented programming or JavaScript.
- An [access token](https://elasticpath.dev/guides/Getting-Started/your-first-api-request#get-an-access-token).
- A [Redirect URL](https://elasticpath.dev/docs/commerce-manager/authentication#buyer-organization-adding-redirect-urls) that corresponds to the URL which your storefront is accessing Composable Commerce. This URL is used in the single sign-on flow.
- An [authentication provider](https://elasticpath.dev/docs/commerce-manager/authentication/) set up for your store that satisfies the requirements in the following section.
- A [OIDC profile](https://elasticpath.dev/docs/authentication/single-sign-on/openid-connect-profiles-api/create-an-oidc-profile)

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

The following list outlines the steps of the single sign-on authentication flow to get an Account Management Authentication Token:

1. [Get the account authentication settings](#get-the-account-authentication-settings)
1. [Get the list of configured single sign-on providers](#get-the-list-of-configured-single-sign-on-providers)
1. [Generate Proof Key for Code Exchange (PKCE) Parameters](#generate-proof-key-for-code-exchange-parameters)
1. [Add parameters to the authorization endpoint URL](#add-parameters-to-the-authorization-endpoint-url)
1. [Log in to the OpenID Connect provider](#log-in-to-the-open-id-connect-provider)
1. [Assign the Account Member to an Account](#assign-the-account-member-to-an-account)
1. [Use the authorization code to retrieve an Account Management Authentication Token](#use-the-authorization-code-to-retrieve-an-account-management-authentication-token)

### Get the account authentication settings

Use the Account Authentication Settings endpoint to get the `data.meta.client_id` and the `data.relationships.authentication_realm.data.id`.  Make a note of these values. You will need them later on.

#### Request
```sh
curl -X GET https://useast.api.elasticpath.com/v2/settings/account-authentication \
     -H "Authorization: Bearer XXXX" \
```

#### Response
```json
{
    "data": {
        "id": "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
        // Other fields...
        "relationships": {
            "authentication_realm": {
                "data": {
                    "id": "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
                    // Other fields...
                }
            }
        },
        "meta": {
            "client_id": "account-management"
        }
    },
    // Other Fields...
}

```
### Get the list of configured single sign-on providers

To continue with the single sign-on flow, get the list of configured providers. From the list of configured providers presented to the account member, they choose which provider to authenticate with.

The following request uses the `data.relationships.authentication_realm.data.id` value from the previous step.

#### Request

```sh
curl -X GET https://useast.api.elasticpath.com/v2/authentication-realms/:realm-id/oidc-profiles/ \
     -H "Authorization: Bearer XXXX"
```

#### Response
```json
{
    // Other fields...
    "data": [
        {
            "links": {
                "authorization-endpoint": "https://epcc-integration.global.ssl.fastly.net/oidc-idp/login/stores/45b93fd2-3bfe-4ca2-ab66-924d054ff548/authentication-realms/447b6016-56f9-4fbc-8f13-ff12df1c98e9?elasticpath_commerce_cloud_profile_id=38da28ae-0391-4c0c-8e10-d737f1943371",
                // Other links...
            },
            "id": "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
            // Other fields...
        },
        // Other ODIC profiles...
    ],
}

```

Make a note of the `authorization-endpoint` link.

If this returns zero OIDC profiles, you will need to [create a OIDC Profile](https://elasticpath.dev/docs/authentication/single-sign-on/openid-connect-profiles-api/create-an-oidc-profile), as part of the pre-requisites. 

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

- `&scope=openid+email`
- `&response_type=code`
- `&client_id=`
- `&redirect_uri=`
- `&state=`
- `&code_challenge_method=S256`
- `&code_challenge=`

The `client_id` should be the value retrieved from [Account Authentication Settings](#get-the-account-authentication-settings) which was found at `data.meta.client_id`. The `redirect_uri` is set up as part of the [Prerequisites](#prerequisites). The `state` parameter should be a hard to guess random value unique to each request.

For more information on parameters `scope`, `response_type`, `client_id`, `redirect_uri`, and `state`, see the [OpenID Connect Specification](https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest). The `code_challenge` and `code_challenge_method` parameters should be set to the values in [the previous section](#generate-proof-key-for-code-exchange-parameters).

### Additional parameters to the authorization endpoint URL

The [OpenID Connect Specification](https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest) specifies some optional parameters that can be set to control the behaviour of the Identity Provider.

- `display` - Specifies how the authentication request is shown to the user.
- `prompt` - Controls whether the user is required to reauthenticate.
- `ui_locales` - Control the language that the login screen uses.

Commerce forwards these values to the configured Identity Provider, and you should consult your Identity Providers documentation to determine the allowed values.

### Log in to the OpenID Connect provider

The Composable Commerce application should now redirect the user to the modified `authorization-endpoint` link, which begins the single sign-on flow for the user.

### Assign the Account Member to an Account
When setting up for the first time, if the user is not yet assigned, they will be  categorized as an unassigned member. If the account member is already assigned, skip over to [Use the authorization code to retrieve an Account Management Authentication Token](#use-the-authorization-code-to-retrieve-an-account-management-authentication-token).

#### Request
```sh
curl -X GET https://useast.api.elasticpath.com/v2/accounts/:id/account-memberships/unassigned-account-members \
     -H "Authorization: Bearer XXXX"
```

#### Response
```json
{
    "data": [
        {
            "id": "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
            "type": "account_member",
            "name": "John Smith",
            "email": "jsmith@example.com",
            // Other fields...
        }
    ],
    // Other fields...
}
```
Make a note of the `data[x].id`,  which will be used as the `account_member_id` when creating an account membership.

#### Request
```sh
curl -X POST https://useast.api.elasticpath.com/v2/accounts/:id/account-memberships \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
        "data":{
          "type": "account_membership",
          "account_member_id": "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"
        }
     }'
```
#### Response
```json
{
    "data": {
        "id": "YYYYYYYY-YYYYY-YYYY-YYYY-YYYYYYYYYY",
        "type": "account_membership",
        "relationships": {
            "account_member": {
                "data": {
                    "id": "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
                    "type": "account_member"
                }
            }
        }
        // Other fields...
    },
    // Other fields...
}

```

The account member will now be associated to an account.

### Use the authorization code to retrieve an Account Management Authentication Token

After the [Log in to the OpenID Connect provider](#log-in-to-the-openid-connect-provider) step, the user follows a series of redirects to authenticate. Eventually, they are redirected back to this Composable Commerce application, with some additional parameters as described in [Successful Authentication Response](https://openid.net/specs/openid-connect-core-1_0.html#AuthResponse).

After validating that the `state` parameter matches the value sent in the [Add parameters to the Authorization Endpoint URL](#add-parameters-to-the-authorization-endpoint-url) section, the Composable Commerce application can use the `code` parameter in the URL, and the `code_verifier` from the [Generate Proof Key for Code Exchange (PKCE) Parameters](#generate-proof-key-for-code-exchange-pkce-parameters) section to get an [Account Management Authentication Token](https://elasticpath.dev/docs/api/accounts/post-v-2-account-members-tokens).

Request an Account Management Authentication Token using the `oidc` as the `authentication_mechanism`. Use `code` generated as the `oauth_authorization_code`, `code_verifier` as `oauth_code_verifier`, and provide the redirect URI of the store, which handled the response.

#### Request

```sh
curl -X POST https://useast.api.elasticpath.com/v2/account-members/tokens \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
        "data":{
          "type": "account_management_authentication_token",
          "authentication_mechanism": "oidc",
          "oauth_authorization_code":  "VhFRaED2NO7IYBT9JLN2tT6g5GQ",
          "oauth_redirect_uri": "https://example-store.com",
          "oauth_code_verifier": "yh23GgNYJg0DyyvprUuJLn-Imj_ty55XGjVJUm2DtzY"
        }
     }'
```

#### Response
```json
{
    "meta": {
        "account_member_id": "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
        // Other fields
    },
    "data": [
        {
            "account_name": "Bluefuse",
            "account_id": "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X21lbWJlcl9zZWxmX21hbmFnZW1lbnQiOiJkaXNhYmxlZCIsImFuY2VzdG9ycyI6IiIsImV4cCI6MTcxOTUzMTkyNCwiaWF0IjoxNzE5NDQ1NTI0LCJyZWFsbV9pZCI6IjQ0N2I2MDE2LTU2ZjktNGZiYy04ZjEzLWZmMTJkZjFjOThlOSIsInNjb3BlIjoiZWE5ZGNmMGYtZjQ1YS00OTNiLWE5MWUtY2ExMDA2MTkyMmM1Iiwic3RvcmVfaWQiOiI0NWI5M2ZkMi0zYmZlLTRjYTItYWI2Ni05MjRkMDU0ZmY1NDgiLCJzdWIiOiJkNTM5NjI2My0xODVmLTRhNTMtOTk0NC1kY2Q1ZTEwZDViMWEifQ.IHHW7cjqhRmItJ7bpBglMEi8wAsAXJ7vRoGF3bdI0KE",
            "type": "account_management_authentication_token",
            "expires": "2024-06-27T23:45:24.070Z"
        }
    ],
    // Other fields
}
```

For more information, see [Authentication Response Validation](https://openid.net/specs/openid-connect-core-1_0.html#AuthResponseValidation) in the OpenID specification.

## Related Resources

- [Account Management Authentication Tokens API](https://elasticpath.dev/docs/api/accounts/post-v-2-account-members-tokens)
