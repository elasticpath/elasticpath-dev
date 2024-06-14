---
title: Shopper Single Sign-On
nav_label: Shopper Single Sign-On
sidebar_position: 30
---

Most shoppers have separate accounts on various websites and applications. For example, a Google account, Facebook, online banking, streaming services, and so on. Instead of requiring your shoppers to create yet another account, you can implement single sign-on in Studio. 

Using single sign-on allows shoppers using Studio storefronts to access multiple applications and services with a single set of credentials, streamlining the login process and improving your shoppers experience of your online store. In addition, you can gather more comprehensive user data preferences, enabling you to deliver more personalized shopping experiences. 

Studio single sign-on uses OpenID Connect (OIDC). OpenID Connect provides a standardized and secure way for Studio storefronts to authenticate your shopper and obtain their basic profile information. 

Studio single sign-on is available using the OIDC account settings configured in Elastic Path Composable Commerce. See [Authentication Management](/docs/commerce-manager/authentication#account-management-realm). 

In Studio, the OIDC account setting is enabled as part of the **Elastic Path** integration. See Elastic Path Integration. Once the connection to Elastic Path Composable Commerce is created, the OIDC account and password profile settings configured in Elastic Path Composable Commerce are available in Studio.

The following steps provide an overview of how to configure single sign-on for shoppers.

1. In Commerce Manager, in **Store Settings**, go to **Authentication Management**. 
2. In **Account Management Realm**, you can see a list of your Open ID providers. You must have an Open ID Provider set up for each service or application where you want to configure single sign-on.
3. Optionally, you can provide a password profile for your Open ID providers. 
4. In **Client Redirect URIs**, you need to provide the client redirect URI for all the pages in your Studio storefront where you provide your shoppers with the ability to sign in to one of your Open ID providers. For example, checkout, orders, account pages, and so on.

    For more information, see [Account Management Realm](/docs/commerce-manager/authentication).

5. In Studio, configure an **Elastic Path** integration, ensuring that **Enable OIDC connect** is checked.
6. Once you have created the **Elastic Path** integration, when you go to your storefront page, for example, your checkout page, a new **Sign in** field is enabled.

![sign in](/assets/studio/signin.png)

7. If you select **Sign in**, you are redirected to the Account page.

![sso login](/assets/studio/sso-login.png)

8. Select the OpenID provider you want to use. You are redirected to the sign in pages for the OpenID provider you chose.

![sso google](/assets/studio/sso-google.png)

    









