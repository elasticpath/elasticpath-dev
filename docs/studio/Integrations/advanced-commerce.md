---
title: Integrating Advanced Commerce GrapheneHC
nav_label: Advanced Commerce GrapheneHC
sidebar_position: 61
---

You can quickly and easily integrate Studio with Advanced Commerce GrapheneHC. Once configured, you can build a search page in Studio, using Studio's built-in Advanced Commerce GrapheneHC component, enabling you to leverage the Advanced Commerce GrapheneHC search engine in your storefront.

You can sync your Commerce catalogs with the Elastic Path Composable Commerce Advanced Commerce GrapheneHC integration in Integrations Hub so that all catalog changes are synced with Studio, ensuring that your storefront's search is automatically kept up-to-date with the latest changes.

## Prerequisites

You must have the following before configuring the Advanced Commerce GrapheneHC integration.

1. A [published catalog](/docs/commerce-manager/product-experience-manager/catalogs/publishing-catalogs) in Product Experience Manager.
2. A Studio storefront. 
3. An Advanced Commerce GrapheneHC account. 

## Integrating Advanced Commerce GrapheneHC: An Overview

Follow these steps to integrate with Advanced Commerce GrapheneHC.

1. In Commerce Manager, go to Composer, configure an [Integrating Advanced Commerce (GrapheneHC) integration](/docs/composer/integration-hub/site-search/advanced-commerce) in [Integrations Hub](/docs/composer/integration-hub/integrations-hub). 
2. In Studio, configure the [Advanced Commerce Graphene HC](#configure-the-algolia-integration) integration. 
3. In **Advanced Commerce Graphene HC**, configure your [Advanced Commerce (GrapheneHC) settings](#configure-your-algolia-settings). 
4. In Studio, create a [**Search**](#create-a-search-page) page that uses a **Graphenehc Collection** component.

## Configure the Advanced Commerce Graphene HC Integration

Follow these steps to configure the **Advanced Commerce Graphene HC** integration in Studio.

1. Select **Settings** > **Integrations**.
2. Navigate to **Search**.
3. Select **+** next to **Advanced Commerce Graphene HC**.
4. Configure the settings. 

    | Option         | Description                                 |
    |:---------------|:--------------------------------------------|
    | **Domain Key** | Your Advanced Commerce domain key.          |
    | **API Key**    | Your Advanced Commerce Graphene HC API key. |
    | **Secret**     | Your Advanced Commerce Graphene HC Secret.  |
5. Select **Connect Account**. 

## Configure your Advanced Commerce Graphene HC Settings

In Advanced Commerce Graphene HC, configure the facets that you want to make available to Studio. See the documentation provided with Advanced Commerce Graphene HC for more information.

## Create a Search page

Follow these steps to create a search page that uses an **Graphenehc Collection** component in Studio.

1. Select **Content** > **Website**.
2. Select **+ New Page**. A list of templates is displayed.
3. Select **Blank page**. A list of components is displayed.
4. Select **Graphenehc Collection**.
5. Select the gear icon to display the page settings.

![page settings icon](/assets/cxsgearicon.png)

6. Configure the following settings:

    | Setting | Description |
    | --- | --- |
    | Title | Search Results |
    | Studio Name | Search results |
    | Page path | search |

7. Select **Save only** to close page settings.
8. The **Graphenehc Collection** component allows you to specify which facets you want to use for filtering and their order. Select the **Graphenehc Collection** component to display the toolbar. 
9. Select **Properties**.

![graphenehc collection properties](/assets/studio/graphenehc-properties.png)

10. Configure the component as follows:

    | Option | Description                                                                                                                                                                                                                                                                                                                                |
    | --- |--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | **Filters** | Configures whether the refinement list is displayed on the left or right side of the search items.                                                                                                                                                                                                                                         |
    | **Columns** | Configures how many search items are displayed in each row.                                                                                                                                                                                                                                                                                |
    | **Gap** | Configures the gap between search items.                                                                                                                                                                                                                                                                                                   |
    | **Facets** | Specify a comma separated list of Advanced Commerce Graphene HC facet names that you want to display on your search results page. For example, **color, price, size**. Add the facets in the order that you want them displayed on your search results page. If **Facets** is blank, all facets are displayed on your search results page. |

    ![graphenehc collection properties example](/assets/studio/graphenehc_properties_example.png)

11. When you are happy with your page, select the gear icon to display the page settings.
12. Select **Save and Publish**.

Your published **Search Results** looks similar to this.

![published search results page](/assets/studio/graphenehc_search_results.png)




