---
title: Integrating Klevu
nav_label: Klevu
sidebar_position: 201.5
---

You can quickly and easily integrate Studio with Klevu. Klevu is an advanced AI-driven search and product discovery platform specifically designed for e-commerce websites. Once configured, you can build a search page in Studio, using Studio's built-in Klevu component, enabling you to leverage the Klevu search engine in your Studio storefronts.

## Prerequisites

You must have the following before configuring the Klevu integration in Studio.

1. You must have a Shopify store with the following:

    - the Klevu app installed. If you don't have a Klevu account, it is automatically created when you install the klevu app on your shopify store.
    - configured a Studio account and associated it with the Shopify store.

1. To configure the Klevu integration in Studio you need the following:

    | Option | Description                                                                                                                                                             |
    |--------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | **API key** | <ul><li>Go to your Klevu dashboard in your Shopify storefront.</li><li>Go to **Store Settings**.</li><li>In **API Key**, copy the API key.</li></ul>                    |
    | **Search URL** | <ul><li>Go to your Klevu dashboard in your Shopify storefront.</li><li>Go to **Store Settings**.</li><li>In **APIv2 Cloud Search URL:**, copy the search URL.</li></ul> |

## Integrating Klevu: An Overview

Follow these steps to integrate with Klevu.

1. In Studio, configure the [Klevu](#configure-the-algolia-integration) integration.
1. In Studio, create a [**Search**](#create-a-search-page) page that uses a **Search** component.

## Configure the Klevu Integration

Follow these steps to configure the **Klevu** integration in Studio.

1. Select **Settings** > **Integrations**.
2. Navigate to **Search**.
3. Select **+** next to **Klevu**.
4. Configure the settings. 

    | Option         | Description                                                                                                                                                                                                                       |
    |:---------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | **API Key**    | Your Klevu API key. See [Prerequisites](#prerequisites).                                                                                                                                                                          |
    | **Secret**     | Your Klevu Search URl in the format `https://_klevuseachURl_/cs/v2/search` where _klevusearchurl_ is the search URL you copied in [Prerequisites](#prerequisites). For example, **https://uscs33v2.ksearchnet.com/cs/v2/search**. |
5. Select **Connect Account**.

## Create a Search page

Follow these steps to create a search page that uses a **Search** component in Studio.

1. Select **Content** > **Website**.
2. Select **+ New Page**. A list of templates is displayed.
3. Select **Blank page**. A list of components is displayed.
4. Select **Search**.
5. Select the gear icon to display the page settings.

![page settings icon](/assets/cxsgearicon.png)

6. Configure the following settings:

    | Setting | Description |
    | --- | --- |
    | Title | Search Results |
    | Studio Name | Search results |
    | Page path | search |

7. Select **Save only** to close page settings.
8. The **Search** component allows you to filter on your product attributes such as brand, color and,so on, and their order. Select the **Search** component to display the toolbar. 
9. Select **Properties**.

    ![graphenehc collection properties](/assets/studio/graphenehc-properties.png)

10. Configure the component as follows:

    | Option | Description                                                                                                                                                                                                                                                                                                                                |
    | --- |--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | **Filters** | Configures whether the refinement list is displayed on the left or right side of the search items.                                                                                                                                                                                                                                         |
    | **Columns** | Configures how many search items are displayed in each row.                                                                                                                                                                                                                                                                                |
    | **Gap** | Configures the gap between search items.                                                                                                                                                                                                                                                                                                   |

    ![graphenehc collection properties example](/assets/studio/graphenehc_properties_example.png)

11. When you are happy with your page, select the gear icon to display the page settings.
12. Select **Save and Publish**.

Your published **Search Results** looks similar to this.

![published search results page](/assets/studio/graphenehc_search_results.png)

## Klevu Events

Reporting user interaction with Klevu is crucial to allow the machine learning algorithms to accurately rank items. By reporting user interactions, such as clicks, searches, and purchases, Klevu's algorithms can better understand which products are most relevant to users. 

The Klevu integration is using two Klevu events, searches and clicks. Anytime a shopper searches uses the Studio search page and clicks on a product, you can se



