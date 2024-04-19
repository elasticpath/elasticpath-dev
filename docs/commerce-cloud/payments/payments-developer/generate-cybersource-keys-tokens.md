---
title: Generate CyberSource Keys and Tokens
nav_label: Generate CyberSource Keys and Tokens
sidebar_position: 7
---

## Prerequisites

- Ensure that you have a test account in the [CyberSource sandbox](https://developer.cybersource.com/docs/cybs/en-us/platform/developer/all/rest/rest-getting-started/restgs-register.html).

- Enable CyberSource Token Management Service. Contact CyberSource support.

  :::caution
  If you have not enabled the Token Management Service, all payment transactions are blocked. For more information about the service not being enabled, see the [Visa Developer Community](https://community.developer.visa.com/t5/Sandbox-Test-Data/Recurring-Billing-or-Secure-Storage-service-is-not-enabled-for/m-p/6415).
  :::

## Generating CyberSource Keys

1. Log into the [CyberSource sandbox](https://developer.cybersource.com/docs/cybs/en-us/platform/developer/all/rest/rest-getting-started/restgs-register.html).

1. Go to **Payment Configuration** > **Key Management**.

1. Click **+Generate key**.

1. Select **SOAP Toolkit**. 

1. Click **Generate key**.

    Make sure to copy the **Soap toolkit key** value or click **Download key**.

1. In Commerce Manager, go to **SYSTEM > Store Settings**. 

1. Go to **Payment Gateways** tab and select **CyberSource**.

1. Enter your **Merchant ID** as the username and your **Soap toolkit key** value as the password.

1. Select the **Test mode** checkbox.

1. Click **Save**.

## Generating Tokens

This walkthrough shows you how to generate CyberSource tokens from credit card numbers.

1. Log into the [CyberSource sandbox](https://developer.cybersource.com/docs/cybs/en-us/platform/developer/all/rest/rest-getting-started/restgs-register.html).

1. Go to **Token Management** > **Tokens**.

1. Click **NEW PROFILE**.

1. Enter the following:

    -  **Order Information**
    - **Payment Information**
    - **Customer Information**
    - **Shipping Information**
    - **Profile Information**

1. Click **SAVE**.

    The **Profile ID** displayed in the **Profile List** is the token required to process the payment. Copy the token value and prefix it with six `(;)` semicolons. For example,  `;;;;;;11234FS5353FGFRSS2562`.

    ![Token Management](/assets/token-management.png)

    CyberSource has sample credit card numbers for testing purposes. For more information, see the [CyberSource Testing Guide](https://developer.cybersource.com/hello-world/testing-guide.html).

    For examples about how to integrate Flex API and Microform on the frontend, use the [Secure Acceptance Flexible Token SDK](https://developer.cybersource.com/api/developer-guides/dita-flex/SAFlexibleToken/FlexAPI/sa_flexible_token_SDK.html).
