---
id: backend-integration
title: Backend Integration
sidebar_label: Backend Integration
---

The Composer plugin for Self-Managed Commerce is an implementation of the following extension points:

- [Shopping Cart Events Extension Point](https://documentation.elasticpath.com/extension-framework/docs/extension-points/shopping-cart-events.html).
- [Shopping Cart Item Events Extension Point](https://documentation.elasticpath.com/extension-framework/docs/extension-points/shopping-cart-item-events.html)
- [Customer Events Extension Point](https://documentation.elasticpath.com/extension-framework/docs/extension-points/customer-events.html)
- [Order Release Events Extension Point](https://documentation.elasticpath.com/extension-framework/docs/extension-points/order-release-events.html)

Therefore this plugin is compatible with Self-Managed Commerce 8.6.0 and later.

## Plugin Integration

1. Open the `ext-plugin-config` module in your `ep-commerce` source code repository.
2. Open `pom.xml` and add the following within the `<dependencies>` section:

    ```xml
    <dependency>
        <groupId>com.elasticpath.xpf</groupId>
        <artifactId>ep-composer-plugin</artifactId>
        <version>1.0.0</version>
    </dependency>
    ```

3. Open `extensions/plugins/ext-plugin-config/src/main/resources/extensions.json` and add the following entry to the `extensions` array:

    ```json
    {
        "extensions": [
            {
                "identifier": {
                    "pluginId": "elasticpath-composerplugin-*",
                    "extensionClass": "com.elasticpath.plugins.composer.extensions.CustomerEventsExtension",
                    "extensionPointKey": "CUSTOMER_EVENT"
                },
                "enabled": true,
                "priority": 1050,
                "defaultSelectorMode": "DEFAULT_ALL",
                "settings": [
                    {
                        "key": "API_KEY",
                        "dataType": "SHORT_TEXT",
                        "collectionType": "SINGLE",
                        "values": [
                            {
                                "value": "my-api-key"
                            }
                        ]
                    },
                    {
                        "key": "WEBHOOK_URL",
                        "dataType": "SHORT_TEXT",
                        "collectionType": "SINGLE",
                        "values": [
                            {
                                "value": "my-webhook-url"
                            }
                        ]
                    }
                ]
            },
            {
                "identifier": {
                    "pluginId": "elasticpath-composerplugin-*",
                    "extensionClass": "com.elasticpath.plugins.composer.extensions.ShoppingCartEventsExtension",
                    "extensionPointKey": "SHOPPING_CART_EVENT"
                },
                "enabled": true,
                "priority": 1050,
                "defaultSelectorMode": "DEFAULT_ALL",
                "settings": [
                    {
                        "key": "API_KEY",
                        "dataType": "SHORT_TEXT",
                        "collectionType": "SINGLE",
                        "values": [
                            {
                                "value": "my-api-key"
                            }
                        ]
                    },
                    {
                        "key": "WEBHOOK_URL",
                        "dataType": "SHORT_TEXT",
                        "collectionType": "SINGLE",
                        "values": [
                            {
                                "value": "my-webhook-url"
                            }
                        ]
                    }
                ]
            },
            {
                "identifier": {
                    "pluginId": "elasticpath-composerplugin-*",
                    "extensionClass": "com.elasticpath.plugins.composer.extensions.ShoppingCartItemEventsExtension",
                    "extensionPointKey": "SHOPPING_CART_ITEM_EVENT"
                },
                "enabled": true,
                "priority": 1050,
                "defaultSelectorMode": "DEFAULT_ALL",
                "settings": [
                    {
                        "key": "API_KEY",
                        "dataType": "SHORT_TEXT",
                        "collectionType": "SINGLE",
                        "values": [
                            {
                                "value": "my-api-key"
                            }
                        ]
                    },
                    {
                        "key": "WEBHOOK_URL",
                        "dataType": "SHORT_TEXT",
                        "collectionType": "SINGLE",
                        "values": [
                            {
                                "value": "my-webhook-url"
                            }
                        ]
                    }
                ]
            },
            {
                "identifier": {
                    "pluginId": "elasticpath-composerplugin-*",
                    "extensionClass": "com.elasticpath.plugins.composer.extensions.OrderReleaseEventsExtension",
                    "extensionPointKey": "SHOPPING_CART_ITEM_EVENT"
                },
                "enabled": true,
                "priority": 1050,
                "defaultSelectorMode": "DEFAULT_ALL",
                "settings": [
                    {
                        "key": "API_KEY",
                        "dataType": "SHORT_TEXT",
                        "collectionType": "SINGLE",
                        "values": [
                            {
                                "value": "my-api-key"
                            }
                        ]
                    },
                    {
                        "key": "WEBHOOK_URL",
                        "dataType": "SHORT_TEXT",
                        "collectionType": "SINGLE",
                        "values": [
                            {
                                "value": "my-webhook-url"
                            }
                        ]
                    }
                ]
            }
        ]
    }
    ```

4. The `API_KEY` and `WEBHOOK_URL` values above will need to be updated with the correct values later, but for now just leave them as-is.

5. Commit your changes.

6. Follow the steps in [Configuring the Plugin](configuring.md) to finish setting up the plugin.
