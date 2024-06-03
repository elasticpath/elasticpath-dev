---
id: generating
title: Generating PayPal API Credentials
sidebar_label: Generating Credentials
original_id: generating
---

After you connect the PayPal Express Checkout plug-in to Elastic Path Commerce, the next step is to generate the API credentials in the PayPal console. Elastic Path makes secure calls to PayPal so customers can pay with PayPal, credit cards, or debit cards.

1. Log in to your PayPal sandbox or production environment.

1. Click the gear icon.

1. Click **Account Settings**.

1. In the **Account access** section, go to **API access**.

1. Click **Update**.

1. In the **Custom checkout experience** section, go to the **`NVP/SOAP` API integration (Classic)** section.

1. Click **Manage API credentials**.

1. In the **View or Remove API Signature** page, record the API username, password, and signature.

    :::note
    This information is required to enter the values into the following parameters when you configure the plug-in through Commerce Manager:

    - `APIUsername`
    - `APIPassword`
    - `APISignature`
    :::
