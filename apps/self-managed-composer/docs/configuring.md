---
id: configuring
title: Configuring the Plugin
sidebar_label: Configuring
---

## Plugin Configuration

Before configuring the Self-Managed Commerce Composer plugin, integrations need to be created in the Elastic Path Composable Commerce Composer. These integrations will create webhook URLs that the Self-Managed Commerce Composer plugin can invoke.

For detailed documentation about creating integrations in Composer, see our [Elastic Path Composable Commerce Composer documentation](https://elasticpath.dev/docs/composer).

### Create Elastic Path Composer integrations

1. Login to [Elastic Path Commerce Cloud Commerce Manager in your assigned region](https://elasticpath.dev/guides/Getting-Started/elastic-path-domains). If you don't have credentials, please [open a support case](https://support.elasticpath.com/) requesting Elastic Path Composable Commerce credentials.
2. On the left-hand navigation bar, click "Composer", then "Builder".
3. In the top-right corner, click "+ Add integration".
4. In the dialog that appears, click "Quickstart".
5. In the next dialog, give your integration a name, then choose the "Universal Webhook" trigger, and click "Create trigger".
6. In the top-middle of the screen, click the "Endpoint configuration" icon (looks like a globe), then click on the "Security" tab.
7. Change the Security Type to "Secured by Organization"  and click "+ Add API key". This will generate an API key that you will need to configure in the Self-Managed Commerce Composer plugin.

    ![Endpoint configuration dialog](/assets/composer-endpoint-configuration.png)

8. At the bottom of the screen, click "Test Configuration", and then click "Trigger payload". This will display the webhook URL that you will need to configure in the Self-Managed Commerce Composer plugin.

    ![Trigger payload dialog](/assets/composer-trigger-payload.png)

9. In the top-right of your screen, click the "Save" button.
10. Test your integration by opening a terminal window and running the following command:

    ```shell
    curl {WEBHOOK_URL} --header "api-key: {API_KEY}"
    ```
    
    Make sure to replace the `{WEBHOOK_URL}` and `{API_KEY}` placeholders using the values determined in previous steps before executing it.

11. Return to your browser.
12. At the bottom of the screen, click "Test Runs" and verify that the curl request appears in the test history.
13. Add one or more steps to the integration by clicking the "+" icon below the Universal Webhook Trigger. See [Builder Components](https://elasticpath.dev/docs/composer/builder/components/overview) for more information about how to configure components.
14. In the top-right of your screen, click the "Save" button.

Repeat the steps above for each integration you require. If you want to support all [event types](event-payloads.md), you will need to create a separate integration for each one.

To use your integrations in non-production environments, skip to [Defining plugin setting values](#defining-plugin-setting-values) to configure the Self-Managed Composer plugin for the integrations you created. Before launching in production, make sure to [publish your integration](#publishing-integrations) and update your Self-Managed Composer plugin settings.

#### Publishing integrations

1. Open your integration in Composer.
2. In the top-right corner, click "Publish".
3. In the dialog that appears, click "Save & Publish".
4. On the left side of the screen click the "Marketplace configuration" icon.
5. In the dialog that appears, click "Add to Integrations Hub".
6. In the next dialog, enter an overview description, and click the "Add" button.
7. On the left-hand navigation bar, click "Integrations Hub".
8. Scroll down to the "Uncategorized" section to find the integration you published, and click on it.
9. In the dialog that opens, click the "Configure" button.

    ![Publish dialog](/assets/composer-publish.png)

10. In the next dialog, open the trigger details to view the webhook URL and make note of it. Click the "+ Add API key" button to create an API key and make note of that as well.
11. Click the "Next" button.
12. Click the "Finish" button.

Use the webhook URL and API key from the steps above to define the plugin setting values in the next section.

### Defining plugin setting values

The Composer plugin is configured using the [`extensions.json` mechanism provided by the Extension Point Framework](https://documentation.elasticpath.com/extension-framework/docs/develop-configure/deploy.html#extension-configuration).

To change the Composer plugin configuration, open `extensions/plugins/ext-plugin-config/src/main/resources/extensions.json` in the Self-Managed Commerce source code repository, and update the values described below. See [Backend Integration](backend-integration.md) for a sample `extensions.json` file to use as a starting point.

The setting values supported by the Composer plugin are described below:

| Extension Class                                                               | Setting Key | Description                                                                                  | Example                                                                                                                                    |
|-------------------------------------------------------------------------------|-------------|----------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------|
| `com.elasticpath.plugins.composer.extensions.CustomerEventsExtension`         | API_KEY     | The API key for the Elastic Path Composer integration customer events webhook.               | `api-key`                                                                                                                                  |
| `com.elasticpath.plugins.composer.extensions.CustomerEventsExtension`         | WEBHOOK_URL | The webhook URL for the Elastic Path Composer integration customer events webhook.           | `https://hooks.us-east-2.elasticpathintegrations.com/trigger/SW5zdGFuY2VGbG93Q29uZmlnOjgzN2RhOWI4LTdkNjUtNGZjNy05MzIxLTc4NmY2M2EzMDkzZg==` |
| `com.elasticpath.plugins.composer.extensions.ShoppingCartEventsExtension`     | API_KEY     | The API key for the Elastic Path Composer integration shopping cart events webhook.          | `https://hooks.us-east-2.elasticpathintegrations.com/trigger/SW5zdGFuY2VGbG93Q29uZmlnOjgzN2RhOWI4LTdkNjUtNGZjNy05MzIxLTc4NmY2M2EzMDkzZg==` |
| `com.elasticpath.plugins.composer.extensions.ShoppingCartEventsExtension`     | WEBHOOK_URL | The webhook URL for the Elastic Path Composer integration shopping cart events webhook.      | `https://hooks.us-east-2.elasticpathintegrations.com/trigger/SW5zdGFuY2VGbG93Q29uZmlnOjgzN2RhOWI4LTdkNjUtNGZjNy05MzIxLTc4NmY2M2EzMDkzZg==` |
| `com.elasticpath.plugins.composer.extensions.ShoppingCartItemEventsExtension` | API_KEY     | The API key for the Elastic Path Composer integration shopping cart item events webhook.     | `https://hooks.us-east-2.elasticpathintegrations.com/trigger/SW5zdGFuY2VGbG93Q29uZmlnOjgzN2RhOWI4LTdkNjUtNGZjNy05MzIxLTc4NmY2M2EzMDkzZg==` |
| `com.elasticpath.plugins.composer.extensions.ShoppingCartItemEventsExtension` | WEBHOOK_URL | The webhook URL for the Elastic Path Composer integration shopping cart item events webhook. | `https://hooks.us-east-2.elasticpathintegrations.com/trigger/SW5zdGFuY2VGbG93Q29uZmlnOjgzN2RhOWI4LTdkNjUtNGZjNy05MzIxLTc4NmY2M2EzMDkzZg==` |
| `com.elasticpath.plugins.composer.extensions.OrderReleaseEventsExtension`     | API_KEY     | The API key for the Elastic Path Composer integration shopping cart item events webhook.     | `https://hooks.us-east-2.elasticpathintegrations.com/trigger/SW5zdGFuY2VGbG93Q29uZmlnOjgzN2RhOWI4LTdkNjUtNGZjNy05MzIxLTc4NmY2M2EzMDkzZg==` |
| `com.elasticpath.plugins.composer.extensions.OrderReleaseEventsExtension`     | WEBHOOK_URL | The webhook URL for the Elastic Path Composer integration shopping cart item events webhook. | `https://hooks.us-east-2.elasticpathintegrations.com/trigger/SW5zdGFuY2VGbG93Q29uZmlnOjgzN2RhOWI4LTdkNjUtNGZjNy05MzIxLTc4NmY2M2EzMDkzZg==` |

After updating these values, commit your changes and deploy the Self-Managed Commerce services as usual.

See [Testing](testing.md) for information about verifying the integration functionality.
