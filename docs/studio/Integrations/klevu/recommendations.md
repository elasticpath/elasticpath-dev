---
title: Set up Klevu Recommendations 
nav_label: Set up Klevu recommendations
sidebar_position: 30
---

Klevu Recommendations leverage advanced AI and machine learning to provide personalized and relevant product suggestions, enhancing user engagement and driving higher conversion rates for your business. By integrating seamlessly into the shopping experience and offering detailed insights, Klevu helps you optimize your product discovery and recommendation strategies.

## Klevu Recommendation Queries

Klevu recommendation queries are specific types of requests made to the Klevu API to fetch personalized product recommendations for shoppers based on various parameters. 

| Query                    | Search params   |
|--------------------------|-----------------|
| Similar products         |  |
| Trending products        |  |
| Recently viewed products |  |
| New arrivals | |
| Bought together | |
| KMC recommendations | |

## Creating a page using a Klevu recommendations Component

Follow these steps to create a page that uses a **Klevu recommendations** component in Studio.

1. Select **Content** > **Website**.
2. Select **+ New Page**. A list of templates is displayed.
3. Select **Blank page**. A list of components is displayed.
4. Select **Search**.
5. Select the gear icon to display the page settings.

![page settings icon](/assets/cxsgearicon.png)

6. Configure the following settings:

    | Setting | Description     |
    | --- |-----------------|
    | Title | Recommendations |
    | Studio Name | Recommendations |
    | Page path | recommendations |

7. Select **Save only** to close page settings.
8. The **Klevu recommendations** component allows you to filter on your product attributes such as brand, color and,so on, and their order. Select the **Search** component to display the toolbar. 
9. Select **Properties**.

    ![graphenehc collection properties](/assets/studio/graphenehc-properties.png)

10. Configure the component as follows:

    | Option       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
    |--------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | **Features** | Configures whether you filter the product recommendations by: <ul><li>**Title** - this is useful for sorting or searching for products based on the text in their titles. For example, displaying products in alphabetical order based on their titles or showing products that contain specific keywords in their titles.</li><li>**Price** - this useful for sorting or displaying products based on their price. For example, allowing users to set a minimum and maximum price range for the products they are interested in or enabling users to sort products from lowest to highest price or vice versa..</li></ul>. |
    | Hover |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
    | **Columns**  | Configures how many search items are displayed in each row.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
    | **Gap**      | Configures the gap between search items.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
    | **Query** | A list of queries from Klevu. Each query has different **Search params**. See [Klevu Recommendation Queries](#klevu-recommendation-queries).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

    ![graphenehc collection properties example](/assets/studio/graphenehc_properties_example.png)

12. When you are happy with your page, select the gear icon to display the page settings.
13. Select **Save and Publish**.

Your published **Search Results** looks similar to this.

![published search results page](/assets/studio/graphenehc_search_results.png)





