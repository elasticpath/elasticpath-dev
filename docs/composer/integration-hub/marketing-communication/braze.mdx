---
title: Integrating with Braze
nav_label: Braze Integration
sidebar_position: 30
---

You can quickly and easily integrate Commerce with Braze using the **Integrations Hub** in Commerce Manager. Integrating with Braze allows you to send customer profile information of Commerce to the Braze platform. Additionally, this integration allows a user to declare how the data from Commerce is mapped to Braze endpoints.

![Braze Integration](/assets/Braze-integration.png)

:::note
When integrating with third party providers, we recommend you use the closest region in the third-party service to reduce latency as much as possible. See [Regions and URLs table](/guides/Getting-Started/elastic-path-domains#regions-and-ur-ls).
:::

## Prerequisites

- Ensure that you have collected your **Client-ID** and **Client-Secret** from Commerce Manager. See [Application Keys](/docs/commerce-manager/application-keys/application-keys-cm).
- Ensure that you have received a URI from Braze to interact with the Braze services once you have registered as a Braze customer.
- Ensure that you have created your Braze API Key. The following procedure describes how to create your API key:

    1. Log into Braze. 
    1. Under **SETTINGS**, click **Developer Console**.
    1. Go to **API Settings** tab.
    1. Under **Rest API Keys** section, click **+Create New API Key**.
    1. In the **API Key Name** field, enter a name for your API key.
    1. To set minimum permissions for this integration, select **users.track**, **users.delete**, and **email.status** checkboxes.
    1. Click **Save API Key**.
    
        A list of your API keys will be displayed once you have saved your new API key. Copy your created API Key from the list.

## Configuring Braze Integration

1. In Commerce Manager, go to **COMPOSER** > **Integrations Hub**.
1. Under **Marketing & Communication**, click **Braze**. The integration guides you through the steps you need to follow to complete the integration.
1. Click **Configure**. The **Trigger details** consist of some details about the integration.
1. Click **Next**. The **Configuration** page is displayed.
1. Enter the following details in **Commerce Connection**:
    - **Client-ID**  - Your Commerce Client ID.
    - **Client-Secret** - Your Commerce Client Secret.
    - **Token URL** - Your Commerce API Token URL.

    **Token URL** for:
    - EU - `https://useast.api.elasticpath.com/oauth/access_token`
    - US - `https://useast.api.elasticpath.com/oauth/access_token`

1. Click **Connect**. The authorization is successfully completed.
1. Enter your **Braze API Key**. See [Prerequisites](#prerequisites).
1. Enter your **Braze URI**.
1. Click **Next**.
    
    In **EPCC Customer Events**, the **User Track** and **Change Email Subscription Template** checkboxes are selected by default for:
     - **EPCC Customer Created**
     - **EPCC Customer Updated**
     - **EPCC Customer Deleted**
 
    When these checkboxes are selected, any changes in the customer profile information in Commerce causes the webook event to be created to change the customer profile information in Braze.

    The transformation templates are implemented using the JSONata query language and you must must adhere to the JSONata standards. For example, you can use the following template if you want to concatenate the `external id`, `name`, and `email` using a colon delimiter:

    ```json
    {
	"attributes": [{
		"external_id": id,
        "concatenated_info": $join([external_id,':',name,':',email])
	    }]
    }
    ```
1. Click **Finish**. Your integration is enabled. 

    The three new webhooks created will be displayed on the **SYSTEM** > **Store Settings** > **Webhooks** page.

## Using Braze Integration

You can extend or modify your configuration once you have enabled the integration. The following scenario explains how to change your configuration details in your integration:

1. Log into Commerce Manager. 
1. Go to **CUSTOMERS and ACCOUNTS** > **Customers**.
1. Create a new customer. See [Creating Customers](/docs/commerce-manager/customer-management/cm-customers).
1. Go to **COMPOSER** > **Integrations Hub** > **Executions** to see that the new customer event has been initiated.
1. Extend your customer profile to add more customer-specific information and create new flows and fields. See [creating Flows in Commerce Manger](/docs/commerce-manager/commerce-extension/commerce-extension-in-cm).
    
    For example, create a new field know as `demo_attribute`.

1. Log into Braze and search for the new customer that you have created in Commerce Manager.

    You can see the customer name in the **Custom Attributes** column.

1. Go to **Summary > Reconfigure**.
1. On the **Customer Event Mapping** page, modify your transformation template under **EPCC Customer Updated** section.

    For example, to map `demo_attribute` in Braze, modify the **User Track** transformation template under **EPCC Customer Updated** section:

    ```json
    {
        "attributes":[{
            "external_id": id,
            "email": email,
            "name": name,
            "last_name": last_name,
            "customer_status": status,
            "demo_epcc_attr" : demo_attribute
        ]}
    }
    ```
    
    The transformation templates are implemented using the JSONata query language and you must must adhere to the JSONata standards.

1. Click **Finish** to save your changes.

## Demos

Watch the following video to learn how to integrate Commerce with Braze using the **Integrations Hub** in Commerce Manager:

<iframe width="560" height="315" src="https://www.youtube.com/embed/l9Tg5izBrN4" title="Configuring Braze" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
