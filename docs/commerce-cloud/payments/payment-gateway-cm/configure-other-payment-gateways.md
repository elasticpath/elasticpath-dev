---
title: Configure other Payment Gateways in Commerce Manager
nav_label: Configure other Payment Gateways in Commerce Manager
sidebar_position: 4
---

## Enabling Stripe Connect

Ensure that you create a [Stripe account](https://dashboard.stripe.com/login) and make a note of your Stripe Account ID.

1. Log into Commerce Manager.
1. Go to **SYSTEM > Store Settings > Payment Gateways**.

    A list of available payment gateways is displayed. Initially, the **Stripe Connect** status is **Disabled**.
1. Click **Stripe Connect**.

    The **Edit Stripe Connect** page is displayed.
1. In the **Account ID** field, enter the Stripe account ID.
1. Select the **Enabled** checkbox to make Stripe Connect available in Commerce Manager.
1. (Optional) Select the **Test Mode** checkbox to use the test payment method.

    To enable Stripe Connect in the production environment, clear the **Test Mode** checkbox.
1. Click **Save**.

    The status of **Stripe Connect** is now **Enabled**.

1. (Optional) Disable **Stripe Connect** at any time by closing your account or clearing the **Enabled** checkbox on the **Edit Stripe Connect** page.

## Enabling Stripe

Ensure that you create a [Stripe account](https://dashboard.stripe.com/login) and make a note of your secret key.

1. Log into Commerce Manager.
1. Go to **SYSTEM > Store Settings > Payment Gateways**.

    A list of available payment gateways is displayed. Initially, the **Stripe** status is **Disabled**.
1. Click **Stripe**.
1. In the **Secret Key** field, enter the secret key that you copied from the [Stripe dashboard](https://dashboard.stripe.com/login).
1. Select the **Enabled** checkbox to make **Stripe** available in Commerce Manager.
1. Click **Save**.

    The status of **Stripe** is now **Enabled**.

## Enabling Stripe Payment Intents

Ensure that you create a [Stripe account](https://dashboard.stripe.com/login) and make a note of your secret key.

1. Log into Commerce Manager.
1. Go to **SYSTEM > Store Settings > Payment Gateways**.

    A list of available payment gateways is displayed. Initially, the **Stripe Payment Intents** status is **Disabled**.
1. Click **Stripe Payment Intents**.
1. In the **Secret Key** field, enter the secret key that you copied from the [Stripe dashboard](https://dashboard.stripe.com/login).
1. Select the **Enabled** checkbox to make **Stripe Payment Intents** available in Commerce Manager.
1. Click **Save**.

    The status of **Stripe Payment Intents** is now **Enabled**.

## Enabling Adyen

1. Log into Commerce Manager.
1. Go to **SYSTEM > Store Settings > Payment Gateways**.

    A list of available payment gateways is displayed. Initially, the **Adyen** status is **Disabled**.
1. Click **Adyen**.
1. Select the **Enabled** checkbox to enable the gateway in a production environment.
1. (Optional) Select the **Test Mode** checkbox to use the test payment method.

    To enable Adyen in the production environment, clear the **Test Mode** checkbox.
1. In the **Username** field, enter your Adyen web service. For example, ws@Company.MyCompany.
1. In the **Password** field, enter your Adyen password.
1. n the **Merchant account** field, enter your merchant account code.
1. Click **Save**. The status of **Adyen** is now **Enabled**.

## Enabling Braintree

1. Log into Commerce Manager.
1. Go to **SYSTEM > Store Settings > Payment Gateways**.

    A list of available payment gateways is displayed. Initially, the **Braintree** status is **Disabled**.
1. Click **Braintree**.
1. Select the **Enabled** checkbox to enable the gateway.
1. In the **Public key** field, enter your Braintree public key.
1. In the **Private key** field, enter your Braintree private key.
1. In the **Merchant ID** field, enter your Braintree Merchant ID.
1. In the **Environment** field, enter **production** or **sandbox**.
1. Click **Save**. The status of **Braintree** is now **Enabled**.

## Enabling CardConnect

1. Log into Commerce Manager.
1. Go to **SYSTEM > Store Settings > Payment Gateways**.

    A list of available payment gateways is displayed. Initially, the **CardConnect** status is **Disabled**.
1. Click **CardConnect**.
1. In the **Merchant ID** field, enter your CardConnect Merchant ID.
1. In the **Username** field, enter your CardConnect username.
1. In the **Password** field, enter your CardConnect password.
1. Select the **Enabled** checkbox to enable the gateway.
1. (Optional) Select the **Test Mode** checkbox to use the test payment method.

    To enable CardConnect in the production environment, clear the **Test Mode** checkbox.
1. Click **Save**.

    The status of **CardConnect** is now **Enabled**.

## Enabling Manual Gateway

1. Log into Commerce Manager.
1. Go to **SYSTEM > Store Settings > Payment Gateways**.

    A list of available payment gateways is displayed. Initially, the **Manual** status is **Disabled**.
1. Click **Manual**.
1. On the **Edit Manual** page, select the **Enabled** checkbox to enable the manual gateway.

## Enabling CyberSource

1. Log into Commerce Manager.
1. Go to **SYSTEM > Store Settings > Payment Gateways**.

    A list of available payment gateways is displayed. Initially, the **CyberSource** status is **Disabled**.
1. Click **CyberSource**.
1. In the **Merchant ID** field, enter your CyberSource Merchant ID.
1. In the **SOAP Toolkit Key** field, enter your live or test CyberSource SOAP key.
1. Select the **Enabled** checkbox to enable the gateway in a production environment.
1. (Optional) Select the **Test Mode** checkbox to use the test payment method.

    To enable CyberSource in the production environment, clear the **Test Mode** checkbox.
1. Click **Save**.

    The status of **CyberSource** is now **Enabled**.

## Enabling Authorize.net

1. Log into Commerce Manager.
1. Go to **SYSTEM > Store Settings > Payment Gateways**.

    A list of available payment gateways is displayed. Initially, the **Authorize.net** status is **Disabled**.
1. Click **Authorize.net**.
1. Select the **Enabled** checkbox to enable the gateway in a production environment.
1. (Optional) Select the **Test Mode** checkbox to use the test payment method.

    To enable Authorize.net in the production environment, clear the **Test Mode** checkbox.
1. In the **Login** field, enter your login ID.
1. In the **Password** field, enter your Authorize.net password.
1. Click **Save**.

    The status of **Authorize.net** is now **Enabled**.






