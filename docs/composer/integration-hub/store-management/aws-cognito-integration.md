---
title: Integrating with Amazon Cognito
nav_label: Amazon Cognito Integration
sidebar_position: 10
---

You can integrate Commerce with Amazon Cognito using the **Integrations Hub** in Commerce Manager. This allows you to offer your customers or business users Single Sign-on (SSO) using Amazon Cognito credentials instead of Commerce credentials. When you create an Amazon Cognito integration, an Amazon Cognito user pool is created. Your customers can then sign-in directly using the user pool.

Commerce has two per-store, pre-set authentication realms.

- Buyer Organization. A Buyer Organization is for customers who buy products from your store.
- Merchant Organization. A Merchant Organization is for business user's who log in to Commerce Manager to modify a store's settings or catalogs.

You can enable Single Sign-on (SSO), using Amazon Cognito in a Buyer Organization realm, a Merchant Organization realm, or both.

:::note
Amazon Cognito provides the capability to federate identity from other providers like, Facebook, Google, Amazon, Apple, SAML-based and OIDC providers. This is not available as part of this integration.
:::

For more information, watch a video.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Y0mv--xczX8" title="Integrating with AWS Cognito" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Understanding Amazon Cognito Integration Request Templates

The Amazon Cognito Integration uses the following Amazon Cognito API requests to create/update user pools and user pool clients.

- [CreateUserPool](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_CreateUserPool.html).
- [UpdateUserPool](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateUserPool.html).
- [CreateUserPoolClient](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_CreateUserPoolClient.html).
- [UpdateUserPoolClient](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateUserPoolClient.html).

The Amazon Cognito Integration Request Templates contain all the parameters required for the Amazon Cognito Integration to function correctly. You can edit these templates, when configuring your Amazon Cognito Integration, to change or add any additional parameters that Amazon Cognito provide, depending on your business requirements. For example, you may want to change the password policies.

There are some parameters that you must not change. 

**Create User Pool Request Template**

```json
{ 
  "PoolName": "{{poolName}}"
}
```

**Update User Pool Request Template**

```json
{
  "UserPoolId": "{{userPoolId}}"
}
```

**Create User Pool Client Request Template**

```json
{
          "UserPoolId": "{{userPoolId}}",
          "ClientName": "{{poolName}}"
}
```

**Update User Pool Client Request Template**

 ```json
{
  "UserPoolId": "{{userPoolId}}",
  "ClientName": "{{poolName}}"
}
  "CallbackURLs": [
  {% for url in callbackUrl %}
  {% unless forloop.first %},{% endunless %}
  "{{url}}"
  {% endfor %}
  ]`
 ```

## Prerequisites

When configuring your Amazon Cognito Integration in **Integrations Hub**, you need to provide some or all of the following information, depending on your requirements.

### Configuring Amazon Cognito Prerequisites

When configuring your Amazon Cognito Integration in **Integrations Hub**, you must provide your AWS region, for example, `us-east-1`.

In addition, you may optionally want to configure the following:

- You can enable Multi-Factor Authentication (MFA).
- You can set-up Short Message Service (SMS) Settings. See [SMS message settings for Amazon Cognito user pools](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-sms-settings.html)
- You can customize a page hosted in Amazon Cognito, for example, include a logo or define CSS. See [Customizing the built-in app UI to sign up and sign in users](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-ux.html).

### Configuring Commerce Prerequisites

If you want to use Amazon Cognito with an Commerce Merchant Organization realm, configure a Merchant Organization prefix. You can configure this in Commerce Manager in **SYSTEM** > **Store Settings** > **Authentication Management**. The prefix field is available from the **Enter your store's prefix** drop-down list during login to determine the Commerce Merchant realm that your business users log in to. See [Merchant Organization: URL prefix](/docs/authentication/single-sign-on/openid).

## Collecting Your Setup Information

Before you begin configuring your Amazon Cognito integration in Commerce Manager, you need to collect the necessary setup information from Amazon Cognito and Commerce Manager.

### Collecting Amazon Cognito Setup Information

Collect the following Amazon credentials. See [Create an AWS access key](https://aws.amazon.com/premiumsupport/knowledge-center/create-access-key/).

| Amazon Cognito Connection | Description                 |
|:-----------------------|:----------------------------|
| **Access Key ID**      | Your AWS Access Key ID.     |
| **Secret Access Key**  | Your AWS Secret Access Key. |

### Collecting Commerce Manager Setup Information

Collect the following Commerce API keys. You can find this information in **SYSTEM** > **Application Keys** in Commerce Manager when logged in as a user with Seller Admin privileges. See [Application Keys](/docs/authentication/application-keys/application-keys-overview).

| Commerce API Key | Description                            |
|:------------------------------------|:---------------------------------------|
| **Token URL**                       | Your Commerce API Token URL. For example, `api.motlin.com/oauth/<access_token>` (EU) or `useast.api.elasticpath.com/oauth/<access_token>` (US). |
| **Client ID**                       | Your Commerce Client ID. |
| **Client Secret**                   | Your Commerce Client Secret. |

:::note
When integrating with third-party providers, we recommend you use the closest region in the third-party service to reduce latency as much as possible. See [Regions and URLs table](/guides/Getting-Started/elastic-path-domains#regions-and-ur-ls).
:::

## Configuring the Amazon Cognito Integration

Once you have:

- [Understood the prequisites](#prerequisites).
- [Collected your setup information](#collecting-your-setup-information).

You are ready to configure the Amazon Cognito integration in **Integrations Hub**.

1. In Commerce Manager, go to **COMPOSER** > **Integrations Hub**.
1. Under **SSO**, click **Amazon Cognito**. The **Amazon Cognito** integration guides you through the steps you need to follow to complete the integration.
1. Click **Configure**. The **Trigger details** consist of some details about the **Amazon Cognito** integration.
1. Click **Next**. The **Configuration** page is displayed.
1. Complete the information in the **Configuration** page.

    - **Client-ID**  - Your Commerce Client ID.
    - **Client-Secret** - Your Commerce Client Secret.
    - **Token URL** - Your Commerce API Token URL.

1. Click **Connect** to make sure that the authentication is completed successfully.
1. Complete the Amazon Cognito credentials.

    - **Access Key ID**  - Your AWS Access Key ID.
    - **Secret Access Key** - Your AWS Secret Access Key.
1. In **AWS Region**, provide your AWS region, for example, `us-east-1`.
1. In **User Pool Name**, type the name you want to use for your user pool. By default, this is **EPCC**.
1. In **User Pool Domain Name**, type the domain name you want to use for your user pool. It must be unique. We recommend that your domain name is alphanumeric and you only use the `-` special character. The domain is in the format of https://*<domain_prefix>*.auth.<*region*>.amazoncognito.com. For example, if your domain name is `elasticpath-commerce-cloud` and your AWS region is `us-east-1` then your login URL is `elastic-path-commerce-cloud.auth.us-east-1.amazoncognito.com`. The Amazon Cognito Integration creates a subdomain within an Amazon Cognito domain. If you want to use your business domain, then you must configure this directly in Amazon Cognito.
1. In **OIDC Profile Name**, provide the name of the Commerce OIDC profile.
1. Click **Next**. The **Buyer Organization** configuration page is displayed.
1. If you want to enable Amazon Cognito in your Buyer Organization, turn on the **Enable Buyer Organization** toggle.
1. (Optional) In **SSO Callback URL (Storefront)** you can add additional storefront callback URLs. Once your customer has successfully logged in, you want Amazon Cognito to redirect them to your storefront. You may have a different storefront for different geographical regions, for example, US and UK, but you want to use the same Amazon Cognito User Pool. In this scenario, you can give a storefront callback URL for each region. Select **Add value** to add a maximum of 5 URLs.
1. Click **Next**. The **Merchant Organization** configuration page is displayed.
1. If you want to enable Amazon Cognito in your Merchant Organization, turn on the **Enable Merchant Organization** toggle.
1. In **SSO Prefix (Merchant)**, provide your Merchant Organization prefix. The prefix field is used during login to determine the Commerce Merchant realm that your business users log in to.
1. Click **Next**. The **Templates** configuration page is displayed. You can use the default request templates provided by the Amazon Cognito Integration or you can edit them, depending on your requirements. For example,  you may want to change the password policies. Click **Edit** for the request template you want to edit. However, there are some parameters that you must not change. See [Understanding Amazon Cognito Integration Request Templates](/docs/composer/integration-hub/store-management/aws-cognito-integration).
1. Click **Finish**. Your integration is enabled.

## Using Amazon Cognito Integration

To change any configuration details in your Amazon Cognito integration, open your Amazon Cognito Integration and go to **Summary** > **Reconfigure**.

In addition, from **Summary**, you can view, pause, or delete your Amazon Cognito integration.

If there is an update to the Commerce Amazon Cognito integration, a message is displayed in **Summary**. Click **Update** to update your integration. Walk through the steps to configure your integration.

## Troubleshooting the Amazon Cognito Integration

You can debug any issues in **Executions**. Click an execution to see the execution details. The **Logs** shows the output and any errors or warnings.

From **Step Outputs**, you can do the following.

1. Select **Integration Trigger** to see any errors when the integration was triggered.
1. Select **List User Pool** to see the details of the Amazon Cognito User Pool.

Select **Retry** to initiate an execution again.
