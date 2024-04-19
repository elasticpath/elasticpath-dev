---
title: Configure PayPal Express Checkout in Commerce Manager
nav_label: Configure PayPal Express Checkout in Commerce Manager
sidebar_position: 2
---

## Onboarding PayPal Express Checkout

If you have signed up to PayPal Express Checkout, you need to configure it with Composable Commerce to allow your customers to use PayPal Express Checkout to check out their purchases. In Commerce Manager, you can:

1. Test a sandbox account in [developer.paypal.com](https://developer.paypal.com/).
1. Enable PayPal Express Checkout in your production environment.

Follow the instructions below or, alternatively, watch a video:

{% youtube src="https://www.youtube.com/embed/07pKiaKc1ds" label="Configuring Paypal Express Checkout" /%}

## Testing PayPal Express Checkout in Commerce Manager

1. Go to **System > Store Settings > Payment Gateways**. A list of payment gateways that you have available is displayed. Initially, the status of PayPal Express Checkout is **Disable**.
1. Click **PayPal Express Checkout**. The **Edit PayPal Express Checkout** page is displayed. Initially, the **Onboarding Status** is **Incomplete**.
1. Select the **Enabled** checkbox to make PayPal Express Checkout available in Commerce Manager.
1. Select the **Test Mode** checkbox.
1. Click **PayPal Onboarding**.
1. Type the email address for the sandbox account that you want to use. You can go to [developer.paypal.com](https://developer.paypal.com/) to find or create a sandbox account.
1. From **Country or region** drop-down list, select the region where your sandbox account is configured.
1. Click **Next**.
1. Type your password and click **Log In**.
1. Confirm your email address to activate your account by clicking **Go back to Test Store**.
1. In **Edit PayPal Express Checkout**:

    - **Onboarding Status** changes to **Connected successfully** and,
    - **Account ID** is automatically filled with your PayPal Account ID. This means this store is ready to take transactions with PayPal Express Checkout.

    :::note
    When you manually enter the PayPal Account ID in the **Account ID** field in Commerce Manager, make sure that there is no space before and after the **Account ID** to avoid `400` error while using a `purchase` or `authorize` method to make a payment in postman.
    :::

    If you receive any onboarding errors, fix the errors and run onboarding again or contact PayPal Support.

1. Click **Save**.
1. You can test this with a different sandbox account at any time by clicking **PayPal Onboarding** and re-running PayPal onboarding. Re-running PayPal onboarding overwrites the existing Account ID.
1. You can disable PayPal Express Checkout at any time by deleting your PayPal Account ID from **Account ID** or by by clearing the **Enabled** checkbox on the **Edit PayPal Express Checkout** page.

## Enabling PayPal Express Checkout in Live Mode in Commerce Manager

1. Go to **System > Store Settings > Payment Gateways**. A list of payment gateways that you have available is displayed. Initially, the status of PayPal Express Checkout is **Disable**.
1. Click **PayPal Express Checkout**. The **Edit PayPal Express Checkout** page is displayed. Initially, the **Onboarding Status** is **Incomplete**.
1. Select the **Enabled** checkbox to make PayPal Express Checkout available in Commerce Manager.
1. If selected, clear the **Test Mode** checkbox. **Test Mode** checkbox must be cleared to enable PayPal Express Checkout in a production environment.
1. Click **PayPal Onboarding**.
1. Type the email address of the live account you want to use. You can use an existing account or create a new one, depending on your requirements.

    - If this is a new email address, complete the registration form, setup your profile, and agree to the conditions to create a new account.
    - If this is an existing email address, follow the instructions to login.

1. Confirm your email address to activate your account by clicking **Go back to Elastic Path Software Inc.**.
1. In **Edit PayPal Express Checkout**:

    - **Onboarding Status** changes to **Connected successfully** and,
    - **Account ID** is automatically filled with your PayPal Account ID. This means this store is ready to take transactions with PayPal Express Checkout.

    :::note
    When you manually enter the PayPal Account ID in the **Account ID** field in Commerce Manager, make sure that there is no space before and after the **Account ID** to avoid `400` error while using a `purchase` or `authorize` method to make a payment in postman.
    :::

    If you receive any onboarding errors, fix the errors and run onboarding again or contact PayPal Support.

1. Click **Save**. From PayPal Express platform, you can verify that Elastic Path is onboarded to PayPal Express. Watch the following video:
        
        {% youtube src="https://www.youtube.com/embed/M-ILzcZreM4" label="Verifying Elastic Path to Paypal Express Checkout" /%}

1. You can change your PayPal Account ID at any time by clicking **PayPal Onboarding** and re-running PayPal onboarding. Re-running PayPal onboarding overwrites the existing Account ID.
1. You can disable PayPal Express Checkout at any time by deleting your PayPal Account ID from **Account ID** or by clearing the **Enabled** checkbox on the **Edit PayPal Express Checkout** page.
