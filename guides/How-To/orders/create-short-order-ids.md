---
title: Create short order IDs
nav_label: Create short order IDs
sidebar_position: 20
---

This example provides instructions to create short order IDs using webhooks.

## Prerequisites

- Ensure that you have an account in the [ngrok](https://ngrok.com/) service to tunnel your development environment externally.
- Ensure that yarn and other dependencies are installed.

## Procedure

1. Run the following command to clone the repository:

    ```bash
    git clone https://github.com/moltin/examples.git
    ```

1. Create a new flow by doing the following:
    1. In Commerce Manager, go to **Flows**.
    1. Click **New Flow**.
    1. In the **Create New Flow** page, enter a name and set the **slug** to *products*.
    1. Enter a description for the flow.
    1. Select **Enabled**.
    1. Click **Save**.

1. Create a new field for the flow by doing the following:
    1. Click the flow you have created on the **Flows** page.
    1. Click **New Field**.
    1. In **Field type**, select one of the following options:
            - **Boolean**
            - **Float**
            - **Integer**
            - **String**
            - **Date**
            - **Relationship**
        1. Enter a name for the new field.
        1. Set the **Slug** to *short_id*.
        1. Enter a description for the flow field.
        1. Select the **Required field?**.
        1. Enter the **Default Value** and number of **Order**.

    1. In the **Validation** section, select the **String Validation Type** and enter the **valid string options**.
    1. Click **Save**.

1. In the terminal, go to the `examples/webhooks/short-order-id` directory.
1. Create an `.env` file in the `/short-order-id` directory and add the keys for the following environment variables:

    - `MOLTIN_CLIENT_ID=`
    - `MOLTIN_CLIENT_SECRET=`
    - `MOLTIN_WEBHOOK_SECRET=`

    Use any value that you want for `MOLTIN_WEBHOOK_SECRET`.

1. Run the following command to start the development server:

    ```bash
    yarn dev
    ```

    By default, the server starts on port 3000. If the server starts on a different port, then use that port number in the next step.

1. Run the following command to start ngrok:

    ```bash
    ngrok http 3000
    ```

    This exposes port 3000 externally.

1. Go to the ngrok status page and make a note of the URL.
1. Create a new integration in Commerce Manager by doing the following:
    1. Log into the Commerce Manager.
    1. Go to **Settings > Integrations**.
    1. Click **New Integration**.
    1. In the **Integration details** section, enter a name and description for your integration.

        We recommend to prefix the name with `DEVELOPMENT` for easier referencing.

    1. In the **Configuration** section, enter the ngrok URL and a secret key.
    1. In the **Observes** section, select **Created** option in **Order**.
    1. Select **Enabled**.
    1. Click **Save**.

## Related Resources

- [Orders API](/docs/api/carts/orders)
- [Integrations API](/docs/api/integrations/integrations-introduction)
