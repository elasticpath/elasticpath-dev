---
title: Authentication Management
nav_label: Authentication Management
sidebar_position: 10
---

The Authentication Management tab is used to configure one or more single sign-on authentication providers. Single sign-on is used to verify a user’s identity using the OpenID Connect protocol, without saving user information such as a password.

:::caution
Changing these settings affects how customers authenticate with your store. Any misconfiguration might prevent users from authenticating.
:::

For more information, see [Single sign-on and authentication](/docs/authentication/single-sign-on/openid) and [Single sign-on with OpenID Connect](https://elasticpath.dev/guides/How-To/Authentication/get-single-sign-on-account-management-token).

:::caution
To set up single sign-on for customers of your store, use the **Buyer Organization** realm. To set up single sign-on for store administrators and developers, use the **Merchant Organization** realm.
:::

## Merchant Organization

To log into the correct store’s Commerce Manager as a developer or administrator when using single sign-on, you must:

- set a *URL prefix* for your store’s Merchant Organization realm.
- Add an OpenID provider 

:::note
This prefix must be unique, and comprised of between two and 24 alphanumeric characters.
:::

1. On the **System > Store Settings > Authentication Management** tab, click **Merchant Organization** realm.

1. In the **Edit Configuration** area for the realm, enter your URL prefix.

   You enter the URL prefix every time you log in to Commerce Manager.

1. Click **Save** to save the configuration.
1. Select **+ Add New Provider**.
1. Provide the following information.

     | Option | Required | Description                                                                                                                                                                   |
     | --- | --- |-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
     | **Name** | Required | A name for your OpenID provider. This is the name displayed to shoppers in your storefront.                                                                                   |
     | **Discovery URL** | Required | The URL where the OpenID Connect authentication configuration is found. This is often the URL of the provider. For example: `https://<URL>/.well-known/openid-configuration`. |
     | **Client ID** | Required | The client identifier that Composable Commerce uses to identify itself with the authentication provider.                                                                      |
     | **Cient Secret** | Required | A secret code known only to Composable Commerce and the authentication provider.                                                                                              | 
1. Click **Save** to save the configuration.

After you have properly configured one or more authentication providers, when customers open the **Login** dialog box, a **Login with [provider]** button is available for single sign-on authentication workflow.

## Account Management Realm

You can use the **Account Management Realm** to configure single sign-on and Open ID Connect providers for your accounts and account members in your Commerce stores. This allows shoppers with Commerce accounts to access multiple applications and services with a single set of credentials, streamlining the login process and reducing the need for multiple usernames and passwords.

When configuring single sign-on in **Account Management Realm**, do the following:

- (required) provide the client redirect URIs. These tell Commerce which URI a shopper should be redirected to when authentication completes.
- (required) add the Open ID provider through which shoppers will authenticate.
- (optional) Provide a password profile for your Open ID providers.
- (required) Configure the **Account Authentication Settings**.

The steps below describe how to configure accounts and account members to use single sign-on.

1. Go to **Store Settings** > **Authentication Management**.
1. Select **Account Management Realm**.
1. In **Client Redirect URIs**, enter all the client redirect URIs. These are the pages on your storefront where you want shoppers with accounts to be able to sign in to an Open ID provider. 
1. In **OpenID Providers**, select **+ Add New Provider**.
1. Provide the following information.

    | Option | Required | Description                                                                                                                                                                     |
    | --- | --- |---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | **Name** | Required | A name for your OpenID provider. This is the name displayed to shoppers in your storefront.                                                                                     |
    | **Discovery URL** | Required | The URL where the OpenID Connect authentication configuration is found. This is often at the URL of the provider. For example: `https://<URL>/.well-known/openid-configuration` |
    | **Client ID** | Required | The client identifier that Composable Commerce uses to identify itself with the authentication provider.                                                                        |
    | **Cient Secret** | Required | A secret code known only to Composable Commerce and the authentication provider.                                                                                                                                                                                | 
1. Click **Save** to save the configuration.
1. In **Password Profiles**, select **+ Add New Password Profile**. 
1. Provide the following information.

    | Option          | Required | Description                                                                                                          |
    |-----------------| --- |----------------------------------------------------------------------------------------------------------------------|
    | **Name**            | Required | A name for your password profile.                                                                                    |
    | **Username format** | Required | The username format required by the system or application where the usernames are used. Either **Email** or **Any**. |

1. In **Account Authentication Settings**, configure the following settings:

    - Turn on the **Enable Self-Signup** toggle if your application or service allows shoppers to sign up by completing a registration form, if they are not already registered. 
    - Turn on the **Enable Auto Create Account for Account Members** toggle if you want to automatically create an account for a shopper who is signing in but does not yet have an account.
    - Turn on the **Enable Account Member Self Management** if you wish to allow shoppers to automatically create their accounts in Commerce by completing a registration form, if they do not already have accounts.

After you have properly configured one or more authentication providers, when customers open the **Login** dialog box, a **Login with [provider]** button is available for single sign-on authentication workflow.

## Buyer Organization

When the storefront begins the single sign-on flow for an end user or customer, it must tell Commerce which URI the user should be redirected to when the authentication completes. This is the `redirect_uri` parameter discussed in [Single sign-on with OpenID Connect](/docs/customer-management/customer-management-api/customer-tokens). These URLs must be explicitly listed as *Redirect URIs* to prevent phishing and other security vulnerabilities.

1. On the **System** > **Store Settings** > **Authentication Management** tab, click **Buyer Organization** realm.

1. In the **Edit Configuration** area for the realm, enter redirect URIs.

   You can view the list of redirect URIs as tags or as a comma-separated list.

1. Click **Save** to save the configuration.
1. In **OpenID Providers**, select **+ Add New Provider**.
1. Provide the following information.

   | Option | Required | Description                                                                                                                                                                     |
   | --- | --- |---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
   | **Name** | Required | A name for your OpenID provider. This is the name displayed to shoppers in your storefront.                                                                                     |
   | **Discovery URL** | Required | The URL where the OpenID Connect authentication configuration is found. This is often at the URL of the provider. For example: `https://<URL>/.well-known/openid-configuration` |
   | **Client ID** | Required | The client identifier that Composable Commerce uses to identify itself with the authentication provider.                                                                        |
   | **Cient Secret** | Required | A secret code known only to Composable Commerce and the authentication provider.                                                                                                                                                                                | 
1. Click **Save** to save the configuration.


After you have properly configured one or more authentication providers, when customers open the **Login** dialog box, a **Login with [provider]** button is available for single sign-on authentication workflow.
