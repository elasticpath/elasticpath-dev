---
title: Integrating Algolia
nav_label: Algolia
sidebar_position: 61
---

You can quickly and easily integrate Studio with Algolia. Once configured, you can build a search page in Studio, using Studio's built-in Algolia component, enabling you to leverage Algolia's powerful search engine in your storefront.

You can sync your Commerce catalogs with the Commerce Algolia integration so that all catalog changes are synced with Studio, ensuring that your storefront's search is automatically kept up-to-date with the latest changes.

## Prerequisites

You must have the following before configuring the Algolia integration.

1. A [published catalog](/docs/commerce-manager/product-experience-manager/catalogs/publishing-catalogs) in Product Experience Manager.
2. A Studio storefront. 
3. An Algolia account. 

## Best Practices

Follow these steps to integrate with Algolia.

1. In Commerce Manager, go to Composer, configure an [Algolia integration](/docs/composer/integration-hub/site-search/algolia) in [Integrations Hub](/docs/composer/integration-hub/integrations-hub). 
2. In Studio, configure the [Algolia integration](#configure-the-algolia-integration). 
3. In Algolia, configure your [Algolia settings](#configure-your-algolia-settings). 
4. In Studio, create a [**Search** page](#create-a-search-page) that uses an **Algolia Collection** component.

## Configure the Algolia Integration

Follow these steps to configure the Algolia integration in Studio.

1. Select **Settings** > **Integrations**.
2. Navigate to **Payment & Storefront**.
3. Select **+** next to **Algolia**.
4. Configure the Algolia settings. 

    | Option                      | Description                                   |
    |:----------------------------|:----------------------------------------------|
    | **Application ID**          | Your Application ID for your Algolia account. |
    | **Search only API Key key** | Your Admin API Key for your Algolia account.  |
    | **Index**                   | The Index ID of the catalog you want to use.  |
5. Select **Connect Account**. 

## Configure your Algolia Settings

Follow these steps to configure your settings in Algolia.

1. Log into Algolia.
2. Select **Search**.
3. Select your Algolia index.
4. Select the **Configuration** tab.
5. Under **RELEVANCE ESSENTIALS**, select **Searchable attributes**. 
6. Add the attributes you want to use.
7. Select **Review and Save Settings**.
8. Under **FILTERING AND FACETING**, select **Facets**.
9. Add the attributes you want to use and set each attribute as **searchable**.
10. Select **Review and Save Settings**.
11. Under **FILTERING AND FACETING**, select **Facet Display**.
12. Add the facets to display.
13. Select **Review and Save Settings**.

## Create a Search page

Follow these steps to create a search page that uses an **Algolia Collection** component in Studio.

1. Select **Content** > **Website**.
2. Select **+ New Page**. A list of templates is displayed.
3. Select **Blank page**. A list of components is displayed.
4. Select **Algolia Collection**.
5. Select the gear icon to display the page settings.

![page settings icon](/assets/cxsgearicon.png)

6. Configure the following settings:

    | Setting | Description |
    | --- | --- |
    | Title | Search Results |
    | Studio Name | Search results |
    | Page path | search |

7. Select **Save only** to close page settings.
8. The **Algolia Collection** component allows you to specify which attributes you want to use for filtering and their order. Select the first item in the list. The item properties are displayed.

![algolia collection properities](/assets/algolia-component.png)

9. Select **Item** and enter a label for your filter. For example, if you want to use **ep_categories.lvl1** to display your top-level nodes, you could label this **Collections**.
10. In **Attribute**, enter the Algolia attribute you want to use. For example, **ep_categories.lvl1** to display your top-level nodes.
11. In **Widget**, select one of the following:

    - **Refinements List** - Allows you to multi-select items from a data set.
    - **Menu** - Allows you to filter by a specific hierarchy.
    - **Rating menu** - Allows you to filter by rating values.
   
    You can add as many attributes as you want. 
12. Select **+** to add additional attributes.
13. When you are happy with your page, select the gear icon to display the page settings.
14. Select **Save and Publish**.

Your published **Search Results** looks similar to this.

![published search results page](/assets/searchresults.png)




