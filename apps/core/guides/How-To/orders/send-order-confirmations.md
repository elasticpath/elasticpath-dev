---
title: Sending Order Confirmations with Zapier
nav_label: Send order confirmations
sidebar_position: 30
---

This example topic describes cloning a repository that handles the incoming webhook to send emails and messages through Zapier and configuring the repository to run it locally. In this example, we use Zapier to send our emails and to host the email template.

## Prerequisites

- Ensure that you have a premium account in Zapier.

## Procedure

1. Create a Zap Custom Webhook URL by doing the following:

    1. In Zapier, click **Create Zap**.
    1. Click **Webhooks**.
    1. In the **Choose app & event > Trigger Event** field, select **Catch Hook as Trigger**.
    1. Click **Continue**.

        A **Custom Webhook URL** is displayed. Make a note of URL to use it for integration.
    1. Click **Continue**.
    1. In **Set up trigger** > **Test Trigger** window, click **Test Trigger**.

    You can now send requests to the Custom Webhook URL.

1. Open Elastic Path Commerce Manager and create a new integration by doing the following:

    1. Log in to Elastic Path Commerce Manager.
    1. Go to **Settings** > **Integrations** and click **New Integration**.
    1. In the **Integration Details** section, enter a name and description.

        We recommend using the prefix **DEVELOPMENT:.Next** with the name of the integration.
    1. In the **Configuration** section, enter the Zapier Custom Webhook URL.
    1. In the **Observes** section, select the **Orders > Paid/Captured** checkbox.
    1. Select **Enabled**.
    1. Click **Save**.
    1. Pay for a new or existing order to trigger the integration.

1. Create a Send Outbound email action in Zapier by doing the following:

    1. In Zapier, select **Request as a Test Trigger**.

        You can now use the payload data for the orders to populate the action fields.

    1. Click **Action**.
    1. In the **App Event** field, search and select one of the following as required:

        - **Email by Zapier**
        - **SMS by Zapier**

        The **Action** > **Send Outbound Email** window is displayed.
    1. In the **Action Event** field, select **Send Outbound Email** and click **Continue**.

        The **Set up action** window is displayed.
    1. Enter the required data.
    1. Click **Continue**.
    1. Click **Test and Continue**.

    An email is sent to the email address specified in the **To** field in the **Set up action** window.

1. Click **Ready to turn on your Zap** and turn on the zap.

    A message with shareable link is displayed.

1. Pay for any new or existing orders to trigger the integration again.

## Related Resources

- [Creating new integrations in Elastic Path Commerce Manager](/docs/commerce-manager/integrations/cm-integrations#creating-a-new-integration)
- [Orders](/docs/api/carts/orders)
