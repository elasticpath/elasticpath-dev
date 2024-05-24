---
title: Integrating with Talon One
nav_label: Talon One Integration
sidebar_position: 1
---

You can integrate Commerce with Talon One in Commerce Manager. Talon One is a promotion management engine that allows you to manage your promotions, referral, and loyalty strategies. This integration allows you to use Commerce catalog data in your Talon One promotions.

The integration supports the following features:

- catalog changes in Commerce changes product data in Talon One. 
- customer changes in Commerce changes customer data in Talon One.

## Talon One Integration Templates

The Talon One Integration uses product and customer request templates that contain all the parameters required for the Talon One Integration to function correctly. The Talon One Integration provides default templates. However, when configuring the integration, you can edit the product and customer templates using [JSONata](http://docs.jsonata.org/overview.html). For example, you can transform the product data from a catalog synchronization into the Talon One format, adding any data you require. Once updated and saved, the integration reviews the attributes provided in the templates and adds any that are not currently present in Talon One.


## Collecting Your Integration Setup Information

Before you configure the integration in Commerce Manager, you need to collect the necessary setup information from Talon One and Commerce Manager.

### Collecting Talon One Setup Information

You can find this information on the Recharge Dashboard in **Apps** > **API tokens**.

| Option | Description |
| --- | --- |
| **API Key** | The Talon One API key you created for this integration. |
| **API Base URL** | Your Base URL for Talon One. For example, `https://yourbaseurl.talon.one/`. |
| **Talon One Admin User Email** | The email address you used for your Talon One Admin User. |
| **Talon One Admin User Password** | The password you used for your Talon One Admin User. |
| **Talon One Catalog ID** | The ID of the Talon One catalog that you want to synchronize your Commerce data with. |

### Collecting Commerce Manager Setup Information

Collect the following Commerce API keys. When you log in to Commerce Manager as a Seller Admin, you can find this information in **SYSTEM** > **Application Keys** in Commerce Manager.

| Commerce API Key | Description                                     |
|:------------------------------------|:------------------------------------------------|
| **API Base URL**                    | Your Commerce API Base URL.  |
| **Client ID**                       | Your Commerce Client ID.     |
| **Client Secret**                   | Your Commerce Client Secret. |

:::note
When integrating with third-party providers, we recommend you use the closest region in the third-party service to reduce latency as much as possible. See [Regions and URLs table](/guides/Getting-Started/elastic-path-domains#regions-and-ur-ls).
:::

## Configuring Integration

1. In Commerce Manager, go to **COMPOSER > Integrations Hub**.
1. Under **Promotions**, click **Talon One**. 
1. Click **Configure**. The integration guides you through the steps you need to follow.
1. Click **Next**. The **Connections** page is displayed.
1. Enter the following details in **Commerce Connection**:

    | Name              | Description                                                                                                                                                                                                                         | 
    |-------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | **Client ID**     | Your Commerce Client ID.                                                                                                                                                                                                            |
    | **Client Secret** | Your Commerce Client Secret                                                                                                                                                                                                         |
    | **Token URL**     | Your Commerce API Token URL. For example, `https://euwest.api.elasticpath.com` (EU) or `https://useast.api.elasticpath.com` (US). See [Regions and URLs](/guides/Getting-Started/elastic-path-domains#regions-and-ur-ls). |

1. Click **Connect**. The authorization is successfully completed.
1. Enter the following details for Talon One:

   | Option | Description |
   | --- | --- |
   | **API Key** | The Talon One API key you created for this integration. |
   | **API Base URL** | Your Base URL for Talon One. For example, `https://yourbaseurl.talon.one/`. |
   | **Talon One Admin User Email** | The email address you used for your Talon One Admin User. |
   | **Talon One Admin User Password** | The password you used for your Talon One Admin User. |
   | **Talon One Catalog ID** | The ID of the Talon One catalog that you want to synchronize your Commerce data with. |

1. Click **Next**. The **Configurations** pane is displayed.
1. Click **Store Configuration Rules**. The **Store Configuration Rules** are automatically configured to allow the integration access to flows, so no further action is required.
1. Click **Next**. The **Templates** pane is displayed. See [Talon One Integration Templates](#talon-one-integration-templates).
1. Click **Finish**. Your integration is enabled.

    In Commerce, when:

    - a catalog is published 
    - customer data is updated or added  
   
   The integration is run and the data updated in Talon One.
