---
title: Getting Started
nav_label: Getting Started
sidebar_position: 1
---

You can quickly and easily integrate Studio with Klevu. Klevu is an advanced AI-driven search and product discovery platform specifically designed for e-commerce websites. Once configured, using Studio's built-in Klevu integration, you can:

- build a search page in Studio, enabling you to leverage the Klevu search engine in your Studio storefronts.
- build a page in Studio that uses a **Klevu recommendations** component to leverage Klevu Recommendations, designed to enhance your shoppers experience by providing personalized product suggestions.

## Klevu Events

Reporting user interaction with Klevu is crucial to allow the machine learning algorithms to accurately rank items. By reporting user interactions, such as clicks, searches, and purchases, Klevu's algorithms can better understand which products are most relevant to users.

The Klevu integration is using two Klevu events, searches and clicks. Anytime a shopper searches uses the Studio search page and/or clicks on a product, you can see this in the Klevu dashboard.

## Prerequisites

You must have the following before configuring the Klevu integration in Studio.

1. You must have a Shopify store with the following:

    - the Klevu app installed. If you don't have a Klevu account, it is automatically created when you install the Klevu app on your shopify store.
    - configured a Studio account and associated it with the Shopify store.

1. To configure the Klevu integration in Studio you need the following:

    | Option | Description                                                                                                                                                             |
    |--------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | **API key** | <ol><li>Go to your Klevu dashboard in your Shopify storefront.</li><li>Go to **Store Settings**.</li><li>In **API Key**, copy the API key.</li></ol>                    |
    | **Search URL** | <ol><li>Go to your Klevu dashboard in your Shopify storefront.</li><li>Go to **Store Settings**.</li><li>In **APIv2 Cloud Search URL:**, copy the search URL.</li></ol> |

## Integrating Klevu: An Overview

Follow these steps to integrate with Klevu.

1. In Studio, configure the [Klevu](#configure-the-algolia-integration) integration.
1. In Studio, create a [**Search**](/docs/studio/Integrations/klevu/search) page that uses a **Search** component.
1. In Studio, create a page that uses a [**Klevu recommendations**](/docs/studio/Integrations/klevu/recommendations) component.

## Configure the Klevu Integration

Follow these steps to configure the **Klevu** integration in Studio.

1. Select **Settings** > **Integrations**.
2. Navigate to **Search**.
3. Select **+** next to **Klevu**.
4. Configure the settings. 

    | Option         | Description                                                                                                                                                                                                                  |
    |:---------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | **API Key**    | Your Klevu API key. See [Prerequisites](#prerequisites).                                                                                                                                                                     |
    | **Secret**     | Your Klevu Search URl in the format `https://klevuseachURl/cs/v2/search` where _klevusearchurl_ is the search URL you copied in [Prerequisites](#prerequisites). For example, `https://uscs33v2.ksearchnet.com/cs/v2/search`. |
5. Select **Connect Account**.

