---
title: Integrating with Segment
nav_label: Segment Integration
sidebar_position: 1
---

You can quickly and easily integrate Commerce with Segment using the **Integrations Hub**. 

Segment is a customer data platform that simplifies the process of collecting data and connecting to new tools. With Segment, you can collect, transform, send, and archive your Commerce data, and send the data to your marketing, product, and analytics tools, including data warehouses. When there are customer or order changes in Commerce, Segment first processes the data, then translates and routes it to the destinations you have enabled in Segment. 

![segment diagram](/assets/segment_diagram.png)

The integration is responsible for server-side tracking, for example, order completion, updates, and cancellation events. Your business also requires a frontend component. For example, when customers view product details pages or when products are added to carts, you can integrate Segment Javascript in your frontend to track these events. See [Integrating Segment in Studio](/docs/studio/Integrations/Integrating-segment#using-the-segment-integration) for an example of using Segment in a storefront.

In other words, the integration enables you to track the stages of your customer's journey by integrating Commerce with Segment, using Commerce as the main source of information.

## Segment Integration Templates

The Segment Integration uses the following request templates that contain all parameters required for the Segment Integration to function correctly. The Segment Integration provides default templates. However, when configuring the integration, you can edit these templates to change or add any additional parameters that Segment provides, depending on your business requirements.

The templates use [JSONata](http://docs.jsonata.org/overview.html).

The following table describes the templates available.

| Template | Description |
| --- | --- |
| **Checkout Started Template** | If **Enable Checkout Started Tracking** is selected, you can use this template to define the information to send to Segment. A sample template is available [here](https://try.jsonata.org/I7eKN4Wjn). |
| **Order Completed Template** | If **Enable Order Completed Tracking** is selected, you can use this template to define the information to send to Segment. A sample template is available [here](https://try.jsonata.org/qKuCE2Tgr). |
| **Order Updated Template** | If **Enable Order Updated Tracking** is selected, you can use this template to define the information to send to Segment. A sample template is available [here](https://try.jsonata.org/qVyeWzjLd). |
| **Order Refunded Template** | If **Enable Order Updated Tracking** is selected, you can use this template to define the information to send to Segment. A sample template is available [here](https://try.jsonata.org/CkaB6SRcT). |
| **Order Cancelled Template** | If **Enable Order Cancelled Tracking** is selected, you can use this template to define the information to send to Segment. A sample template is available [here](https://try.jsonata.org/xJyM0nuPY). |
| **Customer Created Template** | If **Enable Customer Created Tracking** is selected, you can use this template to define the information to send to Segment. A sample template is available [here](https://try.jsonata.org/u_8GxyXVX). |
| **Customer Updated Template** | If **Enable Customer Updated Tracking** is selected, you can use this template to define the information to send to Segment. A sample template is available [here](https://try.jsonata.org/u_8GxyXVX). |

## Collecting Your Integration Setup Information

Before you configure the integration in Commerce Manager, you need to collect the necessary setup information from Segment and Commerce Manager.

### Collecting Segment Connection Details

You can find this information in **Settings**.

| Option | Description |
| --- | -- |
| **Host** |  Your Segment API host. Default is `https://api.segment.io`. |
| **Path** | Default is `/v1/batch`. |
| **Write Key** | A unique identifier for your Commerce source. See [Find your write key](https://segment.com/docs/getting-started/02-simple-install/#find-your-write-key). |

### Collecting Commerce Manager Setup Information

Collect the following Commerce API keys. When you log in to Commerce Manager as a Seller Admin, you can find this information in **SYSTEM** > **Application Keys** in Commerce Manager.

:::note
When integrating with third-party providers, we recommend you use the closest region in the third-party service to reduce latency as much as possible. See [Regions and URLs table](/guides/Getting-Started/elastic-path-domains#regions-and-ur-ls).
:::

| Option            | Description                                                                                                                             |
|-------------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| **Client ID**     | Your Commerce Client ID.                                                                                                                |
| **Client Secret** | Your Commerce Client Secret.                                                                                                            |
| **Token URL**     | Your Commerce API Base URL. <ul><li>EU - `https://euwest.api.elasticpath.com/`</li><li>US - `https://useast.api.elasticpath.com/`</li></ul> |

## Configuring Segment Integration

1. In Commerce Manager, go to **COMPOSER > Integrations Hub**.
2. Under **Customer Management**, click **Segment**. 
3. Click **Configure**. The Avalara integration guides you through the steps you need to follow to complete the integration.
4. Click **Next**. The **Connections** page is displayed.
5. Enter the following details in **Commerce Connection**:
   - **Client-ID**  - Your Commerce Client ID.
   - **Client-Secret** - Your Commerce Client Secret.
   - **Token URL** - Your Commerce API Base URL. For example, `https://euwest.cm.elasticpath.com`.
6. Click **Connect**. The authorization is successfully completed.
7. Enter the following details in **Segment Connection**:
    - **Client ID** - Your Segment API host. Default is `https://api.segment.io`.
    - **Path** - Default is `/v1/batch`.
    - **Write Key** - A unique identifier for your Commerce source. See [Find your write key](https://segment.com/docs/getting-started/02-simple-install/#find-your-write-key).
8. Click **Next**. The **Configurations** pane is displayed.
9. Select the Commerce data you want collect in Segment. See [Observable Events](http://localhost:3000/docs/api/integrations/integrations-introduction#observable-events).

    For **Order Tracking Configuration** 

    | Option                               | Description                                                                                                        |
    |--------------------------------------|--------------------------------------------------------------------------------------------------------------------|
    | **Enable Checkout Started Tracking** | By default, `order.created` events are tracked. Alternatively, you might want to select `order.authorized` events. |
    | **Enable Order Completed Tracking**  | By default, `order.paid` events are tracked. Alternatively, you might want to select `order.fulfilled` events.     |
     | **Enable Order Updated Tracking**    | By default, `order.updated` events are tracked.                                                                                                                |
    | **Enable Order Refunded Tracking** | By default, `order.refunded` events are tracked. |
    | **Enable Order Cancelled Tracking** | By default, `order.cancelled` events are tracked. |

   For **Customer Tracking Configuration**

    | Option | Description |
    | --- | --- |
    | **Enable Customer Created Tracking** | By default, `customer.created` events are tracked.  |
    | **Enable Customer Updated Tracking** | By default, `customer.updated` events are tracked. Alternatively, you might want to select `customer.deleted` events. |

10. Click **Next**. The **Templates** pane is displayed. See [Segment Integration Templates](#segment-integration-templates).
11. Click **Finish**. Your integration is enabled.

Once your integration is enabled, the events you have configured are automatically sent to Segment. 

![segment integration enabled](/assets/segment_integration_enabled.png)

